import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RimShape {
  @Field(() => Int)
  id: number;

  @Field()
  value: string;
}
