import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Layout } from "@/components/layout";
import { EtherealShadow } from "@/components/ui/ethereal-shadow";
import {
  ArrowRight,
  ShoppingCart,
  FileText,
  Clock,
  Shield,
  CheckCircle2,
  Users,
  TrendingUp,
  Search,
  MessageSquare,
  FileCheck,
  BookOpen,
  Calendar,
  HelpCircle,
  Target,
  Database
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Clock,
    title: "Accelerate Vendor Onboarding",
    description: "Review vendor agreements in minutes instead of waiting days for legal. Get contracts approved faster.",
  },
  {
    icon: MessageSquare,
    title: "Better Legal Collaboration",
    description: "Come to legal conversations prepared with clear questions and structured summaries. Make every meeting count.",
  },
  {
    icon: Target,
    title: "Identify Issues Early",
    description: "Spot problematic terms and missing information before escalating to legal review. Save time on revisions.",
  },
  {
    icon: TrendingUp,
    title: "Scale Vendor Network",
    description: "Handle more vendor relationships without legal becoming a bottleneck. Grow your supplier base efficiently.",
  },
];

// Use case tabs for procurement
const useCaseTabs = [
  {
    id: "triage",
    label: "Contract Triage",
    icon: FileCheck,
    title: "Pre-Legal Contract Triage",
    description: "Get structured summaries of vendor agreements before requesting legal review. Understand what you're dealing with.",
    features: [
      "Key term extraction and summary",
      "Risk identification and flagging",
      "Missing information detection",
      "Priority assessment for legal review",
    ],
  },
  {
    id: "vendor-comm",
    label: "Vendor Communication",
    icon: MessageSquare,
    title: "Vendor Communication",
    description: "Draft professional clarification requests and responses to vendor proposals with consistent language.",
    features: [
      "Clarification request drafting",
      "Vendor email templates",
      "Term explanation requests",
      "Negotiation point preparation",
    ],
  },
  {
    id: "questions",
    label: "Question Prep",
    icon: HelpCircle,
    title: "Legal Question Preparation",
    description: "Identify specific questions to bring to your legal team. Make legal reviews more efficient and productive.",
    features: [
      "Issue identification for legal review",
      "Question formulation assistance",
      "Context preparation for legal meetings",
      "Alternative approach suggestions",
    ],
  },
  {
    id: "terms",
    label: "Term Analysis",
    icon: Search,
    title: "Contract Term Analysis",
    description: "Understand complex contract language and payment terms before negotiating with vendors.",
    features: [
      "Payment term breakdown",
      "Liability clause explanation",
      "Warranty term interpretation",
      "SLA and penalty analysis",
    ],
  },
  {
    id: "timeline",
    label: "Timeline Tracking",
    icon: Calendar,
    title: "Timeline & Obligation Tracking",
    description: "Extract renewal dates, notice periods, and key deadlines from vendor agreements. Stay ahead of obligations.",
    features: [
      "Renewal date identification",
      "Notice period extraction",
      "Payment schedule summarization",
      "Milestone and deadline tracking",
    ],
  },
  {
    id: "comparison",
    label: "Vendor Comparison",
    icon: Database,
    title: "Vendor Term Comparison",
    description: "Compare terms across multiple vendor proposals to make informed sourcing decisions.",
    features: [
      "Side-by-side term comparison",
      "Pricing structure analysis",
      "Service level comparison",
      "Risk profile assessment",
    ],
  },
];

const procurementCategories = [
  { name: "IT & Software", example: "SaaS agreements, licenses" },
  { name: "Professional Services", example: "Consulting, legal services" },
  { name: "Manufacturing", example: "Supplier agreements, OEMs" },
  { name: "Facilities", example: "Building services, maintenance" },
  { name: "Marketing", example: "Agency agreements, media buys" },
  { name: "HR & Benefits", example: "Benefits providers, staffing" },
];

// Testimonials from procurement teams
const testimonials = [
  {
    quote: "Specter has transformed how we work with legal. Instead of sending contracts blind, we now come with structured summaries and specific questions. Legal loves it.",
    role: "Senior Procurement Manager",
    company: "Technology Enterprise",
  },
  {
    quote: "We used to wait days for legal review. Now we can triage contracts ourselves and only escalate what actually needs legal attention. Our vendor onboarding is 3x faster.",
    role: "Director of Procurement",
    company: "Manufacturing Company",
  },
];

