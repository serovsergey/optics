import { PrismaClient } from '@prisma/client';

export const seedRimShapes = (prisma: PrismaClient) => {
  return prisma.rimShape.createMany({
    data: [
      { value: 'Стандарт' },
      { value: 'Капли' },
      { value: 'Круг' },
      { value: 'Овал' },
      { value: 'Бабочка' },
    ],
  });
};
