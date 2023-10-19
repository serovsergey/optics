import { Environments } from '@constants';
import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  ENVIRONMENT: Joi.string()
    .valid(...Object.values(Environments))
    .default(Environments.PRODUCTION),
  PORT: Joi.number().default(3000),
  DATABASE_URL: Joi.string()
    .uri({ scheme: [/postgres/] })
    .required(),
  TEST_DATABASE_URL: Joi.string()
    .uri({ scheme: [/postgres/] })
    .default('postgres://root:root@postgres:5432/core_api_test'),

  DATABASE_LOGGING: Joi.boolean().default(false),
  DATABASE_SSL: Joi.boolean().default(false),

  GOOGLE_CLIENT_ID: Joi.string().required(),
  GOOGLE_CLIENT_SECRET: Joi.string().required(),

  MAX_UPLOAD_FILE_SIZE: Joi.number().default(1000000),
  MAX_UPLOAD_FILES: Joi.number().default(10),
  REDIS_URL: Joi.string().uri({ scheme: [/redis/] }),

  HASH_ID_SALT: Joi.string().required(),
  HASH_ID_LENGTH: Joi.number().default(6),
  JWT_SECRET: Joi.string().required(),
});
