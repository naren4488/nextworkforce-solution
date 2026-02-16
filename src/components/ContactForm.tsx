import { useState } from "react"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface ContactFormProps {
  variant?: "light" | "dark"
  title?: string
  className?: string
}

export function ContactForm({
  variant = "light",
  title = "Get in Touch",
  className,
}: ContactFormProps) {
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

  const isDark = variant === "dark"
  const inputClass = isDark
    ? "border-white/30 bg-transparent text-white placeholder:text-white/50 focus-visible:border-primary focus-visible:ring-primary/50"
    : ""
  const labelClass = isDark ? "text-white/90" : "text-foreground"

  return (
    <div className={className}>
      {submitted ? (
        <div className="rounded-2xl border border-border bg-white p-8 text-center shadow-[0_2px_15px_rgba(0,0,0,0.06)]">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Mail className="size-8" aria-hidden />
          </div>
          <h3 className="mt-6 text-xl font-bold text-foreground">Thank You</h3>
          <p className="mt-2 text-muted-foreground">
            We&apos;ll get back to you within 1–2 business days.
          </p>
          <Button
            variant="outline"
            className="mt-8"
            onClick={() => {
              setSubmitted(false)
              setFormData({ name: "", phone: "", email: "", message: "" })
            }}
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={`rounded-2xl border border-border bg-white p-6 shadow-[0_2px_15px_rgba(0,0,0,0.06)] md:p-8 ${isDark ? "border-white/20 bg-secondary/50" : ""}`}
        >
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Interested in this service? Reach out and we&apos;ll respond within 1–2 business days.
          </p>
          <div className="mt-6 space-y-5">
            {error && (
              <p className="rounded-lg bg-destructive/20 px-4 py-3 text-sm text-destructive">
                {error}
              </p>
            )}
            <div>
              <Label htmlFor="service-contact-name" className={labelClass}>
                Name <span className="text-primary">*</span>
              </Label>
              <Input
                id="service-contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`mt-2 ${inputClass}`}
              />
            </div>
            <div>
              <Label htmlFor="service-contact-phone" className={labelClass}>
                Phone <span className="text-primary">*</span>
              </Label>
              <Input
                id="service-contact-phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                className={`mt-2 ${inputClass}`}
              />
            </div>
            <div>
              <Label htmlFor="service-contact-email" className={labelClass}>
                Email <span className="text-primary">*</span>
              </Label>
              <Input
                id="service-contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className={`mt-2 ${inputClass}`}
              />
            </div>
            <div>
              <Label htmlFor="service-contact-message" className={labelClass}>
                Message <span className="text-primary">*</span>
              </Label>
              <Textarea
                id="service-contact-message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your UKG needs..."
                rows={4}
                className={`mt-2 min-h-[100px] ${inputClass}`}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full rounded-full font-semibold"
            >
              {loading ? "Sending..." : "Submit"}
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}
