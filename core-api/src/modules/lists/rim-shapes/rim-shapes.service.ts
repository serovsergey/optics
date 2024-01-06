import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'modules/service/database/prisma.service';

@Injectable()
export class RimShapesService {
  constructor(private prisma: PrismaService) {}

  findOne(options: Prisma.RimShapeFindUniqueArgs) {
    return this.prisma.rimShape.findUnique(options);
  }

  findMany(options: Prisma.RimShapeFindManyArgs) {
    return this.prisma.rimShape.findMany(options);
  }

  create(data: Prisma.RimShapeCreateInput) {
    return this.prisma.rimShape.create({ data });
  }

  update(options: Prisma.RimShapeUpdateArgs) {
    return this.prisma.rimShape.update(options);
  }

  delete(options: Prisma.RimShapeDeleteArgs) {
    return this.prisma.rimShape.delete(options);
  }

  deleteMany(options: Prisma.RimShapeDeleteManyArgs) {
    return this.prisma.rimShape.deleteMany(options);
  }
}
