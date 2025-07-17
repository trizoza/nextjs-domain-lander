import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"

/**********************************************************************************

OPTIONAL TODO - YOUR OWN FONT

1. Go to https://fonts.google.com/ and find a font you like

2. Import it from "next/font/google" below (LINE 14)

3. Overwrite the "Geist_Mono" function in the "customFont" variable below (LINE 18)

**********************************************************************************/
import { Geist_Mono } from "next/font/google";

import "./globals.css";

const customFont = Geist_Mono({
  variable: "--your-font-of-choice",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "What A Great Domain",
  description: "Work in progress landing page, get in touch and learn more about what's coming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${customFont.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
