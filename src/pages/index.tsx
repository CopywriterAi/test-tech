import { UserGrid } from '@/components/UserGrid'
import { User } from '@/types/user.types'

export default function Home() {
  const users: User[] = [
    {
      id: 1,
      name: 'Josep',
      email: 'josep@example.com',
      avatar: 'https://avatars.dicebear.com/api/initials/josep@example.com.svg',
    },
    {
      id: 2,
      name: 'John',
      email: 'john@example.com',
      avatar: 'https://avatars.dicebear.com/api/initials/john@example.com.svg',
    },
    {
      id: 3,
      name: 'Jane',
      email: 'jane@example.com',
      avatar: 'https://avatars.dicebear.com/api/initials/jane@example.com.svg',
    },
  ]

  return (
    <div>
      <UserGrid users={users} />
      <div>
        <button>Back</button>
        <div>page 1 of 1</div>
        <button>Next</button>
      </div>
    </div>
  )
}
