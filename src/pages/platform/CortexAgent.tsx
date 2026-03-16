import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { CortexOutputMock } from "@/components/specter";
import { Button } from "@/components/ui/button";
import { EtherealShadow } from "@/components/ui/ethereal-shadow";
import { ArrowRight, Brain, Sparkles, Search, Shield, FileText, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";

const capabilities = [
  {
    icon: Sparkles,
    title: "Multi-step reasoning cycle",
    description: "Breaks complex questions into steps, then validates each step before moving forward.",
  },
  {
    icon: Search,
    title: "Live research across legal sources",
    description: "Searches relevant sources and statutes to surface the right context for your matter.",
  },
  {
    icon: FileText,
    title: "Source-linked citations",
    description: "Every conclusion ties back to cited sources so you can verify with confidence.",
  },
  {
    icon: Shield,
    title: "Uncertainty flags",
    description: "Cortex calls out low-confidence areas and recommends professional review.",
  },
  {
    icon: Target,
    title: "Structured summaries",
    description: "Outputs are organized into findings, risks, and next steps to speed decisions.",
  },
  {
    icon: Brain,
    title: "Next steps and follow-up questions",
    description: "Prompts the review path forward when evidence or policy decisions are needed.",
  },
];

const scenarios = [
  {
    title: "Complex Contract Question",
    description: "Ask Cortex to analyze indemnification language across multiple vendor agreements and identify inconsistencies.",
    icon: FileText,
  },
  {
    title: "Regulatory Uncertainty",
    description: "Research how a new requirement applies to your specific business context, with sources to verify.",
    icon: Shield,
  },
  {
    title: "Cross-Document Comparison",
    description: "Compare limitation of liability terms across your standard templates and vendor paper.",
    icon: Target,
  },
];

export default function CortexAgent() {
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
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/80 backdrop-blur-sm mb-8 animate-fade-in">
              <Brain className="h-4 w-4" />
              <span className="text-sm font-medium">Cortex Agent</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Multi-step reasoning
              <br />
              <span className="text-muted-foreground">with source-linked outputs</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Cortex doesn't guess. It researches, validates, and structures every finding—
              with links to sources so you can verify before you act.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" asChild>
                <Link to="/demo">
                  Request a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pilot">Start a Pilot</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities & Process */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Capabilities
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What Cortex does
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A reasoning engine that validates findings before delivering results.
            </p>
          </div>

          <FeaturesSectionWithHoverEffects
            features={capabilities.map((cap) => ({
              title: cap.title,
              description: cap.description,
              icon: cap.icon,
            }))}
          />
        </div>
      </section>

      {/* Brand Pillar - How it works */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                How it works
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                A transparent reasoning flow
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Cortex follows a disciplined path: intake, research, validation, and structured delivery.
                Each stage is designed to make legal work easier to verify and safer to act on.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { step: "01", title: "Intake", description: "Understand context, objectives, and constraints." },
                  { step: "02", title: "Research", description: "Locate relevant sources and supporting authority." },
                  { step: "03", title: "Validate", description: "Cross-check findings and apply guardrails." },
                  { step: "04", title: "Deliver", description: "Structure results with citations and next steps." },
                ].map((item) => (
                  <div key={item.step} className="rounded-xl border border-border bg-background p-4">
                    <div className="text-xs text-muted-foreground">{item.step}</div>
                    <div className="font-semibold mt-2">{item.title}</div>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <DatabaseWithRestApi
                className="max-w-[460px]"
                circleIcon={<Brain className="h-5 w-5 text-white" />}
                title="Evidence moves in one direction"
                badgeTexts={{ first: "INTAKE", second: "RESEARCH", third: "VALIDATE", fourth: "DELIVER" }}
                buttonTexts={{ first: "Review-ready", second: "Audit trail" }}
                lightColor="#A4A4A4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-subtle/30 via-surface-subtle/20 to-background pointer-events-none" />
        <div className="container relative">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Use Cases
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              When to use Cortex
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Best for complex questions where you need verified, structured answers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {scenarios.map((scenario) => (
              <div 
                key={scenario.title}
                className={cn(
                  "group p-6 rounded-2xl border border-border bg-background",
                  "hover:border-foreground/20 transition-all duration-300"
                )}
              >
                <div className="h-12 w-12 rounded-xl border border-border flex items-center justify-center bg-surface-subtle mb-5 group-hover:border-foreground/20 transition-colors">
                  <scenario.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{scenario.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {scenario.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Output */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
        <div className="container relative">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Example
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Sample Cortex output
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Structured findings with sources—verify before you rely.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <CortexOutputMock />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-subtle/20 to-background pointer-events-none" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Experience Cortex
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              See how multi-step reasoning delivers structured, verifiable outputs.
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
