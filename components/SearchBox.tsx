"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [value, setValue] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = value.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
  }

  return (
    <form onSubmit={onSubmit} role="search" aria-label="Site search" className="relative">
      <label htmlFor="site-search" className="sr-only">
        Search troubleshooting guides
      </label>
      <input
        id="site-search"
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={compact ? "Search guides…" : "e.g. WhatsApp verification code not received"}
        className={
          compact
            ? "w-full rounded-md border border-line bg-paper px-3 py-2 text-sm focus:border-slate focus:outline-none"
            : "w-full rounded-lg border border-line bg-white px-5 py-4 text-base shadow-sm focus:border-slate focus:outline-none"
        }
      />
      <button
        type="submit"
        className={
          compact
            ? "sr-only"
            : "absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-navy px-4 py-2 text-sm font-medium text-white hover:bg-navy-light"
        }
      >
        Search
      </button>
    </form>
  );
}
