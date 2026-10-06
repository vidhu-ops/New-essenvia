import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Essentra — Household essentials, delivered",
  description:
    "Customized household essentials with the brands you trust. One monthly price. Delivered across Canada.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-CA" className={cn("h-full", "antialiased", dmSans.variable, sourceSerif.variable, "font-sans", geist.variable)}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
