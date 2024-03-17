import { Module } from '@nestjs/common';
import { EmployeesModule } from './employees/employees.module';
import { NomenclaturesModule } from './nomenclatures/nomenclatures.module';
import { PartnersModule } from './partners/partners.module';
import { WarehousesModule } from './warehouses/warehouses.module';

@Module({
  imports: [
    EmployeesModule,
    NomenclaturesModule,
    PartnersModule,
    WarehousesModule,
  ],
})
export class CatalogsModule {}
