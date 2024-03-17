import { Injectable } from '@nestjs/common';
import { PrismaService } from 'modules/service/database/prisma.service';

@Injectable()
export class PurchaseInvoicesService {
  constructor(private prisma: PrismaService) {}

  findOne(id: number) {
    return this.prisma.purchaseInvoice.findUnique({
      where: { id },
      include: {
        items: { include: { nomenclature: true } },
        warehouse: true,
        partner: true,
      },
    });
  }
}
