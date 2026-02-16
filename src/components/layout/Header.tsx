import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import logo from "@/assets/Logo.svg";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
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
          "mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-6 py-4",
          "md:grid md:grid-cols-[1fr_auto_1fr] md:justify-between",
          "rounded-[100px]",
          "border border-white/10",
          "bg-secondary",
          "shadow-[0_5px_30px_rgba(0,0,0,0.08)]",
        )}
      >
        {/* Left: Logo */}
        <Link to="/" className="flex shrink-0 items-center gap-2 transition-opacity hover:opacity-90" aria-label="NextWorkforce home">
          <img src={logo} alt="NexWorkforce Solution" className="h-9 w-auto object-contain" />
          <span className="text-white font-medium">NexWorkforce</span>
        </Link>

        {/* Center: Nav links (desktop only) */}
        <ul className="hidden items-center justify-center gap-8 md:flex">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className="text-base font-medium text-white transition-opacity hover:opacity-90">
                {label}
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
            <SheetContent side="right" className="w-80 border-white/10 bg-secondary" closeButtonClassName="text-white">
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

          {/* CTA (desktop only; mobile has Contact Us inside the menu) */}
          <Button
            asChild
            variant="default"
            size="lg"
            className="hidden rounded-full px-9 font-semibold shadow-md transition-all hover:shadow-[0_8px_25px_rgba(59,78,240,0.3)] md:inline-flex"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
