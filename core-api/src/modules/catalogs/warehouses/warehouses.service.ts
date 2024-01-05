import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'modules/service/database/prisma.service';

@Injectable()
export class WarehousesService {
  constructor(private prisma: PrismaService) {}

  private include = {
    _count: { select: { children: true } },
  };

  async findOne(options: Prisma.WarehouseFindUniqueArgs) {
    return this.prisma.warehouse.findUnique({
      ...options,
      include: this.include,
    });
  }

  async findMany(options: Prisma.WarehouseFindManyArgs) {
    return this.prisma.warehouse.findMany({
      ...options,
      include: this.include,
    });
  }

  async create(data: Prisma.WarehouseCreateInput) {
    return this.prisma.warehouse.create({ data });
  }

  async update(options: Prisma.WarehouseUpdateArgs) {
    return this.prisma.warehouse.update(options);
  }

  async delete(options: Prisma.WarehouseDeleteArgs) {
    return this.prisma.warehouse.delete(options);
  }

  async deleteMany(options: Prisma.WarehouseDeleteManyArgs) {
    return this.prisma.warehouse.deleteMany(options);
  }
}
