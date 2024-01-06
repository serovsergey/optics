import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class RimParamsInput {
  @Field(() => Int, { nullable: true })
  bridge?: number;

  @Field(() => Int, { nullable: true })
  temple?: number;

  @Field(() => Int, { nullable: true })
  width?: number;

  @Field(() => Int, { nullable: true })
  height?: number;

  @Field(() => Int, { nullable: true })
  shapeId?: number;
}
