import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LensParams {
  @Field()
  productId: number;

  @Field({ nullable: true })
  index?: number;

  @Field({ nullable: true })
  diameter?: number;
}
