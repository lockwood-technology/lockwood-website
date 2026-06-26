import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnalyticsProvider from "@/components/providers/AnalyticsProvider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://lockwood.co.tz"),
  title: {
    default: "Lockwood, Transforming Data, Powering Decisions.",
    template: "%s | Lockwood",
  },
  description:
    "Lockwood Technology Ltd is a Tanzanian software and digital solutions company delivering impactful technology across East Africa.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    siteName: "Lockwood",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${jetbrains.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <AnalyticsProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
