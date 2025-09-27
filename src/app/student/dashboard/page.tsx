'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Users, MessageSquare, Award, TrendingUp, Star, Plus, Eye } from 'lucide-react'

export default function StudentDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [stats, setStats] = useState({
    totalPoints: 0,
    feedbackReceived: 0,
    feedbackGiven: 0,
    groupsJoined: 0,
    rewardsRedeemed: 0,
  })

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

    // TODO: Fetch user stats from API
    // For now, using mock data
    setStats({
      totalPoints: 485,
      feedbackReceived: 23,
      feedbackGiven: 18,
      groupsJoined: 3,
      rewardsRedeemed: 2,
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

  if (!session || session.user.role !== 'STUDENT') {
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
              Dashboard do Estudante
            </h1>
            <p className="mt-2 text-gray-600">
              Olá, {session.user.name}! Acompanhe seu progresso e interaja com seus grupos.
            </p>
            <div className="mt-4 flex items-center space-x-4">
              <Badge variant="secondary" className="text-sm">
                RA: {session.user.studentId}
              </Badge>
              <Badge className="bg-green-100 text-green-800 text-sm">
                {stats.totalPoints} pontos
              </Badge>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total de Pontos
                </CardTitle>
                <Star className="h-4 w-4 text-yellow-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">{stats.totalPoints}</div>
                <p className="text-xs text-muted-foreground">
                  +25 esta semana
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Grupos
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.groupsJoined}</div>
                <p className="text-xs text-muted-foreground">
                  grupos ativos
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Feedback Recebido
                </CardTitle>
                <MessageSquare className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.feedbackReceived}</div>
                <p className="text-xs text-muted-foreground">
                  +3 esta semana
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Feedback Dado
                </CardTitle>
                <MessageSquare className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.feedbackGiven}</div>
                <p className="text-xs text-muted-foreground">
                  +2 esta semana
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Recompensas
                </CardTitle>
                <Award className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.rewardsRedeemed}</div>
                <p className="text-xs text-muted-foreground">
                  resgatadas
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="groups" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="groups">Meus Grupos</TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
              <TabsTrigger value="rewards">Recompensas</TabsTrigger>
              <TabsTrigger value="activity">Atividade</TabsTrigger>
            </TabsList>

            {/* Groups Tab */}
            <TabsContent value="groups" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Meus Grupos</h3>
                <Button size="sm" className="fei-gradient">
                  <Plus className="h-4 w-4 mr-2" />
                  Entrar em Grupo
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Mock group data */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Grupo Alpha</CardTitle>
                    <CardDescription>Engenharia de Software - CC6NA</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Membros:</span>
                        <span className="font-medium">5/6</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Projeto:</span>
                        <span className="font-medium">Sistema Web</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Status:</span>
                        <Badge variant="secondary" className="text-xs">Ativo</Badge>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="h-4 w-4 mr-1" />
                        Ver
                      </Button>
                      <Button size="sm" className="flex-1">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Feedback
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Grupo Beta</CardTitle>
                    <CardDescription>Estruturas de Dados - CC4NA</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Membros:</span>
                        <span className="font-medium">4/4</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Projeto:</span>
                        <span className="font-medium">Árvore AVL</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Status:</span>
                        <Badge variant="secondary" className="text-xs">Ativo</Badge>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="h-4 w-4 mr-1" />
                        Ver
                      </Button>
                      <Button size="sm" className="flex-1">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Feedback
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Grupo Gamma</CardTitle>
                    <CardDescription>Banco de Dados - CC5NA</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Membros:</span>
                        <span className="font-medium">3/5</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Projeto:</span>
                        <span className="font-medium">Sistema CRUD</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Status:</span>
                        <Badge className="bg-yellow-100 text-yellow-800 text-xs">Em Formação</Badge>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="h-4 w-4 mr-1" />
                        Ver
                      </Button>
                      <Button size="sm" className="flex-1">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Feedback
                      </Button>
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
                    <CardTitle className="flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2 text-green-500" />
                      Feedback Recebido
                    </CardTitle>
                    <CardDescription>
                      Últimos feedbacks dos seus colegas de grupo
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-500 pl-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Maria Santos</p>
                          <Badge variant="secondary" className="text-xs">+15 pts</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          "Excelente colaboração no desenvolvimento do front-end. Sempre disposto a ajudar."
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Grupo Alpha • há 2 dias
                        </p>
                      </div>

                      <div className="border-l-4 border-green-500 pl-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">João Silva</p>
                          <Badge variant="secondary" className="text-xs">+10 pts</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          "Boa comunicação e pontualidade nas reuniões."
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Grupo Beta • há 3 dias
                        </p>
                      </div>

                      <div className="border-l-4 border-yellow-500 pl-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Ana Costa</p>
                          <Badge className="bg-yellow-100 text-yellow-800 text-xs">Melhoria</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          "Poderia ser mais proativo na documentação do código."
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Grupo Alpha • há 5 dias
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2 text-blue-500" />
                      Feedback Dado
                    </CardTitle>
                    <CardDescription>
                      Feedbacks que você deu para seus colegas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Para: Carlos Lima</p>
                          <Badge variant="secondary" className="text-xs">Positivo</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          "Excelente liderança na organização das tarefas do grupo."
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Grupo Alpha • há 1 dia
                        </p>
                      </div>

                      <div className="border-l-4 border-blue-500 pl-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Para: Lucia Oliveira</p>
                          <Badge variant="secondary" className="text-xs">Positivo</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          "Muito dedicada e sempre entrega no prazo."
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Grupo Beta • há 4 dias
                        </p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <Button className="w-full fei-gradient">
                        <Plus className="h-4 w-4 mr-2" />
                        Dar Novo Feedback
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Rewards Tab */}
            <TabsContent value="rewards" className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Recompensas Disponíveis</h3>
                  <p className="text-sm text-muted-foreground">
                    Você tem <span className="font-medium text-yellow-600">{stats.totalPoints} pontos</span> disponíveis
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Mock rewards data */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Mac FEI</CardTitle>
                    <CardDescription>10% de desconto</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600 mb-2">100 pts</div>
                      <Button size="sm" className="w-full" disabled={stats.totalPoints < 100}>
                        {stats.totalPoints >= 100 ? 'Resgatar' : 'Pontos Insuficientes'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Jujuca</CardTitle>
                    <CardDescription>15% de desconto</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600 mb-2">150 pts</div>
                      <Button size="sm" className="w-full" disabled={stats.totalPoints < 150}>
                        {stats.totalPoints >= 150 ? 'Resgatar' : 'Pontos Insuficientes'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Miyagi-san</CardTitle>
                    <CardDescription>20% de desconto</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600 mb-2">200 pts</div>
                      <Button size="sm" className="w-full" disabled={stats.totalPoints < 200}>
                        {stats.totalPoints >= 200 ? 'Resgatar' : 'Pontos Insuficientes'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Augustus</CardTitle>
                    <CardDescription>25% de desconto</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600 mb-2">300 pts</div>
                      <Button size="sm" className="w-full" disabled={stats.totalPoints < 300}>
                        {stats.totalPoints >= 300 ? 'Resgatar' : 'Pontos Insuficientes'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Redemption History */}
              <Card>
                <CardHeader>
                  <CardTitle>Histórico de Resgates</CardTitle>
                  <CardDescription>
                    Suas recompensas resgatadas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b">
                      <div>
                        <p className="text-sm font-medium">Mac FEI - 10% desconto</p>
                        <p className="text-xs text-muted-foreground">Código: MAC2024FEI</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">-100 pts</p>
                        <p className="text-xs text-muted-foreground">há 3 dias</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b">
                      <div>
                        <p className="text-sm font-medium">Jujuca - 15% desconto</p>
                        <p className="text-xs text-muted-foreground">Código: JUJU15FEI</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">-150 pts</p>
                        <p className="text-xs text-muted-foreground">há 1 semana</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Activity Tab */}
            <TabsContent value="activity" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Atividade Recente
                  </CardTitle>
                  <CardDescription>
                    Suas últimas atividades na plataforma
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Feedback positivo recebido de Maria Santos</p>
                        <p className="text-xs text-muted-foreground">Grupo Alpha • há 2 dias</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">+15 pts</Badge>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Feedback dado para Carlos Lima</p>
                        <p className="text-xs text-muted-foreground">Grupo Alpha • há 1 dia</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Recompensa resgatada no Mac FEI</p>
                        <p className="text-xs text-muted-foreground">há 3 dias</p>
                      </div>
                      <Badge className="bg-red-100 text-red-800 text-xs">-100 pts</Badge>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Entrou no Grupo Gamma</p>
                        <p className="text-xs text-muted-foreground">Banco de Dados - CC5NA • há 1 semana</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Feedback positivo recebido de João Silva</p>
                        <p className="text-xs text-muted-foreground">Grupo Beta • há 1 semana</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">+10 pts</Badge>
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
