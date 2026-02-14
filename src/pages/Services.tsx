import { Link } from "react-router-dom"
import { Check, GraduationCap, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

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

export function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary py-[100px] md:py-[120px]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-primary">
            Our Services
          </p>
          <h1 className="mt-4 text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-[-0.3px] text-white">
            UKG Workforce Management
          </h1>
          <p className="mt-4 text-base leading-[1.7] text-white/70">
            Training and managed services designed for enterprise performance.
          </p>
        </div>
      </section>

      {/* Service 1: UKG Training */}
      <section className="mx-auto max-w-4xl px-6 py-[100px] md:py-[120px]">
        <div className="flex items-start gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <GraduationCap className="size-6" aria-hidden />
          </span>
          <div>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              UKG Workforce Management Training
            </h2>
          </div>
        </div>

        <div className="mt-10 space-y-10">
          <div>
            <h3 className="font-semibold text-foreground">Purpose</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              To build globally relevant, project-ready UKG Workforce Management
              capability through structured, enterprise-aligned training programs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Overview</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              Our UKG training programs are designed for:
            </p>
            <ul className="mt-3 space-y-2">
              {trainingOverview.map((item, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              All programs are package-based, outcome-oriented, and aligned to
              real implementation and BAU support scenarios.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Training Approach</h3>
            <ul className="mt-3 space-y-2">
              {trainingApproach.map((item, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Functional Coverage</h3>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {functionalCoverage.map((item, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Outcomes</h3>
            <p className="mt-2 text-muted-foreground">
              Participants complete the program with the ability to:
            </p>
            <ul className="mt-3 space-y-2">
              {trainingOutcomes.map((item, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-4xl px-6">
        <hr className="border-border" />
      </div>

      {/* Service 2: UKG Optimization & Managed Services */}
      <section className="mx-auto max-w-4xl px-6 py-[100px] md:py-[120px]">
        <div className="flex items-start gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <SlidersHorizontal className="size-6" aria-hidden />
          </span>
          <div>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              UKG Workforce Optimization & Managed Services
            </h2>
          </div>
        </div>

        <div className="mt-10 space-y-10">
          <div>
            <h3 className="font-semibold text-foreground">Purpose</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              To ensure stability, accuracy, and continuous improvement of live
              UKG Workforce Management environments.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Overview</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              Our managed services are designed for organizations that have
              already implemented UKG and require:
            </p>
            <ul className="mt-3 space-y-2">
              {managedOverview.map((item, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We operate as an extension of internal HRIS and workforce teams,
              providing specialized expertise without the overhead of large
              in-house teams.
            </p>
          </div>

          {/* Engagement Model */}
          <div className="rounded-2xl border border-border bg-muted/30 p-6 md:p-8">
            <h3 className="text-lg font-semibold text-foreground">
              Managed Services Engagement Model
            </h3>

            <div className="mt-6">
              <h4 className="font-medium text-foreground">
                Engagement Principles
              </h4>
              <ul className="mt-2 space-y-2">
                {engagementPrinciples.map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
              <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {scopeOfSupport.map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-[100px] md:py-[120px]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-base leading-[1.7] text-white/70">
            Ready to build or optimize your UKG workforce capability?
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 rounded-full font-semibold"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
