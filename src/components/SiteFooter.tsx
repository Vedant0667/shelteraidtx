import Image from "next/image"
import Link from "next/link"
import { Heart, Instagram, Linkedin, Mail, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="py-16 px-6 border-t border-[#E2E8F0] bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center mb-4">
              <Image
                src="/images/main-logo.png"
                alt="Shelter Aid TX"
                width={180}
                height={56}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-[#64748B] leading-relaxed mb-4">
              Student-led 501(c)(3) nonprofit providing shoes to shelters across Dallas-Fort Worth.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/shelteraidtx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FAFBFC] border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:text-[#2B9FD9] hover:border-[#2B9FD9] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/shelter-aid-tx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FAFBFC] border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:text-[#2B9FD9] hover:border-[#2B9FD9] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Who We Are", href: "/who-we-are" },
                { label: "Our Work", href: "/our-work" },
                { label: "Get Involved", href: "/get-involved" },
                { label: "Partners", href: "/partners" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#64748B] hover:text-[#2B9FD9] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {[
                { label: "Donate", href: "/donate" },
                { label: "Blog", href: "/blog" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#64748B] hover:text-[#2B9FD9] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-[#64748B]">
                <Mail className="w-4 h-4" />
                shelteraidtx@gmail.com
              </li>
              <li className="flex items-start gap-2 text-sm text-[#64748B]">
                <MapPin className="w-4 h-4 mt-0.5" />
                Dallas-Fort Worth, TX
              </li>
            </ul>
            <div className="mt-4 p-3 bg-[#FAFBFC] rounded-lg border border-[#E2E8F0]">
              <p className="text-xs text-[#64748B]">
                <span className="font-medium">EIN:</span> 93-3584886
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#E2E8F0] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#64748B]">
            © {new Date().getFullYear()} Shelter Aid TX. All rights reserved.
          </p>
          <p className="text-xs text-[#94A3B8]">
            Made with <Heart className="w-3 h-3 inline text-[#D4A574]" /> by students in DFW
          </p>
        </div>
      </div>
    </footer>
  )
}

