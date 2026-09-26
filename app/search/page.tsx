import type { Metadata } from "next";
import Link from "next/link";
import SearchBox from "@/components/SearchBox";
import { searchArticles } from "@/lib/articles";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Search Results",
  robots: { index: false, follow: true },
};

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const q = searchParams.q ?? "";
  const results = q ? searchArticles(q) : [];

  return (
    <div className="container-page py-8">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Search", href: "/search" }]} />
      <h1 className="mt-3 text-2xl sm:text-3xl">Search</h1>
      <div className="mt-4 max-w-xl">
        <SearchBox />
      </div>

      {q && (
        <p className="mt-6 text-sm text-ink/60">
          {results.length
            ? `${results.length} result${results.length === 1 ? "" : "s"} for "${q}"`
            : `No guides found for "${q}" yet.`}
        </p>
      )}

      {q && !results.length && (
        <div className="mt-2 max-w-prose text-sm text-ink/70">
          <p>Try a shorter search, or browse a category from the homepage instead.</p>
        </div>
      )}

      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {results.map((a) => (
          <li key={a.id}>
            <Link
              href={`/apps/${a.serviceSlug}/${a.slug}`}
              className="block rounded-lg border border-line bg-white p-4 no-underline hover:border-slate"
            >
              <span className="text-xs text-ink/50">{a.service}</span>
              <div className="mt-1 font-medium text-navy">{a.title}</div>
              <p className="mt-1 text-sm text-ink/60">{a.quickAnswer.slice(0, 110)}…</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
