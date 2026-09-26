import { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getAllPublished, getServices } from "@/lib/articles";
import { categories, platforms } from "@/lib/taxonomy";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/apps",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/cookie-policy",
    "/disclaimer",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  const categoryPages = categories.map((c) => ({
    url: `${site.url}/${c.slug}`,
    lastModified: new Date(),
  }));

  const platformPages = platforms
    .filter((p) => p.slug !== "general")
    .map((p) => ({ url: `${site.url}/${p.slug}`, lastModified: new Date() }));

  const servicePages = getServices().map((s) => ({
    url: `${site.url}/apps/${s.slug}`,
    lastModified: new Date(),
  }));

  const articlePages = getAllPublished().map((a) => ({
    url: `${site.url}/apps/${a.serviceSlug}/${a.slug}`,
    lastModified: new Date(a.lastUpdated),
  }));

  return [...staticPages, ...categoryPages, ...platformPages, ...servicePages, ...articlePages];
}
