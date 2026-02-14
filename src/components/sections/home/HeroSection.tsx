import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-secondary">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        {/* Left: Visual (with hero bg image) */}
        <div className="relative order-2 flex min-h-[400px] items-center justify-center overflow-hidden rounded-2xl lg:order-1 lg:min-h-[70vh]">
          {/* Hero background image - left visual only */}
          <div
            className="absolute inset-0 size-full"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden
          />
        </div>

        {/* Right: Content */}
        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 shrink-0 bg-white" />
            <p className="text-sm font-medium uppercase tracking-wider text-white">
              UKG Workforce Management Specialists
            </p>
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            UKG Training and Optimization.
            <br />
            Delivered with Enterprise Precision.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/90">
            Nex Workforce Advisory delivers structured UKG Workforce Management training and enterprise-grade managed
            services. We build workforce capability while ensuring live UKG environments remain stable, compliant, and
            performance-driven across global markets.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-lg font-semibold">
              <Link to="/services">Explore Our Services</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-lg border-white/60 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
