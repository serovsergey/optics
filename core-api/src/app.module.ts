import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceModule } from './modules/service/service.module';
import { HealthModule } from './modules/health/health.module';
import { ConstantsModule } from './modules/constants/constants.module';
import { EmployeesModule } from './modules/catalogs/employees/employees.module';
import { ProductsModule } from './modules/catalogs/products/products.module';
import { ColorsModule } from './modules/catalogs/colors/colors.module';
import { RimShapesModule } from './modules/catalogs/rim-shapes/rim-shapes.module';
import { PartnersModule } from 'modules/catalogs/partners/partners.module';
import { WarehousesModule } from './modules/catalogs/warehouses/warehouses.module';

@Module({
  imports: [
    HealthModule,
    ConstantsModule,
    ServiceModule,
    EmployeesModule,
    PartnersModule,
    ProductsModule,
    ColorsModule,
    RimShapesModule,
    WarehousesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
