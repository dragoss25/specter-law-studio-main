import { useEffect, useMemo, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Brain,
  BrainCircuit,
  CheckCircle2,
  FileText,
  Globe,
  Loader2,
  Scale,
  Search,
  Sparkles,
} from "lucide-react";

export type WorkflowPreviewType = "cortex" | "drafting" | "analysis" | "research";
type Locale = "de" | "en";

type WorkflowMiniPreviewProps = {
  type: WorkflowPreviewType;
  locale: Locale;
  active: boolean;
};

const labels = {
  de: {
    cortex: "Cortex Modus",
    drafting: "Entwurf",
    analysis: "Risiko-Scan",
    research: "Modi",
    cortexAnalyzing: "Cortex analysiert...",
    active: "AKTIV",
    cortexTools: [
      "Pruefe Gesetzesupdates",
      "Analysiere Urteilsbegruendung",
      "Suche OLG Entscheidungen",
    ],
    concise: "Kompakt",
    deep: "Tief",
    web: "Websuche",
    researchQuery: "fristlose kuendigung beweisanforderungen",
    riskHigh: "HOCH",
    riskMed: "MITTEL",
    draftTemplate: "Vorlage",
    draftJurisdiction: "Recht",
    draftTone: "Ton",
    draftReady: "Entwurf bereit",
    analysisSummary: "Dokumenten-Scan",
    recommended: "Empfehlung",
    citations: "Quellen",
  },
  en: {
    cortex: "Cortex mode",
    drafting: "Draft",
    analysis: "Risk scan",
    research: "Modes",
    cortexAnalyzing: "Cortex analyzing...",
    active: "ACTIVE",
    cortexTools: [
      "Check legal updates",
      "Analyze court reasoning",
      "Search OLG decisions",
    ],
    concise: "Concise",
    deep: "Deep",
    web: "Web",
    researchQuery: "wrongful termination evidentiary requirements",
    riskHigh: "HIGH",
    riskMed: "MED",
    draftTemplate: "Template",
    draftJurisdiction: "Jurisdiction",
    draftTone: "Tone",
    draftReady: "Draft ready",
    analysisSummary: "Document scan",
    recommended: "Recommendation",
    citations: "Citations",
  },
} as const;

function PreviewShell({
  title,
  active,
  children,
}: {
  title: string;
  active: boolean;
  children: ReactNode;
}) {
  return (
    <div className="relative h-52 md:h-56 rounded-2xl border border-border bg-background p-4 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top right, hsl(var(--foreground) / 0.10) 0%, hsl(var(--foreground) / 0.02) 36%, transparent 62%)",
        }}
      />
      <div className="relative z-10 h-full">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            {title}
          </span>
          <motion.span
            className="h-2 w-2 rounded-full bg-foreground"
            animate={active ? { opacity: [0.35, 1, 0.35] } : { opacity: 0.35 }}
            transition={active ? { duration: 1.4, repeat: Infinity } : { duration: 0.2 }}
          />
        </div>
        {children}
      </div>
    </div>
  );
}

