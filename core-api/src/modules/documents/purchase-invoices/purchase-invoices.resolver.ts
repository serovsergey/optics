import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { PurchaseInvoice } from './models/purchase-invoice';
import { PurchaseInvoicesService } from './purchase-invoices.service';
import { Inject, LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

@Resolver()
export class PurchaseInvoicesResolver {
  constructor(
    private readonly purchaseInvoicesService: PurchaseInvoicesService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Query(() => PurchaseInvoice, { nullable: true })
  async purchaseInvoice(@Args('id', { type: () => Int }) id: number) {
    const purchaseInvoice = await this.purchaseInvoicesService.findOne(id);
    console.log(JSON.stringify(purchaseInvoice, null, 2));

    return purchaseInvoice;
  }
}
