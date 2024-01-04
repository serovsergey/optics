import { Field, ObjectType } from '@nestjs/graphql';
import { Color } from './color.model';

@ObjectType()
export class Appearance {
  @Field()
  productId: number;

  @Field({ nullable: true })
  color?: Color;

  @Field({ nullable: true })
  weight?: number;
}
