import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Employee {
  @Field()
  id: number;

  @Field({ nullable: true })
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
