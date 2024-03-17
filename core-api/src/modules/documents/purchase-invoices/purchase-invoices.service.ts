import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'modules/service/database/prisma.service';

@Injectable()
export class PurchaseInvoicesService {
  constructor(private prisma: PrismaService) {}

  private readonly include = {
    items: { include: { nomenclature: true } },
    warehouse: true,
    partner: true,
    author: true,
  };

  findOne(options: Prisma.PurchaseInvoiceFindUniqueArgs) {
    return this.prisma.purchaseInvoice.findUnique({
      ...options,
      include: this.include,
    });
  }

  findMany(options: Prisma.PurchaseInvoiceFindManyArgs) {
    return this.prisma.purchaseInvoice.findMany({
      ...options,
      include: this.include,
    });
  }

  create(data: Prisma.PurchaseInvoiceCreateInput) {
    return this.prisma.purchaseInvoice.create({
      data,
      include: this.include,
    });
  }

  async update(options: Prisma.PurchaseInvoiceUpdateArgs) {
    return this.prisma.purchaseInvoice.update(options);
  }

  async delete(options: Prisma.PurchaseInvoiceDeleteArgs) {
    return this.prisma.purchaseInvoice.delete(options);
  }

  async deleteMany(options: Prisma.PurchaseInvoiceDeleteManyArgs) {
    return this.prisma.purchaseInvoice.deleteMany(options);
  }
}
