// All registration CTAs across the site pull from here.

export const lumaLinks = {
  openHouse: "https://luma.com/2myqi6dc",
  week1: "https://luma.com/255qgebw",
  week2: "https://luma.com/4we72djf",
  week3: "https://luma.com/33yqo6do",
  week4: "https://luma.com/o3gzlmuz",
} as const;

// Default CTA link used by buttons that say "Register" generically
export const defaultRegisterLink = lumaLinks.week1;
