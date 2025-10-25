'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { 
  Users, 
  Search, 
  Plus, 
  UserPlus,
  UserMinus,
  Loader2,
  TrendingUp,
  BookOpen,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import { CreateGroupModal } from '@/components/professor/CreateGroupModal'
import { AddGroupMembersModal } from '@/components/professor/AddGroupMembersModal'

interface GroupMember {
  id: string
  userId: string
  groupId: string
  user: {
    id: string
    name: string
    email: string
    studentId: string
  }
}

interface Group {
  id: string
  name: string
  description?: string
  classId: string
  createdAt: string
  class: {
    id: string
    name: string
    code: string
    semester: string
  }
  members: GroupMember[]
  _count?: { members: number }
}

export default function ProfessorGroupsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [groups, setGroups] = useState<Group[]>([])
  const [filteredGroups, setFilteredGroups] = useState<Group[]>([])
  const [classes, setClasses] = useState<Array<{ id: string; name: string; code: string }>>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [classFilter, setClassFilter] = useState<string>('all')
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set())
  
  // Modal states
  const [addMembersModal, setAddMembersModal] = useState<{ open: boolean; group: Group | null }>({ 
    open: false, 
    group: null 
  })

  useEffect(() => {
    if (status === 'loading') return

    if (!session) {
      router.push('/login')
      return
    }

    if (session.user.role !== 'PROFESSOR') {
      router.push('/dashboard')
      return
    }

    fetchData()
  }, [session, status, router])

  useEffect(() => {
    let filtered = groups

    // Filter by search term
    if (searchTerm.trim()) {
      filtered = filtered.filter(g =>
        g.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        g.class.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        g.class.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by class
    if (classFilter !== 'all') {
      filtered = filtered.filter(g => g.classId === classFilter)
    }

    setFilteredGroups(filtered)
  }, [searchTerm, classFilter, groups])

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)

      const [groupsResponse, classesResponse] = await Promise.all([
        fetch('/api/groups'),
        fetch('/api/classes')
      ])
      
      if (!groupsResponse.ok || !classesResponse.ok) {
        throw new Error('Erro ao carregar dados')
      }

      const groupsData = await groupsResponse.json()
      const classesData = await classesResponse.json()
      
      setGroups(groupsData.groups || [])
      setFilteredGroups(groupsData.groups || [])
      setClasses(classesData.classes || [])
    } catch (err) {
      console.error('Error fetching data:', err)
      setError(err instanceof Error ? err.message : 'Erro desconhecido')
    } finally {
      setLoading(false)
    }
  }

  const toggleGroupExpanded = (groupId: string) => {
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

  const handleRemoveMember = async (groupId: string, memberId: string, memberName: string) => {
    if (!confirm(`Tem certeza que deseja remover ${memberName} do grupo?`)) {
      return
    }

    try {
      const response = await fetch(`/api/groups/${groupId}/members`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ memberIds: [memberId] }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Erro ao remover membro')
      }

      // Refresh data
      await fetchData()
      alert('Membro removido com sucesso!')
    } catch (err) {
      console.error('Error removing member:', err)
      alert(err instanceof Error ? err.message : 'Erro ao remover membro')
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600">Carregando grupos...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!session || session.user.role !== 'PROFESSOR') {
    return null
  }

  // Calculate statistics
  const totalGroups = groups.length
  const totalMembers = groups.reduce((sum, g) => sum + g.members.length, 0)
  const averageMembersPerGroup = totalGroups > 0 ? (totalMembers / totalGroups).toFixed(1) : '0'
  const activeGroups = groups.filter(g => g.members.length > 0).length

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                  <Users className="h-8 w-8" />
                  Meus Grupos
                </h1>
                <p className="text-gray-600 mt-1">
                  Gerencie os grupos e membros das suas turmas
                </p>
              </div>
              <CreateGroupModal 
                onGroupCreated={() => fetchData()}
                trigger={
                  <Button className="fei-gradient">
                    <Plus className="h-4 w-4 mr-2" />
                    Novo Grupo
                  </Button>
                }
              />
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de Grupos</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalGroups}</div>
                <p className="text-xs text-muted-foreground">
                  {classes.length} turma{classes.length !== 1 ? 's' : ''}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de Membros</CardTitle>
                <UserPlus className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalMembers}</div>
                <p className="text-xs text-muted-foreground">
                  Estudantes em grupos
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Grupos Ativos</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{activeGroups}</div>
                <p className="text-xs text-muted-foreground">
                  Com membros
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Média por Grupo</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{averageMembersPerGroup}</div>
                <p className="text-xs text-muted-foreground">
                  Membros/grupo
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Buscar por nome do grupo ou turma..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={classFilter} onValueChange={setClassFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filtrar por turma" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as Turmas</SelectItem>
                    {classes.map((classItem) => (
                      <SelectItem key={classItem.id} value={classItem.id}>
                        {classItem.code} - {classItem.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Error State */}
          {error && (
            <Card className="mb-6 border-red-200 bg-red-50">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-red-600 mb-4">{error}</p>
                  <Button onClick={fetchData} variant="outline">
                    Tentar Novamente
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Groups List */}
          {filteredGroups.length === 0 ? (
            <Card>
              <CardContent className="pt-6">
                <div className="text-center py-12">
                  <Users className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {searchTerm || classFilter !== 'all' ? 'Nenhum grupo encontrado' : 'Nenhum grupo criado'}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {searchTerm || classFilter !== 'all' 
                      ? 'Tente ajustar os filtros de busca'
                      : 'Comece criando um novo grupo para organizar seus estudantes'}
                  </p>
                  {!searchTerm && classFilter === 'all' && (
                    <CreateGroupModal 
                      onGroupCreated={() => fetchData()}
                      trigger={
                        <Button className="fei-gradient">
                          <Plus className="h-4 w-4 mr-2" />
                          Criar Primeiro Grupo
                        </Button>
                      }
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredGroups.map((group) => {
                const isExpanded = expandedGroups.has(group.id)
                
                return (
                  <Card key={group.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-xl truncate">{group.name}</CardTitle>
                            <Badge variant="outline">
                              {group.members.length} membro{group.members.length !== 1 ? 's' : ''}
                            </Badge>
                          </div>
                          <CardDescription className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4" />
                            {group.class.code} - {group.class.name}
                            <Badge variant="secondary" className="ml-2">{group.class.semester}</Badge>
                          </CardDescription>
                          {group.description && (
                            <p className="text-sm text-muted-foreground mt-2">
                              {group.description}
                            </p>
                          )}
                        </div>
                        <div className="flex gap-2 shrink-0">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setAddMembersModal({ open: true, group })}
                          >
                            <UserPlus className="h-4 w-4 mr-1" />
                            Adicionar
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => toggleGroupExpanded(group.id)}
                          >
                            {isExpanded ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </CardHeader>

                    {isExpanded && (
                      <CardContent className="pt-0">
                        <div className="border-t pt-4">
                          {group.members.length === 0 ? (
                            <div className="text-center py-8">
                              <Users className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                              <p className="text-sm text-muted-foreground mb-3">
                                Nenhum membro neste grupo ainda
                              </p>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => setAddMembersModal({ open: true, group })}
                              >
                                <UserPlus className="h-4 w-4 mr-2" />
                                Adicionar Primeiro Membro
                              </Button>
                            </div>
                          ) : (
                            <div className="space-y-3">
                              <h4 className="font-medium text-sm text-muted-foreground mb-3">
                                Membros do Grupo
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {group.members.map((member) => (
                                  <div
                                    key={member.id}
                                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                                  >
                                    <div className="flex items-center gap-3 flex-1 min-w-0">
                                      <Avatar className="h-10 w-10">
                                        <AvatarFallback className="bg-blue-100 text-blue-600">
                                          {member.user.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                                        </AvatarFallback>
                                      </Avatar>
                                      <div className="flex-1 min-w-0">
                                        <p className="font-medium truncate">{member.user.name}</p>
                                        <p className="text-xs text-muted-foreground">
                                          RA: {member.user.studentId}
                                        </p>
                                      </div>
                                    </div>
                                    <Button
                                      size="sm"
                                      variant="ghost"
                                      className="shrink-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                                      onClick={() => handleRemoveMember(group.id, member.id, member.user.name)}
                                    >
                                      <UserMinus className="h-4 w-4" />
                                    </Button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
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

      {/* Modals */}
      {addMembersModal.group && (
        <AddGroupMembersModal
          group={addMembersModal.group}
          open={addMembersModal.open}
          onOpenChange={(open) => setAddMembersModal({ open, group: null })}
          onMembersAdded={() => {
            fetchData()
            setAddMembersModal({ open: false, group: null })
          }}
        />
      )}
    </div>
  )
}


