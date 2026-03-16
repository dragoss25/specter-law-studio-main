import { useState } from "react";
import { type LucideIcon } from "lucide-react";

interface AccordionItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

interface AccordionItemProps {
  item: AccordionItem;
  isActive: boolean;
  onActivate: () => void;
}

function AccordionDesktopCard({ item, isActive, onActivate }: AccordionItemProps) {
  const Icon = item.icon;

  return (
    <button
      type="button"
      className={`
        relative h-[450px] rounded-2xl overflow-hidden border border-border text-left
        transition-all duration-700 ease-in-out
        ${isActive ? "w-[400px] bg-foreground/5" : "w-[60px] bg-background/50"}
      `}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      aria-pressed={isActive}
      aria-label={item.title}
    >
      {isActive && (
        <div className="absolute top-8 left-8 opacity-0 animate-fade-in" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
          <div className="h-16 w-16 rounded-xl bg-foreground/10 flex items-center justify-center">
            <Icon className="h-8 w-8 text-foreground" />
          </div>
        </div>
      )}

      {isActive && (
        <div className="absolute top-32 left-8 right-8 opacity-0 animate-fade-in" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
          <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
        </div>
      )}

      <span
        className={`
          absolute text-foreground text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${isActive ? "bottom-6 left-1/2 -translate-x-1/2 rotate-0" : "w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90"}
        `}
      >
        {item.title}
      </span>
    </button>
  );
}

interface InteractiveImageAccordionProps {
  items: AccordionItem[];
  defaultActiveIndex?: number;
}

export function InteractiveImageAccordion({ items, defaultActiveIndex = 0 }: InteractiveImageAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  return (
    <>
      <div className="space-y-3 md:hidden">
        {items.map((item, index) => {
          const Icon = item.icon;
          const isActive = index === activeIndex;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-expanded={isActive}
              className={`w-full rounded-2xl border p-4 text-left transition-colors ${
                isActive ? "border-foreground/20 bg-foreground/5" : "border-border bg-background"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 shrink-0 rounded-lg border border-border bg-surface-subtle flex items-center justify-center">
                  <Icon className="h-5 w-5 text-foreground" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  {isActive && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="hidden md:flex flex-row items-center justify-center gap-4 overflow-x-auto p-4">
        {items.map((item, index) => (
          <AccordionDesktopCard key={item.id} item={item} isActive={index === activeIndex} onActivate={() => setActiveIndex(index)} />
        ))}
      </div>
    </>
  );
}
