import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class AppearanceInput {
  @Field(() => Int, { nullable: true })
  colorId?: number;

  @Field(() => Int, { nullable: true })
  weight?: number;
}
