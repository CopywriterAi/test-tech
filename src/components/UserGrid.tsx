import { UserCard } from './UserCard'
import { User } from '@/types/user.types'

interface UserGridProps {
  users: User[]
}

export function UserGrid({ users }: UserGridProps) {
  return (
    <div>
      {users.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  )
}
