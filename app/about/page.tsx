import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn how ${site.name} researches, writes, and updates its troubleshooting guides.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="container-page max-w-prose py-8">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />
      <h1 className="mt-3 text-2xl sm:text-3xl">About {site.name}</h1>

      <p className="mt-4 text-ink/80 leading-relaxed">
        {site.name} is an independent troubleshooting resource. We help people work
        through common problems with apps, websites, logins, verification codes, and
        payments — the kind of thing you'd otherwise spend an hour searching forums for.
      </p>

      <h2 className="mt-8 text-xl">Our editorial approach</h2>
      <p className="mt-2 text-ink/80 leading-relaxed">
        Every guide is written by our editorial team based on how the underlying
        software actually behaves, publicly available support documentation, and
        common patterns reported by users. We date each guide with a last-updated
        timestamp and revisit it when we have reason to believe something has changed.
      </p>
      <p className="mt-2 text-ink/80 leading-relaxed">
        We do not fabricate statistics, testimonials, or claims that a company has
        confirmed something it hasn't. Where a problem may be caused by an outage or
        policy on the company's side rather than the reader's device, we say so and
        link to the company's own support or status pages where one exists.
      </p>

      <h2 className="mt-8 text-xl">What we are not</h2>
      <p className="mt-2 text-ink/80 leading-relaxed">
        {site.name} is not affiliated with, endorsed by, or officially connected to
        any of the apps, websites, or companies discussed in our guides. Product names,
        logos, and brands mentioned are the property of their respective owners and are
        used only to describe the subject of an article.
      </p>

      <h2 className="mt-8 text-xl">How we're supported</h2>
      <p className="mt-2 text-ink/80 leading-relaxed">
        The site is supported by display advertising. Ads are kept visually separate
        from navigation and article content, and we never ask readers to click them.
        See our <a href="/privacy-policy">Privacy Policy</a> for details on how ads and
        analytics use data.
      </p>
    </div>
  );
}
