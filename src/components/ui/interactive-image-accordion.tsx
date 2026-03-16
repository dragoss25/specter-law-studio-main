import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';

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
  onMouseEnter: () => void;
}

// --- Accordion Item Component ---
const AccordionItemCard = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
  const Icon = item.icon;

  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer border border-border
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[400px] bg-foreground/5' : 'w-[60px] bg-background/50'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Icon - shown when active */}
      {isActive && (
        <div className="absolute top-8 left-8 opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          <div className="h-16 w-16 rounded-xl bg-foreground/10 flex items-center justify-center">
            <Icon className="h-8 w-8 text-foreground" />
          </div>
        </div>
      )}

      {/* Description - shown when active */}
      {isActive && (
        <div className="absolute top-32 left-8 right-8 opacity-0 animate-fade-in" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          <p className="text-base text-muted-foreground leading-relaxed">
            {item.description}
          </p>
        </div>
      )}

      {/* Caption Text */}
      <span
        className={`
          absolute text-foreground text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0'
              : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

interface InteractiveImageAccordionProps {
  items: AccordionItem[];
  defaultActiveIndex?: number;
}

// --- Main Component ---
export function InteractiveImageAccordion({ items, defaultActiveIndex = 0 }: InteractiveImageAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4">
      {items.map((item, index) => (
        <AccordionItemCard
          key={item.id}
          item={item}
          isActive={index === activeIndex}
          onMouseEnter={() => handleItemHover(index)}
        />
      ))}
    </div>
  );
}
