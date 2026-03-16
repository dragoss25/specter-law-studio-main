import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { EtherealShadow } from "@/components/ui/ethereal-shadow";
import { ArrowRight, BookOpen, FileText, Shield, AlertCircle, CheckSquare, Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";

const resourceCategories = [
  { id: "contract-terms", label: "Contract Terms", icon: FileText },
  { id: "privacy", label: "Privacy", icon: Shield },
  { id: "best-practices", label: "Best Practices", icon: CheckSquare },
];

const resources = [
  {
    title: "Indemnity Clauses",
    subtitle: "What to Examine",
    summary: "Key questions to ask when reviewing indemnification provisions. Coverage scope, carve-outs, caps, and defense obligations.",
    category: "contract-terms",
    readTime: "5 min read",
    featured: true,
    content: [
      {
        heading: "Why it matters",
        body: [
          "Indemnity reallocates risk and defense costs. It can dwarf other liability terms because it often bypasses caps and exclusions.",
          "Small drafting choices decide who pays for third-party claims, who controls the defense, and whether settlements require consent.",
        ],
      },
      {
        heading: "Scope checklist",
        bullets: [
          "Which claims are covered and whether coverage is limited to third-party claims.",
          "Who is protected (affiliate scope, officers, contractors, and end users).",
          "Triggering events such as IP infringement, data breaches, or negligence.",
          "Exclusions for customer misuse, modifications, or combinations.",
          "Whether indemnity includes legal fees, penalties, or remediation costs.",
        ],
      },
      {
        heading: "Defense mechanics",
        bullets: [
          "Duty to defend vs. duty to reimburse after the fact.",
          "Control of defense and selection of counsel.",
          "Settlement consent rights and carve-outs for injunctive relief.",
          "Cooperation obligations and timing for notice.",
        ],
      },
      {
        heading: "Common red flags",
        bullets: [
          "Indemnity extends to first-party losses without clear limits.",
          "One-way indemnity with no reciprocal protection for core risks.",
          "No consent rights for settlement or admission of liability.",
          "Indemnity obligations that bypass all liability caps.",
        ],
      },
      {
        heading: "Negotiation tips",
        body: [
          "Tie indemnity scope to specific claim types, align caps with insurance and liability limits, and tighten defense control to avoid surprises in a claim.",
        ],
      },
    ],
  },
  {
    title: "Limitation of Liability",
    subtitle: "Risk Allocation Structures",
    summary: "How different cap structures and carve-outs affect your exposure. Direct vs. indirect damages, super-caps, and carve-out categories.",
    category: "contract-terms",
    readTime: "6 min read",
    featured: true,
    content: [
      {
        heading: "Why it matters",
        body: [
          "Liability caps set the financial ceiling for disputes. The carve-outs define when the ceiling disappears.",
          "Understanding the cap structure is as important as the number because it drives real exposure.",
        ],
      },
      {
        heading: "Common cap models",
        bullets: [
          "Single aggregate cap for all claims over the term.",
          "Multiple caps by claim category or contract year.",
          "Super-cap for specific breaches such as confidentiality or IP.",
          "No cap for certain claims, often written as a carve-out list.",
        ],
      },
      {
        heading: "Carve-out discipline",
        bullets: [
          "Narrow carve-outs to specific, defined claim types.",
          "Avoid broad phrases like \"any breach of law\" without scope.",
          "Confirm whether indemnity fits inside or outside the cap.",
        ],
      },
      {
        heading: "Drafting questions",
        bullets: [
          "Is the cap based on fees paid, fees payable, or total contract value?",
          "Do credits, refunds, or service credits count toward the cap?",
          "Are indirect damages excluded and how are they defined?",
        ],
      },
      {
        heading: "Negotiation tips",
        body: [
          "Align the cap with business risk, narrow carve-outs to the most critical items, and make sure the cap applies consistently across remedies.",
        ],
      },
    ],
  },
  {
    title: "Auto-Renewal Terms",
    subtitle: "Where Surprises Happen",
    summary: "Notice periods, term lengths, and common pitfalls in renewal provisions. What to verify before signature.",
    category: "contract-terms",
    readTime: "4 min read",
    featured: false,
    content: [
      {
        heading: "Why it matters",
        body: [
          "Auto-renewal can extend obligations and pricing with little notice. Missed notice windows are a common operational failure point.",
          "Even well-negotiated terms can become unfavorable if pricing or scope changes at renewal.",
        ],
      },
      {
        heading: "Renewal mechanics",
        bullets: [
          "Exact notice window and delivery method for non-renewal.",
          "Length of renewal term and whether it mirrors the initial term.",
          "Automatic price escalators or benchmark adjustments.",
          "Whether renewal is opt-in or opt-out by default.",
        ],
      },
      {
        heading: "Pricing and change control",
        bullets: [
          "Is renewal pricing defined or subject to later notice?",
          "Do material changes trigger a right to terminate?",
          "Are there caps on annual increases or usage uplifts?",
        ],
      },
      {
        heading: "Operational checklist",
        bullets: [
          "Calendar renewal deadlines at least 90 days out.",
          "Confirm contact addresses for notice delivery.",
          "Document who owns renewal decisions internally.",
        ],
      },
      {
        heading: "Negotiation tips",
        body: [
          "Shorten notice windows, require renewal confirmation, and make pricing explicit to avoid silent changes at renewal.",
        ],
      },
    ],
  },
  {
    title: "DPA Review",
    subtitle: "Common Questions",
    summary: "What to look for in data processing agreements and standard contractual clauses. Subprocessor obligations, transfer mechanisms, audit rights.",
    category: "privacy",
    readTime: "7 min read",
    featured: true,
    content: [
      {
        heading: "Why it matters",
        body: [
          "DPAs define the legal boundaries for processing and transfers. They control accountability for incidents, audits, and privacy obligations.",
          "A clear DPA reduces downstream risk when regulators or customers ask how data is handled.",
        ],
      },
      {
        heading: "Core obligations",
        bullets: [
          "Purpose limitation, data categories, and processing instructions.",
          "Confidentiality requirements for personnel and contractors.",
          "Assistance with data subject requests and regulatory inquiries.",
          "Data deletion and return obligations at termination.",
        ],
      },
      {
        heading: "Transfers and subprocessors",
        bullets: [
          "Transfer mechanisms for cross-border data movement.",
          "Subprocessor approval or notice workflow.",
          "Obligation to flow down privacy terms to subprocessors.",
        ],
      },
      {
        heading: "Security and incident response",
        bullets: [
          "Minimum security controls and documented safeguards.",
          "Breach notice timelines and required detail in reports.",
          "Audit rights and the format of audit evidence.",
        ],
      },
      {
        heading: "Negotiation tips",
        body: [
          "Clarify incident response timelines, require subprocessor transparency, and confirm alignment with internal privacy and security standards.",
        ],
      },
    ],
  },
  {
    title: "Termination Rights",
    subtitle: "Exit Provisions",
    summary: "Exit rights, notice requirements, and wind-down obligations to verify. Convenience vs. cause termination structures.",
    category: "contract-terms",
    readTime: "5 min read",
    featured: false,
    content: [
      {
        heading: "Why it matters",
        body: [
          "Termination terms control your exit options and the cost of leaving. They also dictate what happens to data, deliverables, and access.",
          "A clear exit path reduces operational disruption during vendor changes or internal strategy shifts.",
        ],
      },
      {
        heading: "Termination paths",
        bullets: [
          "Termination for cause with defined cure periods.",
          "Termination for convenience and required notice windows.",
          "Immediate termination triggers for legal or security breaches.",
        ],
      },
      {
        heading: "Wind-down and data",
        bullets: [
          "Transition assistance and the scope of wind-down services.",
          "Data return or deletion timing and format requirements.",
          "Access to logs, exports, and historical records post-termination.",
        ],
      },
      {
        heading: "Fees and refunds",
        bullets: [
          "Refundability of prepaid fees and service credits.",
          "Termination fees or early exit penalties.",
          "Obligations that survive termination and their duration.",
        ],
      },
      {
        heading: "Negotiation tips",
        body: [
          "Balance convenience rights, define cure periods clearly, and require practical data return or deletion obligations after exit.",
        ],
      },
    ],
  },
  {
    title: "Warranties & Disclaimers",
    subtitle: "Typical Patterns",
    summary: "Common warranty structures and disclaimer language in B2B agreements. What's standard, what's aggressive.",
    category: "contract-terms",
    readTime: "4 min read",
    featured: false,
    content: [
      {
        heading: "Why it matters",
        body: [
          "Warranties set baseline expectations for performance and compliance. Disclaimers define the limits of responsibility.",
          "If disclaimers are too broad, you may be left without a practical remedy for core failures.",
        ],
      },
      {
        heading: "Warranty scope",
        bullets: [
          "Performance and uptime commitments tied to the product scope.",
          "Compliance warranties for law, privacy, or industry standards.",
          "Non-infringement and ownership warranties for IP.",
        ],
      },
      {
        heading: "Disclaimers and limits",
        bullets: [
          "Implied warranty disclaimers and how they interact with local law.",
          "Disclaimer of fitness for a particular purpose and merchantability.",
          "Exclusions for beta features or third-party components.",
        ],
      },
      {
        heading: "Remedy structure",
        bullets: [
          "Exclusive remedy language and whether it limits real recovery.",
          "Time limits for warranty claims and notice requirements.",
          "Service credits vs. refund rights for persistent failures.",
        ],
      },
      {
        heading: "Negotiation tips",
        body: [
          "Preserve core warranties, narrow blanket disclaimers, and require remedies that match the business impact of failures.",
        ],
      },
    ],
  },
  {
    title: "Confidentiality",
    subtitle: "Beyond NDAs",
    summary: "How confidentiality provisions work in master agreements and vendor contracts. Duration, exceptions, return/destruction.",
    category: "contract-terms",
    readTime: "4 min read",
    featured: false,
    content: [
      {
        heading: "Why it matters",
        body: [
          "Confidentiality clauses govern how information is protected, who can access it, and how long protections last.",
          "Small changes to definitions or exclusions can create unexpected exposure during disputes.",
        ],
      },
      {
        heading: "Definition and scope",
        bullets: [
          "Definition of confidential information and explicit exclusions.",
          "Whether oral disclosures require later confirmation in writing.",
          "Treatment of residual knowledge and employee memory.",
        ],
      },
      {
        heading: "Use and disclosure",
        bullets: [
          "Permitted use limited to contract performance.",
          "Disclosure to affiliates or contractors and required safeguards.",
          "Required notice for compelled disclosure requests.",
        ],
      },
      {
        heading: "Duration and return",
        bullets: [
          "Term of confidentiality obligations and survival period.",
          "Return or destruction requirements and certification duties.",
          "Handling of backups, archives, and legally required retention.",
        ],
      },
      {
        heading: "Negotiation tips",
        body: [
          "Align protection standards with internal policy, narrow exclusions, and confirm the confidentiality term matches the sensitivity of the data.",
        ],
      },
    ],
  },
  {
    title: "Verifying AI Outputs",
    subtitle: "Best Practices",
    summary: "How to use source-linked citations to validate AI-generated analysis. Verification workflows and quality checks.",
    category: "best-practices",
    readTime: "6 min read",
    featured: true,
    content: [
      {
        heading: "Why it matters",
        body: [
          "AI outputs are strongest when paired with verification. A repeatable workflow reduces risk and keeps review time predictable.",
          "Verification also builds a record of diligence when decisions are questioned later.",
        ],
      },
      {
        heading: "Verification workflow",
        bullets: [
          "Confirm key claims against cited sources and underlying documents.",
          "Check assumptions, jurisdiction, and date relevance.",
          "Flag uncertainty and route for human review when needed.",
          "Document any edits made to the AI output.",
        ],
      },
      {
        heading: "Source quality checks",
        bullets: [
          "Verify that citations are primary sources when possible.",
          "Assess whether a source is authoritative for the issue.",
          "Confirm the cited passage supports the stated conclusion.",
        ],
      },
      {
        heading: "Recordkeeping",
        bullets: [
          "Store review notes with the matter file for audit readiness.",
          "Track reviewer names and timestamps on critical decisions.",
          "Maintain a version history for final outputs.",
        ],
      },
      {
        heading: "Operational tips",
        body: [
          "Treat AI as a research accelerator, not a final authority. A structured verification step preserves accuracy and accountability.",
        ],
      },
    ],
  },
];

const getCategoryIcon = (categoryId: string) => {
  const category = resourceCategories.find(c => c.id === categoryId);
  return category?.icon || FileText;
};

const getCategoryLabel = (categoryId: string) => {
  const category = resourceCategories.find(c => c.id === categoryId);
  return category?.label || categoryId;
};

type ResourceCardProps = {
  resource: (typeof resources)[number];
  compact?: boolean;
};

const ResourceCard = ({ resource, compact }: ResourceCardProps) => {
  const Icon = getCategoryIcon(resource.category);

  return (
    <Dialog>
      <div
        className={cn(
          compact
            ? "group relative p-6 rounded-xl border border-border bg-background"
            : "group relative p-8 rounded-2xl border border-border bg-background",
          "hover:border-foreground/20 transition-all duration-300",
          !compact && "hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.02)]"
        )}
      >
        <div className={cn("flex items-start justify-between gap-4", compact ? "mb-4" : "mb-6")}>
          <div className="flex items-center gap-3">
            <div className={cn(
              "rounded-lg border border-border flex items-center justify-center bg-surface-subtle",
              compact ? "h-8 w-8" : "h-10 w-10"
            )}>
              <Icon className={cn(compact ? "h-4 w-4" : "h-5 w-5")} />
            </div>
            <span className={cn(
              compact ? "text-xs uppercase tracking-wider text-muted-foreground" : "text-sm text-muted-foreground"
            )}>
              {getCategoryLabel(resource.category)}
            </span>
          </div>
          {!compact && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Bookmark className="h-4 w-4" />
              {resource.readTime}
            </div>
          )}
        </div>

        <h3 className={cn(compact ? "font-semibold mb-1" : "text-xl font-semibold mb-1")}>
          {resource.title}
        </h3>
        <p className={cn(compact ? "text-sm text-muted-foreground mb-3" : "text-muted-foreground text-sm mb-4")}>
          {resource.subtitle}
        </p>
        <p className={cn(
          "text-muted-foreground leading-relaxed",
          compact ? "text-sm mb-4" : "mb-6"
        )}>
          {resource.summary}
        </p>

        <div className={cn("flex items-center", compact ? "justify-between" : "gap-2")}>
          {compact && (
            <span className="text-xs text-muted-foreground">{resource.readTime}</span>
          )}
          <DialogTrigger asChild>
            <Button variant="ghost" className="h-auto px-0 py-0 text-sm font-medium">
              Read more
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </DialogTrigger>
        </div>
      </div>

      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground mb-3">
            <span>{getCategoryLabel(resource.category)}</span>
            <span>•</span>
            <span>{resource.readTime}</span>
          </div>
          <DialogTitle className="text-2xl md:text-3xl">{resource.title}</DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            {resource.subtitle}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="mt-6 max-h-[60vh] pr-4">
          <div className="space-y-6">
            {resource.content.map((section) => (
              <div key={section.heading} className="space-y-3">
                <h4 className="text-lg font-semibold">{section.heading}</h4>
                {section.body?.map((paragraph) => (
                  <p key={paragraph} className="text-sm text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="space-y-2">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="mt-6 rounded-lg border border-border bg-surface-subtle p-4 text-xs text-muted-foreground">
          These resources are for informational purposes only and do not constitute legal advice.
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default function Resources() {
  const featuredResources = resources.filter(r => r.featured);
  const otherResources = resources.filter(r => !r.featured);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <EtherealShadow
            color="rgba(40, 40, 40, 0.9)"
            animation={{ scale: 60, speed: 70 }}
            noise={{ opacity: 0.4, scale: 1.5 }}
            sizing="fill"
            className="w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background/70 pointer-events-none -z-10" />

        <div className="container relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/80 backdrop-blur-sm mb-8">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm font-medium">Resource Library</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Contract review
                <br />
                <span className="text-muted-foreground">guides</span>
              </h1>

              <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Practical guidance on common contract terms and review questions.
                Written by legal professionals, for legal professionals.
              </p>
            </div>
          </div>
      </section>

        {/* Category Pills */}
        <section className="py-8 sticky top-[72px] bg-background/70 backdrop-blur-sm z-10">
          <div className="container">
            <div className="flex flex-wrap gap-3 justify-center">
              {resourceCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background hover:border-foreground/30 hover:bg-surface-subtle transition-all text-sm font-medium"
                  >
                    <Icon className="h-4 w-4" />
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center md:text-left">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
                Featured
              </p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Essential reading
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {featuredResources.map((resource) => (
                <ResourceCard key={resource.title} resource={resource} />
              ))}
            </div>
          </div>
        </section>

        {/* All Resources */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center md:text-left">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
                All Resources
              </p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Contract term guides
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherResources.map((resource) => (
                <ResourceCard key={resource.title} resource={resource} compact />
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12">
          <div className="container">
            <div className="flex items-start gap-4 p-6 rounded-xl border border-border bg-background/90 backdrop-blur-sm max-w-3xl mx-auto">
              <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium mb-1">Educational Content Only</p>
                <p className="text-sm text-muted-foreground">
                  These resources are for informational purposes only and do not constitute legal advice.
                  Always consult with qualified legal professionals for specific legal matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center rounded-2xl border border-border bg-background/90 backdrop-blur-sm p-10">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Ready to see Cortex in action?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Request a demo to see how structured analysis can support your contract review workflow.
              </p>
              <Button size="lg" className="mt-10" asChild>
                <Link to="/demo">
                  Request a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

      <div className="h-20 lg:hidden" />
    </Layout>
  );
}
