import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'modules/service/database/prisma.service';

@Injectable()
export class EmployeesService {
  constructor(private prisma: PrismaService) {}

  async getEmployees(
    parentId: number | null,
    options: Prisma.EmployeeFindManyArgs,
  ) {
    console.log('getEmployees', parentId, options);

    return this.prisma.employee.findMany({
      ...options,
      where: { ...options.where, parentId },
    });
  }
}
