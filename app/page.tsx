import Link from "next/link";
import type { Metadata } from "next";
import SearchBox from "@/components/SearchBox";
import { categories, platforms } from "@/lib/taxonomy";
import { getAllPublished, getServices } from "@/lib/articles";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — Clear Fixes for App, Website & Login Problems`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const articles = getAllPublished();
  const services = getServices();
  const recent = [...articles].sort((a, b) => (a.lastUpdated < b.lastUpdated ? 1 : -1));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="border-b border-line bg-white">
        <div className="container-page py-14 sm:py-20">
          <h1 className="max-w-2xl text-3xl sm:text-4xl">
            Stuck on a login, payment, or app error? Find the fix.
          </h1>
          <p className="mt-4 max-w-xl text-ink/70">
            {site.name} is an independent library of step-by-step troubleshooting guides
            for the apps, websites, and devices people use every day — written in plain
            English, checked against official sources, and updated when things change.
          </p>
          <div className="mt-6 max-w-xl">
            <SearchBox />
          </div>
        </div>
      </section>

      <section className="container-page py-10">
        <h2 className="text-xl">Browse by problem type</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="rounded-lg border border-line bg-white p-4 no-underline hover:border-slate"
            >
              <div className="font-medium text-navy">{c.name}</div>
              <p className="mt-1 text-sm text-ink/60">{c.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page py-10">
        <h2 className="text-xl">Browse by device</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {platforms
            .filter((p) => p.slug !== "general")
            .map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                className="rounded-full border border-line bg-white px-4 py-2 text-sm no-underline hover:border-slate"
              >
                {p.name}
              </Link>
            ))}
        </div>
      </section>

      <section className="container-page py-10">
        <h2 className="text-xl">Popular apps &amp; services</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/apps/${s.slug}`}
              className="rounded-full border border-line bg-white px-4 py-2 text-sm no-underline hover:border-slate"
            >
              {s.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page py-10">
        <h2 className="text-xl">Recently updated guides</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {recent.map((a) => (
            <li key={a.id}>
              <Link
                href={`/apps/${a.serviceSlug}/${a.slug}`}
                className="block h-full rounded-lg border border-line bg-white p-4 no-underline hover:border-slate"
              >
                <span className="text-xs text-ink/50">{a.service}</span>
                <div className="mt-1 font-medium text-navy">{a.title}</div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page pb-16 pt-4">
        <div className="rounded-lg border border-line bg-white p-6">
          <h2 className="text-lg">Why trust {site.name}?</h2>
          <p className="mt-2 max-w-2xl text-sm text-ink/70">
            Every guide is written by our editorial team, dated with a last-updated
            timestamp, and linked to official support or status pages where relevant.
            We don't guess at company-side outages, and we don't publish thin or
            duplicated pages just to chase search traffic. Read our{" "}
            <Link href="/about">editorial approach</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
