import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class LensParamsInput {
  @Field({ nullable: true })
  index?: number;

  @Field(() => Int, { nullable: true })
  diameter?: number;
}
