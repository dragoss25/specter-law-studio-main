import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, Moon, Sun, Brain, FileText, Search, PenTool, Building2, Users, Shield, Briefcase, Scale, Truck, HomeIcon, Mail, Info, LogIn, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { VaporizeTextCycle, Tag } from "@/components/ui/vapour-text-effect";
import { useTheme } from "@/hooks/useTheme";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: JSX.Element;
  items?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "Platform",
    url: "/platform",
    items: [
      {
        title: "Platform Overview",
        description: "The complete Specter platform",
        icon: <Layers className="size-5 shrink-0" />,
        url: "/platform",
      },
      {
        title: "Cortex Agent",
        description: "Multi-step reasoning and research",
        icon: <Brain className="size-5 shrink-0" />,
        url: "/platform/cortex-agent",
      },
      {
        title: "Document Analysis",
        description: "Structured document review",
        icon: <FileText className="size-5 shrink-0" />,
        url: "/platform/document-analysis",
      },
      {
        title: "Drafting",
        description: "Legal drafting assistance",
        icon: <PenTool className="size-5 shrink-0" />,
        url: "/platform/drafting",
      },
      {
        title: "Research",
        description: "Database and internet search",
        icon: <Search className="size-5 shrink-0" />,
        url: "/platform/research",
      },
    ],
  },
  {
    title: "Solutions",
    url: "/solutions",
    items: [
      {
        title: "In-House Legal Teams",
        description: "For corporate legal departments",
        icon: <Building2 className="size-5 shrink-0" />,
        url: "/solutions/in-house-legal",
      },
      {
        title: "Procurement & Vendor",
        description: "Streamline vendor collaboration",
        icon: <Briefcase className="size-5 shrink-0" />,
        url: "/solutions/procurement",
      },
      {
        title: "Privacy & Compliance",
        description: "Support compliance workflows",
        icon: <Shield className="size-5 shrink-0" />,
        url: "/solutions/privacy-compliance",
      },
      {
        title: "Law Firms",
        description: "Efficiency for legal practices",
        icon: <Scale className="size-5 shrink-0" />,
        url: "/solutions/law-firms",
      },
      {
        title: "Real Estate",
        description: "Property transaction support",
        icon: <HomeIcon className="size-5 shrink-0" />,
        url: "/solutions/real-estate",
      },
      {
        title: "Logistics",
        description: "Contract management for logistics",
        icon: <Truck className="size-5 shrink-0" />,
        url: "/solutions/logistics",
      },
    ],
  },
  {
    title: "Trust",
    url: "/trust",
  },
  {
    title: "Resources",
    url: "/resources",
  },
  {
    title: "Company",
    url: "/company",
    items: [
      {
        title: "About",
        description: "Our mission and approach",
        icon: <Info className="size-5 shrink-0" />,
        url: "/company/about",
      },
      {
        title: "Contact",
        description: "Get in touch",
        icon: <Mail className="size-5 shrink-0" />,
        url: "/company/contact",
      },
    ],
  },
];

