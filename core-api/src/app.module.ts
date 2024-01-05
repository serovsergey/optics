import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceModule } from './modules/service/service.module';
import { HealthModule } from './modules/health/health.module';
import { ConstantsModule } from './modules/constants/constants.module';
import { EmployeesModule } from './modules/catalogs/employees/employees.module';
import { ProductsModule } from './modules/catalogs/products/products.module';
import { ColorsModule } from './modules/catalogs/colors/colors.module';
import { RimShapesResolver } from './modules/catalogs/rim-shapes/rim-shapes.resolver';
import { RimShapesService } from './modules/catalogs/rim-shapes/rim-shapes.service';
import { RimShapesModule } from './modules/catalogs/rim-shapes/rim-shapes.module';

@Module({
  imports: [
    HealthModule,
    ConstantsModule,
    ServiceModule,
    EmployeesModule,
    ProductsModule,
    ColorsModule,
    RimShapesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
