import { PrismaClient } from '@prisma/client';
import {
  seedColors,
  seedDiopters,
  seedNomenclatures,
  seedPartners,
  seedRimShapes,
  seedVariantLenses,
  seedWarehouses,
} from './seeds';
import { seedEmployees } from './seeds/employees';
import { setConstants } from './seeds/set-constants';

const prisma = new PrismaClient();

async function main() {
  await seedColors(prisma);
  await seedRimShapes(prisma);
  await seedDiopters(prisma);
  await seedWarehouses(prisma);
  await seedPartners(prisma);
  await seedVariantLenses(prisma);
  await seedNomenclatures(prisma);
  await seedEmployees(prisma);
  await setConstants(prisma);
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
