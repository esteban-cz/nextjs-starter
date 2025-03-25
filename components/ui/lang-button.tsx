"use client";

import { useRouter, usePathname, useParams } from "next/navigation";
import { Button } from "./button";
import Image from "next/image";

export default function LanguageSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams<{ lang: "cs" | "en" }>();
  const currentLang = params.lang;
  const alternateLang = currentLang === "cs" ? "en" : "cs";

  const newPath = pathname.replace(/^\/(cs|en)/, `/${alternateLang}`);

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
