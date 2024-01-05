import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Color {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}
