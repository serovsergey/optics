import { Module } from '@nestjs/common';
import { PurchaseInvoicesModule } from './purchase-invoices/purchase-invoices.module';
import { SalesInvoicesModule } from './sales-invoices/sales-invoices.module';

@Module({
  imports: [PurchaseInvoicesModule, SalesInvoicesModule],
})
export class DocumentsModule {}
