import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EmployeesService } from './employees.service';
import { Inject, LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Prisma } from '@prisma/client';
import { EmployeeResult } from './dto/employee-result';
import { extractChildrenCount } from 'utils';
import { ListOptionsPipe } from 'pipes';
import { ListOptions } from 'types';
import { Employee } from './models/employee.model';
import { EmployeeCreateInput } from './dto/employee-create-input';

@Resolver()
export class EmployeesResolver {
  constructor(
    private readonly employeesService: EmployeesService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Query(() => [EmployeeResult], { name: 'employees' })
  async getEmployees(
    @Args('parentId', { nullable: true, type: () => Int })
    parentId: number,
    @Args(
      { name: 'options', nullable: true },
      new ListOptionsPipe<
        Prisma.EmployeeWhereInput,
        Prisma.EmployeeOrderByWithRelationInput
      >(),
    )
    options: ListOptions<
      Prisma.EmployeeWhereInput,
      Prisma.EmployeeOrderByWithRelationInput
    >,
  ): Promise<EmployeeResult[]> {
    const employees = await this.employeesService.findMany({
      ...options,
      where: { ...options.where, parentId },
    });
    return employees.map(extractChildrenCount);
  }

  @Query(() => EmployeeResult, { name: 'employee', nullable: true })
  async getEmployee(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<EmployeeResult | null> {
    const employee = await this.employeesService.findOne({ where: { id } });
    if (!employee) {
      this.logger.warn(`Employee with id ${id} not found`);
      return null;
    }
    return extractChildrenCount(employee);
  }

  @Mutation(() => Employee, { name: 'createEmployee' })
  createEmployee(@Args('data') data: EmployeeCreateInput): Promise<Employee> {
    return this.employeesService.create(data);
  }

  @Mutation(() => Employee, { name: 'updateEmployee' })
  updateEmployee(
    @Args({ name: 'id', type: () => Int }) id: number,
    @Args('data') data: EmployeeCreateInput,
  ): Promise<Employee> {
    return this.employeesService.update({ data, where: { id } });
  }

  @Mutation(() => Employee, { name: 'deleteEmployee' })
  deleteEmployee(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<Employee> {
    return this.employeesService.delete({ where: { id } });
  }

  @Mutation(() => Int, { name: 'deleteEmployees' })
  async deleteEmployees(
    @Args({ name: 'ids', type: () => [Int] }) ids: number[],
  ): Promise<number> {
    const deleted = await this.employeesService.deleteMany({
      where: { id: { in: ids } },
    });

    return deleted.count;
  }
}
