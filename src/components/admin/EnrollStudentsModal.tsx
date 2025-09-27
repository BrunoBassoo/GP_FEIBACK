'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { UserPlus, Loader2, Search, X, Users, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Student {
  id: string
  name: string
  email: string
  studentId: string
}

interface ClassData {
  id: string
  name: string
  code: string
  semester: string
  professor: {
    id: string
    name: string
  }
}

interface EnrollStudentsModalProps {
  trigger?: React.ReactNode
  classData: ClassData
  onStudentsEnrolled?: (enrolledStudents: Student[]) => void
}

export function EnrollStudentsModal({ 
  trigger, 
  classData, 
  onStudentsEnrolled 
}: EnrollStudentsModalProps) {
  const { data: session } = useSession()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [searchLoading, setSearchLoading] = useState(false)
  const [availableStudents, setAvailableStudents] = useState<Student[]>([])
  const [selectedStudents, setSelectedStudents] = useState<Student[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Fetch available students when modal opens
  useEffect(() => {
    if (open && session?.user?.role === 'ADMIN') {
      fetchAvailableStudents()
    }
  }, [open, session])

  // Filter students based on search term
  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = availableStudents.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.studentId.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setAvailableStudents(filtered)
    } else if (searchTerm === '') {
      fetchAvailableStudents()
    }
  }, [searchTerm])

  const fetchAvailableStudents = async () => {
    try {
      setSearchLoading(true)
      
      // Get all students
      const studentsResponse = await fetch('/api/users?role=STUDENT&limit=100')
      if (!studentsResponse.ok) {
        throw new Error('Erro ao carregar estudantes')
      }
      
      const studentsData = await studentsResponse.json()
      
      // Get already enrolled students
      const enrolledResponse = await fetch(`/api/classes/${classData.id}/students`)
      let enrolledStudentIds: string[] = []
      
      if (enrolledResponse.ok) {
        const enrolledData = await enrolledResponse.json()
        enrolledStudentIds = enrolledData.students?.map((s: any) => s.id) || []
      }
      
      // Filter out already enrolled students
      const available = studentsData.users?.filter(
        (student: Student) => !enrolledStudentIds.includes(student.id)
      ) || []
      
      setAvailableStudents(available)
    } catch (error) {
      console.error('Error fetching students:', error)
      setErrors({ general: 'Erro ao carregar estudantes disponíveis' })
    } finally {
      setSearchLoading(false)
    }
  }

  const addStudent = (student: Student) => {
    if (!selectedStudents.find(s => s.id === student.id)) {
      setSelectedStudents(prev => [...prev, student])
    }
  }

  const removeStudent = (studentId: string) => {
    setSelectedStudents(prev => prev.filter(s => s.id !== studentId))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (selectedStudents.length === 0) {
      setErrors({ general: 'Selecione pelo menos um estudante' })
      return
    }

    setLoading(true)

    try {
      const response = await fetch(`/api/classes/${classData.id}/enroll`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          studentIds: selectedStudents.map(s => s.id),
        }),
      })

      const data = await response.json()

      if (response.ok) {
        // Reset form
        setSelectedStudents([])
        setSearchTerm('')
        setErrors({})
        setOpen(false)

        // Notify parent component
        if (onStudentsEnrolled) {
          onStudentsEnrolled(data.enrollments || selectedStudents)
        }
      } else {
        setErrors({ general: data.message || 'Erro ao matricular estudantes' })
      }
    } catch (error) {
      setErrors({ general: 'Erro interno do servidor' })
    } finally {
      setLoading(false)
    }
  }

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      // Reset form when closing
      setSelectedStudents([])
      setSearchTerm('')
      setErrors({})
    }
    setOpen(newOpen)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="sm" className="fei-gradient">
            <UserPlus className="h-4 w-4 mr-2" />
            Matricular Estudantes
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <UserPlus className="h-5 w-5 mr-2" />
            Matricular Estudantes
          </DialogTitle>
          <DialogDescription>
            Matricule estudantes na turma <strong>{classData.code} - {classData.name}</strong> 
            (Prof. {classData.professor.name})
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {errors.general && (
            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
              {errors.general}
            </div>
          )}

          {/* Search Students */}
          <div className="space-y-2">
            <Label htmlFor="search">Buscar Estudantes</Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="search"
                placeholder="Nome, email ou RA do estudante..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              {searchLoading && (
                <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 animate-spin text-gray-400" />
              )}
            </div>
          </div>

          {/* Selected Students */}
          {selectedStudents.length > 0 && (
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-500" />
                  Estudantes Selecionados ({selectedStudents.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {selectedStudents.map((student) => (
                    <Badge
                      key={student.id}
                      variant="secondary"
                      className="flex items-center gap-1 py-1 px-2"
                    >
                      <span>{student.name}</span>
                      <span className="text-xs text-muted-foreground">
                        ({student.studentId})
                      </span>
                      <button
                        type="button"
                        onClick={() => removeStudent(student.id)}
                        className="ml-1 hover:bg-red-100 rounded-full p-0.5"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Available Students */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center">
                <Users className="h-4 w-4 mr-2" />
                Estudantes Disponíveis
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              {availableStudents.length > 0 ? (
                <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto">
                  {availableStudents
                    .filter(student => !selectedStudents.find(s => s.id === student.id))
                    .map((student) => (
                      <div
                        key={student.id}
                        className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                        onClick={() => addStudent(student)}
                      >
                        <div>
                          <p className="text-sm font-medium">{student.name}</p>
                          <p className="text-xs text-muted-foreground">
                            RA: {student.studentId} • {student.email}
                          </p>
                        </div>
                        <UserPlus className="h-4 w-4 text-blue-600" />
                      </div>
                    ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Users className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-muted-foreground">
                    {searchLoading ? 'Carregando...' : 
                     searchTerm ? 'Nenhum estudante encontrado' : 
                     'Todos os estudantes já estão matriculados'}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={loading || selectedStudents.length === 0}
              className="fei-gradient"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Matriculando...
                </>
              ) : (
                <>
                  <UserPlus className="h-4 w-4 mr-2" />
                  Matricular {selectedStudents.length} Estudante{selectedStudents.length !== 1 ? 's' : ''}
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

