export type SeoSchema = Record<string, unknown>;

export interface SeoRouteMeta {
  title: string;
  description: string;
}

export interface SeoMeta {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  ogType: "website" | "article";
  ogImage: string;
  ogSiteName: string;
  twitterCard: "summary_large_image";
  twitterSite: string;
  jsonLd: SeoSchema | SeoSchema[];
  isNotFound: boolean;
}

export const SEO_BASE_URL = "https://specterlaw.us";
export const SEO_OG_IMAGE = `${SEO_BASE_URL}/logos/americanspecterlogo.png`;
export const SEO_TWITTER_SITE = "@specterlaw";
export const SEO_ORG_NAME = "Specter Law";
export const SEO_ORG_ALTERNATE_NAMES = ["Specter", "Speceter"];
export const SEO_ORG_SAME_AS = ["https://x.com/specterlaw"];

export const SEO_ROUTE_META: Record<string, SeoRouteMeta> = {
  "/": {
    title: "Specter Law | Legal AI Platform",
    description:
      "Specter Law helps legal and business teams move faster with source-linked research, document analysis, and drafting workflows built for professional review.",
  },
  "/demo": {
    title: "Request a Demo",
    description:
      "Book a personalized Specter demo and see how Cortex supports legal workflows with structured outputs, citations, and clear next steps.",
  },
  "/pilot": {
    title: "Pilot Program",
    description:
      "Run a paid 30-60 day Specter pilot on real legal work with clear success metrics, guided onboarding, and measurable outcomes.",
  },
  "/trust": {
    title: "Trust and Security",
    description:
      "Review Specter security, privacy, and governance commitments, including source transparency, controls, and enterprise safeguards.",
  },
  "/privacy": {
    title: "Privacy Policy",
    description:
      "Read how Specter collects, uses, and protects customer data, including retention, security practices, and data rights.",
  },
  "/terms": {
    title: "Terms of Service",
    description:
      "Read Specter platform terms, usage conditions, disclaimers, and liability terms for business users and organizations.",
  },
  "/platform/case-analysis": {
    title: "Case Analysis Platform",
    description:
      "Analyze legal matters with structured issue mapping, risk highlights, and source-linked outputs that help teams decide with confidence.",
  },
  "/platform/cortex-agent": {
    title: "Cortex Agent",
    description:
      "Use multi-step legal reasoning with source citations, uncertainty signaling, and structured output delivery in one Cortex workflow.",
  },
  "/platform/document-analysis": {
    title: "Document Analysis",
    description:
      "Upload legal documents and get structured summaries, findings, and risk notes linked to source clauses for faster review.",
  },
  "/platform/drafting": {
    title: "Drafting",
    description:
      "Generate and refine legal drafts with template guidance, consistent language, and iterative improvements aligned to your standards.",
  },
  "/platform/research": {
    title: "Research",
    description:
      "Search legal sources with semantic retrieval and source links, so teams can verify findings and cite confidently.",
  },
  "/solutions/in-house-legal": {
    title: "In-House Legal Solution",
    description:
      "Support in-house legal teams with faster contract review, compliance research, and stakeholder-ready summaries.",
  },
  "/solutions/procurement": {
    title: "Procurement and Vendor Solution",
    description:
      "Help procurement teams review vendor terms, triage legal questions, and collaborate more efficiently with legal.",
  },
  "/solutions/privacy-compliance": {
    title: "Privacy and Compliance Solution",
    description:
      "Accelerate privacy and compliance workflows with research support, document analysis, and structured risk identification.",
  },
  "/solutions/law-firms": {
    title: "Law Firms Solution",
    description:
      "Help law firms speed up research, drafting, and matter analysis while preserving professional legal judgment.",
  },
  "/solutions/real-estate": {
    title: "Real Estate Solution",
    description:
      "Review leases, purchase agreements, and property documentation with structured legal analysis and source-backed clarity.",
  },
  "/solutions/logistics": {
    title: "Logistics Solution",
    description:
      "Handle supplier and carrier agreements with faster clause review, risk surfacing, and compliance-oriented legal support.",
  },
  "/company/about": {
    title: "About Specter Law",
    description:
      "Learn the Specter mission, team background, and legal AI approach focused on structured outputs and source transparency.",
  },
  "/company/contact": {
    title: "Contact Specter Law",
    description:
      "Contact Specter for demos, security discussions, or general questions about legal AI workflows for your organization.",
  },
};

