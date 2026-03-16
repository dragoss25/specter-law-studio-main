import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import { SeoManager } from "@/components/seo/SeoManager";

const Home = lazy(() => import("./pages/Home"));
const Demo = lazy(() => import("./pages/Demo"));
const Pilot = lazy(() => import("./pages/Pilot"));
const Trust = lazy(() => import("./pages/Trust"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));

const CaseAnalysis = lazy(() => import("./pages/platform/CaseAnalysis"));
const CortexAgent = lazy(() => import("./pages/platform/CortexAgent"));
const DocumentAnalysis = lazy(() => import("./pages/platform/DocumentAnalysis"));
const Drafting = lazy(() => import("./pages/platform/Drafting"));
const Research = lazy(() => import("./pages/platform/Research"));

const InHouseLegal = lazy(() => import("./pages/solutions/InHouseLegal"));
const Procurement = lazy(() => import("./pages/solutions/Procurement"));
const PrivacyCompliance = lazy(() => import("./pages/solutions/PrivacyCompliance"));
const LawFirms = lazy(() => import("./pages/solutions/LawFirms"));
const RealEstate = lazy(() => import("./pages/solutions/RealEstate"));
const Logistics = lazy(() => import("./pages/solutions/Logistics"));

const About = lazy(() => import("./pages/company/About"));
const Contact = lazy(() => import("./pages/company/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

function RouteLoadingFallback() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center px-4">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-foreground" aria-hidden="true" />
      <span className="sr-only">Loading page</span>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SeoManager />
          <Suspense fallback={<RouteLoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/pilot" element={<Pilot />} />
              <Route path="/trust" element={<Trust />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />

              {/* Platform */}
              <Route path="/platform/case-analysis" element={<CaseAnalysis />} />
              <Route path="/platform/cortex-agent" element={<CortexAgent />} />
              <Route path="/platform/document-analysis" element={<DocumentAnalysis />} />
              <Route path="/platform/drafting" element={<Drafting />} />
              <Route path="/platform/research" element={<Research />} />

              {/* Solutions */}
              <Route path="/solutions/in-house-legal" element={<InHouseLegal />} />
              <Route path="/solutions/procurement" element={<Procurement />} />
              <Route path="/solutions/privacy-compliance" element={<PrivacyCompliance />} />
              <Route path="/solutions/law-firms" element={<LawFirms />} />
              <Route path="/solutions/real-estate" element={<RealEstate />} />
              <Route path="/solutions/logistics" element={<Logistics />} />

              {/* Company */}
              <Route path="/company/about" element={<About />} />
              <Route path="/company/contact" element={<Contact />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
