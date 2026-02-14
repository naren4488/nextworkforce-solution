import { Award, Target, Workflow } from "lucide-react"

const blocks = [
  {
    id: 1,
    icon: Target,
    heading: "Our Focus",
    text: "We operate exclusively within UKG Workforce Management — no dilution, no generic IT services.",
  },
  {
    id: 2,
    icon: Workflow,
    heading: "Our Model",
    text: "Structured capability development combined with post-go-live stabilization and managed support.",
  },
  {
    id: 3,
    icon: Award,
    heading: "Our Commitment",
    text: "Enterprise-grade governance, measurable outcomes, and long-term workforce system resilience.",
  },
]

export function WhySection() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top: Two-column - image (left) + content (right) */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Large image */}
          <div className="order-2 overflow-hidden rounded-2xl lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="Professional office setting"
              className="aspect-4/3 w-full object-cover"
            />
          </div>

          {/* Content + metric badge + smaller image */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-medium text-primary">
              Why NexWorkforce Solution
            </p>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              UKG Expertise That Protects and Extends Enterprise Performance
            </h2>
            <p className="mt-4 text-muted-foreground">
              UKG implementation is only the beginning. Sustained workforce
              performance requires governance, capability, and disciplined
              optimization. NexWorkforce Solution delivers focused UKG advisory
              services that strengthen system control, reduce production risk,
              and ensure long-term operational integrity.
            </p>

            {/* Center: Metric badge + smaller image */}
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-8">
              {/* Metric badge */}
              <div className="flex shrink-0 flex-col items-center justify-center rounded-full bg-primary px-8 py-8 text-center text-primary-foreground sm:px-10 sm:py-10">
                <span className="text-4xl font-bold md:text-5xl">25+</span>
                <span className="mt-1 text-sm font-semibold">Years</span>
                <span className="mt-1 text-center text-xs leading-tight">
                  Collective Workforce
                  <br />
                  Management Expertise
                </span>
                <span className="mt-3 text-center text-xs leading-tight opacity-90">
                  Supporting workforces exceeding
                  <br />
                  1M+ employees globally
                </span>
              </div>

              {/* Smaller image */}
              <div className="flex-1 overflow-hidden rounded-xl sm:max-w-[280px]">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop"
                  alt="Team collaboration"
                  className="aspect-video w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Three blocks */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {blocks.map(({ id, icon: Icon, heading, text }) => (
            <article
              key={id}
              className="rounded-xl bg-white p-6 shadow-sm"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="size-6" aria-hidden />
              </span>
              <h3 className="mt-4 font-bold text-foreground">{heading}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
