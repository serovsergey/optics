import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CompanyName {
  @Field({ nullable: true })
  date?: Date;

  @Field(() => String, { nullable: true })
  value?: string;
}
