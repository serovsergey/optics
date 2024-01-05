import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Appearance } from './appearance.model';
import { LensParams } from './lens-params.model';
import { RimParams } from './rim-params.model';

@ObjectType()
export class Product {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  parentId?: number;

  @Field()
  isFolder: boolean;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field({ nullable: true })
  appearance?: Appearance;

  @Field({ nullable: true })
  lensParams?: LensParams;

  @Field({ nullable: true })
  rimParams?: RimParams;
}
