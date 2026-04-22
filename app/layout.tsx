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
        <div id="global-header" className="fixed top-0 left-0 right-0 z-50">
          <div id="global-announcement" className="bg-[#0F2B5B] text-white text-center text-sm py-2.5 px-4">
            <a href="/ai-workshop-spring-2026" className="hover:underline">
              <span className="mr-1">🗓</span> Spring 2026 AI Workshop Series — 4 Sundays starting May 3 <span className="ml-1 font-medium">→ Learn More</span>
            </a>
          </div>
          <div id="global-nav"><Navbar /></div>
        </div>
        <main className="pt-[40px]">{children}</main>
        <div id="global-footer"><Footer /></div>
      </body>
    </html>
  );
}
