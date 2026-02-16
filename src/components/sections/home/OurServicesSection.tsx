import { Link } from "react-router-dom";
import { GraduationCap, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    icon: GraduationCap,
    title: "UKG Workforce Management Training",
    intro:
      "Enterprise-aligned programs designed to build real-world UKG capability across consultants, HRIS teams, and workforce leaders.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
    imageAlt: "Professional training session",
    bulletSectionLabel: "Engagement Focus:",
    bullets: [
      "Structured functional configuration across UKG modules",
      "End-to-end workforce process understanding",
      "Reporting, integration, and payroll alignment exposure",
      "Enterprise governance and best-practice standards",
    ],
  },
  {
    id: 2,
    icon: SlidersHorizontal,
    title: "UKG Workforce Optimization & Managed Services",
    intro:
      "Structured advisory and ongoing support ensuring UKG environments remain stable, governed, and performance-driven.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    imageAlt: "Team collaboration",
    bulletSectionLabel: "Engagement Focus:",
    bullets: [
      "Production stabilization and risk mitigation",
      "Configuration governance and system integrity",
      "Continuous performance and process optimization",
      "Business-aligned enhancements and change support",
    ],
  },
];

export function OurServicesSection() {
  return (
    <section className="bg-muted py-16 md:py-20">
      <div className="mx-auto max-w-[1320px] px-6">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-primary">OUR SERVICES OVERVIEW</p>
          <p className="mt-3 text-[clamp(1.75rem,3vw,2.75rem)] font-bold leading-[1.2] tracking-[-0.3px] text-foreground">
            Integrated Workforce Management Services for People and Platform Performance
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map(({ id, icon: Icon, title, intro, image, imageAlt, bulletSectionLabel, bullets }) => (
            <article
              key={id}
              className="overflow-hidden rounded-2xl bg-white shadow-[0_2px_15px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(59,78,240,0.12)]"
            >
              {/* Image */}
              <div className="aspect-video w-full overflow-hidden">
                <img src={image} alt={imageAlt} className="size-full object-cover" />
              </div>

              {/* Icon - overlaps image boundary */}
              <div className="flex justify-center -mt-6">
                <span className="flex size-12 items-center justify-center rounded-lg bg-white text-primary shadow-sm">
                  <Icon className="size-6" aria-hidden />
                </span>
              </div>

              {/* Content */}
              <div className="p-8 pt-6">
                <h3 className="text-center text-xl font-bold leading-snug text-foreground">{title}</h3>
                <p className="mt-4 text-base leading-[1.7] text-muted-foreground">{intro}</p>
                {bulletSectionLabel && <p className="mt-4 font-semibold text-foreground">{bulletSectionLabel}</p>}
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full rounded-full md:w-auto">
                  <Link to={`/services/${id}`}>Learn More</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
