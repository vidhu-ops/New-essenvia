export type AdminModule = {
  href: string;
  label: string;
  description: string;
  connected: boolean;
};

export const adminModules: AdminModule[] = [
  { href: "/admin", label: "Overview", description: "KPIs and package prices", connected: true },
  { href: "/admin/production", label: "Production line", description: "Pack queue → QC → dispatch", connected: true },
  { href: "/admin/delivery", label: "Delivery ops", description: "Assign drivers and track runs", connected: true },
  { href: "/admin/orders", label: "Orders", description: "All customer orders", connected: true },
  { href: "/admin/catalog", label: "Catalog", description: "SKUs, costs, inventory", connected: true },
  { href: "/admin/packages", label: "Packages", description: "Plan thresholds & prices", connected: true },
  { href: "/admin/customers", label: "Customers", description: "Subscribers & addresses", connected: true },
  { href: "/admin/sales-reps", label: "Sales reps", description: "Territories & attributed signups", connected: true },
  { href: "/admin/data", label: "Database", description: "Read-only tables & row counts", connected: true },
];
