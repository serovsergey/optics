import { Field, ObjectType } from '@nestjs/graphql';
import { Employee } from 'modules/catalogs/employees/models/employee.model';
import { AccountantHistory } from './accountant-history';

@ObjectType()
export class Accountant {
  @Field({ nullable: true })
  date?: Date;

  @Field(() => Employee, { nullable: true })
  value?: Employee;

  @Field(() => [AccountantHistory], { nullable: true })
  history?: AccountantHistory[];
}
