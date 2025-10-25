'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { 
  Award, 
  Loader2, 
  AlertCircle, 
  ChevronLeft,
  Star,
  Gift,
  History,
  ShoppingCart,
  CheckCircle,
  XCircle,
  Clock,
  Copy,
  Check
} from 'lucide-react'
import Link from 'next/link'
import { formatDateTime } from '@/lib/utils'

interface Reward {
  id: string
  name: string
  description: string
  pointsCost: number
  partner: string
  imageUrl?: string
  _count: {
    redemptions: number
  }
}

interface Redemption {
  id: string
  code: string
  status: string
  createdAt: string
  updatedAt: string
  reward: {
    name: string
    description: string
    partner: string
    pointsCost: number
    imageUrl?: string
  }
}

export default function StudentRewardsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [rewards, setRewards] = useState<Reward[]>([])
  const [redemptions, setRedemptions] = useState<Redemption[]>([])
  const [totalPoints, setTotalPoints] = useState(0)
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null)
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false)
  const [redeeming, setRedeeming] = useState(false)
  const [successDialogOpen, setSuccessDialogOpen] = useState(false)
  const [redeemedCode, setRedeemedCode] = useState('')
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'loading') return

    if (!session) {
      router.push('/login')
      return
    }

    if (session.user.role !== 'STUDENT') {
      router.push('/dashboard')
      return
    }

    fetchAllData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, status])

  const fetchAllData = async () => {
    setLoading(true)
    await Promise.all([
      fetchRewards(),
      fetchRedemptions(),
      fetchPoints(),
    ])
    setLoading(false)
  }

  const fetchRewards = async () => {
    try {
      const response = await fetch('/api/rewards')
      if (!response.ok) throw new Error('Erro ao carregar recompensas')
      const data = await response.json()
      setRewards(data.rewards)
    } catch (error) {
      console.error('Error fetching rewards:', error)
      setError(error instanceof Error ? error.message : 'Erro desconhecido')
    }
  }

  const fetchRedemptions = async () => {
    try {
      const response = await fetch('/api/redemptions/me?limit=100')
      if (!response.ok) throw new Error('Erro ao carregar histórico')
      const data = await response.json()
      setRedemptions(data.redemptions)
    } catch (error) {
      console.error('Error fetching redemptions:', error)
    }
  }

  const fetchPoints = async () => {
    try {
      const response = await fetch('/api/students/me')
      if (!response.ok) throw new Error('Erro ao carregar pontos')
      const data = await response.json()
      setTotalPoints(data.stats.totalPoints)
    } catch (error) {
      console.error('Error fetching points:', error)
    }
  }

  const handleRedeemClick = (reward: Reward) => {
    setSelectedReward(reward)
    setIsConfirmDialogOpen(true)
  }

  const handleConfirmRedeem = async () => {
    if (!selectedReward) return

    try {
      setRedeeming(true)
      const response = await fetch('/api/rewards/redeem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rewardId: selectedReward.id }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message || 'Erro ao resgatar recompensa')
      }

      const data = await response.json()
      setRedeemedCode(data.redemption.code)
      setIsConfirmDialogOpen(false)
      setSuccessDialogOpen(true)
      
      // Refresh data
      fetchAllData()
    } catch (error) {
      console.error('Error redeeming reward:', error)
      setError(error instanceof Error ? error.message : 'Erro ao resgatar recompensa')
    } finally {
      setRedeeming(false)
    }
  }

  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(code)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (error) {
      console.error('Error copying code:', error)
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'APPROVED':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="h-3 w-3 mr-1" />Aprovado</Badge>
      case 'PENDING':
        return <Badge className="bg-yellow-100 text-yellow-800"><Clock className="h-3 w-3 mr-1" />Pendente</Badge>
      case 'USED':
        return <Badge className="bg-blue-100 text-blue-800"><CheckCircle className="h-3 w-3 mr-1" />Utilizado</Badge>
      case 'REJECTED':
        return <Badge className="bg-red-100 text-red-800"><XCircle className="h-3 w-3 mr-1" />Rejeitado</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

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

  if (!session || session.user.role !== 'STUDENT') {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Header */}
          <div className="mb-6">
            <Link
              href="/student/dashboard"
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 mb-4"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Voltar ao Dashboard
            </Link>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Recompensas
                </h1>
                <p className="mt-2 text-gray-600">
                  Resgate seus pontos por descontos em estabelecimentos parceiros
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Seus pontos</p>
                <div className="flex items-center space-x-2 mt-1">
                  <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
                  <span className="text-3xl font-bold text-yellow-600">{totalPoints}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-md p-4 flex items-start">
              <AlertCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-red-800 font-medium">Erro</p>
                <p className="text-red-600 text-sm mt-1">{error}</p>
                <Button 
                  onClick={fetchAllData} 
                  variant="outline" 
                  size="sm" 
                  className="mt-3"
                >
                  Tentar Novamente
                </Button>
              </div>
            </div>
          )}

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Pontos Disponíveis
                </CardTitle>
                <Star className="h-4 w-4 text-yellow-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">{totalPoints}</div>
                <p className="text-xs text-muted-foreground">
                  para resgatar
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Recompensas Disponíveis
                </CardTitle>
                <Gift className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">{rewards.length}</div>
                <p className="text-xs text-muted-foreground">
                  parceiros ativos
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Resgatado
                </CardTitle>
                <History className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{redemptions.length}</div>
                <p className="text-xs text-muted-foreground">
                  recompensas
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="catalog" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="catalog">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Catálogo
              </TabsTrigger>
              <TabsTrigger value="history">
                <History className="h-4 w-4 mr-2" />
                Meu Histórico
              </TabsTrigger>
            </TabsList>

            {/* Catalog Tab */}
            <TabsContent value="catalog" className="space-y-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Recompensas Disponíveis</h3>
                <Badge variant="outline">
                  {rewards.filter(r => r.pointsCost <= totalPoints).length} ao seu alcance
                </Badge>
              </div>

              {rewards.length === 0 ? (
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center py-12">
                      <Gift className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                      <h3 className="text-xl font-medium text-gray-900 mb-2">
                        Nenhuma recompensa disponível
                      </h3>
                      <p className="text-gray-600">
                        Aguarde novas parcerias serem adicionadas
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rewards.map((reward) => {
                    const canAfford = totalPoints >= reward.pointsCost
                    
                    return (
                      <Card key={reward.id} className={!canAfford ? 'opacity-60' : ''}>
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-lg">{reward.name}</CardTitle>
                              <CardDescription className="mt-1 flex items-center">
                                <Award className="h-4 w-4 mr-1" />
                                {reward.partner}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600 mb-4 min-h-[40px]">
                            {reward.description}
                          </p>

                          <div className="flex items-center justify-between mb-4 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                            <span className="text-sm font-medium text-gray-700">Custo:</span>
                            <div className="flex items-center space-x-1">
                              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                              <span className="text-xl font-bold text-yellow-700">
                                {reward.pointsCost}
                              </span>
                            </div>
                          </div>

                          <div className="text-xs text-gray-500 mb-4">
                            {reward._count.redemptions} estudantes já resgataram
                          </div>

                          <Button
                            onClick={() => handleRedeemClick(reward)}
                            disabled={!canAfford}
                            className="w-full fei-gradient"
                          >
                            {canAfford ? (
                              <>
                                <ShoppingCart className="h-4 w-4 mr-2" />
                                Resgatar
                              </>
                            ) : (
                              <>
                                Pontos insuficientes
                              </>
                            )}
                          </Button>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              )}
            </TabsContent>

            {/* History Tab */}
            <TabsContent value="history" className="space-y-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Histórico de Resgates</h3>
                <Badge variant="outline">{redemptions.length} total</Badge>
              </div>

              {redemptions.length === 0 ? (
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center py-12">
                      <History className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                      <h3 className="text-xl font-medium text-gray-900 mb-2">
                        Nenhum resgate ainda
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Comece resgatando sua primeira recompensa no catálogo
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {redemptions.map((redemption) => (
                    <Card key={redemption.id}>
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h4 className="font-semibold text-lg">{redemption.reward.name}</h4>
                              {getStatusBadge(redemption.status)}
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{redemption.reward.partner}</p>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                              <div>
                                <p className="text-xs text-gray-500">Código</p>
                                <div className="flex items-center space-x-2 mt-1">
                                  <code className="text-sm font-mono font-bold bg-gray-100 px-2 py-1 rounded">
                                    {redemption.code}
                                  </code>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => copyToClipboard(redemption.code)}
                                    className="h-7 w-7 p-0"
                                  >
                                    {copiedCode === redemption.code ? (
                                      <Check className="h-4 w-4 text-green-600" />
                                    ) : (
                                      <Copy className="h-4 w-4" />
                                    )}
                                  </Button>
                                </div>
                              </div>

                              <div>
                                <p className="text-xs text-gray-500">Pontos Gastos</p>
                                <div className="flex items-center space-x-1 mt-1">
                                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                  <p className="text-sm font-semibold">{redemption.reward.pointsCost}</p>
                                </div>
                              </div>

                              <div>
                                <p className="text-xs text-gray-500">Resgatado em</p>
                                <p className="text-sm font-medium mt-1">
                                  {formatDateTime(redemption.createdAt)}
                                </p>
                              </div>

                              {redemption.status === 'USED' && (
                                <div>
                                  <p className="text-xs text-gray-500">Utilizado em</p>
                                  <p className="text-sm font-medium mt-1">
                                    {formatDateTime(redemption.updatedAt)}
                                  </p>
                                </div>
                              )}
                            </div>

                            {redemption.status === 'APPROVED' && (
                              <div className="bg-green-50 border border-green-200 rounded-md p-3">
                                <p className="text-sm text-green-800">
                                  <CheckCircle className="h-4 w-4 inline mr-1" />
                                  Código aprovado! Apresente no estabelecimento para usar sua recompensa.
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Confirmation Dialog */}
          <Dialog open={isConfirmDialogOpen} onOpenChange={setIsConfirmDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirmar Resgate</DialogTitle>
                <DialogDescription>
                  Você está prestes a resgatar uma recompensa
                </DialogDescription>
              </DialogHeader>

              {selectedReward && (
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg mb-1">{selectedReward.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{selectedReward.partner}</p>
                    <p className="text-sm text-gray-700">{selectedReward.description}</p>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <span className="font-medium">Custo:</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      <span className="text-xl font-bold text-yellow-700">{selectedReward.pointsCost}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm">Saldo após resgate:</span>
                    <span className="font-semibold">{totalPoints - selectedReward.pointsCost} pontos</span>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button
                      variant="outline"
                      onClick={() => setIsConfirmDialogOpen(false)}
                      disabled={redeeming}
                      className="flex-1"
                    >
                      Cancelar
                    </Button>
                    <Button
                      onClick={handleConfirmRedeem}
                      disabled={redeeming}
                      className="flex-1 fei-gradient"
                    >
                      {redeeming ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Resgatando...
                        </>
                      ) : (
                        'Confirmar Resgate'
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>

          {/* Success Dialog */}
          <Dialog open={successDialogOpen} onOpenChange={setSuccessDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex items-center text-green-600">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  Resgate Realizado!
                </DialogTitle>
                <DialogDescription>
                  Sua recompensa foi resgatada com sucesso
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border-2 border-green-200 text-center">
                  <p className="text-sm text-gray-600 mb-2">Seu código de resgate:</p>
                  <div className="flex items-center justify-center space-x-3">
                    <code className="text-3xl font-mono font-bold bg-white px-6 py-3 rounded-lg shadow">
                      {redeemedCode}
                    </code>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => copyToClipboard(redeemedCode)}
                    >
                      {copiedCode === redeemedCode ? (
                        <Check className="h-5 w-5 text-green-600" />
                      ) : (
                        <Copy className="h-5 w-5" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Como usar:</strong> Apresente este código no estabelecimento parceiro para utilizar sua recompensa. O código é válido até ser utilizado.
                  </p>
                </div>

                <Button
                  onClick={() => setSuccessDialogOpen(false)}
                  className="w-full fei-gradient"
                >
                  Entendi
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}



