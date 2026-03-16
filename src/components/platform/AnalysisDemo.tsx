import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, ChevronDown, FileSearch, Shield, Upload } from "lucide-react";

type ResultItem = {
  type: "critical" | "warning" | "success";
  clause: string;
  issue: string;
};

const content = {
  title: "How real-time analysis works",
  subtitle: "Upload a document and receive a structured risk evaluation in seconds.",
  uploadTitle: "Document uploaded",
  uploadHint: "Ready for analysis",
  fileName: "ServiceAgreement_Draft.pdf",
  fileMeta: "24 pages • 156 KB",
  progressTitle: "Analysis progress",
  progressProcessing: "Processing...",
  progressDone: "Done",
  steps: ["Extract text", "Detect clauses", "Check compliance", "Generate report"],
  statsLabels: ["Clauses", "Critical", "Compliant"],
  resultsTitle: "Analysis results",
  analyzing: "Analyzing document...",
  results: [
    { type: "critical", clause: "Clause 5.2 - Unlimited liability", issue: "No liability cap defined" },
    { type: "critical", clause: "Clause 9.4 - Penalties", issue: "Disproportionate penalty clause" },
    { type: "warning", clause: "Clause 8.1 - Termination notice", issue: "Only 7 days notice period" },
    { type: "warning", clause: "Clause 12.3 - Force majeure", issue: "Incomplete definition" },
    { type: "success", clause: "Clause 3.4 - Confidentiality", issue: "Aligned with GDPR requirements" },
    { type: "success", clause: "Clause 6.1 - Intellectual property", issue: "Clause matches market standard" },
  ] as ResultItem[],
};

export function AnalysisDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [visibleResults, setVisibleResults] = useState(0);

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setCurrentStep((prev) => (prev < 3 ? prev + 1 : prev));
    }, 1500);

    return () => clearInterval(stepTimer);
  }, []);

  useEffect(() => {
    if (currentStep === 3) {
      let resetTimeoutId: number | undefined;
      const resultTimer = setInterval(() => {
        setVisibleResults((prev) => {
          if (prev < content.results.length) return prev + 1;
          resetTimeoutId = window.setTimeout(() => {
            setCurrentStep(0);
            setVisibleResults(0);
          }, 3000);
          clearInterval(resultTimer);
          return prev;
        });
      }, 400);

      return () => {
        clearInterval(resultTimer);
        if (resetTimeoutId !== undefined) {
          window.clearTimeout(resetTimeoutId);
        }
      };
    }
  }, [currentStep]);

  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">{content.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{content.subtitle}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="rounded-2xl p-6 border border-border bg-card shadow-sm overflow-hidden">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-sm">{content.uploadTitle}</h3>
                  <p className="text-muted-foreground text-xs">{content.uploadHint}</p>
                </div>
                <Upload className="h-4 w-4 text-muted-foreground" />
              </div>

              <div className="bg-background border border-border rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center border border-border">
                    <FileSearch className="h-6 w-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{content.fileName}</p>
                    <p className="text-muted-foreground text-xs">{content.fileMeta}</p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-foreground" />
                </div>
              </div>
            </div>

            <div className="mb-6 bg-background rounded-xl p-4 border border-border">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FileSearch className="h-4 w-4 text-foreground" />
                  <h3 className="font-semibold text-sm">{content.progressTitle}</h3>
                </div>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                  {currentStep < 3 ? content.progressProcessing : content.progressDone}
                </span>
              </div>

              <div className="space-y-3">
                {content.steps.map((label, index) => (
                  <div key={label} className="flex items-center gap-3">
                    <div
                      className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold transition-all border ${
                        currentStep > index
                          ? "bg-foreground text-background border-foreground"
                          : currentStep === index
                            ? "bg-background text-foreground border-foreground animate-pulse"
                            : "bg-muted text-muted-foreground border-border"
                      }`}
                    >
                      {currentStep > index ? "✓" : index + 1}
                    </div>
                    <span className={`text-sm transition-all ${currentStep >= index ? "text-foreground" : "text-muted-foreground"}`}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-background rounded-xl p-3 text-center border border-border">
                <p className="text-2xl font-bold">47</p>
                <p className="text-xs text-muted-foreground">{content.statsLabels[0]}</p>
              </div>
              <div className="bg-background rounded-xl p-3 text-center border border-border">
                <p className="text-2xl font-bold">2</p>
                <p className="text-xs text-muted-foreground">{content.statsLabels[1]}</p>
              </div>
              <div className="bg-background rounded-xl p-3 text-center border border-border">
                <p className="text-2xl font-bold">89%</p>
                <p className="text-xs text-muted-foreground">{content.statsLabels[2]}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl shadow-sm overflow-hidden border border-border bg-card">
            <div className="border-b border-border px-6 py-3 flex items-center justify-between bg-background">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-foreground" />
                <span className="text-sm font-medium">{content.resultsTitle}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-3 w-3 rounded-full bg-muted-foreground/40" />
                <div className="h-3 w-3 rounded-full bg-muted-foreground/40" />
                <div className="h-3 w-3 rounded-full bg-muted-foreground/40" />
              </div>
            </div>

            <div className="p-6 h-[460px] overflow-y-auto">
              {currentStep < 3 ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="h-12 w-12 border-4 border-foreground border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-muted-foreground">{content.analyzing}</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {content.results.map((result, index) => (
                    <div
                      key={`${result.clause}-${index}`}
                      className={`p-4 rounded-xl border transition-all duration-300 ${
                        index < visibleResults ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      } ${
                        result.type === "critical"
                          ? "bg-muted/40 border-border"
                          : result.type === "warning"
                            ? "bg-muted/25 border-border"
                            : "bg-background border-border"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-lg border border-border bg-background flex items-center justify-center shrink-0">
                          {result.type === "success" ? (
                            <CheckCircle className="h-4 w-4 text-foreground" />
                          ) : (
                            <AlertTriangle className="h-4 w-4 text-foreground" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold">{result.clause}</p>
                          <p className="text-xs text-muted-foreground">{result.issue}</p>
                        </div>
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
