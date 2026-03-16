import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSeoMeta } from "@/lib/seo";

function upsertMetaByName(name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertMetaByProperty(property: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let element = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function upsertJsonLd(schema: unknown) {
  const scriptId = "specter-route-jsonld";
  let element = document.getElementById(scriptId) as HTMLScriptElement | null;

  if (!element) {
    element = document.createElement("script");
    element.id = scriptId;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }

  element.text = JSON.stringify(schema);
}

export function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const meta = getSeoMeta(location.pathname);

    document.title = meta.title;

    upsertMetaByName("description", meta.description);
    upsertMetaByName("robots", meta.robots);

    upsertMetaByProperty("og:title", meta.title);
    upsertMetaByProperty("og:description", meta.description);
    upsertMetaByProperty("og:type", meta.ogType);
    upsertMetaByProperty("og:url", meta.canonical);
    upsertMetaByProperty("og:image", meta.ogImage);
    upsertMetaByProperty("og:site_name", meta.ogSiteName);

    upsertMetaByName("twitter:card", meta.twitterCard);
    upsertMetaByName("twitter:title", meta.title);
    upsertMetaByName("twitter:description", meta.description);
    upsertMetaByName("twitter:image", meta.ogImage);
    upsertMetaByName("twitter:site", meta.twitterSite);

    upsertCanonical(meta.canonical);
    upsertJsonLd(meta.jsonLd);
  }, [location.pathname]);

  return null;
}
