'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Users, BookOpen, MessageSquare, Award, Settings, Shield, UserPlus, Eye } from 'lucide-react'
import { EnrollStudentsModal } from '@/components/admin/EnrollStudentsModal'
import { ViewClassStudentsModal } from '@/components/admin/ViewClassStudentsModal'
import { EditClassModal } from '@/components/admin/EditClassModal'

interface User {
  id: string
  name: string
  email: string
  role: string
  studentId?: string
  createdAt: string
}

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
  const [recentUsers, setRecentUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [viewStudentsModal, setViewStudentsModal] = useState<{ 
    open: boolean; 
    classData: { id: string; name: string; code: string; semester: string } | null 
  }>({ 
    open: false, 
    classData: null 
  })
  const [editClassModal, setEditClassModal] = useState<{ 
    open: boolean; 
    classData: { id: string; name: string; code: string; description?: string; semester: string } | null 
  }>({ 
    open: false, 
    classData: null 
  })

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
      const [usersResponse, classesResponse, groupsResponse, analyticsResponse] = await Promise.all([
        fetch('/api/users?limit=1000'),
        fetch('/api/classes'),
        fetch('/api/groups'),
        fetch('/api/analytics')
      ])

      let totalUsers = 0, totalProfessors = 0, totalStudents = 0
      if (usersResponse.ok) {
        const usersData = await usersResponse.json()
        const users = usersData.users || []
        totalUsers = users.length
        totalProfessors = users.filter((u: { role: string }) => u.role === 'PROFESSOR').length
        totalStudents = users.filter((u: { role: string }) => u.role === 'STUDENT').length
        // Get 5 most recent users
        setRecentUsers(users.slice(0, 5))
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

      // Process analytics data
      if (analyticsResponse.ok) {
        const analyticsData = await analyticsResponse.json()
        
        // Update stats with analytics data
        setStats({
          totalUsers: analyticsData.overview.totalUsers,
          totalProfessors: analyticsData.overview.totalProfessors,
          totalStudents: analyticsData.overview.totalStudents,
          totalClasses: analyticsData.overview.totalClasses,
          totalGroups: analyticsData.overview.totalGroups,
          totalFeedback: analyticsData.overview.totalFeedbacks,
          totalRewards: analyticsData.overview.totalRewards,
          activeRedemptions: analyticsData.overview.totalRedemptions,
        })
      } else {
        // Fallback to previously fetched data
        setStats({
          totalUsers,
          totalProfessors,
          totalStudents,
          totalClasses,
          totalGroups,
          totalFeedback: 0,
          totalRewards: 0,
          activeRedemptions: 0,
        })
      }
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
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="users">Usuários</TabsTrigger>
              <TabsTrigger value="classes">Turmas</TabsTrigger>
            </TabsList>

            {/* Users Tab */}
            <TabsContent value="users" className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Gerenciamento de Usuários</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Resumo dos usuários cadastrados no sistema
                  </p>
                </div>
                <Button 
                  onClick={() => router.push('/admin/users')}
                  className="fei-gradient"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Ver Todos os Usuários
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Usuários Recentes</CardTitle>
                    <CardDescription>
                      Últimos usuários cadastrados no sistema
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {recentUsers.length === 0 ? (
                      <div className="text-center py-8">
                        <Users className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                        <p className="text-sm text-muted-foreground">
                          Nenhum usuário cadastrado ainda
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {recentUsers.map((user) => {
                          const initials = user.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
                          const getBadgeColor = (role: string) => {
                            switch (role) {
                              case 'ADMIN':
                                return 'bg-red-100 text-red-800'
                              case 'PROFESSOR':
                                return 'bg-purple-100 text-purple-800'
                              case 'STUDENT':
                                return 'bg-blue-100 text-blue-800'
                              default:
                                return 'bg-gray-100 text-gray-800'
                            }
                          }
                          const getRoleLabel = (role: string) => {
                            switch (role) {
                              case 'ADMIN':
                                return 'Administrador'
                              case 'PROFESSOR':
                                return 'Professor'
                              case 'STUDENT':
                                return 'Estudante'
                              default:
                                return role
                            }
                          }
                          
                          return (
                            <div key={user.id} className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                                  <span className="text-blue-600 font-medium text-sm">{initials}</span>
                                </div>
                                <div>
                                  <p className="text-sm font-medium">{user.name}</p>
                                  <p className="text-xs text-muted-foreground">{user.email}</p>
                                </div>
                              </div>
                              <Badge className={getBadgeColor(user.role)}>{getRoleLabel(user.role)}</Badge>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Distribuição por Tipo</CardTitle>
                    <CardDescription>
                      Percentual dos tipos de usuários
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Estudantes</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-2 bg-blue-500 rounded-full transition-all"
                              style={{ width: stats.totalUsers > 0 ? `${(stats.totalStudents / stats.totalUsers) * 100}%` : '0%' }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-blue-600 w-16 text-right">
                            {stats.totalUsers > 0 ? ((stats.totalStudents / stats.totalUsers) * 100).toFixed(1) : '0'}%
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Professores</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-2 bg-purple-500 rounded-full transition-all"
                              style={{ width: stats.totalUsers > 0 ? `${(stats.totalProfessors / stats.totalUsers) * 100}%` : '0%' }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-purple-600 w-16 text-right">
                            {stats.totalUsers > 0 ? ((stats.totalProfessors / stats.totalUsers) * 100).toFixed(1) : '0'}%
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Administradores</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-2 bg-red-500 rounded-full transition-all"
                              style={{ width: stats.totalUsers > 0 ? `${((stats.totalUsers - stats.totalStudents - stats.totalProfessors) / stats.totalUsers) * 100}%` : '0%' }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-red-600 w-16 text-right">
                            {stats.totalUsers > 0 ? (((stats.totalUsers - stats.totalStudents - stats.totalProfessors) / stats.totalUsers) * 100).toFixed(1) : '0'}%
                          </span>
                        </div>
                      </div>
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
                        <div className="flex justify-between items-start gap-2">
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-lg truncate">{classItem.code}</CardTitle>
                            <CardDescription className="truncate">{classItem.name}</CardDescription>
                            {classItem.description && (
                              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                {classItem.description}
                              </p>
                            )}
                          </div>
                          <Badge variant="secondary" className="shrink-0">{classItem.semester}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-between text-sm gap-2">
                            <span className="shrink-0">Professor:</span>
                            <span className="font-medium truncate text-right">{classItem.professor?.name || 'N/A'}</span>
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
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => setViewStudentsModal({
                              open: true,
                              classData: {
                                id: classItem.id,
                                name: classItem.name,
                                code: classItem.code,
                                semester: classItem.semester
                              }
                            })}
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            Ver
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => setEditClassModal({
                              open: true,
                              classData: {
                                id: classItem.id,
                                name: classItem.name,
                                code: classItem.code,
                                description: classItem.description,
                                semester: classItem.semester
                              }
                            })}
                          >
                            <Settings className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

          </Tabs>
        </div>
      </div>

      {/* Modals */}
      {viewStudentsModal.classData && (
        <ViewClassStudentsModal
          classData={viewStudentsModal.classData}
          open={viewStudentsModal.open}
          onOpenChange={(open) => setViewStudentsModal({ open, classData: null })}
        />
      )}

      {editClassModal.classData && (
        <EditClassModal
          classData={editClassModal.classData}
          open={editClassModal.open}
          onOpenChange={(open) => setEditClassModal({ open, classData: null })}
          onClassUpdated={() => {
            fetchAdminData()
            setEditClassModal({ open: false, classData: null })
          }}
        />
      )}
    </div>
  )
}
