import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, platforms, getCategory, getPlatform } from "@/lib/taxonomy";
import { getAllPublished, getArticlesByCategory } from "@/lib/articles";
import Breadcrumbs from "@/components/Breadcrumbs";

interface Props {
  params: { category: string };
}

export function generateStaticParams() {
  const cats = categories.map((c) => ({ category: c.slug }));
  const plats = platforms.filter((p) => p.slug !== "general").map((p) => ({ category: p.slug }));
  return [...cats, ...plats];
}

export function generateMetadata({ params }: Props): Metadata {
  const cat = getCategory(params.category);
  const plat = getPlatform(params.category);
  const entry = cat ?? plat;
  if (!entry) return {};
  return {
    title: `${entry.name} Troubleshooting Guides`,
    description: entry.description,
    alternates: { canonical: `/${params.category}` },
  };
}

export default function CategoryOrPlatformPage({ params }: Props) {
  const cat = getCategory(params.category);
  const plat = getPlatform(params.category);

  if (cat) {
    const items = getArticlesByCategory(cat.slug);
    return (
      <div className="container-page py-8">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: cat.name, href: `/${cat.slug}` }]} />
        <h1 className="mt-3 text-2xl sm:text-3xl">{cat.name}</h1>
        <p className="mt-2 max-w-prose text-ink/70">{cat.description}</p>
        {items.length ? (
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {items.map((a) => (
              <li key={a.id}>
                <Link
                  href={`/apps/${a.serviceSlug}/${a.slug}`}
                  className="block rounded-lg border border-line bg-white p-4 no-underline hover:border-slate"
                >
                  <span className="text-xs text-ink/50">{a.service}</span>
                  <div className="mt-1 font-medium text-navy">{a.title}</div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 text-sm text-ink/60">
            We don't have guides in this category yet — check back soon, or use search above.
          </p>
        )}
      </div>
    );
  }

  if (plat) {
    const items = getAllPublished().filter((a) => a.platforms.includes(plat.slug));
    return (
      <div className="container-page py-8">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: plat.name, href: `/${plat.slug}` }]} />
        <h1 className="mt-3 text-2xl sm:text-3xl">{plat.name} Troubleshooting</h1>
        <p className="mt-2 max-w-prose text-ink/70">{plat.description}</p>
        {items.length ? (
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {items.map((a) => (
              <li key={a.id}>
                <Link
                  href={`/apps/${a.serviceSlug}/${a.slug}`}
                  className="block rounded-lg border border-line bg-white p-4 no-underline hover:border-slate"
                >
                  <span className="text-xs text-ink/50">{a.service}</span>
                  <div className="mt-1 font-medium text-navy">{a.title}</div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 text-sm text-ink/60">
            We don't have {plat.name} guides yet — check back soon, or use search above.
          </p>
        )}
      </div>
    );
  }

  notFound();
}
