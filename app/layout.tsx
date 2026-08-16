import type { Metadata } from "next";
import {
  Inter,
  Space_Grotesk,
  JetBrains_Mono,
  Noto_Sans_Thai,
} from "next/font/google";
import "./globals.css";
import LanguageProvider from "./components/LanguageProvider";

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

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
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
    alternateLocale: ["th_TH"],
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
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${notoSansThai.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
