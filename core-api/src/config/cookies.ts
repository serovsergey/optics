export const cookiesConfig = () => ({
  cookies: {
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    expiresIn: 24 * 60 * 60 * 1000, // 1 day
  },
});

export type CookiesConfig = ReturnType<typeof cookiesConfig>['cookies'];
