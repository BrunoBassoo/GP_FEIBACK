'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MessageSquare, Loader2, AlertCircle, Search, Filter, ChevronLeft, ChevronRight, Users } from 'lucide-react'
import { formatDateTime } from '@/lib/utils'
import Link from 'next/link'

interface FeedbackItem {
  id: string
  content: string
  type: string
  points?: number
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

interface FeedbackResponse {
  feedback: FeedbackItem[]
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

const CATEGORIES = [
  { value: 'collaboration', label: 'Colaboração' },
  { value: 'communication', label: 'Comunicação' },
  { value: 'contribution', label: 'Contribuição' },
  { value: 'punctuality', label: 'Pontualidade' },
  { value: 'reliability', label: 'Confiabilidade' },
]

const FEEDBACK_TYPES = [
  { value: 'POSITIVE', label: 'Positivo' },
  { value: 'IMPROVEMENT', label: 'Melhoria' },
]

export default function StudentFeedbackPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  console.log('StudentFeedbackPage rendered', { status, session: session?.user, loading })

  // My feedback data
  const [receivedFeedback, setReceivedFeedback] = useState<FeedbackResponse | null>(null)
  const [givenFeedback, setGivenFeedback] = useState<FeedbackResponse | null>(null)
  const [publicFeedback, setPublicFeedback] = useState<FeedbackResponse | null>(null)

  // Pagination states
  const [receivedPage, setReceivedPage] = useState(1)
  const [givenPage, setGivenPage] = useState(1)
  const [publicPage, setPublicPage] = useState(1)

  // Filter states for public feedback
  const [publicTypeFilter, setPublicTypeFilter] = useState<string>('all')
  const [publicCategoryFilter, setPublicCategoryFilter] = useState<string>('all')
  const [publicSearch, setPublicSearch] = useState<string>('')
  const [searchInput, setSearchInput] = useState<string>('')

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

