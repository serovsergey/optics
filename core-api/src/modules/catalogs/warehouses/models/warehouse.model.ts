import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Warehouse {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  parentId?: number;

  @Field()
  isFolder: boolean;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
