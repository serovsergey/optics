import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Color {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
