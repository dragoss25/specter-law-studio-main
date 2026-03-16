import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Layout } from "@/components/layout";
import { EtherealShadow } from "@/components/ui/ethereal-shadow";
import {
  ArrowRight,
  Shield,
  FileText,
  Clock,
  CheckCircle2,
  Users,
  TrendingUp,
  Search,
  AlertTriangle,
  FileCheck,
  BookOpen,
  FileSearch,
  Scale,
  PenTool,
  Lock,
  Database
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Clock,
    title: "Respond to Requests Faster",
    description: "Review DPAs and vendor questionnaires in minutes instead of hours. Meet urgent deadlines without stress.",
  },
  {
    icon: Search,
    title: "Research with Confidence",
    description: "Get regulatory answers with source citations you can verify. Provide well-researched guidance to stakeholders.",
  },
  {
    icon: AlertTriangle,
    title: "Identify Gaps Early",
    description: "Surface missing terms, compliance gaps, and open questions before contracts are signed.",
  },
  {
    icon: TrendingUp,
    title: "Scale Compliance Operations",
    description: "Handle growing vendor volumes and regulatory requirements without proportional headcount increases.",
  },
];

// Use case tabs for privacy & compliance
const useCaseTabs = [
  {
    id: "dpa",
    label: "DPA Review",
    icon: FileSearch,
    title: "Data Processing Agreement Review",
    description: "Analyze DPAs with structured extraction of key terms, data handling obligations, and compliance requirements.",
    features: [
      "Processing purpose and scope analysis",
      "Security measure assessment",
      "Sub-processor term review",
      "Data subject rights compliance check",
    ],
  },
  {
    id: "gaps",
    label: "Gap Identification",
    icon: AlertTriangle,
    title: "Missing Information Detection",
    description: "Identify gaps in vendor privacy documentation and generate specific questions to ask before signing.",
    features: [
      "Missing clause identification",
      "Incomplete term flagging",
      "Question list generation",
      "Compliance risk assessment",
    ],
  },
  {
    id: "research",
    label: "Regulatory Research",
    icon: Scale,
    title: "Regulatory Research",
    description: "Research GDPR, CCPA, and other privacy regulations with source-linked findings you can cite and verify.",
    features: [
      "GDPR and CCPA requirement research",
      "Multi-jurisdiction compliance guidance",
      "Regulatory update monitoring",
      "Authority guidance interpretation",
    ],
  },
  {
    id: "drafting",
    label: "Policy Drafting",
    icon: PenTool,
    title: "Privacy Policy Drafting",
    description: "Generate draft privacy policies and notices with structured, compliant language for your review.",
    features: [
      "Privacy notice drafting",
      "Cookie policy generation",
      "Data retention policy preparation",
      "Rights request response templates",
    ],
  },
  {
    id: "vendor",
    label: "Vendor Comparison",
    icon: FileCheck,
    title: "Vendor Data Practice Comparison",
    description: "Compare data handling terms and security practices across vendor agreements systematically.",
    features: [
      "Security measure comparison",
      "Data retention term analysis",
      "Sub-processor rights review",
      "Liability and indemnity comparison",
    ],
  },
  {
    id: "questionnaire",
    label: "Questionnaires",
    icon: Database,
    title: "Privacy Questionnaire Support",
    description: "Research answers to vendor privacy questionnaires with source-linked responses for accuracy.",
    features: [
      "Questionnaire answer research",
      "Compliance documentation preparation",
      "Cross-reference verification",
      "Response consistency checking",
    ],
  },
];

const complianceAreas = [
  { name: "GDPR Compliance", example: "EU data protection requirements" },
  { name: "CCPA/CPRA", example: "California privacy regulations" },
  { name: "HIPAA", example: "Healthcare data protection" },
  { name: "SOC 2", example: "Security and availability controls" },
  { name: "ISO 27001", example: "Information security standards" },
  { name: "State Privacy Laws", example: "Virginia, Colorado, Connecticut" },
];

// Testimonials from privacy teams
const testimonials = [
  {
    quote: "DPA review used to take us 2-3 hours per vendor. With Specter, we can extract key terms and identify issues in 15 minutes. It's been transformative for our team.",
    role: "Privacy Counsel",
    company: "SaaS Technology Company",
  },
  {
    quote: "The source citations are critical for our work. We can research complex GDPR questions and have confidence in the answers because everything links back to authoritative sources.",
    role: "Data Protection Officer",
    company: "European Financial Services Firm",
  },
];

export default function PrivacyCompliance() {
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
              <Shield className="h-3 w-3" />
              For Privacy & Compliance Teams
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Research and review with source citations
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Specter accelerates privacy agreement review, regulatory research, and compliance documentation—
              with source-linked outputs you can verify and cite with confidence.
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
              <h3 className="font-semibold mb-2">Meet Urgent Deadlines</h3>
              <p className="text-sm text-muted-foreground">
                Review DPAs and respond to questionnaires faster without sacrificing thoroughness.
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-lg bg-foreground text-background flex items-center justify-center mx-auto mb-4">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Verify Everything</h3>
              <p className="text-sm text-muted-foreground">
                Every finding comes with source citations you can check before advising stakeholders.
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-lg bg-foreground text-background flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Scale Your Impact</h3>
              <p className="text-sm text-muted-foreground">
                Support more business units and vendor relationships without growing headcount.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Privacy Teams Use Specter - tabs */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Use Cases
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              How privacy teams use Specter
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
              Why privacy teams choose Specter
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specter accelerates routine compliance work so your team can focus on strategic
              privacy initiatives and stakeholder guidance.
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
              Trusted by privacy professionals
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

      {/* Compliance Areas */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  Compliance Coverage
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Support across compliance frameworks
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you handle GDPR, CCPA, HIPAA, or other privacy regulations,
                  Specter provides research and analysis support across major compliance frameworks.
                </p>
                <Button asChild>
                  <Link to="/demo">
                    See framework examples
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {complianceAreas.map((area) => (
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
              Everything compliance teams need
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
              <p className="text-sm text-muted-foreground">Structured DPA and privacy review</p>
            </Link>
            <Link to="/platform/drafting" className="group p-6 rounded-xl border border-border bg-background hover:border-foreground/30 transition-all">
              <FileCheck className="h-6 w-6 mb-3" />
              <h3 className="font-semibold mb-2">Drafting</h3>
              <p className="text-sm text-muted-foreground">Generate privacy policies and notices</p>
            </Link>
            <Link to="/platform/research" className="group p-6 rounded-xl border border-border bg-background hover:border-foreground/30 transition-all">
              <Search className="h-6 w-6 mb-3" />
              <h3 className="font-semibold mb-2">Research</h3>
              <p className="text-sm text-muted-foreground">Regulatory compliance research</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to accelerate compliance work?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              See how Specter can help your privacy team review faster, research better, and scale operations.
              Start with a focused pilot on your real DPAs and compliance questions.
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
              Specter provides research support—it does not guarantee compliance. All outputs require professional review.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}