function CortexMiniPreview({ locale, active }: { locale: Locale; active: boolean }) {
  const t = labels[locale];
  const [activeToolIndex, setActiveToolIndex] = useState(0);
  const tools = useMemo(
    () => [
      { label: t.cortexTools[0], icon: Scale },
      { label: t.cortexTools[1], icon: BrainCircuit },
      { label: t.cortexTools[2], icon: Search },
    ],
    [t.cortexTools],
  );

  useEffect(() => {
    if (!active) return;
    const intervalId = window.setInterval(() => {
      setActiveToolIndex((prev) => (prev + 1) % tools.length);
    }, 1300);

    return () => window.clearInterval(intervalId);
  }, [active, tools.length]);

  useEffect(() => {
    if (!active) {
      setActiveToolIndex(2);
    }
  }, [active]);

  return (
    <PreviewShell title={t.cortex} active={active}>
      <div className="rounded-xl border border-border bg-card p-3 h-[calc(100%-26px)] overflow-hidden">
        <div className="flex items-center gap-1.5 mb-3 text-[11px] font-semibold text-muted-foreground">
          <Brain className="h-4 w-4 text-foreground" />
          <span>{t.cortexAnalyzing}</span>
        </div>

        <div className="space-y-2.5">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            const isActive = index === activeToolIndex;
            return (
              <motion.div
                key={tool.label}
                className="relative flex items-center gap-2.5"
                animate={active ? { opacity: isActive ? 1 : 0.86 } : { opacity: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`h-2 w-2 rounded-full ${
                      isActive
                        ? "bg-foreground shadow-[0_0_0_3px_hsl(var(--foreground)_/_0.14)]"
                        : "bg-foreground/35"
                    }`}
                  />
                  {index < tools.length - 1 && (
                    <span className="mt-0.5 h-6 w-px bg-gradient-to-b from-border to-transparent" />
                  )}
                </div>

                <div
                  className={`flex-1 rounded-lg border px-3 py-2.5 transition-all ${
                    isActive ? "border-foreground/20 bg-muted/40" : "border-border bg-background"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-5 w-5 rounded-md flex items-center justify-center ${
                        isActive ? "bg-foreground text-background" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {isActive ? <Loader2 className="h-3 w-3 animate-spin" /> : <Icon className="h-3 w-3" />}
                    </div>
                    <span
                      className={`text-[10px] font-semibold leading-4 ${
                        isActive ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {tool.label}
                    </span>
                    {isActive && (
                      <span className="ml-auto text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground/80">
                        {t.active}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </PreviewShell>
  );
}

function DraftingMiniPreview({ locale, active }: { locale: Locale; active: boolean }) {
  const t = labels[locale];

  return (
    <PreviewShell title={t.drafting} active={active}>
      <div className="grid grid-cols-2 gap-3 h-[calc(100%-26px)]">
        <div className="rounded-xl border border-border bg-card p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="h-2 rounded-full bg-muted w-16" />
            <span className="text-[9px] font-semibold text-muted-foreground">v2.1</span>
          </div>
          <div className="space-y-2">
            <div className="rounded-md border border-border bg-background px-2 py-1.5">
              <p className="text-[9px] text-muted-foreground">{t.draftTemplate}</p>
              <p className="text-[10px] font-semibold text-foreground truncate">MSA - Vendor Agreement</p>
            </div>
            <div className="rounded-md border border-border bg-background px-2 py-1.5">
              <p className="text-[9px] text-muted-foreground">{t.draftJurisdiction}</p>
              <p className="text-[10px] font-semibold text-foreground">US - Delaware</p>
            </div>
            <div className="rounded-md border border-border bg-background px-2 py-1.5">
              <p className="text-[9px] text-muted-foreground">{t.draftTone}</p>
              <p className="text-[10px] font-semibold text-foreground">Balanced + enforceable</p>
            </div>
          </div>
          <motion.div
            className="mt-2 h-7 rounded-md bg-foreground text-background text-[10px] font-semibold inline-flex items-center justify-center w-full"
            animate={active ? { opacity: [0.86, 1, 0.86] } : { opacity: 0.92 }}
            transition={active ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" } : { duration: 0.2 }}
          >
            {t.draftReady}
          </motion.div>
        </div>

        <div className="rounded-xl border border-border bg-card p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <FileText className="h-4 w-4 text-foreground" />
              <span className="text-[10px] font-semibold text-foreground">Output</span>
            </div>
            <span className="text-[9px] font-semibold text-muted-foreground">4 clauses</span>
          </div>
          <div className="space-y-2">
            <div className="rounded-md border border-border bg-background p-2">
              <div className="h-1.5 rounded-full bg-muted w-full mb-1.5" />
              <div className="h-1.5 rounded-full bg-muted w-4/5 mb-1.5" />
              <div className="h-1.5 rounded-full bg-muted w-3/5" />
            </div>
            <motion.div
              className="h-1.5 rounded-full bg-foreground/50"
              animate={active ? { width: ["28%", "82%", "46%", "68%", "28%"] } : { width: "42%" }}
              transition={active ? { duration: 2.6, repeat: Infinity, ease: "easeInOut" } : { duration: 0.2 }}
            />
            <div className="rounded-md border border-border bg-muted/30 px-2 py-1.5">
              <p className="text-[9px] text-muted-foreground mb-0.5">{t.recommended}</p>
              <p className="text-[10px] font-medium text-foreground truncate">Add indemnity cap language</p>
            </div>
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}

function AnalysisMiniPreview({ locale, active }: { locale: Locale; active: boolean }) {
  const t = labels[locale];

  return (
    <PreviewShell title={t.analysis} active={active}>
      <div className="rounded-xl border border-border bg-card p-2 h-[calc(100%-26px)] space-y-1 overflow-hidden">
        <div className="flex items-center justify-between rounded-md border border-border bg-muted/30 px-2 py-1.5">
          <span className="text-[9px] font-semibold text-foreground">{t.analysisSummary}</span>
          <span className="text-[8px] font-medium text-muted-foreground">18 pages | 6 flags</span>
        </div>

        <div className="flex items-center justify-between rounded-md border border-foreground/20 bg-foreground/5 px-2 py-1.5">
          <div className="flex items-center gap-1.5 min-w-0">
            <AlertTriangle className="h-3 w-3 text-foreground shrink-0" />
            <div>
              <p className="text-[9px] font-semibold text-foreground leading-3">Liability clause Sec. 12</p>
              <p className="text-[8px] text-muted-foreground leading-3">Unlimited exposure language</p>
            </div>
          </div>
          <motion.span
            className="text-[9px] font-semibold text-foreground shrink-0"
            animate={active ? { opacity: [0.6, 1, 0.6] } : { opacity: 0.8 }}
            transition={active ? { duration: 1.2, repeat: Infinity } : { duration: 0.2 }}
          >
            {t.riskHigh}
          </motion.span>
        </div>

        <div className="h-1 rounded-full bg-muted overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-foreground"
            animate={active ? { width: ["64%", "82%", "71%", "89%", "64%"] } : { width: "74%" }}
            transition={active ? { duration: 2.2, repeat: Infinity, ease: "easeInOut" } : { duration: 0.2 }}
          />
        </div>

        <div className="flex items-center justify-between rounded-md border border-border bg-muted/30 px-2 py-1.5">
          <div className="flex items-center gap-1.5 min-w-0">
            <Sparkles className="h-3 w-3 text-foreground/80 shrink-0" />
            <div>
              <p className="text-[9px] font-semibold text-foreground leading-3">Termination window</p>
              <p className="text-[8px] text-muted-foreground leading-3">Notice period inconsistency</p>
            </div>
          </div>
          <span className="text-[9px] font-semibold text-muted-foreground shrink-0">{t.riskMed}</span>
        </div>

        <div className="flex items-center justify-between rounded-md border border-border bg-background px-2 py-1.5">
          <div className="flex items-center gap-1.5 min-w-0">
            <CheckCircle2 className="h-3 w-3 text-foreground/70 shrink-0" />
            <div>
              <p className="text-[9px] font-semibold text-foreground leading-3">Data-processing section</p>
              <p className="text-[8px] text-muted-foreground leading-3">Compliant baseline language</p>
            </div>
          </div>
          <span className="text-[9px] font-semibold text-muted-foreground shrink-0">{t.citations}: 12</span>
        </div>
      </div>
    </PreviewShell>
  );
}

function ResearchMiniPreview({ locale, active }: { locale: Locale; active: boolean }) {
  const t = labels[locale];

  return (
    <PreviewShell title={t.research} active={active}>
      <div className="rounded-xl border border-border bg-card p-3 h-[calc(100%-26px)]">
        <div className="relative rounded-full border border-border bg-muted/30 p-1 mb-3">
          <motion.div
            className="absolute top-1 bottom-1 w-[23%] rounded-full bg-foreground/10 border border-foreground/20"
            animate={
              active
                ? { left: ["1%", "26%", "51%", "76%", "1%"] }
                : { left: "51%" }
            }
            transition={active ? { duration: 3.2, repeat: Infinity, ease: "easeInOut" } : { duration: 0.2 }}
          />
          <div className="relative grid grid-cols-4 text-[10px] font-medium text-muted-foreground">
            <span className="text-center py-1">{t.concise}</span>
            <span className="text-center py-1">{t.deep}</span>
            <span className="text-center py-1">Cortex</span>
            <span className="text-center py-1 inline-flex items-center justify-center gap-1">
              <Globe className="h-2.5 w-2.5" />
              {t.web}
            </span>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-muted/30 px-3 py-2.5 text-[11px] text-muted-foreground flex items-center gap-2">
          <Search className="h-3.5 w-3.5 text-foreground" />
          <span>"{t.researchQuery}"</span>
        </div>

        <div className="mt-3 h-2 rounded-full bg-muted overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-foreground"
            animate={active ? { width: ["22%", "78%", "48%", "92%", "22%"] } : { width: "36%" }}
            transition={active ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" } : { duration: 0.2 }}
          />
        </div>
      </div>
    </PreviewShell>
  );
}

export function WorkflowMiniPreview({ type, locale, active }: WorkflowMiniPreviewProps) {
  if (type === "cortex") {
    return <CortexMiniPreview locale={locale} active={active} />;
  }

  if (type === "drafting") {
    return <DraftingMiniPreview locale={locale} active={active} />;
  }

  if (type === "analysis") {
    return <AnalysisMiniPreview locale={locale} active={active} />;
  }

  return <ResearchMiniPreview locale={locale} active={active} />;
}

