'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Loader2, Settings } from 'lucide-react'

interface ClassData {
  id: string
  name: string
  code: string
  description?: string
  semester: string
}

interface EditClassModalProps {
  classData: ClassData
  open: boolean
  onOpenChange: (open: boolean) => void
  onClassUpdated?: () => void
}

export function EditClassModal({ classData, open, onOpenChange, onClassUpdated }: EditClassModalProps) {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: classData.name,
    code: classData.code,
    description: classData.description || '',
    semester: classData.semester,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (open) {
      setFormData({
        name: classData.name,
        code: classData.code,
        description: classData.description || '',
        semester: classData.semester,
      })
      setErrors({})
    }
  }, [open, classData])

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

      const response = await fetch(`/api/classes/${classData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao atualizar turma')
      }

      // Success
      onOpenChange(false)
      if (onClassUpdated) {
        onClassUpdated()
      }
    } catch (err) {
      console.error('Error updating class:', err)
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
            <Settings className="h-5 w-5" />
            Editar Turma
          </DialogTitle>
          <DialogDescription>
            Atualize as informações da turma
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
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              Salvar Alterações
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

