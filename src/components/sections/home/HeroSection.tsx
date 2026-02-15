import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";
import hero2 from "@/assets/hero2.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      {/* Hero background image */}
      <div
        className="absolute inset-0 size-full"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      {/* Bluish overlay */}
      <div
        // className="absolute inset-0 size-full bg-[#162165]/95"
        className="absolute inset-0 size-full bg-secondary/95"
        aria-hidden
      />
      <div className="relative z-10 mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-12 px-6 py-[100px] lg:grid-cols-2 lg:gap-16 lg:py-[120px]">
        {/* Left: Hero visual */}
        <div className="relative order-2 flex min-h-[400px] items-center justify-center overflow-hidden rounded-2xl lg:order-1 lg:min-h-[70vh]">
          <div
            className="absolute inset-0 size-full"
            style={{
              backgroundImage: `url(${hero2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden
          />
        </div>

        {/* Right: Content */}
        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-3">

            
          </div>

          <h1 className="mt-6 text-[clamp(2.5rem,5vw,4.25rem)] font-extrabold leading-[1.15] tracking-[-0.5px] text-white md:text-5xl lg:text-[4.25rem]">
            UKG Training and Optimization.
            <br />
            Delivered with Enterprise Precision.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-[1.7] text-white/70">
            Nex Workforce Advisory delivers structured UKG Workforce Management training and enterprise-grade managed
            services. We build workforce capability while ensuring live UKG environments remain stable, compliant, and
            performance-driven across global markets.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full px-9 py-4 font-semibold shadow-md transition-all hover:shadow-[0_8px_25px_rgba(59,78,240,0.3)]"
            >
              <Link to="/services">Explore Our Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-white px-9 py-4 font-semibold ">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
