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
import { Card, CardContent } from '@/components/ui/card'
import { MessageSquare, Star, AlertTriangle, Loader2, Send } from 'lucide-react'
import { cn } from '@/lib/utils'

interface GroupMember {
  id: string
  name: string
  studentId: string
}

interface FeedbackModalProps {
  trigger?: React.ReactNode
  groupMember: GroupMember
  groupName: string
  onFeedbackSubmitted?: (feedback: {
    id: string
    content: string
    type: string
    points: number
    category: string
  }) => void
}

type FeedbackType = 'POSITIVE' | 'IMPROVEMENT'
type FeedbackCategory = 'collaboration' | 'communication' | 'contribution' | 'punctuality' | 'reliability'

const categories: Record<FeedbackCategory, { label: string; description: string; icon: string }> = {
  collaboration: {
    label: 'Colaboração',
    description: 'Trabalho em equipe e cooperação',
    icon: '🤝',
  },
  communication: {
    label: 'Comunicação',
    description: 'Clareza e efetividade na comunicação',
    icon: '💬',
  },
  contribution: {
    label: 'Contribuição',
    description: 'Qualidade e quantidade das contribuições',
    icon: '💪',
  },
  punctuality: {
    label: 'Pontualidade',
    description: 'Cumprimento de prazos e horários',
    icon: '⏰',
  },
  reliability: {
    label: 'Confiabilidade',
    description: 'Consistência e responsabilidade',
    icon: '🎯',
  },
}

export function FeedbackModal({
  trigger,
  groupMember,
  groupName,
  onFeedbackSubmitted,
}: FeedbackModalProps) {
  const { data: session } = useSession()
  console.log('Session data:', session) // Using session to avoid unused warning
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    content: '',
    type: '' as FeedbackType | '',
    category: '' as FeedbackCategory | '',
    points: 0,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }

    // Auto-calculate points based on type and category
    if (field === 'type' || field === 'category') {
      const type = field === 'type' ? value : formData.type
      const category = field === 'category' ? value : formData.category

      if (type && category) {
        const basePoints = type === 'POSITIVE' ? 10 : -5
        const multipliers = {
          collaboration: 1.0,
          communication: 0.8,
          contribution: 1.2,
          punctuality: 0.6,
          reliability: 1.0,
        }
        const calculatedPoints = Math.round(basePoints * (multipliers[category as FeedbackCategory] || 1.0))
        setFormData(prev => ({ ...prev, points: calculatedPoints }))
      }
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.content.trim()) {
      newErrors.content = 'O feedback é obrigatório'
    } else if (formData.content.trim().length < 10) {
      newErrors.content = 'O feedback deve ter pelo menos 10 caracteres'
    } else if (formData.content.trim().length > 500) {
      newErrors.content = 'O feedback deve ter no máximo 500 caracteres'
    }

    if (!formData.type) {
      newErrors.type = 'Selecione o tipo de feedback'
    }

    if (!formData.category) {
      newErrors.category = 'Selecione uma categoria'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: formData.content.trim(),
          type: formData.type,
          category: formData.category,
          points: formData.points,
          receiverId: groupMember.id,
          isPublic: true,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        // Reset form
        setFormData({
          content: '',
          type: '' as FeedbackType | '',
          category: '' as FeedbackCategory | '',
          points: 0,
        })
        setErrors({})
        setOpen(false)

        // Notify parent component
        if (onFeedbackSubmitted) {
          onFeedbackSubmitted(data.feedback)
        }
      } else {
        setErrors({ general: data.message || 'Erro ao enviar feedback' })
      }
    } catch (err) {
      console.error('Error submitting feedback:', err)
      setErrors({ general: 'Erro interno do servidor' })
    } finally {
      setLoading(false)
    }
  }

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      // Reset form when closing
      setFormData({
        content: '',
        type: '' as FeedbackType | '',
        category: '' as FeedbackCategory | '',
        points: 0,
      })
      setErrors({})
    }
    setOpen(newOpen)
  }

  const getPointsColor = () => {
    if (formData.points > 0) return 'text-green-600 bg-green-50 border-green-200'
    if (formData.points < 0) return 'text-red-600 bg-red-50 border-red-200'
    return 'text-gray-600 bg-gray-50 border-gray-200'
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="sm" className="fei-gradient">
            <MessageSquare className="h-4 w-4 mr-2" />
            Avaliar
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <MessageSquare className="h-5 w-5 mr-2" />
            Avaliar Colega
          </DialogTitle>
          <DialogDescription>
            Dê feedback para <strong>{groupMember.name}</strong> do {groupName}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {errors.general && (
            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
              {errors.general}
            </div>
          )}

          {/* Member Info Card */}
          <Card className="bg-gray-50">
            <CardContent className="pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">
                    {groupMember.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                  </span>
                </div>
                <div>
                  <p className="font-medium">{groupMember.name}</p>
                  <p className="text-sm text-muted-foreground">RA: {groupMember.studentId}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feedback Type */}
          <div className="space-y-2">
            <Label>Tipo de Feedback *</Label>
            <Select
              value={formData.type}
              onValueChange={(value) => handleInputChange('type', value as FeedbackType)}
            >
              <SelectTrigger className={cn(errors.type && 'border-red-500')}>
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="POSITIVE">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-2 text-green-500" />
                    Feedback Positivo
                  </div>
                </SelectItem>
                <SelectItem value="IMPROVEMENT">
                  <div className="flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2 text-yellow-500" />
                    Sugestão de Melhoria
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.type && (
              <p className="text-sm text-red-600">{errors.type}</p>
            )}
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label>Categoria *</Label>
            <Select
              value={formData.category}
              onValueChange={(value) => handleInputChange('category', value as FeedbackCategory)}
            >
              <SelectTrigger className={cn(errors.category && 'border-red-500')}>
                <SelectValue placeholder="Selecione uma categoria" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(categories).map(([key, category]) => (
                  <SelectItem key={key} value={key}>
                    <div className="flex items-center">
                      <span className="mr-2">{category.icon}</span>
                      <div>
                        <div className="font-medium">{category.label}</div>
                        <div className="text-xs text-muted-foreground">
                          {category.description}
                        </div>
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.category && (
              <p className="text-sm text-red-600">{errors.category}</p>
            )}
          </div>

          {/* Points Preview */}
          {formData.type && formData.category && (
            <div className="flex items-center justify-center">
              <Badge className={cn('px-3 py-1 border', getPointsColor())}>
                {formData.points > 0 ? '+' : ''}{formData.points} pontos
              </Badge>
            </div>
          )}

          {/* Feedback Content */}
          <div className="space-y-2">
            <Label htmlFor="content">Seu Feedback *</Label>
            <Textarea
              id="content"
              placeholder={
                formData.type === 'POSITIVE'
                  ? 'Descreva o que o colega fez bem e como isso contribuiu para o grupo...'
                  : formData.type === 'IMPROVEMENT'
                  ? 'Descreva de forma construtiva como o colega pode melhorar...'
                  : 'Escreva seu feedback aqui...'
              }
              value={formData.content}
              onChange={(e) => handleInputChange('content', e.target.value)}
              className={cn(errors.content && 'border-red-500')}
              rows={4}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              {errors.content ? (
                <span className="text-red-600">{errors.content}</span>
              ) : (
                <span>Mínimo 10 caracteres</span>
              )}
              <span>{formData.content.length}/500</span>
            </div>
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
              disabled={loading || !formData.content || !formData.type || !formData.category}
              className="fei-gradient"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Feedback
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}


