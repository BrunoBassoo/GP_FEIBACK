'use client'

import { useState } from 'react'
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
import { Plus, Loader2, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CreateClassModalProps {
  trigger?: React.ReactNode
  onClassCreated?: (classData: {
    id: string
    name: string
    code: string
    description?: string
    semester: string
  }) => void
}

export function CreateClassModal({ trigger, onClassCreated }: CreateClassModalProps) {
  const { data: session } = useSession()
  console.log('Session data:', session) // Using session to avoid unused warning
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    description: '',
    semester: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Nome da turma é obrigatório'
    }

    if (!formData.code.trim()) {
      newErrors.code = 'Código da turma é obrigatório'
    } else if (!/^[A-Z]{2}[0-9]{1,2}[A-Z]{1,2}$/.test(formData.code.trim().toUpperCase())) {
      newErrors.code = 'Código deve seguir o padrão: CC6NA, ES7NB, etc.'
    }

    if (!formData.semester.trim()) {
      newErrors.semester = 'Semestre é obrigatório'
    } else if (!/^20[0-9]{2}-[12]$/.test(formData.semester.trim())) {
      newErrors.semester = 'Semestre deve seguir o padrão: 2024-1 ou 2024-2'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)

    try {
      const response = await fetch('/api/classes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          code: formData.code.trim().toUpperCase(),
          description: formData.description.trim() || undefined,
          semester: formData.semester.trim(),
        }),
      })

      const data = await response.json()

      if (response.ok) {
        // Reset form
        setFormData({
          name: '',
          code: '',
          description: '',
          semester: '',
        })
        setErrors({})
        setOpen(false)

        // Notify parent component
        if (onClassCreated) {
          onClassCreated(data.class)
        }
      } else {
        setErrors({ general: data.message || 'Erro ao criar turma' })
      }
    } catch (err) {
      console.error('Error creating class:', err)
      setErrors({ general: 'Erro interno do servidor' })
    } finally {
      setLoading(false)
    }
  }

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      // Reset form when closing
      setFormData({
        name: '',
        code: '',
        description: '',
        semester: '',
      })
      setErrors({})
    }
    setOpen(newOpen)
  }

  // Get current year and suggest semesters
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth() + 1
  const suggestedSemester = currentMonth <= 6 ? `${currentYear}-1` : `${currentYear}-2`

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="fei-gradient">
            <Plus className="h-4 w-4 mr-2" />
            Nova Turma
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <BookOpen className="h-5 w-5 mr-2" />
            Criar Nova Turma
          </DialogTitle>
          <DialogDescription>
            Crie uma nova turma para gerenciar grupos de estudantes e projetos.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {errors.general && (
            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
              {errors.general}
            </div>
          )}

          {/* Class Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Nome da Turma *</Label>
            <Input
              id="name"
              placeholder="Ex: Engenharia de Software, Estruturas de Dados..."
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={cn(errors.name && 'border-red-500')}
            />
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Class Code */}
          <div className="space-y-2">
            <Label htmlFor="code">Código da Turma *</Label>
            <Input
              id="code"
              placeholder="Ex: CC6NA, ES7NB, BD5MA..."
              value={formData.code}
              onChange={(e) => handleInputChange('code', e.target.value.toUpperCase())}
              className={cn(errors.code && 'border-red-500')}
              maxLength={6}
            />
            {errors.code && (
              <p className="text-sm text-red-600">{errors.code}</p>
            )}
            <p className="text-xs text-muted-foreground">
              Formato: 2 letras + número + letras (ex: CC6NA)
            </p>
          </div>

          {/* Semester */}
          <div className="space-y-2">
            <Label htmlFor="semester">Semestre *</Label>
            <Input
              id="semester"
              placeholder={`Ex: ${suggestedSemester}`}
              value={formData.semester}
              onChange={(e) => handleInputChange('semester', e.target.value)}
              className={cn(errors.semester && 'border-red-500')}
            />
            {errors.semester && (
              <p className="text-sm text-red-600">{errors.semester}</p>
            )}
            <p className="text-xs text-muted-foreground">
              Formato: YYYY-1 ou YYYY-2 (ex: {suggestedSemester})
            </p>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Descrição (Opcional)</Label>
            <Textarea
              id="description"
              placeholder="Descreva os objetivos e conteúdo da turma..."
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={3}
            />
          </div>

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
              disabled={loading || !formData.name || !formData.code || !formData.semester}
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
                  Criar Turma
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

