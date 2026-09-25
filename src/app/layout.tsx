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
    default: "Masterpoint Resources Ltd | Building Contractor and Materials Supplier, Nigeria",
    template: "%s | Masterpoint Resources Ltd",
  },
  description:
    "Nigeria's trusted building contractor and building materials supplier. We deliver structural construction, finishing works, roofing, stamped concrete, and direct-source materials to your site, nationwide. 12 years of certified experience. Get a quote today.",
  keywords: [
    "building contractor Nigeria",
    "building contractor Enugu",
    "building materials supplier Nigeria",
    "construction company Nigeria",
    "cement supplier Nigeria",
    "structural steel Nigeria",
    "roofing contractor Nigeria",
    "building materials delivery Nigeria",
    "construction services Nigeria",
    "Masterpoint Resources",
  ],
  icons: {
    icon: "/images/logo/masterpoint-icon.png",
    apple: "/images/logo/masterpoint-icon.png",
  },
  openGraph: {
    title: "Masterpoint Resources Ltd | Building Contractor and Materials Supplier, Nigeria",
    description:
      "Nigeria's trusted building contractor and building materials supplier. Structural construction, finishing works, and direct-source materials delivered nationwide. 12 years of certified experience.",
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
