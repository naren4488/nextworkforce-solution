import { Link } from "react-router-dom"
import { Check, GraduationCap, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimateIn } from "@/components/AnimateIn"
import heroAbout from "@/assets/hero2.jpg"
import ourVisionImg from "@/assets/our-vision.png"
import ourMissionImg from "@/assets/our-mission.png"
import yearsOfExperienceImg from "@/assets/years-of-experience.png"

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
      <section className="bg-secondary py-16 md:py-20">
        <AnimateIn type="heading" className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-primary">
            ABOUT NEXWORKFORCE SOLUTION
          </p>
          <h1 className="mt-4 text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-[-0.3px] text-white">
            Who We Are
          </h1>
        </AnimateIn>
      </section>

      {/* Who We Are - Main content + image */}
      <section className="mx-auto max-w-[1320px] px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
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
          <div className="overflow-hidden rounded-2xl border border-border shadow-md">
            <img
              src={heroAbout}
              alt=""
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Vision + Mission */}
      <section className="bg-muted py-16 md:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Our Vision */}
            <article className="rounded-2xl border-l-4 border-primary bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <img src={ourVisionImg} alt="" className="size-12 object-contain" aria-hidden />
                <h2 className="text-xl font-bold text-foreground">
                  Our Vision
                </h2>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To be the trusted global advisory partner for UKG Workforce
                Management performance and workforce system resilience.
              </p>
            </article>

            {/* Our Mission */}
            <article className="rounded-2xl border-l-4 border-primary bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <img src={ourMissionImg} alt="" className="size-12 object-contain" aria-hidden />
                <h2 className="text-xl font-bold text-foreground">
                  Our Mission
                </h2>
              </div>
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

      {/* What We Do */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <AnimateIn type="heading">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              What We Do
            </h2>
          </AnimateIn>
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
      <section className="bg-white py-16 md:py-20">
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
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <img
                  src={yearsOfExperienceImg}
                  alt=""
                  className="h-20 w-auto object-contain object-left"
                  aria-hidden
                />
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  Enterprise Experience
                </h2>
              </div>
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

      {/* Closing Statement + CTA */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mt-6 text-base leading-[1.7] text-white/70">
            UKG implementation is a milestone.
            <br />
            Workforce performance is a commitment.
          </p>
          <p className="mt-4 text-base leading-[1.7] text-white/70">
            NexWorkforce Solution ensures enterprise UKG environments remain
            capable, controlled, and continuously optimized.
          </p>
          <AnimateIn type="cta" className="mt-10">
            <Button
              asChild
              size="lg"
              className="rounded-full font-semibold"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </AnimateIn>
        </div>
      </section>
    </div>
  )
}
