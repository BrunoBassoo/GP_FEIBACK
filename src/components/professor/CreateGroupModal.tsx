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
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus, Users, X, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Student {
  id: string
  name: string
  studentId: string
}

interface Class {
  id: string
  name: string
  code: string
  semester: string
}

interface CreateGroupModalProps {
  trigger?: React.ReactNode
  onGroupCreated?: (group: any) => void
}

export function CreateGroupModal({ trigger, onGroupCreated }: CreateGroupModalProps) {
  const { data: session } = useSession()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [classes, setClasses] = useState<Class[]>([])
  const [availableStudents, setAvailableStudents] = useState<Student[]>([])
  const [selectedStudents, setSelectedStudents] = useState<Student[]>([])
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    classId: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Fetch professor's classes when modal opens
  useEffect(() => {
    if (open && session?.user?.role === 'PROFESSOR') {
      fetchClasses()
    }
  }, [open, session])

  // Fetch available students when class is selected
  useEffect(() => {
    if (formData.classId) {
      fetchStudentsInClass(formData.classId)
    }
  }, [formData.classId])

  const fetchClasses = async () => {
    try {
      const response = await fetch('/api/classes')
      if (response.ok) {
        const data = await response.json()
        setClasses(data.classes || [])
      }
    } catch (error) {
      console.error('Error fetching classes:', error)
    }
  }

  const fetchStudentsInClass = async (classId: string) => {
    try {
      const response = await fetch(`/api/classes/${classId}/students`)
      if (response.ok) {
        const data = await response.json()
        setAvailableStudents(data.students || [])
      }
    } catch (error) {
      console.error('Error fetching students:', error)
      setAvailableStudents([])
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
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

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Nome do grupo é obrigatório'
    }

    if (!formData.classId) {
      newErrors.classId = 'Selecione uma turma'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)

    try {
      const response = await fetch('/api/groups', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          description: formData.description.trim(),
          classId: formData.classId,
          memberIds: selectedStudents.map(s => s.id),
        }),
      })

      const data = await response.json()

      if (response.ok) {
        // Reset form
        setFormData({ name: '', description: '', classId: '' })
        setSelectedStudents([])
        setErrors({})
        setOpen(false)

        // Notify parent component
        if (onGroupCreated) {
          onGroupCreated(data.group)
        }
      } else {
        setErrors({ general: data.message || 'Erro ao criar grupo' })
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
      setFormData({ name: '', description: '', classId: '' })
      setSelectedStudents([])
      setErrors({})
    }
    setOpen(newOpen)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="fei-gradient">
            <Plus className="h-4 w-4 mr-2" />
            Criar Grupo
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Criar Novo Grupo</DialogTitle>
          <DialogDescription>
            Crie um grupo de projeto e adicione estudantes da turma selecionada.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {errors.general && (
            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
              {errors.general}
            </div>
          )}

          {/* Group Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Nome do Grupo *</Label>
            <Input
              id="name"
              placeholder="Ex: Grupo Alpha, Equipe Backend..."
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={cn(errors.name && 'border-red-500')}
            />
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Group Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Descrição (Opcional)</Label>
            <Textarea
              id="description"
              placeholder="Descreva o projeto ou objetivo do grupo..."
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={3}
            />
          </div>

          {/* Class Selection */}
          <div className="space-y-2">
            <Label>Turma *</Label>
            <Select
              value={formData.classId}
              onValueChange={(value) => handleInputChange('classId', value)}
            >
              <SelectTrigger className={cn(errors.classId && 'border-red-500')}>
                <SelectValue placeholder="Selecione uma turma" />
              </SelectTrigger>
              <SelectContent>
                {classes.map((classItem) => (
                  <SelectItem key={classItem.id} value={classItem.id}>
                    {classItem.code} - {classItem.name} ({classItem.semester})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.classId && (
              <p className="text-sm text-red-600">{errors.classId}</p>
            )}
          </div>

          {/* Student Selection */}
          {formData.classId && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Membros do Grupo</Label>
                <Badge variant="secondary">
                  {selectedStudents.length} selecionado{selectedStudents.length !== 1 ? 's' : ''}
                </Badge>
              </div>

              {/* Selected Students */}
              {selectedStudents.length > 0 && (
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">
                      Estudantes Selecionados
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-40 overflow-y-auto">
                      {availableStudents
                        .filter(student => !selectedStudents.find(s => s.id === student.id))
                        .map((student) => (
                          <div
                            key={student.id}
                            className="flex items-center justify-between p-2 border rounded-lg hover:bg-gray-50 cursor-pointer"
                            onClick={() => addStudent(student)}
                          >
                            <div>
                              <p className="text-sm font-medium">{student.name}</p>
                              <p className="text-xs text-muted-foreground">
                                RA: {student.studentId}
                              </p>
                            </div>
                            <Plus className="h-4 w-4 text-blue-600" />
                          </div>
                        ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground text-center py-4">
                      Nenhum estudante disponível nesta turma
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

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
              disabled={loading || !formData.name || !formData.classId}
              className="fei-gradient"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Criando...
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4 mr-2" />
                  Criar Grupo
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}


