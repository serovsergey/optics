import { Module } from '@nestjs/common';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import Redis, { RedisOptions } from 'ioredis';

import { parseConnectionString } from 'utils';
import { ConfigService } from '../config/config.module';

export const PUB_SUB_MODULE_PROVIDER = 'RedisProvider';
export const PROVIDER_ALIAS = 'Redis';

const RedisPubSubProvider = {
  provide: PUB_SUB_MODULE_PROVIDER,
  useFactory: (configService: ConfigService) => {
    const connectionString = configService.get<string>('REDIS_URL');
    const { host, port, password } = parseConnectionString(connectionString);
    const options: RedisOptions = {
      host,
      port,
      password,
      retryStrategy: (times) => {
        // reconnect after 50ms delay, up to 10,000ms.
        // backs off by `times`. So 50ms, 100ms, 150ms, etc
        // ioredis will retry until we return a negative number or null.
        return Math.min(times * 50, 10000);
      },
    };

    return new RedisPubSub({
      publisher: new Redis(options),
      subscriber: new Redis(options),
    });
  },
  inject: [ConfigService],
};

@Module({
  imports: [],
  providers: [RedisPubSubProvider],
  exports: [RedisPubSubProvider],
})
export class PubSubModule {}
