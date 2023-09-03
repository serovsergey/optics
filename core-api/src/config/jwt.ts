export const jwtConfig = () => ({
  jwt: { secret: process.env.JWT_SECRET, expiresIn: '30d' },
});

export type JwtConfig = ReturnType<typeof jwtConfig>['jwt'];
