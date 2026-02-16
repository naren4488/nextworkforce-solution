import { ContactFormAndAddress } from "@/components/ContactFormAndAddress"

export function ContactFormSection() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-[1320px] px-6 py-16 md:py-20">
        <ContactFormAndAddress idPrefix="contact" />
      </div>
    </section>
  )
}
