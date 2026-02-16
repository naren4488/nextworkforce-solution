import { useParams, Navigate } from "react-router-dom"
import { Check, GraduationCap, SlidersHorizontal } from "lucide-react"
import { ContactForm } from "@/components/ContactForm"
import { AnimateIn } from "@/components/AnimateIn"
import service1Image from "@/assets/Service 1Training.png"
import service2Image from "@/assets/Service 2.png"

const trainingOverview = [
  "Professionals currently working on UKG",
  "Consultants transitioning into UKG Workforce Management",
  "Organizations seeking to upskill internal teams",
]

const trainingApproach = [
  "Structured curriculum with defined learning paths",
  "Practical configuration-focused learning",
  "Enterprise use cases and production scenarios",
  "Alignment to global workforce regulations and practices",
]

const functionalCoverage = [
  "Timekeeping configuration and approvals",
  "Accruals and leave frameworks",
  "Attendance and absence management",
  "Business Structure and labor modeling",
  "Access Profiles and security governance",
  "Dataviews and custom reporting",
  "HCM and Payroll integration mapping",
  "Device and data capture concepts",
  "Integration fundamentals (including Boomi)",
  "End-to-end functional process flows",
  "Industry best practices and control standards",
]

const trainingOutcomes = [
  "Confidently configure and support UKG modules",
  "Understand end-to-end workforce processes",
  "Operate effectively in enterprise UKG environments",
  "Support live clients and production systems",
]

const managedOverview = [
  "Post-go-live stabilization",
  "Ongoing functional support",
  "Continuous optimization as business needs evolve",
  "Process and configuration enhancements",
  "Performance and accuracy improvements",
  "Best-practice alignment",
]

const engagementPrinciples = [
  "Outcome-focused delivery",
  "Clearly defined scope and SLAs",
  "Predictable engagement structure",
  "Enterprise governance alignment",
]

const stabilizationPhase = [
  "Post-go-live issue assessment",
  "Configuration validation and clean-up",
  "Priority defect resolution",
]

const optimizationPhase = [
  "Process and configuration enhancements",
  "Performance and accuracy improvements",
  "Best-practice alignment",
]

const steadyStateSupport = [
  "BAU functional support",
  "Change impact analysis",
  "Continuous improvement initiatives",
]

const scopeOfSupport = [
  "Timekeeping, accruals, and attendance",
  "Security and access governance",
  "Reporting and analytics",
  "Integration and downstream alignment",
  "Workforce process optimization",
]

const serviceImages: Record<string, string> = {
  "1": service1Image,
  "2": service2Image,
}

const serviceContent: Record<
  string,
  {
    title: string
    subtitle: string
    Icon: typeof GraduationCap
    purpose: string
    overviewIntro: string
    overviewItems: string[]
    overviewClosing?: string
    sections: Array<{
      heading: string
      type: "paragraph" | "list" | "list-grid" | "list-with-intro" | "engagement-model"
      content?: string
      intro?: string
      items?: string[]
      listCols?: "1" | "2"
    }>
  }
> = {
  "1": {
    title: "UKG Workforce Management Training",
    subtitle: "Enterprise-aligned programs designed to build real-world UKG capability.",
    Icon: GraduationCap,
    purpose:
      "To build globally relevant, project-ready UKG Workforce Management capability through structured, enterprise-aligned training programs.",
    overviewIntro: "Our UKG training programs are designed for:",
    overviewItems: trainingOverview,
    overviewClosing:
      "All programs are package-based, outcome-oriented, and aligned to real implementation and BAU support scenarios.",
    sections: [
      {
        heading: "Training Approach",
        type: "list",
        items: trainingApproach,
      },
      {
        heading: "Functional Coverage",
        type: "list-grid",
        items: functionalCoverage,
        listCols: "2",
      },
      {
        heading: "Outcomes",
        type: "list-with-intro",
        intro: "Participants complete the program with the ability to:",
        items: trainingOutcomes,
      },
    ],
  },
  "2": {
    title: "UKG Workforce Optimization & Managed Services",
    subtitle: "Structured advisory and ongoing support ensuring UKG environments remain stable and performance-driven.",
    Icon: SlidersHorizontal,
    purpose:
      "To ensure stability, accuracy, and continuous improvement of live UKG Workforce Management environments.",
    overviewIntro:
      "Our managed services are designed for organizations that have already implemented UKG and require:",
    overviewItems: managedOverview,
    overviewClosing:
      "We operate as an extension of internal HRIS and workforce teams, providing specialized expertise without the overhead of large in-house teams.",
    sections: [
      {
        heading: "Managed Services Engagement Model",
        type: "engagement-model",
      },
    ],
  },
}

