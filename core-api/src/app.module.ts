import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceModule } from './modules/service/service.module';
import { HealthModule } from './modules/health/health.module';
import { ConstantsModule } from './modules/constants/constants.module';
import { EmployeesModule } from './modules/catalogs/employees/employees.module';
import { NomenclaturesModule } from './modules/catalogs/nomenclatures/nomenclatures.module';
import { ColorsModule } from './modules/lists/colors/colors.module';
import { RimShapesModule } from './modules/lists/rim-shapes/rim-shapes.module';
import { PartnersModule } from 'modules/catalogs/partners/partners.module';
import { WarehousesModule } from './modules/catalogs/warehouses/warehouses.module';
import { PurchaseInvoicesModule } from './modules/documents/purchase-invoices/purchase-invoices.module';
import { SalesInvoicesModule } from './modules/documents/sales-invoices/sales-invoices.module';
import { DioptersModule } from './modules/lists/diopters/diopters.module';

@Module({
  imports: [
    HealthModule,
    ConstantsModule,
    ServiceModule,
    EmployeesModule,
    PartnersModule,
    NomenclaturesModule,
    ColorsModule,
    RimShapesModule,
    WarehousesModule,
    PurchaseInvoicesModule,
    SalesInvoicesModule,
    DioptersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
