'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Search, Loader2, UserPlus, X } from 'lucide-react'
import { useSession } from 'next-auth/react'

interface Student {
  id: string
  name: string
  email: string
  studentId: string
}

interface Group {
  id: string
  name: string
  classId: string
  class: {
    id: string
    name: string
    code: string
  }
  members: Array<{
    userId: string
    user: {
      id: string
      name: string
    }
  }>
}

interface AddGroupMembersModalProps {
  group: Group
  open: boolean
  onOpenChange: (open: boolean) => void
  onMembersAdded?: () => void
}

export function AddGroupMembersModal({ 
  group, 
  open, 
  onOpenChange, 
  onMembersAdded 
}: AddGroupMembersModalProps) {
  const { data: session } = useSession()
  const [loading, setLoading] = useState(false)
  const [searchLoading, setSearchLoading] = useState(false)
  const [availableStudents, setAvailableStudents] = useState<Student[]>([])
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([])
  const [selectedStudents, setSelectedStudents] = useState<Student[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (open && session?.user?.role === 'PROFESSOR') {
      fetchAvailableStudents()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, session?.user?.role])

  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = availableStudents.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.studentId.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredStudents(filtered)
    } else {
      setFilteredStudents(availableStudents)
    }
  }, [searchTerm, availableStudents])

  const fetchAvailableStudents = async () => {
    try {
      setSearchLoading(true)
      setError(null)

      // Get students enrolled in the class
      const response = await fetch(`/api/classes/${group.classId}/students`)
      
      if (!response.ok) {
        throw new Error('Erro ao carregar estudantes')
      }

      const data = await response.json()
      
      // Filter out students already in the group
      const currentMemberIds = group.members.map(m => m.userId)
      const available = (data.students || []).filter(
        (student: Student) => !currentMemberIds.includes(student.id)
      )
      
      setAvailableStudents(available)
      setFilteredStudents(available)
    } catch (err) {
      console.error('Error fetching students:', err)
      setError('Erro ao carregar estudantes disponíveis')
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

  const handleSubmit = async () => {
    if (selectedStudents.length === 0) {
      setError('Selecione pelo menos um estudante')
      return
    }

    try {
      setLoading(true)
      setError(null)

      const response = await fetch(`/api/groups/${group.id}/members`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userIds: selectedStudents.map(s => s.id)
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Erro ao adicionar membros')
      }

      // Success
      if (onMembersAdded) {
        onMembersAdded()
      }
      onOpenChange(false)
      
      // Reset state
      setSelectedStudents([])
      setSearchTerm('')
    } catch (err) {
      console.error('Error adding members:', err)
      setError(err instanceof Error ? err.message : 'Erro ao adicionar membros')
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    if (!loading) {
      onOpenChange(false)
      setSelectedStudents([])
      setSearchTerm('')
      setError(null)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <UserPlus className="h-5 w-5" />
            Adicionar Membros
          </DialogTitle>
          <DialogDescription>
            {group.name} • {group.class.code} - {group.class.name}
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-hidden flex flex-col gap-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Buscar por nome, email ou RA..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
              disabled={loading}
            />
          </div>

          {/* Selected Students */}
          {selectedStudents.length > 0 && (
            <Card>
              <CardContent className="pt-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-medium">
                    Selecionados ({selectedStudents.length})
                  </h4>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setSelectedStudents([])}
                    disabled={loading}
                  >
                    Limpar
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedStudents.map((student) => (
                    <Badge
                      key={student.id}
                      variant="secondary"
                      className="flex items-center gap-2 py-1 px-3"
                    >
                      {student.name}
                      <button
                        onClick={() => removeStudent(student.id)}
                        className="hover:bg-gray-300 rounded-full p-0.5"
                        disabled={loading}
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
          <Card className="flex-1 overflow-hidden flex flex-col">
            <CardContent className="pt-4 flex-1 overflow-hidden flex flex-col">
              <h4 className="text-sm font-medium mb-3">
                Estudantes Disponíveis ({availableStudents.length - selectedStudents.length})
              </h4>
              
              {searchLoading ? (
                <div className="flex-1 flex items-center justify-center">
                  <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
                </div>
              ) : filteredStudents.length === 0 ? (
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">
                    {searchTerm 
                      ? 'Nenhum estudante encontrado' 
                      : availableStudents.length === 0
                      ? 'Todos os estudantes da turma já estão no grupo'
                      : 'Nenhum estudante disponível'}
                  </p>
                </div>
              ) : (
                <div className="flex-1 overflow-y-auto space-y-2">
                  {filteredStudents
                    .filter(student => !selectedStudents.find(s => s.id === student.id))
                    .map((student) => (
                      <div
                        key={student.id}
                        className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                        onClick={() => addStudent(student)}
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-blue-100 text-blue-600">
                              {student.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium truncate">{student.name}</p>
                            <p className="text-xs text-muted-foreground truncate">
                              {student.email} • RA: {student.studentId}
                            </p>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={(e) => {
                            e.stopPropagation()
                            addStudent(student)
                          }}
                        >
                          <UserPlus className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-end gap-2 pt-4 border-t">
          <Button
            variant="outline"
            onClick={handleClose}
            disabled={loading}
          >
            Cancelar
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={loading || selectedStudents.length === 0}
            className="fei-gradient"
          >
            {loading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
            Adicionar {selectedStudents.length > 0 && `(${selectedStudents.length})`}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}


