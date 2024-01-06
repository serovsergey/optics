import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Nomenclature } from '../models/nomenclature.model';

@ObjectType()
export class NomenclatureResult extends Nomenclature {
  @Field(() => Int)
  childrenCount: number;
}
