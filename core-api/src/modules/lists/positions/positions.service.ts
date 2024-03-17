import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'modules/service/database/prisma.service';

@Injectable()
export class PositionsService {
  constructor(private prisma: PrismaService) {}

  findOne(options: Prisma.PositionFindUniqueArgs) {
    return this.prisma.position.findUnique(options);
  }

  findMany(options: Prisma.PositionFindManyArgs) {
    return this.prisma.position.findMany(options);
  }

  create(data: Prisma.PositionCreateInput) {
    return this.prisma.position.create({ data });
  }

  update(options: Prisma.PositionUpdateArgs) {
    return this.prisma.position.update(options);
  }

  delete(options: Prisma.PositionDeleteArgs) {
    return this.prisma.position.delete(options);
  }

  deleteMany(options: Prisma.PositionDeleteManyArgs) {
    return this.prisma.position.deleteMany(options);
  }
}
