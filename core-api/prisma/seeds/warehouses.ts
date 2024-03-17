import { PrismaClient } from '@prisma/client';

export const seedWarehouses = (prisma: PrismaClient) => {
  return prisma.warehouse.createMany({
    data: [
      { name: 'Склад 1' },
      { name: 'Склад 2' },
      { name: 'Склад 3' },
      { name: 'Склад 4' },
      { name: 'Склад 5' },
    ],
  });
};
