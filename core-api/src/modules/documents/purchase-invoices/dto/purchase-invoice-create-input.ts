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

  @Field()
  warehouseId: number;

  @Field()
  authorId: number;

  @Field(() => Float, { nullable: true })
  total?: number;

  @Field({ nullable: true })
  isPosted?: boolean;

  @Field(() => [PurchaseInvoiceItemInput], { nullable: true })
  items?: PurchaseInvoiceItemInput[];
}
