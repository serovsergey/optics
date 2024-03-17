import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'modules/service/database/prisma.service';

@Injectable()
export class VariantLensesService {
  constructor(private prisma: PrismaService) {}
  private readonly include = { cyl: true, sph: true };

  findOne(options: Prisma.Variant_LensFindUniqueArgs) {
    return this.prisma.variant_Lens.findUnique({
      ...options,
      include: this.include,
    });
  }

  findMany(options: Prisma.Variant_LensFindManyArgs) {
    return this.prisma.variant_Lens.findMany({
      ...options,
      include: this.include,
    });
  }

  create(data: Prisma.Variant_LensCreateInput) {
    return this.prisma.variant_Lens.create({ data });
  }

  update(options: Prisma.Variant_LensUpdateArgs) {
    return this.prisma.variant_Lens.update(options);
  }

  delete(options: Prisma.Variant_LensDeleteArgs) {
    return this.prisma.variant_Lens.delete(options);
  }

  deleteMany(options: Prisma.Variant_LensDeleteManyArgs) {
    return this.prisma.variant_Lens.deleteMany(options);
  }
}
