import { PrismaClient } from '@prisma/client';

export const seedPartners = async (prisma: PrismaClient) => {
  await prisma.partner.create({
    data: {
      name: 'Поставщики',
      isFolder: true,
      children: {
        createMany: {
          data: [
            { name: 'Zeiss', isFolder: false },
            { name: 'Essilor', isFolder: false },
          ],
        },
      },
    },
  });
  await prisma.partner.create({
    data: {
      name: 'Покупатели',
      isFolder: true,
      children: {
        createMany: {
          data: [{ name: 'Розничный покупатель', isFolder: false }],
        },
      },
    },
  });
};
