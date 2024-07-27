import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const author = await prisma.author.create({
    data: {
        name: 'Alice',
        email:'alice@prisma.io',
    },
  })
  console.log(author);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })