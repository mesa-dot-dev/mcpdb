CREATE TYPE "public"."installation_type" AS ENUM('User', 'Organization');--> statement-breakpoint
CREATE TYPE "public"."org_member_role" AS ENUM('Member', 'Admin');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "installations" (
	"id" char(30) PRIMARY KEY NOT NULL,
	"externalId" bigint NOT NULL,
	"externalUrl" text NOT NULL,
	"type" "installation_type" NOT NULL,
	"userId" text,
	"orgId" text,
	CONSTRAINT "installations_externalId_unique" UNIQUE("externalId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "organization_membership" (
	"user_id" text NOT NULL,
	"org_id" text NOT NULL,
	"role" "org_member_role" DEFAULT 'Member' NOT NULL,
	CONSTRAINT "organization_membership_user_id_org_id_pk" PRIMARY KEY("user_id","org_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "organizations" (
	"id" char(30) PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"avatarUrl" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" char(30) PRIMARY KEY NOT NULL,
	"externalId" bigint NOT NULL,
	"username" text NOT NULL,
	"avatarUrl" text NOT NULL,
	"email" text NOT NULL,
	CONSTRAINT "users_externalId_unique" UNIQUE("externalId")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "installations" ADD CONSTRAINT "installations_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "installations" ADD CONSTRAINT "installations_orgId_organizations_id_fk" FOREIGN KEY ("orgId") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "organization_membership" ADD CONSTRAINT "organization_membership_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "organization_membership" ADD CONSTRAINT "organization_membership_org_id_organizations_id_fk" FOREIGN KEY ("org_id") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "usernameUniqueIndex" ON "users" USING btree ("username");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "emailUniqueIndex" ON "users" USING btree (lower("email"));