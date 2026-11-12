/**
 * Upsert staff logins without wiping catalog. Uses SEED_STAFF_PASSWORD (min 12 chars).
 */
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const STAFF: {
  email: string;
  role: string;
  name: string;
  phone?: string;
  repTerritory?: string;
}[] = [
  { email: "admin@essentra.ca", role: "ADMIN", name: "Admin Owner" },
  { email: "rep@essentra.ca", role: "SALES_REP", name: "Sam Rep", repTerritory: "Toronto 4" },
  { email: "warehouse@essentra.ca", role: "WAREHOUSE", name: "Warehouse Lead" },
  { email: "delivery@essentra.ca", role: "DELIVERY", name: "Delivery Driver", phone: "416-555-0199" },
];

async function main() {
  const password = process.env.SEED_STAFF_PASSWORD?.trim();
  if (!password || password.length < 12) {
    console.error("Set SEED_STAFF_PASSWORD (min 12 characters) before running ensure-staff.");
    process.exit(1);
  }
  const passwordHash = await bcrypt.hash(password, 10);
  for (const s of STAFF) {
    await prisma.user.upsert({
      where: { email: s.email },
      create: { ...s, passwordHash },
      update: { passwordHash, role: s.role, name: s.name, phone: s.phone, repTerritory: s.repTerritory },
    });
  }
  console.log("Staff users upserted (password from SEED_STAFF_PASSWORD).");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
