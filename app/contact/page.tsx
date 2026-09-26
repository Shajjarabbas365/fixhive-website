import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with the ${site.name} editorial team.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="container-page max-w-prose py-8">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />
      <h1 className="mt-3 text-2xl sm:text-3xl">Contact Us</h1>
      <p className="mt-4 text-ink/80 leading-relaxed">
        Spotted an error, have a guide request, or a general question? Send us a
        message and the editorial team will get back to you.
      </p>

      {/* Client-side validation only in this demo; wire to a real endpoint before launch. */}
      <form className="mt-6 space-y-4" action="/api/contact" method="post">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink/80">Name</label>
          <input id="name" name="name" type="text" required className="mt-1 w-full rounded-md border border-line px-3 py-2 focus:border-slate focus:outline-none" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink/80">Email</label>
          <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border border-line px-3 py-2 focus:border-slate focus:outline-none" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-ink/80">Message</label>
          <textarea id="message" name="message" rows={5} required className="mt-1 w-full rounded-md border border-line px-3 py-2 focus:border-slate focus:outline-none" />
        </div>
        <button type="submit" className="rounded-md bg-navy px-5 py-2 text-white hover:bg-navy-light">
          Send message
        </button>
      </form>
      <p className="mt-4 text-xs text-ink/50">
        This form posts to /api/contact, a placeholder endpoint — connect it to a real
        mail service (e.g. Resend, Postmark) before going live.
      </p>
    </div>
  );
}
