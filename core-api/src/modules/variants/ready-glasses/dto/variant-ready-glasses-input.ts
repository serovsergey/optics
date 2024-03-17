import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class VariantReadyGlassesInput {
  @Field()
  name: string;

  @Field()
  sphId: number;

  @Field({ nullable: true })
  pd?: number;

  @Field({ nullable: true })
  tone?: string;
}
