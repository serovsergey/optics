import { PrismaClient } from '@prisma/client';

const COMPANY_NAME = 'Оптика';

export const setConstants = (prisma: PrismaClient) => {
  return prisma.const_CompanyName.create({
    data: { value: COMPANY_NAME },
  });
};
