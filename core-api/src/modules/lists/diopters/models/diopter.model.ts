import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Diopter {
  @Field(() => Int)
  id: number;

  @Field()
  value: string;
}
