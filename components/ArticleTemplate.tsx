import Link from "next/link";
import { Article } from "@/lib/types";
import { getPlatform } from "@/lib/taxonomy";
import { getArticleById } from "@/lib/articles";
import Breadcrumbs, { Crumb } from "./Breadcrumbs";
import AdSlot from "./AdSlot";
import { site } from "@/lib/site";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function ArticleTemplate({ article }: { article: Article }) {
  const crumbs: Crumb[] = [
    { name: "Home", href: "/" },
    { name: "Apps", href: "/apps" },
    { name: article.service, href: `/apps/${article.serviceSlug}` },
    { name: article.title, href: `/apps/${article.serviceSlug}/${article.slug}` },
  ];

  const related = article.relatedArticleIds
    .map(getArticleById)
    .filter((a): a is Article => Boolean(a));

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    dateModified: article.lastUpdated,
    author: { "@type": "Organization", name: article.author },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/apps/${article.serviceSlug}/${article.slug}`,
  };

  const faqJsonLd = article.faq.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  return (
    <article className="container-page max-w-prose py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      <Breadcrumbs items={crumbs} />

      <h1 className="mt-3 text-2xl sm:text-3xl">{article.title}</h1>

      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink/60">
        <span>Updated {formatDate(article.lastUpdated)}</span>
        <span aria-hidden="true">·</span>
        <span>Written and reviewed by {article.editor}</span>
      </div>

      <div className="mt-6 rounded-lg border border-line bg-white p-5">
        <h2 className="text-base">Quick Answer</h2>
        <p className="mt-2 text-ink/90">{article.quickAnswer}</p>
      </div>

      <section className="mt-8">
        <h2 className="text-xl">What's Happening</h2>
        <p className="mt-2 text-ink/90 leading-relaxed">{article.problemSummary}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl">Possible Reasons</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-ink/90">
          {article.possibleCauses.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      <AdSlot />

      <section className="mt-2">
        <h2 className="text-xl">Try These Fixes</h2>
        <div className="mt-3 space-y-6">
          {article.solutions.map((s) => (
            <div key={s.heading}>
              <h3 className="text-lg">
                {s.heading}
                {s.platform && s.platform !== "general" && (
                  <span className="ml-2 rounded bg-paper px-2 py-0.5 text-xs font-normal text-ink/60 border border-line">
                    {getPlatform(s.platform)?.name}
                  </span>
                )}
              </h3>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-ink/90">
                {s.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {article.companySideNote && (
        <section className="mt-8 rounded-lg border border-amber/40 bg-amber/10 p-5">
          <h2 className="text-base">When the Problem May Be on the Company's Side</h2>
          <p className="mt-2 text-ink/90">{article.companySideNote}</p>
        </section>
      )}

      {article.officialLinks && article.officialLinks.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl">Official Support</h2>
          <ul className="mt-2 space-y-1">
            {article.officialLinks.map((l) => (
              <li key={l.url}>
                <a href={l.url} target="_blank" rel="noopener noreferrer nofollow">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {article.faq.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl">FAQ</h2>
          <div className="mt-3 space-y-4">
            {article.faq.map((f) => (
              <div key={f.question}>
                <h3 className="text-base font-medium text-navy">{f.question}</h3>
                <p className="mt-1 text-ink/90">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="mt-10 border-t border-line pt-6">
          <h2 className="text-xl">Related Guides</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {related.map((r) => (
              <li key={r.id}>
                <Link
                  href={`/apps/${r.serviceSlug}/${r.slug}`}
                  className="block rounded-lg border border-line bg-white p-3 no-underline hover:border-slate"
                >
                  <span className="text-sm text-ink">{r.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {article.sources.length > 0 && (
        <section className="mt-8 text-xs text-ink/60">
          <h2 className="text-sm font-medium text-ink/70">Sources</h2>
          <ul className="mt-1 space-y-0.5">
            {article.sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer nofollow">{s.label}</a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
