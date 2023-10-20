import { Global, Module } from '@nestjs/common';
import {
  ConfigModule as NestConfigModule,
  ConfigService as NestConfigService,
} from '@nestjs/config';
import { configLoaders } from 'config';
import { EnvironmentVariables } from 'types';
import { envValidationSchema } from 'validation';

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
