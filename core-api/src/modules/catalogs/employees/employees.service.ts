import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'modules/service/database/prisma.service';
import { extractChildrenCount } from 'utils';

@Injectable()
export class EmployeesService {
  constructor(private prisma: PrismaService) {}

  private readonly include = {
    _count: { select: { children: true } },
  };

  async findOne(options: Prisma.EmployeeFindUniqueArgs) {
    return extractChildrenCount(
      await this.prisma.employee.findUnique({
        ...options,
        include: this.include,
      }),
    );
  }

  async findMany(options: Prisma.EmployeeFindManyArgs) {
    const employees = await this.prisma.employee.findMany({
      ...options,
      include: this.include,
    });
    return employees.map(extractChildrenCount);
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
