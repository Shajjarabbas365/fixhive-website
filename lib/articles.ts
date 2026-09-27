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
  {
    id: "facebook-login-not-working",
    slug: "login-not-working",
    title: "Facebook Login Not Working: How to Get Back In",
    metaDescription:
      "Can't log in to Facebook? Here's how to tell a password problem apart from a security hold, and what to do for each.",
    quickAnswer:
      "Reset your password directly through Facebook rather than guessing, then make sure the app is updated. If Facebook shows a specific security-check screen, complete it in full rather than closing and retrying the login.",
    service: "Facebook",
    serviceSlug: "facebook",
    category: "login-problems",
    platforms: ["android", "iphone", "browser"],
    problemSummary:
      "A Facebook login can fail for a handful of distinct reasons — a wrong or outdated saved password, an app that needs updating, a connectivity issue, or a security check Facebook has placed on the account after unusual activity. Each needs a different fix.",
    possibleCauses: [
      "Incorrect password, often from an outdated saved password in autofill",
      "An outdated version of the Facebook app",
      "Unstable internet connection at the moment of login",
      "Facebook has flagged the login location or device as unusual",
      "A temporary lock after several failed attempts",
      "Browser cookies or extensions interfering with the login page",
    ],
    solutions: [
      {
        heading: "Quick Fixes",
        steps: [
          "Use 'Forgotten password?' to set a new password instead of retrying the old one.",
          "Update the Facebook app from the App Store or Google Play.",
          "Switch between Wi‑Fi and mobile data to rule out a local connectivity issue.",
        ],
      },
      {
        heading: "Android",
        platform: "android",
        steps: [
          "Go to Settings > Apps > Facebook > Storage and clear cache (not data).",
          "Check your phone's saved passwords for an old Facebook entry that autofill may be using.",
        ],
      },
      {
        heading: "iPhone",
        platform: "iphone",
        steps: [
          "Offload the app via Settings > General > iPhone Storage > Facebook > Offload App, then reinstall.",
          "Check Settings > Passwords for an outdated saved Facebook password.",
        ],
      },
      {
        heading: "Browser (Desktop)",
        platform: "browser",
        steps: [
          "Clear cookies for facebook.com or try a private/incognito window.",
          "Temporarily disable ad-blocking or privacy extensions, then reload the login page.",
        ],
      },
      {
        heading: "If Facebook Shows a Security Check",
        steps: [
          "Complete the identity-confirmation steps exactly as shown, usually a code sent to your email or phone.",
          "Avoid repeatedly retrying the plain login while a check is active — finishing the verification is faster.",
        ],
      },
    ],
    companySideNote:
      "A security-check screen is a decision made by Facebook's systems, not a fault with your device. Retrying the same login won't skip it — the verification steps are the way through.",
    officialLinks: [{ label: "Facebook Help Center", url: "https://www.facebook.com/help" }],
    faq: [
      {
        question: "Why does Facebook keep saying my password is wrong when I'm sure it's right?",
        answer:
          "Saved passwords in your browser or phone keyboard are a common cause. Reset the password directly through Facebook to rule this out.",
      },
      {
        question: "How long does a Facebook security lock last?",
        answer:
          "It varies and isn't published by Facebook. Completing the requested verification steps is the fastest way back in.",
      },
    ],
    relatedArticleIds: ["instagram-login-not-working", "whatsapp-verification-code-not-received"],
    sources: [{ label: "Facebook Help Center", url: "https://www.facebook.com/help" }],
    lastUpdated: "2026-09-24",
    author: "FixHive Editorial Team",
    editor: "FixHive Editorial Team",
    status: "published",
  },
  {
    id: "outlook-not-receiving-emails",
    slug: "not-receiving-emails",
    title: "Outlook Not Receiving Emails: What to Check",
    metaDescription:
      "New emails not showing up in Outlook? Check these settings before assuming messages are lost.",
    quickAnswer:
      "Start by checking your Junk and Other folders, then confirm Outlook is set to sync automatically rather than manually. Most missing-email reports turn out to be filtering rules or a sync setting, not messages actually being lost.",
    service: "Outlook",
    serviceSlug: "outlook",
    category: "notifications",
    platforms: ["windows", "mac", "browser"],
    problemSummary:
      "Emails that seem to have vanished are usually still on the server — the app just isn't showing or syncing them, or a rule has silently moved them. Occasionally storage limits or account-level issues are the real cause.",
    possibleCauses: [
      "A mail rule automatically moving or deleting incoming messages",
      "Messages landing in Junk, Clutter, or a custom folder",
      "Sync set to manual instead of automatic",
      "Mailbox storage quota reached, which can block new mail from arriving",
      "An outdated Outlook version with a known sync bug",
      "A temporary outage on Microsoft's mail servers",
    ],
    solutions: [
      {
        heading: "Check the Obvious Places First",
        steps: [
          "Open the Junk Email and Other folders and search for the missing sender's name.",
          "Go to File > Manage Rules & Alerts and check for any rule that moves or deletes mail automatically.",
          "Search across all folders (not just Inbox) using the search bar at the top.",
        ],
      },
      {
        heading: "Windows",
        platform: "windows",
        steps: [
          "Go to Send/Receive tab and click 'Update Folder' to force a manual sync.",
          "Check File > Account Settings for a storage warning on your mailbox.",
        ],
      },
      {
        heading: "Mac",
        platform: "mac",
        steps: [
          "Go to Outlook > Preferences > Accounts and confirm the account shows 'Connected', not an error.",
          "Try View > Reload to force the app to re-fetch messages.",
        ],
      },
      {
        heading: "Browser (Outlook.com / Office 365)",
        platform: "browser",
        steps: [
          "Log in at outlook.com directly to see if the missing emails appear there — this confirms whether it's a delivery issue or a local app sync issue.",
          "Check Settings > Mail > Rules for anything auto-filing incoming messages.",
        ],
      },
    ],
    companySideNote:
      "If outlook.com itself doesn't show the missing emails either, the delay may be on Microsoft's delivery side rather than your device — check Microsoft 365's status page before troubleshooting further locally.",
    officialLinks: [{ label: "Microsoft 365 Service Status", url: "https://status.office365.com" }],
    faq: [
      {
        question: "Could a sender's email have just gone to spam on their side?",
        answer:
          "It's possible if a spam filter elsewhere in the delivery chain blocked it, but check your own Junk folder and rules first since that's the most common cause.",
      },
      {
        question: "Does a full mailbox delete old mail automatically?",
        answer:
          "No — a full mailbox typically blocks new incoming mail rather than deleting anything, until you free up space.",
      },
    ],
    relatedArticleIds: ["whatsapp-verification-code-not-received"],
    sources: [{ label: "Microsoft Outlook Support", url: "https://support.microsoft.com/outlook" }],
    lastUpdated: "2026-09-25",
    author: "FixHive Editorial Team",
    editor: "FixHive Editorial Team",
    status: "published",
  },
  {
    id: "paypal-payment-failed",
    slug: "payment-failed",
    title: "PayPal Payment Failed: Common Causes and Fixes",
    metaDescription:
      "PayPal declined your payment or checkout got stuck? Here's how to narrow down whether it's your card, your bank, or PayPal itself.",
    quickAnswer:
      "Most PayPal failures come from the funding source (card or bank) declining the charge, an unconfirmed card, or a temporary hold on the account. Check your bank app for a decline reason first, then confirm your PayPal funding details are current.",
    service: "PayPal",
    serviceSlug: "paypal",
    category: "payment-problems",
    platforms: ["android", "iphone", "browser"],
    problemSummary:
      "A failed PayPal payment can originate at the bank/card level, within PayPal's own risk checks, or at the merchant's checkout. Identifying which one applies avoids retrying the same declined method repeatedly.",
    possibleCauses: [
      "The linked card or bank account declined the specific transaction",
      "An unconfirmed or expired card linked to the PayPal account",
      "PayPal's fraud checks flagged the transaction for review",
      "Insufficient balance in the PayPal balance or linked bank account",
      "An outdated PayPal app version",
      "A temporary issue on PayPal's or the bank's processing side",
    ],
    solutions: [
      {
        heading: "Check the Funding Source First",
        steps: [
          "Open your bank or card app and look for a specific decline reason or fraud alert.",
          "Confirm the linked card hasn't expired and has an available balance or credit.",
        ],
      },
      {
        heading: "Check PayPal Settings",
        steps: [
          "Go to Wallet in the PayPal app and confirm the card shows as fully confirmed, not pending.",
          "Try switching the funding source (e.g. from card to bank, or vice versa) for the same payment.",
        ],
      },
      {
        heading: "Android / iPhone App",
        platform: "android",
        steps: [
          "Update the PayPal app from the Play Store or App Store, then restart your phone.",
          "Log out and back in if the app shows a stuck loading state during checkout.",
        ],
      },
      {
        heading: "Browser Checkout",
        platform: "browser",
        steps: [
          "Try the payment in a private/incognito window to rule out browser extensions interfering.",
          "Make sure you're logged into the correct PayPal account if you have more than one.",
        ],
      },
    ],
    companySideNote:
      "If PayPal shows a message about reviewing the transaction for your protection, that hold comes from PayPal's own risk system and usually resolves within a set review window rather than through repeated retries.",
    officialLinks: [{ label: "PayPal Help Center", url: "https://www.paypal.com/us/smarthelp/home" }],
    faq: [
      {
        question: "Why does PayPal say my card is declined when my bank shows funds available?",
        answer:
          "PayPal and your bank run separate checks. A bank can approve availability of funds while PayPal's own fraud system still declines the transaction, or vice versa.",
      },
      {
        question: "Will I be charged if PayPal shows the payment as failed?",
        answer:
          "A failed transaction shouldn't result in a charge, but a temporary authorization hold can sometimes appear and clear within a few days. Contact your bank if it doesn't.",
      },
    ],
    relatedArticleIds: ["google-pay-payment-failed"],
    sources: [{ label: "PayPal Help Center", url: "https://www.paypal.com/us/smarthelp/home" }],
    lastUpdated: "2026-09-25",
    author: "FixHive Editorial Team",
    editor: "FixHive Editorial Team",
    status: "published",
  },
  {
    id: "zoom-app-crashing",
    slug: "app-crashing-or-freezing",
    title: "Zoom App Crashing or Freezing: How to Fix It",
    metaDescription:
      "Zoom keeps crashing or freezing mid-call? Here's what to check before your next meeting.",
    quickAnswer:
      "Update Zoom to the latest version first — most crash reports trace back to an outdated build. If it still happens, close background apps, check available storage, and reinstall Zoom if the problem persists.",
    service: "Zoom",
    serviceSlug: "zoom",
    category: "app-crashing",
    platforms: ["android", "iphone", "windows", "mac"],
    problemSummary:
      "Zoom crashing or freezing is usually tied to an outdated app version, low device resources during a call, or a corrupted local cache. It's rarely a problem with your account.",
    possibleCauses: [
      "An outdated Zoom app version with a known stability bug",
      "Low device memory or storage during a call, especially with virtual backgrounds",
      "Conflicting camera/microphone access from another app",
      "A corrupted local Zoom cache or settings file",
      "Outdated graphics drivers on Windows",
      "A large meeting with many participants straining an older device",
    ],
    solutions: [
      {
        heading: "Quick Fixes",
        steps: [
          "Update Zoom to the latest version from its official site or your app store.",
          "Close other apps using the camera or microphone before joining.",
          "Turn off virtual background or video filters if the crash happens mid-call.",
        ],
      },
      {
        heading: "Windows",
        platform: "windows",
        steps: [
          "Update graphics drivers via Device Manager or the manufacturer's tool.",
          "Uninstall Zoom, then delete the leftover folder at %appdata%\\Zoom before reinstalling.",
        ],
      },
      {
        heading: "Mac",
        platform: "mac",
        steps: [
          "Go to System Settings > Privacy & Security and confirm Zoom has Camera and Microphone permission.",
          "Reinstall Zoom from zoom.us if crashes continue after updating.",
        ],
      },
      {
        heading: "Android",
        platform: "android",
        steps: [
          "Go to Settings > Apps > Zoom > Storage and clear cache.",
          "Free up device storage if it's nearly full — low storage is a common freeze cause during video calls.",
        ],
      },
      {
        heading: "iPhone",
        platform: "iphone",
        steps: [
          "Offload and reinstall the app via Settings > General > iPhone Storage > Zoom.",
          "Restart the phone before a long or important meeting if it's been running for days.",
        ],
      },
    ],
    officialLinks: [{ label: "Zoom Support", url: "https://support.zoom.com" }],
    faq: [
      {
        question: "Does joining from a browser instead of the app help?",
        answer:
          "It can, since the browser version uses fewer local resources — useful as a fallback if the desktop or mobile app keeps crashing right before a meeting.",
      },
      {
        question: "Can too many background apps really cause a Zoom crash?",
        answer:
          "Yes, especially on devices with limited RAM — video calls are resource-intensive, and competing apps can push Zoom to crash or freeze.",
      },
    ],
    relatedArticleIds: ["instagram-login-not-working"],
    sources: [{ label: "Zoom Support", url: "https://support.zoom.com" }],
    lastUpdated: "2026-09-26",
    author: "FixHive Editorial Team",
    editor: "FixHive Editorial Team",
    status: "published",
  },
  {
    id: "netflix-error-code-tvq-pb-101",
    slug: "error-tvq-pb-101",
    title: "Netflix Error Code tvq-pb-101: What It Means and How to Fix It",
    metaDescription:
      "Netflix showing error tvq-pb-101? Here's what the code means and the fixes to try, in order.",
    quickAnswer:
      "This error usually points to a playback issue tied to your app cache or a temporary connection hiccup rather than your account. Restarting the app and clearing its cache resolves it in most cases.",
    service: "Netflix",
    serviceSlug: "netflix",
    category: "error-codes",
    platforms: ["android", "iphone", "browser"],
    problemSummary:
      "Netflix's tvq-pb-101 error appears during playback and generally signals that the app couldn't load video data correctly — often a local cache or connection issue rather than anything wrong with your subscription.",
    possibleCauses: [
      "A corrupted local Netflix app cache",
      "An unstable internet connection during playback",
      "An outdated version of the Netflix app",
      "Too many devices streaming on the same account or network at once",
      "A temporary issue with Netflix's content delivery servers",
    ],
    solutions: [
      {
        heading: "Try These First",
        steps: [
          "Fully close the Netflix app (not just minimize) and reopen it.",
          "Restart your router if the connection feels unstable.",
          "Try a different title to see if the error is specific to one piece of content.",
        ],
      },
      {
        heading: "Android",
        platform: "android",
        steps: [
          "Go to Settings > Apps > Netflix > Storage and tap 'Clear Cache' (not 'Clear Data', which would sign you out).",
          "Update the app from the Play Store if an update is available.",
        ],
      },
      {
        heading: "iPhone",
        platform: "iphone",
        steps: [
          "Offload the app via Settings > General > iPhone Storage > Netflix, then reinstall.",
        ],
      },
      {
        heading: "Browser",
        platform: "browser",
        steps: [
          "Clear your browser's cache and cookies for netflix.com, or try a private window.",
          "Try a different browser to see if the error is browser-specific.",
        ],
      },
    ],
    companySideNote:
      "If the error appears across every title and every device on your account, it may be a temporary issue on Netflix's side — check Netflix's official help page for any reported outage before troubleshooting further.",
    officialLinks: [{ label: "Netflix Help Center", url: "https://help.netflix.com" }],
    faq: [
      {
        question: "Does this error mean my payment failed?",
        answer:
          "No — tvq-pb-101 is a playback error, not a billing error. A billing issue shows a distinctly different message about your account or payment method.",
      },
      {
        question: "Will reinstalling Netflix delete my downloaded shows?",
        answer:
          "Yes, offline downloads are stored locally and will be removed on reinstall. They can be re-downloaded afterward if you still have an active plan that supports downloads.",
      },
    ],
    relatedArticleIds: ["zoom-app-crashing"],
    sources: [{ label: "Netflix Help Center", url: "https://help.netflix.com" }],
    lastUpdated: "2026-09-26",
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
