import { PrismaClient } from '@prisma/client';
import { VariantLens } from 'modules/variants/lenses/models/variant-lens.model';

export const seedPurchaseInvoices = async (
  prisma: PrismaClient,
  lensTypeId: number,
  rimsTypeId: number,
  lensVariants: VariantLens[],
) => {
  // const lensesType = await prisma.nomenclatureType.create({
  //   data: { name: 'Лінзи1', variantsTable: 'lenses' },
  // });
  // const rimType = await prisma.nomenclatureType.create({
  //   data: { name: 'Оправи1', variantsTable: 'lenses' },
  // });
  const nomenclature1 = await prisma.nomenclature.create({
    data: { name: 'Лінза', isFolder: false, typeId: lensTypeId },
  });
  const variant1 = lensVariants.find(
    ({ name }) => name === 'Sph: +1.00, D: 65',
  );
  const variant2 = lensVariants.find(
    ({ name }) => name === 'Sph: +1.25, D: 65',
  );
  const nomenclature2 = await prisma.nomenclature.create({
    data: { name: 'Оправа', isFolder: false, typeId: rimsTypeId },
  });
  const invoice = await prisma.purchaseInvoice.create({
    data: {
      num: '1',
      date: new Date(),
      partner: { create: { name: 'Supplier 1', isFolder: false } },
      warehouse: { create: { name: 'Warehouse 1' } },
      author: { create: { name: 'Employee 1', isFolder: false } },
      items: {
        createMany: {
          data: [
            {
              nomenclatureId: nomenclature1.id,
              variantId: variant1.id,
              quantity: 2,
              price: 800,
            },
            {
              nomenclatureId: nomenclature1.id,
              variantId: variant2.id,
              quantity: 2,
              price: 800,
            },
            {
              nomenclatureId: nomenclature2.id,
              quantity: 1,
              price: 1200,
            },
          ],
        },
      },
    },
  });
};
