import { Link } from "react-router-dom";
import { Moon, Sun, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { useTheme } from "@/hooks/useTheme";

const footerLinks = {
  platform: [
    { label: "Case Analysis", href: "/platform/case-analysis" },
    { label: "Cortex Agent", href: "/platform/cortex-agent" },
    { label: "Document Analysis", href: "/platform/document-analysis" },
    { label: "Drafting", href: "/platform/drafting" },
    { label: "Research", href: "/platform/research" },
  ],
  solutions: [
    { label: "In-House Legal Teams", href: "/solutions/in-house-legal" },
    { label: "Procurement & Vendor", href: "/solutions/procurement" },
    { label: "Privacy & Compliance", href: "/solutions/privacy-compliance" },
    { label: "Law Firms", href: "/solutions/law-firms" },
    { label: "Real Estate", href: "/solutions/real-estate" },
    { label: "Logistics", href: "/solutions/logistics" },
  ],
  company: [
    { label: "About", href: "/company/about" },
    { label: "Contact", href: "/company/contact" },
    { label: "Trust & Security", href: "/trust" },
  ],
  getStarted: [
    { label: "Request a Demo", href: "/demo" },
    { label: "Start a Pilot", href: "/pilot" },
  ],
};

export function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="border-t border-border">
      {/* Main footer content */}
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <BrandLogo className="h-7 w-auto" />
              <span className="text-xl font-bold tracking-tight group-hover:opacity-70 transition-opacity">SPECTER</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Professional-class legal AI for US business teams. 
              Domain-specific intelligence with source-linked outputs.
            </p>
            
            {/* Theme toggle */}
            <div className="mt-6 flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="gap-2"
              >
                {theme === "light" ? (
                  <>
                    <Moon className="h-4 w-4" />
                    <span>Dark mode</span>
                  </>
                ) : (
                  <>
                    <Sun className="h-4 w-4" />
                    <span>Light mode</span>
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold text-sm mb-4">Get Started</h4>
            <div className="space-y-3">
              <Button className="w-full justify-between" asChild>
                <Link to="/demo">
                  Request a Demo
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-between" asChild>
                <Link to="/pilot">
                  Start a Pilot
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              hello@specterlaw.us
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-border">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Specter. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <Link to="/privacy" className="hover:text-foreground transition-colors">
                  Privacy
                </Link>
                <Link to="/terms" className="hover:text-foreground transition-colors">
                  Terms
                </Link>
              </div>
            </div>
            <p className="text-xs text-muted-foreground max-w-md md:text-right">
              <strong>Disclaimer:</strong> Specter is not a law firm and does not provide legal advice. 
              Outputs are for informational purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
