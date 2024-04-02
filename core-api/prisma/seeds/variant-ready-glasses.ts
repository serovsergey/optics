import { PrismaClient } from '@prisma/client';

export const seedVariantReadyGlasses = async (prisma: PrismaClient) => {
  await prisma.variant_ReadyGlasses.create({
    data: {
      name: 'Sph: +1.00, PD: 64',
      sph: {
        connectOrCreate: {
          create: { value: '+1.00' },
          where: { value: '+1.00' },
        },
      },
      pd: 64,
    },
  });
};
