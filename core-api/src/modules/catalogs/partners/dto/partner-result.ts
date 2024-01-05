import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Partner } from '../models/partner.model';

@ObjectType()
export class PartnerResult extends Partner {
  @Field(() => Int)
  childrenCount: number;
}
