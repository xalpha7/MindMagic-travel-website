import type { Metadata } from "next";
import { Goblin_One, Permanent_Marker } from "next/font/google";
import "./globals.css";
import Footer from "./(main)/components/Footer";

const goblinOne = Goblin_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MindMagic Travels",
    template: "%s | MindMagic Travels",
  },
  description:
    "Discover unforgettable adventures with MindMagic Travels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${goblinOne.variable} ${permanentMarker.variable}`}
    >
      <body suppressHydrationWarning>
        {children}
        <Footer />
      </body>
    </html>
  );
}