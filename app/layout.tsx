import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Raleway } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SKYLIS — Web Development & Digital Solutions",
  description:
    "From custom web apps to enterprise CMS solutions — we craft high-performance digital experiences that drive growth for your business.",
  keywords: [
    "web development",
    "digital agency",
    "web apps",
    "CMS",
    "custom software",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${raleway.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
