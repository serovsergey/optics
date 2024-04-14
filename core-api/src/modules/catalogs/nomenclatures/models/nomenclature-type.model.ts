import { Field, Int, ObjectType } from '@nestjs/graphql';
import { $Enums } from '@prisma/client';

@ObjectType()
export class NomenclatureType {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  variantsTable: $Enums.NomenclatureVariant;

  @Field({ defaultValue: true })
  totals: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
