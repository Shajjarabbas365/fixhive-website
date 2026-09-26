import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `How ${site.name} uses cookies.`,
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <div className="container-page max-w-prose py-8">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Cookie Policy", href: "/cookie-policy" }]} />
      <h1 className="mt-3 text-2xl sm:text-3xl">Cookie Policy</h1>
      <p className="mt-2 text-sm text-ink/50">Last updated: September 2026</p>

      <p className="mt-4 text-ink/80 leading-relaxed">
        Cookies are small text files stored on your device. {site.name} and its
        advertising and analytics partners may use them for the purposes below.
      </p>

      <h2 className="mt-8 text-xl">Types of cookies we use</h2>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-ink/80">
        <li><strong>Essential:</strong> required for basic site functionality.</li>
        <li><strong>Analytics:</strong> help us understand aggregate site usage.</li>
        <li><strong>Advertising:</strong> used by ad networks (e.g. Google AdSense) to serve and measure ads.</li>
      </ul>

      <h2 className="mt-8 text-xl">Managing cookies</h2>
      <p className="mt-2 text-ink/80 leading-relaxed">
        Most browsers let you block or delete cookies in their settings. Blocking
        essential cookies may affect how the site functions.
      </p>
    </div>
  );
}
