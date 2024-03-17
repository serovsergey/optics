import { Field, ObjectType } from '@nestjs/graphql';
import { Diopter } from 'modules/lists/diopters/models/diopter.model';

@ObjectType()
export class VariantLens {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field(() => Diopter, { nullable: true })
  sph?: Diopter;

  @Field(() => Diopter, { nullable: true })
  cyl?: Diopter;

  @Field({ nullable: true })
  diameter: number;

  @Field({ nullable: true })
  tone?: string;
}
