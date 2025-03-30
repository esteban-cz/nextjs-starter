import { getDictionary } from "./dictionaries";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default async function NotFound({
  params,
}: {
  params: Promise<{ lang: "en" | "cs" }>;
}) {
  const resolvedParams = await params;
  const { lang } =
    resolvedParams && "lang" in resolvedParams
      ? resolvedParams
      : { lang: "en" as "en" | "cs" };
  const dictionaries = await getDictionary(lang);
  const dict = dictionaries["not-found"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-background to-background flex items-center text-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-destructive mb-4">404</h1>
        <div className="mb-4">
          <p>{dict.headingText}</p>
        </div>
        <Link href={`/${lang}`}>
          <Button
            variant="ghost"
            size="sm"
            className="inline-flex items-center"
          >
            <Home className="inline-block h-4 w-4 align-middle mr-2" />
            <span className="inline-block align-middle">{dict.buttonText}</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
