import { User } from '@/types/user.types'

interface UserCardProps {
  user: User
}

export function UserCard({ user }: UserCardProps) {
  return (
    <div>
      <div>{user.name}</div>
      <div>{user.email}</div>
    </div>
  )
}
