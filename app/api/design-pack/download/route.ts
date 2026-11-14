import { NextResponse } from "next/server";

const ZIP_PUBLIC_PATH = "/downloads/Essentra-IIDATECH-Complete-Design-Pack.zip";

/** Redirect-only route — no filesystem reads (Vercel serverless bundle stays small). */
export async function GET(req: Request) {
  const type = new URL(req.url).searchParams.get("type");
  const base = new URL(req.url);

  if (type === "html" || type === null) {
    return NextResponse.redirect(new URL("/Essentra-IIDATECH-Complete-Design-Pack-standalone.html", base));
  }

  if (type === "zip") {
    return NextResponse.redirect(new URL(ZIP_PUBLIC_PATH, base));
  }

  return NextResponse.json({ error: "Invalid type" }, { status: 400 });
}