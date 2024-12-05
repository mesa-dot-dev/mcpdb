import { sql } from "drizzle-orm";
import { char, timestamp as rawTs } from "drizzle-orm/pg-core";
import { z } from "zod";
import { ulid } from "ulid";

const prefixes = {
  organization: "org",
  user: "usr",
  installation: "ins",
  repository: "rep",
} as const;

export function createID(prefix: keyof typeof prefixes): string {
  return [prefixes[prefix], ulid()].join("_");
}

export const ulidCol = (name: string) => char(name, { length: 26 + 4 });

export const id = {
  get id() {
    return ulidCol("id").primaryKey();
  },
};
