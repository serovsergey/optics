import { Module } from '@nestjs/common';
import { PurchaseInvoicesResolver } from './purchase-invoices.resolver';

@Module({
  providers: [PurchaseInvoicesResolver]
})
export class PurchaseInvoicesModule {}
