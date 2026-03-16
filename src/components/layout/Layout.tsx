import { Header } from "./Header";
import { Footer } from "./Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section"));
    if (!sections.length) return;

    sections.forEach((section) => {
      if (section.dataset.reveal === "false") return;
      section.classList.add("reveal-on-scroll");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    sections.forEach((section) => {
      if (section.dataset.reveal === "false") return;
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pb-[calc(5.5rem+env(safe-area-inset-bottom))] lg:pb-0">{children}</main>
      <Footer />

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] lg:hidden">
        <Button className="w-full" asChild>
          <Link to="/demo">Request a Demo</Link>
        </Button>
      </div>
    </div>
  );
}
