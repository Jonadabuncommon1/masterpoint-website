import type { MetadataRoute } from "next";

const baseUrl = "https://masterpointresources.com";

const routes = [
  "",
  "/about",
  "/services",
  "/materials",
  "/calculators",
  "/projects",
  "/faq",
  "/contact",
  "/privacy-policy",
  "/terms-conditions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
