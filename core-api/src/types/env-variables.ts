import { Environments } from '@constants';
import { Config } from 'config';

export type EnvironmentVariables = Config & {
  ENVIRONMENT: Environments;
  PORT: number;

  DATABASE_URL: string;
  TEST_DATABASE_URL: string;
  DATABASE_LOGGING: string;
  DATABASE_SSL: string;

  REDIS_URL: string;

  HASH_ID_SALT: string;
  HASH_ID_LENGTH: number;
};
