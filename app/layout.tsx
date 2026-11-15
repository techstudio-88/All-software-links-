import type { Metadata } from "next";
import "./globals.css";
import MotionEffects from "@/components/MotionEffects";

export const metadata: Metadata = {
  title: "TechStudio — Digital Products & Software",
  description: "Explore software projects, digital products and custom solutions by TechStudio.",
  openGraph: { title: "TechStudio — Digital Products & Software", description: "Explore software projects and digital products by TechStudio." }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><MotionEffects />{children}</body></html>;
}
