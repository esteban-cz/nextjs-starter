import { baseURL, routes } from "@/app/resources";
import { locales } from "@/localeConfig";

export default async function sitemap() {
  const sitemapRoutes = [];

  for (const [path, config] of Object.entries(routes)) {
    if (
      config.protected &&
      typeof config.protected === "object" &&
      config.protected.role === "admin"
    ) {
      continue;
    }

    for (const locale of locales) {
      const localizedPath = `/${locale}${path === "/" ? "" : path}`;
      sitemapRoutes.push({
        url: `${baseURL}${localizedPath}`,
        lastModified: new Date().toISOString(),
      });
    }
  }

  return sitemapRoutes;
}
