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
import { toast } from "sonner";
import { Sparkles, FileText, Search, PenTool, CheckCircle, ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Sparkles,
    title: "Cortex Agent",
    description: "Multi-step reasoning with source-linked outputs",
  },
  {
    icon: FileText,
    title: "Document Analysis",
    description: "Structured review and risk identification",
  },
  {
    icon: Search,
    title: "Smart Research",
    description: "Legal database search with citations",
  },
  {
    icon: PenTool,
    title: "Drafting Assistance",
    description: "Consistent, structured document generation",
  },
];

const expectations = [
  "30-minute walkthrough of Cortex capabilities",
  "Live demonstration with sample documents",
  "Q&A with our product team",
  "Discussion of your specific use cases",
  "No commitment required",
];

export default function Demo() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Demo request submitted!", {
      description: "We'll be in touch within 1-2 business days.",
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
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/80 backdrop-blur-sm mb-8">
                <Play className="h-4 w-4" />
                <span className="text-sm font-medium">Request a Demo</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                See Cortex
                <br />
                <span className="text-muted-foreground">in action</span>
              </h1>
              
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Get a personalized walkthrough of how Specter can support your legal team 
                with structured analysis and source-linked research.
              </p>

              {/* Benefits */}
              <div className="mt-10 grid grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div 
                    key={benefit.title}
                    className="flex items-start gap-3 p-4 rounded-xl border border-border bg-background/50"
                  >
                    <div className="flex-shrink-0 h-9 w-9 rounded-lg border border-border flex items-center justify-center bg-surface-subtle">
                      <benefit.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">{benefit.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* What to expect */}
              <div className="mt-10 p-6 rounded-xl border border-border bg-background/50">
                <h3 className="font-semibold mb-4">What to expect</h3>
                <ul className="space-y-3">
                  {expectations.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-foreground/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right - Form */}
            <div className="p-8 md:p-10 rounded-2xl border border-border bg-background shadow-sm">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Request your demo</h2>
                <p className="text-muted-foreground">
                  Fill out the form and we'll schedule a walkthrough.
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
                    What are you solving? <span className="text-muted-foreground">*</span>
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

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message <span className="text-muted-foreground/60">(optional)</span>
                  </Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Tell us more about your needs..."
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
                  {isSubmitting ? "Submitting..." : "Request Demo"}
                  {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to receive communications from Specter.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

