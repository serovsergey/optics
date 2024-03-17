import { PrismaClient } from '@prisma/client';
import { SeedPosition, seedPositions } from './positions';

export const seedEmployees = async (prisma: PrismaClient) => {
  const seo = await prisma.employee.create({
    data: { name: 'Керівництво', isFolder: true },
  });
  const accountants = await prisma.employee.create({
    data: { name: 'Бухгалтерія', isFolder: true },
  });
  const medical = await prisma.employee.create({
    data: { name: 'Медперсонал', isFolder: true },
  });
  const sales = await prisma.employee.create({
    data: { name: 'Відділ продажів', isFolder: true },
  });
  const workshop = await prisma.employee.create({
    data: { name: 'Майстерня', isFolder: true },
  });

  await seedPositions(prisma);
  const positions = await prisma.position.findMany();

  await prisma.employee.createMany({
    data: [
      {
        parentId: seo.id,
        isFolder: false,
        name: 'Хазяїн',
        positionId: positions.find(({ value }) => value === SeedPosition.SEO)
          .id,
      },

      {
        parentId: medical.id,
        isFolder: false,
        name: 'Юлія Петренко',
        positionId: positions.find(
          ({ value }) => value === SeedPosition.OPHTALMOLOGIST,
        ).id,
      },
      {
        parentId: medical.id,
        isFolder: false,
        name: 'Марія Григоренко',
        positionId: positions.find(
          ({ value }) => value === SeedPosition.OPTOMETRIST,
        ).id,
      },
      {
        parentId: sales.id,
        isFolder: false,
        name: 'Петро Продавенко',
        positionId: positions.find(
          ({ value }) => value === SeedPosition.SALES_MANAGER,
        ).id,
      },
      {
        parentId: sales.id,
        isFolder: false,
        name: 'Оксана Консультенко',
        positionId: positions.find(
          ({ value }) => value === SeedPosition.SALES_MANAGER,
        ).id,
      },
      {
        parentId: workshop.id,
        isFolder: false,
        name: 'Іван Майстеренко',
        positionId: positions.find(
          ({ value }) => value === SeedPosition.CRAFTSMAN,
        ).id,
      },
    ],
  });
  const accountant = await prisma.employee.create({
    data: {
      parentId: accountants.id,
      isFolder: false,
      name: 'Олександр Бухгалтеренко',
      positionId: positions.find(
        ({ value }) => value === SeedPosition.ACCOUNTANT,
      ).id,
    },
  });

  await prisma.const_Accountant.create({
    data: { date: new Date(), employeeId: accountant.id },
  });
};
