import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing use of ${site.name}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="container-page max-w-prose py-8">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Terms of Service", href: "/terms" }]} />
      <h1 className="mt-3 text-2xl sm:text-3xl">Terms of Service</h1>
      <p className="mt-2 text-sm text-ink/50">Last updated: September 2026</p>

      <h2 className="mt-8 text-xl">Use of content</h2>
      <p className="mt-2 text-ink/80 leading-relaxed">
        Guides on {site.name} are provided for general informational purposes only.
        Steps that work for one device, account, or app version may not apply to
        every situation. Follow official guidance from the relevant company whenever
        it's available, especially for account security or payment issues.
      </p>

      <h2 className="mt-8 text-xl">No warranty</h2>
      <p className="mt-2 text-ink/80 leading-relaxed">
        We make reasonable efforts to keep guides accurate and up to date, but we
        don't guarantee that any fix will resolve your specific problem. Use the
        site's content at your own discretion.
      </p>

      <h2 className="mt-8 text-xl">Third-party trademarks</h2>
      <p className="mt-2 text-ink/80 leading-relaxed">
        App and company names referenced in our guides are trademarks of their
        respective owners and are used only to identify the subject of an article.
        {" "}{site.name} is not affiliated with or endorsed by these companies.
      </p>

      <h2 className="mt-8 text-xl">Changes</h2>
      <p className="mt-2 text-ink/80 leading-relaxed">
        We may update these terms from time to time. Continued use of the site
        after changes means you accept the updated terms.
      </p>
    </div>
  );
}
