import { Layout } from "@/components/layout";
import { EtherealShadow } from "@/components/ui/ethereal-shadow";
import { FileText, Shield, AlertTriangle, Scale, Mail } from "lucide-react";

export default function Terms() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <EtherealShadow
            color="rgba(40, 40, 40, 0.9)"
            animation={{ scale: 60, speed: 70 }}
            noise={{ opacity: 0.4, scale: 1.5 }}
            sizing="fill"
            className="w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background/70 pointer-events-none -z-10" />

        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/80 backdrop-blur-sm mb-8">
              <FileText className="h-4 w-4" />
              <span className="text-sm font-medium">Terms of Service</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Terms for using
              <br />
              <span className="text-muted-foreground">Specter</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              These terms govern access to and use of the Specter platform. By using
              the service, you agree to the terms below.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">Last updated: March 2026</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Acceptance and eligibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                You must have authority to bind your organization to these terms. Use of the
                service is limited to business purposes. If you use the service on behalf of
                an organization, your organization is responsible for all activity under its account.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Accounts and access</h2>
              <p className="text-muted-foreground leading-relaxed">
                You are responsible for maintaining the confidentiality of account credentials and
                for all activity under your account. You must promptly notify us of any suspected
                unauthorized access or security incident.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Use of the service</h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>Do not use the service for unlawful, infringing, or harmful activities.</li>
                <li>Do not attempt to disrupt or reverse engineer the service.</li>
                <li>Do not upload content you do not have rights to use.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Customer content</h2>
              <p className="text-muted-foreground leading-relaxed">
                You retain ownership of content you submit. You grant Specter permission to process
                that content solely to provide the service. You are responsible for the legality and
                accuracy of the content you submit.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="h-5 w-5" />
                <h3 className="font-semibold">No legal advice</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Specter is not a law firm and does not provide legal advice. Outputs are
                informational and must be reviewed by qualified legal professionals.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">AI output limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                The platform provides AI-assisted analysis and drafting. Outputs may contain
                errors or omissions. You are responsible for verifying outputs before relying
                on them for decisions or external communications.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                Each party will protect the other party's confidential information and use it
                only to perform obligations under these terms or a separate agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Fees and payment</h2>
              <p className="text-muted-foreground leading-relaxed">
                If your organization purchases a subscription or pilot, fees are due as set
                out in the applicable order form or agreement. Late payments may result in
                suspension of access.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Term and termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms remain in effect while you use the service. We may suspend or
                terminate access if you violate these terms or pose a security risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed">
                The service is provided on an "as is" and "as available" basis. To the extent
                permitted by law, we disclaim all warranties, including implied warranties of
                merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Limitation of liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Specter will not be liable for any
                indirect, incidental, special, or consequential damages. Our total liability
                for any claim will not exceed the amounts paid for the service in the 12 months
                preceding the claim.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Governing law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms are governed by the laws of the jurisdiction specified in your
                order form or agreement. If no jurisdiction is specified, they are governed
                by the laws of the State of Delaware, without regard to conflict of law rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-background p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Scale className="h-5 w-5" />
              <h2 className="text-2xl md:text-3xl font-bold">Questions?</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              If you have questions about these terms, contact us.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-background">
              <Mail className="h-5 w-5" />
              <span className="font-medium">legal@specterlaw.us</span>
            </div>
          </div>
        </div>
      </section>

      <div className="h-20 lg:hidden" />
    </Layout>
  );
}
