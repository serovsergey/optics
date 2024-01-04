import { Field, ObjectType } from '@nestjs/graphql';
import { Product } from '../models/product.model';

@ObjectType()
export class ProductResult extends Product {
  @Field()
  childrenCount: number;
}
