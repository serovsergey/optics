import { Field, Int, InputType, Float } from '@nestjs/graphql';
import { PurchaseInvoiceItemInput } from './purchase-invoice-item-input';

@InputType()
export class PurchaseInvoiceCreateInput {
  @Field()
  date: Date;

  @Field()
  num: string;

  @Field(() => Int, { nullable: true })
  partnerId: number;

  @Field(() => Int)
  warehouseId: number;

  @Field()
  authorId: number;

  @Field(() => Float, { nullable: true })
  total?: number;

  @Field(() => [PurchaseInvoiceItemInput], { nullable: true })
  items?: PurchaseInvoiceItemInput[];
}
