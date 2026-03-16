import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { EtherealShadow } from "@/components/ui/ethereal-shadow";
import { AlertTriangle, ArrowRight, BookOpen, Brain, CheckCircle, FileSearch, Gavel, Scale, Shield, Target, TrendingUp, Users } from "lucide-react";
import { CaseRelevanceDemo } from "@/components/platform";

const features = [
  {
    icon: FileSearch,
    title: "Fact structuring",
    description: "Automatically identifies facts, parties, deadlines, and relevant documents.",
  },
  {
    icon: Scale,
    title: "Legal issue detection",
    description: "Identifies core legal questions and applicable regulations.",
  },
  {
    icon: Target,
    title: "Outcome assessment",
    description: "Estimates legal prospects using comparable case patterns.",
  },
  {
    icon: AlertTriangle,
    title: "Risk highlighting",
    description: "Flags deadlines, weak arguments, and possible counterpositions.",
  },
  {
    icon: TrendingUp,
    title: "Strategy guidance",
    description: "Provides concrete options with priority ordering.",
  },
  {
    icon: CheckCircle,
    title: "Next-step checklist",
    description: "Action list for documents, deadlines, and execution.",
  },
];

const steps = [
  { title: "Upload materials", desc: "Provide files, contracts, and correspondence.", icon: FileSearch },
  { title: "Automated analysis", desc: "AI extracts facts and structures case context.", icon: Brain },
  { title: "Legal validation", desc: "Regulations and case law are matched to the matter.", icon: Scale },
  { title: "Report and strategy", desc: "Receive risk profile and recommended actions.", icon: CheckCircle },
];

const benefits = [
  { title: "Higher efficiency", desc: "Less manual research per case." },
  { title: "Consistent quality", desc: "Comparable output across matters." },
  { title: "Team-ready", desc: "Results can be shared immediately." },
  { title: "Learning workflow", desc: "Continuous improvement through use." },
];

const riskSolutions = [
  { risk: "Lost time", solution: "Complete analysis in minutes" },
  { risk: "Missed details", solution: "Systematic review of all key dimensions" },
  { risk: "Subjective judgment", solution: "Data-grounded, traceable evaluation" },
  { risk: "Incomplete review", solution: "Standardized structure per matter" },
];

const domains = ["Civil law", "Family law", "Commercial law", "Criminal law", "Financial law", "Labor law"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CaseAnalysis() {
  return (
    <Layout>
      {/* Hero (reused from previous /platform page) */}
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
              <Gavel className="h-4 w-4" />
              <span className="text-sm font-medium">Case Analysis</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              One integrated platform
            </h1>

            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Everything your team needs for legal research, document analysis, and drafting.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="outline" asChild>
                <Link to="/demo">
                  Explore Case Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CaseRelevanceDemo />

      <section className="py-24 md:py-32">
        <div className="container">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">What case analysis includes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multi-dimensional review for informed legal decisions.
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
              A 4-step process for complete case evaluation.
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

      <section className="py-24 md:py-32">
        <div className="container">
          <motion.div className="max-w-3xl mx-auto text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Works across legal domains</h2>
            <p className="text-lg text-muted-foreground mb-10">
              From civil to labor law, analysis adapts to facts and prioritizes the most relevant legal dimensions.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {domains.map((label, index) => {
                const icons = [Scale, Users, FileSearch, Shield, TrendingUp, BookOpen];
                const Icon = icons[index] || Scale;
                return (
                  <div key={label} className="flex flex-col items-center gap-2">
                    <div className="h-12 w-12 rounded-2xl bg-background border border-border flex items-center justify-center">
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground">{label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container">
          <motion.div className="max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">Why teams use Case Analysis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {benefits.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle className="h-5 w-5 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold">{item.title}</span>
                    <span className="text-muted-foreground"> - {item.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Risks of manual case assessment</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">And how Specter reduces those risks.</p>
          </motion.div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div className="flex flex-col items-center" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                <div className="relative w-72 h-72">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(0 0% 20%)" strokeWidth="18" strokeDasharray="62.83 188.5" strokeDashoffset="0" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(0 0% 35%)" strokeWidth="18" strokeDasharray="62.83 188.5" strokeDashoffset="-62.83" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(0 0% 50%)" strokeWidth="18" strokeDasharray="62.83 188.5" strokeDashoffset="-125.66" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(0 0% 65%)" strokeWidth="18" strokeDasharray="62.83 188.5" strokeDashoffset="-188.49" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold">4</div>
                      <div className="text-sm text-muted-foreground">Risks</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-bold mb-6">With Specter, each risk is handled systematically</h3>
                <div className="space-y-5">
                  {riskSolutions.map((item, index) => (
                    <motion.div
                      key={item.risk}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle className="h-6 w-6 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-muted-foreground line-through">{item.risk}</span>
                        <span className="text-muted-foreground mx-2">-&gt;</span>
                        <span className="font-medium">{item.solution}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 flex justify-center lg:justify-start">
                  <Button size="lg" asChild>
                    <Link to="/demo">
                      Start now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="rounded-3xl border border-border bg-card text-foreground text-center p-10 md:p-14">
            <FileSearch className="h-12 w-12 mx-auto mb-4 text-foreground" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Reach reliable case assessments faster</h2>
            <p className="text-lg mb-8 text-muted-foreground max-w-xl mx-auto">
              Try Case Analysis and compare quality and speed in your own workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild>
                <Link to="/demo">
                  Request tailored demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://app.specterlaw.us/login">Try for free</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

