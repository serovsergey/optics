import { Field, Int, ObjectType } from '@nestjs/graphql';
import { RimShape } from 'modules/catalogs/rim-shapes/models/rim-shape.model';

@ObjectType()
export class RimParams {
  @Field()
  nomenclatureId: number;

  @Field(() => Int, { nullable: true })
  bridge?: number;

  @Field(() => Int, { nullable: true })
  temple?: number;

  @Field(() => Int, { nullable: true })
  width?: number;

  @Field(() => Int, { nullable: true })
  height?: number;

  @Field({ nullable: true })
  shape?: RimShape;
}
