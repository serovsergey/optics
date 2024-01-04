import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Appearance {
  @Field()
  productId: number;

  @Field({ nullable: true })
  color?: string;

  @Field({ nullable: true })
  weight?: number;
}
