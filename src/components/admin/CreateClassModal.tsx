'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Loader2, Plus } from 'lucide-react'
import { useSession } from 'next-auth/react'

interface Professor {
  id: string
  name: string
  email: string
}

interface CreateClassModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClassCreated?: () => void
}

export function CreateClassModal({ open, onOpenChange, onClassCreated }: CreateClassModalProps) {
  const { data: session } = useSession()
  const [loading, setLoading] = useState(false)
  const [loadingProfessors, setLoadingProfessors] = useState(false)
  const [professors, setProfessors] = useState<Professor[]>([])
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    description: '',
    semester: '',
    professorId: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (open && session?.user?.role === 'ADMIN') {
      fetchProfessors()
      // Reset form
      setFormData({
        name: '',
        code: '',
        description: '',
        semester: '',
        professorId: '',
      })
      setErrors({})
    }
  }, [open, session])

  const fetchProfessors = async () => {
    try {
      setLoadingProfessors(true)
      const response = await fetch('/api/users?role=PROFESSOR&limit=100')
      
      if (!response.ok) {
        throw new Error('Erro ao carregar professores')
      }

      const data = await response.json()
      setProfessors(data.users || [])
    } catch (err) {
      console.error('Error fetching professors:', err)
      setErrors({ general: 'Erro ao carregar professores' })
    } finally {
      setLoadingProfessors(false)
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório'
    }

    if (!formData.code.trim()) {
      newErrors.code = 'Código é obrigatório'
    }

    if (!formData.semester.trim()) {
      newErrors.semester = 'Semestre é obrigatório'
    }

    if (!formData.professorId) {
      newErrors.professorId = 'Professor é obrigatório'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    try {
      setLoading(true)
      setErrors({})

      const response = await fetch('/api/classes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao criar turma')
      }

      // Success
      onOpenChange(false)
      if (onClassCreated) {
        onClassCreated()
      }
    } catch (err) {
      console.error('Error creating class:', err)
      setErrors({ general: err instanceof Error ? err.message : 'Erro desconhecido' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Criar Nova Turma
          </DialogTitle>
          <DialogDescription>
            Preencha os dados da nova turma
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {errors.general && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{errors.general}</p>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="code">Código da Turma *</Label>
            <Input
              id="code"
              value={formData.code}
              onChange={(e) => setFormData({ ...formData, code: e.target.value })}
              placeholder="Ex: CC6NA"
              disabled={loading}
            />
            {errors.code && <p className="text-sm text-red-600">{errors.code}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Nome da Turma *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ex: Ciência da Computação - 6º Semestre"
              disabled={loading}
            />
            {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="semester">Semestre *</Label>
            <Input
              id="semester"
              value={formData.semester}
              onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
              placeholder="Ex: 2024.1"
              disabled={loading}
            />
            {errors.semester && <p className="text-sm text-red-600">{errors.semester}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="professorId">Professor Responsável *</Label>
            <Select
              value={formData.professorId}
              onValueChange={(value) => setFormData({ ...formData, professorId: value })}
              disabled={loading || loadingProfessors}
            >
              <SelectTrigger>
                <SelectValue placeholder={loadingProfessors ? "Carregando..." : "Selecione um professor"} />
              </SelectTrigger>
              <SelectContent>
                {professors.map((professor) => (
                  <SelectItem key={professor.id} value={professor.id}>
                    {professor.name} ({professor.email})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.professorId && <p className="text-sm text-red-600">{errors.professorId}</p>}
            {professors.length === 0 && !loadingProfessors && (
              <p className="text-sm text-amber-600">Nenhum professor encontrado. Crie um usuário professor primeiro.</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Descrição da turma (opcional)"
              rows={3}
              disabled={loading}
            />
            {errors.description && <p className="text-sm text-red-600">{errors.description}</p>}
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={loading || professors.length === 0}>
              {loading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              Criar Turma
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