const mobileExtraLinks = [
  { name: "Trust", url: "/trust" },
  { name: "Resources", url: "/resources" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Track scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close sheet on route change
  useEffect(() => {
    setSheetOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container">
        <nav className="hidden lg:grid lg:grid-cols-3 h-16 items-center">
          {/* Logo - Left */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center gap-2 group"
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
            >
              <img
                src="/logos/specterlogo.png"
                alt="Specter"
                className="h-7 w-auto invert dark:invert-0 group-hover:opacity-70 transition-opacity"
              />
              <div className="w-[110px] h-[28px] overflow-visible">
                <VaporizeTextCycle
                  key={`specter-vapor-${theme}`}
                  texts={["SPECTER"]}
                  font={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: "20px",
                    fontWeight: 700,
                  }}
                  color={theme === "dark" ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)"}
                  spread={3}
                  density={7}
                  animation={{
                    vaporizeDuration: 1.5,
                    fadeInDuration: 0.6,
                    waitDuration: 0,
                  }}
                  direction="left-to-right"
                  alignment="left"
                  tag={Tag.SPAN}
                  triggerOnHover={true}
                  isHovering={isLogoHovered}
                />
              </div>
            </Link>
          </div>

          {/* Navigation Menu - Center */}
          <div className="flex items-center justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => renderMenuItem(item, location.pathname))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTAs - Right */}
          <div className="flex items-center justify-end gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full h-9 w-9"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>
            <a href="https://app.specterlaw.ai/login">
              <Button
                variant="ghost"
                className="text-sm h-9 px-4 font-medium"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            </a>
            <Link to="/demo">
              <ShimmerButton
                variant="primary"
                className="text-sm h-9 px-4"
                borderRadius="8px"
                shimmerDuration="3s"
              >
                <span className="font-medium">Request a Demo</span>
              </ShimmerButton>
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group"
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
            >
              <img
                src="/logos/specterlogo.png"
                alt="Specter"
                className="h-7 w-auto invert dark:invert-0 group-hover:opacity-70 transition-opacity"
              />
              <div className="w-[110px] h-[28px] overflow-visible">
                <VaporizeTextCycle
                  key={`specter-vapor-mobile-${theme}`}
                  texts={["SPECTER"]}
                  font={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: "20px",
                    fontWeight: 700,
                  }}
                  color={theme === "dark" ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)"}
                  spread={3}
                  density={7}
                  animation={{
                    vaporizeDuration: 1.5,
                    fadeInDuration: 0.6,
                    waitDuration: 0,
                  }}
                  direction="left-to-right"
                  alignment="left"
                  tag={Tag.SPAN}
                  triggerOnHover={true}
                  isHovering={isLogoHovered}
                />
              </div>
            </Link>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full h-9 w-9"
              >
                {theme === "light" ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </Button>
              <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <Link to="/" className="flex items-center gap-2">
                        <img
                          src="/logos/specterlogo.png"
                          alt="Specter"
                          className="h-6 w-auto invert dark:invert-0"
                        />
                        <span className="text-lg font-bold">SPECTER</span>
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="my-6 flex flex-col gap-6">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-4"
                    >
                      {menuItems.map((item) => renderMobileMenuItem(item))}
                    </Accordion>
                    <div className="border-t py-4">
                      <div className="grid grid-cols-2 justify-start">
                        {mobileExtraLinks.map((link, idx) => (
                          <Link
                            key={idx}
                            className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                            to={link.url}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <a href="https://app.specterlaw.ai/login">
                        <Button
                          variant="outline"
                          className="w-full text-sm h-10 font-medium"
                        >
                          <LogIn className="h-4 w-4 mr-2" />
                          Login
                        </Button>
                      </a>
                      <Link to="/demo">
                        <ShimmerButton
                          variant="primary"
                          className="w-full text-sm h-10"
                          borderRadius="8px"
                        >
                          <span className="font-medium">Request a Demo</span>
                        </ShimmerButton>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

const renderMenuItem = (item: MenuItem, currentPath: string) => {
  if (item.items) {
    // Apply right-alignment for the Company dropdown since it's at the right side
    const isRightAligned = item.title === "Company";
    
    return (
      <NavigationMenuItem key={item.title} className="text-muted-foreground">
        <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent h-10 px-4 text-sm font-medium hover:text-foreground">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className={isRightAligned ? "right-0 left-auto" : ""}>
          <ul className="w-80 p-3">
            <NavigationMenuLink>
              {item.items.map((subItem) => (
                <li key={subItem.title}>
                  <Link
                    className={cn(
                      "flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground",
                      currentPath === subItem.url && "bg-muted"
                    )}
                    to={subItem.url}
                  >
                    {subItem.icon}
                    <div>
                      <div className="text-sm font-semibold">
                        {subItem.title}
                      </div>
                      {subItem.description && (
                        <p className="text-sm leading-snug text-muted-foreground">
                          {subItem.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </NavigationMenuLink>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <Link
      key={item.title}
      className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      to={item.url}
    >
      {item.title}
    </Link>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <Link
              key={subItem.title}
              className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
              to={subItem.url}
            >
              {subItem.icon}
              <div>
                <div className="text-sm font-semibold">{subItem.title}</div>
                {subItem.description && (
                  <p className="text-sm leading-snug text-muted-foreground">
                    {subItem.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link key={item.title} to={item.url} className="font-semibold">
      {item.title}
    </Link>
  );
};
