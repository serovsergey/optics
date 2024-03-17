import { Field, ObjectType } from '@nestjs/graphql';
import { Diopter } from 'modules/lists/diopters/models/diopter.model';

@ObjectType()
export class VariantReadyGlasses {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field(() => Diopter, { nullable: true })
  sph?: Diopter;

  @Field({ nullable: true })
  pd?: number;

  @Field({ nullable: true })
  tone?: string;
}
