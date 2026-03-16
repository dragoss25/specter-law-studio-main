import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { EtherealShadow } from "@/components/ui/ethereal-shadow";
import { ArrowRight, BookOpen, CheckCircle, Clock, FileCheck, FileText, RefreshCw, Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { DraftDemo } from "@/components/platform";

const features = [
  {
    icon: Sparkles,
    title: "Intelligent generation",
    description: "AI turns your inputs into complete drafts with legal structure.",
  },
  {
    icon: BookOpen,
    title: "Template library",
    description: "Access validated templates for contracts, requests, memoranda, and more.",
  },
  {
    icon: Shield,
    title: "Compliance-oriented drafting",
    description: "Drafts align with current legal requirements and practical standards.",
  },
  {
    icon: CheckCircle,
    title: "Context adaptation",
    description: "Content adapts to parties, facts, and business/legal purpose.",
  },
  {
    icon: RefreshCw,
    title: "Fast iteration",
    description: "Refine drafts quickly with natural-language instructions.",
  },
  {
    icon: Clock,
    title: "Draft in <30 seconds",
    description: "Reduce manual effort for recurring legal drafting tasks.",
  },
];

const steps = [
  { title: "Choose document type", desc: "Select the right template or category.", icon: FileText },
  { title: "Provide details", desc: "Enter parties, context, and required clauses.", icon: FileCheck },
  { title: "Generate draft", desc: "The system creates a structured legal draft.", icon: Sparkles },
  { title: "Review and export", desc: "Finalize and export to PDF/Word.", icon: CheckCircle },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Drafting() {
  return (
    <Layout>
      {/* Hero (US unchanged) */}
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
              <FileText className="h-4 w-4" />
              <span className="text-sm font-medium">Drafting</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Generate and refine
              <br />
              <span className="text-muted-foreground">legal language</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Draft clauses, letters, and templates with structured assistance, then refine with iterative improvements.
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

      <DraftDemo />

      <section className="py-24 md:py-32">
        <div className="container">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">What document drafting provides</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything your team needs for professional legal drafting.
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {features.map((feature) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 rounded-xl border border-border bg-muted/40 flex items-center justify-center shrink-0">
                      <feature.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">How it works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A clear 4-step flow for reliable legal drafts.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {steps.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-5 mb-4">
                  <div className="h-11 w-11 rounded-xl border border-border bg-muted/40 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
                {index < steps.length - 1 && <div className="ml-6 w-0.5 h-6 bg-border mb-4" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="rounded-3xl border border-border bg-card text-foreground text-center p-10 md:p-14">
            <FileText className="h-12 w-12 mx-auto mb-4 text-foreground" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Create your first draft in under 30 seconds</h2>
            <p className="text-lg mb-8 text-muted-foreground max-w-xl mx-auto">
              Try drafting for free and see how quickly legal documents can be prepared.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://app.specterlaw.us/login">
                  Start free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/demo">Request demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

