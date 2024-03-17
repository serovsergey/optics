import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { PurchaseInvoiceItem as PurchaseInvoiceItemPrisma } from '@prisma/client';
import { Nomenclature } from 'modules/catalogs/nomenclatures/models/nomenclature.model';

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

  @Field(() => Float)
  total: PurchaseInvoiceItemPrisma['total'];

  //   @Field
  //   variant: Variant_Lenses | Variant_ReadyGlasses;
}
