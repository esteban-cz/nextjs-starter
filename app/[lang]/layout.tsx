import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { baseURL, info } from "@/app/resources";
import ScrollProvider from "@/components/providers/scroll-provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LanguageSwitch from "@/components/ui/lang-button";
import { DockFooter } from "@/components/layout/DockFooter";
import { Locale } from "@/localeConfig";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    lang: Locale;
  }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const description = lang === "cs" ? info.description.cs : info.description.en;
  return {
    metadataBase: new URL(baseURL),
    alternates: {
      canonical: lang === "cs" ? `${baseURL}/cs` : `${baseURL}/en`,
    },
    authors: info.author,
    title: {
      template: `%s | ${info.name}`,
      default: info.name,
    },
    description,
    keywords: info.keywords,
    icons: [{ rel: "icon", url: info.icon }],
  };
}

export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{
    lang: Locale;
  }>;
  children: React.ReactNode;
}) {
  const { lang } = await params;
  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProvider>
            <Navbar />
            <main className="min-h-screen">
              {children}
              <LanguageSwitch />
            </main>
            <Footer />
          </ScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
