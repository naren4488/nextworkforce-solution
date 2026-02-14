import { GraduationCap, SlidersHorizontal } from "lucide-react"

const services = [
  {
    id: 1,
    icon: GraduationCap,
    title: "UKG Workforce Management Training",
    intro: "Our UKG training programs are designed for:",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
    imageAlt: "Professional training session",
    bullets: [
      "Professionals currently working on UKG",
      "Consultants transitioning into UKG Workforce Management",
      "Organizations seeking to upskill internal teams",
    ],
  },
  {
    id: 2,
    icon: SlidersHorizontal,
    title: "UKG Workforce Optimization & Managed Services",
    intro:
      "Our managed services are designed for organizations that have already implemented UKG and require:",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    imageAlt: "Team collaboration",
    bullets: [
      "Post-go-live stabilization",
      "Ongoing functional support",
      "Continuous optimization as business needs evolve",
      "Process and configuration enhancements",
      "Performance and accuracy improvements",
      "Best-practice alignment",
    ],
  },
]

export function OurServicesSection() {
  return (
    <section className="bg-white py-[100px] md:py-[120px]">
      <div className="mx-auto max-w-[1320px] px-6">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-primary">
            OUR SERVICES OVERVIEW
          </p>
          <p className="mt-3 text-[clamp(1.75rem,3vw,2.75rem)] font-bold leading-[1.2] tracking-[-0.3px] text-foreground">
            We provide two integrated service offerings designed to support both
            people and platforms within the UKG ecosystem.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map(({
            id,
            icon: Icon,
            title,
            intro,
            image,
            imageAlt,
            bullets,
          }) => (
            <article
              key={id}
              className="overflow-hidden rounded-2xl bg-white shadow-[0_2px_15px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(59,78,240,0.12)]"
            >
              {/* Image */}
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={image}
                  alt={imageAlt}
                  className="size-full object-cover"
                />
              </div>

              {/* Icon - overlaps image boundary */}
              <div className="-mt-6 flex justify-center px-6">
                <span className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary shadow-sm">
                  <Icon className="size-6" aria-hidden />
                </span>
              </div>

              {/* Content */}
              <div className="p-8 pt-10">
                <h3 className="text-center text-xl font-bold leading-snug text-foreground">
                  {title}
                </h3>
                <p className="mt-4 text-base leading-[1.7] text-muted-foreground">{intro}</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
