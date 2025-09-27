'use client'

import { useSession } from 'next-auth/react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { FeedbackModal } from '@/components/student/FeedbackModal'
import {
  MessageSquare,
  User,
  Calendar,
  Award,
  MoreVertical,
  UserMinus,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn, formatDate } from '@/lib/utils'

interface GroupMember {
  id: string
  joinedAt: string
  user: {
    id: string
    name: string
    studentId: string
    _count?: {
      feedbackGiven: number
      feedbackReceived: number
    }
  }
}

interface GroupMemberCardProps {
  member: GroupMember
  groupId: string
  groupName: string
  className?: string
  showActions?: boolean
  onFeedbackSubmitted?: (feedback: {
    id: string
    content: string
    type: string
    points: number
    category: string
  }) => void
  onMemberRemoved?: (memberId: string) => void
  canRemoveMember?: boolean
}

export function GroupMemberCard({
  member,
  groupId,
  groupName,
  className,
  showActions = true,
  onFeedbackSubmitted,
  onMemberRemoved,
  canRemoveMember = false,
}: GroupMemberCardProps) {
  const { data: session } = useSession()
  
  const isCurrentUser = session?.user?.id === member.user.id
  const canGiveFeedback = session?.user?.role === 'STUDENT' && !isCurrentUser

  const handleRemoveMember = async () => {
    if (!canRemoveMember || !onMemberRemoved) return

    try {
      const response = await fetch(`/api/groups/${groupId}/members/${member.user.id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        onMemberRemoved(member.user.id)
      } else {
        const data = await response.json()
        console.error('Error removing member:', data.message)
        // TODO: Show error toast
      }
    } catch (error) {
      console.error('Error removing member:', error)
      // TODO: Show error toast
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase()
  }

  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-blue-500',
      'bg-green-500',
      'bg-purple-500',
      'bg-orange-500',
      'bg-pink-500',
      'bg-indigo-500',
    ]
    const index = name.length % colors.length
    return colors[index]
  }

  return (
    <Card className={cn('hover:shadow-md transition-shadow', className)}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 flex-1">
            {/* Avatar */}
            <Avatar className="h-10 w-10">
              <AvatarFallback className={cn('text-white font-semibold', getAvatarColor(member.user.name))}>
                {getInitials(member.user.name)}
              </AvatarFallback>
            </Avatar>

            {/* Member Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <h4 className="font-medium text-sm truncate">
                  {member.user.name}
                </h4>
                {isCurrentUser && (
                  <Badge variant="secondary" className="text-xs">
                    Você
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center space-x-4 mt-1">
                <span className="text-xs text-muted-foreground">
                  RA: {member.user.studentId}
                </span>
                <span className="text-xs text-muted-foreground flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {formatDate(member.joinedAt)}
                </span>
              </div>

              {/* Stats for professors/admins */}
              {member.user._count && session?.user?.role !== 'STUDENT' && (
                <div className="flex items-center space-x-3 mt-2">
                  <Badge variant="outline" className="text-xs">
                    <MessageSquare className="h-3 w-3 mr-1" />
                    {member.user._count.feedbackGiven} dados
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    <Award className="h-3 w-3 mr-1" />
                    {member.user._count.feedbackReceived} recebidos
                  </Badge>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          {showActions && (
            <div className="flex items-center space-x-2">
              {/* Feedback Button for Students */}
              {canGiveFeedback && (
                <FeedbackModal
                  trigger={
                    <Button size="sm" variant="outline">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Avaliar
                    </Button>
                  }
                  groupMember={{
                    id: member.user.id,
                    name: member.user.name,
                    studentId: member.user.studentId,
                  }}
                  groupName={groupName}
                  onFeedbackSubmitted={onFeedbackSubmitted}
                />
              )}

              {/* Professor Actions */}
              {canRemoveMember && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="sm" variant="ghost">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={handleRemoveMember}
                      className="text-red-600 focus:text-red-600"
                    >
                      <UserMinus className="h-4 w-4 mr-2" />
                      Remover do Grupo
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}

              {/* View Profile for Professors */}
              {session?.user?.role === 'PROFESSOR' && !canRemoveMember && (
                <Button size="sm" variant="outline">
                  <User className="h-4 w-4 mr-1" />
                  Ver Perfil
                </Button>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}


