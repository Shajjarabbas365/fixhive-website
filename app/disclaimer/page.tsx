import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `${site.name}'s independence and trademark disclaimer.`,
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="container-page max-w-prose py-8">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Disclaimer", href: "/disclaimer" }]} />
      <h1 className="mt-3 text-2xl sm:text-3xl">Disclaimer</h1>

      <p className="mt-4 text-ink/80 leading-relaxed">
        {site.name} is an independent website. We are not owned by, operated by,
        affiliated with, or endorsed by any of the companies, apps, or services
        mentioned in our guides, including but not limited to WhatsApp, Instagram,
        and Google Pay. All product names, logos, and brands are the property of
        their respective owners.
      </p>
      <p className="mt-4 text-ink/80 leading-relaxed">
        References to these companies and their products are for identification
        purposes only, to describe the subject of a troubleshooting guide, and do
        not imply any partnership.
      </p>
      <p className="mt-4 text-ink/80 leading-relaxed">
        Troubleshooting steps are provided as general guidance. Where account
        security or payments are involved, always verify instructions against the
        company's own official support channels before proceeding.
      </p>
    </div>
  );
}
