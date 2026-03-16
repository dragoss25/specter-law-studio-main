import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Layout } from "@/components/layout";
import { EtherealShadow } from "@/components/ui/ethereal-shadow";
import {
  ArrowRight,
  Scale,
  FileText,
  Clock,
  Shield,
  CheckCircle2,
  Building2,
  Users,
  TrendingUp,
  Search,
  AlertTriangle,
  FileCheck,
  BookOpen,
  MessageSquare,
  Database
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Clock,
    title: "Save Hours Per Contract",
    description: "Reduce contract review time from hours to minutes. Focus your expertise on strategic decisions, not document triage.",
  },
  {
    icon: Shield,
    title: "Consistent Risk Identification",
    description: "Surface key clauses, liability terms, and renewal dates across every agreement with structured outputs.",
  },
  {
    icon: FileText,
    title: "Accelerate Drafting",
    description: "Generate first drafts of NDAs, amendments, and responses. Refine with your expertise, not start from scratch.",
  },
  {
    icon: TrendingUp,
    title: "Scale Without Headcount",
    description: "Handle growing contract volumes without proportional team growth. Do more with your existing resources.",
  },
];

// Harvey-inspired use case tabs for in-house teams
const useCaseTabs = [
  {
    id: "contracts",
    label: "Contracting",
    icon: FileCheck,
    title: "Contract Review & Analysis",
    description: "Review contracts against your preferred playbook, identify deviations, and receive drafting suggestions.",
    features: [
      "Vendor agreement review with risk scoring",
      "NDA comparison against standard templates",
      "Key term extraction across portfolios",
      "Clause library search and matching",
    ],
  },
  {
    id: "compliance",
    label: "Regulatory Compliance",
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Analyze evolving regulations, track changes, and ensure policies stay aligned with requirements.",
    features: [
      "GDPR and CCPA compliance research",
      "Regulatory change monitoring",
      "Internal policy gap analysis",
      "Compliance documentation drafting",
    ],
  },
  {
    id: "research",
    label: "Legal Research",
    icon: Search,
    title: "Strategic Research",
    description: "Get answers to complex legal questions with source-linked citations you can verify.",
    features: [
      "Multi-jurisdiction research",
      "Precedent and case law analysis",
      "Regulatory requirement summaries",
      "Industry-specific guidance",
    ],
  },
  {
    id: "risk",
    label: "Risk Management",
    icon: AlertTriangle,
    title: "Risk Assessment",
    description: "Identify potential liabilities and risks to your organization with structured analysis.",
    features: [
      "Litigation risk assessment",
      "Contract liability analysis",
      "M&A due diligence support",
      "Insurance coverage review",
    ],
  },
  {
    id: "operations",
    label: "Legal Operations",
    icon: Database,
    title: "Legal Operations",
    description: "Track key dates, categorize documents, and manage contract obligations systematically.",
    features: [
      "Renewal and deadline tracking",
      "Document categorization",
      "Clause type filtering",
      "Contract portfolio analysis",
    ],
  },
  {
    id: "communication",
    label: "Internal Communication",
    icon: MessageSquare,
    title: "Business Communication",
    description: "Translate legal complexity into plain-language summaries for business stakeholders.",
    features: [
      "Executive summary generation",
      "FAQ and memo drafting",
      "Plain-language explanations",
      "Stakeholder briefing materials",
    ],
  },
];

const industries = [
  { name: "Technology", example: "SaaS agreements, licensing" },
  { name: "Healthcare", example: "BAAs, vendor compliance" },
  { name: "Financial Services", example: "Regulatory contracts" },
  { name: "Manufacturing", example: "Supply chain agreements" },
  { name: "Retail", example: "Vendor and franchise contracts" },
  { name: "Real Estate", example: "Leases, property agreements" },
];

// Testimonials from European track record
const testimonials = [
  {
    quote: "Specter has transformed how we handle contract review. What used to take our team hours now takes minutes, with better consistency.",
    role: "General Counsel",
    company: "European Manufacturing Company",
  },
  {
    quote: "The structured outputs make it easy to communicate legal risks to business stakeholders. We're having better conversations faster.",
    role: "Legal Operations Manager",
    company: "Technology Enterprise",
  },
];

export default function InHouseLegal() {
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
              <Scale className="h-3 w-3" />
              For In-House Legal Teams
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Go from backlog to business partner
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Specter streamlines high-volume legal work, so your team can focus on
              strategic guidance and faster execution.
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

      {/* Value Props - Harvey style */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-12 w-12 rounded-lg bg-foreground text-background flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Streamline Routine Work</h3>
              <p className="text-sm text-muted-foreground">
                Shift focus from high-volume tasks to high-impact initiatives that drive decisions.
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-lg bg-foreground text-background flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Extend Your Impact</h3>
              <p className="text-sm text-muted-foreground">
                Support more departments and practice areas without overstretching resources.
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-lg bg-foreground text-background flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Grow While Staying Compliant</h3>
              <p className="text-sm text-muted-foreground">
                Deliver faster legal guidance to help teams close deals and launch products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How In-House Teams Use Specter - Harvey-style tabs */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Use Cases
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              How in-house teams use Specter
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
              Do more with your legal team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specter augments your team's capabilities, handling routine work so you can 
              focus on strategic priorities.
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
              Trusted by in-house teams
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

      {/* Industries */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  Industry Coverage
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  In-house teams across industries
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're in tech, healthcare, manufacturing, or financial services, 
                  Specter adapts to your industry's contract patterns and compliance requirements.
                </p>
                <Button asChild>
                  <Link to="/demo">
                    See industry examples
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry) => (
                  <div key={industry.name} className="p-4 rounded-lg border border-border bg-background">
                    <p className="font-semibold mb-1">{industry.name}</p>
                    <p className="text-sm text-muted-foreground">{industry.example}</p>
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
              Everything your team needs
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
              <p className="text-sm text-muted-foreground">Generate first drafts and templates</p>
            </Link>
            <Link to="/platform/research" className="group p-6 rounded-xl border border-border bg-background hover:border-foreground/30 transition-all">
              <Search className="h-6 w-6 mb-3" />
              <h3 className="font-semibold mb-2">Research</h3>
              <p className="text-sm text-muted-foreground">AI-powered legal database search</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to scale your legal team?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              See how Specter can help your in-house team handle more work with existing resources.
              Start with a focused pilot on your real contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo">
                <ShimmerButton 
                  variant="primary" className="text-base h-14 px-8 shadow-xl"
                >
                  <span className="font-medium">Request a Demo</span>
                </ShimmerButton>
              </Link>
              <Link to="/pilot">
                <ShimmerButton 
                  variant="secondary" className="text-base h-14 px-8"
                >
                  <span className="font-medium">Start a Pilot</span>
                </ShimmerButton>
              </Link>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              Specter provides legal information, not legal advice. All outputs require professional review.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}



