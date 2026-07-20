import type { Metadata } from "next";
import "./globals.css";
import { LayoutWrapper } from "@/components/layout";

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
    <html lang="en">
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