export default function Procurement() {
  const [activeTab, setActiveTab] = useState(useCaseTabs[0].id);
  const currentTab = useCaseTabs.find(tab => tab.id === activeTab) || useCaseTabs[0];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <EtherealShadow
            sizing="fill"
            color="rgba(40, 40, 40, 0.9)"
            animation={{ scale: 60, speed: 70 }}
            noise={{ opacity: 0.4, scale: 1.5 }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />

        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background border border-border text-xs font-medium mb-6">
              <ShoppingCart className="h-3 w-3" />
              For Procurement & Vendor Management
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Better prepared for legal conversations
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Specter helps procurement teams understand vendor agreements faster, ask better questions,
              and communicate more effectively with legal—without replacing legal review.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo">
                <ShimmerButton variant="primary" className="text-base h-14 px-8 shadow-xl">
                  <span className="flex items-center gap-2 font-medium">
                    Request a Demo
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </ShimmerButton>
              </Link>
              <Link to="/pilot">
                <ShimmerButton variant="secondary" className="text-base h-14 px-8">
                  <span className="font-medium">Start a Pilot</span>
                </ShimmerButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 border-b border-border bg-surface-subtle">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-12 w-12 rounded-lg bg-foreground text-background flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Move Faster</h3>
              <p className="text-sm text-muted-foreground">
                Triage contracts quickly and escalate only what needs legal attention.
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-lg bg-foreground text-background flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Collaborate Better</h3>
              <p className="text-sm text-muted-foreground">
                Come to legal with structured summaries and clear questions.
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-lg bg-foreground text-background flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Reduce Risk</h3>
              <p className="text-sm text-muted-foreground">
                Spot issues early before they reach legal or get signed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Procurement Teams Use Specter - tabs */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Use Cases
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              How procurement teams use Specter
            </h2>
          </div>

          {/* Tab navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
            {useCaseTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeTab === tab.id
                    ? "bg-foreground text-background"
                    : "bg-background border border-border hover:border-foreground/30"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-foreground text-background flex items-center justify-center">
                    <currentTab.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">{currentTab.title}</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {currentTab.description}
                </p>
              </div>

              <div className="bg-surface-subtle rounded-xl border border-border p-8">
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                  Common workflows
                </p>
                <div className="space-y-4">
                  {currentTab.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-foreground/60 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Benefits
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Why procurement teams choose Specter
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specter bridges the gap between procurement and legal, helping both teams work
              more efficiently without replacing professional legal review.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-8 rounded-xl border border-border bg-background">
                <div className="h-12 w-12 rounded-lg bg-foreground text-background flex items-center justify-center mb-6">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
              What Our Clients Say
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Trusted by procurement teams
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 rounded-xl border border-border bg-background">
                <p className="text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procurement Categories */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  Category Coverage
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Support across procurement categories
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're sourcing IT services, professional services, manufacturing suppliers, or facilities management,
                  Specter adapts to your specific vendor types and contract patterns.
                </p>
                <Button asChild>
                  <Link to="/demo">
                    See category examples
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {procurementCategories.map((category) => (
                  <div key={category.name} className="p-4 rounded-lg border border-border bg-background">
                    <p className="font-semibold mb-1">{category.name}</p>
                    <p className="text-sm text-muted-foreground">{category.example}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform capabilities */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Platform
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Everything procurement needs
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Link to="/platform/cortex-agent" className="group p-6 rounded-xl border border-border bg-background hover:border-foreground/30 transition-all">
              <BookOpen className="h-6 w-6 mb-3" />
              <h3 className="font-semibold mb-2">Cortex Agent</h3>
              <p className="text-sm text-muted-foreground">Multi-step reasoning with source citations</p>
            </Link>
            <Link to="/platform/document-analysis" className="group p-6 rounded-xl border border-border bg-background hover:border-foreground/30 transition-all">
              <FileText className="h-6 w-6 mb-3" />
              <h3 className="font-semibold mb-2">Document Analysis</h3>
              <p className="text-sm text-muted-foreground">Structured contract review and extraction</p>
            </Link>
            <Link to="/platform/drafting" className="group p-6 rounded-xl border border-border bg-background hover:border-foreground/30 transition-all">
              <FileCheck className="h-6 w-6 mb-3" />
              <h3 className="font-semibold mb-2">Drafting</h3>
              <p className="text-sm text-muted-foreground">Generate vendor communications</p>
            </Link>
            <Link to="/platform/research" className="group p-6 rounded-xl border border-border bg-background hover:border-foreground/30 transition-all">
              <Search className="h-6 w-6 mb-3" />
              <h3 className="font-semibold mb-2">Research</h3>
              <p className="text-sm text-muted-foreground">Contract term and market research</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground text-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to streamline vendor collaboration?
            </h2>
            <p className="text-lg text-background/80 mb-8">
              See how Specter can help procurement and legal work together more efficiently.
              Start with a focused pilot on your real vendor contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo">
                <ShimmerButton
                  className="text-base h-14 px-8 shadow-xl bg-background text-foreground border border-foreground/10 dark:bg-foreground dark:text-background dark:border-background/10"
                  background="transparent"
                  shimmerColor="rgba(0, 0, 0, 0.15)"
                >
                  <span className="font-medium">Request a Demo</span>
                </ShimmerButton>
              </Link>
              <Link to="/pilot">
                <ShimmerButton
                  className="text-base h-14 px-8 border border-background/30 text-background dark:border-foreground/30 dark:text-foreground"
                  background="transparent"
                  shimmerColor="rgba(255, 255, 255, 0.2)"
                >
                  <span className="font-medium">Start a Pilot</span>
                </ShimmerButton>
              </Link>
            </div>
            <p className="text-xs text-background/60 mt-6">
              Specter helps procurement communicate with legal—it does not replace legal review.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
