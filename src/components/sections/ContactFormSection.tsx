import { useState } from "react"
import { Mail, MapPin, Phone, ChevronUp } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import logo from "@/assets/Logo.svg"

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(data.error || "Failed to send message")
      }
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const inputDarkClass =
    "border-white/30 bg-transparent text-white placeholder:text-white/50 focus-visible:border-primary focus-visible:ring-primary/50"

  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-[1320px] px-6 py-16 md:py-20">
        {/* Two-column: Company info + Form */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Company info */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt=""
                className="h-10 w-auto object-contain"
                aria-hidden
              />
              <span className="text-lg font-semibold text-white">
                NexWorkforce Solution
              </span>
            </Link>
            <p className="mt-2 text-sm text-white/70">
              Building Workforce Capability. Optimizing UKG Performance.
            </p>
            <p className="mt-6 text-base leading-[1.7] text-white/80">
              A team of UKG Workforce Management specialists delivering
              enterprise-grade training, post-go-live optimization, and managed
              support to ensure workforce systems remain stable, compliant, and
              performance-driven.
            </p>
            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <Phone className="mt-0.5 size-5 shrink-0 text-white" aria-hidden />
                <a
                  href="tel:+1234567890"
                  className="text-base text-white/90 hover:text-white transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-0.5 size-5 shrink-0 text-white" aria-hidden />
                <a
                  href="mailto:contact@nexworkforce.com"
                  className="text-base text-white/90 hover:text-white transition-colors"
                >
                  contact@nexworkforce.com
                </a>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-white" aria-hidden />
                <p className="text-base leading-relaxed text-white/90">
                  Your Address Here,
                  <br />
                  City, State 12345
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div>
            {submitted ? (
              <div className="rounded-2xl border border-white/20 bg-secondary/50 p-8 text-center">
                <p className="text-lg font-semibold text-white">
                  Thank you for your message.
                </p>
                <p className="mt-2 text-white/70">
                  We&apos;ll get back to you within 1–2 business days.
                </p>
                <Button
                  variant="outline"
                  className="mt-6 border-white/40 text-white hover:bg-white/10"
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ name: "", phone: "", email: "", message: "" })
                  }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <p className="rounded-lg bg-destructive/20 px-4 py-3 text-sm text-destructive">
                    {error}
                  </p>
                )}
                <div>
                  <Label htmlFor="contact-name" className="text-white/90">
                    Name <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={cn("mt-2", inputDarkClass)}
                  />
                </div>
                <div>
                  <Label htmlFor="contact-phone" className="text-white/90">
                    Phone <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className={cn("mt-2", inputDarkClass)}
                  />
                </div>
                <div>
                  <Label htmlFor="contact-email" className="text-white/90">
                    Email Address <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className={cn("mt-2", inputDarkClass)}
                  />
                </div>
                <div>
                  <Label htmlFor="contact-message" className="text-white/90">
                    Your Message <span className="text-primary">*</span>
                  </Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help with your UKG needs?"
                    rows={4}
                    className={cn("mt-2 min-h-[120px]", inputDarkClass)}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full rounded-full font-semibold md:w-auto"
                >
                  {loading ? "Sending..." : "Submit Form"}
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Footer strip: Copyright + Scroll to top */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/60">
            Copyright © {new Date().getFullYear()} NexWorkforce Solution. All
            Rights Reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white shadow-md transition-colors hover:bg-white/20"
          >
            <ChevronUp className="size-5" aria-hidden />
          </button>
        </div>
      </div>
    </section>
  )
}
