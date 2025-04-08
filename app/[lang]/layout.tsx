import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { baseURL, info } from "@/app/resources";
import { ReactLenis } from "lenis/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LanguageSwitch from "@/components/ui/lang-button";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(baseURL),
    authors: info.author,
    title: {
      template: `%s | ${info.name}`,
      default: info.name,
    },
    description: info.description,
    keywords: info.keywords,
    icons: [{ rel: "icon", url: info.icon }],
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ReactLenis root>
            <Navbar />
            <main className="min-h-screen">
              {children}
              <LanguageSwitch />
            </main>
            <Footer />
          </ReactLenis>
        </ThemeProvider>
      </body>
    </html>
  );
}
