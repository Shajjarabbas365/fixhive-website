import { Article } from "./types";

// Content data model: each article is a structured object. In production this
// would be sourced from a headless CMS or MDX files, but the shape below is
// what the rest of the app (templates, sitemap, schema, related links) reads
// from — so switching the data source later does not require touching pages.

export const articles: Article[] = [
  {
    id: "whatsapp-verification-code-not-received",
    slug: "verification-code-not-received",
    title: "WhatsApp Verification Code Not Received: What to Check",
    metaDescription:
      "WhatsApp verification SMS or call not arriving? Here's what to check on Android and iPhone before requesting a new code.",
    quickAnswer:
      "Most missing WhatsApp codes come down to a weak signal, a full SMS inbox, or requesting a new code too soon. Wait at least a few minutes between attempts, confirm your number is entered correctly with the right country code, and try the 'Call me' option if SMS doesn't arrive.",
    service: "WhatsApp",
    serviceSlug: "whatsapp",
    category: "verification-problems",
    platforms: ["android", "iphone"],
    problemSummary:
      "WhatsApp sends a one-time verification code by SMS (or a voice call) when you register a number or set up a new device. If that code never arrives, you can't finish setup. This is usually a delivery issue rather than a problem with your WhatsApp account itself.",
    possibleCauses: [
      "Weak or no mobile signal at the moment the code was sent",
      "The phone number was typed with the wrong country code or a missing digit",
      "Requesting several codes in a row, which can trigger a temporary delivery cooldown",
      "A full SMS inbox or an SMS-blocking app filtering the message",
      "Carrier-side delays, particularly on prepaid or newly activated SIMs",
      "A temporary WhatsApp service issue affecting SMS or call delivery",
    ],
    solutions: [
      {
        heading: "Try These Fixes First",
        steps: [
          "Double-check the number and country code shown on WhatsApp's verification screen before requesting a code.",
          "Move somewhere with stronger signal, or switch between Wi‑Fi and mobile data if your phone supports Wi‑Fi calling.",
          "Wait at least 5 minutes before requesting another code — repeated requests can delay delivery further.",
          "Restart your phone, which can clear a stuck SMS or network connection.",
        ],
      },
      {
        heading: "Android",
        platform: "android",
        steps: [
          "Check Settings > Apps > Messages to confirm your default SMS app isn't blocking unknown senders.",
          "If you use a third-party SMS blocker or spam filter, check its blocked-messages list.",
          "Make sure Do Not Disturb isn't filtering the incoming SMS notification.",
        ],
      },
      {
        heading: "iPhone",
        platform: "iphone",
        steps: [
          "Go to Settings > Messages and confirm iMessage isn't intercepting the SMS in a way that delays it.",
          "Check Settings > Focus to make sure a Focus mode isn't silencing messages from unknown numbers.",
          "If you recently switched SIMs or carriers, confirm the new SIM is fully activated before requesting a code.",
        ],
      },
      {
        heading: "Try a Voice Call Instead",
        steps: [
          "On the verification screen, wait for the 'Call me' option to appear (usually after one SMS attempt).",
          "Answer the call and listen for the spoken code — write it down as it's read only once on some carriers.",
        ],
      },
    ],
    companySideNote:
      "If codes fail to arrive for many users at once, it may be a temporary issue on WhatsApp's side rather than your device. Check WhatsApp's official status information before assuming the problem is local to your phone.",
    officialLinks: [
      { label: "WhatsApp Help Center — verification", url: "https://faq.whatsapp.com/" },
    ],
    faq: [
      {
        question: "How long should I wait before requesting a new code?",
        answer:
          "Give it at least 5 minutes. Requesting codes back-to-back can trigger a longer delivery delay rather than speeding things up.",
      },
      {
        question: "Does WhatsApp charge for the verification call?",
        answer:
          "The call itself may be treated as a normal incoming call by your carrier, which is typically free to receive, but check your plan if you're unsure.",
      },
      {
        question: "Can I verify with a landline number?",
        answer:
          "Yes, using the voice-call verification option, since a landline can't receive SMS.",
      },
    ],
    relatedArticleIds: ["instagram-login-not-working"],
    sources: [
      { label: "WhatsApp FAQ", url: "https://faq.whatsapp.com/" },
    ],
    lastUpdated: "2026-09-20",
    author: "FixHive Editorial Team",
    editor: "FixHive Editorial Team",
    status: "published",
  },
  {
    id: "instagram-login-not-working",
    slug: "login-not-working",
    title: "Instagram Login Not Working: How to Get Back In",
    metaDescription:
      "Instagram won't let you log in? Step-by-step checks for incorrect-password errors, stuck loading screens, and suspected account locks.",
    quickAnswer:
      "Start by confirming your password with Instagram's password reset flow, then update the app and check your internet connection. If Instagram shows a specific error about your account, follow the in-app steps rather than trying to force a login repeatedly.",
    service: "Instagram",
    serviceSlug: "instagram",
    category: "login-problems",
    platforms: ["android", "iphone", "browser"],
    problemSummary:
      "Instagram logins can fail for several distinct reasons: a wrong password, an outdated app version, a connectivity problem, or a security hold Instagram has placed on the account. Identifying which one applies changes the right next step.",
    possibleCauses: [
      "Incorrect password, including autofill entering an outdated saved password",
      "An outdated version of the Instagram app with a known login bug",
      "Unstable Wi‑Fi or mobile data connection",
      "Instagram has flagged the login as unusual and requires extra verification",
      "A temporary block after several failed login attempts",
      "Browser cookie or cache issues when logging in on desktop",
    ],
    solutions: [
      {
        heading: "Quick Fixes",
        steps: [
          "Use 'Forgot password' to set a new password rather than guessing — this also clears many stuck-login states.",
          "Update the Instagram app from the App Store or Google Play, then reopen it.",
          "Switch networks (Wi‑Fi to mobile data or back) to rule out a local connectivity issue.",
        ],
      },
      {
        heading: "Android",
        platform: "android",
        steps: [
          "Open Settings > Apps > Instagram > Storage and clear cache (not data) to fix a stuck login screen.",
          "Confirm the correct Google account/autofill isn't inserting an old saved password.",
        ],
      },
      {
        heading: "iPhone",
        platform: "iphone",
        steps: [
          "Offload the app via Settings > General > iPhone Storage > Instagram > Offload App, then reinstall.",
          "Check Settings > Passwords for a saved Instagram entry that may be out of date.",
        ],
      },
      {
        heading: "Browser (Desktop)",
        platform: "browser",
        steps: [
          "Clear cookies and cached data for instagram.com, or try logging in from a private/incognito window.",
          "Disable browser extensions that block scripts or trackers, then reload the login page.",
        ],
      },
      {
        heading: "If Instagram Shows a Security or Suspicious-Activity Message",
        steps: [
          "Follow the on-screen verification steps exactly as shown — usually a code sent to your email or phone.",
          "Avoid repeatedly retrying the login while a hold is active, since this can extend the review period.",
        ],
      },
    ],
    companySideNote:
      "If the error message mentions a security review or a temporary block, that decision comes from Instagram's systems, not your device — retrying the same login won't resolve it faster.",
    officialLinks: [
      { label: "Instagram Help Center", url: "https://help.instagram.com/" },
    ],
    faq: [
      {
        question: "Why does Instagram say my password is wrong when I'm sure it's correct?",
        answer:
          "Saved passwords in your phone's keyboard or browser autofill are a common cause. Reset the password directly through Instagram to rule this out.",
      },
      {
        question: "How long does an Instagram login block usually last?",
        answer:
          "It varies by case and isn't published by Instagram, so there's no fixed time to give. Completing any requested verification is the fastest path back in.",
      },
    ],
    relatedArticleIds: ["whatsapp-verification-code-not-received", "google-pay-payment-failed"],
    sources: [{ label: "Instagram Help Center", url: "https://help.instagram.com/" }],
    lastUpdated: "2026-09-18",
    author: "FixHive Editorial Team",
    editor: "FixHive Editorial Team",
    status: "published",
  },
  {
    id: "google-pay-payment-failed",
    slug: "payment-failed",
    title: "Google Pay Payment Failed: Common Causes and Fixes",
    metaDescription:
      "Google Pay transaction declined or stuck? Here's how to check your card, bank, and app status before trying again.",
    quickAnswer:
      "Most Google Pay failures trace back to the bank declining the transaction, an expired or unverified card, or a temporary app glitch. Check your bank app first for a decline reason, then confirm your card details in Google Pay are current.",
    service: "Google Pay",
    serviceSlug: "google-pay",
    category: "payment-problems",
    platforms: ["android", "browser"],
    problemSummary:
      "A failed Google Pay payment can happen at three different points: the bank declines it, Google Pay itself has an issue passing the request through, or the merchant's terminal or checkout rejects it. Narrowing down which one applies avoids repeating the same failed attempt.",
    possibleCauses: [
      "The linked card is expired, frozen, or over its limit",
      "Your bank's fraud detection declined the specific transaction",
      "The card was added but never fully verified in Google Pay",
      "No internet connection at the moment of a tap-to-pay transaction",
      "An outdated Google Play Services or Google Pay app version",
      "A temporary outage affecting Google Pay or your bank's payment processing",
    ],
    solutions: [
      {
        heading: "Check the Bank Side First",
        steps: [
          "Open your bank's app and look for a specific decline reason or a fraud alert requiring confirmation.",
          "Confirm the card hasn't expired and has sufficient available balance or credit.",
        ],
      },
      {
        heading: "Check Google Pay Setup",
        platform: "android",
        steps: [
          "Open Google Pay > your card > confirm it shows as 'Verified', not 'Pending verification'.",
          "Remove and re-add the card if it repeatedly fails despite showing as verified.",
          "Update Google Play Services via the Play Store, then restart your phone.",
        ],
      },
      {
        heading: "For Online Checkout (Browser)",
        platform: "browser",
        steps: [
          "Make sure you're signed in to the correct Google Account in your browser.",
          "Try the payment again in an incognito window to rule out extensions interfering.",
        ],
      },
      {
        heading: "For Tap-to-Pay at a Terminal",
        steps: [
          "Confirm your phone has an active data or Wi‑Fi connection — some terminals require it for verification.",
          "Hold the phone slightly longer against the terminal; a rushed tap can register as a failed read.",
        ],
      },
    ],
    companySideNote:
      "When a decline reason is shown by your bank, the block is on the bank's side, not Google Pay's, and needs to be resolved with them directly.",
    officialLinks: [
      { label: "Google Pay Help", url: "https://support.google.com/pay" },
    ],
    faq: [
      {
        question: "Will I be charged twice if a payment shows as failed but money left my account?",
        answer:
          "A failed transaction that still shows a pending charge is usually a temporary authorization hold that your bank releases automatically within a few days. Contact your bank if it doesn't clear.",
      },
      {
        question: "Why does Google Pay keep asking me to re-verify my card?",
        answer:
          "This is typically triggered by your bank's security policy rather than Google Pay, often after a card update or a period of inactivity.",
      },
    ],
    relatedArticleIds: ["instagram-login-not-working"],
    sources: [{ label: "Google Pay Help Center", url: "https://support.google.com/pay" }],
    lastUpdated: "2026-09-22",
    author: "FixHive Editorial Team",
    editor: "FixHive Editorial Team",
    status: "published",
  },
];

export function getArticleByServiceAndSlug(service: string, slug: string) {
  return articles.find((a) => a.serviceSlug === service && a.slug === slug && a.status === "published");
}

export function getArticleById(id: string) {
  return articles.find((a) => a.id === id);
}

export function getAllPublished() {
  return articles.filter((a) => a.status === "published");
}

export function getArticlesByCategory(category: string) {
  return getAllPublished().filter((a) => a.category === category);
}

export function getArticlesByService(service: string) {
  return getAllPublished().filter((a) => a.serviceSlug === service);
}

export function getServices() {
  const map = new Map<string, string>();
  for (const a of getAllPublished()) map.set(a.serviceSlug, a.service);
  return Array.from(map, ([slug, name]) => ({ slug, name }));
}

export function searchArticles(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return getAllPublished().filter((a) => {
    const haystack = [
      a.title,
      a.service,
      a.quickAnswer,
      a.problemSummary,
      ...a.possibleCauses,
      a.category,
    ]
      .join(" ")
      .toLowerCase();
    return q.split(/\s+/).every((term) => haystack.includes(term));
  });
}
