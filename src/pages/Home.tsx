import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { EtherealShadow } from "@/components/ui/ethereal-shadow";
import { Layout } from "@/components/layout";
import {
  ArrowRight,
  Building2,
  Truck,
  FileText,
  Scale,
  Users,
  Globe,
  CheckCircle2,
  Home as HomeIcon,
  Briefcase,
  Factory,
  CreditCard,
  ShieldCheck,
  Brain,
  PenTool,
  Search
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { InteractiveImageAccordion } from "@/components/ui/interactive-image-accordion";
import { AIConversationDemo } from "@/components/ui/ai-conversation-demo";
import { Testimonial } from "@/components/ui/clean-testimonial";
import { WorkflowMiniPreview, type WorkflowPreviewType } from "@/components/ui/workflow-mini-preview";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { useIsMobile } from "@/hooks/use-mobile";

// Real industries served - B2B across all sectors
const industries = [
  { icon: Scale, name: "Law Firms", desc: "Legal research & drafting" },
  { icon: Building2, name: "Real Estate", desc: "Contracts & compliance" },
  { icon: Truck, name: "Logistics", desc: "Vendor agreements" },
  { icon: Users, name: "HR & Employment", desc: "Policy & contracts" },
  { icon: CreditCard, name: "Finance", desc: "Regulatory research" },
  { icon: Globe, name: "Corporate Legal", desc: "In-house teams" },
];

// Proven legal domains from Specter's track record in Germany
const legalDomains = [
  "Employment Law",
  "Contract Law", 
  "Real Estate Law",
  "Data Privacy & GDPR",
  "Consumer Protection",
  "Corporate Compliance",
  "Regulatory Research",
  "Commercial Agreements",
];

// AI Conversation demos for each use case
const conversationDemos = {
  "in-house": [
    {
      messages: [
        { type: 'user' as const, content: 'Can you review this employment agreement and identify any non-compete clauses that might be unenforceable under California law?' },
        { type: 'processing' as const, content: 'Analyzing document...', delay: 800 },
        {
          type: 'assistant' as const,
          content: 'I\'ve reviewed the employment agreement. I found a non-compete clause in Section 7.2 that appears problematic under California law. California Business and Professions Code § 16600 generally voids non-compete agreements except in very limited circumstances. The clause as written would likely be unenforceable. I recommend revising it to focus on non-solicitation and confidentiality protections instead, which are permissible in California.',
          delay: 1500
        },
      ]
    }
  ],
  "real-estate": [
    {
      messages: [
        { type: 'user' as const, content: 'What are the key terms I should look for in this commercial lease agreement?' },
        { type: 'processing' as const, content: 'Analyzing lease terms...', delay: 800 },
        {
          type: 'assistant' as const,
          content: 'I\'ve identified several critical terms in this commercial lease: Base rent is $8,500/month with 3% annual escalations. The tenant is responsible for property taxes, insurance, and maintenance (triple net lease). There\'s a 60-day termination notice requirement and a personal guarantee clause. The lease includes a renewal option at fair market value. I\'d recommend negotiating the personal guarantee terms and clarifying the maintenance responsibilities.',
          delay: 1500
        },
      ]
    }
  ],
  "logistics": [
    {
      messages: [
        { type: 'user' as const, content: 'Review this supplier contract for liability and indemnification terms.' },
        { type: 'processing' as const, content: 'Reviewing contract terms...', delay: 800 },
        {
          type: 'assistant' as const,
          content: 'The supplier agreement contains asymmetric liability provisions. Section 12 caps supplier liability at the contract value ($50K), but your company has unlimited indemnification obligations for IP claims. Section 15 requires you to indemnify the supplier for any claims arising from your use of the goods. I recommend negotiating for mutual liability caps and balanced indemnification language to reduce risk exposure.',
          delay: 1500
        },
      ]
    }
  ],
  "compliance": [
    {
      messages: [
        { type: 'user' as const, content: 'Does our privacy policy comply with CCPA requirements for data deletion requests?' },
        { type: 'processing' as const, content: 'Checking compliance...', delay: 800 },
        {
          type: 'assistant' as const,
          content: 'Your privacy policy addresses CCPA deletion rights in Section 4, but it\'s missing some required elements. While you describe the deletion request process, you don\'t specify the 45-day response timeline mandated by CCPA § 1798.130(a)(2). You also need to clarify exceptions where deletion may not apply, such as when completing transactions or detecting security incidents. I recommend adding these specifics to ensure full compliance.',
          delay: 1500
        },
      ]
    }
  ],
  "finance": [
    {
      messages: [
        { type: 'user' as const, content: 'What regulatory requirements apply to cross-border payments between the US and EU?' },
        { type: 'processing' as const, content: 'Researching regulations...', delay: 800 },
        {
          type: 'assistant' as const,
          content: 'Cross-border US-EU payments must comply with several frameworks: FinCEN\'s Bank Secrecy Act requirements for transaction reporting, OFAC sanctions screening, EU Payment Services Directive 2 (PSD2) for payment services, and GDPR for personal data in transaction records. You\'ll need strong AML/KYC procedures, data processing agreements with EU entities, and compliance with both SEC and ESMA regulations if handling securities. Consider consulting with a compliance specialist for your specific payment flows.',
          delay: 1500
        },
      ]
    }
  ],
  "manufacturing": [
    {
      messages: [
        { type: 'user' as const, content: 'Analyze the warranty terms in this equipment supply agreement.' },
        { type: 'processing' as const, content: 'Analyzing warranty provisions...', delay: 800 },
        {
          type: 'assistant' as const,
          content: 'The equipment warranty in Section 8 provides 90 days of coverage from delivery, which is shorter than industry standard (typically 1 year for industrial equipment). The warranty only covers manufacturing defects and excludes wear-and-tear, improper use, and modifications. Critically, there\'s a disclaimer of consequential damages, limiting your recovery if defective equipment causes production delays. I recommend negotiating for an extended warranty period and coverage for at least partial consequential damages.',
          delay: 1500
        },
      ]
    }
  ],
};

// Use case tabs inspired by Harvey.ai "How Lawyers Use Harvey" section
const useCaseTabs = [
  {
    id: "in-house",
    label: "In-House Legal",
    icon: Briefcase,
    title: "In-House Legal Teams",
    description: "Streamline contract review, policy research, and compliance questions. Free up time for strategic guidance.",
    features: [
      "Contract review and risk identification",
      "Policy drafting and template generation",
      "Regulatory compliance research",
      "Vendor agreement analysis",
    ],
    href: "/solutions/in-house-legal",
  },
  {
    id: "real-estate",
    label: "Real Estate",
    icon: HomeIcon,
    title: "Real Estate & Property",
    description: "Navigate lease agreements, property contracts, and tenant matters with structured legal analysis.",
    features: [
      "Lease agreement review",
      "Property contract analysis",
      "Tenant dispute research",
      "Compliance documentation",
    ],
    href: "/solutions/real-estate",
  },
  {
    id: "logistics",
    label: "Logistics & Supply Chain",
    icon: Truck,
    title: "Logistics & Supply Chain",
    description: "Manage vendor contracts, freight agreements, and liability terms across your operations.",
    features: [
      "Supplier contract review",
      "Liability term analysis",
      "Freight agreement drafting",
      "Cross-border compliance",
    ],
    href: "/solutions/logistics",
  },
  {
    id: "compliance",
    label: "Privacy & Compliance",
    icon: ShieldCheck,
    title: "Privacy & Compliance Teams",
    description: "Stay ahead of GDPR, CCPA, and evolving regulations with sourced guidance and analysis.",
    features: [
      "Privacy policy review",
      "DPA and BAA analysis",
      "Regulatory research",
      "Compliance gap identification",
    ],
    href: "/solutions/privacy-compliance",
  },
  {
    id: "finance",
    label: "Finance & Banking",
    icon: CreditCard,
    title: "Financial Services",
    description: "Research regulatory requirements and review agreements with precision and citations.",
    features: [
      "Regulatory compliance research",
      "Contract term extraction",
      "Risk assessment support",
      "Documentation drafting",
    ],
    href: "/solutions/in-house-legal",
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    icon: Factory,
    title: "Manufacturing & Industrial",
    description: "Handle supplier agreements, warranty terms, and compliance across your production network.",
    features: [
      "Supply agreement review",
      "Warranty clause analysis",
      "Safety compliance research",
      "Vendor term comparison",
    ],
    href: "/solutions/procurement",
  },
];

// Platform capabilities - what Specter actually offers
type PlatformCapability = {
  id: number;
  title: string;
  description: string;
  href: string;
  icon: typeof Brain;
  preview: WorkflowPreviewType;
};

const platformCapabilities: PlatformCapability[] = [
  {
    id: 1,
    title: "Cortex Agent",
    description: "Multi-step reasoning that researches, validates, and delivers structured outputs with source citations.",
    href: "/platform/cortex-agent",
    icon: Brain,
    preview: "cortex",
  },
  {
    id: 2,
    title: "Document Analysis",
    description: "Upload contracts and documents for structured review—key terms, risks, and actionable summaries.",
    href: "/platform/document-analysis",
    icon: FileText,
    preview: "analysis",
  },
  {
    id: 3,
    title: "Legal Drafting",
    description: "Generate first drafts of contracts, letters, and legal documents based on your specifications.",
    href: "/platform/drafting",
    icon: PenTool,
    preview: "drafting",
  },
  {
    id: 4,
    title: "Research",
    description: "Search legal databases with AI-powered queries. Get sourced answers, not just raw results.",
    href: "/platform/research",
    icon: Search,
    preview: "research",
  },
];

const cortexReasoningSteps = [
  {
    id: 1,
    title: "Intake",
    description: "Understand the legal question, context, and required output before reasoning begins.",
    href: "/platform/cortex-agent",
    icon: Brain,
  },
  {
    id: 2,
    title: "Research",
    description: "Search statutes, case law, and legal sources to gather relevant evidence.",
    href: "/platform/cortex-agent",
    icon: Search,
  },
  {
    id: 3,
    title: "Validate",
    description: "Apply legal checks and guardrails to test consistency and reduce hallucinations.",
    href: "/platform/cortex-agent",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "Structure",
    description: "Organize findings into clear reasoning, key points, and practical recommendations.",
    href: "/platform/cortex-agent",
    icon: PenTool,
  },
  {
    id: 5,
    title: "Cite",
    description: "Deliver answers with traceable source citations so teams can verify every claim.",
    href: "/platform/cortex-agent",
    icon: FileText,
  },
];

let hasPlayedHomeHeroIntro = false;

export default function Home() {
  const [activeUseCase, setActiveUseCase] = useState(useCaseTabs[0].id);
  const isMobile = useIsMobile();
  const [activePlatformFeature, setActivePlatformFeature] = useState<number | null>(platformCapabilities[0].id);
  const [playHeroIntro] = useState(() => {
    if (hasPlayedHomeHeroIntro) return false;
    hasPlayedHomeHeroIntro = true;
    return true;
  });
  const activeTab = useCaseTabs.find(tab => tab.id === activeUseCase) || useCaseTabs[0];

  useEffect(() => {
    if (isMobile) {
      setActivePlatformFeature(null);
      return;
    }

    setActivePlatformFeature((previousFeature) => previousFeature ?? platformCapabilities[0].id);
  }, [isMobile]);

  return (
    <div className="relative min-h-screen">
      <Layout>
        {/* Hero - Premium enterprise positioning */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <EtherealShadow
              color="rgba(40, 40, 40, 0.9)"
              animation={{ scale: 60, speed: 70 }}
              noise={{ opacity: 0.4, scale: 1.5 }}
              sizing="fill"
              className="w-full h-full"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/60 pointer-events-none -z-10" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background pointer-events-none z-0" />
          <div className="container relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-10">
                <div
                  className={cn("text-center lg:text-left", playHeroIntro && "animate-fade-in")}
                  style={playHeroIntro ? { animationDelay: "0.55s" } : undefined}
                  >
                    <h1 className="inline-block text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                      <span className="block text-foreground">Specter</span>
                      <span className="block whitespace-nowrap text-foreground text-[0.72em] sm:text-[0.74em] md:text-[0.76em] lg:text-[0.78em] xl:text-[0.8em]">
                        Makes law easier
                      </span>
                    </h1>
                  </div>

                <div
                  className={cn("flex justify-center", playHeroIntro && "animate-fade-in")}
                  style={playHeroIntro ? { animationDelay: "0.15s" } : undefined}
                >
                  <div>
                    <BrandLogo
                      alt="Specter"
                      containerClassName="w-full max-w-[280px] md:max-w-[340px] lg:max-w-[380px]"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                  <div
                    className={cn(
                      "text-center lg:text-left w-full max-w-[34ch] lg:max-w-[36ch] mx-auto lg:mx-0",
                      playHeroIntro && "animate-fade-in",
                    )}
                    style={playHeroIntro ? { animationDelay: "0.9s" } : undefined}
                  >
                    <p className="text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed">
                      Specter Law is legal AI for teams that need reliable legal intelligence and workflows.
                    </p>
                  </div>
                </div>

              <div
                className={cn(
                  "mt-10 flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center",
                  playHeroIntro && "animate-fade-in",
                )}
                style={playHeroIntro ? { animationDelay: "1.15s" } : undefined}
              >
                <Link to="/demo" className="w-full sm:w-auto">
                  <ShimmerButton variant="primary" className="w-full sm:w-auto text-base h-14 px-8 shadow-xl">
                    <span className="flex items-center justify-center gap-2 font-medium">
                      Request a Demo
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </ShimmerButton>
                </Link>
                <Link to="/pilot" className="w-full sm:w-auto">
                  <ShimmerButton variant="secondary" className="w-full sm:w-auto text-base h-14 px-8">
                    <span className="flex items-center justify-center font-medium">Start a Pilot</span>
                  </ShimmerButton>
                </Link>
              </div>
            </div>
          </div>
      </section>

      {/* Industries We Serve - Multi-sector B2B focus */}
      <section className="py-24 md:py-32 reveal-on-scroll">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
              WHO WE SERVE
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Legal AI for every industry
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every business faces legal complexity. Specter brings professional-grade legal intelligence
              to companies across sectors — not just law firms.
            </p>
          </div>

          <FeaturesSectionWithHoverEffects
            features={industries.map(industry => ({
              title: industry.name,
              description: industry.desc,
              icon: industry.icon
            }))}
          />

          <p className="text-center text-sm text-muted-foreground mt-8">
            Plus procurement, healthcare, technology, retail, and more
          </p>
        </div>
      </section>

      {/* Platform Capabilities - what Specter offers */}
      <section className="py-24 md:py-32 reveal-on-scroll">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Platform
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              One integrated platform
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Everything your team needs for legal research, document analysis, and drafting.
            </p>
            <Button variant="outline" asChild>
              <Link to="/platform/case-analysis">
                Explore the Platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Platform Features - mini preview list */}
      <section className="pb-24 md:pb-32 reveal-on-scroll">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="h-px bg-border" />
            {platformCapabilities.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activePlatformFeature === feature.id;

              return (
                <Link
                  key={feature.id}
                  to={feature.href}
                  className="group block rounded-[20px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
                  onMouseEnter={() => {
                    if (!isMobile) {
                      setActivePlatformFeature(feature.id);
                    }
                  }}
                  onFocus={() => {
                    if (!isMobile) {
                      setActivePlatformFeature(feature.id);
                    }
                  }}
                  onClick={(event) => {
                    if (!isMobile) return;

                    // First tap on mobile expands the preview; second tap follows the link.
                    if (activePlatformFeature !== feature.id) {
                      event.preventDefault();
                      setActivePlatformFeature(feature.id);
                    }
                  }}
                >
                  <div className="flex items-start gap-6 md:gap-10 py-8 md:py-10">
                    <span
                      className={cn(
                        "text-[3rem] md:text-[4rem] font-bold leading-none tracking-tight select-none shrink-0 w-16 md:w-24 text-right tabular-nums transition-opacity",
                        isActive ? "text-foreground opacity-100" : "text-foreground/20 opacity-70"
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex-1 pt-1 md:pt-2 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-8 w-8 rounded-md border border-border/80 bg-muted/40 flex items-center justify-center">
                          <Icon className="h-4 w-4 text-foreground/80" />
                        </div>
                        <h3
                          className={cn(
                            "text-xl md:text-2xl font-bold tracking-tight transition-colors duration-500",
                            isActive ? "text-foreground" : "text-foreground/90"
                          )}
                        >
                          {feature.title}
                        </h3>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-foreground/70 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                      </div>
                      <p className="text-base text-muted-foreground max-w-2xl">{feature.description}</p>

                      {isActive && (
                        <div className="pt-6 pb-2">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground/80">
                              Live preview
                            </span>
                            <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
                          </div>
                          <div className="max-w-xl">
                            <WorkflowMiniPreview type={feature.preview} locale="en" active />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-border via-border/60 to-transparent" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How Businesses Use Specter - Harvey-style tabbed section */}
      <section className="py-24 md:py-32 reveal-on-scroll">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Solutions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              How businesses use Specter
            </h2>
          </div>

          {/* Tab navigation */}
          <div className="mb-12 max-w-6xl mx-auto overflow-x-auto md:overflow-visible [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max min-w-full gap-2 snap-x snap-mandatory md:w-full md:min-w-0 md:flex-wrap md:justify-center">
              {useCaseTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveUseCase(tab.id)}
                  className={cn(
                    "shrink-0 snap-start px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                    activeUseCase === tab.id
                      ? "bg-foreground text-background"
                      : "bg-background border border-border hover:border-foreground/30"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab content */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-foreground text-background flex items-center justify-center">
                    <activeTab.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">{activeTab.title}</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {activeTab.description}
                </p>

                <div className="bg-background rounded-xl border border-border p-6 mb-8">
                  <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                    Common use cases
                  </p>
                  <div className="space-y-3">
                    {activeTab.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-foreground/60 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button asChild className="mx-auto lg:mx-0">
                  <Link to={activeTab.href}>
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  See it in action
                </p>
                <AIConversationDemo
                  key={activeUseCase}
                  conversationSteps={conversationDemos[activeUseCase as keyof typeof conversationDemos]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials - from European track record */}
      <section className="py-24 md:py-32 reveal-on-scroll">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
              What Our Clients Say
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Trusted by 250+ clients
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Feedback from legal teams and businesses across Europe who use Specter daily.
            </p>
          </div>

          <div className="mb-12">
            <Testimonial />
          </div>

          <div className="flex justify-center">
            <Link to="/demo">
              <ShimmerButton variant="primary" className="text-base h-14 px-8 shadow-xl">
                <span className="flex items-center gap-2 font-medium">
                  Request a Demo
                  <ArrowRight className="h-4 w-4" />
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand story - Why Specter (proven track record) */}
      <section className="py-24 md:py-32 reveal-on-scroll">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-2">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  Why Specter
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Proven expertise in legal AI
                </h2>
              </div>
              <div className="lg:col-span-3 space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With 250+ clients across Europe, Specter has built a track record of delivering legal AI 
                  that professionals trust. We've helped businesses navigate employment contracts, vendor agreements, 
                  compliance requirements, and complex regulatory questions.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Now we're bringing that proven expertise to the US market. Our Cortex Agent 
                  delivers structured analysis with source citations, uncertainty flags, and clear next steps — 
                  the same rigorous approach that earned the trust of European enterprises.
                </p>
                <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Button variant="outline" asChild>
                    <Link to="/company/about">
                      About Specter
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="ghost" asChild>
                    <Link to="/trust">
                      Trust & Security
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Domains Covered */}
      <section className="py-24 md:py-32 reveal-on-scroll">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  Comprehensive Coverage
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  10+ legal domains, one platform
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Built on years of legal AI development and refined with real client feedback. 
                  Specter covers the domains that matter most to modern businesses.
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {legalDomains.map((domain) => (
                    <div key={domain} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-foreground/60 flex-shrink-0" />
                      <span className="text-sm">{domain}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual representation */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent rounded-xl" />
                <div className="relative border border-border rounded-xl bg-background p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b border-border">
                      <div className="h-10 w-10 rounded-lg bg-foreground text-background flex items-center justify-center">
                        <Scale className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold">Multi-Domain Intelligence</p>
                        <p className="text-sm text-muted-foreground">One query, comprehensive legal context</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-surface-subtle">
                        <p className="text-sm font-medium mb-1">Example Query</p>
                        <p className="text-sm text-muted-foreground">"Review this vendor agreement for data privacy compliance and liability terms"</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-lg border border-border">
                          <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Contract Law</p>
                          <p className="text-sm">Liability analysis</p>
                        </div>
                        <div className="p-3 rounded-lg border border-border">
                          <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Data Privacy</p>
                          <p className="text-sm">GDPR/CCPA check</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Cortex difference */}
      <section className="py-24 md:py-32 reveal-on-scroll">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
                The Cortex Agent
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Intelligence that thinks in steps
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Unlike single-shot AI responses, Cortex works through a multi-step reasoning cycle — 
                researching, validating, and structuring every output.
              </p>
            </div>

            <div className="mb-16">
              <InteractiveImageAccordion items={cortexReasoningSteps} defaultActiveIndex={0} />
            </div>

            <div className="text-center">
              <Button asChild>
                <Link to="/platform/cortex-agent">
                  Explore Cortex Agent
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - US Pilot */}
      <section className="py-24 md:py-32 reveal-on-scroll">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
              <span className="inline-flex items-center gap-2">
                <img
                  src="/flags/us-flag.svg"
                  alt="United States flag"
                  className="h-3 w-auto rounded-sm border border-border"
                  width={18}
                  height={12}
                  loading="lazy"
                  decoding="async"
                />
                US Pilot Program
              </span>
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              See Specter on your real work
            </h2>
            <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
              Join 250+ organizations that trust Specter for legal intelligence.
              30–60 day paid pilots with defined scope and measurable outcomes.
            </p>
            <p className="text-sm text-muted-foreground/70 mb-8">
              Now expanding to US-focused commercial contracts and compliance use cases.
            </p>
            <p className="text-xs text-muted-foreground/70 mb-8">
              Looking for "Speceter"? You are likely looking for Specter Law.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/demo">
                <ShimmerButton
                  variant="primary"
                  className="text-base h-14 px-8"
                >
                  <span className="font-medium">Request a Demo</span>
                </ShimmerButton>
              </Link>
              <Link to="/pilot">
                <ShimmerButton
                  variant="secondary"
                  className="text-base h-14 px-8"
                >
                  <span className="font-medium">Start a Pilot</span>
                </ShimmerButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 reveal-on-scroll">
        <div className="container">
          <p className="text-xs text-center text-muted-foreground max-w-2xl mx-auto">
            Specter is not a law firm and does not provide legal advice. Our platform provides legal information, 
            research support, and drafting assistance that should be reviewed by qualified legal professionals.
          </p>
        </div>
      </section>

      {/* Spacer for mobile sticky CTA */}
      </Layout>
    </div>
  );
}

