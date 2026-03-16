import { cn } from "@/lib/utils";

interface BrandLogoProps {
  alt?: string;
  className?: string;
  containerClassName?: string;
}

export function BrandLogo({
  alt = "Specter",
  className = "h-7 w-auto",
  containerClassName,
}: BrandLogoProps) {
  return (
    <span className={cn("relative inline-flex items-center justify-center", containerClassName)}>
      <img
        src="/logos/specterlogo.png"
        alt={alt}
        decoding="async"
        fetchPriority="high"
        className={cn(
          className,
          "invert dark:invert-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0 group-focus-visible:opacity-0 group-focus-within:opacity-0",
        )}
      />
      <img
        src="/logos/americanspecterlogo.png"
        alt={`${alt} (US)`}
        loading="lazy"
        decoding="async"
        className={cn(
          className,
          "transition-opacity duration-300 opacity-0 absolute inset-0 group-hover:opacity-100 group-focus-visible:opacity-100 group-focus-within:opacity-100",
        )}
      />
    </span>
  );
}
