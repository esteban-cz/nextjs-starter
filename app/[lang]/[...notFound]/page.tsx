import { Metadata } from "next";
import NotFound from "../not-found";
import { getDictionary } from "../dictionaries";
import { info } from "@/app/resources";

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    lang: "en" | "cs";
  }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dictionaries = await getDictionary(lang);
  const dict = dictionaries["not-found"];
  return {
    title: {
      absolute: dict.metadata.title,
    },
    description: dict.metadata.description,
    icons: [{ rel: "icon", url: info.icon }],
  };
}

export default async function NotFoundPage(props: any) {
  return <NotFound {...props} />
}
