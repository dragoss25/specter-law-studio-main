import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";

import Home from "./pages/Home";
import Demo from "./pages/Demo";
import Pilot from "./pages/Pilot";
import Trust from "./pages/Trust";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { CaseAnalysis, CortexAgent, DocumentAnalysis, Drafting, Research } from "./pages/platform";
import { InHouseLegal, Procurement, PrivacyCompliance, LawFirms, RealEstate, Logistics } from "./pages/solutions";
import { About, Contact } from "./pages/company";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
