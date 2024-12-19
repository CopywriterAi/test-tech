import { UserGrid } from '@/components/UserGrid'
import { User } from '@/types/user.types'

export default function Home() {
  const users: User[] = [
    {
      id: 1,
      name: 'Josep',
      email: 'josep@example.com',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'John',
      email: 'john@example.com',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      id: 3,
      name: 'Jane',
      email: 'jane@example.com',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
  ]

  return (
    <div>
      <UserGrid users={users} />
    </div>
  )
}
