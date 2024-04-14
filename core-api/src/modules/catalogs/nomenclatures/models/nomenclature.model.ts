import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Appearance } from './appearance.model';
import { LensParams } from './lens-params.model';
import { RimParams } from './rim-params.model';
import { NomenclatureType } from './nomenclature-type.model';
import { VariantLens } from 'modules/variants/lenses/models/variant-lens.model';
import { VariantReadyGlasses } from 'modules/variants/ready-glasses/models/variant-ready-glasses.model';

@ObjectType()
export class Nomenclature {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  parentId?: number;

  @Field()
  isFolder: boolean;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Int)
  typeId: number;

  @Field(() => NomenclatureType)
  type: NomenclatureType;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field({ nullable: true })
  appearance?: Appearance;

  @Field({ nullable: true })
  lensParams?: LensParams;

  @Field({ nullable: true })
  rimParams?: RimParams;

  // @Field(() => [[VariantLens], [VariantReadyGlasses]])
  // variants: VariantLens[] | VariantReadyGlasses[];
}
