'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { GroupMemberCard } from '@/components/shared/GroupMemberCard'
import { Users, MessageSquare, Award, TrendingUp, Star, Loader2, AlertCircle, Calendar } from 'lucide-react'
import { formatDate, formatDateTime } from '@/lib/utils'

interface StudentData {
  student: {
    groupMemberships: GroupMembership[]
    feedbackReceived: FeedbackItem[]
    feedbackGiven: FeedbackItem[]
  }
  stats: {
    totalPoints: number
    feedbackReceived: number
    feedbackGiven: number
    groupsJoined: number
    rewardsRedeemed: number
  }
  recentActivity: ActivityItem[]
}

interface GroupMembership {
  id: string
  joinedAt: string
  group: {
    id: string
    name: string
    description?: string
    _count: { members: number }
    class: {
      id: string
      name: string
      code: string
      semester: string
    }
    members: GroupMemberData[]
  }
}

interface GroupMemberData {
  id: string
  joinedAt: string
  user: {
    id: string
    name: string
    studentId: string
  }
}

interface FeedbackItem {
  id: string
  content: string
  type: string
  points: number
  category: string
  createdAt: string
  giver?: {
    id: string
    name: string
    studentId: string
  }
  receiver?: {
    id: string
    name: string
    studentId: string
  }
}

interface ActivityItem {
  type: string
  description: string
  points?: number
  createdAt: string
  category?: string
}

