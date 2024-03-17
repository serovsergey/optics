import { Module } from '@nestjs/common';
import { PurchaseInvoicesResolver } from './purchase-invoices.resolver';
import { PurchaseInvoicesService } from './purchase-invoices.service';
import { PrismaService } from 'modules/service/database/prisma.service';

@Module({
  providers: [PurchaseInvoicesResolver, PurchaseInvoicesService, PrismaService],
})
export class PurchaseInvoicesModule {}
