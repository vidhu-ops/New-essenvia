/**
 * Vercel build hook (plain Node — no tsx). Applies schema + optional seed/staff.
 */
import { execSync } from "node:child_process";
import { PrismaClient } from "@prisma/client";

async function main() {
  const databaseUrl = process.env.DATABASE_URL?.trim();
  if (!databaseUrl) {
    console.log("vercel-deploy-db: skip — DATABASE_URL not set (marketing pages only)");
    return;
  }

  if (databaseUrl.startsWith("file:")) {
    console.warn(
      "vercel-deploy-db: SQLite file URLs do not work on Vercel. Use Postgres DATABASE_URL — see docs/PREVIEW-CONSOLES.md",
    );
    if (process.env.REQUIRE_DATABASE_ON_DEPLOY === "1") {
      process.exit(1);
    }
    return;
  }

  try {
    execSync("npx prisma db push --accept-data-loss", { stdio: "inherit" });
  } catch (e) {
    console.error("vercel-deploy-db: prisma db push failed", e);
    if (process.env.REQUIRE_DATABASE_ON_DEPLOY === "1") {
      process.exit(1);
    }
    return;
  }

  const prisma = new PrismaClient();
  try {
    const skuCount = await prisma.productSku.count();
    const runSeed = process.env.RUN_DB_SEED === "1" || process.env.RUN_DB_SEED === "true";

    if (skuCount === 0 && runSeed) {
      console.log("vercel-deploy-db: seeding catalog…");
      execSync("npx prisma db seed", { stdio: "inherit", env: process.env });
    } else if (skuCount === 0) {
      console.warn("vercel-deploy-db: catalog empty — set RUN_DB_SEED=1 to seed on deploy");
    }

    const staffPassword = process.env.SEED_STAFF_PASSWORD?.trim();
    if (staffPassword && staffPassword.length >= 12) {
      console.log("vercel-deploy-db: upserting staff logins…");
      execSync("npx --yes tsx scripts/ensure-staff-users.ts", { stdio: "inherit", env: process.env });
    } else {
      console.warn(
        "vercel-deploy-db: set SEED_STAFF_PASSWORD (min 12 chars) for admin/warehouse/rep/delivery preview logins",
      );
    }
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});