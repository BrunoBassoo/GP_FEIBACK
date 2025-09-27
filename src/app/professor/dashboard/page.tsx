'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BookOpen, Users, MessageSquare, BarChart3, Plus, Eye, TrendingUp, UserPlus } from 'lucide-react'
import { CreateGroupModal } from '@/components/professor/CreateGroupModal'
import { CreateClassModal } from '@/components/professor/CreateClassModal'
import { EnrollStudentsModal } from '@/components/professor/EnrollStudentsModal'

interface ProfessorClass {
  id: string
  name: string
  code: string
  description?: string
  semester: string
  _count: {
    enrollments: number
    groups: number
  }
}

export default function ProfessorDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [stats, setStats] = useState({
    totalClasses: 0,
    totalGroups: 0,
    totalStudents: 0,
    totalFeedback: 0,
    activeProjects: 0,
  })
  const [classes, setClasses] = useState<ProfessorClass[]>([])
  const [groups, setGroups] = useState<Array<{
    id: string
    name: string
    description?: string
    classId: string
    createdAt: string
    _count?: { members: number }
  }>>([])
  const [feedback, setFeedback] = useState<Array<{
    id: string
    content: string
    type: string
    points: number
    category: string
    createdAt: string
    giver?: { name: string }
    receiver?: { name: string }
  }>>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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

    fetchProfessorData()
  }, [session, status, router])

  const fetchProfessorData = async () => {
    try {
      setLoading(true)
      setError(null)

      // Fetch classes, groups, and feedback in parallel
      const [classesResponse, groupsResponse, feedbackResponse] = await Promise.all([
        fetch('/api/classes'),
        fetch('/api/groups'),
        fetch('/api/feedback?limit=50') // Get recent feedback
      ])

      let classesData: { classes?: ProfessorClass[] } | null = null
      let groupsData: { groups?: Array<{
        id: string
        name: string
        description?: string
        classId: string
        createdAt: string
        _count?: { members: number }
      }> } | null = null
      let feedbackData: { feedback?: Array<{
        id: string
        content: string
        type: string
        points: number
        category: string
        createdAt: string
        giver?: { name: string }
        receiver?: { name: string }
      }> } | null = null

      if (classesResponse.ok) {
        classesData = await classesResponse.json()
        setClasses(classesData.classes || [])
      } else {
        throw new Error('Erro ao carregar turmas')
      }

      if (groupsResponse.ok) {
        groupsData = await groupsResponse.json()
        setGroups(groupsData.groups || [])
      } else {
        console.warn('Error loading groups:', await groupsResponse.text())
        setGroups([])
      }

      if (feedbackResponse.ok) {
        feedbackData = await feedbackResponse.json()
        setFeedback(feedbackData.feedback || [])
      } else {
        console.warn('Error loading feedback:', await feedbackResponse.text())
        setFeedback([])
      }

      // Calculate stats from real data using the stored JSON data
      const classesArray = classesData?.classes || []
      const groupsArray = groupsData?.groups || []
      
      const totalClasses = classesArray.length
      const totalGroups = groupsArray.length
      const totalStudents = classesArray.reduce((sum: number, cls: ProfessorClass) => sum + cls._count.enrollments, 0)
      
      const feedbackArray = feedbackData?.feedback || []
      
      setStats({
        totalClasses,
        totalGroups,
        totalStudents,
        totalFeedback: feedbackArray.length,
        activeProjects: totalGroups, // Assuming each group is a project
      })
    } catch (error) {
      console.error('Error fetching professor data:', error)
      setError(error instanceof Error ? error.message : 'Erro desconhecido')
    } finally {
      setLoading(false)
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
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Carregando dados do professor...</p>
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

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="h-12 w-12 mx-auto mb-4 text-red-500">⚠️</div>
                <p className="text-red-600 mb-4">{error}</p>
                <Button onClick={fetchProfessorData} className="fei-gradient">
                  Tentar Novamente
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Dashboard do Professor
            </h1>
            <p className="mt-2 text-gray-600">
              Bem-vindo, Prof. {session.user.name}! Gerencie suas turmas e acompanhe o progresso dos estudantes.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Turmas
                </CardTitle>
                <BookOpen className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalClasses}</div>
                <p className="text-xs text-muted-foreground">
                  turmas ativas
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Grupos
                </CardTitle>
                <Users className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalGroups}</div>
                <p className="text-xs text-muted-foreground">
                  grupos criados
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Estudantes
                </CardTitle>
                <Users className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalStudents}</div>
                <p className="text-xs text-muted-foreground">
                  estudantes matriculados
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Feedback
                </CardTitle>
                <MessageSquare className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalFeedback}</div>
                <p className="text-xs text-muted-foreground">
                  feedbacks dados
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Projetos
                </CardTitle>
                <BarChart3 className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.activeProjects}</div>
                <p className="text-xs text-muted-foreground">
                  projetos ativos
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="classes" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="classes">Minhas Turmas</TabsTrigger>
              <TabsTrigger value="groups">Grupos</TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
              <TabsTrigger value="analytics">Análises</TabsTrigger>
            </TabsList>

            {/* Classes Tab */}
            <TabsContent value="classes" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Minhas Turmas</h3>
                <CreateClassModal onClassCreated={() => {
                  // Refresh data after class creation
                  fetchProfessorData()
                }} />
              </div>

              {classes.length === 0 ? (
                <Card className="col-span-full">
                  <CardContent className="pt-6">
                    <div className="text-center py-8">
                      <BookOpen className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Nenhuma turma encontrada
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Você ainda não criou nenhuma turma. Crie sua primeira turma para começar a gerenciar grupos de estudantes.
                      </p>
                      <CreateClassModal 
                        onClassCreated={() => fetchProfessorData()}
                        trigger={
                          <Button className="fei-gradient">
                            <Plus className="h-4 w-4 mr-2" />
                            Criar Primeira Turma
                          </Button>
                        }
                      />
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {classes.map((classItem) => (
                    <Card key={classItem.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{classItem.code}</CardTitle>
                            <CardDescription>{classItem.name}</CardDescription>
                            {classItem.description && (
                              <p className="text-xs text-muted-foreground mt-1">
                                {classItem.description}
                              </p>
                            )}
                          </div>
                          <Badge variant="secondary">{classItem.semester}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-between text-sm">
                            <span>Estudantes:</span>
                            <span className="font-medium">{classItem._count.enrollments}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Grupos:</span>
                            <span className="font-medium">{classItem._count.groups}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Status:</span>
                            <Badge variant="outline" className="text-xs">
                              {classItem._count.groups > 0 ? 'Ativo' : 'Sem grupos'}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="flex-1">
                            <Eye className="h-4 w-4 mr-1" />
                            Ver Detalhes
                          </Button>
                          <EnrollStudentsModal 
                            classData={classItem}
                            onStudentsEnrolled={() => {
                              // Refresh data after students are enrolled
                              fetchProfessorData()
                            }}
                            trigger={
                              <Button size="sm" variant="outline" title="Matricular Estudantes">
                                <UserPlus className="h-4 w-4" />
                              </Button>
                            }
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            {/* Groups Tab */}
            <TabsContent value="groups" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Grupos por Turma</h3>
                <CreateGroupModal onGroupCreated={() => {
                  // Refresh data after group creation
                  fetchProfessorData()
                }} />
              </div>

              {classes.length === 0 ? (
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center py-8">
                      <Users className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Nenhuma turma encontrada
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Você precisa criar turmas antes de poder criar grupos. 
                        Vá para a aba &ldquo;Minhas Turmas&rdquo; e crie sua primeira turma.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ) : groups.length === 0 ? (
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center py-8">
                      <Users className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Nenhum grupo encontrado
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Você ainda não criou nenhum grupo. Crie seu primeiro grupo para começar a organizar estudantes.
                      </p>
                      <CreateGroupModal 
                        onGroupCreated={() => fetchProfessorData()}
                        trigger={
                          <Button className="fei-gradient">
                            <Plus className="h-4 w-4 mr-2" />
                            Criar Primeiro Grupo
                          </Button>
                        }
                      />
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6">
                  {/* Group by Classes */}
                  {classes.map((classItem) => {
                    const classGroups = groups.filter(group => group.classId === classItem.id)
                    
                    if (classGroups.length === 0) return null

                    return (
                      <Card key={classItem.id}>
                        <CardHeader>
                          <CardTitle>{classItem.code} - {classItem.name}</CardTitle>
                          <CardDescription>
                            {classGroups.length} grupo{classGroups.length !== 1 ? 's' : ''} • {classItem._count.enrollments} estudante{classItem._count.enrollments !== 1 ? 's' : ''}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {classGroups.map((group) => (
                              <div key={group.id} className="p-4 border rounded-lg">
                                <div className="flex justify-between items-start mb-2">
                                  <h4 className="font-medium">{group.name}</h4>
                                  <Badge variant="secondary" className="text-xs">
                                    {group._count?.members || 0} membro{(group._count?.members || 0) !== 1 ? 's' : ''}
                                  </Badge>
                                </div>
                                {group.description && (
                                  <p className="text-sm text-muted-foreground mb-2">
                                    {group.description}
                                  </p>
                                )}
                                <div className="flex items-center justify-between text-xs text-muted-foreground">
                                  <span>Criado: {new Date(group.createdAt).toLocaleDateString('pt-BR')}</span>
                                  <Badge variant="outline" className="text-xs">
                                    {(group._count?.members || 0) > 0 ? 'Ativo' : 'Vazio'}
                                  </Badge>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              )}
            </TabsContent>

            {/* Feedback Tab */}
            <TabsContent value="feedback" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Feedback Recente</CardTitle>
                    <CardDescription>
                      Últimos feedbacks dados pelos estudantes das suas turmas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {feedback.length === 0 ? (
                      <div className="text-center py-8">
                        <MessageSquare className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                        <p className="text-sm text-muted-foreground">
                          Nenhum feedback encontrado ainda
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Feedbacks aparecerão aqui quando os estudantes começarem a avaliar uns aos outros
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4 max-h-80 overflow-y-auto">
                        {feedback.slice(0, 10).map((feedbackItem) => (
                          <div 
                            key={feedbackItem.id}
                            className={`border-l-4 pl-4 ${
                              feedbackItem.type === 'POSITIVE' 
                                ? 'border-green-500' 
                                : 'border-yellow-500'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium">
                                {feedbackItem.giver?.name} → {feedbackItem.receiver?.name}
                              </p>
                              <Badge 
                                variant="secondary" 
                                className={`text-xs ${
                                  feedbackItem.points > 0 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-yellow-100 text-yellow-800'
                                }`}
                              >
                                {feedbackItem.points > 0 ? '+' : ''}{feedbackItem.points} pts
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              &ldquo;{feedbackItem.content}&rdquo;
                            </p>
                            <div className="flex items-center justify-between mt-2">
                              <Badge variant="outline" className="text-xs">
                                {feedbackItem.category}
                              </Badge>
                              <p className="text-xs text-muted-foreground">
                                {new Date(feedbackItem.createdAt).toLocaleDateString('pt-BR', {
                                  day: '2-digit',
                                  month: '2-digit',
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Estatísticas de Feedback</CardTitle>
                    <CardDescription>
                      Resumo dos feedbacks por categoria das suas turmas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {feedback.length === 0 ? (
                      <div className="text-center py-8">
                        <BarChart3 className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                        <p className="text-sm text-muted-foreground">
                          Nenhuma estatística disponível
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Estatísticas aparecerão quando houver feedbacks
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {(() => {
                          // Calculate category statistics from real feedback
                          const categories = ['collaboration', 'communication', 'contribution', 'punctuality', 'reliability']
                          const categoryStats = categories.map(category => {
                            const categoryFeedback = feedback.filter(f => f.category === category)
                            const positiveFeedback = categoryFeedback.filter(f => f.type === 'POSITIVE')
                            const percentage = categoryFeedback.length > 0 
                              ? Math.round((positiveFeedback.length / categoryFeedback.length) * 100)
                              : 0
                            
                            return {
                              name: category,
                              label: {
                                collaboration: 'Colaboração',
                                communication: 'Comunicação', 
                                contribution: 'Contribuição',
                                punctuality: 'Pontualidade',
                                reliability: 'Confiabilidade'
                              }[category],
                              percentage,
                              total: categoryFeedback.length,
                              color: {
                                collaboration: 'bg-green-500',
                                communication: 'bg-blue-500',
                                contribution: 'bg-purple-500', 
                                punctuality: 'bg-yellow-500',
                                reliability: 'bg-indigo-500'
                              }[category]
                            }
                          }).filter(stat => stat.total > 0) // Only show categories with feedback

                          return categoryStats.length === 0 ? (
                            <div className="text-center py-4">
                              <p className="text-sm text-muted-foreground">
                                Aguardando feedbacks categorizados
                              </p>
                            </div>
                          ) : categoryStats.map((stat) => (
                            <div key={stat.name} className="flex items-center justify-between">
                              <div>
                                <span className="text-sm font-medium">{stat.label}</span>
                                <span className="text-xs text-muted-foreground ml-2">
                                  ({stat.total} feedback{stat.total !== 1 ? 's' : ''})
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-20 h-2 bg-gray-200 rounded-full">
                                  <div 
                                    className={`h-2 rounded-full ${stat.color}`}
                                    style={{ width: `${stat.percentage}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm font-medium w-10 text-right">
                                  {stat.percentage}%
                                </span>
                              </div>
                            </div>
                          ))
                        })()}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      Performance dos Grupos
                    </CardTitle>
                    <CardDescription>
                      Ranking dos grupos por média de feedback
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            1
                          </div>
                          <div>
                            <p className="font-medium">Grupo Delta</p>
                            <p className="text-sm text-muted-foreground">CC4NA - Estruturas de Dados</p>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800">9.1</Badge>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            2
                          </div>
                          <div>
                            <p className="font-medium">Grupo Alpha</p>
                            <p className="text-sm text-muted-foreground">CC6NA - Engenharia de Software</p>
                          </div>
                        </div>
                        <Badge className="bg-blue-100 text-blue-800">8.5</Badge>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            3
                          </div>
                          <div>
                            <p className="font-medium">Grupo Epsilon</p>
                            <p className="text-sm text-muted-foreground">CC4NA - Estruturas de Dados</p>
                          </div>
                        </div>
                        <Badge className="bg-purple-100 text-purple-800">8.3</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Estudantes Destaque</CardTitle>
                    <CardDescription>
                      Estudantes com melhor performance em feedback
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">MS</span>
                          </div>
                          <div>
                            <p className="font-medium">Maria Silva</p>
                            <p className="text-sm text-muted-foreground">CC6NA • Grupo Alpha</p>
                          </div>
                        </div>
                        <Badge variant="secondary">485 pts</Badge>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">JS</span>
                          </div>
                          <div>
                            <p className="font-medium">João Santos</p>
                            <p className="text-sm text-muted-foreground">CC4NA • Grupo Delta</p>
                          </div>
                        </div>
                        <Badge variant="secondary">432 pts</Badge>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">AC</span>
                          </div>
                          <div>
                            <p className="font-medium">Ana Costa</p>
                            <p className="text-sm text-muted-foreground">CC6NA • Grupo Beta</p>
                          </div>
                        </div>
                        <Badge variant="secondary">398 pts</Badge>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">CL</span>
                          </div>
                          <div>
                            <p className="font-medium">Carlos Lima</p>
                            <p className="text-sm text-muted-foreground">CC5NA • Grupo Theta</p>
                          </div>
                        </div>
                        <Badge variant="secondary">375 pts</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Resumo Geral</CardTitle>
                  <CardDescription>
                    Estatísticas gerais de todas as suas turmas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">89</div>
                      <p className="text-sm text-muted-foreground">Total de Estudantes</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">156</div>
                      <p className="text-sm text-muted-foreground">Feedbacks Dados</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">8.1</div>
                      <p className="text-sm text-muted-foreground">Média Geral</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600">92%</div>
                      <p className="text-sm text-muted-foreground">Participação</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
