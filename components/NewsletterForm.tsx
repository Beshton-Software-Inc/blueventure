"use client";

import { useState } from "react";
import { submitToGoogleSheets } from "@/lib/submitToSheets";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    const result = await submitToGoogleSheets({
      email,
      type: "Newsletter",
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSubmitted(true);
      setEmail("");
      // Reset after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setError(result.message);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto text-center">
        <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-6 rounded-lg">
          <div className="text-4xl mb-2">✓</div>
          <p className="text-lg font-semibold">Thanks for subscribing!</p>
          <p className="text-sm text-primary-100 mt-2">
            We'll keep you updated on programs and events.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50"
          disabled={isSubmitting}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-white text-primary-700 px-8 py-4 rounded-lg font-bold hover:bg-primary-50 transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-200 text-center">{error}</p>
      )}
      <p className="text-sm text-primary-200 mt-4 text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  );
}
