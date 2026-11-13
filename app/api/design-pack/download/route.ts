import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

const ZIP_PATH = path.join(
  process.cwd(),
  "storage",
  "design-pack",
  "Essentra-IIDATECH-Complete-Design-Pack.zip",
);

export async function GET(req: Request) {
  const type = new URL(req.url).searchParams.get("type");

  if (type === "html") {
    return NextResponse.redirect(
      new URL("/Essentra-IIDATECH-Complete-Design-Pack-standalone.html", req.url),
    );
  }

  if (type !== "zip" && type !== null) {
    return NextResponse.json({ error: "Invalid type" }, { status: 400 });
  }

  try {
    const body = await readFile(ZIP_PATH);
    return new NextResponse(body, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": 'attachment; filename="Essentra-IIDATECH-Complete-Design-Pack.zip"',
        "Cache-Control": "private, no-store",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "File not found. Run: npm run design-pack:export" },
      { status: 404 },
    );
  }
}
