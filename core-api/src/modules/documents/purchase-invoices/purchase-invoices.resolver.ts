import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PurchaseInvoice } from './models/purchase-invoice';
import { PurchaseInvoicesService } from './purchase-invoices.service';
import { Inject, LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { ListOptionsPipe } from 'pipes';
import { Prisma } from '@prisma/client';
import { ListOptions } from 'types';
import { PurchaseInvoiceCreateInput } from './dto/purchase-invoice-create-input';

@Resolver()
export class PurchaseInvoicesResolver {
  constructor(
    private readonly purchaseInvoicesService: PurchaseInvoicesService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Query(() => PurchaseInvoice, { nullable: true })
  async purchaseInvoice(@Args('id', { type: () => Int }) id: number) {
    const purchaseInvoice = await this.purchaseInvoicesService.findOne({
      where: { id },
    });
    console.log(JSON.stringify(purchaseInvoice, null, 2));
    return purchaseInvoice;
  }

  @Query(() => [PurchaseInvoice], { name: 'purchaseInvoices' })
  async purchaseInvoices(
    @Args(
      { name: 'options', nullable: true },
      new ListOptionsPipe<
        Prisma.PurchaseInvoiceWhereInput,
        Prisma.PurchaseInvoiceOrderByWithRelationInput
      >(),
    )
    options: ListOptions<
      Prisma.PurchaseInvoiceWhereInput,
      Prisma.PurchaseInvoiceOrderByWithRelationInput
    >,
  ) {
    const purchaseInvoices =
      await this.purchaseInvoicesService.findMany(options);
    console.log(JSON.stringify(purchaseInvoices, null, 2));
    return purchaseInvoices;
  }

  @Mutation(() => PurchaseInvoice, { name: 'createPurchaseInvoice' })
  async createPurchaseInvoice(@Args('data') data: PurchaseInvoiceCreateInput) {
    const { authorId, partnerId, warehouseId, items, ...rest } = data;
    const purchaseInvoice = await this.purchaseInvoicesService.create({
      ...rest,
      partner: { connect: { id: partnerId } },
      warehouse: { connect: { id: warehouseId } },
      author: { connect: { id: authorId } },
      items: { createMany: { data: items } },
    });
    console.log(JSON.stringify(purchaseInvoice, null, 2));
    return purchaseInvoice;
  }
}
