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
  BookOpen, 
  Users, 
  GraduationCap, 
  Search, 
  Plus, 
  Eye, 
  Settings, 
  UserPlus, 
  Trash2,
  Loader2 
} from 'lucide-react'
import { EnrollStudentsModal } from '@/components/admin/EnrollStudentsModal'
import { ViewClassStudentsModal } from '@/components/admin/ViewClassStudentsModal'
import { EditClassModal } from '@/components/admin/EditClassModal'
import { CreateClassModal } from '@/components/admin/CreateClassModal'

interface ClassItem {
  id: string
  name: string
  code: string
  description?: string
  semester: string
  professor?: { id: string; name: string }
  _count?: { enrollments: number; groups: number }
}

export default function AdminClassesPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [classes, setClasses] = useState<ClassItem[]>([])
  const [filteredClasses, setFilteredClasses] = useState<ClassItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [semesterFilter, setSemesterFilter] = useState<string>('all')
  const [semesters, setSemesters] = useState<string[]>([])
  
  // Modal states
  const [createClassModal, setCreateClassModal] = useState(false)
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

    fetchClasses()
  }, [session, status, router])

  useEffect(() => {
    let filtered = classes

    // Filter by search term
    if (searchTerm.trim()) {
      filtered = filtered.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.professor?.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by semester
    if (semesterFilter !== 'all') {
      filtered = filtered.filter(c => c.semester === semesterFilter)
    }

    setFilteredClasses(filtered)
  }, [searchTerm, semesterFilter, classes])

  const fetchClasses = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch('/api/classes')
      
      if (!response.ok) {
        throw new Error('Erro ao carregar turmas')
      }

      const data = await response.json()
      const classesArray = data.classes || []
      setClasses(classesArray)
      setFilteredClasses(classesArray)

      // Extract unique semesters
      const uniqueSemesters = Array.from(new Set(classesArray.map((c: ClassItem) => c.semester)))
      setSemesters(uniqueSemesters as string[])
    } catch (err) {
      console.error('Error fetching classes:', err)
      setError(err instanceof Error ? err.message : 'Erro desconhecido')
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteClass = async (classId: string, className: string) => {
    if (!confirm(`Tem certeza que deseja excluir a turma "${className}"?\n\nAtenção: Só é possível excluir turmas sem estudantes ou grupos matriculados.`)) {
      return
    }

    try {
      const response = await fetch(`/api/classes/${classId}`, {
        method: 'DELETE',
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao excluir turma')
      }

      // Refresh the list
      await fetchClasses()
      alert('Turma excluída com sucesso!')
    } catch (err) {
      console.error('Error deleting class:', err)
      alert(err instanceof Error ? err.message : 'Erro ao excluir turma')
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
                <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600">Carregando turmas...</p>
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

  // Calculate statistics
  const totalClasses = classes.length
  const totalStudents = classes.reduce((sum, c) => sum + (c._count?.enrollments || 0), 0)
  const totalGroups = classes.reduce((sum, c) => sum + (c._count?.groups || 0), 0)
  const averageStudentsPerClass = totalClasses > 0 ? (totalStudents / totalClasses).toFixed(1) : '0'

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
                  <BookOpen className="h-8 w-8" />
                  Gerenciamento de Turmas
                </h1>
                <p className="text-gray-600 mt-1">
                  Gerencie todas as turmas, estudantes e professores
                </p>
              </div>
              <Button onClick={() => setCreateClassModal(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Nova Turma
              </Button>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de Turmas</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalClasses}</div>
                <p className="text-xs text-muted-foreground">
                  {semesters.length} semestre{semesters.length !== 1 ? 's' : ''} ativo{semesters.length !== 1 ? 's' : ''}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de Estudantes</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalStudents}</div>
                <p className="text-xs text-muted-foreground">
                  Matriculados em turmas
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de Grupos</CardTitle>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalGroups}</div>
                <p className="text-xs text-muted-foreground">
                  Grupos formados
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Média por Turma</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{averageStudentsPerClass}</div>
                <p className="text-xs text-muted-foreground">
                  Estudantes por turma
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Buscar por código, nome ou professor..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={semesterFilter} onValueChange={setSemesterFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filtrar por semestre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os Semestres</SelectItem>
                    {semesters.map((semester) => (
                      <SelectItem key={semester} value={semester}>
                        {semester}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Error State */}
          {error && (
            <Card className="mb-6 border-red-200 bg-red-50">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-red-600 mb-4">{error}</p>
                  <Button onClick={fetchClasses} variant="outline">
                    Tentar Novamente
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Classes List */}
          {filteredClasses.length === 0 ? (
            <Card>
              <CardContent className="pt-6">
                <div className="text-center py-12">
                  <BookOpen className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {searchTerm || semesterFilter !== 'all' ? 'Nenhuma turma encontrada' : 'Nenhuma turma criada'}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {searchTerm || semesterFilter !== 'all' 
                      ? 'Tente ajustar os filtros de busca'
                      : 'Comece criando uma nova turma'}
                  </p>
                  {!searchTerm && semesterFilter === 'all' && (
                    <Button onClick={() => setCreateClassModal(true)}>
                      <Plus className="h-4 w-4 mr-2" />
                      Criar Primeira Turma
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClasses.map((classItem) => (
                <Card key={classItem.id} className="hover:shadow-lg transition-shadow">
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
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm gap-2">
                        <span className="shrink-0 text-muted-foreground">Professor:</span>
                        <span className="font-medium truncate text-right">{classItem.professor?.name || 'N/A'}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Estudantes:</span>
                        <Badge variant="outline">{classItem._count?.enrollments || 0}</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Grupos:</span>
                        <Badge variant="outline">{classItem._count?.groups || 0}</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Status:</span>
                        <Badge variant={(classItem._count?.enrollments || 0) > 0 ? 'default' : 'secondary'} className="text-xs">
                          {(classItem._count?.enrollments || 0) > 0 ? 'Ativa' : 'Sem estudantes'}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
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
                        onStudentsEnrolled={() => fetchClasses()}
                        trigger={
                          <Button size="sm" variant="outline" className="w-full">
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
                        <Settings className="h-4 w-4 mr-1" />
                        Editar
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDeleteClass(classItem.id, classItem.code)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Excluir
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      <CreateClassModal
        open={createClassModal}
        onOpenChange={setCreateClassModal}
        onClassCreated={() => {
          fetchClasses()
          setCreateClassModal(false)
        }}
      />

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
            fetchClasses()
            setEditClassModal({ open: false, classData: null })
          }}
        />
      )}
    </div>
  )
}

