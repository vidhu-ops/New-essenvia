/**
 * Vercel build hook: apply schema + seed catalog/staff when env flags are set.
 */
import { execSync } from "node:child_process";
import { PrismaClient } from "@prisma/client";

async function main() {
  const databaseUrl = process.env.DATABASE_URL?.trim();
  if (!databaseUrl) {
    console.log("vercel-deploy-db: skip — DATABASE_URL not set (marketing pages only)");
    return;
  }

  execSync("npx prisma db push --accept-data-loss", { stdio: "inherit" });

  const prisma = new PrismaClient();
  try {
    const skuCount = await prisma.productSku.count();
    const runSeed = process.env.RUN_DB_SEED === "1" || process.env.RUN_DB_SEED === "true";

    if (skuCount === 0 && runSeed) {
      console.log("vercel-deploy-db: seeding catalog…");
      execSync("npm run db:seed", { stdio: "inherit", env: process.env });
    } else if (skuCount === 0) {
      console.warn(
        "vercel-deploy-db: catalog empty — set RUN_DB_SEED=1 on Vercel to seed SKUs/packages on deploy",
      );
    } else {
      console.log(`vercel-deploy-db: catalog ready (${skuCount} SKUs)`);
    }

    const staffPassword = process.env.SEED_STAFF_PASSWORD?.trim();
    if (staffPassword && staffPassword.length >= 12) {
      console.log("vercel-deploy-db: upserting staff logins…");
      execSync("npm run db:staff", { stdio: "inherit", env: process.env });
    } else {
      console.warn(
        "vercel-deploy-db: set SEED_STAFF_PASSWORD (min 12 chars) to enable admin/warehouse/rep/delivery preview logins",
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