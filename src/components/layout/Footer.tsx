import { Link } from "react-router-dom"
import { ChevronUp } from "lucide-react"
import { ContactFormAndAddress } from "@/components/ContactFormAndAddress"

type FooterProps = { includeContactSection?: boolean }

export function Footer({ includeContactSection = false }: FooterProps) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="mt-auto border-t border-white/10 bg-secondary">
      <div
        className={`mx-auto max-w-[1320px] px-6 ${includeContactSection ? "py-16 md:py-20" : "py-8 md:py-10"}`}
      >
        {includeContactSection && (
          <>
            <ContactFormAndAddress idPrefix="footer-contact" />
          </>
        )}

        {/* Single row: Copyright | Nav links + Scroll to top */}
        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between mt-6">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} NexWorkforce Solution. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:justify-end">
            <nav className="flex gap-6" aria-label="Footer">
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
                to="/contact"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Contact
              </Link>
            </nav>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <ChevronUp className="size-5" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
