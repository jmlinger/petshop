import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.pet.deleteMany();
  const seed = await prisma.pet.create({
    data: {
      id: 1,
      name: 'Boris',
      age: 18,
      type: 'Boxer',
      tutorsName: 'Johann',
    },
  });

  console.log({ seed });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
