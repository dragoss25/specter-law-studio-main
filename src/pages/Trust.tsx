import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { EtherealShadow } from "@/components/ui/ethereal-shadow";
import { Shield, Lock, Eye, FileCheck, Mail, CheckCircle, ArrowRight, Radar, Layers, KeyRound } from "lucide-react";
import { cn } from "@/lib/utils";

const principles = [
  {
    icon: Shield,
    title: "Privacy-First Architecture",
    description: "We design for data minimization, isolation, and control. Only the information required to deliver results is processed.",
    features: ["No training on client data", "Configurable retention policies", "Client-controlled deletion workflows"],
  },
  {
    icon: Lock,
    title: "Enterprise-Grade Security",
    description: "Defense in depth with encryption, access controls, and continuous monitoring across the stack.",
    features: ["Encryption at rest and in transit", "Rate limiting and abuse protection", "Continuous vulnerability testing"],
  },
  {
    icon: Eye,
    title: "Transparent Outputs",
    description: "Every Cortex finding links to its source. Outputs are explainable and independently verifiable.",
    features: ["Source citations in every report", "Confidence scoring", "Reasoning trace available"],
  },
  {
    icon: Radar,
    title: "Continuous Monitoring",
    description: "Security is an active program with ongoing detection, alerting, and response.",
    features: ["24/7 attack analysis", "Automated alerting and response", "Audit trails for every event"],
  },
];

const commitments = [
  { title: "No data training", description: "Your documents and queries are never used to train our models" },
  { title: "Minimal retention", description: "Configurable data retention aligned with your policies" },
  { title: "Access controls", description: "Role-based access and audit trails for every interaction" },
  { title: "Security operations", description: "Ongoing monitoring, testing, and incident response readiness" },
  { title: "Governance and accountability", description: "Documented security policies, reviews, and risk management" },
  { title: "Clear boundaries", description: "We tell you what we cannot do as clearly as what we can" },
];

export default function Trust() {
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
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Security & Trust</span>
            </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Trust is engineered,
                <br />
                <span className="text-muted-foreground">not assumed</span>
              </h1>

              <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Specter is built for professional legal work. We combine enterprise-grade infrastructure,
                strict data controls, continuous monitoring, and verification workflows to protect every matter.
              </p>
              <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-background/80 text-sm text-muted-foreground">
                <img
                  src="/flags/us-flag.svg"
                  alt="United States flag"
                  className="h-3.5 w-auto rounded-sm border border-border"
                />
                Built for US enterprise expectations
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/company/contact">
                    Discuss Security Requirements
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
      </section>

        {/* Trust Principles */}
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="text-center mb-16">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                Core Principles
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                How we protect your work
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className={cn(
                    "group relative p-8 rounded-2xl border border-border bg-background",
                    "hover:border-foreground/20 transition-all duration-300",
                    "hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.02)]"
                  )}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 h-14 w-14 rounded-xl border border-border flex items-center justify-center bg-surface-subtle group-hover:border-foreground/20 transition-colors">
                      <principle.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">{principle.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {principle.description}
                      </p>
                      <ul className="space-y-2">
                        {principle.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 flex-shrink-0 text-foreground/60" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Layers */}
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="text-center mb-16">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                Security Layers
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Protection across the stack
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Layers,
                  title: "Infrastructure safeguards",
                  description:
                    "Secure hosting, database, and network controls hardened for legal workflows and sensitive data.",
                },
                {
                  icon: KeyRound,
                  title: "Identity and access",
                  description:
                    "Role-based permissions, scoped tokens, and audit logs for every access path and document interaction.",
                },
                {
                  icon: FileCheck,
                  title: "Model governance",
                  description:
                    "Input and output filtering, validation checks, and safeguards that keep outputs reliable.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl border border-border bg-background hover:border-foreground/20 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-lg border border-border flex items-center justify-center bg-surface-subtle">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Commitments */}
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  Our Commitments
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  What you can count on
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Security is a foundation. These commitments guide every decision we make about how Specter
                  handles your data and delivers results.
                </p>
              </div>

              <div className="grid gap-4">
                {commitments.map((commitment, index) => (
                  <div
                    key={commitment.title}
                    className="flex items-start gap-4 p-6 rounded-xl border border-border bg-background hover:border-foreground/20 transition-colors"
                  >
                    <div className="flex-shrink-0 h-10 w-10 rounded-lg border border-border flex items-center justify-center bg-surface-subtle font-semibold text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{commitment.title}</h3>
                      <p className="text-sm text-muted-foreground">{commitment.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Data Handling */}
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  Enterprise Engagement
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Tailored to your requirements
                </h2>
              </div>

              <div className="space-y-6">
                <div className="p-8 rounded-2xl border border-border bg-background">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl border border-border flex items-center justify-center bg-surface-subtle">
                      <Lock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Enterprise Onboarding</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Detailed data handling, security, and privacy terms are discussed and documented
                        as part of enterprise onboarding. We work with your security and legal teams to
                        address specific requirements -- DPAs, security questionnaires, compliance reviews,
                        and tailored retention or residency needs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-2xl border border-border bg-background">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl border border-border flex items-center justify-center bg-surface-subtle">
                      <FileCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Pilot Program</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        During pilots, we establish clear data handling parameters and scope before
                        any documents are processed. This includes access controls, retention limits, and
                        reporting expectations so your team has full visibility from day one.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                Important Notice
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
                Not legal advice
              </h2>
              <div className="p-8 rounded-2xl border border-border bg-background">
                <p className="text-muted-foreground leading-relaxed">
                  Specter is not a law firm and does not provide legal advice. The information
                  and outputs provided are for informational purposes only and should not be
                  construed as legal counsel. Always consult with qualified legal professionals
                  for legal matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center rounded-2xl border border-border bg-background/90 backdrop-blur-sm p-10">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Security questions?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Our team is happy to discuss security and data handling requirements in detail.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-background">
                  <Mail className="h-5 w-5" />
                  <span className="font-medium">security@specterlaw.us</span>
                </div>
                <Button size="lg" asChild>
                  <Link to="/company/contact">Contact Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

      <div className="h-20 lg:hidden" />
    </Layout>
  );
}
