import {Options} from "@mikro-orm/core";

const config: Options = {
  type: "postgresql",
  clientUrl: process.env.POSTGRES_URL,
  entities: ["dist/**/*.entity.js"],
  entitiesTs: ["src/**/*.entity.ts"],
  debug: true,
};

export default config;
