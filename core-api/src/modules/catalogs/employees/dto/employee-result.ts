import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Employee } from 'modules/catalogs/employees/models/employee.model';

@ObjectType()
export class EmployeeResult extends Employee {
  @Field(() => Int)
  childrenCount: number;
}
