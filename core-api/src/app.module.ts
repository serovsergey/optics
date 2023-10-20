import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceModule } from './modules/service/service.module';
import { HealthModule } from './modules/health/health.module';
import { ConstantsModule } from './modules/constants/constants.module';

@Module({
  imports: [ServiceModule, HealthModule, ConstantsModule],
  controllers: [AppController],
  providers: [AppService, ServiceModule],
})
export class AppModule {}
