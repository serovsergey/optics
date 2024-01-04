import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RimParamsInput {
  @Field({ nullable: true })
  bridge?: number;

  @Field({ nullable: true })
  temple?: number;

  @Field({ nullable: true })
  frameWidth?: number;

  @Field({ nullable: true })
  frameHeight?: number;

  @Field({ nullable: true })
  frameShapeId?: number;
}
