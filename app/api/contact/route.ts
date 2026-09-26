import { NextRequest, NextResponse } from "next/server";

// Placeholder endpoint. Wire this up to a real transactional email service
// (e.g. Resend, Postmark, SendGrid) using an API key stored in an
// environment variable before going live. Never hardcode API keys.
export async function POST(req: NextRequest) {
  const form = await req.formData();
  const name = String(form.get("name") ?? "").slice(0, 200);
  const email = String(form.get("email") ?? "").slice(0, 200);
  const message = String(form.get("message") ?? "").slice(0, 5000);

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  // TODO: send email via your provider of choice using process.env.CONTACT_EMAIL_API_KEY
  console.log("Contact form submission:", { name, email });

  return NextResponse.redirect(new URL("/contact?sent=1", req.url), { status: 303 });
}
