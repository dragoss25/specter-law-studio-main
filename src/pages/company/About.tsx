import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { EtherealShadow } from "@/components/ui/ethereal-shadow";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  Check,
  Shield,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const founders = [
  {
    name: "Dragos Pisilea",
    role: "CEO & Co-Founder",
    image: "/founders/dragos3.png",
    imagePosition: "50% 18%",
    imageScale: 1.11,
    linkedin: "https://www.linkedin.com/in/dragos-andrei-pisilea-aa1572164",
  },
  {
    name: "Amir Ajaj",
    role: "CTO & Co-Founder",
    image: "/founders/amir2.png",
    imagePosition: "50% 17%",
    imageScale: 1,
    linkedin: "https://www.linkedin.com/in/amir-ajaj/",
  },
];

const milestones = [
  { year: "2024 Q4", event: "Foundation", desc: "Built the first version of Specter for German legal market", position: "top" },
  { year: "2025 Q2", event: "Beta Phase", desc: "Reached 250+ satisfied clients across European markets", position: "bottom" },
  { year: "2025 Q3", event: "Cortex Agent Launch", desc: "Launched advanced multi-step reasoning agent", position: "top" },
  { year: "2026 Q1", event: "US Expansion", desc: "Now accepting pilot programs for US-based enterprises", position: "bottom", flag: true },
] as const;

const values = [
  {
    icon: Target,
    title: "Purpose-Built",
    description: "Every feature designed specifically for legal work. We do not adapt generic tools - we build for the precision legal professionals demand.",
  },
  {
    icon: Sparkles,
    title: "Clarity Over Complexity",
    description: "Structured outputs you can act on. No walls of text - just findings, sources, and next steps organized for decision-making.",
  },
  {
    icon: Shield,
    title: "Trust Through Transparency",
    description: "We show our work. Source citations, uncertainty flags, and clear limitations. Verify before you rely.",
  },
  {
    icon: Users,
    title: "Professional Partnership",
    description: "We complement legal judgment, not replace it. Cortex handles research so your team can focus on analysis.",
  },
];

const audienceCards = [
  {
    title: "In-House Legal",
    description: "Handle contracts, policy updates, and compliance requests with structured legal support.",
    accent: "hsl(var(--primary))",
  },
  {
    title: "Law Firms",
    description: "Accelerate research and draft preparation while preserving professional legal judgment.",
    accent: "hsl(var(--primary))",
  },
  {
    title: "Business Teams",
    description: "Get faster legal clarity for operational decisions while staying aligned with legal review.",
    accent: "hsl(var(--destructive))",
  },
];

const capabilityRows = [
  { feature: "Source-linked citations", specter: true, generalAi: false },
  { feature: "Structured legal outputs", specter: true, generalAi: false },
  { feature: "Multi-step validation flow", specter: true, generalAi: false },
  { feature: "Uncertainty signaling", specter: true, generalAi: false },
  { feature: "Legal workflow orientation", specter: true, generalAi: false },
];

