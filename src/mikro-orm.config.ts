import {Options, UnderscoreNamingStrategy} from "@mikro-orm/core";
import {SqlHighlighter} from "@mikro-orm/sql-highlighter";
import {TsMorphMetadataProvider} from "@mikro-orm/reflection";

const config: Options = {
  type: "postgresql",
  clientUrl: process.env.POSTGRES_URL,
  entities: ["dist/**/*.entity.js"],
  entitiesTs: ["src/**/*.entity.ts"],
  baseDir: process.cwd(),
  namingStrategy: UnderscoreNamingStrategy, // EntityCaseNamingStrategy,
  migrations: {
    tableName: "mikro_orm_migrations", // name of database table with log of executed transactions
    path: "./src/migrations", // path to the folder with migrations
    pattern: /^[\w-]+\d+\.ts$/, // regex pattern for the migration files
    transactional: true, // wrap each migration in a transaction
    disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent
    allOrNothing: true, // wrap all migrations in master transaction
    dropTables: true, // allow to disable table dropping
    safe: false, // allow to disable table and column dropping
    emit: "ts", // migration generation mode
    migrationsList: [],
  },

  debug: true,
  highlighter: new SqlHighlighter(),
  metadataProvider: TsMorphMetadataProvider,
};

export default config;
