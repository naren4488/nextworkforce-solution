import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const avatars = [
  { id: 1, initials: "JD", color: "bg-primary/60" },
  { id: 2, initials: "AS", color: "bg-white/20" },
  { id: 3, initials: "MK", color: "bg-white/20" },
  { id: 4, initials: "LP", color: "bg-white/20" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-secondary">
      {/* Geometric background pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(30deg, #fff 12%, transparent 12.5%, transparent 87%, #fff 87.5%, #fff),
            linear-gradient(150deg, #fff 12%, transparent 12.5%, transparent 87%, #fff 87.5%, #fff),
            linear-gradient(30deg, #fff 12%, transparent 12.5%, transparent 87%, #fff 87.5%, #fff),
            linear-gradient(150deg, #fff 12%, transparent 12.5%, transparent 87%, #fff 87.5%, #fff)
          `,
          backgroundSize: "80px 140px",
          backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        {/* Left: Visual */}
        <div className="relative order-2 flex items-center justify-center lg:order-1">
          <div className="relative aspect-square w-full max-w-[380px] lg:max-w-[420px]">
            {/* Concentric circles */}
            <svg
              className="absolute inset-0 size-full"
              viewBox="0 0 400 400"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden
            >
              <circle
                cx="200"
                cy="200"
                r="180"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1"
              />
              <circle
                cx="200"
                cy="200"
                r="140"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1"
              />
              <circle
                cx="200"
                cy="200"
                r="100"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
            </svg>
            {/* Central figure in blue circle */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="rounded-full bg-primary p-1.5 ring-4 ring-primary/30 ring-offset-4 ring-offset-secondary">
                <div className="size-36 overflow-hidden rounded-full bg-white/20 lg:size-44">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop"
                    alt="UKG Workforce specialist"
                    className="size-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Dotted connection lines (center to avatars) */}
            <svg
              className="absolute inset-0 size-full"
              viewBox="0 0 400 400"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden
            >
              {[0, 1, 2, 3].map((i) => {
                const angle = (i * 90 - 45) * (Math.PI / 180)
                const cx = 200
                const cy = 200
                const r = 130
                const x2 = cx + r * Math.cos(angle)
                const y2 = cy + r * Math.sin(angle)
                return (
                  <line
                    key={i}
                    x1={cx}
                    y1={cy}
                    x2={x2}
                    y2={y2}
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1"
                    strokeDasharray="6 4"
                  />
                )
              })}
            </svg>

            {/* Avatars - positioned around center */}
            {avatars.map((avatar, i) => {
              const angle = (i * 90 - 45) * (Math.PI / 180)
              const radiusPct = 32.5
              const xPct = 50 + radiusPct * Math.cos(angle)
              const yPct = 50 + radiusPct * Math.sin(angle)
              return (
                <div
                  key={avatar.id}
                  className="absolute z-10 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border-2 border-white/60 bg-white/10 text-xs font-medium text-white lg:size-16"
                  style={{
                    left: `${xPct}%`,
                    top: `${yPct}%`,
                  }}
                >
                  {avatar.initials}
                </div>
              )
            })}
          </div>
        </div>

        {/* Right: Content */}
        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 shrink-0 bg-white" />
            <p className="text-sm font-medium uppercase tracking-wider text-white">
              UKG Workforce Management Specialists
            </p>
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            UKG Training and Optimization.
            <br />
            Delivered with Enterprise Precision.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/90">
            Nex Workforce Advisory delivers structured UKG Workforce Management
            training and enterprise-grade managed services. We build workforce
            capability while ensuring live UKG environments remain stable,
            compliant, and performance-driven across global markets.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-lg font-semibold">
              <Link to="/services">Explore Our Services</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-lg border-white/60 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
