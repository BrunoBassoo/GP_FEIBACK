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
  UserPlus,
  Loader2,
  TrendingUp,
  MessageSquare,
  Settings
} from 'lucide-react'
import { CreateClassModal } from '@/components/professor/CreateClassModal'
import { ViewClassStudentsModal } from '@/components/admin/ViewClassStudentsModal'
import { EnrollStudentsModal } from '@/components/professor/EnrollStudentsModal'
import { CreateGroupModal } from '@/components/professor/CreateGroupModal'
import { FeedbackTemplateModal } from '@/components/professor/FeedbackTemplateModal'

interface ClassItem {
  id: string
  name: string
  code: string
  description?: string
  semester: string
  professor?: { id: string; name: string }
  _count?: { enrollments: number; groups: number }
  enrollments?: Array<{
    user: {
      id: string
      name: string
      email: string
      studentId: string
    }
  }>
  groups?: Array<{
    id: string
    name: string
    _count?: { members: number }
  }>
  feedbackTemplate?: {
    id: string
    name: string
    _count: { categories: number }
  } | null
}

export default function ProfessorClassesPage() {
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
  const [viewStudentsModal, setViewStudentsModal] = useState<{ open: boolean; classData: any | null }>({ 
    open: false, 
    classData: null 
  })
  const [createGroupModalData, setCreateGroupModalData] = useState<{ open: boolean; classId?: string }>({ 
    open: false 
  })
  const [feedbackTemplateModal, setFeedbackTemplateModal] = useState<{ 
    open: boolean; 
    classId?: string; 
    className?: string;
    existingTemplate?: any 
  }>({ 
    open: false 
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

    fetchClasses()
  }, [session, status, router])

  useEffect(() => {
    let filtered = classes

    // Filter by search term
    if (searchTerm.trim()) {
      filtered = filtered.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.code.toLowerCase().includes(searchTerm.toLowerCase())
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

  if (!session || session.user.role !== 'PROFESSOR') {
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
                  Minhas Turmas
                </h1>
                <p className="text-gray-600 mt-1">
                  Gerencie suas turmas, estudantes e grupos
                </p>
              </div>
              <CreateClassModal 
                onClassCreated={() => fetchClasses()}
                trigger={
                  <Button className="fei-gradient">
                    <Plus className="h-4 w-4 mr-2" />
                    Nova Turma
                  </Button>
                }
              />
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Minhas Turmas</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalClasses}</div>
                <p className="text-xs text-muted-foreground">
                  {semesters.length} semestre{semesters.length !== 1 ? 's' : ''}
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
                  Matriculados
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
                  Grupos criados
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Média por Turma</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{averageStudentsPerClass}</div>
                <p className="text-xs text-muted-foreground">
                  Estudantes/turma
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
                    placeholder="Buscar por código ou nome..."
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
                      : 'Comece criando uma nova turma para gerenciar seus estudantes'}
                  </p>
                  {!searchTerm && semesterFilter === 'all' && (
                    <CreateClassModal 
                      onClassCreated={() => fetchClasses()}
                      trigger={
                        <Button className="fei-gradient">
                          <Plus className="h-4 w-4 mr-2" />
                          Criar Primeira Turma
                        </Button>
                      }
                    />
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
                        <div className="flex gap-2 mt-2">
                          {classItem.feedbackTemplate ? (
                            <Badge variant="default" className="text-xs bg-green-600">
                              ✓ Avaliação Configurada ({classItem.feedbackTemplate._count.categories} categorias)
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-xs text-orange-600 border-orange-300">
                              ⚠ Avaliação não configurada
                            </Badge>
                          )}
                        </div>
                      </div>
                      <Badge variant="secondary" className="shrink-0">{classItem.semester}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          Estudantes:
                        </span>
                        <Badge variant="outline">{classItem._count?.enrollments || 0}</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground flex items-center gap-2">
                          <GraduationCap className="h-4 w-4" />
                          Grupos:
                        </span>
                        <Badge variant="outline">{classItem._count?.groups || 0}</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Status:</span>
                        <Badge variant={(classItem._count?.groups || 0) > 0 ? 'default' : 'secondary'} className="text-xs">
                          {(classItem._count?.groups || 0) > 0 ? 'Ativa' : 'Sem grupos'}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-2">
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
                          className="w-full"
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          Ver Estudantes
                        </Button>
                        
                        <EnrollStudentsModal 
                          classData={{
                            ...classItem,
                            professor: classItem.professor || {
                              id: session?.user?.id || '',
                              name: session?.user?.name || ''
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
                      </div>
                      
                      <Button
                        size="sm"
                        variant="default"
                        className="w-full fei-gradient"
                        onClick={() => setCreateGroupModalData({ open: true, classId: classItem.id })}
                      >
                        <Plus className="h-4 w-4 mr-1" />
                        Criar Grupo
                      </Button>
                      
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full"
                        onClick={async () => {
                          // Fetch existing template if it exists
                          try {
                            const res = await fetch(`/api/feedback-templates?classId=${classItem.id}`)
                            if (res.ok) {
                              const data = await res.json()
                              setFeedbackTemplateModal({
                                open: true,
                                classId: classItem.id,
                                className: `${classItem.code} - ${classItem.name}`,
                                existingTemplate: data.template || undefined,
                              })
                            }
                          } catch (error) {
                            console.error('Error fetching template:', error)
                            setFeedbackTemplateModal({
                              open: true,
                              classId: classItem.id,
                              className: `${classItem.code} - ${classItem.name}`,
                            })
                          }
                        }}
                      >
                        <Settings className="h-4 w-4 mr-1" />
                        Configurar Avaliações
                      </Button>
                    </div>

                    {/* Quick Stats */}
                    {classItem.groups && classItem.groups.length > 0 && (
                      <div className="mt-4 pt-4 border-t">
                        <p className="text-xs font-medium text-muted-foreground mb-2">Grupos Recentes:</p>
                        <div className="space-y-1">
                          {classItem.groups.slice(0, 2).map((group) => (
                            <div key={group.id} className="flex items-center justify-between text-xs">
                              <span className="truncate flex-1">{group.name}</span>
                              <Badge variant="outline" className="text-xs ml-2">
                                {group._count?.members || 0} membros
                              </Badge>
                            </div>
                          ))}
                          {classItem.groups.length > 2 && (
                            <p className="text-xs text-muted-foreground">
                              +{classItem.groups.length - 2} mais grupo{classItem.groups.length - 2 !== 1 ? 's' : ''}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
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

      {createGroupModalData.open && (
        <CreateGroupModal
          onGroupCreated={() => {
            fetchClasses()
            setCreateGroupModalData({ open: false })
          }}
          trigger={null}
          defaultClassId={createGroupModalData.classId}
          open={createGroupModalData.open}
          onOpenChange={(open) => setCreateGroupModalData({ open })}
        />
      )}

      {/* Feedback Template Modal */}
      {feedbackTemplateModal.open && feedbackTemplateModal.classId && feedbackTemplateModal.className && (
        <FeedbackTemplateModal
          open={feedbackTemplateModal.open}
          onOpenChange={(open) => setFeedbackTemplateModal({ open })}
          classId={feedbackTemplateModal.classId}
          className={feedbackTemplateModal.className}
          existingTemplate={feedbackTemplateModal.existingTemplate}
          onSuccess={() => {
            fetchClasses()
            setFeedbackTemplateModal({ open: false })
          }}
        />
      )}
    </div>
  )
}


