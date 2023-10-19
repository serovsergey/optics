import { Global, Module } from '@nestjs/common';
import {
  ConfigModule as NestConfigModule,
  ConfigService as NestConfigService,
} from '@nestjs/config';
import { configLoaders } from 'src/config';
import { EnvironmentVariables } from 'src/types';
import { envValidationSchema } from 'src/validation';

export class ConfigService extends NestConfigService<
  EnvironmentVariables,
  true
> {}

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      cache: true,
      validationSchema: envValidationSchema,
      load: configLoaders,
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
