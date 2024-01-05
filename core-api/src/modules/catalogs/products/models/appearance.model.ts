import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Color } from 'modules/catalogs/colors/models/color.model';

@ObjectType()
export class Appearance {
  @Field(() => Int)
  productId: number;

  @Field({ nullable: true })
  color?: Color;

  @Field(() => Int, { nullable: true })
  weight?: number;
}
