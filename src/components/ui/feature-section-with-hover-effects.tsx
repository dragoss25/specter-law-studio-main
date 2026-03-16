import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FeaturesSectionWithHoverEffectsProps {
  features: Feature[];
}

export function FeaturesSectionWithHoverEffects({ features }: FeaturesSectionWithHoverEffectsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <FeatureCard key={feature.title} {...feature} index={index} totalFeatures={features.length} />
      ))}
    </div>
  );
}

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  index,
  totalFeatures,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
  totalFeatures: number;
}) => {
  const isInTopRow = index < 3;
  const isLeftColumn = index % 3 === 0;
  const isRightColumn = (index + 1) % 3 === 0;
  const isInLastRow = index >= totalFeatures - 3;

  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        isLeftColumn && "lg:border-l dark:border-neutral-800",
        !isInLastRow && "lg:border-b dark:border-neutral-800"
      )}
    >
      {isInTopRow && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {!isInTopRow && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        <Icon className="h-6 w-6" />
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
