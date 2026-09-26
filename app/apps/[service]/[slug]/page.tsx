import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPublished, getArticleByServiceAndSlug } from "@/lib/articles";
import ArticleTemplate from "@/components/ArticleTemplate";

interface Props {
  params: { service: string; slug: string };
}

export function generateStaticParams() {
  return getAllPublished().map((a) => ({ service: a.serviceSlug, slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticleByServiceAndSlug(params.service, params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.metaDescription,
    alternates: { canonical: `/apps/${params.service}/${params.slug}` },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: "article",
      modifiedTime: article.lastUpdated,
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleByServiceAndSlug(params.service, params.slug);
  if (!article) notFound();
  return <ArticleTemplate article={article} />;
}
