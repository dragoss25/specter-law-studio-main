import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, AlertTriangle, Link2, HelpCircle, CheckCircle } from "lucide-react";

export function CortexOutputMock() {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <Card className="cortex-glow border-2 dark:bg-card/50">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-foreground animate-pulse" />
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Cortex Analysis
          </span>
        </div>
        <CardTitle className="text-lg mt-2">Vendor Agreement Review</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5 h-auto">
            <TabsTrigger value="summary" className="text-xs py-2 px-1 flex flex-col gap-1">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Summary</span>
            </TabsTrigger>
            <TabsTrigger value="findings" className="text-xs py-2 px-1 flex flex-col gap-1">
              <CheckCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Findings</span>
            </TabsTrigger>
            <TabsTrigger value="risks" className="text-xs py-2 px-1 flex flex-col gap-1">
              <AlertTriangle className="h-4 w-4" />
              <span className="hidden sm:inline">Risk Notes</span>
            </TabsTrigger>
            <TabsTrigger value="sources" className="text-xs py-2 px-1 flex flex-col gap-1">
              <Link2 className="h-4 w-4" />
              <span className="hidden sm:inline">Sources</span>
            </TabsTrigger>
            <TabsTrigger value="next" className="text-xs py-2 px-1 flex flex-col gap-1">
              <HelpCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Next Steps</span>
            </TabsTrigger>
          </TabsList>

          <div className="mt-4 min-h-[200px]">
            <TabsContent value="summary" className="mt-0 space-y-3">
              <div className="text-sm space-y-2">
                <p className="font-medium">Executive Summary</p>
                <p className="text-muted-foreground">
                  This Master Services Agreement governs the relationship between Client Corp and Vendor Inc. 
                  for software implementation services. Key terms include a 36-month initial term with 
                  auto-renewal, limitation of liability capped at 12 months of fees, and standard 
                  mutual indemnification provisions.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="findings" className="mt-0 space-y-3">
              <div className="text-sm space-y-3">
                <p className="font-medium">Key Findings</p>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-muted-foreground">
                    <span className="text-foreground">•</span>
                    Limitation of liability: Capped at 12 months of fees paid
                  </li>
                  <li className="flex gap-2 text-muted-foreground">
                    <span className="text-foreground">•</span>
                    Auto-renewal: 12-month periods with 60-day notice required
                  </li>
                  <li className="flex gap-2 text-muted-foreground">
                    <span className="text-foreground">•</span>
                    IP assignment: Work product assigned to Client upon payment
                  </li>
                  <li className="flex gap-2 text-muted-foreground">
                    <span className="text-foreground">•</span>
                    Confidentiality: 5-year post-termination obligation
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="risks" className="mt-0 space-y-3">
              <div className="text-sm space-y-3">
                <p className="font-medium">Risk Notes & Uncertainty Flags</p>
                <div className="space-y-2">
                  <div className="p-3 rounded-md border border-border bg-muted/50">
                    <p className="font-medium text-xs uppercase tracking-wide mb-1">Limitation of Liability</p>
                    <p className="text-muted-foreground text-xs">
                      The 12-month cap may be insufficient for critical system implementations. 
                      Consider negotiating higher caps for data breaches or gross negligence.
                    </p>
                  </div>
                  <div className="p-3 rounded-md border border-border bg-muted/50">
                    <p className="font-medium text-xs uppercase tracking-wide mb-1">Auto-Renewal Terms</p>
                    <p className="text-muted-foreground text-xs">
                      60-day notice window is relatively short. Recommend calendar reminders 
                      at 90 and 75 days before renewal date.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="sources" className="mt-0 space-y-3">
              <div className="text-sm space-y-3">
                <p className="font-medium">Linked Sources</p>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-muted-foreground text-xs">
                    <Link2 className="h-3 w-3 mt-0.5 flex-shrink-0" />
                    <span>Section 8.2 — Limitation of Liability (page 12)</span>
                  </li>
                  <li className="flex gap-2 text-muted-foreground text-xs">
                    <Link2 className="h-3 w-3 mt-0.5 flex-shrink-0" />
                    <span>Section 3.1 — Term and Renewal (page 4)</span>
                  </li>
                  <li className="flex gap-2 text-muted-foreground text-xs">
                    <Link2 className="h-3 w-3 mt-0.5 flex-shrink-0" />
                    <span>Section 5.4 — Intellectual Property Rights (page 8)</span>
                  </li>
                  <li className="flex gap-2 text-muted-foreground text-xs">
                    <Link2 className="h-3 w-3 mt-0.5 flex-shrink-0" />
                    <span>Section 7.1 — Confidentiality Obligations (page 10)</span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="next" className="mt-0 space-y-3">
              <div className="text-sm space-y-3">
                <p className="font-medium">Next Questions & Steps</p>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-muted-foreground">
                    <span className="text-foreground">1.</span>
                    Clarify data handling procedures under Section 6.3
                  </li>
                  <li className="flex gap-2 text-muted-foreground">
                    <span className="text-foreground">2.</span>
                    Request higher liability cap for data security incidents
                  </li>
                  <li className="flex gap-2 text-muted-foreground">
                    <span className="text-foreground">3.</span>
                    Confirm insurance requirements meet company standards
                  </li>
                  <li className="flex gap-2 text-muted-foreground">
                    <span className="text-foreground">4.</span>
                    Review with counsel before execution
                  </li>
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>

        <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
          This analysis is for informational purposes only and does not constitute legal advice.
        </p>
      </CardContent>
    </Card>
  );
}
