import { Field, ObjectType } from '@nestjs/graphql';
import { Accountant } from '../dto/accountant';
import { CompanyName } from '../dto/company-name';

@ObjectType()
export class Constants {
  @Field({ nullable: true })
  companyName?: CompanyName;

  @Field({ nullable: true })
  accountant?: Accountant;
}
