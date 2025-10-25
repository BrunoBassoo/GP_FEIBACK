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
import { 
  Users, 
  Loader2, 
  AlertCircle, 
  ChevronLeft,
  Search,
  Filter,
  ChevronRight,
  Shield,
  GraduationCap,
  BookOpen,
  Mail,
  Calendar
} from 'lucide-react'
import Link from 'next/link'
import { formatDateTime } from '@/lib/utils'

interface User {
  id: string
  name: string
  email: string
  role: string
  studentId?: string
  createdAt: string
  _count: {
    feedbackGiven: number
    feedbackReceived: number
    groupMemberships: number
  }
}

interface UsersResponse {
  users: User[]
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

export default function AdminUsersPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [usersData, setUsersData] = useState<UsersResponse | null>(null)
  const [page, setPage] = useState(1)
  const [roleFilter, setRoleFilter] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchInput, setSearchInput] = useState('')

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

    fetchUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, status, page, roleFilter, searchQuery])

  const fetchUsers = async () => {
    try {
      setLoading(true)
      setError(null)

      const params = new URLSearchParams({
        page: page.toString(),
        limit: '20',
      })

      if (roleFilter !== 'all') {
        params.append('role', roleFilter)
      }

      const response = await fetch(`/api/users?${params}`)

      if (!response.ok) {
        throw new Error('Erro ao carregar usuários')
      }

      const data = await response.json()
      setUsersData(data)
    } catch (error) {
      console.error('Error fetching users:', error)
      setError(error instanceof Error ? error.message : 'Erro desconhecido')
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = () => {
    setSearchQuery(searchInput)
    setPage(1)
  }

  const handleClearFilters = () => {
    setRoleFilter('all')
    setSearchQuery('')
    setSearchInput('')
    setPage(1)
  }

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'ADMIN':
        return (
          <Badge className="bg-red-100 text-red-800">
            <Shield className="h-3 w-3 mr-1" />
            Administrador
          </Badge>
        )
      case 'PROFESSOR':
        return (
          <Badge className="bg-purple-100 text-purple-800">
            <BookOpen className="h-3 w-3 mr-1" />
            Professor
          </Badge>
        )
      case 'STUDENT':
        return (
          <Badge className="bg-blue-100 text-blue-800">
            <GraduationCap className="h-3 w-3 mr-1" />
            Estudante
          </Badge>
        )
      default:
        return <Badge variant="secondary">{role}</Badge>
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase()
  }

  const filteredUsers = usersData?.users.filter(user => {
    if (!searchQuery) return true
    const query = searchQuery.toLowerCase()
    return (
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.studentId?.toLowerCase().includes(query)
    )
  })

  if (status === 'loading' || (loading && !usersData)) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-blue-600" />
                <p className="text-gray-600">Carregando usuários...</p>
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

  const totalStudents = usersData?.users.filter(u => u.role === 'STUDENT').length || 0
  const totalProfessors = usersData?.users.filter(u => u.role === 'PROFESSOR').length || 0
  const totalAdmins = usersData?.users.filter(u => u.role === 'ADMIN').length || 0

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Header */}
          <div className="mb-6">
            <Link
              href="/admin/dashboard"
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 mb-4"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Voltar ao Dashboard
            </Link>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Gerenciamento de Usuários
                </h1>
                <p className="mt-2 text-gray-600">
                  Visualize e gerencie todos os usuários do sistema
                </p>
              </div>
              <Badge variant="outline" className="text-lg px-4 py-2">
                <Users className="h-5 w-5 mr-2" />
                {usersData?.pagination.total || 0} usuários
              </Badge>
            </div>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-md p-4 flex items-start">
              <AlertCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-red-800 font-medium">Erro ao carregar dados</p>
                <p className="text-red-600 text-sm mt-1">{error}</p>
                <Button 
                  onClick={fetchUsers} 
                  variant="outline" 
                  size="sm" 
                  className="mt-3"
                >
                  Tentar Novamente
                </Button>
              </div>
            </div>
          )}

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total de Usuários
                </CardTitle>
                <Users className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">
                  {usersData?.pagination.total || 0}
                </div>
                <p className="text-xs text-muted-foreground">
                  cadastrados no sistema
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Estudantes
                </CardTitle>
                <GraduationCap className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">
                  {totalStudents}
                </div>
                <p className="text-xs text-muted-foreground">
                  matriculados
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Professores
                </CardTitle>
                <BookOpen className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">
                  {totalProfessors}
                </div>
                <p className="text-xs text-muted-foreground">
                  ativos
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Administradores
                </CardTitle>
                <Shield className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">
                  {totalAdmins}
                </div>
                <p className="text-xs text-muted-foreground">
                  no sistema
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filtros
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Buscar</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Nome, email ou RA..."
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Tipo de Usuário</label>
                  <Select
                    value={roleFilter}
                    onValueChange={(value) => {
                      setRoleFilter(value)
                      setPage(1)
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Todos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="STUDENT">Estudantes</SelectItem>
                      <SelectItem value="PROFESSOR">Professores</SelectItem>
                      <SelectItem value="ADMIN">Administradores</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-end space-x-2">
                  <Button onClick={handleSearch} className="flex-1 fei-gradient">
                    <Search className="h-4 w-4 mr-2" />
                    Buscar
                  </Button>
                  {(roleFilter !== 'all' || searchQuery) && (
                    <Button variant="outline" onClick={handleClearFilters}>
                      Limpar
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Users List */}
          <Card>
            <CardHeader>
              <CardTitle>
                Lista de Usuários ({filteredUsers?.length || 0})
              </CardTitle>
              <CardDescription>
                Usuários cadastrados no sistema
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!filteredUsers || filteredUsers.length === 0 ? (
                <div className="text-center py-12">
                  <Users className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Nenhum usuário encontrado
                  </h3>
                  <p className="text-gray-600">
                    {searchQuery || roleFilter !== 'all'
                      ? 'Tente ajustar os filtros de busca'
                      : 'Ainda não há usuários cadastrados'}
                  </p>
                </div>
              ) : (
                <>
                  <div className="space-y-3">
                    {filteredUsers.map((user) => (
                      <div
                        key={user.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center space-x-4 flex-1">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-blue-600 font-semibold">
                              {getInitials(user.name)}
                            </span>
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-3 mb-1">
                              <h4 className="font-semibold text-gray-900 truncate">
                                {user.name}
                              </h4>
                              {getRoleBadge(user.role)}
                            </div>
                            
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span className="flex items-center">
                                <Mail className="h-3 w-3 mr-1" />
                                {user.email}
                              </span>
                              {user.studentId && (
                                <span className="flex items-center">
                                  <GraduationCap className="h-3 w-3 mr-1" />
                                  RA: {user.studentId}
                                </span>
                              )}
                              <span className="flex items-center">
                                <Calendar className="h-3 w-3 mr-1" />
                                {formatDateTime(user.createdAt)}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center space-x-6 text-sm text-gray-600">
                            <div className="text-center">
                              <p className="font-semibold text-gray-900">{user._count.groupMemberships}</p>
                              <p className="text-xs">Grupos</p>
                            </div>
                            <div className="text-center">
                              <p className="font-semibold text-gray-900">{user._count.feedbackGiven}</p>
                              <p className="text-xs">FB Dados</p>
                            </div>
                            <div className="text-center">
                              <p className="font-semibold text-gray-900">{user._count.feedbackReceived}</p>
                              <p className="text-xs">FB Recebidos</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  {usersData && usersData.pagination.pages > 1 && (
                    <div className="flex items-center justify-between mt-6 pt-6 border-t">
                      <p className="text-sm text-gray-600">
                        Página {usersData.pagination.page} de {usersData.pagination.pages}
                        {' '}({usersData.pagination.total} usuários total)
                      </p>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setPage((p) => Math.max(1, p - 1))}
                          disabled={page === 1}
                        >
                          <ChevronLeft className="h-4 w-4 mr-1" />
                          Anterior
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setPage((p) => p + 1)}
                          disabled={page === usersData.pagination.pages}
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
        </div>
      </div>
    </div>
  )
}


