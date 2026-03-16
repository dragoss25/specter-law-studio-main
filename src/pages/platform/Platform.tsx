import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { CortexOutputMock } from "@/components/specter";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { EtherealShadow } from "@/components/ui/ethereal-shadow";
import { Brain, FileText, PenTool, Search, ArrowRight, Layers, Shield, Clock, Users, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Enterprise advantages - Harvey.ai inspired
const enterpriseAdvantages = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Your data is protected with industry-standard security. Zero training on your data.",
  },
  {
    icon: Brain,
    title: "Domain-Specific Intelligence",
    description: "High-performing models built specifically for complex legal work.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Always-on support to resolve issues and maximize your Specter experience.",
  },
  {
    icon: Users,
    title: "Dedicated Pilots",
    description: "White-glove onboarding with defined scope and measurable outcomes.",
  },
];

const modules = [
  {
    icon: Brain,
    title: "Cortex Agent",
    description: "The reasoning engine at the heart of Specter. Multi-step analysis with validation loops, source-linked outputs, and uncertainty flagging.",
    href: "/platform/cortex-agent",
    primary: true,
    features: ["Multi-step reasoning", "Source citations", "Uncertainty flags"],
  },
  {
    icon: FileText,
    title: "Document Analysis",
    description: "Upload contracts and receive structured summaries, key findings, and risk notes—all with linked sources for verification.",
    href: "/platform/document-analysis",
    features: ["Structured summaries", "Risk identification", "Source linking"],
  },
  {
    icon: PenTool,
    title: "Drafting",
    description: "Generate and refine clauses, letters, and templates with consistent, professional language aligned to your standards.",
    href: "/platform/drafting",
    features: ["Clause generation", "Template building", "Iterative refinement"],
  },
  {
    icon: Search,
    title: "Research",
    description: "Search legal databases and the web with every finding linked to its source—verify and cite with confidence.",
    href: "/platform/research",
    features: ["Database search", "Web research", "Citation linking"],
  },
];

export default function Platform() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/80 backdrop-blur-sm mb-8 animate-fade-in">
              <Layers className="h-4 w-4" />
              <span className="text-sm font-medium">Platform</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Built around the
              <br />
              <span className="text-muted-foreground">Cortex Agent</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Specter delivers structured legal intelligence through multi-step reasoning,
              source-linked research, and transparent outputs.
            </p>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Core Capabilities
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Four integrated modules
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {modules.map((module) => (
              <Link key={module.href} to={module.href}>
                <div 
                  className={cn(
                    "group h-full p-8 rounded-2xl border bg-background transition-all duration-300",
                    "hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.02)]",
                    module.primary 
                      ? "border-foreground hover:border-foreground" 
                      : "border-border hover:border-foreground/20"
                  )}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div 
                      className={cn(
                        "h-14 w-14 rounded-xl flex items-center justify-center transition-colors",
                        module.primary 
                          ? "bg-foreground text-background" 
                          : "border border-border bg-surface-subtle group-hover:border-foreground/20"
                      )}
                    >
                      <module.icon className="h-6 w-6" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{module.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {module.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {module.features.map((feature) => (
                      <span 
                        key={feature}
                        className="text-xs px-3 py-1 rounded-full border border-border bg-surface-subtle"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {module.primary && (
                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        The core of Specter's intelligence
                      </p>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Advantages - Harvey.ai inspired */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-subtle/50 via-surface-subtle/30 to-background pointer-events-none" />
        <div className="container relative">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Enterprise Ready
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Making legal easier for your organization
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for the standards enterprise legal teams demand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {enterpriseAdvantages.map((advantage) => (
              <div key={advantage.title} className="p-6 rounded-xl border border-border bg-background">
                <div className="h-10 w-10 rounded-lg border border-border flex items-center justify-center mb-4">
                  <advantage.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold mb-2">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Output */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-surface-subtle/30 pointer-events-none" />
        <div className="container relative">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Example
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Cortex Report
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Every analysis includes structured outputs with linked sources—verify before you rely.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <CortexOutputMock />
          </div>
        </div>
      </section>

      {/* Use Cases Summary */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-subtle/30 via-surface-subtle/20 to-background pointer-events-none" />
        <div className="container relative">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Use Cases
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What you can do with Specter
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-border bg-background">
                <h3 className="font-semibold mb-3">Contract Review</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Identify key terms and risks</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Extract renewal dates and deadlines</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Compare against standard templates</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border border-border bg-background">
                <h3 className="font-semibold mb-3">Legal Research</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Research regulatory requirements</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Get source-linked citations</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Multi-jurisdiction analysis</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border border-border bg-background">
                <h3 className="font-semibold mb-3">Document Drafting</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Generate first drafts</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Create templates and clauses</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Iterative refinement</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border border-border bg-background">
                <h3 className="font-semibold mb-3">Compliance Support</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> GDPR and CCPA research</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Policy gap analysis</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Regulatory monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-subtle/20 to-background pointer-events-none" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ready to see Cortex in action?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Request a demo to see how Specter can support your legal team.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
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
    </Layout>
  );
}


