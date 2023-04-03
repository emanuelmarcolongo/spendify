import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
const password = await hash('senha123', 10);
  const user = await prisma.user.upsert({
    where: { email: 'email@email.com' },
    update: {},
    create: {
      email: 'email@email.com',
      name: 'Test User',
      password
    }
  })
  console.log({ user })
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })