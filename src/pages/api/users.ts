import { NextApiRequest, NextApiResponse } from 'next'
import { faker } from '@faker-js/faker'
import { User } from '@/types/user.types'

export default function handler(req: NextApiRequest, res: NextApiResponse<User[]>) {
  const users: User[] = new Array(100).fill(0).map((_, index) => ({
    id: index + 1,
    name: faker.person.fullName(),
    avatar: faker.image.url(),
    email: faker.internet.email(),
    job: Math.floor(Math.random() * 6) % 3 === 0 ? undefined : faker.person.jobTitle(),
  }))

  res.status(200).json(users)
}
