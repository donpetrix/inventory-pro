import { StackClientApp } from "@hexclave/next";

export const stackClientApp = new StackClientApp({
  tokenStore: "nextjs-cookie",

  urls: {
    default: {
      type: "hosted",

      signIn: "/sign-in",
      signUp: "/sign-up",

      afterSignIn: "/dashboard",
      afterSignUp: "/dashboard",
      afterSignOut: "/sign-in",

      home: "/dashboard",
    },
  },
});
