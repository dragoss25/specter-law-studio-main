import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { EtherealShadow } from "@/components/ui/ethereal-shadow";
import { Search, ArrowRight, Database, Globe, Link2, FileText, BarChart, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    icon: Database,
    text: "Search across legal databases",
  },
  {
    icon: Globe,
    text: "AI-powered internet research",
  },
  {
    icon: Link2,
    text: "Source links with every finding",
  },
  {
    icon: FileText,
    text: "Structured research summaries",
  },
  {
    icon: BarChart,
    text: "Confidence indicators on results",
  },
  {
    icon: HelpCircle,
    text: "Follow-up question suggestions",
  },
];

const scenarios = [
  {
    title: "Regulatory Questions",
    description: "Research how specific requirements apply to your business context—with sources to cite and verify.",
    icon: FileText,
  },
  {
    title: "Precedent Lookup",
    description: "Find relevant examples of how terms are typically handled in similar agreements.",
    icon: Database,
  },
  {
    title: "Market Standards",
    description: "Understand common approaches to specific contract provisions across industries.",
    icon: BarChart,
  },
];

const exampleResults = [
  {
    title: "Limitation of Liability in SaaS Agreements",
    source: "Legal Database",
    excerpt: "Market standard caps range from 12-24 months of fees paid, with carve-outs for IP infringement and data breaches...",
  },
  {
    title: "Data Processing Agreement Requirements",
    source: "Regulatory Guidance",
    excerpt: "Standard contractual clauses must include specific provisions for international data transfers under GDPR...",
  },
  {
    title: "Indemnification Best Practices",
    source: "Industry Analysis",
    excerpt: "Mutual indemnification with IP and confidentiality carve-outs is increasingly standard in enterprise agreements...",
  },
];

export default function Research() {
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
              <Search className="h-4 w-4" />
              <span className="text-sm font-medium">Research</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Source-linked
              <br />
              <span className="text-muted-foreground">legal research</span>
            </h1>
            
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Search legal databases and the web—with every finding linked to its source 
              so you can verify and cite with confidence.
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
                Research with sources
              </h2>
              <p className="text-muted-foreground mb-8">
                Every answer comes with links you can verify.
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
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Research Results</span>
                </div>
                <h3 className="font-semibold mb-6">Sample Research Output</h3>
                
                <div className="space-y-4">
                  {exampleResults.map((result, i) => (
                    <div 
                      key={i} 
                      className="p-4 rounded-xl border border-border bg-surface-subtle hover:border-foreground/20 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 h-8 w-8 rounded-lg border border-border flex items-center justify-center bg-background">
                          <Link2 className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{result.title}</p>
                          <p className="text-xs text-muted-foreground mt-1">{result.source}</p>
                          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{result.excerpt}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    Not legal advice. All research requires professional review.
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
              Research faster, cite with confidence
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              See how source-linked research can accelerate your legal work.
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
