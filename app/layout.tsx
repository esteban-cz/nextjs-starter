import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ReactLenis } from "lenis/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("http://localhost:3000"),
    authors: { name: "Next.js 15" },
    title: {
      template: `%s | Next.js 15`,
      default: "Next.js 15",
    },
    description: "Next.js 15",
    keywords: "Next.js 15",
    icons: [{ rel: "icon", url: "icon.png" }],
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
            <main className="min-h-screen">{children}</main>
            <Footer />
          </ReactLenis>
        </ThemeProvider>
      </body>
    </html>
  );
}
