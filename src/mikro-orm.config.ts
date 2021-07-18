import {EntityCaseNamingStrategy, Options} from "@mikro-orm/core";
import {SqlHighlighter} from "@mikro-orm/sql-highlighter";
import {TsMorphMetadataProvider} from "@mikro-orm/reflection";

const config: Options = {
  type: "postgresql",
  clientUrl: process.env.POSTGRES_URL,
  entities: ["dist/**/*.entity.js"],
  entitiesTs: ["src/**/*.entity.ts"],
  baseDir: process.cwd(),
  namingStrategy: EntityCaseNamingStrategy,
  migrations: {},
  debug: true,
  highlighter: new SqlHighlighter(),
  metadataProvider: TsMorphMetadataProvider,
};

export default config;
