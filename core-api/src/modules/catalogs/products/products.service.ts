import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'modules/service/database/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  private include = {
    appearance: { include: { color: true } },
    lensParams: true,
    rimParams: { include: { frameShape: true } },
    _count: { select: { children: true } },
  };

  findOne(options: Prisma.ProductFindUniqueArgs) {
    return this.prisma.product.findUnique({
      ...options,
      include: this.include,
    });
  }

  findMany(options: Prisma.ProductFindManyArgs) {
    return this.prisma.product.findMany({
      ...options,
      include: this.include,
    });
  }

  async create(data: Prisma.ProductCreateInput) {
    return this.prisma.product.create({ data });
  }

  async update(options: Prisma.ProductUpdateArgs) {
    return this.prisma.product.update(options);
  }

  async delete(options: Prisma.ProductDeleteArgs) {
    return this.prisma.product.delete(options);
  }

  async deleteMany(options: Prisma.ProductDeleteManyArgs) {
    return this.prisma.product.deleteMany(options);
  }
}
