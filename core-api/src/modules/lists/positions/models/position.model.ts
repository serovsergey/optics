import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Position {
  @Field(() => Int)
  id: number;

  @Field()
  value: string;
}