function ListSection({
  items,
  cols = "1",
}: {
  items: string[]
  cols?: "1" | "2"
}) {
  return (
    <ul
      className={
        cols === "2"
          ? "mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2"
          : "mt-3 space-y-2"
      }
    >
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-muted-foreground">
          <Check className="mt-0.5 size-4 shrink-0 text-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function ServiceDetail() {
  const { id } = useParams<{ id: string }>()
  const content = id ? serviceContent[id] : null

  if (!content) {
    return <Navigate to="/" replace />
  }

  const { title, subtitle, Icon, purpose, overviewIntro, overviewItems, overviewClosing, sections } = content
  const serviceImage = id ? serviceImages[id] : null

  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20">
        <AnimateIn type="heading" className="mx-auto max-w-[1320px] px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-primary">
            Our Services
          </p>
          <h1 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.3px] text-white">
            {title}
          </h1>
          <p className="mt-4 text-base leading-[1.7] text-white/70">{subtitle}</p>
        </AnimateIn>
      </section>

      {/* Two-column: Contact form (left 40%) + Service content (right 60%) */}
      <section className="mx-auto max-w-[1320px] px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[40%_1fr] lg:gap-12">
          {/* Left: Contact form - sticky on desktop */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ContactForm title="Contact Us" />
          </div>

          {/* Right: Service details */}
          <div>
            <AnimateIn type="heading" className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-6" aria-hidden />
              </span>
              <div className="flex-1">
                <h2 className="text-2xl font-bold leading-tight text-foreground md:text-3xl">
                  {title}
                </h2>
              </div>
            </AnimateIn>

            {serviceImage && (
              <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-muted/30 shadow-sm">
                <img
                  src={serviceImage}
                  alt=""
                  className="w-full object-cover object-center"
                />
              </div>
            )}

            <div className="mt-10 space-y-10">
          <div>
            <h3 className="font-semibold text-foreground">Purpose</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{purpose}</p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Overview</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              {overviewIntro}
            </p>
            <ListSection items={overviewItems} />
            {overviewClosing && (
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {overviewClosing}
              </p>
            )}
          </div>

          {sections.map((section, idx) => (
            <div key={idx}>
              {section.type === "paragraph" && section.content && (
                <>
                  <h3 className="font-semibold text-foreground">{section.heading}</h3>
                  <p className="mt-2 text-muted-foreground">{section.content}</p>
                </>
              )}
              {section.type === "list" && section.items && (
                <>
                  <h3 className="font-semibold text-foreground">{section.heading}</h3>
                  <ListSection items={section.items} />
                </>
              )}
              {section.type === "list-grid" && section.items && (
                <>
                  <h3 className="font-semibold text-foreground">{section.heading}</h3>
                  <ListSection items={section.items} cols={section.listCols ?? "2"} />
                </>
              )}
              {section.type === "list-with-intro" && section.items && (
                <>
                  <h3 className="font-semibold text-foreground">{section.heading}</h3>
                  {section.intro && (
                    <p className="mt-2 text-muted-foreground">{section.intro}</p>
                  )}
                  <ListSection items={section.items} />
                </>
              )}
              {section.type === "engagement-model" && (
                <div className="rounded-2xl border border-border bg-muted/30 p-6 md:p-8">
                  <h3 className="text-lg font-semibold text-foreground">
                    Managed Services Engagement Model
                  </h3>
                  <div className="mt-6">
                    <h4 className="font-medium text-foreground">
                      Engagement Principles
                    </h4>
                    <ListSection items={engagementPrinciples} />
                  </div>
                  <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="rounded-xl bg-white p-4 shadow-sm">
                      <h4 className="font-medium text-foreground">
                        Stabilization Phase
                      </h4>
                      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                        {stabilizationPhase.map((item, i) => (
                          <li key={i} className="flex gap-2">
                            <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl bg-white p-4 shadow-sm">
                      <h4 className="font-medium text-foreground">
                        Optimization Phase
                      </h4>
                      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                        {optimizationPhase.map((item, i) => (
                          <li key={i} className="flex gap-2">
                            <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl bg-white p-4 shadow-sm">
                      <h4 className="font-medium text-foreground">
                        Steady-State Support
                      </h4>
                      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                        {steadyStateSupport.map((item, i) => (
                          <li key={i} className="flex gap-2">
                            <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h4 className="font-medium text-foreground">Scope of Support</h4>
                    <ListSection items={scopeOfSupport} cols="2" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
          </div>
        </div>
      </section>
    </div>
  )
}
