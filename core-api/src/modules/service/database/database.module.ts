import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { config } from './data-source';
// import { WinstonModule } from '../winston/winston.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      ...config,
    }),
    // WinstonModule,
  ],
})
export class DatabaseModule {}
