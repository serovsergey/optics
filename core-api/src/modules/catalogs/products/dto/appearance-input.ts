import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AppearanceInput {
  @Field({ nullable: true })
  colorId?: number;

  @Field({ nullable: true })
  weight?: number;
}
