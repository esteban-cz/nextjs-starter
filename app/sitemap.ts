import { baseURL, routes } from "@/app/resources";

export default async function sitemap() {
  const sitemapRoutes = Object.entries(routes)
    .filter(([path, config]) => {
      if (
        config.protected &&
        typeof config.protected === "object" &&
        config.protected.role === "admin"
      ) {
        return false;
      }
      return true;
    })
    .map(([path, _]) => ({
      url: `${baseURL}${path}`,
      lastModified: new Date().toISOString(),
    }));

  return sitemapRoutes;
}
