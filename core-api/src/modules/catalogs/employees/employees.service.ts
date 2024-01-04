import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'modules/service/database/prisma.service';

@Injectable()
export class EmployeesService {
  constructor(private prisma: PrismaService) {}

  private include = {
    _count: { select: { children: true } },
  };

  async findOne(options: Prisma.EmployeeFindUniqueArgs) {
    return this.prisma.employee.findUnique({
      ...options,
      include: this.include,
    });
  }

  async findMany(options: Prisma.EmployeeFindManyArgs) {
    return this.prisma.employee.findMany({
      ...options,
      include: this.include,
    });
  }

  async create(data: Prisma.EmployeeCreateInput) {
    return this.prisma.employee.create({ data });
  }

  async update(options: Prisma.EmployeeUpdateArgs) {
    return this.prisma.employee.update(options);
  }

  async delete(options: Prisma.EmployeeDeleteArgs) {
    return this.prisma.employee.delete(options);
  }

  async deleteMany(options: Prisma.EmployeeDeleteManyArgs) {
    return this.prisma.employee.deleteMany(options);
  }
}
