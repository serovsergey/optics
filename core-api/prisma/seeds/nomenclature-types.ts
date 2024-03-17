import { PrismaClient } from '@prisma/client';

export const seedNomenclatureTypes = async (prisma: PrismaClient) => {
  const { id: rimsTypeId } = await prisma.nomenclatureType.create({
    data: { name: 'Оправы', totals: true, variantsTable: null },
  });
  const { id: lensTypeId } = await prisma.nomenclatureType.create({
    data: { name: 'Линзы', totals: true, variantsTable: 'lenses' },
  });
  const { id: lensZeroTypeId } = await prisma.nomenclatureType.create({
    data: { name: 'Линзы нулевки', totals: true, variantsTable: null },
  });
  const { id: readyGlassesTypeId } = await prisma.nomenclatureType.create({
    data: {
      name: 'Готовые очки',
      totals: true,
      variantsTable: 'ready_glasses',
    },
  });
  const { id: mklTypeId } = await prisma.nomenclatureType.create({
    data: {
      name: 'Контактные линзы',
      totals: true,
      variantsTable: 'lenses',
    },
  });
  const { id: accessoriesTypeId } = await prisma.nomenclatureType.create({
    data: { name: 'Аксессуары', totals: true, variantsTable: null },
  });
  const { id: servicesTypeId } = await prisma.nomenclatureType.create({
    data: { name: 'Услуги', totals: false, variantsTable: null },
  });

  return {
    rimsTypeId,
    lensTypeId,
    lensZeroTypeId,
    readyGlassesTypeId,
    mklTypeId,
    accessoriesTypeId,
    servicesTypeId,
  };
};
