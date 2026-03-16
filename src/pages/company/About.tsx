import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { EtherealShadow } from "@/components/ui/ethereal-shadow";
import { ArrowRight, Target, Sparkles, Shield, Users, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// Founders
const founders = [
  {
    name: "Dragos Pisilea",
    role: "CEO & Co-Founder",
    image: "/founders/Dragos.png",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Amir Ajaj",
    role: "CTO & Co-Founder",
    image: "/founders/Amir.png",
    linkedin: "#",
    twitter: "#",
  },
];

// Company milestones - real track record
const milestones = [
  { year: "2024 Q4", event: "Foundation", desc: "Built the first version of Specter for German legal market", position: "top" },
  { year: "2025 Q2", event: "Beta Phase", desc: "Reached 250+ satisfied clients across European markets", position: "bottom" },
  { year: "2025 Q3", event: "Cortex Agent Launch", desc: "Launched advanced multi-step reasoning agent", position: "top" },
  { year: "2026 Q1", event: "US Expansion", desc: "Now accepting pilot programs for US-based enterprises", position: "bottom", flag: true },
];

const values = [
  {
    icon: Target,
    title: "Purpose-Built",
    description: "Every feature designed specifically for legal work. We don't adapt generic tools—we build for the precision legal professionals demand.",
  },
  {
    icon: Sparkles,
    title: "Clarity Over Complexity",
    description: "Structured outputs you can act on. No walls of text—just findings, sources, and next steps organized for decision-making.",
  },
  {
    icon: Shield,
    title: "Trust Through Transparency",
    description: "We show our work. Source citations, uncertainty flags, and clear limitations. Verify before you rely.",
  },
  {
    icon: Users,
    title: "Professional Partnership",
    description: "We complement legal judgment, not replace it. Cortex handles the research so you can focus on the analysis.",
  },
];

const differentiators = [
  {
    title: "Structured Outputs",
    description: "Every analysis follows a consistent format: summary, key findings, risk notes, sources, and next steps. No walls of text—just structured information you can act on.",
  },
  {
    title: "Source Citations",
    description: "Findings are linked to their sources so you can verify independently. We believe in transparency, not trust-me conclusions.",
  },
  {
    title: "Conservative Posture",
    description: "Cortex flags uncertainty when confidence is limited and recommends professional review when needed. We'd rather under-promise than over-claim.",
  },
];

export default function About() {
  return (
    <Layout>
        {/* Hero */}
        <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <EtherealShadow
            color="rgba(40, 40, 40, 0.9)"
            animation={{ scale: 60, speed: 70 }}
            noise={{ opacity: 0.4, scale: 1.5 }}
            sizing="fill"
            className="w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background/70 pointer-events-none -z-10" />
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/80 backdrop-blur-sm mb-8">
              <span className="text-sm font-medium">About Specter</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Legal clarity
              <br />
              <span className="text-muted-foreground">shouldn't be a luxury</span>
            </h1>
            
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Specter exists to make structured legal analysis accessible to 
              every business team that needs it.
            </p>
          </div>
        </div>
      </section>

      {/* Track Record - European success */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">250+</div>
              <div className="text-sm text-muted-foreground">Clients Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Legal Domains</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">93%</div>
              <div className="text-sm text-muted-foreground">Precision Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                OUR MISSION
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Why we built Specter
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Legal teams are stretched thin. Business moves fast, contracts pile up,
                  and the gap between legal capacity and business demand keeps growing.
                </p>
                <p>
                  We built Specter to help bridge that gap—not by replacing legal judgment,
                  but by providing structured analysis that legal professionals and business
                  teams can use together.
                </p>
                <p>
                  The Cortex Agent represents our approach: multi-step reasoning with validation,
                  source-linked outputs you can verify, and transparent uncertainty flags when
                  confidence is limited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders - Combining Legal and AI Expertise */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Combining Legal and AI Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {founders.map((founder) => (
              <div key={founder.name} className="flex flex-col items-center text-center">
                <div className="mb-6 relative">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-64 h-64 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                <p className="text-muted-foreground mb-4">{founder.role}</p>
                <div className="flex gap-3">
                  <a
                    href={founder.linkedin}
                    className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href={founder.twitter}
                    className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                    aria-label="Twitter/X"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Journey */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                OUR JOURNEY
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                From Germany to the US
              </h2>
              <p className="text-lg text-muted-foreground">
                Specter was built and proven in the European legal market, serving 250+ clients with
                professional-grade legal AI.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative py-12">
              {/* Horizontal line */}
              <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-border -z-0" />

              {/* Milestones */}
              <div className="grid grid-cols-4 gap-8 relative">
                {milestones.map((milestone) => (
                  <div key={milestone.year} className="grid grid-rows-[1fr_auto_1fr] items-center text-center min-h-[280px]">
                    <div className={cn(
                      "px-2",
                      milestone.position === "top" ? "row-start-1 pb-8" : "row-start-1 pb-8 opacity-0 pointer-events-none"
                    )}>
                      <div className="bg-background relative z-10 inline-block max-w-[220px]">
                        <div className="text-lg font-bold mb-2">{milestone.year}</div>
                        <div className="font-semibold mb-2 inline-flex items-center gap-2 justify-center">
                          {milestone.flag && (
                            <img
                              src="/flags/us-flag.svg"
                              alt="United States flag"
                              className="h-3 w-auto rounded-sm border border-border"
                            />
                          )}
                          {milestone.event}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{milestone.desc}</p>
                      </div>
                    </div>

                    <div className="row-start-2 flex items-center justify-center z-10">
                      <div className="h-3 w-3 rounded-full bg-foreground border-2 border-background" />
                    </div>

                    <div className={cn(
                      "px-2",
                      milestone.position === "bottom" ? "row-start-3 pt-8" : "row-start-3 pt-8 opacity-0 pointer-events-none"
                    )}>
                      <div className="bg-background relative z-10 inline-block max-w-[220px]">
                        <div className="text-lg font-bold mb-2">{milestone.year}</div>
                        <div className="font-semibold mb-2 inline-flex items-center gap-2 justify-center">
                          {milestone.flag && (
                            <img
                              src="/flags/us-flag.svg"
                              alt="United States flag"
                              className="h-3 w-auto rounded-sm border border-border"
                            />
                          )}
                          {milestone.event}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{milestone.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Our Values
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              What guides us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className={cn(
                  "group relative p-8 rounded-2xl border border-border bg-background",
                  "hover:border-foreground/20 transition-all duration-300"
                )}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl border border-border flex items-center justify-center bg-surface-subtle group-hover:border-foreground/20 transition-colors">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                Our Approach
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                What makes Specter different
              </h2>
            </div>

            <div className="space-y-6">
              {differentiators.map((diff, index) => (
                <div
                  key={diff.title}
                  className="flex items-start gap-6 p-8 rounded-2xl border border-border bg-background hover:border-foreground/20 transition-colors"
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl border border-border flex items-center justify-center bg-surface-subtle font-semibold">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{diff.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* US B2B Focus */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                US Market
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
                Enterprise B2B for the US market
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                We're bringing our proven European model to US enterprises—not just law firms, 
                but every business that faces legal complexity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-border bg-background text-center">
                <div className="font-semibold mb-2">In-House Legal</div>
                <p className="text-sm text-muted-foreground">Contract review, compliance research, policy drafting</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-background text-center">
                <div className="font-semibold mb-2">Real Estate & Property</div>
                <p className="text-sm text-muted-foreground">Lease analysis, property contracts, tenant matters</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-background text-center">
                <div className="font-semibold mb-2">Logistics & Supply Chain</div>
                <p className="text-sm text-muted-foreground">Vendor agreements, liability terms, freight contracts</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-background text-center">
                <div className="font-semibold mb-2">Finance & Banking</div>
                <p className="text-sm text-muted-foreground">Regulatory research, agreement analysis, compliance</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-background text-center">
                <div className="font-semibold mb-2">HR & Employment</div>
                <p className="text-sm text-muted-foreground">Employment contracts, policy questions, terminations</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-background text-center">
                <div className="font-semibold mb-2">Privacy & Compliance</div>
                <p className="text-sm text-muted-foreground">GDPR, CCPA, regulatory requirements, DPAs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12">
        <div className="container">
          <div className="flex items-start gap-4 p-6 rounded-xl border border-border bg-background max-w-3xl mx-auto">
            <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium mb-1">Important Disclaimer</p>
              <p className="text-sm text-muted-foreground">
                Specter is not a law firm and does not provide legal advice. Our tools 
                provide legal information and research support that should be reviewed 
                by qualified legal professionals before relying upon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Let's talk
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We'd love to learn about your legal team's challenges and explore how Specter might help.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo">
                <ShimmerButton
                  variant="primary"
                  className="text-base h-14 px-8 shadow-xl"
                >
                  <span className="flex items-center gap-2 font-medium">
                    Request a Demo
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </ShimmerButton>
              </Link>
              <Link to="/company/contact">
                <ShimmerButton
                  variant="secondary"
                  className="text-base h-14 px-8"
                >
                  <span className="font-medium">Contact Us</span>
                </ShimmerButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-20 lg:hidden" />
    </Layout>
  );
}
