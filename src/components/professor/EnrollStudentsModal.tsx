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
  _count: {
    enrollments: number
    groups: number
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
  const [students, setStudents] = useState<Student[]>([])
  const [selectedStudents, setSelectedStudents] = useState<Student[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [searching, setSearching] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  // Fetch available students when modal opens
  useEffect(() => {
    if (open) {
      fetchAvailableStudents()
    }
  }, [open])

  const fetchAvailableStudents = async () => {
    try {
      setSearching(true)
      setErrors({})

      // Get all students
      const response = await fetch('/api/users?role=STUDENT&limit=1000')
      
      if (!response.ok) {
        throw new Error('Erro ao buscar estudantes')
      }

      const data = await response.json()
      
      // Get students already enrolled in this class
      const enrolledResponse = await fetch(`/api/classes/${classData.id}/students`)
      let enrolledStudentIds: string[] = []
      
      if (enrolledResponse.ok) {
        const enrolledData = await enrolledResponse.json()
        enrolledStudentIds = enrolledData.students.map((s: any) => s.id)
      }

      // Filter out already enrolled students
      const availableStudents = data.users.filter((student: Student) => 
        !enrolledStudentIds.includes(student.id)
      )

      setStudents(availableStudents)
    } catch (error) {
      console.error('Error fetching students:', error)
      setErrors({ general: 'Erro ao carregar estudantes disponíveis' })
    } finally {
      setSearching(false)
    }
  }

  // Filter students based on search term
  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.studentId.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
          <Button variant="outline" size="sm">
            <UserPlus className="h-4 w-4 mr-2" />
            Matricular Estudantes
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>Matricular Estudantes</DialogTitle>
          <DialogDescription>
            Selecione os estudantes que deseja matricular na turma <strong>{classData.code} - {classData.name}</strong>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 overflow-y-auto">
          {errors.general && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {errors.general}
            </div>
          )}

          {/* Search Input */}
          <div className="space-y-2">
            <Label htmlFor="search">Buscar estudantes</Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                id="search"
                placeholder="Digite o nome, email ou RA do estudante..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Selected Students */}
          {selectedStudents.length > 0 && (
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">
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
                      <span className="text-xs">
                        {student.name} ({student.studentId})
                      </span>
                      <button
                        onClick={() => removeStudent(student.id)}
                        className="ml-1 text-gray-500 hover:text-gray-700"
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
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Users className="h-4 w-4" />
                Estudantes Disponíveis
                {searching && <Loader2 className="h-4 w-4 animate-spin" />}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              {searching ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                  <span className="ml-2 text-sm text-gray-600">Carregando estudantes...</span>
                </div>
              ) : filteredStudents.length === 0 ? (
                <div className="text-center py-8">
                  <Users className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {searchTerm ? 'Nenhum estudante encontrado' : 'Nenhum estudante disponível'}
                  </h3>
                  <p className="text-gray-600">
                    {searchTerm 
                      ? 'Tente ajustar os termos da busca.' 
                      : 'Todos os estudantes já estão matriculados nesta turma ou não há estudantes cadastrados no sistema.'
                    }
                  </p>
                </div>
              ) : (
                <div className="max-h-64 overflow-y-auto space-y-2">
                  {filteredStudents.map((student) => {
                    const isSelected = selectedStudents.find(s => s.id === student.id)
                    
                    return (
                      <div
                        key={student.id}
                        className={cn(
                          "flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-colors",
                          isSelected 
                            ? "bg-blue-50 border-blue-200" 
                            : "hover:bg-gray-50 border-gray-200"
                        )}
                        onClick={() => isSelected ? removeStudent(student.id) : addStudent(student)}
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium text-sm">{student.name}</h4>
                            <Badge variant="outline" className="text-xs">
                              {student.studentId}
                            </Badge>
                          </div>
                          <p className="text-xs text-gray-600 mt-1">{student.email}</p>
                        </div>
                        <div className="ml-2">
                          {isSelected ? (
                            <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button 
            onClick={handleSubmit} 
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
      </DialogContent>
    </Dialog>
  )
}
