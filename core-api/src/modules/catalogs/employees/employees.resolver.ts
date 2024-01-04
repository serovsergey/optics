import { Args, Query, Resolver } from '@nestjs/graphql';
import { EmployeesService } from './employees.service';
import { Inject, LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { ListCatalogOptionsPipe } from 'pipes/list-catalog-options';
import { Prisma } from '@prisma/client';
import { ListCatalogOptions } from 'types';
import { EmployeeResult } from './dto/employee-result';
import { extractChildrenCount } from 'utils';

@Resolver()
export class EmployeesResolver {
  constructor(
    private readonly employeesService: EmployeesService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Query(() => [EmployeeResult], { name: 'employees' })
  async getEmployees(
    @Args('parentId', { nullable: true })
    parentId: number,
    @Args(
      'options',
      new ListCatalogOptionsPipe<
        Prisma.EmployeeWhereInput,
        Prisma.EmployeeOrderByWithRelationInput
      >(),
    )
    options: ListCatalogOptions<
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
  async getEmployee(@Args('id') id: number): Promise<EmployeeResult | null> {
    const employee = await this.employeesService.findOne({ where: { id } });
    if (!employee) {
      this.logger.warn(`Employee with id ${id} not found`);
      return null;
    }
    return extractChildrenCount(employee);
  }
}
