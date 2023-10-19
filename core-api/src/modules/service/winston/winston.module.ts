import { Module } from '@nestjs/common';
import { WinstonModule as NestWinstonModule, utilities } from 'nest-winston';
import * as winston from 'winston';
// import { ConfigService } from '../config/config.module';

@Module({
  imports: [
    NestWinstonModule.forRootAsync({
      useFactory: () => ({
        transports: [
          new winston.transports.Console({
            format: winston.format.combine(
              winston.format.timestamp(),
              utilities.format.nestLike(),
            ),
          }),
        ],
      }),
      // inject: [ConfigService],
    }),
  ],
})
export class WinstonModule {}
