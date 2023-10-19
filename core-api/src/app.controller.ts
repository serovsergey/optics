import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from './modules/service/config/config.module';
import { UploadConfig } from './config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    // return this.appService.getHello();
    const a = this.configService.get<UploadConfig>('upload');
    const b = this.configService.get('DATABASE_URL', { infer: true });
    console.log(a, b);
    return JSON.stringify(a);
  }
}
