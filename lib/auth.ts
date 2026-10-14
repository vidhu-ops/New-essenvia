import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
export type Role = "CUSTOMER" | "SALES_REP" | "WAREHOUSE" | "SUPPORT" | "MANAGER" | "ADMIN";
import { prisma } from "@/lib/prisma";

const COOKIE = "essentra_session";
const secret = () => new TextEncoder().encode(process.env.AUTH_SECRET ?? "essentra-dev-secret-change-in-prod");

export type SessionUser = { id: string; email: string; role: Role; name: string };

export async function login(email: string, password: string): Promise<SessionUser | null> {
  const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) return null;
  return sessionFromUser(user);
}

export function sessionFromUser(user: { id: string; email: string; role: string; name: string }): SessionUser {
  return { id: user.id, email: user.email, role: user.role as Role, name: user.name };
}

export async function createSession(user: SessionUser) {
  const token = await new SignJWT({ sub: user.id, email: user.email, role: user.role, name: user.name })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(secret());
  const jar = await cookies();
  jar.set(COOKIE, token, { httpOnly: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 7 });
}

export async function destroySession() {
  const jar = await cookies();
  jar.delete(COOKIE);
}

export async function getSession(): Promise<SessionUser | null> {
  const jar = await cookies();
  const token = jar.get(COOKIE)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secret());
    return {
      id: payload.sub as string,
      email: payload.email as string,
      role: payload.role as Role,
      name: payload.name as string,
    };
  } catch {
    return null;
  }
}

export function roleHome(role: Role): string {
  switch (role) {
    case "ADMIN":
    case "MANAGER":
      return "/admin";
    case "SALES_REP":
      return "/rep";
    case "WAREHOUSE":
      return "/warehouse";
    case "CUSTOMER":
      return "/account";
    default:
      return "/";
  }
}
