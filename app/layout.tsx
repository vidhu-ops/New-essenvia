import type { Metadata } from "next";
import { Fraunces, Libre_Franklin } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const libre = Libre_Franklin({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Essentra — Household essentials, delivered",
  description: "The brands your home already uses. One box. One monthly price. Delivered in Canada.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-CA" className={cn("h-full antialiased", fraunces.variable, libre.variable)}>
      <body className="min-h-full font-body text-ink">{children}</body>
    </html>
  );
}
