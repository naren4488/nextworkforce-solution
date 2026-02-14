import { Link } from "react-router-dom"
import { Check, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  "UKG-focused workforce specialists",
  "Enterprise-grade training and managed services delivery",
  "Post-go-live optimization and long-term system stability",
]

const images = [
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
    alt: "Team collaboration",
    className: "absolute left-0 top-0 z-10 w-[70%] rounded-lg shadow-lg",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    alt: "Meeting in office",
    className: "absolute bottom-0 right-0 z-20 w-[65%] rounded-lg shadow-lg",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
    alt: "Office workspace",
    className: "absolute right-0 top-1/2 z-0 w-[55%] -translate-y-1/2 rounded-lg shadow-md",
  },
]

export function AboutSection() {
  return (
    <section className="bg-muted py-[100px] md:py-[120px]">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left: Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-primary">
            ABOUT NexWorkforce Solution
          </p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.2] tracking-[-0.3px] text-foreground">
            Dedicated to UKG Workforce Management Excellence.
          </h2>
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
          <Button asChild className="mt-8 rounded-full font-semibold" size="lg">
            <Link to="/about">More About Us</Link>
          </Button>
        </div>

        {/* Right: Image collage (desktop) / single image (mobile) */}
        <div className="relative aspect-video lg:aspect-4/3 lg:min-h-[320px]">
          {/* Mobile: Single image */}
          <div className="relative size-full overflow-hidden rounded-lg lg:hidden">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="size-full object-cover"
            />
          </div>

          {/* Desktop: Collage */}
          <div className="absolute inset-0 hidden lg:block">
            {/* Dotted background pattern */}
            <div
              className="absolute -right-4 -top-4 -z-10 h-48 w-48 opacity-30"
              style={{
                backgroundImage: `radial-gradient(circle, #94a3b8 1.5px, transparent 1.5px)`,
                backgroundSize: "12px 12px",
              }}
            />
            {images.map((img, i) => (
              <div key={i} className={img.className}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="size-full rounded-lg object-cover"
                />
                {i === 1 && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/20 transition-opacity hover:bg-black/30">
                    <span className="flex size-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg">
                      <Play className="ml-1 size-7 fill-current" aria-hidden />
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
