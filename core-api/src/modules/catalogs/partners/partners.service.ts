import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'modules/service/database/prisma.service';

@Injectable()
export class PartnersService {
  constructor(private prisma: PrismaService) {}

  private readonly include = {
    _count: { select: { children: true } },
  };

  async findOne(options: Prisma.PartnerFindUniqueArgs) {
    return this.prisma.partner.findUnique({
      ...options,
      include: this.include,
    });
  }

  async findMany(options: Prisma.PartnerFindManyArgs) {
    return this.prisma.partner.findMany({
      ...options,
      include: this.include,
    });
  }

  async create(data: Prisma.PartnerCreateInput) {
    return this.prisma.partner.create({ data });
  }

  async update(options: Prisma.PartnerUpdateArgs) {
    return this.prisma.partner.update(options);
  }

  async delete(options: Prisma.PartnerDeleteArgs) {
    return this.prisma.partner.delete(options);
  }

  async deleteMany(options: Prisma.PartnerDeleteManyArgs) {
    return this.prisma.partner.deleteMany(options);
  }
}
