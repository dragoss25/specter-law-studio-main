import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { EtherealShadow } from "@/components/ui/ethereal-shadow";
import { AlertTriangle, ArrowRight, CheckCircle, Eye, FileSearch, Search, Shield, Target, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { AnalysisDemo } from "@/components/platform";

const features = [
  {
    icon: Search,
    title: "Complete contract analysis",
    description: "Identifies clauses, missing provisions, and structural weaknesses.",
  },
  {
    icon: AlertTriangle,
    title: "Early risk detection",
    description: "Finds critical wording, contradictions, and interpretation risk points.",
  },
  {
    icon: Shield,
    title: "Compliance checks",
    description: "Compares terms against relevant legal requirements and standards.",
  },
  {
    icon: Target,
    title: "Contract balance review",
    description: "Highlights one-sided terms and negotiation opportunities.",
  },
  {
    icon: TrendingUp,
    title: "Market benchmarking",
    description: "Compares clauses against common market wording and deviations.",
  },
  {
    icon: CheckCircle,
    title: "Actionable recommendations",
    description: "Provides practical suggestions to revise or strengthen contract language.",
  },
];

const steps = [
  { title: "Upload document", desc: "Supports PDF, Word, and other common formats.", icon: FileSearch },
  { title: "Extract structure", desc: "AI segments clauses, parties, and legally relevant content.", icon: Search },
  { title: "Run multi-stage checks", desc: "Risks, inconsistencies, and compliance issues are reviewed.", icon: Eye },
  { title: "Get report", desc: "Receive prioritized risks and improvement recommendations.", icon: CheckCircle },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function DocumentAnalysis() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/80 backdrop-blur-sm mb-8 animate-fade-in">
              <FileSearch className="h-4 w-4" />
              <span className="text-sm font-medium">Document Analysis</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Structured analysis
              <br />
              <span className="text-muted-foreground">with source citations</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Get summaries, key findings, and risk notes from your legal documents with every point linked to its
              source.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
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

      <AnalysisDemo />

      <section className="py-24 md:py-32">
        <div className="container">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">What the system analyzes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multi-stage review for reliable legal document assessment.
            </p>
          </motion.div>

          <div className="md:hidden -mx-4 px-4 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max gap-4 pb-1">
              {features.map((feature) => (
                <motion.div key={feature.title} variants={itemVariants} className="snap-start shrink-0 w-[84vw] max-w-[320px]">
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
            </div>
          </div>

          <motion.div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
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
              A clear 4-step process for structured document analysis.
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
            <FileSearch className="h-12 w-12 mx-auto mb-4 text-foreground" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Protect your team from legal risk</h2>
            <p className="text-lg mb-8 text-muted-foreground max-w-xl mx-auto">
              Analyze your first document for free and immediately surface critical clauses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

