import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "TechStudio — Digital Products & Software",
  description: "Explore software projects, digital products and custom solutions by TechStudio.",
  openGraph: { title: "TechStudio — Digital Products & Software", description: "Explore software projects and digital products by TechStudio." }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