function normalizePath(pathname: string): string {
  if (pathname === "/") {
    return pathname;
  }

  return pathname.replace(/\/+$/, "") || "/";
}

function clampDescription(text: string, maxLength = 160): string {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength - 3).trimEnd()}...`;
}

function buildCanonical(pathname: string): string {
  const normalizedPath = normalizePath(pathname);
  return normalizedPath === "/" ? SEO_BASE_URL : `${SEO_BASE_URL}${normalizedPath}`;
}

function buildWebPageSchema(title: string, description: string, canonical: string): SeoSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: canonical,
    isPartOf: {
      "@type": "WebSite",
      name: SEO_ORG_NAME,
      url: SEO_BASE_URL,
    },
  };
}

function buildHomeSchemas(title: string, description: string): SeoSchema[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SEO_ORG_NAME,
      alternateName: SEO_ORG_ALTERNATE_NAMES,
      legalName: SEO_ORG_NAME,
      url: SEO_BASE_URL,
      logo: `${SEO_BASE_URL}/logos/specterlogo.png`,
      sameAs: SEO_ORG_SAME_AS,
      email: "hello@specterlaw.us",
      founder: [
        {
          "@type": "Person",
          name: "Dragos Pisilea",
          sameAs: "https://www.linkedin.com/in/dragos-andrei-pisilea-aa1572164",
        },
        {
          "@type": "Person",
          name: "Amir Ajaj",
          sameAs: "https://www.linkedin.com/in/amir-ajaj/",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "hello@specterlaw.us",
          url: `${SEO_BASE_URL}/company/contact`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SEO_ORG_NAME,
      alternateName: SEO_ORG_ALTERNATE_NAMES,
      url: SEO_BASE_URL,
      description,
      publisher: {
        "@type": "Organization",
        name: SEO_ORG_NAME,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Speceter the same as Specter Law?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. If you searched for Speceter, you are likely looking for Specter Law at specterlaw.us.",
          },
        },
      ],
    },
  ];
}

export function getSeoMeta(pathname: string): SeoMeta {
  const normalizedPath = normalizePath(pathname);
  const routeMeta = SEO_ROUTE_META[normalizedPath];

  if (!routeMeta) {
    const canonical = buildCanonical(normalizedPath);
    const title = "Page Not Found | Specter Law";
    const description = "The page you requested does not exist. Explore Specter legal AI solutions from the main site navigation.";

    return {
      title,
      description,
      canonical,
      robots: "noindex,follow",
      ogType: "website",
      ogImage: SEO_OG_IMAGE,
      ogSiteName: SEO_ORG_NAME,
      twitterCard: "summary_large_image",
      twitterSite: SEO_TWITTER_SITE,
      jsonLd: buildWebPageSchema(title, description, canonical),
      isNotFound: true,
    };
  }

  const canonical = buildCanonical(normalizedPath);
  const title = normalizedPath === "/" ? routeMeta.title : `${routeMeta.title} | Specter Law`;
  const description = clampDescription(routeMeta.description);

  return {
    title,
    description,
    canonical,
    robots: "index,follow",
    ogType: "website",
    ogImage: SEO_OG_IMAGE,
    ogSiteName: SEO_ORG_NAME,
    twitterCard: "summary_large_image",
    twitterSite: SEO_TWITTER_SITE,
    jsonLd:
      normalizedPath === "/"
        ? buildHomeSchemas(title, description)
        : buildWebPageSchema(title, description, canonical),
    isNotFound: false,
  };
}
