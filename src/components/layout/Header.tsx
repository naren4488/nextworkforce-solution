import { Link } from "react-router-dom"

export function Header() {
  return (
    <header className="border-b bg-background">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-lg font-semibold text-foreground hover:text-primary">
          NextWorkforce
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link
              to="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
