'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { 
  Award, 
  Loader2, 
  AlertCircle, 
  Plus,
  Edit,
  ToggleLeft,
  ToggleRight,
  TrendingUp
} from 'lucide-react'

interface Reward {
  id: string
  name: string
  description: string
  pointsCost: number
  partner: string
  isActive: boolean
  imageUrl?: string
  createdAt: string
  _count: {
    redemptions: number
  }
}

export default function AdminRewardsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [rewards, setRewards] = useState<Reward[]>([])
  const [showInactive, setShowInactive] = useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingReward, setEditingReward] = useState<Reward | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    pointsCost: '',
    partner: '',
    imageUrl: '',
  })

  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (status === 'loading') return

    if (!session) {
      router.push('/login')
      return
    }

    if (session.user.role !== 'ADMIN') {
      router.push('/dashboard')
      return
    }

    fetchRewards()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, status, showInactive])

  const fetchRewards = async () => {
    try {
      setLoading(true)
      setError(null)

      const url = `/api/rewards?includeInactive=${showInactive}`
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error('Erro ao carregar recompensas')
      }

      const data = await response.json()
      setRewards(data.rewards)
    } catch (error) {
      console.error('Error fetching rewards:', error)
      setError(error instanceof Error ? error.message : 'Erro desconhecido')
    } finally {
      setLoading(false)
    }
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!formData.name.trim()) {
      errors.name = 'Nome é obrigatório'
    }

    if (!formData.description.trim()) {
      errors.description = 'Descrição é obrigatória'
    }

    if (!formData.pointsCost || parseInt(formData.pointsCost) <= 0) {
      errors.pointsCost = 'Custo deve ser maior que zero'
    }

    if (!formData.partner.trim()) {
      errors.partner = 'Parceiro é obrigatório'
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    try {
      setSubmitting(true)

      const payload = {
        name: formData.name,
        description: formData.description,
        pointsCost: parseInt(formData.pointsCost),
        partner: formData.partner,
        imageUrl: formData.imageUrl || null,
      }

      const url = editingReward ? `/api/rewards/${editingReward.id}` : '/api/rewards'
      const method = editingReward ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message || 'Erro ao salvar recompensa')
      }

      setIsDialogOpen(false)
      resetForm()
      fetchRewards()
    } catch (error) {
      console.error('Error saving reward:', error)
      setError(error instanceof Error ? error.message : 'Erro ao salvar recompensa')
    } finally {
      setSubmitting(false)
    }
  }

  const handleEdit = (reward: Reward) => {
    setEditingReward(reward)
    setFormData({
      name: reward.name,
      description: reward.description,
      pointsCost: reward.pointsCost.toString(),
      partner: reward.partner,
      imageUrl: reward.imageUrl || '',
    })
    setIsDialogOpen(true)
  }

  const handleToggleStatus = async (reward: Reward) => {
    try {
      const response = await fetch(`/api/rewards/${reward.id}/toggle`, {
        method: 'PATCH',
      })

      if (!response.ok) {
        throw new Error('Erro ao alternar status')
      }

      fetchRewards()
    } catch (error) {
      console.error('Error toggling reward:', error)
      setError(error instanceof Error ? error.message : 'Erro ao alternar status')
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      pointsCost: '',
      partner: '',
      imageUrl: '',
    })
    setFormErrors({})
    setEditingReward(null)
  }

  const handleDialogClose = (open: boolean) => {
    setIsDialogOpen(open)
    if (!open) {
      resetForm()
    }
  }

  const activeRewards = rewards.filter(r => r.isActive)
  const inactiveRewards = rewards.filter(r => !r.isActive)
  const totalRedemptions = rewards.reduce((sum, r) => sum + r._count.redemptions, 0)

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-blue-600" />
                <p className="text-gray-600">Carregando recompensas...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!session || session.user.role !== 'ADMIN') {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Gerenciar Recompensas
                </h1>
                <p className="mt-2 text-gray-600">
                  Crie e gerencie recompensas para os estudantes resgatarem
                </p>
              </div>

              <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
                <DialogTrigger asChild>
                  <Button className="fei-gradient">
                    <Plus className="h-4 w-4 mr-2" />
                    Nova Recompensa
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>
                      {editingReward ? 'Editar Recompensa' : 'Nova Recompensa'}
                    </DialogTitle>
                    <DialogDescription>
                      {editingReward 
                        ? 'Atualize as informações da recompensa' 
                        : 'Preencha os dados para criar uma nova recompensa'}
                    </DialogDescription>
                  </DialogHeader>

                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <Label htmlFor="name">Nome da Recompensa *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ex: 10% de desconto no Mac FEI"
                          className={formErrors.name ? 'border-red-500' : ''}
                        />
                        {formErrors.name && (
                          <p className="text-sm text-red-600 mt-1">{formErrors.name}</p>
                        )}
                      </div>

                      <div className="col-span-2">
                        <Label htmlFor="description">Descrição *</Label>
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          placeholder="Descreva os detalhes da recompensa..."
                          rows={3}
                          className={formErrors.description ? 'border-red-500' : ''}
                        />
                        {formErrors.description && (
                          <p className="text-sm text-red-600 mt-1">{formErrors.description}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="partner">Parceiro *</Label>
                        <Input
                          id="partner"
                          value={formData.partner}
                          onChange={(e) => setFormData({ ...formData, partner: e.target.value })}
                          placeholder="Ex: Mac FEI, Jujuca"
                          className={formErrors.partner ? 'border-red-500' : ''}
                        />
                        {formErrors.partner && (
                          <p className="text-sm text-red-600 mt-1">{formErrors.partner}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="pointsCost">Custo em Pontos *</Label>
                        <Input
                          id="pointsCost"
                          type="number"
                          min="1"
                          value={formData.pointsCost}
                          onChange={(e) => setFormData({ ...formData, pointsCost: e.target.value })}
                          placeholder="100"
                          className={formErrors.pointsCost ? 'border-red-500' : ''}
                        />
                        {formErrors.pointsCost && (
                          <p className="text-sm text-red-600 mt-1">{formErrors.pointsCost}</p>
                        )}
                      </div>

                      <div className="col-span-2">
                        <Label htmlFor="imageUrl">URL da Imagem (opcional)</Label>
                        <Input
                          id="imageUrl"
                          type="url"
                          value={formData.imageUrl}
                          onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                          placeholder="https://exemplo.com/imagem.png"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end space-x-3 pt-4">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => handleDialogClose(false)}
                        disabled={submitting}
                      >
                        Cancelar
                      </Button>
                      <Button type="submit" disabled={submitting} className="fei-gradient">
                        {submitting ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Salvando...
                          </>
                        ) : editingReward ? (
                          'Atualizar'
                        ) : (
                          'Criar Recompensa'
                        )}
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-md p-4 flex items-start">
              <AlertCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-red-800 font-medium">Erro</p>
                <p className="text-red-600 text-sm mt-1">{error}</p>
              </div>
            </div>
          )}

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total de Recompensas
                </CardTitle>
                <Award className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{rewards.length}</div>
                <p className="text-xs text-muted-foreground">
                  cadastradas no sistema
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Ativas
                </CardTitle>
                <ToggleRight className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{activeRewards.length}</div>
                <p className="text-xs text-muted-foreground">
                  disponíveis para resgate
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Inativas
                </CardTitle>
                <ToggleLeft className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-600">{inactiveRewards.length}</div>
                <p className="text-xs text-muted-foreground">
                  desativadas
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total de Resgates
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">{totalRedemptions}</div>
                <p className="text-xs text-muted-foreground">
                  recompensas resgatadas
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Filter Toggle */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Recompensas Cadastradas</h2>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowInactive(!showInactive)}
            >
              {showInactive ? 'Ocultar Inativas' : 'Mostrar Inativas'}
            </Button>
          </div>

          {/* Rewards List */}
          {rewards.length === 0 ? (
            <Card>
              <CardContent className="pt-6">
                <div className="text-center py-12">
                  <Award className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Nenhuma recompensa cadastrada
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Comece criando a primeira recompensa para os estudantes
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rewards.map((reward) => (
                <Card key={reward.id} className={!reward.isActive ? 'opacity-60' : ''}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{reward.name}</CardTitle>
                        <CardDescription className="mt-1">{reward.partner}</CardDescription>
                      </div>
                      <Badge variant={reward.isActive ? 'default' : 'secondary'} className="ml-2">
                        {reward.isActive ? 'Ativa' : 'Inativa'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {reward.description}
                    </p>

                    <div className="flex items-center justify-between mb-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <span className="text-sm font-medium text-gray-700">Custo:</span>
                      <span className="text-lg font-bold text-yellow-700">
                        {reward.pointsCost} pts
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{reward._count.redemptions} resgates</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(reward)}
                        className="flex-1"
                      >
                        <Edit className="h-4 w-4 mr-1" />
                        Editar
                      </Button>
                      <Button
                        variant={reward.isActive ? 'outline' : 'default'}
                        size="sm"
                        onClick={() => handleToggleStatus(reward)}
                        className="flex-1"
                      >
                        {reward.isActive ? (
                          <>
                            <ToggleLeft className="h-4 w-4 mr-1" />
                            Desativar
                          </>
                        ) : (
                          <>
                            <ToggleRight className="h-4 w-4 mr-1" />
                            Ativar
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}



