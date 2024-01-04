import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'modules/service/database/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  findOne(options: Prisma.ProductFindUniqueArgs) {
    return this.prisma.product.findUnique({
      ...options,
      include: {
        appearance: true,
        lensParams: true,
        rimParams: true,
        _count: { select: { children: true } },
      },
    });
  }

  findMany(options: Prisma.ProductFindManyArgs) {
    return this.prisma.product.findMany({
      ...options,
      include: {
        appearance: true,
        lensParams: true,
        rimParams: true,
        _count: { select: { children: true } },
      },
    });
  }
}
