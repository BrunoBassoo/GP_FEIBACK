'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Users, Search, Loader2, Mail, User, X } from 'lucide-react'
import { useSession } from 'next-auth/react'

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
}

interface ViewClassStudentsModalProps {
  classData: ClassData
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ViewClassStudentsModal({ classData, open, onOpenChange }: ViewClassStudentsModalProps) {
  const { data: session } = useSession()
  const [students, setStudents] = useState<Student[]>([])
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (open && session?.user?.role === 'ADMIN') {
      fetchStudents()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, session?.user?.role])

  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.studentId.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredStudents(filtered)
    } else {
      setFilteredStudents(students)
    }
  }, [searchTerm, students])

  const fetchStudents = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(`/api/classes/${classData.id}/students`)
      
      if (!response.ok) {
        throw new Error('Erro ao carregar estudantes')
      }

      const data = await response.json()
      setStudents(data.students || [])
      setFilteredStudents(data.students || [])
    } catch (err) {
      console.error('Error fetching students:', err)
      setError('Erro ao carregar estudantes da turma')
    } finally {
      setLoading(false)
    }
  }

  const handleRemoveStudent = async (studentId: string) => {
    if (!confirm('Tem certeza que deseja remover este estudante da turma?')) {
      return
    }

    try {
      const response = await fetch(`/api/classes/${classData.id}/students`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ studentIds: [studentId] }),
      })

      if (!response.ok) {
        throw new Error('Erro ao remover estudante')
      }

      // Refresh the list
      await fetchStudents()
    } catch (err) {
      console.error('Error removing student:', err)
      alert('Erro ao remover estudante da turma')
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Estudantes Matriculados
          </DialogTitle>
          <DialogDescription>
            {classData.code} - {classData.name} ({classData.semester})
          </DialogDescription>
        </DialogHeader>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Buscar por nome, email ou RA..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Students Count */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {filteredStudents.length} de {students.length} estudante{students.length !== 1 ? 's' : ''}
          </p>
          <Badge variant="outline">{students.length} total</Badge>
        </div>

        {/* Students List */}
        <div className="flex-1 overflow-y-auto space-y-2">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600">{error}</p>
              <Button onClick={fetchStudents} variant="outline" className="mt-4">
                Tentar Novamente
              </Button>
            </div>
          ) : filteredStudents.length === 0 ? (
            <div className="text-center py-12">
              <Users className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600">
                {searchTerm ? 'Nenhum estudante encontrado' : 'Nenhum estudante matriculado nesta turma'}
              </p>
            </div>
          ) : (
            filteredStudents.map((student) => (
              <Card key={student.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <Avatar>
                        <AvatarFallback>
                          {student.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{student.name}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1 truncate">
                            <Mail className="h-3 w-3 shrink-0" />
                            {student.email}
                          </span>
                          <span className="flex items-center gap-1 shrink-0">
                            <User className="h-3 w-3" />
                            {student.studentId}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveStudent(student.id)}
                      className="shrink-0"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        <div className="flex justify-end gap-2 pt-4 border-t">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Fechar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

