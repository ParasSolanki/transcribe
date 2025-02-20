import { defineConfig } from "drizzle-kit";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("Environment variable `DATABASE_URL` is required");
}

export default defineConfig({
  verbose: true,
  breakpoints: true,
  out: "./drizzle/migrations",
  dialect: "postgresql",
  schema: "./drizzle/schema.ts",
  dbCredentials: { url: DATABASE_URL },
});
