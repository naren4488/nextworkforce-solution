import { AnimateIn } from "@/components/AnimateIn"
import ourVision from "@/assets/our-vision.png"
import ourMission from "@/assets/our-mission.png"
import ourAwards from "@/assets/our-awards.png"
import yearsOfExperience from "@/assets/years-of-experience.png"
import whyChooseUsVideo from "@/assets/about-us.mov"

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
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1320px] px-6">
        {/* Top: Two-column - image (left) + content (right) */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Why choose us video */}
          <div className="order-2 overflow-hidden rounded-2xl lg:order-1">
            <video
              src={whyChooseUsVideo}
              className="aspect-4/3 w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Why choose NexWorkforce Solution"
            />
          </div>

          {/* Content + metric badge + smaller image */}
          <div className="order-1 lg:order-2">
            <AnimateIn type="heading">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-primary">
                Why Choose Us
              </p>
              <h2 className="mt-3 text-[clamp(1.75rem,3vw,2.75rem)] font-bold leading-[1.2] tracking-[-0.3px] text-foreground">
                UKG Expertise That Protects and Extends Enterprise Performance
              </h2>
            </AnimateIn>
            <p className="mt-4 text-base leading-[1.7] text-muted-foreground">
              UKG implementation is only the beginning. Sustained workforce
              performance requires governance, capability, and disciplined
              optimization. NexWorkforce Solution delivers focused UKG advisory
              services that strengthen system control, reduce production risk,
              and ensure long-term operational integrity.
            </p>

            {/* Center: Metric badge + smaller image */}
            <div className="mt-4 flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
              {/* Metric badge */}
              <div className="flex shrink-0">
                <img
                  src={yearsOfExperience}
                  alt="25 years of experience in IT solutions"
                  className="size-32 object-contain sm:size-40"
                />
              </div>

              {/* Key points */}
              <ul className="flex-1 space-y-3 sm:max-w-[280px]">
                <li className="flex gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-base text-foreground">
                    20+ Years Collective Workforce Management Expertise
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-base text-foreground">
                    Supporting workforces exceeding 1M+ employees globally
                  </span>
                </li>
              </ul>
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
