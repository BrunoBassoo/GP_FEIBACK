'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { GroupMemberCard } from '@/components/shared/GroupMemberCard'
import { 
  Users, 
  Loader2, 
  AlertCircle, 
  ChevronLeft, 
  Calendar,
  MessageSquare,
  BookOpen,
  Search,
  UserPlus,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'

interface GroupMember {
  id: string
  joinedAt: string
  user: {
    id: string
    name: string
    studentId: string
  }
}

interface GroupMembership {
  id: string
  joinedAt: string
  group: {
    id: string
    name: string
    description?: string
    createdAt: string
    _count: { members: number }
    class: {
      id: string
      name: string
      code: string
      semester: string
    }
    members: GroupMember[]
  }
}

interface StudentData {
  student: {
    groupMemberships: GroupMembership[]
  }
  stats: {
    totalPoints: number
    feedbackReceived: number
    feedbackGiven: number
    groupsJoined: number
  }
}

export default function StudentGroupsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [studentData, setStudentData] = useState<StudentData | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set())

  console.log('StudentGroupsPage rendered', { status, session: session?.user, loading })

  useEffect(() => {
    if (status === 'loading') return

    if (!session) {
      router.push('/login')
      return
    }

    if (session.user.role !== 'STUDENT') {
      router.push('/dashboard')
      return
    }

    fetchStudentData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, status])

  const fetchStudentData = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch('/api/students/me')

      if (!response.ok) {
        throw new Error('Erro ao carregar dados do estudante')
      }

      const data = await response.json()
      setStudentData(data)
      
      // Expand all groups by default
      const groupIds = new Set(data.student.groupMemberships.map((m: GroupMembership) => m.group.id))
      setExpandedGroups(groupIds)
    } catch (error) {
      console.error('Error fetching student data:', error)
      setError(error instanceof Error ? error.message : 'Erro desconhecido')
    } finally {
      setLoading(false)
    }
  }

  const handleFeedbackSubmitted = () => {
    // Refresh data after feedback submission
    fetchStudentData()
  }

  const toggleGroupExpansion = (groupId: string) => {
    setExpandedGroups(prev => {
      const newSet = new Set(prev)
      if (newSet.has(groupId)) {
        newSet.delete(groupId)
      } else {
        newSet.add(groupId)
      }
      return newSet
    })
  }

  const filteredMemberships = studentData?.student.groupMemberships.filter(membership => {
    if (!searchQuery) return true
    
    const query = searchQuery.toLowerCase()
    return (
      membership.group.name.toLowerCase().includes(query) ||
      membership.group.class.name.toLowerCase().includes(query) ||
      membership.group.class.code.toLowerCase().includes(query) ||
      membership.group.members.some(member => 
        member.user.name.toLowerCase().includes(query) ||
        member.user.studentId.toLowerCase().includes(query)
      )
    )
  })

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-blue-600" />
                <p className="text-gray-600">Carregando grupos...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!session || session.user.role !== 'STUDENT') {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Header */}
          <div className="mb-6">
            <Link
              href="/student/dashboard"
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 mb-4"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Voltar ao Dashboard
            </Link>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Meus Grupos
                </h1>
                <p className="mt-2 text-gray-600">
                  Gerencie seus grupos, visualize membros e dê feedbacks aos seus colegas
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Users className="h-5 w-5 mr-2" />
                  {studentData?.stats.groupsJoined || 0} {studentData?.stats.groupsJoined === 1 ? 'grupo' : 'grupos'}
                </Badge>
              </div>
            </div>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-md p-4 flex items-start">
              <AlertCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-red-800 font-medium">Erro ao carregar dados</p>
                <p className="text-red-600 text-sm mt-1">{error}</p>
                <Button 
                  onClick={fetchStudentData} 
                  variant="outline" 
                  size="sm" 
                  className="mt-3"
                >
                  Tentar Novamente
                </Button>
              </div>
            </div>
          )}

          {/* Search Bar */}
          {studentData && studentData.student.groupMemberships.length > 0 && (
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Buscar por grupo, disciplina ou membro..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-6 text-base"
                />
              </div>
            </div>
          )}

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total de Grupos
                </CardTitle>
                <Users className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">
                  {studentData?.stats.groupsJoined || 0}
                </div>
                <p className="text-xs text-muted-foreground">
                  grupos ativos
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Feedbacks Dados
                </CardTitle>
                <MessageSquare className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  {studentData?.stats.feedbackGiven || 0}
                </div>
                <p className="text-xs text-muted-foreground">
                  avaliações feitas
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Feedbacks Recebidos
                </CardTitle>
                <MessageSquare className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">
                  {studentData?.stats.feedbackReceived || 0}
                </div>
                <p className="text-xs text-muted-foreground">
                  avaliações recebidas
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Groups List */}
          {!studentData || studentData.student.groupMemberships.length === 0 ? (
            <Card>
              <CardContent className="pt-6">
                <div className="text-center py-12">
                  <Users className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Nenhum grupo encontrado
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Você ainda não faz parte de nenhum grupo. Entre em contato com seu professor para ser adicionado a um grupo de trabalho.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <UserPlus className="h-5 w-5" />
                    <span>Os professores são responsáveis por criar e gerenciar grupos</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : filteredMemberships && filteredMemberships.length === 0 ? (
            <Card>
              <CardContent className="pt-6">
                <div className="text-center py-12">
                  <Search className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Nenhum resultado encontrado
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Não encontramos grupos que correspondam à sua busca
                  </p>
                  <Button variant="outline" onClick={() => setSearchQuery('')}>
                    Limpar Busca
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {filteredMemberships?.map((membership) => {
                const isExpanded = expandedGroups.has(membership.group.id)
                
                return (
                  <Card key={membership.id} className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <CardTitle className="text-xl">
                              {membership.group.name}
                            </CardTitle>
                            <Badge variant="secondary">
                              {membership.group._count.members} {membership.group._count.members === 1 ? 'membro' : 'membros'}
                            </Badge>
                          </div>
                          
                          <CardDescription className="mt-2 flex items-center space-x-4">
                            <span className="flex items-center">
                              <BookOpen className="h-4 w-4 mr-1" />
                              {membership.group.class.code} - {membership.group.class.name}
                            </span>
                            <Badge variant="outline" className="text-xs">
                              {membership.group.class.semester}
                            </Badge>
                          </CardDescription>

                          {membership.group.description && (
                            <p className="text-sm text-gray-700 mt-3 bg-white rounded-md p-3 border border-gray-200">
                              {membership.group.description}
                            </p>
                          )}
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleGroupExpansion(membership.group.id)}
                          className="ml-4"
                        >
                          {isExpanded ? (
                            <>
                              <ChevronUp className="h-5 w-5 mr-1" />
                              Ocultar
                            </>
                          ) : (
                            <>
                              <ChevronDown className="h-5 w-5 mr-1" />
                              Expandir
                            </>
                          )}
                        </Button>
                      </div>
                    </CardHeader>

                    {isExpanded && (
                      <CardContent className="pt-6">
                        <div className="space-y-6">
                          {/* Group Info */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div className="p-2 bg-blue-100 rounded-lg">
                                <Calendar className="h-5 w-5 text-blue-600" />
                              </div>
                              <div>
                                <p className="text-xs text-gray-500">Entrou em</p>
                                <p className="text-sm font-medium">{formatDate(membership.joinedAt)}</p>
                              </div>
                            </div>

                            <div className="flex items-center space-x-3">
                              <div className="p-2 bg-green-100 rounded-lg">
                                <Users className="h-5 w-5 text-green-600" />
                              </div>
                              <div>
                                <p className="text-xs text-gray-500">Total de Membros</p>
                                <p className="text-sm font-medium">{membership.group._count.members} estudantes</p>
                              </div>
                            </div>

                            <div className="flex items-center space-x-3">
                              <div className="p-2 bg-purple-100 rounded-lg">
                                <MessageSquare className="h-5 w-5 text-purple-600" />
                              </div>
                              <div>
                                <p className="text-xs text-gray-500">Colegas para Avaliar</p>
                                <p className="text-sm font-medium">
                                  {membership.group.members.length} {membership.group.members.length === 1 ? 'colega' : 'colegas'}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Group Members */}
                          <div>
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="text-lg font-semibold flex items-center">
                                <Users className="h-5 w-5 mr-2 text-blue-600" />
                                Membros do Grupo
                              </h4>
                              <span className="text-sm text-gray-500">
                                {membership.group.members.length > 0 
                                  ? `${membership.group.members.length} colegas` 
                                  : 'Sem colegas'}
                              </span>
                            </div>

                            {membership.group.members.length === 0 ? (
                              <div className="text-center py-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                                <Users className="h-10 w-10 mx-auto mb-3 text-gray-400" />
                                <p className="text-sm text-gray-600 font-medium">
                                  Você é o único membro deste grupo
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                  Aguarde seu professor adicionar mais membros
                                </p>
                              </div>
                            ) : (
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                {membership.group.members.map((member) => (
                                  <GroupMemberCard
                                    key={member.id}
                                    member={member}
                                    groupId={membership.group.id}
                                    groupName={membership.group.name}
                                    onFeedbackSubmitted={handleFeedbackSubmitted}
                                  />
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Quick Actions */}
                          <div className="flex items-center justify-between pt-4 border-t">
                            <p className="text-sm text-gray-500">
                              💡 Dica: Clique em "Avaliar" para dar feedback aos seus colegas
                            </p>
                            <Link href="/student/dashboard/feedback">
                              <Button variant="outline" size="sm">
                                <MessageSquare className="h-4 w-4 mr-2" />
                                Ver Todos os Feedbacks
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

