import { render, screen } from '@testing-library/react'
import { UserCard } from './UserCard'
import { User } from '@/types/user.types'

const mockUser: User = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://example.com/avatar.jpg',
}

describe('UserCard Component', () => {
  it('renders user card correctly', () => {
    render(<UserCard user={mockUser} />)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
})
