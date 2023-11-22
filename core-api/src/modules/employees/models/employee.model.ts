import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Employee {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  isFolder: boolean;

  @Field({ nullable: true })
  parentId?: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
