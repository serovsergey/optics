import { PrismaClient } from '@prisma/client';

export const seedPurchaseInvoices = async (prisma: PrismaClient) => {
  const lensesType = await prisma.nomenclatureType.create({
    data: { name: 'Лінзи1', variantsTable: 'lenses' },
  });
  const rimType = await prisma.nomenclatureType.create({
    data: { name: 'Оправи1', variantsTable: 'lenses' },
  });
  const nomenclature1 = await prisma.nomenclature.create({
    data: { name: 'Лінза', isFolder: false, typeId: lensesType.id },
  });
  const nomenclature2 = await prisma.nomenclature.create({
    data: { name: 'Оправв', isFolder: false, typeId: rimType.id },
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
              variantId: 1,
              quantity: 2,
              price: 100,
              total: 100,
            },
          ],
        },
      },
    },
  });
};
