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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  MessageSquare, 
  Search, 
  Loader2,
  TrendingUp,
  ThumbsUp,
  AlertCircle,
  Filter,
  Download
} from 'lucide-react'

interface Feedback {
  id: string
  content: string
  type: 'POSITIVE' | 'IMPROVEMENT'
  points?: number // Optional for public feedback from student view
  category: string
  isPublic?: boolean
  createdAt: string
  giver: {
    id: string
    name: string
    studentId: string
    groupMemberships?: Array<{
      group: {
        id: string
        name: string
        class: {
          id: string
          name: string
          code: string
        }
      }
    }>
  }
  receiver: {
    id: string
    name: string
    studentId: string
  }
}

interface Class {
  id: string
  name: string
  code: string
}

interface Group {
  id: string
  name: string
  classId: string
}

interface StudentCategory {
  name: string
  averagePoints: number
  totalPoints: number
  count: number
  positiveCount: number
  improvementCount: number
}

interface StudentStats {
  id: string
  name: string
  studentId: string
  totalPoints: number
  averagePoints: number
  totalFeedbacks: number
  positiveFeedbacks: number
  improvementFeedbacks: number
  categories: StudentCategory[]
  strengths: StudentCategory[]
  weaknesses: StudentCategory[]
}

export default function ProfessorFeedbackPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  // Data
  const [myClassFeedback, setMyClassFeedback] = useState<Feedback[]>([])
  const [publicFeedback, setPublicFeedback] = useState<Feedback[]>([])
  const [classes, setClasses] = useState<Class[]>([])
  const [groups, setGroups] = useState<Group[]>([])
  const [studentStats, setStudentStats] = useState<StudentStats[]>([])
  const [loadingStats, setLoadingStats] = useState(false)
  
  // Filters
  const [searchTerm, setSearchTerm] = useState('')
  const [studentSearchTerm, setStudentSearchTerm] = useState('')
  const [typeFilter, setTypeFilter] = useState<string>('all')
  const [categoryFilter, setCategoryFilter] = useState<string>('all')
  const [classFilter, setClassFilter] = useState<string>('all')
  const [groupFilter, setGroupFilter] = useState<string>('all')

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

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)

      const [classesResponse, groupsResponse, feedbackResponse, publicFeedbackResponse] = await Promise.all([
        fetch('/api/classes'),
        fetch('/api/groups'),
        fetch('/api/feedback?limit=1000'),
        fetch('/api/feedback/public?limit=1000')
      ])
      
      if (!classesResponse.ok || !groupsResponse.ok || !feedbackResponse.ok || !publicFeedbackResponse.ok) {
        throw new Error('Erro ao carregar dados')
      }

      const classesData = await classesResponse.json()
      const groupsData = await groupsResponse.json()
      const feedbackData = await feedbackResponse.json()
      const publicFeedbackData = await publicFeedbackResponse.json()
      
      setClasses(classesData.classes || [])
      setGroups(groupsData.groups || [])
      setMyClassFeedback(feedbackData.feedback || [])
      setPublicFeedback(publicFeedbackData.feedback || [])
    } catch (err) {
      console.error('Error fetching data:', err)
      setError(err instanceof Error ? err.message : 'Erro desconhecido')
    } finally {
      setLoading(false)
    }
  }

  const fetchStudentStats = async () => {
    try {
      setLoadingStats(true)
      const params = new URLSearchParams()
      if (classFilter !== 'all') params.append('classId', classFilter)
      if (groupFilter !== 'all') params.append('groupId', groupFilter)

      const res = await fetch(`/api/analytics/students-by-category?${params.toString()}`)
      if (res.ok) {
        const data = await res.json()
        setStudentStats(data.students || [])
      }
    } catch (err) {
      console.error('Error fetching student stats:', err)
    } finally {
      setLoadingStats(false)
    }
  }

  // Fetch student stats when filters change
  useEffect(() => {
    if (session?.user?.role === 'PROFESSOR') {
      fetchStudentStats()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classFilter, groupFilter])

  const filterFeedback = (feedbackList: Feedback[]) => {
    return feedbackList.filter(f => {
      // Search filter
      if (searchTerm.trim()) {
        const search = searchTerm.toLowerCase()
        const matchesSearch = 
          f.content.toLowerCase().includes(search) ||
          f.giver.name.toLowerCase().includes(search) ||
          f.receiver.name.toLowerCase().includes(search) ||
          f.giver.studentId.toLowerCase().includes(search) ||
          f.receiver.studentId.toLowerCase().includes(search)
        
        if (!matchesSearch) return false
      }

      // Type filter
      if (typeFilter !== 'all' && f.type !== typeFilter) {
        return false
      }

      // Category filter
      if (categoryFilter !== 'all' && f.category !== categoryFilter) {
        return false
      }

      // Class filter (only for my class feedback)
      if (classFilter !== 'all' && f.giver.groupMemberships) {
        const hasClass = f.giver.groupMemberships.some(m => m.group.class.id === classFilter)
        if (!hasClass) return false
      }

      // Group filter (only for my class feedback)
      if (groupFilter !== 'all' && f.giver.groupMemberships) {
        const hasGroup = f.giver.groupMemberships.some(m => m.group.id === groupFilter)
        if (!hasGroup) return false
      }

      return true
    })
  }

  const filteredMyClassFeedback = filterFeedback(myClassFeedback)
  const filteredPublicFeedback = filterFeedback(publicFeedback)

  // Calculate statistics
  const calculateStats = (feedbackList: Feedback[]) => {
    const total = feedbackList.length
    const positive = feedbackList.filter(f => f.type === 'POSITIVE').length
    const improvement = feedbackList.filter(f => f.type === 'IMPROVEMENT').length
    const totalPoints = feedbackList.reduce((sum, f) => sum + f.points, 0)
    const averagePoints = total > 0 ? (totalPoints / total).toFixed(1) : '0.0'
    const positivePercentage = total > 0 ? Math.round((positive / total) * 100) : 0

    return { total, positive, improvement, averagePoints, positivePercentage }
  }

  const myClassStats = calculateStats(filteredMyClassFeedback)
  const publicStats = calculateStats(filteredPublicFeedback)

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600">Carregando feedbacks...</p>
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

  const categoryLabels: Record<string, string> = {
    collaboration: 'Colaboração',
    communication: 'Comunicação',
    contribution: 'Contribuição',
    punctuality: 'Pontualidade',
    reliability: 'Confiabilidade'
  }

  const categories = ['collaboration', 'communication', 'contribution', 'punctuality', 'reliability']

  const FeedbackList = ({ feedbackList, showGroupInfo = false }: { feedbackList: Feedback[]; showGroupInfo?: boolean }) => (
    <div className="space-y-3">
      {feedbackList.length === 0 ? (
        <div className="text-center py-12">
          <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-400" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Nenhum feedback encontrado
          </h3>
          <p className="text-gray-600">
            {searchTerm || typeFilter !== 'all' || categoryFilter !== 'all' || classFilter !== 'all' || groupFilter !== 'all'
              ? 'Tente ajustar os filtros'
              : 'Feedbacks aparecerão aqui quando os estudantes começarem a avaliar'}
          </p>
        </div>
      ) : (
        feedbackList.map((feedback) => (
          <Card key={feedback.id} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant={feedback.type === 'POSITIVE' ? 'default' : 'secondary'}>
                    {feedback.type === 'POSITIVE' ? 'Positivo' : 'Melhoria'}
                  </Badge>
                  <Badge variant="outline">
                    {categoryLabels[feedback.category] || feedback.category}
                  </Badge>
                  {feedback.isPublic && (
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      Público
                    </Badge>
                  )}
                </div>
                {feedback.points !== undefined && (
                  <Badge 
                    variant="secondary"
                    className={`shrink-0 ${
                      feedback.points > 0 
                        ? 'bg-green-100 text-green-800' 
                        : feedback.points < 0
                        ? 'bg-red-100 text-red-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {feedback.points > 0 ? '+' : ''}{feedback.points} pts
                  </Badge>
                )}
              </div>

              <div className="mb-3">
                <p className="text-sm font-medium text-gray-700 mb-1">
                  {feedback.giver.name} ({feedback.giver.studentId}) → {feedback.receiver.name} ({feedback.receiver.studentId})
                </p>
                {showGroupInfo && feedback.giver.groupMemberships && feedback.giver.groupMemberships.length > 0 && (
                  <p className="text-xs text-muted-foreground">
                    {feedback.giver.groupMemberships[0].group.class.code} - {feedback.giver.groupMemberships[0].group.name}
                  </p>
                )}
              </div>

              <p className="text-sm text-gray-600 mb-3 italic">
                &ldquo;{feedback.content}&rdquo;
              </p>

              <p className="text-xs text-muted-foreground">
                {new Date(feedback.createdAt).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )

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
                  <MessageSquare className="h-8 w-8" />
                  Feedbacks
                </h1>
                <p className="text-gray-600 mt-1">
                  Acompanhe os feedbacks das suas turmas e feedbacks públicos
                </p>
              </div>
            </div>
          </div>

          {/* Error State */}
          {error && (
            <Card className="mb-6 border-red-200 bg-red-50">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-red-600">
                  <AlertCircle className="h-5 w-5" />
                  <p>{error}</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Filters */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filtros
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Buscar por conteúdo, nome ou RA..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os Tipos</SelectItem>
                    <SelectItem value="POSITIVE">Positivo</SelectItem>
                    <SelectItem value="IMPROVEMENT">Melhoria</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as Categorias</SelectItem>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {categoryLabels[cat]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={classFilter} onValueChange={setClassFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Turma" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as Turmas</SelectItem>
                    {classes.map((cls) => (
                      <SelectItem key={cls.id} value={cls.id}>
                        {cls.code} - {cls.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={groupFilter} onValueChange={setGroupFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Grupo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os Grupos</SelectItem>
                    {groups
                      .filter(g => classFilter === 'all' || g.classId === classFilter)
                      .map((group) => (
                        <SelectItem key={group.id} value={group.id}>
                          {group.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('')
                    setTypeFilter('all')
                    setCategoryFilter('all')
                    setClassFilter('all')
                    setGroupFilter('all')
                  }}
                >
                  Limpar Filtros
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Tabs defaultValue="myclass" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="myclass">
                Minhas Turmas
                <Badge variant="secondary" className="ml-2">{myClassStats.total}</Badge>
              </TabsTrigger>
              <TabsTrigger value="analysis">
                Análise por Aluno
                <Badge variant="secondary" className="ml-2">{studentStats.length}</Badge>
              </TabsTrigger>
              <TabsTrigger value="public">
                Feedbacks Públicos
                <Badge variant="secondary" className="ml-2">{publicStats.total}</Badge>
              </TabsTrigger>
            </TabsList>

            {/* My Class Feedback Tab */}
            <TabsContent value="myclass" className="space-y-6">
              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Total</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{myClassStats.total}</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      Positivos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">{myClassStats.positive}</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      Melhorias
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-yellow-600">{myClassStats.improvement}</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Média</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-purple-600">{myClassStats.averagePoints}</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium flex items-center gap-1">
                      <TrendingUp className="h-4 w-4" />
                      Positividade
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-600">{myClassStats.positivePercentage}%</div>
                  </CardContent>
                </Card>
              </div>

              {/* Feedback List */}
              <FeedbackList feedbackList={filteredMyClassFeedback} showGroupInfo={true} />
            </TabsContent>

            {/* Student Analysis Tab */}
            <TabsContent value="analysis" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Análise de Desempenho por Aluno</CardTitle>
                      <CardDescription>
                        Acompanhe as notas médias dos alunos por categoria para identificar forças e fraquezas individuais
                      </CardDescription>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const filteredStudents = studentStats.filter((student) => {
                          if (!studentSearchTerm.trim()) return true
                          const search = studentSearchTerm.toLowerCase()
                          return (
                            student.name.toLowerCase().includes(search) ||
                            student.studentId.toLowerCase().includes(search)
                          )
                        })

                        // Create CSV content
                        let csv = 'Nome,Matrícula,Total de Pontos,Média por Feedback,Feedbacks Positivos,Sugestões de Melhoria,Total de Feedbacks\n'
                        filteredStudents.forEach(student => {
                          csv += `"${student.name}","${student.studentId}",${student.totalPoints},${student.averagePoints.toFixed(1)},${student.positiveFeedbacks},${student.improvementFeedbacks},${student.totalFeedbacks}\n`
                        })

                        // Add category details
                        csv += '\n\nAnálise Detalhada por Categoria\n'
                        csv += 'Nome,Matrícula,Categoria,Média de Pontos,Total de Pontos,Quantidade de Feedbacks,Positivos,Melhorias\n'
                        filteredStudents.forEach(student => {
                          student.categories.forEach(category => {
                            csv += `"${student.name}","${student.studentId}","${category.name}",${category.averagePoints.toFixed(1)},${category.totalPoints},${category.count},${category.positiveCount},${category.improvementCount}\n`
                          })
                        })

                        // Download CSV
                        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
                        const link = document.createElement('a')
                        const url = URL.createObjectURL(blob)
                        link.setAttribute('href', url)
                        link.setAttribute('download', `analise-alunos-${new Date().toISOString().split('T')[0]}.csv`)
                        link.style.visibility = 'hidden'
                        document.body.appendChild(link)
                        link.click()
                        document.body.removeChild(link)
                      }}
                      disabled={studentStats.length === 0}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Exportar CSV
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Search Filter */}
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Buscar aluno por nome ou matrícula..."
                      value={studentSearchTerm}
                      onChange={(e) => setStudentSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>

                  {loadingStats ? (
                    <div className="flex justify-center items-center py-12">
                      <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                    </div>
                  ) : studentStats.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                      <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Nenhum dado disponível para análise</p>
                      <p className="text-sm mt-2">Os alunos precisam receber feedbacks para aparecer aqui</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {studentStats
                        .filter((student) => {
                          if (!studentSearchTerm.trim()) return true
                          const search = studentSearchTerm.toLowerCase()
                          return (
                            student.name.toLowerCase().includes(search) ||
                            student.studentId.toLowerCase().includes(search)
                          )
                        })
                        .map((student) => (
                        <Card key={student.id} className="border-2">
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-lg">
                                  {student.name}
                                  <Badge variant="outline" className="ml-2">
                                    {student.studentId}
                                  </Badge>
                                </CardTitle>
                                <CardDescription>
                                  {student.totalFeedbacks} feedback(s) recebido(s)
                                </CardDescription>
                              </div>
                              <Badge
                                variant="secondary"
                                className={`text-lg px-4 py-2 ${
                                  student.totalPoints > 0
                                    ? 'bg-green-100 text-green-800'
                                    : student.totalPoints < 0
                                    ? 'bg-red-100 text-red-800'
                                    : 'bg-gray-100 text-gray-800'
                                }`}
                              >
                                {student.totalPoints > 0 ? '+' : ''}
                                {student.totalPoints} pts
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            {/* Summary */}
                            <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                              <div className="text-center">
                                <p className="text-sm text-muted-foreground">Média por Feedback</p>
                                <p className="text-xl font-bold">
                                  {student.averagePoints.toFixed(1)} pts
                                </p>
                              </div>
                              <div className="text-center">
                                <p className="text-sm text-muted-foreground">Feedbacks Positivos</p>
                                <p className="text-xl font-bold text-green-600">
                                  {student.positiveFeedbacks}
                                </p>
                              </div>
                              <div className="text-center">
                                <p className="text-sm text-muted-foreground">Sugestões de Melhoria</p>
                                <p className="text-xl font-bold text-orange-600">
                                  {student.improvementFeedbacks}
                                </p>
                              </div>
                            </div>

                            {/* Strengths and Weaknesses */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {/* Strengths */}
                              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                                  <ThumbsUp className="h-4 w-4 mr-2" />
                                  Pontos Fortes
                                </h4>
                                {student.strengths.length > 0 ? (
                                  <div className="space-y-2">
                                    {student.strengths.map((category, idx) => (
                                      <div key={idx} className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-green-700">
                                          {category.name}
                                        </span>
                                        <Badge
                                          variant="secondary"
                                          className="bg-green-100 text-green-800"
                                        >
                                          {category.averagePoints.toFixed(1)} pts/feedback
                                        </Badge>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <p className="text-sm text-green-600">
                                    Nenhum ponto forte identificado ainda
                                  </p>
                                )}
                              </div>

                              {/* Weaknesses */}
                              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                <h4 className="font-semibold text-orange-800 mb-3 flex items-center">
                                  <TrendingUp className="h-4 w-4 mr-2" />
                                  Áreas para Desenvolvimento
                                </h4>
                                {student.weaknesses.length > 0 ? (
                                  <div className="space-y-2">
                                    {student.weaknesses.map((category, idx) => (
                                      <div key={idx} className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-orange-700">
                                          {category.name}
                                        </span>
                                        <Badge
                                          variant="secondary"
                                          className="bg-orange-100 text-orange-800"
                                        >
                                          {category.averagePoints.toFixed(1)} pts/feedback
                                        </Badge>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <p className="text-sm text-orange-600">
                                    Nenhuma área de desenvolvimento identificada
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* All Categories */}
                            <details className="group">
                              <summary className="cursor-pointer font-semibold text-sm text-gray-700 hover:text-gray-900 flex items-center">
                                <span>Ver todas as categorias ({student.categories.length})</span>
                                <svg className="ml-2 h-4 w-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </summary>
                              <div className="mt-4 space-y-2 border-t pt-4">
                                {student.categories.map((category, idx) => (
                                  <div
                                    key={idx}
                                    className="flex justify-between items-center p-2 bg-gray-50 rounded"
                                  >
                                    <div>
                                      <span className="text-sm font-medium">{category.name}</span>
                                      <p className="text-xs text-muted-foreground">
                                        {category.count} feedback(s) • {category.positiveCount} positivo(s) • {category.improvementCount} melhoria(s)
                                      </p>
                                    </div>
                                    <div className="text-right">
                                      <Badge
                                        variant="secondary"
                                        className={
                                          category.averagePoints > 0
                                            ? 'bg-green-100 text-green-800'
                                            : category.averagePoints < 0
                                            ? 'bg-red-100 text-red-800'
                                            : 'bg-gray-100 text-gray-800'
                                        }
                                      >
                                        {category.averagePoints.toFixed(1)} pts
                                      </Badge>
                                      <p className="text-xs text-muted-foreground mt-1">
                                        Total: {category.totalPoints} pts
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </details>
                          </CardContent>
                        </Card>
                        ))}
                      {studentStats.filter((student) => {
                        if (!studentSearchTerm.trim()) return true
                        const search = studentSearchTerm.toLowerCase()
                        return (
                          student.name.toLowerCase().includes(search) ||
                          student.studentId.toLowerCase().includes(search)
                        )
                      }).length === 0 && studentSearchTerm.trim() && (
                        <div className="text-center py-12 text-muted-foreground">
                          <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                          <p>Nenhum aluno encontrado</p>
                          <p className="text-sm mt-2">Tente buscar por outro nome ou matrícula</p>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Public Feedback Tab */}
            <TabsContent value="public" className="space-y-6">
              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Total</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{publicStats.total}</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      Positivos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">{publicStats.positive}</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      Melhorias
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-yellow-600">{publicStats.improvement}</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Média</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-purple-600">{publicStats.averagePoints}</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium flex items-center gap-1">
                      <TrendingUp className="h-4 w-4" />
                      Positividade
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-600">{publicStats.positivePercentage}%</div>
                  </CardContent>
                </Card>
              </div>

              {/* Feedback List */}
              <FeedbackList feedbackList={filteredPublicFeedback} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

