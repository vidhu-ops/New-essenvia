export type ConsoleApp = {
  id: string;
  title: string;
  description: string;
  href: string;
  loginHref: string;
  roles: string[];
  kind: "staff" | "customer" | "public";
};

/** All deployable surfaces in this repo (marketing + operational consoles). */
export const consoleApps: ConsoleApp[] = [
  {
    id: "marketing",
    title: "Public website",
    description: "Homepage, pricing, and how it works.",
    href: "/",
    loginHref: "/",
    roles: [],
    kind: "public",
  },
  {
    id: "build",
    title: "Build my box",
    description: "3-step household questionnaire and plan preview.",
    href: "/build/step-1",
    loginHref: "/build/step-1",
    roles: [],
    kind: "public",
  },
  {
    id: "admin",
    title: "Admin console",
    description: "KPIs, catalog, packages, customers, production, and delivery ops.",
    href: "/admin",
    loginHref: "/login?email=admin@essentra.ca&next=/admin",
    roles: ["ADMIN", "MANAGER"],
    kind: "staff",
  },
  {
    id: "warehouse",
    title: "Warehouse pick",
    description: "Order pick list and status updates.",
    href: "/warehouse",
    loginHref: "/login?email=warehouse@essentra.ca&next=/warehouse",
    roles: ["WAREHOUSE", "ADMIN", "MANAGER"],
    kind: "staff",
  },
  {
    id: "delivery",
    title: "Delivery driver",
    description: "Assigned runs, stages, and proof notes.",
    href: "/delivery",
    loginHref: "/login?email=delivery@essentra.ca&next=/delivery",
    roles: ["DELIVERY", "ADMIN", "MANAGER"],
    kind: "staff",
  },
  {
    id: "rep",
    title: "Sales rep",
    description: "Compare plans, customize boxes, and attributed signups.",
    href: "/rep",
    loginHref: "/login?email=rep@essentra.ca&next=/rep",
    roles: ["SALES_REP", "ADMIN", "MANAGER"],
    kind: "staff",
  },
  {
    id: "account",
    title: "Customer account",
    description: "Subscription, delivery address, and billing (after checkout or magic link).",
    href: "/account",
    loginHref: "/login?next=/account",
    roles: ["CUSTOMER"],
    kind: "customer",
  },
  {
    id: "wireframes",
    title: "Design wireframes",
    description: "Legacy static wireframe gallery for stakeholders.",
    href: "/wireframes",
    loginHref: "/wireframes",
    roles: [],
    kind: "public",
  },
];

export const staffPreviewAccounts = [
  { email: "admin@essentra.ca", role: "Admin", console: "/admin" },
  { email: "warehouse@essentra.ca", role: "Warehouse", console: "/warehouse" },
  { email: "delivery@essentra.ca", role: "Delivery", console: "/delivery" },
  { email: "rep@essentra.ca", role: "Sales rep", console: "/rep" },
] as const;