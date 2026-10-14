import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

const FILES = {
  zip: {
    path: path.join(process.cwd(), "storage/design-pack/Essentra-IIDATECH-Complete-Design-Pack.zip"),
    name: "Essentra-IIDATECH-Complete-Design-Pack.zip",
    type: "application/zip",
  },
  html: {
    path: path.join(process.cwd(), "public/Essentra-IIDATECH-Complete-Design-Pack-standalone.html"),
    name: "Essentra-IIDATECH-Complete-Design-Pack.html",
    type: "text/html; charset=utf-8",
  },
} as const;

export async function GET(req: Request) {
  const type = new URL(req.url).searchParams.get("type");
  if (type !== "zip" && type !== "html") {
    return NextResponse.json({ error: "Invalid type" }, { status: 400 });
  }
  const file = FILES[type];
  try {
    const body = await readFile(file.path);
    return new NextResponse(body, {
      headers: {
        "Content-Type": file.type,
        "Content-Disposition": `attachment; filename="${file.name}"`,
        "Cache-Control": "private, no-store",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "File not found. Run: npm run design-pack:export" },
      { status: 404 }
    );
  }
}
