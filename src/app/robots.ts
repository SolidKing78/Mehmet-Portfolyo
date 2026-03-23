import { person } from "@/content/site";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    host: `https://${person.domain}`,
    sitemap: `https://${person.domain}/sitemap.xml`,
    rules: { userAgent: "*", allow: "/" },
  };
}
