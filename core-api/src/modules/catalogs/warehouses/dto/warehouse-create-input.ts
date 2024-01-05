import { Field, Int, InputType } from '@nestjs/graphql';

@InputType()
export class WarehouseCreateInput {
  @Field(() => Int, { nullable: true })
  parentId?: number;

  @Field()
  isFolder: boolean;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;
}
