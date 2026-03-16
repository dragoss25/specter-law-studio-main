import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EtherealShadow } from "@/components/ui/ethereal-shadow";
import { CheckCircle, ArrowRight, PenTool, FileText, RefreshCw, Layout as LayoutIcon, Link2, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    icon: FileText,
    text: "Generate first drafts of clauses and provisions",
  },
  {
    icon: RefreshCw,
    text: "Refine and iterate on existing language",
  },
  {
    icon: PenTool,
    text: "Create structured letters and correspondence",
  },
  {
    icon: LayoutIcon,
    text: "Build templates for repeated use",
  },
  {
    icon: Link2,
    text: "Receive source-linked suggestions",
  },
  {
    icon: Layers,
    text: "Get alternative language options",
  },
];

const scenarios = [
  {
    title: "Standard Clause Generation",
    description: "Generate indemnification, limitation of liability, or confidentiality clauses aligned to your standards.",
    icon: FileText,
  },
  {
    title: "Letter Drafting",
    description: "Draft vendor correspondence, notices, or response letters with professional, consistent language.",
    icon: PenTool,
  },
  {
    title: "Template Refinement",
    description: "Improve existing templates with clearer language and better structure.",
    icon: RefreshCw,
  },
];

const exampleOutput = {
  title: "Sample Indemnification Clause",
  content: `Each party ("Indemnifying Party") shall defend, indemnify, and hold harmless the other party and its officers, directors, employees, and agents ("Indemnified Parties") from and against any third-party claims, damages, losses, and expenses (including reasonable attorneys' fees) arising from:

(a) the Indemnifying Party's breach of this Agreement;
(b) the Indemnifying Party's negligence or willful misconduct; or
(c) any claim that the Indemnifying Party's materials infringe third-party intellectual property rights.

This indemnification obligation is subject to the Indemnified Party: (i) providing prompt written notice of the claim; (ii) granting sole control of the defense; and (iii) providing reasonable cooperation at the Indemnifying Party's expense.`,
};

export default function Drafting() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/80 backdrop-blur-sm mb-8">
              <PenTool className="h-4 w-4" />
              <span className="text-sm font-medium">Drafting</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Generate and refine
              <br />
              <span className="text-muted-foreground">legal language</span>
            </h1>
            
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Draft clauses, letters, and templates with structured assistance—
              then refine with iterative improvements.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
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

      {/* Capabilities */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                Capabilities
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Drafting assistance
              </h2>
              <p className="text-muted-foreground mb-8">
                From first drafts to final polish.
              </p>
              
              <div className="space-y-4">
                {capabilities.map((cap) => (
                  <div 
                    key={cap.text}
                    className="flex items-start gap-4 p-4 rounded-xl border border-border bg-background hover:border-foreground/20 transition-colors"
                  >
                    <div className="flex-shrink-0 h-10 w-10 rounded-lg border border-border flex items-center justify-center bg-surface-subtle">
                      <cap.icon className="h-5 w-5" />
                    </div>
                    <span className="text-muted-foreground pt-2">{cap.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-32">
              <div className="p-8 rounded-2xl border border-border bg-background cortex-glow">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-2 w-2 rounded-full bg-foreground" />
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Draft Output</span>
                </div>
                <h3 className="font-semibold mb-4">{exampleOutput.title}</h3>
                <pre className="text-sm text-muted-foreground whitespace-pre-wrap font-sans leading-relaxed">
                  {exampleOutput.content}
                </pre>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    This is an example. All drafts require professional review.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-24 md:py-32 relative">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Use Cases
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Example scenarios
            </h2>
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

      {/* CTA */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-subtle/20 to-background pointer-events-none" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Start drafting faster
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              See how Cortex can help generate and refine your legal documents.
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
