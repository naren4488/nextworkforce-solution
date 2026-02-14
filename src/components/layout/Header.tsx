import { Link } from "react-router-dom"
import { Gem, ChevronDown, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { to: "/", label: "Home", hasChevron: true },
  { to: "/about", label: "About Us", hasChevron: false },
  { to: "/services", label: "Services", hasChevron: true },
  { to: "/contact", label: "Contact", hasChevron: false },
] as const

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4 sm:px-6">
      <nav
        className={cn(
          "mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-4",
          "rounded-full",
          "border border-white/20",
          "bg-secondary/80 backdrop-blur-md",
          "shadow-lg shadow-black/10"
        )}
      >
        {/* Left: Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-white font-medium transition-opacity hover:opacity-90"
        >
          <div className="flex size-9 items-center justify-center rounded-full border border-white/20 bg-white/10">
            <Gem className="size-5 text-white" />
          </div>
          <span>NextWorkforce</span>
        </Link>

        {/* Center: Nav links */}
        <ul className="hidden items-center justify-center gap-8 md:flex">
          {navLinks.map(({ to, label, hasChevron }) => (
            <li key={to}>
              <Link
                to={to}
                className="flex items-center gap-1 text-white transition-opacity hover:opacity-90"
              >
                {label}
                {hasChevron && (
                  <ChevronDown className="size-4 shrink-0" aria-hidden />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Search, Hamburger, CTA */}
        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            aria-label="Search"
            className={cn(
              "rounded-full border border-white/30 p-2.5 text-white",
              "transition-colors hover:bg-white/10 hover:border-white/40"
            )}
          >
            <Search className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Menu"
            className={cn(
              "rounded-full border border-white/30 p-2.5 text-white",
              "transition-colors hover:bg-white/10 hover:border-white/40"
            )}
          >
            <Menu className="size-4" />
          </button>
          <Button
            asChild
            variant="default"
            size="lg"
            className="rounded-full font-semibold shadow-md"
          >
            <Link to="/contact">Get A Quote</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
