import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";
import logo from "@/assets/Logo.svg";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home", hasChevron: true },
  { to: "/about", label: "About Us", hasChevron: false },
  { to: "/services", label: "Services", hasChevron: true },
  { to: "/contact", label: "Contact", hasChevron: false },
] as const;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (to: string) => {
    navigate(to);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-4 sm:px-6">
      <nav
        className={cn(
          "mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-4",
          "rounded-full",
          "border border-white/20",
          "bg-secondary/80 backdrop-blur-md",
          "shadow-lg shadow-black/10",
        )}
      >
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-90" aria-label="NextWorkforce home">
          <img src={logo} alt="NexWorkforce Solution" className="h-9 w-auto object-contain" />
          <span className="text-white font-medium">NexWorkforce</span>
        </Link>

        {/* Center: Nav links (desktop only) */}
        <ul className="hidden items-center justify-center gap-8 md:flex">
          {navLinks.map(({ to, label, hasChevron }) => (
            <li key={to}>
              <Link to={to} className="flex items-center gap-1 text-white transition-opacity hover:opacity-90">
                {label}
                {hasChevron && <ChevronDown className="size-4 shrink-0" aria-hidden />}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Mobile menu trigger + CTA */}
        <div className="flex items-center justify-end gap-2">
          {/* Mobile: Hamburger menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className={cn(
                  "rounded-full border border-white/30 p-2.5 text-white",
                  "transition-colors hover:bg-white/10 hover:border-white/40 md:hidden",
                )}
              >
                <Menu className="size-5" aria-hidden />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-secondary border-secondary/50">
              <SheetHeader>
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4 px-4">
                {navLinks.map(({ to, label }) => (
                  <button
                    key={to}
                    type="button"
                    onClick={() => handleNavClick(to)}
                    className="text-left text-lg font-medium text-white transition-opacity hover:opacity-90"
                  >
                    {label}
                  </button>
                ))}
                <Button asChild className="mt-4 w-full rounded-lg font-semibold">
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Contact Us
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>

          {/* CTA */}
          <Button asChild variant="default" size="lg" className="rounded-full font-semibold shadow-md">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
