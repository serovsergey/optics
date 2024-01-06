import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Color } from 'modules/lists/colors/models/color.model';

@ObjectType()
export class Appearance {
  @Field(() => Int)
  nomenclatureId: number;

  @Field({ nullable: true })
  color?: Color;

  @Field(() => Int, { nullable: true })
  weight?: number;
}
