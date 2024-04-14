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
import { seedVariantReadyGlasses } from './seeds/variant-ready-glasses';
import { seedPurchaseInvoices } from './seeds/purchase-invoices';

const prisma = new PrismaClient();

async function main() {
  await seedColors(prisma);
  await seedRimShapes(prisma);
  await seedDiopters(prisma);
  await seedWarehouses(prisma);
  await seedPartners(prisma);
  const lensVariants = await seedVariantLenses(prisma);
  await seedVariantReadyGlasses(prisma);
  const { lensTypeId, rimsTypeId } = await seedNomenclatures(prisma);
  await seedEmployees(prisma);
  await seedPurchaseInvoices(prisma, lensTypeId, rimsTypeId, lensVariants);
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
