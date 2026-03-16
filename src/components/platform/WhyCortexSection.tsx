import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrainCircuit, Database, FileText, Loader2, Scale, Search, type LucideIcon } from "lucide-react";

type VisibleTool = {
  id: number;
  name: string;
  icon: LucideIcon;
  uniqueId: string;
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const TOOL_ICONS: LucideIcon[] = [
  Search,
  Scale,
  BrainCircuit,
  Database,
  FileText,
  Search,
  Scale,
  BrainCircuit,
  Database,
  FileText,
];

const content = {
  platformTitlePrefix: "Why legal teams choose",
  platformTitleAccent: "Cortex",
  subtitle: "Enterprise technology for legal teams that do not compromise on precision and source transparency.",
  cortexTitle: "Cortex Agent",
  cortexDescription:
    "Your digital associate. It plans, researches, and analyzes complex legal matters and delivers precise output with clear source references.",
  databaseTitle: "Legal Database",
  databaseDescription:
    "Access over 1 million court decisions and legal texts. Filter by court, date, and legal domain for maximum relevance.",
  transparencyTitle: "Source Transparency",
  transparencyDescription:
    "No black box. Every answer includes direct references to statutes and case law. Verifiable in one click.",
  analyzingLabel: "Cortex analyzing...",
  activeLabel: "ACTIVE",
  tools: [
    "Search BGH decisions",
    "Analyze § 823 BGB",
    "Check recent case law",
    "Compare commentary",
    "Extract key holdings",
    "Research precedents",
    "Check legal updates",
    "Analyze court reasoning",
    "Search OLG decisions",
    "Summarize case facts",
  ],
};

const MockCortexAnimation = () => {
  const localizedTools = useMemo(
    () => content.tools.map((name, index) => ({ id: index + 1, name, icon: TOOL_ICONS[index] })),
    [],
  );
  const [visibleTools, setVisibleTools] = useState<VisibleTool[]>([]);
  const [, setNextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNextIndex((prevIndex) => {
        const nextTool = localizedTools[prevIndex % localizedTools.length];
        const toolToAdd = { ...nextTool, uniqueId: `${prevIndex}-${Date.now()}` };

        setVisibleTools((prevTools) => {
          const newTools = [...prevTools, toolToAdd];
          if (newTools.length > 3) {
            return newTools.slice(newTools.length - 3);
          }
          return newTools;
        });

        return prevIndex + 1;
      });
    }, 1400);

    return () => clearInterval(interval);
  }, [localizedTools]);

  return (
    <div className="w-full max-w-md mx-auto bg-transparent rounded-xl p-4 overflow-hidden relative h-[240px]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/80 pointer-events-none z-10" />

      <div className="flex items-center gap-2 mb-4 px-2">
        <BrainCircuit className="h-3.5 w-3.5 text-foreground" />
        <span className="text-xs font-semibold text-foreground">{content.analyzingLabel}</span>
      </div>

      <div className="space-y-0 relative pl-2">
        <AnimatePresence mode="popLayout">
          {visibleTools.map((tool, index) => {
            const isLatest = index === visibleTools.length - 1;

            return (
              <motion.div
                key={tool.uniqueId}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3 } }}
                transition={{ duration: 0.4 }}
                className="relative flex gap-3 mb-3"
              >
                <div className="flex flex-col items-center pt-1">
                  <div className="relative h-2.5 w-2.5">
                    <div
                      className={`absolute inset-0 rounded-full border border-background bg-foreground ${
                        isLatest ? "scale-110 shadow-[0_0_0_3px_hsl(var(--background)/0.35)]" : "opacity-80"
                      }`}
                    />
                    {isLatest && <div className="absolute -inset-1 rounded-full animate-ping opacity-60 bg-foreground/20" />}
                  </div>
                  <span className="mt-2 w-px flex-1 bg-gradient-to-b from-foreground/20 via-foreground/10 to-transparent opacity-70" />
                </div>

                <div
                  className={`group relative flex-1 rounded-xl border px-4 py-3 transition-all duration-500 ease-out ${
                    isLatest ? "border-foreground/40 bg-background shadow-sm" : "border-border bg-card"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition-all duration-500 ${
                        isLatest ? "bg-foreground text-background shadow-sm" : "bg-muted text-foreground"
                      }`}
                    >
                      {isLatest ? <Loader2 className="h-4 w-4 animate-spin" /> : <tool.icon className="h-4 w-4" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold leading-5 break-words">{tool.name}</span>
                        {isLatest && (
                          <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                            {content.activeLabel}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

const ProfessionalDatabaseIcon = () => (
  <svg
    width="64"
    height="80"
    viewBox="0 0 64 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transform hover:scale-105 transition-transform duration-500 text-foreground"
  >
    <path
      d="M0 12 V68 C0 74.6274 14.3269 80 32 80 C49.6731 80 64 74.6274 64 68 V12 C64 5.3726 49.6731 0 32 0 C14.3269 0 0 5.3726 0 12 Z"
      fill="hsl(var(--muted))"
    />
    <path
      d="M64 68C64 74.6274 49.6731 80 32 80C14.3269 80 0 74.6274 0 68V52C0 58.6274 14.3269 64 32 64C49.6731 64 64 58.6274 64 52V68Z"
      fill="hsl(var(--foreground) / 0.2)"
    />
    <ellipse cx="32" cy="52" rx="32" ry="12" fill="hsl(var(--foreground) / 0.18)" />
    <path
      d="M64 44C64 50.6274 49.6731 56 32 56C14.3269 56 0 50.6274 0 44V28C0 34.6274 14.3269 40 32 40C49.6731 40 64 34.6274 64 28V44Z"
      fill="hsl(var(--foreground) / 0.2)"
    />
    <ellipse cx="32" cy="28" rx="32" ry="12" fill="hsl(var(--foreground) / 0.18)" />
    <path
      d="M64 20C64 26.6274 49.6731 32 32 32C14.3269 32 0 26.6274 0 20V12C0 18.6274 14.3269 24 32 24C49.6731 24 64 18.6274 64 12V20Z"
      fill="hsl(var(--foreground) / 0.2)"
    />
    <ellipse cx="32" cy="12" rx="32" ry="12" fill="hsl(var(--foreground) / 0.22)" />
    <ellipse cx="32" cy="12" rx="28" ry="10" stroke="hsl(var(--background))" strokeOpacity="0.4" strokeWidth="1" />
  </svg>
);

const DataStreamAnimation = () => {
  return (
    <div className="mt-6 relative h-32 w-full overflow-hidden rounded-xl flex items-center justify-center">
      <div className="absolute left-0 top-0 bottom-0 w-1/2 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
          {[...Array(12)].map((_, i) => {
            const yStart = 5 + (i * 90) / 11;
            const yEnd = 30 + (i * 40) / 11;

            return (
              <motion.path
                key={i}
                d={`M0,${yStart} C80,${yStart} 120,${yEnd} 200,${yEnd}`}
                fill="none"
                stroke="hsl(var(--foreground) / 0.35)"
                strokeWidth="1.5"
                strokeDasharray="10 10"
                initial={{ strokeDashoffset: 100, opacity: 0.2 }}
                animate={{
                  strokeDashoffset: [100, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 2 + (i % 3),
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.1,
                }}
              />
            );
          })}
        </svg>
      </div>

      <div className="relative z-10 mx-4">
        <ProfessionalDatabaseIcon />
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden flex items-center">
        <div
          className="w-full h-12 relative"
          style={{
            maskImage: "linear-gradient(to right, black, transparent)",
            WebkitMaskImage: "linear-gradient(to right, black, transparent)",
          }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, hsl(var(--foreground) / 0.55) 1.5px, transparent 1.5px)",
              backgroundSize: "12px 12px",
              backgroundPosition: "0 50%",
            }}
            animate={{ backgroundPositionX: ["0px", "24px"] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/10 to-background/80" />
        </div>
      </div>
    </div>
  );
};

export function WhyCortexSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-foreground/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-foreground/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            {content.platformTitlePrefix}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground/70 to-foreground/40">
              {content.platformTitleAccent}
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-2">
            {content.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)] max-w-5xl mx-auto"
        >
          <motion.div variants={item} className="md:col-span-2 row-span-2 h-full">
            <div className="h-full rounded-2xl border border-border bg-card shadow-sm group">
              <div className="h-full rounded-[15px] p-8 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                  <BrainCircuit className="w-40 h-40 text-foreground" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-muted border border-border flex items-center justify-center mb-6 text-foreground group-hover:scale-110 transition-all duration-300">
                    <BrainCircuit className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{content.cortexTitle}</h3>
                  <p className="text-muted-foreground text-base mb-6 max-w-md leading-relaxed">{content.cortexDescription}</p>

                  <div className="mt-auto">
                    <MockCortexAnimation />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="h-full">
            <div className="h-full rounded-2xl border border-border bg-card shadow-sm group">
              <div className="h-full p-6 flex flex-col relative overflow-hidden">
                <div className="mt-auto">
                  <DataStreamAnimation />
                </div>
                <h3 className="text-lg font-bold mb-2">{content.databaseTitle}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{content.databaseDescription}</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="h-full">
            <div className="h-full rounded-2xl border border-border bg-card shadow-sm group">
              <div className="h-full p-6 flex flex-col relative overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-muted border border-border flex items-center justify-center mb-5 text-foreground group-hover:scale-110 transition-all duration-300">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{content.transparencyTitle}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{content.transparencyDescription}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
