import { ConfigFactory } from '@nestjs/config';

import { CookiesConfig, cookiesConfig } from './cookies';
import { GoogleAuthConfig, googleAuthConfig } from './google-auth';
import { JwtConfig, jwtConfig } from './jwt';
import { UploadConfig, uploadConfig } from './upload';

export * from './cookies';
export * from './google-auth';
export * from './jwt';
export * from './upload';

export type Config = {
  cookies: CookiesConfig;
  googleAuth: GoogleAuthConfig;
  jwt: JwtConfig;
  upload: UploadConfig;
};

export const configLoaders: ConfigFactory[] = [
  cookiesConfig,
  googleAuthConfig,
  jwtConfig,
  uploadConfig,
];
