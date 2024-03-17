import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import {
  //   Nomenclature,
  PurchaseInvoiceItem as PurchaseInvoiceItemPrisma,
  //   Variant_Lenses,
  //   Variant_ReadyGlasses,
} from '@prisma/client';
import { Nomenclature } from 'modules/catalogs/nomenclatures/models/nomenclature.model';

@ObjectType()
export class PurchaseInvoiceItem {
  @Field(() => Int)
  id: PurchaseInvoiceItemPrisma['id'];

  @Field(() => Int)
  purchaseInvoiceId: PurchaseInvoiceItemPrisma['invoiceId'];

  @Field(() => Int)
  nomenclatureId: PurchaseInvoiceItemPrisma['nomenclatureId'];

  @Field(() => Int, { nullable: true })
  variantId: PurchaseInvoiceItemPrisma['variantId'];

  @Field(() => Int)
  quantity?: PurchaseInvoiceItemPrisma['quantity'];

  @Field(() => Float)
  price?: PurchaseInvoiceItemPrisma['price'];

  @Field(() => Float)
  total?: PurchaseInvoiceItemPrisma['total'];

  @Field(() => Nomenclature, { nullable: true })
  nomenclature: Nomenclature;

  //   @Field
  //   variant: Variant_Lenses | Variant_ReadyGlasses;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
