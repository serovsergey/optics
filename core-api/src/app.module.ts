import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceModule } from './modules/service/service.module';
import { HealthModule } from './modules/health/health.module';
import { ConstantsModule } from './modules/constants/constants.module';
import { EmployeesModule } from './modules/employees/employees.module';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [
    HealthModule,
    ConstantsModule,
    ServiceModule,
    EmployeesModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
