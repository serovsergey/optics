import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LensParams {
  @Field(() => Int)
  nomenclatureId: number;

  @Field({ nullable: true })
  index?: number;

  @Field(() => Int, { nullable: true })
  diameter?: number;
}
