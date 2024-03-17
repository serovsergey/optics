import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'modules/service/database/prisma.service';

@Injectable()
export class VariantReadyGlassesService {
  constructor(private prisma: PrismaService) {}
  private include = { sph: true, cyl: true };

  findOne(options: Prisma.Variant_ReadyGlassesFindUniqueArgs) {
    return this.prisma.variant_ReadyGlasses.findUnique({
      ...options,
      include: this.include,
    });
  }

  findMany(options: Prisma.Variant_ReadyGlassesFindManyArgs) {
    return this.prisma.variant_ReadyGlasses.findMany({
      ...options,
      include: this.include,
    });
  }

  create(data: Prisma.Variant_ReadyGlassesCreateInput) {
    return this.prisma.variant_ReadyGlasses.create({ data });
  }

  update(options: Prisma.Variant_ReadyGlassesUpdateArgs) {
    return this.prisma.variant_ReadyGlasses.update(options);
  }

  delete(options: Prisma.Variant_ReadyGlassesDeleteArgs) {
    return this.prisma.variant_ReadyGlasses.delete(options);
  }

  deleteMany(options: Prisma.Variant_ReadyGlassesDeleteManyArgs) {
    return this.prisma.variant_ReadyGlasses.deleteMany(options);
  }
}
