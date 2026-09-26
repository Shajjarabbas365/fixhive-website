import type { Metadata } from "next";
import Link from "next/link";
import { getServices } from "@/lib/articles";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Apps & Services",
  description: "Browse troubleshooting guides by app or service.",
  alternates: { canonical: "/apps" },
};

export default function AppsIndexPage() {
  const services = getServices();
  return (
    <div className="container-page py-8">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Apps", href: "/apps" }]} />
      <h1 className="mt-3 text-2xl sm:text-3xl">Apps &amp; Services</h1>
      <p className="mt-2 max-w-prose text-ink/70">
        Pick an app or service to see all of its troubleshooting guides.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
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
    </div>
  );
}
