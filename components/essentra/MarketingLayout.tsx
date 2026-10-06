import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAF8]">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
