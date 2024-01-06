import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ListItem {
  @Field(() => Int)
  id: number;

  @Field()
  value: string;
}
