import ourVision from "@/assets/our-vision.png"
import ourMission from "@/assets/our-mission.png"
import ourAwards from "@/assets/our-awards.png"
import yearsOfExperience from "@/assets/years-of-experience.png"

const blocks = [
  {
    id: 1,
    icon: ourVision,
    heading: "Our Focus",
    text: "We operate exclusively within UKG Workforce Management — no dilution, no generic IT services.",
  },
  {
    id: 2,
    icon: ourMission,
    heading: "Our Model",
    text: "Structured capability development combined with post-go-live stabilization and managed support.",
  },
  {
    id: 3,
    icon: ourAwards,
    heading: "Our Commitment",
    text: "Enterprise-grade governance, measurable outcomes, and long-term workforce system resilience.",
  },
]

export function WhySection() {
  return (
    <section className="bg-muted py-[100px] md:py-[120px]">
      <div className="mx-auto max-w-[1320px] px-6">
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
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-primary">
              Why NexWorkforce Solution
            </p>
            <h2 className="mt-3 text-[clamp(1.75rem,3vw,2.75rem)] font-bold leading-[1.2] tracking-[-0.3px] text-foreground">
              UKG Expertise That Protects and Extends Enterprise Performance
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-muted-foreground">
              UKG implementation is only the beginning. Sustained workforce
              performance requires governance, capability, and disciplined
              optimization. NexWorkforce Solution delivers focused UKG advisory
              services that strengthen system control, reduce production risk,
              and ensure long-term operational integrity.
            </p>

            {/* Center: Metric badge + smaller image */}
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-8">
              {/* Metric badge */}
              <div className="flex shrink-0">
                <img
                  src={yearsOfExperience}
                  alt="25 years of experience in IT solutions"
                  className="size-32 object-contain sm:size-40"
                />
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
          {blocks.map(({ id, icon: iconSrc, heading, text }) => (
            <article
              key={id}
              className="rounded-2xl bg-white p-8 shadow-[0_2px_15px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(59,78,240,0.12)]"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 p-2">
                <img src={iconSrc} alt="" className="size-full object-contain" aria-hidden />
              </div>
              <h3 className="mt-4 font-bold text-foreground">{heading}</h3>
              <p className="mt-3 text-base leading-[1.7] text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
