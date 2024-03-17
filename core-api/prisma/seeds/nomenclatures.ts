import { PrismaClient } from '@prisma/client';
import { seedNomenclatureTypes } from './nomenclature-types';

export const seedNomenclatures = async (prisma: PrismaClient) => {
  const {
    rimsTypeId,
    lensTypeId,
    lensZeroTypeId,
    readyGlassesTypeId,
    mklTypeId,
    accessoriesTypeId,
    servicesTypeId,
  } = await seedNomenclatureTypes(prisma);

  const { id: rimsId } = await prisma.nomenclature.create({
    data: { name: 'Оправы', isFolder: true, typeId: rimsTypeId },
  });
  const { id: brandsId } = await prisma.nomenclature.create({
    data: {
      name: 'Брендовые',
      isFolder: true,
      typeId: rimsTypeId,
      parentId: rimsId,
    },
  });
  const { id: marioRossiId } = await prisma.nomenclature.create({
    data: {
      name: 'Mario Rossi',
      isFolder: true,
      typeId: rimsTypeId,
      parentId: brandsId,
    },
  });
  await prisma.nomenclature.create({
    data: {
      name: 'Оправа Mario Rossi MR-2110',
      isFolder: true,
      typeId: rimsTypeId,
      code: 'MR-2110',
      parentId: marioRossiId,
    },
  });
  await prisma.nomenclature.create({
    data: {
      name: 'Оправа Mario Rossi MR-2120',
      isFolder: true,
      typeId: rimsTypeId,
      code: 'MR-2120',
      parentId: marioRossiId,
    },
  });
  const { id: chineseId } = await prisma.nomenclature.create({
    data: { name: 'Китай', isFolder: true, typeId: rimsTypeId },
  });
  const { id: nikitanaId } = await prisma.nomenclature.create({
    data: {
      name: 'Nikitana',
      isFolder: true,
      typeId: rimsTypeId,
      parentId: chineseId,
    },
  });
  await prisma.nomenclature.create({
    data: {
      name: 'Оправа Nikitana NK-1',
      isFolder: true,
      typeId: rimsTypeId,
      code: 'NK-1',
      parentId: nikitanaId,
    },
  });
  await prisma.nomenclature.create({
    data: {
      name: 'Оправа Nikitana NK-2',
      isFolder: true,
      typeId: rimsTypeId,
      code: 'NK-2',
      parentId: nikitanaId,
    },
  });
  const { id: lensId } = await prisma.nomenclature.create({
    data: { name: 'Линзы', isFolder: true, typeId: lensTypeId },
  });
  const { id: essilorId } = await prisma.nomenclature.create({
    data: {
      name: 'Essilor',
      isFolder: true,
      typeId: lensTypeId,
      parentId: lensId,
    },
  });
  await prisma.nomenclature.create({
    data: {
      name: 'Линза Essilor Classic 1.5',
      isFolder: true,
      typeId: lensTypeId,
      code: 'EC150',
      parentId: essilorId,
    },
  });
  await prisma.nomenclature.create({
    data: {
      name: 'Линза Essilor Standart 1.6',
      isFolder: true,
      typeId: lensTypeId,
      code: 'ES160',
      parentId: essilorId,
    },
  });
  await prisma.nomenclature.create({
    data: {
      name: 'Линза Essilor Premium 1.67',
      isFolder: true,
      typeId: lensTypeId,
      code: 'EP167',
      parentId: essilorId,
    },
  });
  const { id: zeissId } = await prisma.nomenclature.create({
    data: {
      name: 'Zeiss',
      isFolder: true,
      typeId: lensTypeId,
      parentId: lensId,
    },
  });
  await prisma.nomenclature.create({
    data: {
      name: 'Линза Zeiss Classic 1.5',
      isFolder: true,
      typeId: lensTypeId,
      code: 'ZC150',
      parentId: zeissId,
    },
  });
  await prisma.nomenclature.create({
    data: {
      name: 'Линза Zeiss Standart 1.6',
      isFolder: true,
      typeId: lensTypeId,
      code: 'ZS160',
      parentId: zeissId,
    },
  });
  await prisma.nomenclature.create({
    data: {
      name: 'Линза Zeiss Blue',
      isFolder: true,
      typeId: lensZeroTypeId,
      code: 'ZB',
      parentId: zeissId,
    },
  });
  await prisma.nomenclature.create({
    data: { name: 'Готовые очки', isFolder: true, typeId: readyGlassesTypeId },
  });
  await prisma.nomenclature.create({
    data: { name: 'Контактные линзы', isFolder: true, typeId: mklTypeId },
  });
  await prisma.nomenclature.create({
    data: { name: 'Аксессуары', isFolder: true, typeId: accessoriesTypeId },
  });
  const { id: servicesId } = await prisma.nomenclature.create({
    data: { name: 'Услуги', isFolder: true, typeId: servicesTypeId },
  });
  await prisma.nomenclature.create({
    data: {
      name: 'Изготовление очков',
      isFolder: true,
      typeId: servicesTypeId,
      code: 'MG',
      parentId: servicesId,
    },
  });
};
