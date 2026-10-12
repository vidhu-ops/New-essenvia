import { NextResponse } from "next/server";
import { createSession, login, roleHome } from "@/lib/auth";

export async function POST(req: Request) {
  const { email, password } = (await req.json()) as { email: string; password: string };
  const user = await login(email, password);
  if (!user) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  await createSession(user);
  return NextResponse.json({ ok: true, redirect: roleHome(user.role) });
}
