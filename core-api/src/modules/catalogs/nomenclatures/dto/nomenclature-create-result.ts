import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AppearanceInput } from './appearance-input';
import { RimParamsInput } from './rim-params-input';
import { LensParamsInput } from './lens-params-input';

@ObjectType()
export class NomenclatureCreateResult {
  @Field(() => Int, { nullable: true })
  parentId: number;

  @Field()
  isFolder: boolean;

  @Field()
  name: string;

  @Field()
  typeId: number;

  @Field({ nullable: true })
  description?: string | null;

  @Field({ nullable: true })
  appearance?: AppearanceInput;

  @Field({ nullable: true })
  rimParams?: RimParamsInput;

  @Field({ nullable: true })
  lensParams?: LensParamsInput;
}
