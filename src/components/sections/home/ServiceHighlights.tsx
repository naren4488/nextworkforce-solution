import { AnimateIn } from "@/components/AnimateIn"
import icon1 from "@/assets/icon-2-1.png"
import icon2 from "@/assets/icon-2-2.png"
import icon3 from "@/assets/icon-2-3.png"

const highlights = [
  {
    id: 1,
    icon: icon1,
    title: "25+ Years of Collective Experience",
    description:
      "Delivering enterprise Workforce Management solutions supporting 1M+ employees globally.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Cross-Industry Expertise",
    description:
      "Proven deployments across Retail, Manufacturing, Logistics, Hospitality, Healthcare, and Warehouse operations.",
  },
  {
    id: 3,
    icon: icon3,
    title: "Global Multi-Country Delivery",
    description:
      "Experience supporting workforce environments across APAC, EMEA, and North America.",
  },
] as const

export function ServiceHighlights() {
  return (
    <section className="bg-muted py-16 md:py-20">
      <AnimateIn type="block" className="mx-auto grid max-w-[1320px] grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map(({ id, icon: iconSrc, title, description }) => (
          <div
            key={id}
            className="flex items-start gap-5 rounded-2xl bg-white p-8 shadow-[0_2px_15px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(59,78,240,0.12)]"
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white p-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <img src={iconSrc} alt="" className="size-full object-contain" aria-hidden />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-xl font-bold leading-[1.3] text-foreground">{title}</h3>
              <p className="mt-2 text-base font-normal leading-[1.7] text-muted-foreground">{description}</p>
            </div>
          </div>
        ))}
      </AnimateIn>
    </section>
  )
}
