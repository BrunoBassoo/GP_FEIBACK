'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Loader2, Plus, Trash2, GripVertical, Sparkles, Info } from 'lucide-react'
import { toast } from 'sonner'

interface Category {
  id?: string
  name: string
  description: string
  pointsPositive: number
  pointsImprovement: number
}

interface FeedbackTemplateModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  classId: string
  className: string
  existingTemplate?: {
    id: string
    name: string
    description?: string
    categories: Array<{
      id: string
      name: string
      description?: string
      pointsPositive: number
      pointsImprovement: number
      order: number
    }>
  }
  onSuccess?: () => void
}

interface Preset {
  id: string
  name: string
  description: string
  categories: Category[]
}

export function FeedbackTemplateModal({
  open,
  onOpenChange,
  classId,
  className,
  existingTemplate,
  onSuccess,
}: FeedbackTemplateModalProps) {
  const [loading, setLoading] = useState(false)
  const [loadingPresets, setLoadingPresets] = useState(false)
  const [presets, setPresets] = useState<Preset[]>([])
  const [selectedPreset, setSelectedPreset] = useState<string>('')
  const [templateName, setTemplateName] = useState('')
  const [templateDescription, setTemplateDescription] = useState('')
  const [categories, setCategories] = useState<Category[]>([
    {
      name: '',
      description: '',
      pointsPositive: 5,
      pointsImprovement: -2,
    },
  ])

  useEffect(() => {
    if (open) {
      fetchPresets()
      if (existingTemplate) {
        setTemplateName(existingTemplate.name)
        setTemplateDescription(existingTemplate.description || '')
        setCategories(
          existingTemplate.categories.map((cat) => ({
            id: cat.id,
            name: cat.name,
            description: cat.description || '',
            pointsPositive: cat.pointsPositive,
            pointsImprovement: cat.pointsImprovement,
          }))
        )
      } else {
        resetForm()
      }
    }
  }, [open, existingTemplate])

  const fetchPresets = async () => {
    try {
      setLoadingPresets(true)
      const res = await fetch('/api/feedback-templates/presets')
      if (res.ok) {
        const data = await res.json()
        setPresets(data.presets || [])
      }
    } catch (error) {
      console.error('Error fetching presets:', error)
    } finally {
      setLoadingPresets(false)
    }
  }

  const resetForm = () => {
    setTemplateName('')
    setTemplateDescription('')
    setCategories([
      {
        name: '',
        description: '',
        pointsPositive: 5,
        pointsImprovement: -2,
      },
    ])
    setSelectedPreset('')
  }

  const loadPreset = (presetId: string) => {
    const preset = presets.find((p) => p.id === presetId)
    if (preset) {
      setTemplateName(preset.name)
      setTemplateDescription(preset.description)
      setCategories(preset.categories)
      setSelectedPreset(presetId)
      toast.success('Template pré-configurado carregado!')
    }
  }

  const addCategory = () => {
    if (categories.length >= 10) {
      toast.error('Máximo de 10 categorias permitidas')
      return
    }
    setCategories([
      ...categories,
      {
        name: '',
        description: '',
        pointsPositive: 5,
        pointsImprovement: -2,
      },
    ])
  }

  const removeCategory = (index: number) => {
    if (categories.length <= 2) {
      toast.error('É necessário pelo menos 2 categorias')
      return
    }
    setCategories(categories.filter((_, i) => i !== index))
  }

  const updateCategory = (index: number, field: keyof Category, value: string | number) => {
    const newCategories = [...categories]
    newCategories[index] = {
      ...newCategories[index],
      [field]: value,
    }
    setCategories(newCategories)
  }

  const moveCategory = (index: number, direction: 'up' | 'down') => {
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === categories.length - 1)
    ) {
      return
    }

    const newCategories = [...categories]
    const targetIndex = direction === 'up' ? index - 1 : index + 1
    ;[newCategories[index], newCategories[targetIndex]] = [
      newCategories[targetIndex],
      newCategories[index],
    ]
    setCategories(newCategories)
  }

  const handleSubmit = async () => {
    if (!templateName.trim()) {
      toast.error('Digite um nome para o template')
      return
    }

    if (categories.length < 2) {
      toast.error('É necessário pelo menos 2 categorias')
      return
    }

    const invalidCategory = categories.find((cat) => !cat.name.trim())
    if (invalidCategory) {
      toast.error('Todas as categorias devem ter um nome')
      return
    }

    try {
      setLoading(true)

      const url = existingTemplate
        ? `/api/feedback-templates/${existingTemplate.id}`
        : '/api/feedback-templates'
      const method = existingTemplate ? 'PUT' : 'POST'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          classId,
          name: templateName,
          description: templateDescription,
          categories: categories.map((cat) => ({
            name: cat.name,
            description: cat.description,
            pointsPositive: cat.pointsPositive,
            pointsImprovement: cat.pointsImprovement,
          })),
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || 'Erro ao salvar template')
      }

      toast.success(
        existingTemplate
          ? 'Template atualizado com sucesso!'
          : 'Template criado com sucesso!'
      )
      onOpenChange(false)
      onSuccess?.()
    } catch (error) {
      console.error('Error saving template:', error)
      toast.error(error instanceof Error ? error.message : 'Erro ao salvar template')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {existingTemplate ? 'Editar' : 'Criar'} Template de Avaliação
          </DialogTitle>
          <DialogDescription>
            Configure as categorias de avaliação para a turma <strong>{className}</strong>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Preset Selection */}
          {!existingTemplate && (
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Templates Pré-configurados
                </CardTitle>
                <CardDescription className="text-xs">
                  Comece com um template pronto e personalize conforme necessário
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Select value={selectedPreset} onValueChange={loadPreset} disabled={loadingPresets}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um template pré-configurado (opcional)" />
                  </SelectTrigger>
                  <SelectContent>
                    {presets.map((preset) => (
                      <SelectItem key={preset.id} value={preset.id}>
                        <div>
                          <div className="font-medium">{preset.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {preset.description}
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          )}

          {/* Template Info */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="templateName">Nome do Template *</Label>
              <Input
                id="templateName"
                placeholder="Ex: Avaliação de Projeto de Software"
                value={templateName}
                onChange={(e) => setTemplateName(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="templateDescription">Descrição (opcional)</Label>
              <Textarea
                id="templateDescription"
                placeholder="Descreva o propósito deste template de avaliação..."
                value={templateDescription}
                onChange={(e) => setTemplateDescription(e.target.value)}
                rows={2}
              />
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">Categorias de Avaliação</Label>
                <p className="text-sm text-muted-foreground">
                  Mínimo: 2 categorias • Máximo: 10 categorias
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addCategory}
                disabled={categories.length >= 10}
              >
                <Plus className="h-4 w-4 mr-2" />
                Adicionar
              </Button>
            </div>

            <div className="space-y-3">
              {categories.map((category, index) => (
                <Card key={index} className="relative">
                  <CardContent className="pt-6">
                    <div className="absolute top-2 right-2 flex gap-1">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => moveCategory(index, 'up')}
                        disabled={index === 0}
                        className="h-8 w-8 p-0"
                      >
                        <GripVertical className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeCategory(index)}
                        disabled={categories.length <= 2}
                        className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="space-y-3 pr-20">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="shrink-0">
                          {index + 1}
                        </Badge>
                        <Input
                          placeholder="Nome da categoria *"
                          value={category.name}
                          onChange={(e) => updateCategory(index, 'name', e.target.value)}
                        />
                      </div>

                      <Textarea
                        placeholder="Descrição para ajudar os alunos (opcional)"
                        value={category.description}
                        onChange={(e) => updateCategory(index, 'description', e.target.value)}
                        rows={2}
                      />

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label className="text-xs text-muted-foreground">
                            Pontos (Positivo)
                          </Label>
                          <Input
                            type="number"
                            min="0"
                            value={category.pointsPositive}
                            onChange={(e) =>
                              updateCategory(index, 'pointsPositive', parseInt(e.target.value) || 0)
                            }
                            className="bg-green-50"
                          />
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">
                            Pontos (Melhoria)
                          </Label>
                          <Input
                            type="number"
                            max="0"
                            value={category.pointsImprovement}
                            onChange={(e) =>
                              updateCategory(
                                index,
                                'pointsImprovement',
                                parseInt(e.target.value) || 0
                              )
                            }
                            className="bg-orange-50"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-4 flex gap-2">
                <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-sm text-blue-900">
                  <p className="font-medium mb-1">Dica sobre pontuação:</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Feedbacks positivos adicionam pontos ao aluno avaliado</li>
                    <li>Sugestões de melhoria podem reduzir pontos (valores negativos)</li>
                    <li>Você pode ajustar os valores conforme a importância de cada categoria</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="outline" onClick={() => onOpenChange(false)} disabled={loading}>
              Cancelar
            </Button>
            <Button onClick={handleSubmit} disabled={loading}>
              {loading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              {existingTemplate ? 'Salvar Alterações' : 'Criar Template'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

