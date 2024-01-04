import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Color {
  @Field()
  id: number;

  @Field()
  name: string;
}
