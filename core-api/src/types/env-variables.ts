import { Environments } from '@constants';
import { Config } from 'src/config';

export type EnvironmentVariables = Config & {
  NODE_ENV: Environments;
  PORT: number;

  DATABASE_URL: string;
  TEST_DATABASE_URL: string;
  DATABASE_LOGGING: string;
  DATABASE_SSL: string;

  HASH_ID_SALT: string;
  HASH_ID_LENGTH: number;
};
