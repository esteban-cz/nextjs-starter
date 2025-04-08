import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { baseURL, info } from "@/app/resources";
import { ReactLenis } from "lenis/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LanguageSwitch from "@/components/ui/lang-button";
import { defaultLocale, locales, type Locale } from "@/localeConfig";

const inter = Inter({ subsets: ["latin"] });
export async function generateMetadata({
  params,
}: {
  params: Promise<{
    lang: Locale;
  }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const description =
    lang === defaultLocale
      ? info.description[defaultLocale]
      : info.description[locales[1]];
  return {
    metadataBase: new URL(baseURL),
    alternates: {
      canonical:
        lang === defaultLocale
          ? `${baseURL}/${defaultLocale}`
          : `${baseURL}/${locales[1]}`,
    },
    authors: info.author,
    title: {
      template: `%s | ${info.name}`,
      default: info.name,
    },
    description,
    keywords: info.keywords,
    openGraph: {
      title: info.name,
      description,
      url: baseURL,
      images: ["/opengraph-image.jpeg"],
    },
    twitter: {
      card: "summary_large_image",
      title: info.name,
      description,
      images: ["/opengraph-image.jpeg"],
    },
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
