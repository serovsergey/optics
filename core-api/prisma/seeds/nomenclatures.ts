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
      parentId: rimsId,
    },
  });
  const { id: marioRossiId } = await prisma.nomenclature.create({
    data: {
      name: 'Mario Rossi',
      isFolder: true,
      parentId: brandsId,
    },
  });
  await prisma.nomenclature.create({
    data: {
      name: 'Оправа Mario Rossi MR-2110',
      isFolder: false,
      typeId: rimsTypeId,
      code: 'MR-2110',
      parentId: marioRossiId,
    },
  });
  await prisma.nomenclature.create({
    data: {
      name: 'Оправа Mario Rossi MR-2120',
      isFolder: false,
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
      parentId: chineseId,
    },
  });
  await prisma.nomenclature.create({
    data: {
      name: 'Оправа Nikitana NK-1',
      isFolder: false,
      typeId: rimsTypeId,
      code: 'NK-1',
      parentId: nikitanaId,
    },
  });
  await prisma.nomenclature.create({
    data: {
      name: 'Оправа Nikitana NK-2',
      isFolder: false,
      typeId: rimsTypeId,
      code: 'NK-2',
      parentId: nikitanaId,
    },
  });
  const { id: lensId } = await prisma.nomenclature.create({
    data: {
      name: 'Линзы',
      isFolder: true,
    },
  });
  const { id: essilorId } = await prisma.nomenclature.create({
    data: {
      name: 'Essilor',
      isFolder: true,
      parentId: lensId,
    },
  });
  await prisma.nomenclature.create({
    data: {
      name: 'Линза Essilor Classic 1.5',
      isFolder: false,
      typeId: lensTypeId,
      code: 'EC150',
      parentId: essilorId,
    },
  });
  await prisma.nomenclature.create({
    data: {
      name: 'Линза Essilor Standart 1.6',
      isFolder: false,
      typeId: lensTypeId,
      code: 'ES160',
      parentId: essilorId,
    },
  });
  await prisma.nomenclature.create({
    data: {
      name: 'Линза Essilor Premium 1.67',
      isFolder: false,
      typeId: lensTypeId,
      code: 'EP167',
      parentId: essilorId,
    },
  });
  const { id: zeissId } = await prisma.nomenclature.create({
    data: {
      name: 'Zeiss',
      isFolder: true,
      parentId: lensId,
    },
  });
  await prisma.nomenclature.create({
    data: {
      name: 'Линза Zeiss Classic 1.5',
      isFolder: false,
      typeId: lensTypeId,
      code: 'ZC150',
      parentId: zeissId,
    },
  });
  await prisma.nomenclature.create({
    data: {
      name: 'Линза Zeiss Standart 1.6',
      isFolder: false,
      typeId: lensTypeId,
      code: 'ZS160',
      parentId: zeissId,
    },
  });
  await prisma.nomenclature.create({
    data: {
      name: 'Линза Zeiss Blue',
      isFolder: false,
      typeId: lensZeroTypeId,
      code: 'ZB',
      parentId: zeissId,
    },
  });
  const { id: readyGlassesId } = await prisma.nomenclature.create({
    data: {
      name: 'Готовые очки',
      isFolder: true,
    },
  });
  await prisma.nomenclature.create({
    data: {
      name: 'Очки-ручка',
      isFolder: false,
      typeId: readyGlassesTypeId,
      code: 'GP',
      parentId: readyGlassesId,
    },
  });
  const { id: mklId } = await prisma.nomenclature.create({
    data: {
      name: 'Контактные линзы',
      isFolder: true,
    },
  });
  await prisma.nomenclature.create({
    data: {
      name: 'Infinity',
      isFolder: false,
      typeId: mklTypeId,
      code: 'GP',
      parentId: mklId,
    },
  });
  const { id: accessoriesId } = await prisma.nomenclature.create({
    data: { name: 'Аксессуары', isFolder: true },
  });
  await prisma.nomenclature.create({
    data: {
      name: 'Футляр',
      isFolder: false,
      typeId: accessoriesTypeId,
      code: 'FC',
      parentId: accessoriesId,
    },
  });
  const { id: servicesId } = await prisma.nomenclature.create({
    data: { name: 'Услуги', isFolder: true },
  });
  await prisma.nomenclature.create({
    data: {
      name: 'Изготовление очков',
      isFolder: false,
      typeId: servicesTypeId,
      code: 'MG',
      parentId: servicesId,
    },
  });
};
