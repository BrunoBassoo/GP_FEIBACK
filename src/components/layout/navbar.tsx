'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Menu, X, User, LogOut, Settings, BookOpen, Users, Award, BarChart3 } from 'lucide-react'
import { UserRole } from '@prisma/client'

export function Navbar() {
  const { data: session } = useSession()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const getNavigationItems = (role: UserRole) => {
    const baseItems = [
      { href: '/dashboard', label: 'Dashboard', icon: BarChart3 },
    ]

    switch (role) {
      case 'ADMIN':
        return [
          ...baseItems,
          { href: '/admin/users', label: 'Usuários', icon: Users },
          { href: '/admin/classes', label: 'Turmas', icon: BookOpen },
          { href: '/admin/rewards', label: 'Recompensas', icon: Award },
        ]
      case 'PROFESSOR':
        return [
          ...baseItems,
          { href: '/professor/classes', label: 'Minhas Turmas', icon: BookOpen },
          { href: '/professor/groups', label: 'Grupos', icon: Users },
          { href: '/professor/feedback', label: 'Feedback', icon: BarChart3 },
        ]
      case 'STUDENT':
        return [
          ...baseItems,
          { href: '/student/dashboard/groups', label: 'Meus Grupos', icon: Users },
          { href: '/student/dashboard/feedback', label: 'Feedback', icon: BarChart3 },
          { href: '/student/dashboard/rewards', label: 'Recompensas', icon: Award },
        ]
      default:
        return baseItems
    }
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/dashboard" className="flex-shrink-0 flex items-center">
              <div className="fei-gradient w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">FEI</span>
              </div>
              <span className="hidden sm:block text-xl font-semibold text-gray-900">
                Feedback Platform
              </span>
            </Link>

            {/* Desktop Navigation */}
            {session && (
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                {getNavigationItems(session.user.role).map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors"
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            )}
          </div>

          <div className="flex items-center">
            {session ? (
              <>
                {/* Mobile menu button */}
                <div className="md:hidden">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  >
                    {isMobileMenuOpen ? (
                      <X className="h-6 w-6" />
                    ) : (
                      <Menu className="h-6 w-6" />
                    )}
                  </Button>
                </div>

                {/* User dropdown */}
                <div className="hidden md:block">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-blue-100 text-blue-600">
                            {getInitials(session.user.name)}
                          </AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end">
                      <div className="flex items-center justify-start gap-2 p-2">
                        <div className="flex flex-col space-y-1 leading-none">
                          <p className="font-medium">{session.user.name}</p>
                          <p className="w-[200px] truncate text-sm text-muted-foreground">
                            {session.user.email}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {session.user.role === 'ADMIN' && 'Administrador'}
                            {session.user.role === 'PROFESSOR' && 'Professor'}
                            {session.user.role === 'STUDENT' && 'Estudante'}
                          </p>
                        </div>
                      </div>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href="/profile" className="flex items-center">
                          <User className="mr-2 h-4 w-4" />
                          Perfil
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/settings" className="flex items-center">
                          <Settings className="mr-2 h-4 w-4" />
                          Configurações
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={() => signOut({ callbackUrl: '/login' })}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Sair
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/login">
                  <Button variant="ghost">Entrar</Button>
                </Link>
                <Link href="/register">
                  <Button>Cadastrar</Button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {session && isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1 border-t border-gray-200">
              {getNavigationItems(session.user.role).map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium flex items-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </Link>
                )
              })}
              <div className="border-t border-gray-200 pt-3">
                <div className="flex items-center px-3 py-2">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-blue-100 text-blue-600">
                      {getInitials(session.user.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      {session.user.name}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      {session.user.email}
                    </div>
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  <Link
                    href="/profile"
                    className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium flex items-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User className="w-5 h-5 mr-3" />
                    Perfil
                  </Link>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      signOut({ callbackUrl: '/login' })
                    }}
                    className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium flex items-center w-full text-left"
                  >
                    <LogOut className="w-5 h-5 mr-3" />
                    Sair
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
