"use client";

import { useRouter, usePathname, useParams } from "next/navigation";
import { Button } from "./button";
import Image from "next/image";
import { locales, type Locale } from "@/localeConfig";

export default function LanguageSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams<{ lang: Locale }>();
  const currentLang = params.lang;
  const alternateLang = locales.find((l) => l !== currentLang) as Locale;

  const localeRegex = new RegExp(`^\\/(${locales.join("|")})`);
  const newPath = pathname.replace(localeRegex, `/${alternateLang}`);

  const handleSwitch = () => {
    router.push(newPath, { scroll: false });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={handleSwitch}
        variant="outline"
        size="icon"
        className="p-1 bg-primary/20 hover:bg-background transition-colors rounded-full"
      >
        <Image
          src={`/lang/${alternateLang}.svg`}
          alt={`Switch to ${alternateLang.toUpperCase()}`}
          width={50}
          height={50}
          className="w-full h-full rounded-full"
        />
      </Button>
    </div>
  );
}
