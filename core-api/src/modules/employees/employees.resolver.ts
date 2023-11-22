import { Args, Query, Resolver } from '@nestjs/graphql';
import { Employee } from './models/employee.model';
import { EmployeesService } from './employees.service';
import { Inject, LoggerService, UsePipes } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { ListCatalogOptionsPipe } from 'pipes/list-catalog-options';
import { Prisma } from '@prisma/client';
import { ListCatalogOptions } from 'types';

@Resolver()
export class EmployeesResolver {
  constructor(
    private readonly employeesService: EmployeesService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Query(() => [Employee])
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
  ): Promise<Employee[]> {
    return this.employeesService.getEmployees(parentId, options);
  }
}
