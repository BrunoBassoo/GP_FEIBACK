'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Users, BookOpen, MessageSquare, Award, BarChart3, Plus, Settings, TrendingUp, Shield } from 'lucide-react'

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

    // TODO: Fetch admin stats from API
    // For now, using mock data
    setStats({
      totalUsers: 1234,
      totalProfessors: 45,
      totalStudents: 1189,
      totalClasses: 89,
      totalGroups: 267,
      totalFeedback: 3456,
      totalRewards: 12,
      activeRedemptions: 34,
    })
  }, [session, status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!session || session.user.role !== 'ADMIN') {
    return null
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
                <Button className="fei-gradient">
                  <Plus className="h-4 w-4 mr-2" />
                  Nova Turma
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">CC6NA</CardTitle>
                        <CardDescription>Engenharia de Software</CardDescription>
                      </div>
                      <Badge variant="secondary">2024-2</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span>Professor:</span>
                        <span className="font-medium">Dr. João Silva</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Estudantes:</span>
                        <span className="font-medium">28</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Grupos:</span>
                        <span className="font-medium">6</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Feedback:</span>
                        <span className="font-medium">89</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        Ver Detalhes
                      </Button>
                      <Button size="sm" variant="outline">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">CC4NA</CardTitle>
                        <CardDescription>Estruturas de Dados</CardDescription>
                      </div>
                      <Badge variant="secondary">2024-2</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span>Professor:</span>
                        <span className="font-medium">Dra. Maria Costa</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Estudantes:</span>
                        <span className="font-medium">32</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Grupos:</span>
                        <span className="font-medium">8</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Feedback:</span>
                        <span className="font-medium">124</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        Ver Detalhes
                      </Button>
                      <Button size="sm" variant="outline">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">CC5NA</CardTitle>
                        <CardDescription>Banco de Dados</CardDescription>
                      </div>
                      <Badge variant="secondary">2024-2</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span>Professor:</span>
                        <span className="font-medium">Dr. Carlos Lima</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Estudantes:</span>
                        <span className="font-medium">25</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Grupos:</span>
                        <span className="font-medium">5</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Feedback:</span>
                        <span className="font-medium">67</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        Ver Detalhes
                      </Button>
                      <Button size="sm" variant="outline">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
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
