import { PrismaClient } from '@prisma/client';
export enum SeedPosition {
  SEO = 'Дирехтор',
  ACCOUNTANT = 'Бухгалтер',
  SALES_MANAGER = 'Продавець-косультант',
  OPHTALMOLOGIST = 'Лікар-офтальмолог',
  OPTOMETRIST = 'Оптометрист',
  CRAFTSMAN = 'Майстер',
}
export const seedPositions = (prisma: PrismaClient) => {
  return prisma.position.createMany({
    data: [
      { value: SeedPosition.SEO },
      { value: SeedPosition.ACCOUNTANT },
      { value: SeedPosition.SALES_MANAGER },
      { value: SeedPosition.OPHTALMOLOGIST },
      { value: SeedPosition.OPTOMETRIST },
      { value: SeedPosition.CRAFTSMAN },
    ],
  });
};
