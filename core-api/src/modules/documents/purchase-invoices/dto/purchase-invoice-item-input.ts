import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { PurchaseInvoiceItem as PurchaseInvoiceItemPrisma } from '@prisma/client';

@InputType()
export class PurchaseInvoiceItemInput {
  @Field(() => Int)
  nomenclatureId: PurchaseInvoiceItemPrisma['nomenclatureId'];

  @Field(() => Int, { nullable: true })
  variantId: PurchaseInvoiceItemPrisma['variantId'];

  @Field(() => Int)
  quantity: PurchaseInvoiceItemPrisma['quantity'];

  @Field(() => Float)
  price: PurchaseInvoiceItemPrisma['price'];

  //   @Field
  //   variant: Variant_Lenses | Variant_ReadyGlasses;
}