const performanceData = [
  { name: "Cortex Agent", percentage: 2, color: "bg-primary" },
  { name: "GPT-5", percentage: 48, color: "bg-yellow-500" },
  { name: "DeepSeek", percentage: 75, color: "bg-orange-500" },
  { name: "Llama", percentage: 86, color: "bg-red-500" },
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/80 backdrop-blur-sm mb-8">
                <span className="text-sm font-medium">About Specter</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Legal clarity
                <br />
                <span className="text-muted-foreground">should not be a luxury</span>
              </h1>

              <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Specter exists to make structured legal analysis accessible to
                every business team that needs it.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src="/logos/americanspecterlogo.png"
                alt="Specter logo"
                className="w-full h-auto max-w-[340px] md:max-w-[420px]"
                width={420}
                height={420}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Track Record */}
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

      {/* Mission Split */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
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
                    We built Specter to help bridge that gap - not by replacing legal judgment,
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

              <div className="space-y-4">
                {audienceCards.map((item) => (
                  <div
                    key={item.title}
                    className="p-6 rounded-xl border border-border border-l-4 bg-background"
                    style={{ borderLeftColor: item.accent }}
                  >
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
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
                  <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border border-border/70 bg-muted/20">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                      width={256}
                      height={256}
                      loading="lazy"
                      decoding="async"
                      style={{
                        objectPosition: founder.imagePosition,
                        transform: `scale(${founder.imageScale ?? 1})`,
                      }}
                    />
                  </div>
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

            <div className="relative py-12">
              <div className="md:hidden relative max-h-[70vh] overflow-y-auto snap-y snap-mandatory pr-1">
                <div className="absolute left-[0.65rem] top-0 bottom-0 w-px bg-border" />
                <div className="space-y-6">
                  {milestones.map((milestone) => (
                    <article key={`mobile-${milestone.year}`} className="snap-start relative pl-8">
                      <div className="absolute left-0 top-6 h-3 w-3 rounded-full border-2 border-background bg-foreground" />
                      <div className="rounded-xl border border-border bg-background p-4">
                        <div className="text-sm font-semibold text-muted-foreground">{milestone.year}</div>
                        <div className="mt-1 font-semibold inline-flex items-center gap-2">
                          {milestone.flag && (
                            <img
                              src="/flags/us-flag.svg"
                              alt="United States flag"
                              className="h-3 w-auto rounded-sm border border-border"
                              width={18}
                              height={12}
                              loading="lazy"
                              decoding="async"
                            />
                          )}
                          {milestone.event}
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{milestone.desc}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="hidden md:block">
                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-border -z-0" />
                <div className="grid grid-cols-4 gap-8 relative">
                  {milestones.map((milestone) => (
                    <div key={milestone.year} className="grid grid-rows-[1fr_auto_1fr] items-center text-center min-h-[280px]">
                      <div
                        className={cn(
                          "px-2",
                          milestone.position === "top" ? "row-start-1 pb-8" : "row-start-1 pb-8 opacity-0 pointer-events-none"
                        )}
                      >
                        <div className="bg-background relative z-10 inline-block max-w-[220px]">
                          <div className="text-lg font-bold mb-2">{milestone.year}</div>
                          <div className="font-semibold mb-2 inline-flex items-center gap-2 justify-center">
                            {milestone.flag && (
                              <img
                                src="/flags/us-flag.svg"
                                alt="United States flag"
                                className="h-3 w-auto rounded-sm border border-border"
                                width={18}
                                height={12}
                                loading="lazy"
                                decoding="async"
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

                      <div
                        className={cn(
                          "px-2",
                          milestone.position === "bottom" ? "row-start-3 pt-8" : "row-start-3 pt-8 opacity-0 pointer-events-none"
                        )}
                      >
                        <div className="bg-background relative z-10 inline-block max-w-[220px]">
                          <div className="text-lg font-bold mb-2">{milestone.year}</div>
                          <div className="font-semibold mb-2 inline-flex items-center gap-2 justify-center">
                            {milestone.flag && (
                              <img
                                src="/flags/us-flag.svg"
                                alt="United States flag"
                                className="h-3 w-auto rounded-sm border border-border"
                                width={18}
                                height={12}
                                loading="lazy"
                                decoding="async"
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
        </div>
      </section>

      {/* Capability Matrix + Error Rate */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                OUR APPROACH
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Why teams choose Specter
              </h2>
              <p className="text-lg text-muted-foreground">
                Capability-level comparison focused on legal workflow reliability.
              </p>
            </div>

            <div className="md:hidden space-y-3">
              {capabilityRows.map((row) => (
                <div key={row.feature} className="rounded-xl border border-border bg-background p-4">
                  <p className="font-medium mb-3">{row.feature}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-border bg-muted/20 px-3 py-2 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Specter</span>
                      {row.specter ? (
                        <Check className="h-4 w-4 text-foreground" aria-label="Supported by Specter" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground" aria-label="Not supported by Specter" />
                      )}
                    </div>
                    <div className="rounded-lg border border-border bg-muted/20 px-3 py-2 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">General AI</span>
                      {row.generalAi ? (
                        <Check className="h-4 w-4 text-muted-foreground" aria-label="Supported by general AI" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground" aria-label="Not supported by general AI" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden md:block rounded-2xl border border-border bg-background overflow-x-auto">
              <table className="w-full min-w-[560px]">
                <thead className="bg-muted/20 border-b border-border">
                  <tr>
                    <th scope="col" className="px-5 py-4 text-left font-semibold">
                      Capability
                    </th>
                    <th scope="col" className="px-5 py-4 text-center font-semibold">
                      Specter
                    </th>
                    <th scope="col" className="px-5 py-4 text-center font-semibold">
                      General AI
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {capabilityRows.map((row) => (
                    <tr key={row.feature} className="border-b border-border/60 last:border-b-0">
                      <td className="px-5 py-4 text-sm">{row.feature}</td>
                      <td className="px-5 py-4 text-center">
                        {row.specter ? (
                          <Check className="h-5 w-5 mx-auto text-foreground" aria-label="Supported by Specter" />
                        ) : (
                          <X className="h-5 w-5 mx-auto text-muted-foreground" aria-label="Not supported by Specter" />
                        )}
                      </td>
                      <td className="px-5 py-4 text-center">
                        {row.generalAi ? (
                          <Check className="h-5 w-5 mx-auto text-muted-foreground" aria-label="Supported by general AI" />
                        ) : (
                          <X className="h-5 w-5 mx-auto text-muted-foreground" aria-label="Not supported by general AI" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <motion.div
              className="mt-10 p-6 md:p-8 rounded-2xl border border-border bg-background"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-foreground text-center mb-2">
                Error rate on legal answers
              </h3>
              <p className="text-muted-foreground text-center text-sm mb-8">
                Lower is better. Based on 400 evaluated legal cases.
              </p>

              <div className="space-y-4">
                {performanceData.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-28 text-sm font-medium text-foreground">{item.name}</div>
                    <div className="flex-1 h-8 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${item.color} rounded-full flex items-center justify-end pr-3`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                      >
                        {item.percentage > 10 && <span className="text-white text-sm font-semibold">{item.percentage}%</span>}
                      </motion.div>
                    </div>
                    {item.percentage <= 10 && <span className="text-sm font-semibold text-foreground">{item.percentage}%</span>}
                  </motion.div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground text-center mt-6">
                * Based on an internal benchmark with 400 civil, commercial, and labor-law cases.{" "}
                <Link to="/trust" className="text-primary hover:underline underline-offset-2">
                  Learn more about methodology
                </Link>
              </p>
            </motion.div>
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
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
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
              We would love to learn about your legal team's challenges and explore how Specter might help.
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
              <Link to="/company/contact">
                <ShimmerButton variant="secondary" className="text-base h-14 px-8">
                  <span className="font-medium">Contact Us</span>
                </ShimmerButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}


