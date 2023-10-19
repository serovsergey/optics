import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { config } from 'src/config/database';
// import { WinstonModule } from '../winston/winston.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      ...config,
    }),
    // TODO: consider the need use this import
    // WinstonModule,
  ],
})
export class DatabaseModule {}
