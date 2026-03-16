import { cn } from "@/lib/utils";
import { Scale } from "lucide-react";

export interface LegalNetworkProps {
  className?: string;
  width?: string;
  height?: string;
  showConnections?: boolean;
  lineMarkerSize?: number;
  animateLines?: boolean;
  animateMarkers?: boolean;
}

const LegalNetwork = ({
  className,
  width = "100%",
  height = "100%",
  showConnections = true,
  lineMarkerSize = 18,
  animateLines = true,
  animateMarkers = true,
}: LegalNetworkProps) => {
  return (
    <div className={cn("relative", className)} style={{ width, height }}>
      <svg className="text-muted w-full h-full" viewBox="0 0 200 100">
        <g
          stroke="currentColor"
          fill="none"
          strokeWidth="0.3"
          strokeDasharray="100 100"
          pathLength="100"
          markerStart="url(#legal-circle-marker)"
        >
          <path strokeDasharray="100 100" pathLength="100" d="M 10 20 h 79.5 q 5 0 5 5 v 30" />
          <path strokeDasharray="100 100" pathLength="100" d="M 180 10 h -69.7 q -5 0 -5 5 v 30" />
          <path d="M 130 20 v 21.8 q 0 5 -5 5 h -10" />
          <path d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50" />
          <path
            strokeDasharray="100 100"
            pathLength="100"
            d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20"
          />
          <path d="M 94.8 95 v -36" />
          <path d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14" />
          <path d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20" />
          {animateLines && (
            <animate
              attributeName="stroke-dashoffset"
              from="100"
              to="0"
              dur="1s"
              fill="freeze"
              calcMode="spline"
              keySplines="0.25,0.1,0.5,1"
              keyTimes="0; 1"
            />
          )}
        </g>

        <g mask="url(#legal-mask-1)">
          <circle className="legal-network legal-line-1" cx="0" cy="0" r="8" fill="url(#legal-grad-1)" />
        </g>
        <g mask="url(#legal-mask-2)">
          <circle className="legal-network legal-line-2" cx="0" cy="0" r="8" fill="url(#legal-grad-2)" />
        </g>
        <g mask="url(#legal-mask-3)">
          <circle className="legal-network legal-line-3" cx="0" cy="0" r="8" fill="url(#legal-grad-3)" />
        </g>
        <g mask="url(#legal-mask-4)">
          <circle className="legal-network legal-line-4" cx="0" cy="0" r="8" fill="url(#legal-grad-4)" />
        </g>
        <g mask="url(#legal-mask-5)">
          <circle className="legal-network legal-line-5" cx="0" cy="0" r="8" fill="url(#legal-grad-5)" />
        </g>
        <g mask="url(#legal-mask-6)">
          <circle className="legal-network legal-line-6" cx="0" cy="0" r="8" fill="url(#legal-grad-6)" />
        </g>
        <g mask="url(#legal-mask-7)">
          <circle className="legal-network legal-line-7" cx="0" cy="0" r="8" fill="url(#legal-grad-7)" />
        </g>
        <g mask="url(#legal-mask-8)">
          <circle className="legal-network legal-line-8" cx="0" cy="0" r="8" fill="url(#legal-grad-8)" />
        </g>

        <g>
          {showConnections && (
            <g fill="url(#legal-connection-gradient)">
              <rect x="93" y="37" width="2.5" height="5" rx="0.7" />
              <rect x="104" y="37" width="2.5" height="5" rx="0.7" />
              <rect x="116.3" y="44" width="2.5" height="5" rx="0.7" transform="rotate(90 116.25 45.5)" />
              <rect x="122.8" y="44" width="2.5" height="5" rx="0.7" transform="rotate(90 116.25 45.5)" />
              <rect x="104" y="16" width="2.5" height="5" rx="0.7" transform="rotate(180 105.25 39.5)" />
              <rect x="114.5" y="16" width="2.5" height="5" rx="0.7" transform="rotate(180 105.25 39.5)" />
              <rect x="80" y="-13.6" width="2.5" height="5" rx="0.7" transform="rotate(270 115.25 19.5)" />
              <rect x="87" y="-13.6" width="2.5" height="5" rx="0.7" transform="rotate(270 115.25 19.5)" />
            </g>
          )}
          <rect
            x="85"
            y="40"
            width="30"
            height="20"
            rx="2"
            fill="url(#legal-center-gradient)"
            filter="url(#legal-light-shadow)"
          />
        </g>

        <defs>
          <mask id="legal-mask-1">
            <path d="M 10 20 h 79.5 q 5 0 5 5 v 24" strokeWidth="0.5" stroke="white" />
          </mask>
          <mask id="legal-mask-2">
            <path d="M 180 10 h -69.7 q -5 0 -5 5 v 24" strokeWidth="0.5" stroke="white" />
          </mask>
          <mask id="legal-mask-3">
            <path d="M 130 20 v 21.8 q 0 5 -5 5 h -10" strokeWidth="0.5" stroke="white" />
          </mask>
          <mask id="legal-mask-4">
            <path d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50" strokeWidth="0.5" stroke="white" />
          </mask>
          <mask id="legal-mask-5">
            <path d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20" strokeWidth="0.5" stroke="white" />
          </mask>
          <mask id="legal-mask-6">
            <path d="M 94.8 95 v -36" strokeWidth="0.5" stroke="white" />
          </mask>
          <mask id="legal-mask-7">
            <path d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 28" strokeWidth="0.5" stroke="white" />
          </mask>
          <mask id="legal-mask-8">
            <path d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 35" strokeWidth="0.5" stroke="white" />
          </mask>

          <radialGradient id="legal-grad-1" fx="1">
            <stop offset="0%" stopColor="hsl(var(--foreground))" />
            <stop offset="50%" stopColor="hsl(var(--foreground) / 0.7)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="legal-grad-2" fx="1">
            <stop offset="0%" stopColor="hsl(var(--foreground) / 0.9)" />
            <stop offset="50%" stopColor="hsl(var(--foreground) / 0.65)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="legal-grad-3" fx="1">
            <stop offset="0%" stopColor="hsl(var(--foreground) / 0.8)" />
            <stop offset="50%" stopColor="hsl(var(--foreground) / 0.6)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="legal-grad-4" fx="1">
            <stop offset="0%" stopColor="hsl(var(--foreground) / 0.75)" />
            <stop offset="50%" stopColor="hsl(var(--foreground) / 0.5)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="legal-grad-5" fx="1">
            <stop offset="0%" stopColor="hsl(var(--foreground) / 0.9)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="legal-grad-6" fx="1">
            <stop offset="0%" stopColor="hsl(var(--foreground) / 0.85)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="legal-grad-7" fx="1">
            <stop offset="0%" stopColor="hsl(var(--foreground) / 0.8)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="legal-grad-8" fx="1">
            <stop offset="0%" stopColor="hsl(var(--foreground) / 0.95)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          <linearGradient id="legal-center-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--foreground) / 0.95)" />
            <stop offset="100%" stopColor="hsl(var(--foreground) / 0.75)" />
          </linearGradient>

          <filter id="legal-light-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="1.5" dy="1.5" stdDeviation="2" floodColor="hsl(var(--foreground))" floodOpacity="0.3" />
          </filter>
          <marker
            id="legal-circle-marker"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth={lineMarkerSize}
            markerHeight={lineMarkerSize}
          >
            <circle id="innerMarkerCircle" cx="5" cy="5" r="2" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="0.5">
              {animateMarkers && <animate attributeName="r" values="0; 3; 2" dur="0.5s" />}
            </circle>
          </marker>
          <linearGradient id="legal-connection-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--foreground) / 0.5)" />
            <stop offset="60%" stopColor="hsl(var(--foreground) / 0.3)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="flex items-center justify-center"
          style={{
            marginTop: "0%",
            width: "15%",
            height: "20%",
          }}
        >
          <Scale className="w-full h-full text-background drop-shadow-md" strokeWidth={2} />
        </div>
      </div>
    </div>
  );
};

export { LegalNetwork };
