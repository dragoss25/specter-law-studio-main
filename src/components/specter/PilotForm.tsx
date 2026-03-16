import { useState } from "react";
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

export function PilotForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Pilot request submitted!", {
      description: "Our team will reach out to discuss next steps.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Start a Pilot</CardTitle>
        <CardDescription>
          Run Cortex on your real work for 30–60 days.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First name *</Label>
              <Input id="firstName" name="firstName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last name *</Label>
              <Input id="lastName" name="lastName" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Work email *</Label>
            <Input id="email" name="email" type="email" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company *</Label>
            <Input id="company" name="company" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Role / Title *</Label>
            <Input id="role" name="role" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="useCase">What are you solving? *</Label>
            <Select name="useCase" required>
              <SelectTrigger>
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
            <Label>Pilot timeline *</Label>
            <RadioGroup defaultValue="30" name="timeline" className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="30" id="timeline-30" />
                <Label htmlFor="timeline-30" className="font-normal">30 days</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="60" id="timeline-60" />
                <Label htmlFor="timeline-60" className="font-normal">60 days</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="documentTypes">Document types you work with *</Label>
            <Input 
              id="documentTypes" 
              name="documentTypes" 
              placeholder="e.g., MSAs, NDAs, DPAs, SOWs..."
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional context (optional)</Label>
            <Textarea 
              id="message" 
              name="message" 
              placeholder="Tell us about your current workflow..."
              rows={3}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Start Pilot Application"}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            A Specter team member will contact you to discuss scope and next steps.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
