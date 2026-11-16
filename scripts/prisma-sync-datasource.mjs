#!/usr/bin/env node
/**
 * Align Prisma provider with DATABASE_URL (sqlite locally, postgresql on Vercel Postgres / Neon).
 * Runs on Vercel builds and when RUN_PRISMA_SYNC=1.
 */
import fs from "node:fs";
import path from "node:path";

const url = process.env.DATABASE_URL?.trim() ?? "";
const shouldRun = process.env.VERCEL === "1" || process.env.RUN_PRISMA_SYNC === "1";
if (!shouldRun) {
  console.log("prisma-sync-datasource: skipped (not on Vercel)");
  process.exit(0);
}

if (!url) {
  console.log("prisma-sync-datasource: no DATABASE_URL, keeping schema provider");
  process.exit(0);
}

const provider = url.startsWith("postgres") ? "postgresql" : "sqlite";
const schemaPath = path.join(process.cwd(), "prisma", "schema.prisma");
let schema = fs.readFileSync(schemaPath, "utf8");
const next = `provider = "${provider}"`;
if (schema.includes(next)) {
  console.log(`prisma-sync-datasource: already ${provider}`);
  process.exit(0);
}

schema = schema.replace(/provider = "(sqlite|postgresql)"/, next);
fs.writeFileSync(schemaPath, schema);
console.log(`prisma-sync-datasource: set provider → ${provider}`);