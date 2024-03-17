import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class VariantLensInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  cylId?: number;

  @Field({ nullable: true })
  sphId?: number;

  @Field({ nullable: true })
  diameter: number;

  @Field({ nullable: true })
  tone?: string;
}
