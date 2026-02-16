import { useState } from "react"
import { Mail, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-primary">
            Contact Us
          </p>
          <h1 className="mt-4 text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-[-0.3px] text-white">
            Get in Touch
          </h1>
          <p className="mt-4 text-base leading-[1.7] text-white/70">
            Ready to strengthen your UKG workforce capability? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="mx-auto max-w-[1320px] px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Contact Info / Intro */}
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Let's Start a Conversation
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you're looking for UKG Workforce Management training,
              post-go-live optimization, or ongoing managed support, our team is
              ready to help.
            </p>
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a
                    href="mailto:contact@nexworkforce.com"
                    className="mt-1 text-muted-foreground hover:text-primary transition-colors"
                  >
                    contact@nexworkforce.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MessageSquare className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="font-medium text-foreground">Response Time</p>
                  <p className="mt-1 text-muted-foreground">
                    We typically respond within 1–2 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-2xl border border-border bg-white p-6 shadow-[0_2px_15px_rgba(0,0,0,0.06)] md:p-8">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="size-8" aria-hidden />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">
                  Thank You
                </h3>
                <p className="mt-2 text-muted-foreground">
                  We've received your message and will get back to you within 1–2
                  business days.
                </p>
                <Button
                  variant="outline"
                  className="mt-8"
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ name: "", email: "", subject: "", message: "" })
                  }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">
                    Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-foreground">
                    Subject <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-foreground">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your UKG needs..."
                    rows={5}
                    className={cn("mt-2 min-h-[120px]")}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full md:w-auto">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
