export type Platform =
  | "android"
  | "iphone"
  | "windows"
  | "mac"
  | "browser"
  | "general";

export type ProblemType =
  | "login-problems"
  | "verification-problems"
  | "payment-problems"
  | "error-codes"
  | "app-crashing"
  | "notifications"
  | "general";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Solution {
  heading: string;
  platform?: Platform;
  steps: string[];
}

export interface Source {
  label: string;
  url: string;
}

export interface Article {
  id: string;
  slug: string; // full path segment after /apps/{app}/
  title: string;
  metaDescription: string;
  quickAnswer: string;
  service: string; // e.g. "WhatsApp"
  serviceSlug: string; // e.g. "whatsapp"
  category: ProblemType;
  platforms: Platform[];
  problemSummary: string;
  possibleCauses: string[];
  solutions: Solution[];
  companySideNote?: string;
  officialLinks?: Source[];
  faq: FaqItem[];
  relatedArticleIds: string[];
  sources: Source[];
  lastUpdated: string; // ISO date
  author: string;
  editor: string;
  status: "published" | "draft";
}

export interface CategoryDef {
  slug: ProblemType;
  name: string;
  description: string;
}

export interface PlatformDef {
  slug: Platform;
  name: string;
  description: string;
}
