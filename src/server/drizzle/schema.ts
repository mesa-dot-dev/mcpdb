import { sql } from "drizzle-orm";
import { SQL } from "drizzle-orm";
import { AnyPgColumn, bigint, integer, pgEnum, pgTable, primaryKey, text, uniqueIndex } from "drizzle-orm/pg-core";
import { id } from "./id";

export function lower(email: AnyPgColumn): SQL {
  return sql`lower(${email})`;
}

export const UserTable = pgTable(
  "users",
  {
    ...id,
    externalId: bigint({ mode: "number" }).notNull().unique(),
    username: text().notNull(),
    avatarUrl: text().notNull(),
    email: text().notNull(),
  },
  (table) => [
    uniqueIndex("usernameUniqueIndex").on(table.username),
    uniqueIndex("emailUniqueIndex").on(lower(table.email)),
  ]
);

export const InstallationTypeEnum = pgEnum("installation_type", ["User", "Organization"]);
export const InstallationTable = pgTable("installations", {
  ...id,
  externalId: bigint({ mode: "number" }).notNull().unique(),
  externalUrl: text().notNull(),
  type: InstallationTypeEnum("type").notNull(),

  userId: text().references(() => UserTable.id, { onDelete: "cascade" }),
  orgId: text().references(() => OrganizationTable.id, { onDelete: "cascade" }),
});

export const OrganizationTable = pgTable("organizations", {
  ...id,
  name: text().notNull(),
  avatarUrl: text().notNull(),
});

export const MembershipRole = pgEnum("org_member_role", ["Member", "Admin"]);
export const OrgMembershipTable = pgTable(
  "organization_membership",
  {
    memberId: text("user_id")
      .notNull()
      .references(() => UserTable.id, { onDelete: "cascade" }),
    orgId: text("org_id")
      .notNull()
      .references(() => OrganizationTable.id, { onDelete: "cascade" }),
    role: MembershipRole("role").notNull().default("Member"),
  },
  (t) => [primaryKey({ columns: [t.memberId, t.orgId] })]
);