    fetchAllFeedback()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, status])

  useEffect(() => {
    if (session && session.user.role === 'STUDENT' && receivedPage > 0) {
      fetchReceivedFeedback()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [receivedPage])

  useEffect(() => {
    if (session && session.user.role === 'STUDENT' && givenPage > 0) {
      fetchGivenFeedback()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [givenPage])

  useEffect(() => {
    if (session && session.user.role === 'STUDENT' && publicPage > 0) {
      fetchPublicFeedback()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicPage, publicTypeFilter, publicCategoryFilter, publicSearch])

  const fetchAllFeedback = async () => {
    setLoading(true)
    await Promise.all([
      fetchReceivedFeedback(),
      fetchGivenFeedback(),
      fetchPublicFeedback(),
    ])
    setLoading(false)
  }

  const fetchReceivedFeedback = async () => {
    try {
      if (!session?.user?.id) {
        console.log('No session available yet')
        return
      }
      
      setError(null)
      const response = await fetch(
        `/api/feedback?receiverId=${session.user.id}&page=${receivedPage}&limit=10`
      )

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Received feedback error:', errorText)
        throw new Error('Erro ao carregar feedbacks recebidos')
      }

      const data = await response.json()
      setReceivedFeedback(data)
    } catch (error) {
      console.error('Error fetching received feedback:', error)
      setError(error instanceof Error ? error.message : 'Erro desconhecido')
    }
  }

  const fetchGivenFeedback = async () => {
    try {
      if (!session?.user?.id) {
        console.log('No session available yet')
        return
      }
      
      setError(null)
      const response = await fetch(
        `/api/feedback?giverId=${session.user.id}&page=${givenPage}&limit=10`
      )

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Given feedback error:', errorText)
        throw new Error('Erro ao carregar feedbacks dados')
      }

      const data = await response.json()
      setGivenFeedback(data)
    } catch (error) {
      console.error('Error fetching given feedback:', error)
      setError(error instanceof Error ? error.message : 'Erro desconhecido')
    }
  }

  const fetchPublicFeedback = async () => {
    try {
      if (!session?.user?.id) {
        console.log('No session available yet')
        return
      }
      
      setError(null)
      const params = new URLSearchParams({
        page: publicPage.toString(),
        limit: '15',
      })

      if (publicTypeFilter !== 'all') {
        params.append('type', publicTypeFilter)
      }

      if (publicCategoryFilter !== 'all') {
        params.append('category', publicCategoryFilter)
      }

      if (publicSearch) {
        params.append('search', publicSearch)
      }

      const response = await fetch(`/api/feedback/public?${params}`)

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Public feedback error:', errorText)
        throw new Error('Erro ao carregar feedbacks públicos')
      }

      const data = await response.json()
      setPublicFeedback(data)
    } catch (error) {
      console.error('Error fetching public feedback:', error)
      setError(error instanceof Error ? error.message : 'Erro desconhecido')
    }
  }

  const handleSearch = () => {
    setPublicSearch(searchInput)
    setPublicPage(1)
  }

  const handleClearFilters = () => {
    setPublicTypeFilter('all')
    setPublicCategoryFilter('all')
    setPublicSearch('')
    setSearchInput('')
    setPublicPage(1)
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
                <p className="text-gray-600">Carregando feedbacks...</p>
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

  // Always render the page, show errors as alerts if they exist

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
            <h1 className="text-3xl font-bold text-gray-900">
              Feedbacks
            </h1>
            <p className="mt-2 text-gray-600">
              Visualize todos os seus feedbacks recebidos, dados e feedbacks públicos da faculdade
            </p>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-md p-4 flex items-start">
              <AlertCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-red-800 font-medium">Erro ao carregar dados</p>
                <p className="text-red-600 text-sm mt-1">{error}</p>
                <Button 
                  onClick={fetchAllFeedback} 
                  variant="outline" 
                  size="sm" 
                  className="mt-3"
                >
                  Tentar Novamente
                </Button>
              </div>
            </div>
          )}

          {/* Tabs */}
          <Tabs defaultValue="received" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="received">
                <MessageSquare className="h-4 w-4 mr-2" />
                Recebidos
              </TabsTrigger>
              <TabsTrigger value="given">
                <MessageSquare className="h-4 w-4 mr-2" />
                Dados
              </TabsTrigger>
              <TabsTrigger value="public">
                <Users className="h-4 w-4 mr-2" />
                Públicos da Faculdade
              </TabsTrigger>
            </TabsList>

            {/* Received Feedback Tab */}
            <TabsContent value="received" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2 text-green-500" />
                      Feedbacks Recebidos
                    </span>
                    <Badge variant="secondary">
                      {receivedFeedback?.pagination.total || 0} total
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    Todos os feedbacks que você recebeu dos seus colegas de grupo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!receivedFeedback?.feedback.length ? (
                    <div className="text-center py-12">
                      <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                      <p className="text-lg font-medium text-gray-900 mb-2">
                        Nenhum feedback recebido ainda
                      </p>
                      <p className="text-sm text-gray-600">
                        Você ainda não recebeu nenhum feedback dos seus colegas
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-4">
                        {receivedFeedback.feedback.map((feedback) => (
                          <div
                            key={feedback.id}
                            className={`border-l-4 pl-4 py-3 rounded-r-lg ${
                              feedback.type === 'POSITIVE'
                                ? 'border-green-500 bg-green-50'
                                : 'border-yellow-500 bg-yellow-50'
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <p className="text-sm font-medium text-gray-900">
                                    De: {feedback.giver?.name}
                                  </p>
                                  <Badge variant="outline" className="text-xs">
                                    RA: {feedback.giver?.studentId}
                                  </Badge>
                                </div>
                                <p className="text-sm text-gray-700 mb-2">
                                  &ldquo;{feedback.content}&rdquo;
                                </p>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <Badge variant="outline" className="text-xs">
                                    {CATEGORIES.find((c) => c.value === feedback.category)?.label || feedback.category}
                                  </Badge>
                                  <Badge
                                    className={`text-xs ${
                                      feedback.type === 'POSITIVE'
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-yellow-100 text-yellow-800'
                                    }`}
                                  >
                                    {feedback.type === 'POSITIVE' ? 'Positivo' : 'Melhoria'}
                                  </Badge>
                                  <span className="text-xs text-gray-500">
                                    {formatDateTime(feedback.createdAt)}
                                  </span>
                                </div>
                              </div>
                              <Badge
                                variant="secondary"
                                className={`ml-4 text-sm font-semibold ${
                                  (feedback.points || 0) > 0
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-red-100 text-red-800'
                                }`}
                              >
                                {(feedback.points || 0) > 0 ? '+' : ''}
                                {feedback.points || 0} pts
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Pagination */}
                      {receivedFeedback.pagination.pages > 1 && (
                        <div className="flex items-center justify-between mt-6 pt-6 border-t">
                          <p className="text-sm text-gray-600">
                            Página {receivedFeedback.pagination.page} de {receivedFeedback.pagination.pages}
                          </p>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setReceivedPage((p) => Math.max(1, p - 1))}
                              disabled={receivedPage === 1}
                            >
                              <ChevronLeft className="h-4 w-4 mr-1" />
                              Anterior
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setReceivedPage((p) => p + 1)}
                              disabled={receivedPage === receivedFeedback.pagination.pages}
                            >
                              Próxima
                              <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Given Feedback Tab */}
            <TabsContent value="given" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2 text-blue-500" />
                      Feedbacks Dados
                    </span>
                    <Badge variant="secondary">
                      {givenFeedback?.pagination.total || 0} total
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    Todos os feedbacks que você deu para seus colegas de grupo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!givenFeedback?.feedback.length ? (
                    <div className="text-center py-12">
                      <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                      <p className="text-lg font-medium text-gray-900 mb-2">
                        Nenhum feedback dado ainda
                      </p>
                      <p className="text-sm text-gray-600 mb-4">
                        Você ainda não deu nenhum feedback para seus colegas
                      </p>
                      <Link href="/student/dashboard">
                        <Button className="fei-gradient">
                          Ir para Meus Grupos
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-4">
                        {givenFeedback.feedback.map((feedback) => (
                          <div
                            key={feedback.id}
                            className="border-l-4 border-blue-500 pl-4 py-3 rounded-r-lg bg-blue-50"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <p className="text-sm font-medium text-gray-900">
                                    Para: {feedback.receiver?.name}
                                  </p>
                                  <Badge variant="outline" className="text-xs">
                                    RA: {feedback.receiver?.studentId}
                                  </Badge>
                                </div>
                                <p className="text-sm text-gray-700 mb-2">
                                  &ldquo;{feedback.content}&rdquo;
                                </p>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <Badge variant="outline" className="text-xs">
                                    {CATEGORIES.find((c) => c.value === feedback.category)?.label || feedback.category}
                                  </Badge>
                                  <Badge
                                    className={`text-xs ${
                                      feedback.type === 'POSITIVE'
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-yellow-100 text-yellow-800'
                                    }`}
                                  >
                                    {feedback.type === 'POSITIVE' ? 'Positivo' : 'Melhoria'}
                                  </Badge>
                                  <span className="text-xs text-gray-500">
                                    {formatDateTime(feedback.createdAt)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Pagination */}
                      {givenFeedback.pagination.pages > 1 && (
                        <div className="flex items-center justify-between mt-6 pt-6 border-t">
                          <p className="text-sm text-gray-600">
                            Página {givenFeedback.pagination.page} de {givenFeedback.pagination.pages}
                          </p>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setGivenPage((p) => Math.max(1, p - 1))}
                              disabled={givenPage === 1}
                            >
                              <ChevronLeft className="h-4 w-4 mr-1" />
                              Anterior
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setGivenPage((p) => p + 1)}
                              disabled={givenPage === givenFeedback.pagination.pages}
                            >
                              Próxima
                              <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Public Feedback Tab */}
            <TabsContent value="public" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-purple-500" />
                      Feedbacks Públicos da Faculdade
                    </span>
                    <Badge variant="secondary">
                      {publicFeedback?.pagination.total || 0} total
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    Feedbacks públicos de todos os estudantes da FEI (pontos ocultos por privacidade)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Filters */}
                  <div className="mb-6 space-y-4">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            type="text"
                            placeholder="Buscar por nome ou conteúdo..."
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <Button onClick={handleSearch} className="fei-gradient">
                        <Search className="h-4 w-4 mr-2" />
                        Buscar
                      </Button>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <Select
                          value={publicTypeFilter}
                          onValueChange={(value) => {
                            setPublicTypeFilter(value)
                            setPublicPage(1)
                          }}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Filtrar por tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">Todos os tipos</SelectItem>
                            {FEEDBACK_TYPES.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex-1">
                        <Select
                          value={publicCategoryFilter}
                          onValueChange={(value) => {
                            setPublicCategoryFilter(value)
                            setPublicPage(1)
                          }}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Filtrar por categoria" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">Todas as categorias</SelectItem>
                            {CATEGORIES.map((category) => (
                              <SelectItem key={category.value} value={category.value}>
                                {category.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {(publicTypeFilter !== 'all' ||
                        publicCategoryFilter !== 'all' ||
                        publicSearch) && (
                        <Button variant="outline" onClick={handleClearFilters}>
                          <Filter className="h-4 w-4 mr-2" />
                          Limpar Filtros
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Feedback List */}
                  {!publicFeedback?.feedback.length ? (
                    <div className="text-center py-12">
                      <Users className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                      <p className="text-lg font-medium text-gray-900 mb-2">
                        Nenhum feedback público encontrado
                      </p>
                      <p className="text-sm text-gray-600">
                        {publicSearch || publicTypeFilter !== 'all' || publicCategoryFilter !== 'all'
                          ? 'Tente ajustar os filtros de busca'
                          : 'Ainda não há feedbacks públicos disponíveis'}
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-4">
                        {publicFeedback.feedback.map((feedback) => (
                          <div
                            key={feedback.id}
                            className={`border-l-4 pl-4 py-3 rounded-r-lg ${
                              feedback.type === 'POSITIVE'
                                ? 'border-green-500 bg-green-50'
                                : 'border-yellow-500 bg-yellow-50'
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2 flex-wrap">
                                  <p className="text-sm font-medium text-gray-900">
                                    {feedback.giver?.name}
                                  </p>
                                  <span className="text-sm text-gray-500">→</span>
                                  <p className="text-sm font-medium text-gray-900">
                                    {feedback.receiver?.name}
                                  </p>
                                </div>
                                <p className="text-sm text-gray-700 mb-2">
                                  &ldquo;{feedback.content}&rdquo;
                                </p>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <Badge variant="outline" className="text-xs">
                                    {CATEGORIES.find((c) => c.value === feedback.category)?.label || feedback.category}
                                  </Badge>
                                  <Badge
                                    className={`text-xs ${
                                      feedback.type === 'POSITIVE'
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-yellow-100 text-yellow-800'
                                    }`}
                                  >
                                    {feedback.type === 'POSITIVE' ? 'Positivo' : 'Melhoria'}
                                  </Badge>
                                  <span className="text-xs text-gray-500">
                                    {formatDateTime(feedback.createdAt)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Pagination */}
                      {publicFeedback.pagination.pages > 1 && (
                        <div className="flex items-center justify-between mt-6 pt-6 border-t">
                          <p className="text-sm text-gray-600">
                            Página {publicFeedback.pagination.page} de {publicFeedback.pagination.pages}
                          </p>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setPublicPage((p) => Math.max(1, p - 1))}
                              disabled={publicPage === 1}
                            >
                              <ChevronLeft className="h-4 w-4 mr-1" />
                              Anterior
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setPublicPage((p) => p + 1)}
                              disabled={publicPage === publicFeedback.pagination.pages}
                            >
                              Próxima
                              <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                          </div>
                        </div>
                      )}
                    </>
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

