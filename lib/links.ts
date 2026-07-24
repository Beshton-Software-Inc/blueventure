// All registration CTAs across the site pull from here.

export const lumaLinks = {
  openHouse: "https://luma.com/2myqi6dc",
  week1: "https://luma.com/255qgebw",
  week2: "https://luma.com/4we72djf",
  week3: "https://luma.com/33yqo6do",
  week4: "https://luma.com/o3gzlmuz",
  // Session #3 — sponsored by the Tsinghua Alumni Association, registered via Luma
  session3: "https://luma.com/44dogxpv",
} as const;

// Default CTA link used by buttons that say "Register" generically
export const defaultRegisterLink = lumaLinks.week1;
