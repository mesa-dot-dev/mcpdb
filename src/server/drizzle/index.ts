import { config } from "dotenv";
import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { join } from "path";

config({ path: ".env" }); // or .env.local

const client = postgres(process.env.DATABASE_URL!);
export const db = drizzle({ client });

// const checkMigrations = async (db: ReturnType<typeof drizzle>) => {
//   try {
//     await migrate(db, {
//       migrationsFolder: join(process.cwd(), "src/server/drizzle/migrations"),
//     });
//     console.log("migrations up to date");
//   } catch (error) {
//     throw new Error(`Failed to run database migrations: ${error instanceof Error ? error.message : String(error)}`);
//   }
// };

// checkMigrations(db);
