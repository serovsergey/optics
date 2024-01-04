import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LensParamsInput {
  @Field({ nullable: true })
  index?: number;

  @Field({ nullable: true })
  diameter?: number;
}
