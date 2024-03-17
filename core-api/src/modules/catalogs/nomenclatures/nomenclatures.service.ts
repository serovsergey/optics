import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'modules/service/database/prisma.service';

@Injectable()
export class NomenclaturesService {
  constructor(private prisma: PrismaService) {}

  private readonly include = {
    appearance: { include: { color: true } },
    lensParams: true,
    rimParams: { include: { shape: true } },
    _count: { select: { children: true } },
  };

  findOne(options: Prisma.NomenclatureFindUniqueArgs) {
    return this.prisma.nomenclature.findUnique({
      ...options,
      include: this.include,
    });
  }

  findMany(options: Prisma.NomenclatureFindManyArgs) {
    return this.prisma.nomenclature.findMany({
      ...options,
      include: this.include,
    });
  }

  async create(data: Prisma.NomenclatureCreateInput) {
    return this.prisma.nomenclature.create({ data });
  }

  async update(options: Prisma.NomenclatureUpdateArgs) {
    return this.prisma.nomenclature.update(options);
  }

  async delete(options: Prisma.NomenclatureDeleteArgs) {
    return this.prisma.nomenclature.delete(options);
  }

  async deleteMany(options: Prisma.NomenclatureDeleteManyArgs) {
    return this.prisma.nomenclature.deleteMany(options);
  }
}
