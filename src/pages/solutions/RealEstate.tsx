import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Layout } from "@/components/layout";
import { EtherealShadow } from "@/components/ui/ethereal-shadow";
import {
  ArrowRight,
  Home as HomeIcon,
  FileText,
  Clock,
  Shield,
  CheckCircle2,
  Building2,
  TrendingUp,
  Search,
  PenTool,
  FileCheck,
  BookOpen,
  Key,
  AlertTriangle,
  Users,
  Database
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Clock,
    title: "Close Deals Faster",
    description: "Review leases and purchase agreements in minutes, not hours. Respond to clients and counterparties faster than competitors.",
  },
  {
    icon: Shield,
    title: "Identify Risks Early",
    description: "Surface liability terms, maintenance obligations, and unfavorable clauses before they become problems.",
  },
  {
    icon: FileText,
    title: "Consistent Documentation",
    description: "Ensure every lease, amendment, and notice meets your standards with structured drafting assistance.",
  },
  {
    icon: TrendingUp,
    title: "Scale Your Practice",
    description: "Handle more transactions without proportional increases in staff. Grow efficiently while maintaining quality.",
  },
];

// Use case tabs for real estate
const useCaseTabs = [
  {
    id: "lease-review",
    label: "Lease Review",
    icon: FileCheck,
    title: "Lease Agreement Review",
    description: "Analyze commercial and residential leases with structured extraction of key terms, obligations, and risks.",
    features: [
      "Rent escalation clause analysis",
      "Maintenance responsibility identification",
      "Termination and renewal term extraction",
      "Security deposit and liability review",
    ],
  },
  {
    id: "purchase",
    label: "Purchase Agreements",
    icon: Key,
    title: "Purchase & Sale Agreements",
    description: "Review property purchase agreements with focus on contingencies, closing conditions, and risk allocation.",
    features: [
      "Contingency clause analysis",
      "Title and survey requirement review",
      "Closing condition identification",
      "Warranty and representation assessment",
    ],
  },
  {
    id: "tenant",
    label: "Tenant Matters",
    icon: Users,
    title: "Tenant Management",
    description: "Draft notices, amendments, and correspondence for tenant-related matters with professional consistency.",
    features: [
      "Lease violation notice drafting",
      "Lease amendment preparation",
      "Tenant communication templates",
      "Eviction procedure guidance",
    ],
  },
  {
    id: "compliance",
    label: "Compliance",
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Research local regulations, zoning requirements, and landlord-tenant laws with source-linked citations.",
    features: [
      "Local ordinance research",
      "Fair housing compliance guidance",
      "Zoning regulation analysis",
      "Disclosure requirement identification",
    ],
  },
  {
    id: "drafting",
    label: "Document Drafting",
    icon: PenTool,
    title: "Lease & Contract Drafting",
    description: "Generate first drafts of leases, addendums, and property agreements aligned to your templates.",
    features: [
      "Commercial lease drafting",
      "Lease addendum generation",
      "Property management agreements",
      "Standard clause customization",
    ],
  },
  {
    id: "portfolio",
    label: "Portfolio Management",
    icon: Database,
    title: "Portfolio Analysis",
    description: "Track renewal dates, compare terms across properties, and manage lease portfolios systematically.",
    features: [
      "Renewal date tracking",
      "Rent comparison across portfolio",
      "Lease term standardization",
      "Obligation calendar management",
    ],
  },
];

const propertyTypes = [
  { name: "Commercial Real Estate", example: "Office, retail, industrial leases" },
  { name: "Residential", example: "Apartment, single-family leases" },
  { name: "Multi-Family", example: "Apartment complex management" },
  { name: "Industrial", example: "Warehouse, manufacturing space" },
  { name: "Retail", example: "Shopping center, storefront leases" },
  { name: "Mixed-Use", example: "Commercial-residential properties" },
];

// Testimonials from real estate clients
const testimonials = [
  {
    quote: "We review dozens of leases every week. Specter has cut our review time by more than half while actually improving our consistency in catching issues.",
    role: "Commercial Real Estate Attorney",
    company: "Property Management Legal Team",
  },
  {
    quote: "The ability to quickly extract key terms across our entire lease portfolio has been transformative. We can now compare terms and identify outliers in minutes.",
    role: "General Counsel",
    company: "Multi-Family Property Owner",
  },
];

export default function RealEstate() {
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
              <HomeIcon className="h-3 w-3" />
              For Real Estate Professionals
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Review leases and close deals faster
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Specter streamlines lease review, purchase agreement analysis, and property documentation—
              so you can focus on closing transactions and serving clients.
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
              <h3 className="font-semibold mb-2">Accelerate Transactions</h3>
              <p className="text-sm text-muted-foreground">
                Review and respond to lease proposals faster than your competition.
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-lg bg-foreground text-background flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Catch Issues Early</h3>
              <p className="text-sm text-muted-foreground">
                Identify problematic clauses and liability terms before signing.
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-lg bg-foreground text-background flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Consistent Standards</h3>
              <p className="text-sm text-muted-foreground">
                Ensure every document meets your quality and compliance requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Real Estate Professionals Use Specter - tabs */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Use Cases
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              How real estate professionals use Specter
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
              Why real estate professionals choose Specter
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specter handles routine document review and analysis, freeing you to focus on
              negotiations, client relationships, and closing deals.
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
              Trusted by real estate professionals
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

      {/* Property Types */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  Property Coverage
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Support across property types
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you handle commercial office leases, residential properties, or mixed-use developments,
                  Specter adapts to your specific property types and transaction patterns.
                </p>
                <Button asChild>
                  <Link to="/demo">
                    See property type examples
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {propertyTypes.map((type) => (
                  <div key={type.name} className="p-4 rounded-lg border border-border bg-background">
                    <p className="font-semibold mb-1">{type.name}</p>
                    <p className="text-sm text-muted-foreground">{type.example}</p>
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
              Everything you need for real estate
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
              <p className="text-sm text-muted-foreground">Structured lease and contract review</p>
            </Link>
            <Link to="/platform/drafting" className="group p-6 rounded-xl border border-border bg-background hover:border-foreground/30 transition-all">
              <FileCheck className="h-6 w-6 mb-3" />
              <h3 className="font-semibold mb-2">Drafting</h3>
              <p className="text-sm text-muted-foreground">Generate leases and amendments</p>
            </Link>
            <Link to="/platform/research" className="group p-6 rounded-xl border border-border bg-background hover:border-foreground/30 transition-all">
              <Search className="h-6 w-6 mb-3" />
              <h3 className="font-semibold mb-2">Research</h3>
              <p className="text-sm text-muted-foreground">Local regulation and compliance research</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground text-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to close deals faster?
            </h2>
            <p className="text-lg text-background/80 mb-8">
              See how Specter can help you review leases faster, identify risks earlier, and serve more clients.
              Start with a focused pilot on your real property documents.
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
              Specter provides legal information, not legal advice. All outputs require professional review.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
