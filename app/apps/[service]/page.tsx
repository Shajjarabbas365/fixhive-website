import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticlesByService, getServices } from "@/lib/articles";
import Breadcrumbs from "@/components/Breadcrumbs";

interface Props {
  params: { service: string };
}

export function generateStaticParams() {
  return getServices().map((s) => ({ service: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const items = getArticlesByService(params.service);
  if (!items.length) return {};
  const name = items[0].service;
  return {
    title: `${name} Troubleshooting Guides`,
    description: `Step-by-step fixes for common ${name} problems, including login, verification, and payment issues.`,
    alternates: { canonical: `/apps/${params.service}` },
  };
}

export default function ServicePage({ params }: Props) {
  const items = getArticlesByService(params.service);
  if (!items.length) notFound();
  const name = items[0].service;

  return (
    <div className="container-page py-8">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Apps", href: "/apps" }, { name, href: `/apps/${params.service}` }]} />
      <h1 className="mt-3 text-2xl sm:text-3xl">{name} Troubleshooting Guides</h1>
      <p className="mt-2 max-w-prose text-ink/70">
        All of our {name} guides in one place, covering common problems people search for.
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((a) => (
          <li key={a.id}>
            <Link
              href={`/apps/${a.serviceSlug}/${a.slug}`}
              className="block rounded-lg border border-line bg-white p-4 no-underline hover:border-slate"
            >
              <div className="font-medium text-navy">{a.title}</div>
              <p className="mt-1 text-sm text-ink/60">{a.quickAnswer.slice(0, 100)}…</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
