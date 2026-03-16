import { Layout } from "@/components/layout";
import { EtherealShadow } from "@/components/ui/ethereal-shadow";
import { Shield, FileText, Lock, Eye, Mail } from "lucide-react";

export default function Privacy() {
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
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Privacy Policy</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Privacy, explained
              <br />
              <span className="text-muted-foreground">with clarity</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              This policy describes how Specter collects, uses, and protects information
              provided through our services. We keep data handling strict and transparent.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">Last updated: March 2026</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              Specter provides AI-assisted legal analysis for business teams. We process
              information that customers and authorized users submit to the platform,
              including messages, documents, and contract data. We do not sell personal
              information. We do not use customer data to train public models.
            </p>
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                Data Categories
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">Information we collect</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: FileText,
                  title: "Customer content",
                  description:
                    "Documents, messages, and inputs submitted to generate analysis or summaries.",
                },
                {
                  icon: Eye,
                  title: "Usage data",
                  description:
                    "Basic usage metrics such as feature interactions, error logs, and performance data.",
                },
                {
                  icon: Lock,
                  title: "Account information",
                  description:
                    "User contact details, authentication records, and access permissions.",
                },
                {
                  icon: Shield,
                  title: "Security data",
                  description:
                    "Audit logs, access events, and security telemetry used to protect the service.",
                },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl border border-border bg-background">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-lg border border-border flex items-center justify-center bg-surface-subtle">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Use */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">How we use information</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Provide and operate the Specter platform and its features.</li>
              <li>Process documents and queries to generate outputs for authorized users.</li>
              <li>Maintain security, detect misuse, and prevent fraud.</li>
              <li>Improve reliability, performance, and product quality.</li>
              <li>Comply with legal obligations and enforce our terms.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Data Handling */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Data handling and retention</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We retain customer content only as long as needed to provide the service or
              as agreed with your organization. Retention periods can be configured to
              meet your policies. Backup data is protected and retained for limited periods.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You may request deletion of customer content and account data. We confirm
              deletion once completed, subject to legal or contractual retention requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Sharing */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Sharing and disclosures</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We share information with authorized service providers and subprocessors
              that support the platform. These providers are contractually bound to
              protect data and use it only for the services they provide to us.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We may disclose information if required by law or to protect the rights,
              safety, and security of our users and the service.
            </p>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Security</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We implement administrative, technical, and organizational safeguards
              designed to protect customer data, including encryption, access controls,
              logging, and continuous monitoring.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Encryption in transit and at rest.</li>
              <li>Role-based access control and audit logs.</li>
              <li>Security monitoring and incident response procedures.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Rights */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Your rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              Depending on your location and relationship with Specter, you may have
              rights to access, correct, or delete personal information. We respond to
              verified requests within required timeframes. For requests, contact us
              at the address below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-background p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact</h2>
            <p className="text-muted-foreground mb-6">
              Questions about this policy or data handling? Contact our privacy team.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-background">
              <Mail className="h-5 w-5" />
              <span className="font-medium">privacy@specterlaw.us</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}


