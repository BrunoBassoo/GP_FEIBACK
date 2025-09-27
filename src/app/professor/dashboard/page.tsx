'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BookOpen, Users, MessageSquare, BarChart3, Plus, Eye, Settings, TrendingUp } from 'lucide-react'

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

    // TODO: Fetch professor stats from API
    // For now, using mock data
    setStats({
      totalClasses: 4,
      totalGroups: 12,
      totalStudents: 89,
      totalFeedback: 156,
      activeProjects: 8,
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

  if (!session || session.user.role !== 'PROFESSOR') {
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
                <Button className="fei-gradient">
                  <Plus className="h-4 w-4 mr-2" />
                  Nova Turma
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Mock class data */}
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
                        <span>Estudantes:</span>
                        <span className="font-medium">28</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Grupos:</span>
                        <span className="font-medium">6</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Projetos:</span>
                        <span className="font-medium">2</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="h-4 w-4 mr-1" />
                        Ver
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
                        <span>Estudantes:</span>
                        <span className="font-medium">32</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Grupos:</span>
                        <span className="font-medium">8</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Projetos:</span>
                        <span className="font-medium">3</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="h-4 w-4 mr-1" />
                        Ver
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
                        <span>Estudantes:</span>
                        <span className="font-medium">25</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Grupos:</span>
                        <span className="font-medium">5</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Projetos:</span>
                        <span className="font-medium">2</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="h-4 w-4 mr-1" />
                        Ver
                      </Button>
                      <Button size="sm" variant="outline">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Groups Tab */}
            <TabsContent value="groups" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Grupos por Turma</h3>
                <Button className="fei-gradient">
                  <Plus className="h-4 w-4 mr-2" />
                  Criar Grupo
                </Button>
              </div>

              <div className="space-y-6">
                {/* Groups by Class */}
                <Card>
                  <CardHeader>
                    <CardTitle>CC6NA - Engenharia de Software</CardTitle>
                    <CardDescription>6 grupos • 28 estudantes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium">Grupo Alpha</h4>
                          <Badge variant="secondary" className="text-xs">5 membros</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">Sistema Web de Gestão</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Feedback: 12</span>
                          <span>Média: 8.5</span>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium">Grupo Beta</h4>
                          <Badge variant="secondary" className="text-xs">4 membros</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">App Mobile E-commerce</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Feedback: 8</span>
                          <span>Média: 7.8</span>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium">Grupo Gamma</h4>
                          <Badge className="bg-yellow-100 text-yellow-800 text-xs">3 membros</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">Sistema de Biblioteca</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Feedback: 5</span>
                          <span>Média: 6.2</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>CC4NA - Estruturas de Dados</CardTitle>
                    <CardDescription>8 grupos • 32 estudantes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium">Grupo Delta</h4>
                          <Badge variant="secondary" className="text-xs">4 membros</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">Implementação Árvore AVL</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Feedback: 15</span>
                          <span>Média: 9.1</span>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium">Grupo Epsilon</h4>
                          <Badge variant="secondary" className="text-xs">4 membros</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">Algoritmos de Ordenação</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Feedback: 11</span>
                          <span>Média: 8.3</span>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium">Grupo Zeta</h4>
                          <Badge variant="secondary" className="text-xs">4 membros</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">Grafos e Caminhos</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Feedback: 9</span>
                          <span>Média: 7.9</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Feedback Tab */}
            <TabsContent value="feedback" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Feedback Recente</CardTitle>
                    <CardDescription>
                      Últimos feedbacks dados pelos estudantes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-500 pl-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Maria → João (Grupo Alpha)</p>
                          <Badge variant="secondary" className="text-xs">+15 pts</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          "Excelente colaboração no desenvolvimento do back-end."
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">há 1 hora</p>
                      </div>

                      <div className="border-l-4 border-green-500 pl-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Carlos → Ana (Grupo Beta)</p>
                          <Badge variant="secondary" className="text-xs">+12 pts</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          "Muito organizada e pontual nas entregas."
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">há 2 horas</p>
                      </div>

                      <div className="border-l-4 border-yellow-500 pl-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Lucas → Pedro (Grupo Gamma)</p>
                          <Badge className="bg-yellow-100 text-yellow-800 text-xs">Melhoria</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          "Poderia participar mais ativamente das discussões."
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">há 3 horas</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Estatísticas de Feedback</CardTitle>
                    <CardDescription>
                      Resumo dos feedbacks por categoria
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Colaboração</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-gray-200 rounded-full">
                            <div className="w-16 h-2 bg-green-500 rounded-full"></div>
                          </div>
                          <span className="text-sm font-medium">80%</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm">Comunicação</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-gray-200 rounded-full">
                            <div className="w-14 h-2 bg-blue-500 rounded-full"></div>
                          </div>
                          <span className="text-sm font-medium">70%</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm">Contribuição</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-gray-200 rounded-full">
                            <div className="w-18 h-2 bg-purple-500 rounded-full"></div>
                          </div>
                          <span className="text-sm font-medium">90%</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm">Pontualidade</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-gray-200 rounded-full">
                            <div className="w-12 h-2 bg-yellow-500 rounded-full"></div>
                          </div>
                          <span className="text-sm font-medium">60%</span>
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
