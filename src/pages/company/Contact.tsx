import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, ArrowRight, MessageSquare, Shield, Clock } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const contactOptions = [
  {
    icon: Mail,
    title: "General Inquiries",
    description: "Questions about Specter or getting started",
    contact: "hello@specterlaw.us",
    href: "mailto:hello@specterlaw.us",
  },
  {
    icon: Shield,
    title: "Security Questions",
    description: "Data handling, security, and compliance",
    contact: "security@specterlaw.us",
    href: "mailto:security@specterlaw.us",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Serving US-based legal teams",
    contact: "United States",
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Message sent!", {
      description: "We'll get back to you within 1-2 business days.",
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
              <MessageSquare className="h-4 w-4" />
              <span className="text-sm font-medium">Contact Us</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Get in touch
            </h1>
            
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Questions about Specter? We'd love to hear from you. 
              Our team typically responds within 1-2 business days.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="p-8 md:p-10 rounded-2xl border border-border bg-background">
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-2">Send a message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll be in touch soon.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium">
                        First name <span className="text-muted-foreground">*</span>
                      </Label>
                      <Input 
                        id="firstName" 
                        name="firstName" 
                        required 
                        className="h-12 rounded-xl"
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
                        className="h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email <span className="text-muted-foreground">*</span>
                    </Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      className="h-12 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium">
                      Company
                    </Label>
                    <Input 
                      id="company" 
                      name="company" 
                      className="h-12 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message <span className="text-muted-foreground">*</span>
                    </Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      rows={5}
                      placeholder="How can we help?"
                      required
                      className="rounded-xl resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-12 rounded-xl" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-6">Other ways to reach us</h2>
                <div className="space-y-4">
                  {contactOptions.map((option) => (
                    <div 
                      key={option.title}
                      className={cn(
                        "flex items-start gap-4 p-6 rounded-xl border border-border bg-background",
                        option.href && "hover:border-foreground/20 transition-colors cursor-pointer"
                      )}
                      onClick={() => option.href && window.open(option.href, '_blank')}
                    >
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg border border-border flex items-center justify-center bg-surface-subtle">
                        <option.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{option.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{option.description}</p>
                        <p className="text-sm font-medium mt-2">{option.contact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response time */}
              <div className="p-6 rounded-xl border border-border bg-surface-subtle">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg border border-border flex items-center justify-center bg-background">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Response Time</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      We typically respond within 1-2 business days. For urgent security matters, 
                      please email security@specterlaw.us directly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Demo CTA */}
              <div className="p-6 rounded-xl border border-border bg-background">
                <h3 className="font-semibold mb-2">Looking for a demo?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  If you'd like to see Cortex in action, request a demo and we'll 
                  set up a walkthrough with your team.
                </p>
                <Button asChild className="w-full">
                  <Link to="/demo">
                    Request a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-20 lg:hidden" />
    </Layout>
  );
}