export default function StudentDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [studentData, setStudentData] = useState<StudentData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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
  }, [session, status, router])

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

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-blue-600" />
                <p className="text-gray-600">Carregando dados do estudante...</p>
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

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <AlertCircle className="h-12 w-12 mx-auto mb-4 text-red-500" />
                <p className="text-red-600 mb-4">{error}</p>
                <Button onClick={fetchStudentData} className="fei-gradient">
                  Tentar Novamente
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!studentData) {
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
                {studentData.stats.totalPoints} pontos
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
                <div className="text-2xl font-bold text-yellow-600">{studentData.stats.totalPoints}</div>
                <p className="text-xs text-muted-foreground">
                  {studentData.stats.totalPoints > 0 ? 'Pontos acumulados' : 'Nenhum ponto ainda'}
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
                <div className="text-2xl font-bold">{studentData.stats.groupsJoined}</div>
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
                <div className="text-2xl font-bold">{studentData.stats.feedbackReceived}</div>
                <p className="text-xs text-muted-foreground">
                  avaliações
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
                <div className="text-2xl font-bold">{studentData.stats.feedbackGiven}</div>
                <p className="text-xs text-muted-foreground">
                  avaliações feitas
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
                <div className="text-2xl font-bold">{studentData.stats.rewardsRedeemed}</div>
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
                <Badge variant="outline" className="text-sm">
                  {studentData.stats.groupsJoined} grupos
                </Badge>
              </div>

              {studentData.student.groupMemberships.length === 0 ? (
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center py-8">
                      <Users className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Nenhum grupo encontrado
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Você ainda não faz parte de nenhum grupo. Entre em contato com seu professor para ser adicionado a um grupo.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6">
                  {studentData.student.groupMemberships.map((membership) => (
                    <Card key={membership.id}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{membership.group.name}</CardTitle>
                            <CardDescription>
                              {membership.group.class.code} - {membership.group.class.name} ({membership.group.class.semester})
                            </CardDescription>
                            {membership.group.description && (
                              <p className="text-sm text-muted-foreground mt-2">
                                {membership.group.description}
                              </p>
                            )}
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {membership.group._count.members} membros
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {/* Group Stats */}
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              Entrou em {formatDate(membership.joinedAt)}
                            </span>
                            <span className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {membership.group._count.members} membros
                            </span>
                          </div>

                          {/* Group Members */}
                          <div>
                            <h4 className="font-medium mb-3 flex items-center">
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Colegas do Grupo
                            </h4>
                            
                            {membership.group.members.length === 0 ? (
                              <p className="text-sm text-muted-foreground py-4 text-center">
                                Você é o único membro deste grupo.
                              </p>
                            ) : (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            {/* Feedback Tab */}
            <TabsContent value="feedback" className="space-y-6">
              <div className="mb-4 flex justify-end">
                <Button 
                  onClick={() => router.push('/student/dashboard/feedback')}
                  className="fei-gradient"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Ver Todos os Feedbacks
                </Button>
              </div>
              
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
                    {studentData.student.feedbackReceived.length === 0 ? (
                      <div className="text-center py-8">
                        <MessageSquare className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                        <p className="text-sm text-muted-foreground">
                          Nenhum feedback recebido ainda
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4 max-h-80 overflow-y-auto">
                        {studentData.student.feedbackReceived.slice(0, 5).map((feedback) => (
                          <div 
                            key={feedback.id}
                            className={`border-l-4 pl-4 ${
                              feedback.type === 'POSITIVE' 
                                ? 'border-green-500' 
                                : 'border-yellow-500'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium">{feedback.giver?.name}</p>
                              <Badge 
                                variant="secondary" 
                                className={`text-xs ${
                                  feedback.points > 0 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-yellow-100 text-yellow-800'
                                }`}
                              >
                                {feedback.points > 0 ? '+' : ''}{feedback.points} pts
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              &ldquo;{feedback.content}&rdquo;
                            </p>
                            <div className="flex items-center justify-between mt-2">
                              <Badge variant="outline" className="text-xs">
                                {feedback.category}
                              </Badge>
                              <p className="text-xs text-muted-foreground">
                                {formatDateTime(feedback.createdAt)}
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
                    <CardTitle className="flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2 text-blue-500" />
                      Feedback Dado
                    </CardTitle>
                    <CardDescription>
                      Feedbacks que você deu para seus colegas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {studentData.student.feedbackGiven.length === 0 ? (
                      <div className="text-center py-8">
                        <MessageSquare className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                        <p className="text-sm text-muted-foreground mb-4">
                          Você ainda não deu nenhum feedback
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Avalie seus colegas na aba &ldquo;Meus Grupos&rdquo;
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4 max-h-80 overflow-y-auto">
                        {studentData.student.feedbackGiven.slice(0, 5).map((feedback) => (
                          <div key={feedback.id} className="border-l-4 border-blue-500 pl-4">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium">Para: {feedback.receiver?.name}</p>
                              <Badge 
                                variant="secondary" 
                                className={`text-xs ${
                                  feedback.type === 'POSITIVE' 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-yellow-100 text-yellow-800'
                                }`}
                              >
                                {feedback.type === 'POSITIVE' ? 'Positivo' : 'Melhoria'}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              &ldquo;{feedback.content}&rdquo;
                            </p>
                            <div className="flex items-center justify-between mt-2">
                              <Badge variant="outline" className="text-xs">
                                {feedback.category}
                              </Badge>
                              <p className="text-xs text-muted-foreground">
                                {formatDateTime(feedback.createdAt)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
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
                    Você tem <span className="font-medium text-yellow-600">{studentData.stats.totalPoints} pontos</span> disponíveis
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
                      <Button size="sm" className="w-full" disabled={studentData.stats.totalPoints < 100}>
                        {studentData.stats.totalPoints >= 100 ? 'Resgatar' : 'Pontos Insuficientes'}
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
                      <Button size="sm" className="w-full" disabled={studentData.stats.totalPoints < 150}>
                        {studentData.stats.totalPoints >= 150 ? 'Resgatar' : 'Pontos Insuficientes'}
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
                      <Button size="sm" className="w-full" disabled={studentData.stats.totalPoints < 200}>
                        {studentData.stats.totalPoints >= 200 ? 'Resgatar' : 'Pontos Insuficientes'}
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
                      <Button size="sm" className="w-full" disabled={studentData.stats.totalPoints < 300}>
                        {studentData.stats.totalPoints >= 300 ? 'Resgatar' : 'Pontos Insuficientes'}
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
                  {studentData.recentActivity.length === 0 ? (
                    <div className="text-center py-8">
                      <TrendingUp className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm text-muted-foreground">
                        Nenhuma atividade recente
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4 max-h-80 overflow-y-auto">
                      {studentData.recentActivity.map((activity, index: number) => (
                        <div key={index} className="flex items-center space-x-4">
                          <div 
                            className={`w-2 h-2 rounded-full ${
                              activity.type === 'feedback_received' && (activity.points ?? 0) > 0 ? 'bg-green-500' :
                              activity.type === 'feedback_received' && (activity.points ?? 0) <= 0 ? 'bg-yellow-500' :
                              activity.type === 'feedback_given' ? 'bg-blue-500' :
                              activity.type === 'reward_redeemed' ? 'bg-purple-500' :
                              'bg-gray-500'
                            }`}
                          ></div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{activity.description}</p>
                            <p className="text-xs text-muted-foreground">
                              {formatDateTime(activity.createdAt)}
                            </p>
                          </div>
                          {activity.points !== undefined && (
                            <Badge 
                              variant="secondary" 
                              className={`text-xs ${
                                activity.points > 0 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-red-100 text-red-800'
                              }`}
                            >
                              {activity.points > 0 ? '+' : ''}{activity.points} pts
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
