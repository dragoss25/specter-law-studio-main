import { useState } from "react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { Rocket, Target, Clock, BarChart3, CheckCircle, ArrowRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const pilotPhases = [
  {
    phase: "01",
    title: "Kickoff",
    duration: "Week 1",
    description: "Define scope, use cases, and success metrics with your team",
    icon: Target,
  },
  {
    phase: "02",
    title: "Configuration",
    duration: "Week 1-2",
    description: "Set up Cortex for your specific document types and workflows",
    icon: Rocket,
  },
  {
    phase: "03",
    title: "Run",
    duration: "Weeks 2-8",
    description: "Use Cortex on real work and gather feedback from your team",
    icon: Clock,
  },
  {
    phase: "04",
    title: "Review",
    duration: "Final Week",
    description: "Measure outcomes, analyze results, and discuss next steps",
    icon: BarChart3,
  },
];

const successMetrics = [
  "Time saved on first-pass review",
  "Faster research turnaround",
  "More consistent draft outputs",
  "Clearer stakeholder summaries",
  "Reduced back-and-forth cycles",
  "Improved team efficiency",
];

const pilotBenefits = [
  {
    title: "Real Work, Real Results",
    description: "Test Cortex on your actual documents and workflows, not sample data",
  },
  {
    title: "Dedicated Support",
    description: "Direct access to our team throughout the pilot period",
  },
  {
    title: "Measurable Outcomes",
    description: "Clear metrics and reporting to quantify the impact",
  },
  {
    title: "No Long-term Commitment",
    description: "Evaluate fully before deciding on an annual contract",
  },
];

export default function Pilot() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Pilot request submitted!", {
      description: "Our team will reach out to discuss next steps.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/80 backdrop-blur-sm mb-8">
              <Calendar className="h-4 w-4" />
              <span className="text-sm font-medium">Pilot Program</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Test Cortex on
              <br />
              <span className="text-muted-foreground">your real work</span>
            </h1>
            
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A 30–60 day paid pilot to evaluate Specter with your actual documents 
              and workflows. Measure the impact before committing.
            </p>
          </div>
        </div>
      </section>

      {/* Pilot Timeline */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Pilot Timeline
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              How the pilot works
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pilotPhases.map((phase, index) => (
              <div
                key={phase.phase}
                className={cn(
                  "relative p-6 rounded-2xl border border-border bg-background",
                  "hover:border-foreground/20 transition-colors"
                )}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="h-12 w-12 rounded-xl border border-border flex items-center justify-center bg-surface-subtle font-semibold text-lg">
                    {phase.phase}
                  </div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {phase.duration}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Metrics */}
      <section className="py-24 md:py-32 bg-surface-subtle border-t border-border">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Benefits */}
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                Why Pilot
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
                Pilot benefits
              </h2>
              <div className="space-y-4">
                {pilotBenefits.map((benefit) => (
                  <div 
                    key={benefit.title}
                    className="p-6 rounded-xl border border-border bg-background hover:border-foreground/20 transition-colors"
                  >
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                Metrics We Track
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
                Success metrics
              </h2>
              <div className="p-8 rounded-2xl border border-border bg-background">
                <ul className="space-y-4">
                  {successMetrics.map((metric) => (
                    <li key={metric} className="flex items-center gap-4">
                      <div className="flex-shrink-0 h-8 w-8 rounded-lg border border-border flex items-center justify-center bg-surface-subtle">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span className="text-muted-foreground">{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            {/* Info */}
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                Get Started
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Apply for a pilot
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Tell us about your team and use cases. We'll review your application 
                and reach out to discuss scope, timeline, and next steps.
              </p>

              <div className="p-6 rounded-xl border border-border bg-surface-subtle">
                <h3 className="font-semibold mb-4">Ideal pilot candidates</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5 text-foreground/60" />
                    US-based legal teams or business units
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5 text-foreground/60" />
                    Regular contract review or research workflows
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5 text-foreground/60" />
                    Capacity to dedicate time to evaluation
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5 text-foreground/60" />
                    Clear success metrics in mind
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 md:p-10 rounded-2xl border border-border bg-background shadow-sm">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Pilot application</h2>
                <p className="text-muted-foreground">
                  Run Cortex on your real work for 30–60 days.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium">
                      First name <span className="text-muted-foreground">*</span>
                    </Label>
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      required 
                      className="h-11 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium">
                      Last name <span className="text-muted-foreground">*</span>
                    </Label>
                    <Input 
                      id="lastName" 
                      name="lastName" 
                      required 
                      className="h-11 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Work email <span className="text-muted-foreground">*</span>
                  </Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    className="h-11 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium">
                    Company <span className="text-muted-foreground">*</span>
                  </Label>
                  <Input 
                    id="company" 
                    name="company" 
                    required 
                    className="h-11 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role" className="text-sm font-medium">
                    Role / Title <span className="text-muted-foreground">*</span>
                  </Label>
                  <Input 
                    id="role" 
                    name="role" 
                    required 
                    className="h-11 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="useCase" className="text-sm font-medium">
                    Primary use case <span className="text-muted-foreground">*</span>
                  </Label>
                  <Select name="useCase" required>
                    <SelectTrigger className="h-11 rounded-xl">
                      <SelectValue placeholder="Select a use case" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="contract-review">Contract review</SelectItem>
                      <SelectItem value="compliance-research">Compliance research</SelectItem>
                      <SelectItem value="drafting">Drafting</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-medium">
                    Preferred pilot timeline <span className="text-muted-foreground">*</span>
                  </Label>
                  <RadioGroup defaultValue="30" name="timeline" className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="30" id="timeline-30" />
                      <Label htmlFor="timeline-30" className="font-normal cursor-pointer">30 days</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="60" id="timeline-60" />
                      <Label htmlFor="timeline-60" className="font-normal cursor-pointer">60 days</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="documentTypes" className="text-sm font-medium">
                    Document types you work with <span className="text-muted-foreground">*</span>
                  </Label>
                  <Input 
                    id="documentTypes" 
                    name="documentTypes" 
                    placeholder="e.g., MSAs, NDAs, DPAs, SOWs..."
                    required
                    className="h-11 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Additional context <span className="text-muted-foreground/60">(optional)</span>
                  </Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Tell us about your current workflow..."
                    rows={3}
                    className="rounded-xl resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full h-12 rounded-xl" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                  {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  A Specter team member will contact you to discuss scope and next steps.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}


