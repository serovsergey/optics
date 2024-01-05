import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ColorCreateInput {
  @Field()
  name: string;
}
