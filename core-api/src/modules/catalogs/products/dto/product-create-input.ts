import { Field, InputType, Int } from '@nestjs/graphql';
import { AppearanceInput } from './appearance-input';
import { RimParamsInput } from './rim-params-input';
import { LensParamsInput } from './lens-params-input';

@InputType()
export class ProductCreateInput {
  @Field(() => Int)
  parentId: number;

  @Field()
  isFolder: boolean;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string | null;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  appearance?: AppearanceInput;

  @Field({ nullable: true })
  rimParams?: RimParamsInput;

  @Field({ nullable: true })
  lensParams?: LensParamsInput;
}
