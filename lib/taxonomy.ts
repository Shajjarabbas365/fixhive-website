import { CategoryDef, PlatformDef } from "./types";

export const categories: CategoryDef[] = [
  {
    slug: "login-problems",
    name: "Login Problems",
    description:
      "Help signing in, staying signed in, and recovering access when a login won't go through.",
  },
  {
    slug: "verification-problems",
    name: "Verification Problems",
    description:
      "Fixes for missing SMS codes, email verification links, and OTP delivery issues.",
  },
  {
    slug: "payment-problems",
    name: "Payment Problems",
    description:
      "What to check when a payment, transfer, or checkout fails or gets stuck.",
  },
  {
    slug: "error-codes",
    name: "Error Codes",
    description: "Plain-English explanations of common app and website error codes.",
  },
  {
    slug: "app-crashing",
    name: "App Crashing & Freezing",
    description: "Steps for apps that crash, freeze, or won't open at all.",
  },
  {
    slug: "notifications",
    name: "Notification Problems",
    description: "Fixes for notifications that arrive late, not at all, or unexpectedly stop.",
  },
  {
    slug: "general",
    name: "General Troubleshooting",
    description: "Broader guides that don't fit a single category above.",
  },
];

export const platforms: PlatformDef[] = [
  { slug: "android", name: "Android", description: "Troubleshooting for Android phones and tablets." },
  { slug: "iphone", name: "iPhone", description: "Troubleshooting for iPhone and iPadOS." },
  { slug: "windows", name: "Windows", description: "Troubleshooting for Windows 10 and 11." },
  { slug: "mac", name: "Mac", description: "Troubleshooting for macOS." },
  { slug: "browser", name: "Browser", description: "Troubleshooting for Chrome, Safari, Firefox, and Edge." },
  { slug: "general", name: "General", description: "Applies across most devices." },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getPlatform(slug: string) {
  return platforms.find((p) => p.slug === slug);
}
