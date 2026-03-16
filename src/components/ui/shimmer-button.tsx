import React, { CSSProperties } from "react";

import { cn } from "@/lib/utils";

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "100px",
      className,
      children,
      variant = "primary",
      shimmerColor,
      background,
      ...props
    },
    ref,
  ) => {
    // Theme-aware defaults based on variant
    const isPrimary = variant === "primary";
    
    // Primary: dark bg in light mode, light bg in dark mode
    // Secondary: transparent/light bg with border
    const resolvedBackground = background ?? (isPrimary ? undefined : "transparent");
    const resolvedShimmerColor = shimmerColor ?? (isPrimary ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.1)");
    
    return (
      <button
        style={
          {
            "--spread": "90deg",
            "--shimmer-color": resolvedShimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": resolvedBackground,
          } as CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 [border-radius:var(--radius)]",
          "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
          // Primary variant: solid bg that inverts with theme
          isPrimary && [
            "bg-foreground text-background border border-foreground/10",
            "dark:bg-background dark:text-foreground dark:border-background/10",
            "[--bg:hsl(var(--foreground))] dark:[--bg:hsl(var(--background))]",
          ],
          // Secondary variant: transparent with border
          !isPrimary && [
            "bg-transparent text-foreground border border-foreground",
            "[--bg:transparent]",
          ],
          className,
        )}
        ref={ref}
        {...props}
      >
        {/* spark container */}
        <div
          className={cn(
            "-z-30 blur-[2px]",
            "absolute inset-0 overflow-visible [container-type:size]",
          )}
        >
          {/* spark */}
          <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
            {/* spark before */}
            <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
          </div>
        </div>
        {children}

        {/* Highlight */}
        <div
          className={cn(
            "insert-0 absolute size-full",
            "rounded-2xl px-4 py-1.5 text-sm font-medium",
            // Primary highlight (inverted in dark)
            isPrimary && "shadow-[inset_0_-8px_10px_#ffffff1f] group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f] dark:shadow-[inset_0_-8px_10px_#0000001f] dark:group-hover:shadow-[inset_0_-6px_10px_#0000002f] dark:group-active:shadow-[inset_0_-10px_10px_#0000003f]",
            // Secondary highlight
            !isPrimary && "shadow-[inset_0_-8px_10px_#0000000a] group-hover:shadow-[inset_0_-6px_10px_#0000001a] group-active:shadow-[inset_0_-10px_10px_#0000002a] dark:shadow-[inset_0_-8px_10px_#ffffff0a] dark:group-hover:shadow-[inset_0_-6px_10px_#ffffff1a] dark:group-active:shadow-[inset_0_-10px_10px_#ffffff2a]",
            // transition
            "transform-gpu transition-all duration-300 ease-in-out",
          )}
        />

        {/* backdrop */}
        <div
          className={cn(
            "absolute -z-20 [border-radius:var(--radius)] [inset:var(--cut)]",
            isPrimary && "bg-foreground dark:bg-background",
            !isPrimary && "bg-transparent",
          )}
        />
      </button>
    );
  },
);

ShimmerButton.displayName = "ShimmerButton";

export { ShimmerButton };
