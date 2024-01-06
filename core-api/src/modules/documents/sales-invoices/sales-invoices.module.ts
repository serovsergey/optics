import { Module } from '@nestjs/common';
import { SalesInvoicesService } from './sales-invoices.service';

@Module({
  providers: [SalesInvoicesService]
})
export class SalesInvoicesModule {}
