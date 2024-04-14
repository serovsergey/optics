import { PrismaClient } from '@prisma/client';

export const seedVariantLenses = async (prisma: PrismaClient) => {
  return [
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: 0.00, D: 75',
        sph: {
          connectOrCreate: {
            create: { value: '0.00' },
            where: { value: '0.00' },
          },
        },
        diameter: 75,
      },
    }),

    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: +0.25, D: 65',
        sph: {
          connectOrCreate: {
            create: { value: '+0.25' },
            where: { value: '+0.25' },
          },
        },
        diameter: 65,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: +0.50, D: 65',
        sph: {
          connectOrCreate: {
            create: { value: '+0.50' },
            where: { value: '+0.50' },
          },
        },
        diameter: 65,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: +0.75, D: 65',
        sph: {
          connectOrCreate: {
            create: { value: '+0.75' },
            where: { value: '+0.75' },
          },
        },
        diameter: 65,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: +1.00, D: 65',
        sph: {
          connectOrCreate: {
            create: { value: '+1.00' },
            where: { value: '+1.00' },
          },
        },
        diameter: 65,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: +1.25, D: 65',
        sph: {
          connectOrCreate: {
            create: { value: '+1.25' },
            where: { value: '+1.25' },
          },
        },
        diameter: 65,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: +1.50, D: 65',
        sph: {
          connectOrCreate: {
            create: { value: '+1.50' },
            where: { value: '+1.50' },
          },
        },
        diameter: 65,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: +1.75, D: 65',
        sph: {
          connectOrCreate: {
            create: { value: '+1.75' },
            where: { value: '+1.75' },
          },
        },
        diameter: 65,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: +2.00, D: 65',
        sph: {
          connectOrCreate: {
            create: { value: '+2.00' },
            where: { value: '+2.00' },
          },
        },
        diameter: 65,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: +2.25, D: 65',
        sph: {
          connectOrCreate: {
            create: { value: '+2.25' },
            where: { value: '+2.25' },
          },
        },
        diameter: 65,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: +2.50, D: 65',
        sph: {
          connectOrCreate: {
            create: { value: '+2.50' },
            where: { value: '+2.50' },
          },
        },
        diameter: 65,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: +2.75, D: 65',
        sph: {
          connectOrCreate: {
            create: { value: '+2.75' },
            where: { value: '+2.75' },
          },
        },
        diameter: 65,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: +3.00, D: 65',
        sph: {
          connectOrCreate: {
            create: { value: '+3.00' },
            where: { value: '+3.00' },
          },
        },
        diameter: 65,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: +3.25, D: 65',
        sph: {
          connectOrCreate: {
            create: { value: '+3.25' },
            where: { value: '+3.25' },
          },
        },
        diameter: 65,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: +3.50, D: 65',
        sph: {
          connectOrCreate: {
            create: { value: '+3.50' },
            where: { value: '+3.50' },
          },
        },
        diameter: 65,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: +3.75, D: 65',
        sph: {
          connectOrCreate: {
            create: { value: '+3.75' },
            where: { value: '+3.75' },
          },
        },
        diameter: 65,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: +4.00, D: 65',
        sph: {
          connectOrCreate: {
            create: { value: '+4.00' },
            where: { value: '+4.00' },
          },
        },
        diameter: 65,
      },
    }),

    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: -0.25, D: 65',
        sph: {
          connectOrCreate: {
            create: { value: '-0.25' },
            where: { value: '-0.25' },
          },
        },
        diameter: 75,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: -0.50, D: 75',
        sph: {
          connectOrCreate: {
            create: { value: '-0.50' },
            where: { value: '-0.50' },
          },
        },
        diameter: 75,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: -0.75, D: 75',
        sph: {
          connectOrCreate: {
            create: { value: '-0.75' },
            where: { value: '-0.75' },
          },
        },
        diameter: 75,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: -1.00, D: 75',
        sph: {
          connectOrCreate: {
            create: { value: '-1.00' },
            where: { value: '-1.00' },
          },
        },
        diameter: 75,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: -1.25, D: 75',
        sph: {
          connectOrCreate: {
            create: { value: '-1.25' },
            where: { value: '-1.25' },
          },
        },
        diameter: 75,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: -1.50, D: 75',
        sph: {
          connectOrCreate: {
            create: { value: '-1.50' },
            where: { value: '-1.50' },
          },
        },
        diameter: 75,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: -1.75, D: 75',
        sph: {
          connectOrCreate: {
            create: { value: '-1.75' },
            where: { value: '-1.75' },
          },
        },
        diameter: 75,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: -2.00, D: 75',
        sph: {
          connectOrCreate: {
            create: { value: '-2.00' },
            where: { value: '-2.00' },
          },
        },
        diameter: 75,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: -2.25, D: 75',
        sph: {
          connectOrCreate: {
            create: { value: '-2.25' },
            where: { value: '-2.25' },
          },
        },
        diameter: 75,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: -2.50, D: 75',
        sph: {
          connectOrCreate: {
            create: { value: '-2.50' },
            where: { value: '-2.50' },
          },
        },
        diameter: 75,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: -2.75, D: 75',
        sph: {
          connectOrCreate: {
            create: { value: '-2.75' },
            where: { value: '-2.75' },
          },
        },
        diameter: 75,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: -3.00, D: 75',
        sph: {
          connectOrCreate: {
            create: { value: '-3.00' },
            where: { value: '-3.00' },
          },
        },
        diameter: 75,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: -3.25, D: 75',
        sph: {
          connectOrCreate: {
            create: { value: '-3.25' },
            where: { value: '-3.25' },
          },
        },
        diameter: 75,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: -3.50, D: 75',
        sph: {
          connectOrCreate: {
            create: { value: '-3.50' },
            where: { value: '-3.50' },
          },
        },
        diameter: 75,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: -3.75, D: 75',
        sph: {
          connectOrCreate: {
            create: { value: '-3.75' },
            where: { value: '-3.75' },
          },
        },
        diameter: 75,
      },
    }),
    await prisma.variant_Lens.create({
      data: {
        name: 'Sph: -4.00, D: 75',
        sph: {
          connectOrCreate: {
            create: { value: '-4.00' },
            where: { value: '-4.00' },
          },
        },
        diameter: 75,
      },
    }),
  ];
};
