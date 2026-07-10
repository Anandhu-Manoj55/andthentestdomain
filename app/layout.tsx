import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { LayoutWrapper } from "@/components/layout";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Private India Tours for US Travelers | AndThen Travels",
  description:
    "AndThen crafts private, tailor-made tours across India, Bhutan, Nepal & Sri Lanka for discerning US travelers. Bespoke itineraries. Dedicated support. Departs daily.",

   
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
       <head>
        <link
          rel="preload"
          href="/Assets/home/poster.png"
          as="image"
          type="image/webp"
        />
      </head>
      <body style={{ fontFamily: "var(--font-body), sans-serif" }}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
