import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { EtherealShadow } from "@/components/ui/ethereal-shadow";
import { BookOpen, CheckCircle, ChevronLeft, ChevronRight, Database, FileText, Filter, Scale, Search, Target, TrendingUp, Zap, ArrowRight } from "lucide-react";
import { LegalNetwork, ResearchDemo } from "@/components/platform";

const features = [
  { icon: Database, title: "Laws and regulations", description: "Current US and international legal sources in one place." },
  { icon: Scale, title: "Broad case-law coverage", description: "Court decisions across long time spans with structured search." },
  { icon: BookOpen, title: "Commentary context", description: "Additional interpretive perspective for stronger argumentation." },
  { icon: Search, title: "Semantic search", description: "Understands meaning and context, not just keywords." },
  { icon: Filter, title: "Smart filtering", description: "Filter by court, date, legal domain, relevance, and more." },
  { icon: TrendingUp, title: "Trend monitoring", description: "Track how case law and legal practice evolve over time." },
];

const searchCapabilities = [
  {
    title: "Natural-language search",
    description: "Ask legal questions directly and receive structured, relevant results.",
    icon: Search,
    example: "What rights does a tenant have after termination?",
  },
  {
    title: "Similarity search",
    description: "Find comparable cases without relying on identical terms.",
    icon: Target,
    example: "Immediate termination cases from the last 3 years",
  },
  {
    title: "Cross-reference tracing",
    description: "Automatically surface links between statutes and related case law.",
    icon: FileText,
    example: "Section updates and relevant decisions",
  },
  {
    title: "Norm status validation",
    description: "Check whether a legal provision is active, amended, or repealed.",
    icon: CheckCircle,
    example: "Current status and latest changes",
  },
];

const useCases = [
  { title: "Case preparation", description: "Secure relevant legal sources quickly for the matter at hand.", timeBefore: "3-5 hrs", timeAfter: "15 min", icon: FileText },
  { title: "Client advisory", description: "Answer legal questions with source-backed confidence.", timeBefore: "30 min", timeAfter: "2 min", icon: Scale },
  { title: "Due diligence", description: "Detect and structure compliance risks early.", timeBefore: "1-2 days", timeAfter: "2-3 hrs", icon: Search },
  { title: "Team updates", description: "Share legal developments with your team faster.", timeBefore: "Manual", timeAfter: "Instant", icon: BookOpen },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function SearchCapabilitiesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = searchCapabilities[currentIndex];

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % searchCapabilities.length);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + searchCapabilities.length) % searchCapabilities.length);

  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Intelligent search, not keyword lists</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI understands context, intent, and legal structure behind each query.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-11 w-11 rounded-xl border border-border bg-muted/40 flex items-center justify-center">
                    <current.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">{current.title}</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">{current.description}</p>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`example-${currentIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-muted/40 rounded-2xl p-6 border border-border"
              >
                <div className="text-sm text-muted-foreground mb-3 font-medium">Example query:</div>
                <div className="flex items-start gap-3">
                  <Search className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                  <span className="text-lg italic leading-relaxed">"{current.example}"</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goPrev}
              aria-label="Previous card"
              className="h-12 w-12 rounded-full border border-border bg-background flex items-center justify-center hover:bg-muted transition-colors"
              type="button"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <div className="flex items-center gap-2">
              {searchCapabilities.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  type="button"
                  aria-label={`Go to card ${index + 1} of ${searchCapabilities.length}`}
                  aria-current={index === currentIndex ? "true" : undefined}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-8 bg-foreground" : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={goNext}
              aria-label="Next card"
              className="h-12 w-12 rounded-full border border-border bg-background flex items-center justify-center hover:bg-muted transition-colors"
              type="button"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Research() {
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
              <Search className="h-4 w-4" />
              <span className="text-sm font-medium">Research</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Source-linked
              <br />
              <span className="text-muted-foreground">legal research</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Search legal databases and the web with every finding linked to its source so you can verify and cite
              with confidence.
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

      <ResearchDemo />

      <section className="py-24 md:py-32">
        <div className="container">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Comprehensive legal knowledge base</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              More than search, a complete legal research environment.
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

      <SearchCapabilitiesCarousel />

      <section className="py-24 md:py-32">
        <div className="container">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">When to use Research</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ideal where speed and legal accuracy are critical.
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {useCases.map((useCase) => (
              <motion.div key={useCase.title} variants={itemVariants}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-11 w-11 rounded-xl border border-border bg-muted/40 flex items-center justify-center shrink-0">
                      <useCase.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1">{useCase.title}</h3>
                      <p className="text-sm text-muted-foreground">{useCase.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Manual:</span>
                      <span className="text-sm font-semibold text-muted-foreground line-through opacity-70">{useCase.timeBefore}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Specter:</span>
                      <span className="text-sm font-bold text-foreground">{useCase.timeAfter}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Continuous updates on legal changes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              New legal developments are continuously synchronized into research.
            </p>
          </motion.div>

          <motion.div className="max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="h-[300px] md:h-[400px]">
              <LegalNetwork className="w-full h-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">Real-time</div>
                <p className="text-sm text-muted-foreground">Instant updates</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">100k+</div>
                <p className="text-sm text-muted-foreground">Monitored legal norms</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <p className="text-sm text-muted-foreground">Continuous synchronization</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="rounded-3xl border border-border bg-card text-foreground text-center p-10 md:p-14">
            <Search className="h-12 w-12 mx-auto mb-4 text-foreground" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start research 10x faster</h2>
            <p className="text-lg mb-8 text-muted-foreground max-w-xl mx-auto">
              Try research for free and compare against traditional workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild>
                <a href="https://app.specterlaw.us/login">
                  Try for free
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

