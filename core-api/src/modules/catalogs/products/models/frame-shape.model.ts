import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FrameShape {
  @Field()
  id: number;

  @Field()
  name: string;
}
