import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesResolver } from './employees.resolver';
import { PrismaService } from 'modules/service/database/prisma.service';

@Module({
  providers: [EmployeesService, EmployeesResolver, PrismaService],
})
export class EmployeesModule {}
