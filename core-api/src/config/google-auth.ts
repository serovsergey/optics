export const googleAuthConfig = () => ({
  googleAuth: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
});

export type GoogleAuthConfig = ReturnType<
  typeof googleAuthConfig
>['googleAuth'];
