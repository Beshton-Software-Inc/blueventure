"use client";

import { useState } from "react";

const navLinks = [
  { name: "Program", href: "#program" },
  { name: "Schedule", href: "#schedule" },
  { name: "Register", href: "#register" },
];

export default function NavV2() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E2E8F0]">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="font-display font-semibold text-[#0F2B5B] text-lg">
            Blue Venture Hacks
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#475569] text-[15px] font-medium hover:text-[#0F2B5B] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#register"
              className="bg-[#0F2B5B] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#1a3a6e] transition-colors"
            >
              Register
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden p-2 text-[#475569] hover:text-[#0F2B5B]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#E2E8F0]">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-[#475569] text-[15px] font-medium hover:text-[#0F2B5B] rounded-md hover:bg-[#F8FAFC] transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#register"
              className="block text-center bg-[#0F2B5B] text-white px-4 py-2.5 rounded-md text-sm font-medium mt-2"
              onClick={() => setOpen(false)}
            >
              Register
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
