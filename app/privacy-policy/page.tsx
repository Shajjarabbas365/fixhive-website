import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects and uses information.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-page max-w-prose py-8">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Privacy Policy", href: "/privacy-policy" }]} />
      <h1 className="mt-3 text-2xl sm:text-3xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-ink/50">Last updated: September 2026</p>

      <p className="mt-4 text-ink/80 leading-relaxed">
        This policy explains what information {site.name} collects and how it's used.
        Replace the placeholders below with your actual analytics, ad network, and
        legal-entity details before publishing this site live.
      </p>

      <h2 className="mt-8 text-xl">Information we collect</h2>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-ink/80">
        <li>Standard server logs (IP address, browser type, pages visited).</li>
        <li>Information you provide voluntarily, such as through the contact form.</li>
        <li>Cookies and similar technologies used by analytics and advertising partners — see our <a href="/cookie-policy">Cookie Policy</a>.</li>
      </ul>

      <h2 className="mt-8 text-xl">Advertising</h2>
      <p className="mt-2 text-ink/80 leading-relaxed">
        This site may display ads served by third-party networks such as Google
        AdSense. These networks may use cookies to serve ads based on your prior
        visits to this and other websites. You can opt out of personalized
        advertising through your browser or ad-network settings.
      </p>

      <h2 className="mt-8 text-xl">Analytics</h2>
      <p className="mt-2 text-ink/80 leading-relaxed">
        We may use an analytics service (such as Google Analytics) to understand
        how the site is used in aggregate. This does not identify you personally.
      </p>

      <h2 className="mt-8 text-xl">Your choices</h2>
      <p className="mt-2 text-ink/80 leading-relaxed">
        You can control cookies through your browser settings and opt out of
        personalized ads via your ad network's preference tools.
      </p>

      <h2 className="mt-8 text-xl">Contact</h2>
      <p className="mt-2 text-ink/80 leading-relaxed">
        Questions about this policy can be sent via our <a href="/contact">Contact page</a>.
      </p>
    </div>
  );
}
