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
  Users,
  TrendingUp,
  Search,
  PenTool,
  FileCheck,
  BookOpen,
  Briefcase,
  Target,
  Database
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Clock,
    title: "Accelerate Client Work",
    description: "Reduce research and drafting time from hours to minutes. Deliver faster client responses without sacrificing quality.",
  },
  {
    icon: TrendingUp,
    title: "Handle More Matters",
    description: "Take on additional cases without proportional increases in associate hours. Scale your practice efficiently.",
  },
  {
    icon: FileText,
    title: "Consistent Quality",
    description: "Ensure every brief, motion, and contract meets your firm's standards with structured analysis and drafting.",
  },
  {
    icon: Target,
    title: "Competitive Edge",
    description: "Respond to client requests faster than competitors. Win more work with rapid turnarounds and superior quality.",
  },
];

// Use case tabs for law firms
const useCaseTabs = [
  {
    id: "research",
    label: "Legal Research",
    icon: Search,
    title: "Legal Research & Analysis",
    description: "Research case law, statutes, and regulations with source-linked citations you can verify and cite.",
    features: [
      "Case law research across jurisdictions",
      "Statutory interpretation and analysis",
      "Regulatory requirement summaries",
      "Precedent identification and comparison",
    ],
  },
  {
    id: "drafting",
    label: "Document Drafting",
    icon: PenTool,
    title: "Brief & Motion Drafting",
    description: "Generate first drafts of briefs, motions, and pleadings. Refine with your expertise to meet court standards.",
    features: [
      "Motion and brief drafting",
      "Contract clause generation",
      "Legal memorandum preparation",
      "Discovery request drafting",
    ],
  },
  {
    id: "review",
    label: "Contract Review",
    icon: FileCheck,
    title: "Contract Review & Analysis",
    description: "Analyze agreements for clients with structured risk identification and clause comparison.",
    features: [
      "M&A due diligence document review",
      "Commercial contract analysis",
      "Key term extraction and summary",
      "Risk assessment and flagging",
    ],
  },
  {
    id: "litigation",
    label: "Litigation Support",
    icon: Scale,
    title: "Litigation Support",
    description: "Prepare for depositions, hearings, and trials with comprehensive legal analysis and strategy support.",
    features: [
      "Deposition outline preparation",
      "Case strategy research",
      "Evidence analysis and organization",
      "Opposing counsel argument analysis",
    ],
  },
  {
    id: "client",
    label: "Client Advisory",
    icon: Briefcase,
    title: "Client Advisory",
    description: "Provide clients with clear, well-researched guidance on complex legal questions.",
    features: [
      "Client memo preparation",
      "Compliance guidance research",
      "Risk assessment documentation",
      "Plain-language explanations",
    ],
  },
  {
    id: "knowledge",
    label: "Knowledge Management",
    icon: Database,
    title: "Knowledge Management",
    description: "Build and maintain your firm's knowledge base with organized research and template libraries.",
    features: [
      "Precedent database organization",
      "Template library management",
      "Practice area knowledge compilation",
      "Research memo archiving",
    ],
  },
];

const practiceAreas = [
  { name: "Corporate & M&A", example: "Transaction documents, due diligence" },
  { name: "Litigation", example: "Briefs, motions, discovery" },
  { name: "Real Estate", example: "Property contracts, leases" },
  { name: "Employment", example: "Employment agreements, disputes" },
  { name: "Intellectual Property", example: "Licensing, trademark research" },
  { name: "Regulatory", example: "Compliance research, advisory" },
];

// Testimonials from law firm clients
const testimonials = [
  {
    quote: "Specter has become an essential tool for our associates. Research that used to take hours now takes minutes, and the quality is consistently excellent.",
    role: "Managing Partner",
    company: "Mid-Size Commercial Litigation Firm",
  },
  {
    quote: "The source citations are what sold us. We can verify everything before it goes to a client. It's like having a very thorough junior associate available 24/7.",
    role: "Senior Associate",
    company: "Corporate Law Practice",
  },
];

export default function LawFirms() {
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
              For Law Firms
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Research and draft faster, bill smarter
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Specter accelerates legal research, drafting, and analysis—freeing your attorneys
              to focus on strategy, client relationships, and billable work that matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
              <h3 className="font-semibold mb-2">Maximize Billable Hours</h3>
              <p className="text-sm text-muted-foreground">
                Reduce non-billable research time. Spend more hours on high-value client work.
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-lg bg-foreground text-background flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Scale Without Overhead</h3>
              <p className="text-sm text-muted-foreground">
                Handle more cases without hiring additional associates. Grow efficiently.
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-lg bg-foreground text-background flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Maintain Quality Standards</h3>
              <p className="text-sm text-muted-foreground">
                Ensure consistent analysis and drafting quality across all attorneys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Law Firms Use Specter - tabs */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Use Cases
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              How law firms use Specter
            </h2>
          </div>

          {/* Tab navigation */}
          <div className="mb-12 max-w-4xl mx-auto overflow-x-auto md:overflow-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max min-w-full gap-2 snap-x snap-mandatory md:w-full md:min-w-0 md:flex-wrap md:justify-center">
              {useCaseTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "shrink-0 snap-start whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all",
                    activeTab === tab.id
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
              Why law firms choose Specter
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specter augments your attorneys' capabilities, handling routine research and drafting
              so they can focus on strategy and client service.
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
              Trusted by law firms
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

      {/* Practice Areas */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  Practice Area Coverage
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Support across practice areas
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you practice corporate law, litigation, real estate, or regulatory work,
                  Specter adapts to your firm's specific needs and practice areas.
                </p>
                <Button asChild className="mx-auto lg:mx-0">
                  <Link to="/demo">
                    See practice area examples
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {practiceAreas.map((area) => (
                  <div key={area.name} className="p-4 rounded-lg border border-border bg-background">
                    <p className="font-semibold mb-1">{area.name}</p>
                    <p className="text-sm text-muted-foreground">{area.example}</p>
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
              Everything your firm needs
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
              Ready to accelerate your practice?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              See how Specter can help your firm research faster, draft better, and serve more clients.
              Start with a focused pilot on your real cases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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




