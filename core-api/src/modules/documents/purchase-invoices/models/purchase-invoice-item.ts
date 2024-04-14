import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import {
  //   Nomenclature,
  PurchaseInvoiceItem as PurchaseInvoiceItemPrisma,
  //   Variant_Lenses,
  //   Variant_ReadyGlasses,
} from '@prisma/client';
import { Nomenclature } from 'modules/catalogs/nomenclatures/models/nomenclature.model';
import { VariantLens } from 'modules/variants/lenses/models/variant-lens.model';
import { VariantReadyGlasses } from 'modules/variants/ready-glasses/models/variant-ready-glasses.model';

@ObjectType()
export class PurchaseInvoiceItem {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  purchaseInvoiceId: number;

  @Field(() => Int)
  nomenclatureId: number;

  @Field(() => Int, { nullable: true })
  variantId: number;

  @Field(() => Float)
  quantity: PurchaseInvoiceItemPrisma['quantity'];

  @Field(() => Float)
  price: PurchaseInvoiceItemPrisma['price'];

  @Field(() => Nomenclature, { nullable: true })
  nomenclature: Nomenclature;

  @Field(() => [VariantLens, VariantReadyGlasses])
  variant: VariantLens | VariantReadyGlasses;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
