import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Shelter Aid TX collects, uses, and protects your personal information. Our privacy policy covers donations, email communications, and data security.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Shelter Aid TX",
    description: "Our commitment to protecting your privacy and personal information.",
    url: "https://shelteraidtx.org/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <NavBar />
      <main className="pt-8 sm:pt-16">
        <section className="relative w-full py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-5">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-500 mb-8">
              Last Updated: October 26, 2025
            </p>

            <div className="prose prose-slate max-w-none">
              <h2 className="font-display text-2xl font-bold text-slate-900 mt-8 mb-4">
                1. Introduction
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Shelter Aid TX (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://shelteraidtx.org" className="text-[var(--color-primary)] hover:underline">shelteraidtx.org</a>, make a donation, or otherwise interact with our services.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Shelter Aid TX is a 501(c)(3) nonprofit organization (EIN: 93-3584886) dedicated to donating shoes to homeless shelters across Dallas-Fort Worth.
              </p>

              <h2 className="font-display text-2xl font-bold text-slate-900 mt-8 mb-4">
                2. Information We Collect
              </h2>
              <h3 className="font-display text-xl font-semibold text-slate-900 mt-6 mb-3">
                2.1 Personal Information You Provide
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Make a donation (name, email address, payment information)</li>
                <li>Submit a contact form (name, email address, phone number, message)</li>
                <li>Sign up for our email newsletter</li>
                <li>Volunteer or inquire about partnership opportunities</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-slate-900 mt-6 mb-3">
                2.2 Information Automatically Collected
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring website</li>
                <li>Pages viewed and time spent on pages</li>
                <li>Access times and dates</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-slate-900 mt-8 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li><strong>Process donations:</strong> To process your financial contributions and issue tax receipts</li>
                <li><strong>Communicate with you:</strong> To respond to inquiries, send donation receipts, and provide updates about our work</li>
                <li><strong>Improve our services:</strong> To understand how visitors use our website and improve user experience</li>
                <li><strong>Comply with legal obligations:</strong> To maintain records as required by law for nonprofit organizations</li>
                <li><strong>Marketing communications:</strong> With your consent, to send you newsletters and updates about our mission (you may opt out at any time)</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-slate-900 mt-8 mb-4">
                4. Third-Party Services
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We use the following third-party services that may collect, use, and process your data:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li><strong>Stripe:</strong> Payment processing for donations. Stripe&apos;s privacy policy: <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">https://stripe.com/privacy</a></li>
                <li><strong>Google Analytics:</strong> Website analytics to understand visitor behavior (if applicable)</li>
                <li><strong>Email service providers:</strong> For sending donation receipts and newsletters</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                These third parties have their own privacy policies, and we encourage you to review them.
              </p>

              <h2 className="font-display text-2xl font-bold text-slate-900 mt-8 mb-4">
                5. Data Security
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Payment information is processed securely through Stripe and is not stored on our servers.
              </p>

              <h2 className="font-display text-2xl font-bold text-slate-900 mt-8 mb-4">
                6. Data Retention
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Donation records are retained for tax and accounting purposes as required by IRS regulations.
              </p>

              <h2 className="font-display text-2xl font-bold text-slate-900 mt-8 mb-4">
                7. Your Rights
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing emails at any time</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                To exercise these rights, please contact us at <a href="mailto:shelteraidtx@gmail.com" className="text-[var(--color-primary)] hover:underline">shelteraidtx@gmail.com</a>.
              </p>

              <h2 className="font-display text-2xl font-bold text-slate-900 mt-8 mb-4">
                8. Children&apos;s Privacy
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>

              <h2 className="font-display text-2xl font-bold text-slate-900 mt-8 mb-4">
                9. Changes to This Privacy Policy
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date. We encourage you to review this Privacy Policy periodically.
              </p>

              <h2 className="font-display text-2xl font-bold text-slate-900 mt-8 mb-4">
                10. Contact Us
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you have questions or concerns about this Privacy Policy, please contact us:
              </p>
              <div className="bg-[var(--color-secondary)] rounded-2xl p-6 mb-8">
                <p className="text-slate-900 font-semibold mb-2">Shelter Aid TX</p>
                <p className="text-slate-600">Email: <a href="mailto:shelteraidtx@gmail.com" className="text-[var(--color-primary)] hover:underline">shelteraidtx@gmail.com</a></p>
                <p className="text-slate-600">Address: 5900 Balcones Dr Ste 100, Austin, TX 78731</p>
                <p className="text-slate-600 mt-2">EIN: 93-3584886</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
