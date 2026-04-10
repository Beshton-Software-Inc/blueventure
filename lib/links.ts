// ============================================================
// LUMA EVENT LINKS — Update these once events are created
// All registration CTAs across the site pull from here.
// ============================================================

const PLACEHOLDER = "https://forms.gle/R1qQQYsC9VQMGrey6";

export const lumaLinks = {
  openHouse: PLACEHOLDER,
  fullProgram: PLACEHOLDER,
  week1: PLACEHOLDER,
  week2: PLACEHOLDER,
  week3: PLACEHOLDER,
  week4: PLACEHOLDER,
} as const;

// Default CTA link used by buttons that say "Register" generically
export const defaultRegisterLink = lumaLinks.fullProgram;
