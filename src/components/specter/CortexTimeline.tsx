import { cn } from "@/lib/utils";

interface TimelineStep {
  number: number;
  title: string;
  description: string;
}

interface CortexTimelineProps {
  steps?: TimelineStep[];
  className?: string;
}

const defaultSteps: TimelineStep[] = [
  { number: 1, title: "Intake", description: "Receive your question or document" },
  { number: 2, title: "Research Loops", description: "Search legal databases and sources" },
  { number: 3, title: "Validation", description: "Apply guardrails and verify findings" },
  { number: 4, title: "Structured Output", description: "Generate summary, findings, and risk notes" },
  { number: 5, title: "Next Steps", description: "Provide questions and recommendations" },
];

export function CortexTimeline({ steps = defaultSteps, className }: CortexTimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Timeline Line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />
      
      <div className="space-y-6 md:space-y-8">
        {steps.map((step, index) => (
          <div key={step.number} className="relative flex gap-4 md:gap-6">
            {/* Step Number */}
            <div className="relative z-10 flex-shrink-0">
              <div className="h-12 w-12 rounded-full border-2 border-foreground bg-background flex items-center justify-center">
                <span className="text-sm font-semibold">{step.number}</span>
              </div>
            </div>
            
            {/* Step Content */}
            <div className="flex-1 pt-2">
              <h4 className="font-semibold text-lg">{step.title}</h4>
              <p className="text-muted-foreground text-sm mt-1">
                {step.description}
              </p>
            </div>
            
            {/* Connector Line (mobile) */}
            {index < steps.length - 1 && (
              <div className="absolute left-6 top-12 h-6 w-px bg-border md:hidden" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
