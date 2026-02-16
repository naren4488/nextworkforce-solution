import { Link } from "react-router-dom"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimateIn } from "@/components/AnimateIn"
import aboutUsVideo from "@/assets/about-us.mov"

const features = [
  "UKG-focused workforce specialists",
  "Enterprise-grade training and managed services delivery",
  "Post-go-live optimization and long-term system stability",
]

export function AboutSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left: Content */}
        <div>
          <AnimateIn type="heading">
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-primary">
              ABOUT US
            </p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.2] tracking-[-0.3px] text-foreground">
              Dedicated to UKG Workforce Management Excellence.
            </h2>
          </AnimateIn>
          <p className="mt-4 text-base leading-[1.7] text-muted-foreground">
            NexWorkforce Solution is a specialist advisory firm dedicated
            exclusively to UKG Workforce Management. We support enterprise
            organizations in strengthening workforce capability and enhancing
            the performance of their live UKG environments.
          </p>
          <ul className="mt-6 space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3.5" aria-hidden />
                </span>
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          <AnimateIn type="cta" className="mt-8">
            <Button asChild className="rounded-full font-semibold" size="lg">
              <Link to="/about">More About Us</Link>
            </Button>
          </AnimateIn>
        </div>

        {/* Right: About us video */}
        <div className="overflow-hidden rounded-2xl">
          <video
            src={aboutUsVideo}
            className="aspect-video w-full object-cover lg:aspect-4/3"
            autoPlay
            muted
            loop
            playsInline
            aria-label="About NexWorkforce Solution"
          />
        </div>
      </div>
    </section>
  )
}
