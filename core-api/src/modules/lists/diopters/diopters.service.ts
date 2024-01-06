import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'modules/service/database/prisma.service';

@Injectable()
export class DioptersService {
  constructor(private prisma: PrismaService) {}

  findOne(options: Prisma.DiopterFindUniqueArgs) {
    return this.prisma.diopter.findUnique(options);
  }

  findMany(options: Prisma.DiopterFindManyArgs) {
    return this.prisma.diopter.findMany(options);
  }

  create(data: Prisma.DiopterCreateInput) {
    return this.prisma.diopter.create({ data });
  }

  update(options: Prisma.DiopterUpdateArgs) {
    return this.prisma.diopter.update(options);
  }

  delete(options: Prisma.DiopterDeleteArgs) {
    return this.prisma.diopter.delete(options);
  }

  deleteMany(options: Prisma.DiopterDeleteManyArgs) {
    return this.prisma.diopter.deleteMany(options);
  }
}
