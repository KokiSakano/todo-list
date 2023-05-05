import prisma from '../src/lib/prisma'

async function main() {
  const response = await Promise.all([
    prisma.$executeRawUnsafe(`TRUNCATE TABLE tasks CASCADE;`),
    prisma.tasks.createMany({
      data: [
        {
          title: 'トイレ掃除',
        },
        {
          title: 'お買い物',
        },
        {
          title: 'お風呂に入る',
          completed: true,
        },
        {
          title: '洗濯',
        },
        {
          title: 'ゴミ捨て',
          completed: true,
        },
        {
          title: '宿題',
        },
        {
          title: '世界征服',
          completed: true,
        },
        {
          title: 'Learn React',
        },
      ],
    }),
  ])
  console.log(response)
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
