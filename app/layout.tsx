import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bkknex.com"),
  title: {
    default: "BKKNEX — Building What Comes Next.",
    template: "%s — BKKNEX",
  },
  description:
    "BKKNEX is a technology company from Bangkok building next-generation solutions across IoT, AI, automation, data and emerging technologies.",
  keywords: [
    "BKKNEX",
    "Bangkok technology",
    "Deep Tech",
    "IoT",
    "Smart Farm",
    "SMF IoT",
    "Artificial Intelligence",
    "AI",
    "Automation",
    "Space Technology",
  ],
  authors: [{ name: "BKKNEX" }],
  openGraph: {
    title: "BKKNEX — Building What Comes Next.",
    description:
      "Next-generation technology from Bangkok — IoT, AI, automation and emerging platforms.",
    url: "https://bkknex.com",
    siteName: "BKKNEX",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BKKNEX — Building What Comes Next.",
    description:
      "Next-generation technology from Bangkok — IoT, AI, automation and emerging platforms.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
