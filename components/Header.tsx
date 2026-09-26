import Link from "next/link";
import SearchBox from "./SearchBox";
import { site } from "@/lib/site";

const navLinks = [
  { href: "/apps", label: "Apps" },
  { href: "/login-problems", label: "Login" },
  { href: "/verification-problems", label: "Verification" },
  { href: "/payment-problems", label: "Payments" },
  { href: "/error-codes", label: "Error Codes" },
];

export default function Header() {
  return (
    <header className="border-b border-line bg-white">
      <div className="container-page flex flex-wrap items-center gap-4 py-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="grid h-8 w-8 place-items-center rounded bg-navy text-sm font-semibold text-white">
            FH
          </span>
          <span className="text-lg font-semibold text-navy">{site.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-5 text-sm">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-ink no-underline hover:text-slate">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto w-full md:w-72">
          <SearchBox compact />
        </div>
      </div>
    </header>
  );
}
