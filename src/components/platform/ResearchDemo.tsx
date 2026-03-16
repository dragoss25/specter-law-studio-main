import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Globe, MousePointer2, Search, Send, Sparkles, Zap } from "lucide-react";

type ModeContent = {
  label: string;
  description: string;
};

type ModeItem = {
  icon: typeof Search;
  label: string;
  description: string;
};

const content = {
  title: "Switch research modes in seconds",
  subtitle: "From quick answers to deep legal reasoning: one click changes the mode to match your legal question.",
  inputPlaceholder: "How should I argue this termination dispute?",
  helperText: "Modes can be switched anytime during research.",
  sendLabel: "Send",
  previewLabel: "Live preview",
  modes: [
    {
      label: "Concise",
      description: "Short and direct for fast legal orientation.",
    },
    {
      label: "Deep",
      description: "Detailed legal analysis with stronger contextual depth.",
    },
    {
      label: "Cortex",
      description: "Precision expert mode for complex multi-step matters.",
    },
    {
      label: "Web Search",
      description: "Adds current external sources when needed.",
    },
  ] as [ModeContent, ModeContent, ModeContent, ModeContent],
};

const modeIcons = [Zap, Search, Sparkles, Globe] as const;

export function ResearchDemo() {
  const modes: ModeItem[] = useMemo(
    () =>
      content.modes.map((mode, index) => ({
        ...mode,
        icon: modeIcons[index],
      })),
    [],
  );

  const [activeMode, setActiveMode] = useState(0);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0, ready: false });

  const panelRef = useRef<HTMLDivElement | null>(null);
  const modeRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const updateCursorPosition = useCallback((index: number) => {
    const panel = panelRef.current;
    const target = modeRefs.current[index];
    if (!panel || !target) return;

    const panelRect = panel.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    setCursorPosition({
      x: targetRect.left - panelRect.left + targetRect.width * 0.8,
      y: targetRect.top - panelRect.top + targetRect.height * 0.78,
      ready: true,
    });
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveMode((prev) => (prev + 1) % modes.length);
    }, 1600);

    return () => window.clearInterval(intervalId);
  }, [modes.length]);

  useEffect(() => {
    updateCursorPosition(activeMode);
    setIsClicking(true);
    const timeoutId = window.setTimeout(() => setIsClicking(false), 220);

    return () => window.clearTimeout(timeoutId);
  }, [activeMode, updateCursorPosition]);

  useEffect(() => {
    const handleResize = () => updateCursorPosition(activeMode);
    window.addEventListener("resize", handleResize);
    const rafId = window.requestAnimationFrame(() => updateCursorPosition(activeMode));

    return () => {
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(rafId);
    };
  }, [activeMode, updateCursorPosition]);

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
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{content.subtitle}</p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div
            ref={panelRef}
            className="relative rounded-3xl border border-border bg-card shadow-sm p-4 sm:p-6 md:p-8 overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,hsl(var(--foreground)/0.08),transparent_52%)]" />

            <div className="relative z-10 rounded-2xl border border-border bg-muted/20 p-4 sm:p-5">
              <p className="text-sm text-muted-foreground mb-4">{content.inputPlaceholder}</p>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-xs text-muted-foreground">
                  <Search className="h-3.5 w-3.5" />
                  {content.helperText}
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold bg-foreground text-background shadow-sm"
                >
                  {content.sendLabel}
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="relative z-10 mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {modes.map((mode, index) => {
                const Icon = mode.icon;
                const isActive = index === activeMode;

                return (
                  <button
                    key={mode.label}
                    type="button"
                    ref={(element) => {
                      modeRefs.current[index] = element;
                    }}
                    className={`relative rounded-2xl border p-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border-foreground/30 bg-muted/40 shadow-sm"
                        : "border-border bg-background hover:border-foreground/30"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div
                        className={`h-10 w-10 rounded-xl flex items-center justify-center transition-colors ${
                          isActive ? "bg-foreground text-background" : "bg-muted text-foreground"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span
                        className={`h-2.5 w-2.5 rounded-full transition-colors ${
                          isActive ? "bg-foreground" : "bg-muted-foreground/40"
                        }`}
                      />
                    </div>

                    <p className={`font-semibold mb-1 ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                      {mode.label}
                    </p>
                    <p className={`text-xs leading-relaxed ${isActive ? "text-muted-foreground" : "text-muted-foreground/80"}`}>
                      {mode.description}
                    </p>

                    {isActive && (
                      <motion.div
                        layoutId="mode-active-ring"
                        className="absolute inset-0 rounded-2xl border-2 border-foreground/30"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="relative z-10 mt-5 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="rounded-full border border-border bg-background px-3 py-1.5 font-medium">{content.previewLabel}</span>
              <span className="rounded-full bg-muted px-3 py-1.5">{modes[activeMode].label}</span>
            </div>

            {cursorPosition.ready && (
              <motion.div
                aria-hidden
                className="pointer-events-none absolute z-30"
                animate={{ x: cursorPosition.x, y: cursorPosition.y, scale: isClicking ? 0.92 : 1 }}
                transition={{ type: "spring", stiffness: 320, damping: 30, mass: 0.7 }}
                style={{ translateX: "-50%", translateY: "-50%" }}
              >
                <div className="relative">
                  <MousePointer2 className="h-7 w-7 text-foreground fill-background drop-shadow-sm" />
                  {isClicking && (
                    <motion.span
                      className="absolute left-[9px] top-[8px] h-3.5 w-3.5 rounded-full border-2 border-foreground"
                      initial={{ scale: 0.4, opacity: 0.7 }}
                      animate={{ scale: 1.4, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
