import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-secondary">
      <div className="mx-auto max-w-[1320px] px-6 py-16">
        {/* Statement + CTA */}
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-semibold text-white">
              NexWorkforce Solution
            </p>
            <p className="mt-1 text-base leading-relaxed text-white/70">
              Building Workforce Capability. Optimizing UKG Performance.
            </p>
          </div>
          <Button
            asChild
            className="rounded-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Copyright + Nav */}
        <div className="mt-10 flex flex-col gap-4 border-t border-secondary/20 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} NexWorkforce Solution. All rights reserved.
          </p>
          <nav className="flex gap-6">
            <Link
              to="/"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
