import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RimShapeCreateInput {
  @Field()
  name: string;
}
