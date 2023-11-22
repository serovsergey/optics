import { Injectable } from '@nestjs/common';
import { SingularValue } from '@prisma/client';
import { PrismaService } from 'modules/service/database/prisma.service';

@Injectable()
export class ConstantsService {
  constructor(private prisma: PrismaService) {}

  async getCompanyName() {
    return this.prisma.const_CompanyName.findFirst();
  }

  updateCompanyName(value: string) {
    return this.prisma.const_CompanyName.upsert({
      where: { singular: SingularValue.singular },
      update: { value },
      create: { value },
    });
  }

  async getAccountantHistory() {
    return this.prisma.const_Accountant.findMany({
      orderBy: { date: 'asc' },
      include: { value: true },
    });
  }

  getAccountant(date: Date = new Date()) {
    return this.prisma.const_Accountant.findFirst({
      where: { date: { lte: date } },
      orderBy: { date: 'desc' },
      include: { value: true },
    });
  }

  updateAccountant(employeeId: number, date: Date = new Date()) {
    return this.prisma.const_Accountant.upsert({
      where: { date },
      update: { employeeId },
      create: { date, employeeId },
      include: { value: true },
    });
  }

  deleteAccountantHistoryRecord(date: Date) {
    return this.prisma.const_Accountant.delete({ where: { date } });
  }
}
