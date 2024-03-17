import { PrismaClient } from '@prisma/client';

export const seedColors = (prisma: PrismaClient) => {
  return prisma.color.createMany({
    data: [
      { value: 'Белый' },
      { value: 'Черный' },
      { value: 'Красный' },
      { value: 'Зеленый' },
      { value: 'Синий' },
    ],
  });
};
