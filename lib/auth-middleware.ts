import { jwtVerify } from "jose";
import type { NextRequest } from "next/server";
import type { Role } from "@/lib/auth";

const COOKIE = "essentra_session";

export type EdgeSession = { id: string; email: string; role: Role; name: string };

export async function getEdgeSession(request: NextRequest): Promise<EdgeSession | null> {
  const token = request.cookies.get(COOKIE)?.value;
  if (!token) return null;
  const secret = new TextEncoder().encode(process.env.AUTH_SECRET ?? "essentra-dev-secret-change-in-prod");
  try {
    const { payload } = await jwtVerify(token, secret);
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

export function roleAllowed(role: Role, allowed: Role[]): boolean {
  if (role === "ADMIN") return true;
  return allowed.includes(role);
}
