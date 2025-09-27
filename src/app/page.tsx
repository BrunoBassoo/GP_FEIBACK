'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, MessageSquare, Award, BarChart3, BookOpen, Star } from 'lucide-react'

export default function HomePage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return

    if (session) {
      router.push('/dashboard')
    }
  }, [session, status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (session) {
    return null // Will redirect to dashboard
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="fei-gradient w-10 h-10 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">FEI</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">
                Plataforma de Feedback
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost">Entrar</Button>
              </Link>
              <Link href="/register">
                <Button className="fei-gradient">Cadastrar</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Plataforma de{' '}
            <span className="fei-text-gradient">Feedback</span>
            <br />
            do Centro Universitário FEI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Promova a colaboração, responsabilidade e melhoria contínua em grupos de trabalho acadêmico 
            através de um sistema de feedback baseado em pontos com recompensas reais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="fei-gradient text-lg px-8 py-3">
                Começar Agora
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                Já tenho conta
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <CardTitle>Grupos Colaborativos</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Professores criam e gerenciam grupos de projeto, promovendo trabalho em equipe efetivo.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <MessageSquare className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <CardTitle>Feedback Público</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Estudantes fornecem feedback visível aos colegas de grupo, promovendo transparência.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <CardTitle>Sistema de Pontos</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Feedback positivo gera pontos, sugestões de melhoria podem resultar em dedução de pontos.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Award className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <CardTitle>Recompensas Reais</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Troque pontos por descontos em estabelecimentos parceiros: Jujuca, Miyagi-san, Mac FEI, Augustus.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* How it Works Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Como Funciona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Cadastro e Grupos</h3>
              <p className="text-gray-600">
                Administradores cadastram professores e estudantes. Professores criam turmas e formam grupos de projeto.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Feedback Colaborativo</h3>
              <p className="text-gray-600">
                Estudantes avaliam colegas em categorias como colaboração, comunicação, contribuição e pontualidade.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Pontos e Recompensas</h3>
              <p className="text-gray-600">
                Acumule pontos com feedback positivo e troque por descontos reais nos estabelecimentos parceiros do FEI.
              </p>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Estabelecimentos Parceiros
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mac FEI</h3>
              <p className="text-sm text-gray-600">Até 10% de desconto</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Jujuca</h3>
              <p className="text-sm text-gray-600">Até 15% de desconto</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Miyagi-san</h3>
              <p className="text-sm text-gray-600">Até 20% de desconto</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Augustus</h3>
              <p className="text-sm text-gray-600">Até 25% de desconto</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para Começar?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se à comunidade FEI e transforme a forma como você colabora em projetos acadêmicos.
          </p>
          <Link href="/register">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              Criar Conta Gratuita
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="fei-gradient w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">FEI</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Centro Universitário FEI</h3>
            <p className="text-gray-400 mb-4">
              Plataforma de Feedback e Performance Acadêmica
            </p>
            <p className="text-sm text-gray-500">
              © 2024 Centro Universitário FEI. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}