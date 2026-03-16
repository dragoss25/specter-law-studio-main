import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Briefcase, Building2, ChevronDown, FileText, Scale, ScrollText, User } from "lucide-react";

const content = {
  sectionTitle: "Real-time document drafting",
  sectionSubtitle: "Fill in the inputs and receive a structured draft within seconds.",
  docType: "Document type",
  selectTemplate: "Select a template",
  contractType: "Contract",
  applicationType: "Application",
  memoType: "Memorandum",
  complaintType: "Complaint",
  corporateType: "Corporate",
  noticeType: "Notice",
  contractor: "Service provider",
  client: "Client",
  filled: "Completed",
  companyName: "Company name*",
  taxId: "Tax ID*",
  registerId: "Commercial register*",
  fullName: "Full name*",
  address: "Address*",
  previewTitle: "Document preview",
  contractText: `SERVICE AGREEMENT
No. 127/2026 dated 15.01.2026

§ 1 Contract parties

1.1. EXAMPLE CONSULTING GmbH, Musterstraße 45, 10115 Berlin,
represented by management, hereinafter "Service Provider".

and

1.2. Max Mustermann, Musterweg 12, 50667 Cologne,
hereinafter "Client".

§ 2 Scope of contract

2.1. The Service Provider delivers legal advisory and
document-related services in commercial and civil law.

2.2. The services include:
   a) Analysis of legal documents
   b) Drafting of legal contracts
   c) Structuring legal arguments
   d) Support for negotiation workflows`,
};

export function DraftDemo() {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) return;

    let currentIndex = 0;
    const typingSpeed = 15;
    let restartTimeoutId: number | undefined;

    const interval = setInterval(() => {
      if (currentIndex < content.contractText.length) {
        setDisplayedText(content.contractText.slice(0, currentIndex + 1));
        currentIndex += 1;
      } else {
        setIsTyping(false);
        clearInterval(interval);
        restartTimeoutId = window.setTimeout(() => {
          setDisplayedText("");
          setIsTyping(true);
        }, 3000);
      }
    }, typingSpeed);

    return () => {
      clearInterval(interval);
      if (restartTimeoutId !== undefined) {
        window.clearTimeout(restartTimeoutId);
      }
    };
  }, [isTyping]);

  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">{content.sectionTitle}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{content.sectionSubtitle}</p>
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
                  <h3 className="font-semibold text-sm">{content.docType}</h3>
                  <p className="text-muted-foreground text-xs">{content.selectTemplate}</p>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="bg-background border-2 border-foreground rounded-xl p-3 cursor-pointer">
                  <FileText className="h-5 w-5 mb-1" />
                  <span className="text-xs font-medium block">{content.contractType}</span>
                </div>
                <div className="bg-muted/30 border border-border rounded-xl p-3 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                  <Scale className="h-5 w-5 text-muted-foreground mb-1" />
                  <span className="text-xs font-medium block text-muted-foreground">{content.applicationType}</span>
                </div>
                <div className="bg-muted/30 border border-border rounded-xl p-3 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                  <ScrollText className="h-5 w-5 text-muted-foreground mb-1" />
                  <span className="text-xs font-medium block text-muted-foreground">{content.memoType}</span>
                </div>
                <div className="bg-muted/30 border border-border rounded-xl p-3 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                  <AlertTriangle className="h-5 w-5 text-muted-foreground mb-1" />
                  <span className="text-xs font-medium block text-muted-foreground">{content.complaintType}</span>
                </div>
                <div className="bg-muted/30 border border-border rounded-xl p-3 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                  <Briefcase className="h-5 w-5 text-muted-foreground mb-1" />
                  <span className="text-xs font-medium block text-muted-foreground">{content.corporateType}</span>
                </div>
                <div className="bg-muted/30 border border-border rounded-xl p-3 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                  <FileText className="h-5 w-5 text-muted-foreground mb-1" />
                  <span className="text-xs font-medium block text-muted-foreground">{content.noticeType}</span>
                </div>
              </div>
            </div>

            <div className="mb-4 bg-background rounded-xl p-4 border border-border">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  <h3 className="font-semibold text-sm">{content.contractor}</h3>
                  <span className="text-xs bg-muted px-2 py-0.5 rounded-full">{content.filled}</span>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-muted-foreground text-xs mb-1 block">{content.companyName}</label>
                  <div className="rounded-lg px-3 py-2 text-sm border border-border bg-muted/20">EXAMPLE CONSULTING GmbH</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-muted-foreground text-xs mb-1 block">{content.taxId}</label>
                    <div className="rounded-lg px-3 py-2 text-sm border border-border bg-muted/20">DE123456789</div>
                  </div>
                  <div>
                    <label className="text-muted-foreground text-xs mb-1 block">{content.registerId}</label>
                    <div className="rounded-lg px-3 py-2 text-sm border border-border bg-muted/20">HRB 123456</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-xl p-4 border border-border">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <h3 className="font-semibold text-sm">{content.client}</h3>
                  <span className="text-xs bg-muted px-2 py-0.5 rounded-full">{content.filled}</span>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-muted-foreground text-xs mb-1 block">{content.fullName}</label>
                  <div className="rounded-lg px-3 py-2 text-sm border border-border bg-muted/20">Max Mustermann</div>
                </div>
                <div>
                  <label className="text-muted-foreground text-xs mb-1 block">{content.address}</label>
                  <div className="rounded-lg px-3 py-2 text-sm border border-border bg-muted/20">Musterweg 12, 50667 Cologne</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl shadow-sm overflow-hidden border border-border">
            <div className="bg-background border-b border-border px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span className="text-sm font-medium">{content.previewTitle}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-3 w-3 rounded-full bg-muted-foreground/40" />
                <div className="h-3 w-3 rounded-full bg-muted-foreground/40" />
                <div className="h-3 w-3 rounded-full bg-muted-foreground/40" />
              </div>
            </div>

            <div className="p-8 h-[500px] overflow-y-auto">
              <div className="font-mono text-sm whitespace-pre-wrap leading-relaxed">
                {displayedText}
                {isTyping && <span className="inline-block w-2 h-5 bg-foreground ml-0.5 animate-pulse" />}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
