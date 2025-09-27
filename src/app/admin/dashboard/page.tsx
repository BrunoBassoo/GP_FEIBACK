'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Users, BookOpen, MessageSquare, Award, Plus, Settings, TrendingUp, Shield, UserPlus, Eye } from 'lucide-react'
import { EnrollStudentsModal } from '@/components/admin/EnrollStudentsModal'

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalProfessors: 0,
    totalStudents: 0,
    totalClasses: 0,
    totalGroups: 0,
    totalFeedback: 0,
    totalRewards: 0,
    activeRedemptions: 0,
  })
  const [classes, setClasses] = useState<Array<{
    id: string
    name: string
    code: string
    description?: string
    semester: string
    professor?: { id: string; name: string }
    _count?: { enrollments: number; groups: number }
  }>>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'loading') return

    if (!session) {
      router.push('/login')
      return
    }

    if (session.user.role !== 'ADMIN') {
      router.push('/dashboard')
      return
    }

    fetchAdminData()
  }, [session, status, router])

  const fetchAdminData = async () => {
    try {
      setLoading(true)
      setError(null)

      // Fetch all data in parallel
      const [usersResponse, classesResponse, groupsResponse] = await Promise.all([
        fetch('/api/users?limit=1000'),
        fetch('/api/classes'),
        fetch('/api/groups')
      ])

      let totalUsers = 0, totalProfessors = 0, totalStudents = 0
      if (usersResponse.ok) {
        const usersData = await usersResponse.json()
        const users = usersData.users || []
        totalUsers = users.length
        totalProfessors = users.filter((u: { role: string }) => u.role === 'PROFESSOR').length
        totalStudents = users.filter((u: { role: string }) => u.role === 'STUDENT').length
      }

      let totalClasses = 0, classesArray: Array<{
        id: string
        name: string
        code: string
        description?: string
        semester: string
        professor?: { id: string; name: string }
        _count?: { enrollments: number; groups: number }
      }> = []
      if (classesResponse.ok) {
        const classesData = await classesResponse.json()
        classesArray = classesData.classes || []
        totalClasses = classesArray.length
        setClasses(classesArray)
      }

      let totalGroups = 0
      if (groupsResponse.ok) {
        const groupsData = await groupsResponse.json()
        totalGroups = groupsData.groups?.length || 0
      }

      setStats({
        totalUsers,
        totalProfessors,
        totalStudents,
        totalClasses,
        totalGroups,
        totalFeedback: 0, // TODO: Fetch feedback count
        totalRewards: 0, // TODO: Fetch rewards count
        activeRedemptions: 0, // TODO: Fetch redemptions count
      })
    } catch (error) {
      console.error('Error fetching admin data:', error)
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
                <p className="text-gray-600">Carregando dados administrativos...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!session || session.user.role !== 'ADMIN') {
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
                <Button onClick={fetchAdminData} className="fei-gradient">
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
              Dashboard do Administrador
            </h1>
            <p className="mt-2 text-gray-600">
              Bem-vindo, {session.user.name}! Gerencie a plataforma e monitore todas as atividades.
            </p>
            <div className="mt-4">
              <Badge className="bg-red-100 text-red-800">
                <Shield className="h-3 w-3 mr-1" />
                Administrador
              </Badge>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total de Usuários
                </CardTitle>
                <Users className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  +12% em relação ao mês passado
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Turmas Ativas
                </CardTitle>
                <BookOpen className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalClasses}</div>
                <p className="text-xs text-muted-foreground">
                  +5 novas turmas este semestre
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Feedback Total
                </CardTitle>
                <MessageSquare className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalFeedback.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  +18% esta semana
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Resgates Pendentes
                </CardTitle>
                <Award className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.activeRedemptions}</div>
                <p className="text-xs text-muted-foreground">
                  aguardando aprovação
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Secondary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Professores</CardTitle>
                <Users className="h-4 w-4 text-indigo-500" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">{stats.totalProfessors}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Estudantes</CardTitle>
                <Users className="h-4 w-4 text-cyan-500" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">{stats.totalStudents.toLocaleString()}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Grupos</CardTitle>
                <Users className="h-4 w-4 text-pink-500" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">{stats.totalGroups}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Recompensas</CardTitle>
                <Award className="h-4 w-4 text-yellow-500" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">{stats.totalRewards}</div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="users" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="users">Usuários</TabsTrigger>
              <TabsTrigger value="classes">Turmas</TabsTrigger>
              <TabsTrigger value="rewards">Recompensas</TabsTrigger>
              <TabsTrigger value="analytics">Análises</TabsTrigger>
              <TabsTrigger value="system">Sistema</TabsTrigger>
            </TabsList>

            {/* Users Tab */}
            <TabsContent value="users" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Gerenciamento de Usuários</h3>
                <Button className="fei-gradient">
                  <Plus className="h-4 w-4 mr-2" />
                  Novo Usuário
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Usuários Recentes</CardTitle>
                    <CardDescription>
                      Últimos usuários cadastrados
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-medium text-sm">MS</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Maria Silva</p>
                            <p className="text-xs text-muted-foreground">maria@fei.edu.br</p>
                          </div>
                        </div>
                        <Badge variant="secondary">Estudante</Badge>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-600 font-medium text-sm">JS</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium">João Santos</p>
                            <p className="text-xs text-muted-foreground">joao.santos@fei.edu.br</p>
                          </div>
                        </div>
                        <Badge className="bg-purple-100 text-purple-800">Professor</Badge>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                            <span className="text-orange-600 font-medium text-sm">AC</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Ana Costa</p>
                            <p className="text-xs text-muted-foreground">ana.costa@fei.edu.br</p>
                          </div>
                        </div>
                        <Badge variant="secondary">Estudante</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Distribuição por Tipo</CardTitle>
                    <CardDescription>
                      Breakdown dos tipos de usuários
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Estudantes</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-gray-200 rounded-full">
                            <div className="w-19 h-2 bg-blue-500 rounded-full"></div>
                          </div>
                          <span className="text-sm font-medium">96.3%</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm">Professores</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-gray-200 rounded-full">
                            <div className="w-1 h-2 bg-purple-500 rounded-full"></div>
                          </div>
                          <span className="text-sm font-medium">3.6%</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm">Administradores</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-gray-200 rounded-full">
                            <div className="w-0.5 h-2 bg-red-500 rounded-full"></div>
                          </div>
                          <span className="text-sm font-medium">0.1%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Ações Rápidas</CardTitle>
                    <CardDescription>
                      Gerenciamento de usuários
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <Users className="h-4 w-4 mr-2" />
                        Ver Todos os Usuários
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Plus className="h-4 w-4 mr-2" />
                        Cadastrar Professor
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Settings className="h-4 w-4 mr-2" />
                        Configurar Permissões
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Classes Tab */}
            <TabsContent value="classes" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Gerenciamento de Turmas</h3>
                <Badge variant="outline" className="text-sm">
                  {classes.length} turma{classes.length !== 1 ? 's' : ''}
                </Badge>
              </div>

              {classes.length === 0 ? (
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center py-8">
                      <BookOpen className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Nenhuma turma encontrada
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Ainda não há turmas criadas no sistema. Os professores podem criar turmas em seus dashboards.
                      </p>
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
                            <span>Professor:</span>
                            <span className="font-medium">{classItem.professor?.name || 'N/A'}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Estudantes:</span>
                            <span className="font-medium">{classItem._count?.enrollments || 0}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Grupos:</span>
                            <span className="font-medium">{classItem._count?.groups || 0}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Status:</span>
                            <Badge variant="outline" className="text-xs">
                              {(classItem._count?.enrollments || 0) > 0 ? 'Ativa' : 'Sem estudantes'}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <EnrollStudentsModal
                            classData={{
                              id: classItem.id,
                              name: classItem.name,
                              code: classItem.code,
                              semester: classItem.semester,
                              professor: {
                                id: classItem.professor?.id || '',
                                name: classItem.professor?.name || 'N/A'
                              }
                            }}
                            onStudentsEnrolled={() => {
                              // Refresh data after enrollment
                              fetchAdminData()
                            }}
                            trigger={
                              <Button size="sm" variant="outline" className="flex-1">
                                <UserPlus className="h-4 w-4 mr-1" />
                                Matricular
                              </Button>
                            }
                          />
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            Ver
                          </Button>
                          <Button size="sm" variant="outline">
                            <Settings className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            {/* Rewards Tab */}
            <TabsContent value="rewards" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Gerenciamento de Recompensas</h3>
                <Button className="fei-gradient">
                  <Plus className="h-4 w-4 mr-2" />
                  Nova Recompensa
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recompensas Ativas</CardTitle>
                    <CardDescription>
                      Recompensas disponíveis para os estudantes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Mac FEI - 10% desconto</p>
                          <p className="text-sm text-muted-foreground">100 pontos</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary">45 resgates</Badge>
                          <Button size="sm" variant="outline">
                            <Settings className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Jujuca - 15% desconto</p>
                          <p className="text-sm text-muted-foreground">150 pontos</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary">32 resgates</Badge>
                          <Button size="sm" variant="outline">
                            <Settings className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Miyagi-san - 20% desconto</p>
                          <p className="text-sm text-muted-foreground">200 pontos</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary">28 resgates</Badge>
                          <Button size="sm" variant="outline">
                            <Settings className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Resgates Pendentes</CardTitle>
                    <CardDescription>
                      Resgates aguardando aprovação
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <div>
                          <p className="font-medium">Maria Silva</p>
                          <p className="text-sm text-muted-foreground">Mac FEI - 10% desconto</p>
                          <p className="text-xs text-muted-foreground">há 2 horas</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Aprovar
                          </Button>
                          <Button size="sm" variant="outline">
                            Rejeitar
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <div>
                          <p className="font-medium">João Santos</p>
                          <p className="text-sm text-muted-foreground">Jujuca - 15% desconto</p>
                          <p className="text-xs text-muted-foreground">há 4 horas</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Aprovar
                          </Button>
                          <Button size="sm" variant="outline">
                            Rejeitar
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <div>
                          <p className="font-medium">Ana Costa</p>
                          <p className="text-sm text-muted-foreground">Miyagi-san - 20% desconto</p>
                          <p className="text-xs text-muted-foreground">há 6 horas</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Aprovar
                          </Button>
                          <Button size="sm" variant="outline">
                            Rejeitar
                          </Button>
                        </div>
                      </div>
                    </div>
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
                      Crescimento da Plataforma
                    </CardTitle>
                    <CardDescription>
                      Métricas de crescimento nos últimos 6 meses
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Novos Usuários</span>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          <span className="text-sm font-medium text-green-600">+23%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Feedback Ativo</span>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          <span className="text-sm font-medium text-green-600">+31%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Resgates</span>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          <span className="text-sm font-medium text-green-600">+18%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Engajamento</span>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          <span className="text-sm font-medium text-green-600">+15%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Métricas Gerais</CardTitle>
                    <CardDescription>
                      Resumo das principais métricas da plataforma
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">92%</div>
                        <p className="text-sm text-muted-foreground">Taxa de Participação</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">8.4</div>
                        <p className="text-sm text-muted-foreground">Média de Feedback</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">4.2</div>
                        <p className="text-sm text-muted-foreground">Feedback por Usuário</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">87%</div>
                        <p className="text-sm text-muted-foreground">Satisfação</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Top Performers</CardTitle>
                  <CardDescription>
                    Usuários e turmas com melhor performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">Top Estudantes</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Maria Silva</span>
                          <Badge variant="secondary">485 pts</Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>João Santos</span>
                          <Badge variant="secondary">432 pts</Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Ana Costa</span>
                          <Badge variant="secondary">398 pts</Badge>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Top Professores</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Dr. João Silva</span>
                          <Badge variant="secondary">156 feedback</Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Dra. Maria Costa</span>
                          <Badge variant="secondary">142 feedback</Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Dr. Carlos Lima</span>
                          <Badge variant="secondary">128 feedback</Badge>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Top Turmas</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>CC6NA</span>
                          <Badge variant="secondary">8.7 média</Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>CC4NA</span>
                          <Badge variant="secondary">8.5 média</Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>CC5NA</span>
                          <Badge variant="secondary">8.2 média</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* System Tab */}
            <TabsContent value="system" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Configurações do Sistema</CardTitle>
                    <CardDescription>
                      Configurações gerais da plataforma
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Registro Aberto</p>
                          <p className="text-sm text-muted-foreground">Permitir novos cadastros</p>
                        </div>
                        <Button size="sm" variant="outline">Ativado</Button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Aprovação de Resgates</p>
                          <p className="text-sm text-muted-foreground">Requer aprovação manual</p>
                        </div>
                        <Button size="sm" variant="outline">Ativado</Button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Notificações Email</p>
                          <p className="text-sm text-muted-foreground">Enviar notificações por email</p>
                        </div>
                        <Button size="sm" variant="outline">Ativado</Button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Backup Automático</p>
                          <p className="text-sm text-muted-foreground">Backup diário dos dados</p>
                        </div>
                        <Button size="sm" variant="outline">Ativado</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Status do Sistema</CardTitle>
                    <CardDescription>
                      Informações sobre o status da plataforma
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Status do Servidor</span>
                        <Badge className="bg-green-100 text-green-800">Online</Badge>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm">Banco de Dados</span>
                        <Badge className="bg-green-100 text-green-800">Conectado</Badge>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm">Último Backup</span>
                        <span className="text-sm font-medium">há 2 horas</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm">Uptime</span>
                        <span className="text-sm font-medium">99.9%</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm">Versão</span>
                        <span className="text-sm font-medium">v1.0.0</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
