import Link from "next/link";
import { site } from "@/lib/site";
import { categories } from "@/lib/taxonomy";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white mt-16">
      <div className="container-page grid gap-8 py-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="mb-2 text-lg font-semibold text-navy">{site.name}</div>
          <p className="text-sm text-ink/70 max-w-xs">{site.description}</p>
        </div>

        <div>
          <h2 className="mb-2 text-sm font-semibold text-navy">Categories</h2>
          <ul className="space-y-1 text-sm">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`} className="text-ink/80 no-underline hover:text-slate">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-sm font-semibold text-navy">Company</h2>
          <ul className="space-y-1 text-sm">
            <li><Link href="/about" className="text-ink/80 no-underline hover:text-slate">About</Link></li>
            <li><Link href="/contact" className="text-ink/80 no-underline hover:text-slate">Contact</Link></li>
            <li><Link href="/disclaimer" className="text-ink/80 no-underline hover:text-slate">Disclaimer</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-sm font-semibold text-navy">Legal</h2>
          <ul className="space-y-1 text-sm">
            <li><Link href="/privacy-policy" className="text-ink/80 no-underline hover:text-slate">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-ink/80 no-underline hover:text-slate">Terms of Service</Link></li>
            <li><Link href="/cookie-policy" className="text-ink/80 no-underline hover:text-slate">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line py-4">
        <div className="container-page flex flex-col gap-2 text-xs text-ink/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Independent troubleshooting resource, not affiliated with the companies mentioned.</p>
          <Link href="/sitemap.xml" className="no-underline hover:text-slate">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
