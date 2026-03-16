import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { CortexOutputMock } from "@/components/specter";
import { Button } from "@/components/ui/button";
import { EtherealShadow } from "@/components/ui/ethereal-shadow";
import { CheckCircle, ArrowRight, FileText, Upload, FileSearch, AlertTriangle, Link2, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    icon: Upload,
    text: "Upload or paste document text for analysis",
  },
  {
    icon: FileText,
    text: "Receive structured summary of key terms",
  },
  {
    icon: FileSearch,
    text: "Get categorized findings by topic",
  },
  {
    icon: AlertTriangle,
    text: "Review risk notes with uncertainty flags",
  },
  {
    icon: Link2,
    text: "Access linked source citations",
  },
  {
    icon: HelpCircle,
    text: "Generate follow-up questions",
  },
];

const scenarios = [
  {
    title: "Vendor Agreement Review",
    description: "Get a structured breakdown of key clauses, obligations, and potential risks—ready to share with stakeholders.",
    icon: FileText,
  },
  {
    title: "DPA Analysis",
    description: "Identify data handling terms, subprocessor requirements, and open questions in data processing agreements.",
    icon: FileSearch,
  },
  {
    title: "Contract Comparison",
    description: "Analyze how a new agreement differs from your standard terms. Spot deviations quickly.",
    icon: AlertTriangle,
  },
];

export default function DocumentAnalysis() {
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
              <FileText className="h-4 w-4" />
              <span className="text-sm font-medium">Document Analysis</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Structured analysis
              <br />
              <span className="text-muted-foreground">with source citations</span>
            </h1>
            
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Get summaries, key findings, and risk notes from your legal documents—
              with every point linked to its source.
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
                What you receive
              </h2>
              <p className="text-muted-foreground mb-8">
                Every document analysis includes structured outputs you can verify.
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
              <CortexOutputMock />
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

          <p className="text-sm text-muted-foreground text-center mt-12">
            Not legal advice. All outputs require professional review.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-subtle/20 to-background pointer-events-none" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Analyze your first document
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              See how structured analysis can accelerate your document review workflow.
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
