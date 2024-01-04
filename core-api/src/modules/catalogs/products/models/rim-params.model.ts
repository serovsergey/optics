import { Field, ObjectType } from '@nestjs/graphql';
import { FrameShape } from './frame-shape.model';

@ObjectType()
export class RimParams {
  @Field()
  productId: number;

  @Field({ nullable: true })
  bridge?: number;

  @Field({ nullable: true })
  temple?: number;

  @Field({ nullable: true })
  frameWidth?: number;

  @Field({ nullable: true })
  frameHeight?: number;

  @Field({ nullable: true })
  frameShape?: FrameShape;
}
