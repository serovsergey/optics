import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceModule } from './modules/service/service.module';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [ServiceModule, HealthModule],
  controllers: [AppController],
  providers: [AppService, ServiceModule],
})
export class AppModule {}
