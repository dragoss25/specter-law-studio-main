import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Layout } from "@/components/layout";
import { EtherealShadow } from "@/components/ui/ethereal-shadow";
import {
  ArrowRight,
  Truck,
  FileText,
  Clock,
  Shield,
  CheckCircle2,
  Globe,
  TrendingUp,
  Search,
  AlertTriangle,
  FileCheck,
  BookOpen,
  Package,
  Ship,
  Plane,
  Database
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Clock,
    title: "Accelerate Negotiations",
    description: "Review supplier and carrier agreements in minutes. Respond to RFPs and contracts faster than competitors.",
  },
  {
    icon: Shield,
    title: "Reduce Liability Exposure",
    description: "Identify unfavorable liability terms, insurance gaps, and indemnification clauses before signing.",
  },
  {
    icon: FileText,
    title: "Standardize Contracts",
    description: "Ensure consistent terms across your supplier and carrier network with template-based analysis.",
  },
  {
    icon: TrendingUp,
    title: "Scale Operations",
    description: "Onboard new vendors and carriers faster without legal becoming a bottleneck in your growth.",
  },
];

// Use case tabs for logistics
const useCaseTabs = [
  {
    id: "supplier",
    label: "Supplier Contracts",
    icon: Package,
    title: "Supplier Agreement Review",
    description: "Analyze supplier contracts with focus on liability, warranties, delivery terms, and payment conditions.",
    features: [
      "Liability cap and indemnification review",
      "Warranty and quality term extraction",
      "Payment terms and penalties analysis",
      "Delivery obligation assessment",
    ],
  },
  {
    id: "carrier",
    label: "Carrier Agreements",
    icon: Ship,
    title: "Freight & Carrier Contracts",
    description: "Review transportation agreements with structured analysis of rates, liability limits, and service levels.",
    features: [
      "Rate structure and escalation review",
      "Cargo liability limitation analysis",
      "Service level agreement assessment",
      "Claims and dispute procedure review",
    ],
  },
  {
    id: "international",
    label: "Cross-Border",
    icon: Globe,
    title: "International Trade",
    description: "Navigate cross-border agreements with focus on customs, compliance, and international liability.",
    features: [
      "Incoterms and delivery term analysis",
      "Customs and import compliance",
      "Currency and payment term review",
      "International arbitration clauses",
    ],
  },
  {
    id: "compliance",
    label: "Compliance",
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Research transportation regulations, safety requirements, and compliance obligations with source citations.",
    features: [
      "DOT and FMCSA regulation research",
      "Hazmat transportation requirements",
      "International shipping compliance",
      "Environmental regulation guidance",
    ],
  },
  {
    id: "risk",
    label: "Risk Management",
    icon: AlertTriangle,
    title: "Risk Assessment",
    description: "Identify and assess contractual risks across your supply chain and carrier network.",
    features: [
      "Force majeure clause analysis",
      "Insurance requirement assessment",
      "Termination rights comparison",
      "Dispute resolution term review",
    ],
  },
  {
    id: "portfolio",
    label: "Contract Portfolio",
    icon: Database,
    title: "Portfolio Management",
    description: "Track renewal dates, compare terms across vendors, and manage contract obligations systematically.",
    features: [
      "Renewal and termination date tracking",
      "Rate comparison across carriers",
      "Service level monitoring",
      "Volume commitment tracking",
    ],
  },
];

const operationTypes = [
  { name: "Freight & Shipping", example: "Carrier contracts, BOLs" },
  { name: "Warehousing", example: "3PL agreements, storage terms" },
  { name: "Supply Chain", example: "Supplier contracts, procurement" },
  { name: "Last-Mile Delivery", example: "Delivery partner agreements" },
  { name: "International Trade", example: "Import/export compliance" },
  { name: "Fleet Management", example: "Lease and maintenance contracts" },
];

// Testimonials from logistics clients
const testimonials = [
  {
    quote: "We onboard dozens of new carriers every quarter. Specter has cut our contract review time by 70% while actually improving our ability to spot unfavorable terms.",
    role: "Legal Operations Manager",
    company: "Regional Logistics Provider",
  },
  {
    quote: "The cross-border compliance research is invaluable. We can quickly verify requirements for new trade lanes without spending hours researching regulations.",
    role: "Compliance Director",
    company: "International Freight Forwarder",
  },
];

export default function Logistics() {
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
              <Truck className="h-3 w-3" />
              For Logistics & Supply Chain
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Move faster without legal delays
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Specter streamlines supplier contract review, carrier agreement analysis, and compliance research—
              so you can onboard vendors faster and keep your supply chain moving.
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
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-12 w-12 rounded-lg bg-foreground text-background flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Eliminate Legal Bottlenecks</h3>
              <p className="text-sm text-muted-foreground">
                Review and approve contracts faster so operations can keep moving.
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-lg bg-foreground text-background flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Protect Your Operations</h3>
              <p className="text-sm text-muted-foreground">
                Identify liability risks and compliance gaps before they become problems.
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-lg bg-foreground text-background flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Scale Your Network</h3>
              <p className="text-sm text-muted-foreground">
                Onboard new suppliers and carriers without proportional legal overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Logistics Companies Use Specter - tabs */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Use Cases
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              How logistics teams use Specter
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
              Why logistics teams choose Specter
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specter handles routine contract review and compliance research, freeing your team
              to focus on operations, negotiations, and strategic partnerships.
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
              Trusted by logistics operations
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

      {/* Operation Types */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  Operation Coverage
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Support across logistics operations
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you handle freight forwarding, warehousing, last-mile delivery, or international trade,
                  Specter adapts to your specific operational needs and contract patterns.
                </p>
                <Button asChild>
                  <Link to="/demo">
                    See operation examples
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {operationTypes.map((type) => (
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
              Everything you need for logistics
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
              <p className="text-sm text-muted-foreground">Generate contracts and amendments</p>
            </Link>
            <Link to="/platform/research" className="group p-6 rounded-xl border border-border bg-background hover:border-foreground/30 transition-all">
              <Search className="h-6 w-6 mb-3" />
              <h3 className="font-semibold mb-2">Research</h3>
              <p className="text-sm text-muted-foreground">Compliance and regulation research</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to eliminate legal bottlenecks?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              See how Specter can help your logistics team review contracts faster, reduce risks, and scale operations.
              Start with a focused pilot on your real supplier and carrier agreements.
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




