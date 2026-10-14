import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getEdgeSession, roleAllowed } from "@/lib/auth-middleware";
import type { Role } from "@/lib/auth";

const rules: { prefix: string; roles: Role[] }[] = [
  { prefix: "/admin", roles: ["ADMIN", "MANAGER"] },
  { prefix: "/warehouse", roles: ["WAREHOUSE", "ADMIN", "MANAGER"] },
  { prefix: "/account", roles: ["CUSTOMER", "ADMIN", "MANAGER", "SUPPORT"] },
  { prefix: "/rep", roles: ["SALES_REP", "ADMIN", "MANAGER"] },
];

function matchRule(pathname: string) {
  return rules.find((r) => pathname === r.prefix || pathname.startsWith(`${r.prefix}/`));
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const rule = matchRule(pathname);
  if (!rule) return NextResponse.next();

  const session = await getEdgeSession(request);
  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("next", pathname);

  if (!session) {
    return NextResponse.redirect(loginUrl);
  }
  if (!roleAllowed(session.role, rule.roles)) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/warehouse/:path*", "/account/:path*", "/rep/:path*"],
};
