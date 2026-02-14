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
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            OUR SERVICES OVERVIEW
          </p>
          <p className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
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
              className="overflow-hidden rounded-2xl bg-white shadow-sm"
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
              <div className="p-6 pt-8">
                <h3 className="text-center text-lg font-bold text-foreground">
                  {title}
                </h3>
                <p className="mt-4 text-sm text-muted-foreground">{intro}</p>
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
