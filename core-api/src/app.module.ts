import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './modules/config/config.module';

@Module({
  imports: [ConfigModule],
  controllers: [AppController],
  providers: [AppService, ConfigModule],
})
export class AppModule {}
