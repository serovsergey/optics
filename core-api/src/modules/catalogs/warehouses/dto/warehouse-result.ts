import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Warehouse } from '../models/warehouse.model';

@ObjectType()
export class WarehouseResult extends Warehouse {
  @Field(() => Int)
  childrenCount: number;
}
