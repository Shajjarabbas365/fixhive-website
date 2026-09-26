import Link from "next/link";
import SearchBox from "@/components/SearchBox";
import { categories } from "@/lib/taxonomy";

export default function NotFound() {
  return (
    <div className="container-page max-w-prose py-16 text-center sm:text-left">
      <h1 className="text-2xl sm:text-3xl">We couldn't find that page</h1>
      <p className="mt-3 text-ink/70">
        The guide you're looking for may have moved or doesn't exist yet. Try
        searching, or jump to a popular category below.
      </p>
      <div className="mt-6 max-w-md mx-auto sm:mx-0">
        <SearchBox />
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start">
        {categories.slice(0, 6).map((c) => (
          <Link
            key={c.slug}
            href={`/${c.slug}`}
            className="rounded-full border border-line bg-white px-4 py-2 text-sm no-underline hover:border-slate"
          >
            {c.name}
          </Link>
        ))}
      </div>
      <p className="mt-8">
        <Link href="/">Back to the homepage</Link>
      </p>
    </div>
  );
}
