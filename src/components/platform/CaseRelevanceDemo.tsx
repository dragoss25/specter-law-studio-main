import { motion } from "framer-motion";
import { MessageSquareQuote, Scale } from "lucide-react";

const content = {
  title: "Every citation is mapped to case relevance",
  subtitle: "The analysis does not just list sources. It assigns transparent relevance to the decisive legal paragraph.",
  conversationTitle: "Criminal complaint for filming inside a car",
  promptLabel: "Prompt",
  prompt: "Can I file a complaint if someone films me inside my car without consent?",
  responseTitle: "Legal assessment",
  introOne: "Thank you for your question. Whether filming inside a vehicle is punishable depends on the specific facts of the case.",
  introTwo: "Below is a first legal assessment with prioritized provisions and a relevance marker attached to the key paragraph.",
  sectionTitle: "1. Legal assessment of the incident",
  sectionBody: "Filming without consent may interfere with personality rights. Most relevant are rules protecting highly personal privacy spheres and, depending on facts, provisions on audio capture and image publication.",
  highlightHeading: "a) Possible applicability of Section 201a StGB",
  highlightQuote:
    "Whoever, without authorization, produces or transmits an image of another person who is in a dwelling or in a place specially protected from view, thereby violating that person's highly personal privacy sphere (...).",
  followUp: "If audio is also recorded, Section 201 StGB may become relevant. If images are later published, Section 22 KunstUrhG is typically reviewed as well.",
  relevanceLabel: "Relevance",
  paragraphLabel: "Paragraph",
  descriptionLabel: "Description",
  relevanceHigh: "High",
  popupParagraph: "Section 201a (1) no. 1 StGB",
  popupDescription:
    "This is a core provision for the legal structure. It may apply if filming was unauthorized and the person was in a specially protected space. Whether a car interior meets that threshold is assessed case by case.",
};

export function CaseRelevanceDemo() {
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
          <div className="rounded-3xl border border-border p-4 sm:p-6 md:p-8 bg-card relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_92%_6%,hsl(var(--foreground)/0.08)_0%,transparent_40%)]" />

            <div className="relative z-10 flex items-center justify-between gap-3 mb-5 pb-4 border-b border-border">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground">
                <MessageSquareQuote className="h-3.5 w-3.5" />
                {content.conversationTitle}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground">
                <Scale className="h-3.5 w-3.5" />
                {content.responseTitle}
              </div>
            </div>

            <div className="relative z-10 mb-6 rounded-xl border border-border bg-background p-4 text-sm leading-relaxed">
              <span className="font-semibold text-foreground">{content.promptLabel}:</span> {content.prompt}
            </div>

            <div className="relative z-10 space-y-4 text-base leading-8">
              <p>{content.introOne}</p>
              <p>{content.introTwo}</p>

              <h3 className="text-xl font-semibold pt-1">{content.sectionTitle}</h3>
              <p>{content.sectionBody}</p>

              <p className="font-semibold">{content.highlightHeading}</p>

              <div className="group relative">
                <motion.div
                  className="rounded-lg border border-foreground/35 bg-muted/40 px-4 py-3"
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(0,0,0,0)",
                      "0 0 0 6px hsl(var(--foreground) / 0.06)",
                      "0 0 0 rgba(0,0,0,0)",
                    ],
                  }}
                  transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
                >
                  {content.highlightQuote}
                </motion.div>

                <div className="mt-3 md:hidden rounded-2xl border border-border bg-background p-4 shadow-sm">
                  <div className="space-y-2 text-sm leading-relaxed">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{content.relevanceLabel}:</span>
                      <span className="inline-flex items-center rounded-full border border-foreground/30 bg-foreground/10 px-2.5 py-0.5 text-xs font-semibold">
                        {content.relevanceHigh}
                      </span>
                    </div>
                    <p>
                      <span className="font-semibold">{content.paragraphLabel}:</span> {content.popupParagraph}
                    </p>
                    <p>
                      <span className="font-semibold">{content.descriptionLabel}:</span> {content.popupDescription}
                    </p>
                  </div>
                </div>

                <div className="pointer-events-none hidden md:block absolute z-20 left-1/2 -translate-x-1/2 bottom-[calc(100%+12px)] w-[min(34rem,calc(100vw-5rem))] rounded-2xl border border-border bg-background p-4 shadow-sm opacity-0 translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                  <div className="absolute -bottom-1.5 left-12 h-3 w-3 rotate-45 border-b border-r border-border bg-background" />
                  <div className="space-y-2 text-sm leading-relaxed">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{content.relevanceLabel}:</span>
                      <span className="inline-flex items-center rounded-full border border-foreground/30 bg-foreground/10 px-2.5 py-0.5 text-xs font-semibold">
                        {content.relevanceHigh}
                      </span>
                    </div>
                    <p>
                      <span className="font-semibold">{content.paragraphLabel}:</span> {content.popupParagraph}
                    </p>
                    <p>
                      <span className="font-semibold">{content.descriptionLabel}:</span> {content.popupDescription}
                    </p>
                  </div>
                </div>
              </div>

              <p>{content.followUp}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
