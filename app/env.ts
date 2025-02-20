import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  emptyStringAsUndefined: true,

  clientPrefix: "VITE_PUBLIC_",

  client: {},

  shared: {
    NODE_ENV: z.enum(["development", "production"]),
    BASE_URL: z
      .string({ required_error: "BASE_URL is required" })
      .min(1, "BASE_URL is required"),
  },

  server: {
    GOOGLE_GEMINI_API_KEY: z
      .string({
        required_error: "GOOGLE_GEMINI_API_KEY is required",
      })
      .min(1, "GOOGLE_GEMINI_API_KEY is required"),
    YOUTUBE_API_KEY: z
      .string({
        required_error: "YOUTUBE_API_KEY is required",
      })
      .min(1, "YOUTUBE_API_KEY is required"),
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    BASE_URL: process.env.BASE_URL,
    GOOGLE_GEMINI_API_KEY: process.env.GOOGLE_GEMINI_API_KEY,
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
  },
});
