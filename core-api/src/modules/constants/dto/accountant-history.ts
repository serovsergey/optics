import { Field, ObjectType } from '@nestjs/graphql';
import { Employee } from 'modules/catalogs/employees/models/employee.model';

@ObjectType()
export class AccountantHistory {
  @Field({ nullable: true })
  date?: Date;

  @Field({ nullable: true })
  value?: Employee;
}
