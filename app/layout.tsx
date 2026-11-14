import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "StudioShelf — Software built to work",
  description: "Explore real software projects, product walkthroughs and demos by StudioShelf.",
  openGraph: { title: "StudioShelf — Software built to work", description: "Explore software projects and product walkthroughs." }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
