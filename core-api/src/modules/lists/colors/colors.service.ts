import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'modules/service/database/prisma.service';

@Injectable()
export class ColorsService {
  constructor(private prisma: PrismaService) {}

  findOne(options: Prisma.ColorFindUniqueArgs) {
    return this.prisma.color.findUnique(options);
  }

  findMany(options: Prisma.ColorFindManyArgs) {
    return this.prisma.color.findMany(options);
  }

  create(data: Prisma.ColorCreateInput) {
    return this.prisma.color.create({ data });
  }

  update(options: Prisma.ColorUpdateArgs) {
    return this.prisma.color.update(options);
  }

  delete(options: Prisma.ColorDeleteArgs) {
    return this.prisma.color.delete(options);
  }

  deleteMany(options: Prisma.ColorDeleteManyArgs) {
    return this.prisma.color.deleteMany(options);
  }
}
