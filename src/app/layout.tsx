import type { Metadata } from "next";
import { Inter, Oswald, Rajdhani } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import ConditionalFooter from "@/components/layout/ConditionalFooter";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { CartProvider } from "@/components/shop/CartContext";
import { company } from "@/data/company";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

// A technical, drafting-table feel for the CTA banner headline specifically.
const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const siteUrl = "https://masterpointresources.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Masterpoint Resources Ltd | Construction & Building Materials, Nationwide",
    template: "%s | Masterpoint Resources Ltd",
  },
  description:
    "Masterpoint Resources Limited delivers nationwide construction services and direct-source building materials, backed by 12 years of experience and certified site supervision. Meeting the test of eternal beauty.",
  keywords: [
    "construction company Nigeria",
    "building materials supplier Nigeria",
    "cement supplier Nigeria",
    "structural steel Nigeria",
    "Masterpoint Resources",
  ],
  icons: {
    icon: "/images/logo/masterpoint-icon.png",
    apple: "/images/logo/masterpoint-icon.png",
  },
  openGraph: {
    title: "Masterpoint Resources Ltd | Construction & Building Materials, Nationwide",
    description: company.slogan,
    url: siteUrl,
    siteName: "Masterpoint Resources Ltd",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${oswald.variable} ${rajdhani.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-brand-dark">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <ConditionalFooter />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
