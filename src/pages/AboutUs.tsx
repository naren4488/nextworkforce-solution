import { Link } from "react-router-dom"
import { Check, GraduationCap, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

const servicePillars = [
  {
    id: 1,
    icon: GraduationCap,
    title: "UKG Workforce Management Training",
    description:
      "Structured, enterprise-aligned programs that build real-world UKG capability for consultants, HRIS teams, and workforce professionals.",
  },
  {
    id: 2,
    icon: SlidersHorizontal,
    title: "UKG Workforce Optimization & Managed Services",
    description:
      "Post-go-live stabilization, governance, and ongoing functional support to ensure UKG environments remain accurate, compliant, and performance-driven.",
  },
]

const missionItems = [
  "Build enterprise-ready UKG capability",
  "Stabilize and govern production environments",
  "Drive continuous optimization beyond go-live",
  "Deliver measurable, long-term workforce system value",
]

const differentiationFocus = [
  "Capability development",
  "Production stability",
  "Governance and control",
  "Continuous system optimization",
]

const enterpriseExperience = [
  "25+ years of collective workforce expertise",
  "Experience supporting workforces exceeding one million employees",
  "Multi-industry deployments across retail, manufacturing, logistics, healthcare, hospitality, and warehouse operations",
  "Multi-country exposure across APAC, EMEA, and North America",
]

export function AboutUs() {
  return (
    <div>
      {/* Hero / Page Banner */}
      <section className="bg-secondary py-[100px] md:py-[120px]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-primary">
            ABOUT NEXWORKFORCE SOLUTION
          </p>
          <h1 className="mt-4 text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-[-0.3px] text-white">
            Who We Are
          </h1>
        </div>
      </section>

      {/* Who We Are - Main content */}
      <section className="mx-auto max-w-3xl px-6 py-[100px] md:py-[120px]">
        <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
          <p>
            NexWorkforce Solution is a specialist advisory firm dedicated
            exclusively to UKG Workforce Management.
          </p>
          <p>
            We partner with enterprise organizations to strengthen workforce
            capability and optimize live UKG environments beyond implementation.
            Our focus is not deployment — it is performance, governance, and
            sustained operational excellence.
          </p>
          <p>
            We operate where system integrators typically disengage: post-go-live,
            where accuracy, adoption, and control determine long-term success.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-muted py-[100px] md:py-[120px]">
        <div className="mx-auto max-w-[1320px] px-6">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            What We Do
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            We operate across two focused service pillars:
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {servicePillars.map(({ id, icon: Icon, title, description }) => (
              <article
                key={id}
                className="rounded-2xl border-l-4 border-primary bg-white p-8 shadow-sm"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Differentiation + Enterprise Experience */}
      <section className="bg-white py-[100px] md:py-[120px]">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Our Differentiation */}
            <article>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Our Differentiation
              </h2>
              <ul className="mt-6 space-y-2 text-muted-foreground">
                <li>We are not a general IT services provider.</li>
                <li>We are not a staffing augmentation firm.</li>
                <li>We are not a one-time implementation vendor.</li>
              </ul>
              <p className="mt-6 font-medium text-foreground">
                We are a UKG-only advisory partner focused on:
              </p>
              <ul className="mt-3 space-y-2">
                {differentiationFocus.map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                We complement large implementation partners by protecting and
                extending the value of UKG investments after go-live.
              </p>
            </article>

            {/* Enterprise Experience */}
            <article>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Enterprise Experience
              </h2>
              <ul className="mt-6 space-y-3">
                {enterpriseExperience.map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Vision + Mission */}
      <section className="bg-muted py-[100px] md:py-[120px]">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Our Vision */}
            <article className="rounded-2xl border-l-4 border-primary bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-foreground">
                Our Vision
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To be the trusted global advisory partner for UKG Workforce
                Management performance and workforce system resilience.
              </p>
            </article>

            {/* Our Mission */}
            <article className="rounded-2xl border-l-4 border-primary bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-foreground">
                Our Mission
              </h2>
              <ul className="mt-4 space-y-3">
                {missionItems.map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check className="size-3" aria-hidden />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Closing Statement + CTA */}
      <section className="bg-secondary py-[100px] md:py-[120px]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-bold tracking-[-0.3px] text-white">
            Closing Statement
          </h2>
          <p className="mt-6 text-base leading-[1.7] text-white/70">
            UKG implementation is a milestone.
            <br />
            Workforce performance is a commitment.
          </p>
          <p className="mt-4 text-base leading-[1.7] text-white/70">
            NexWorkforce Solution ensures enterprise UKG environments remain
            capable, controlled, and continuously optimized.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-10 rounded-full font-semibold"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
