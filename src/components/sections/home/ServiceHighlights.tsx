import { Award, Building2, Globe } from "lucide-react"

const highlights = [
  {
    id: 1,
    icon: Award,
    title: "25+ Years of Collective Experience",
    description:
      "Delivering enterprise Workforce Management solutions supporting 1M+ employees globally.",
  },
  {
    id: 2,
    icon: Building2,
    title: "Cross-Industry Expertise",
    description:
      "Proven deployments across Retail, Manufacturing, Logistics, Hospitality, Healthcare, and Warehouse operations.",
  },
  {
    id: 3,
    icon: Globe,
    title: "Global Multi-Country Delivery",
    description:
      "Experience supporting workforce environments across APAC, EMEA, and North America.",
  },
] as const

export function ServiceHighlights() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
        {highlights.map(({ id, icon: Icon, title, description }) => (
          <div
            key={id}
            className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-sm"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white shadow-md">
              <Icon className="size-6 text-primary" aria-hidden />
            </div>
            <h3 className="text-lg font-bold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
