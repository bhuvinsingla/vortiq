import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vortiq | IT Solutions",
    template: "%s | Vortiq",
  },
  description:
    "Vortiq builds software, cloud and AI products for ambitious businesses.",
  applicationName: "Vortiq",
  keywords: [
    "Vortiq",
    "IT solutions",
    "web development",
    "mobile apps",
    "cloud",
    "AI",
    "Mohali",
  ],
  authors: [{ name: "Vortiq" }],
  openGraph: {
    title: "Vortiq | IT Solutions",
    description:
      "Vortiq builds software, cloud and AI products for ambitious businesses.",
    type: "website",
    locale: "en_IN",
    siteName: "Vortiq",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vortiq | IT Solutions",
    description:
      "Vortiq builds software, cloud and AI products for ambitious businesses.",
  },
  icons: {
    icon: [
      { url: "/vortiq-favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/vortiq-favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/vortiq-apple-touch.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className={`${archivo.className} antialiased`}>{children}</body>
    </html>
  );
}
