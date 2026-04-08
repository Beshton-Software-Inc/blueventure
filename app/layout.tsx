import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blue Venture Hacks | AI Skills for the Next Generation",
  description: "Blue Venture Hacks is a nonprofit helping students and young professionals build AI skills, join workshops and hackathons, and launch one-person company ideas.",
  openGraph: {
    title: "Blue Venture Hacks | AI Skills for the Next Generation",
    description: "Blue Venture Hacks is a nonprofit helping students and young professionals build AI skills, join workshops and hackathons, and launch one-person company ideas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
