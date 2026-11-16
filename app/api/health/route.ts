import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const ts = new Date().toISOString();
  try {
    await prisma.$queryRaw`SELECT 1`;
    const skuCount = await prisma.productSku.count();
    const userCount = await prisma.user.count();
    return NextResponse.json({
      ok: true,
      service: "essentra",
      ts,
      db: true,
      catalogSkus: skuCount,
      users: userCount,
      consoles: "/consoles",
    });
  } catch (e) {
    return NextResponse.json(
      {
        ok: false,
        service: "essentra",
        ts,
        db: false,
        error: String(e),
        consoles: "/consoles",
        hint: "Set DATABASE_URL (Postgres), AUTH_SECRET, RUN_DB_SEED=1, SEED_STAFF_PASSWORD on Vercel — see docs/PREVIEW-CONSOLES.md",
      },
      { status: 503 },
    );
  }
}
