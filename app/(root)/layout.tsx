import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { info, baseURL } from "@/app/resources";
import { defaultLocale } from "@/localeConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(baseURL),
  authors: info.author,
  title: info.name,
  description: info.description[defaultLocale],
  openGraph: {
    title: info.name,
    description: info.description[defaultLocale],
    url: baseURL,
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: info.name,
    description: info.description[defaultLocale],
    images: ["/opengraph-image.png"],
  },
  icons: [{ rel: "icon", url: info.icon }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={defaultLocale}>
      <body className={inter.className}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
