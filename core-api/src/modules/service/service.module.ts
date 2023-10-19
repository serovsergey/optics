import { Module } from '@nestjs/common';

import { Environments } from '@constants';
import { ConfigModule } from './config/config.module';
import { GraphQlModule } from './graphql/graphql.module';
import { WinstonModule } from './winston/winston.module';
import { DatabaseModule } from './database/database.module';

const isTestEnvironment = process.env.NODE_ENV === Environments.TEST;

const baseModules = [ConfigModule, DatabaseModule, WinstonModule];
const prodModules = baseModules.concat([GraphQlModule]);

@Module({
  imports: isTestEnvironment ? baseModules : prodModules,
})
export class ServiceModule {}
