import ContactForm from "@/components/ContactForm"
import DonateOnline from "@/components/DonateOnline"
import { Card } from "@/components/site"
import { ORG_EIN } from "@/lib/donations"

/**
 * The two ways to give, side by side: shoes (contact form) and money (Stripe).
 * Shared by the homepage donate section and /donate so the two never drift.
 *
 * Same card anatomy on both sides: kicker above, serif title, one-line lede,
 * rule, form. Columns stretch so both cards share a top and bottom edge
 * (contract §15); the money card fills extra height by pushing its footnote
 * down (flex-1 spacer), not with empty card. Once Stripe's tall checkout iframe
 * mounts, the grid stops stretching so the shoe card keeps its own height.
 */
export default function DonateOptions() {
  return (
    <div className="grid grid-cols-1 items-stretch gap-8 has-[iframe]:items-start md:grid-cols-12 md:gap-12">
      <div className="flex flex-col md:col-span-6">
        <p className="kicker mb-5">Give shoes</p>
        <Card className="flex flex-1 flex-col p-7 md:p-9">
          <h3 className="title">Donate shoes</h3>
          <p className="body mt-2">Tell us what you have and we will set up a drop-off or pickup.</p>
          <div className="rule mb-7 mt-6" />
          <div>
            <ContactForm
              subject="Shoe Donation Inquiry"
              submitLabel="Send message"
              successMessage="Thank you. We will be in touch within 2 business days to coordinate your donation."
              inquiryOptions={[
                { value: "shoe-donation", label: "Donate shoes" },
                { value: "host-drive", label: "Host a drive" },
                { value: "volunteer", label: "Volunteer" },
              ]}
              minimal
              defaultInquiry="shoe-donation"
              messagePlaceholder="Tell us about your donation, including sizes, quantities, and gender, plus preferred pickup or drop-off details."
            />
          </div>
        </Card>
      </div>
      <div className="flex flex-col md:col-span-6">
        <p className="kicker mb-5">Give online</p>
        <Card className="flex flex-1 flex-col p-7 md:p-9">
          <h3 className="title">Donate money</h3>
          <p className="body mt-2">Once or monthly. Tax-deductible, with a receipt by email.</p>
          <div className="rule mb-7 mt-6" />
          <DonateOnline />
          <div aria-hidden className="min-h-7 flex-1" />
          <p className="border-t border-[var(--hairline)] pt-5 text-[0.85rem] leading-relaxed text-[var(--ink-soft)]">
            Shelter Aid TX is a 501(c)(3) nonprofit, EIN {ORG_EIN}. Payments are processed by Stripe; card
            details never reach our servers.
          </p>
        </Card>
      </div>
    </div>
  )
}
