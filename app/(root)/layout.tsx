import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { info, baseURL } from "@/app/resources";
import { defaultLocale } from "@/localeConfig";
import { ThemeProvider } from "@/components/providers/theme-provider";

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
    images: ["/opengraph-image.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: info.name,
    description: info.description[defaultLocale],
    images: ["/opengraph-image.jpeg"],
  },
  icons: [{ rel: "icon", url: info.icon }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
