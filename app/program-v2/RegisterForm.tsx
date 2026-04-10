"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          interest: "student",
          message: "Registered interest via program-v2 landing page",
          type: "Contact Forms",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setName("");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Failed to submit. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white/10 border border-white/20 rounded-md p-6">
        <p className="text-white font-medium text-lg mb-1">
          You&apos;re registered.
        </p>
        <p className="text-white/60 text-sm">
          We&apos;ll be in touch with session details soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="flex flex-col sm:flex-row gap-3 mb-3">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={status === "submitting"}
          className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-white/40 disabled:opacity-50"
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === "submitting"}
          className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-white/40 disabled:opacity-50"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto bg-white text-[#0F2B5B] font-semibold rounded-md px-6 py-3 text-sm hover:bg-[#DBEAFE] transition-colors disabled:opacity-50"
      >
        {status === "submitting" ? "Submitting..." : "Register Interest"}
      </button>
      {status === "error" && (
        <p className="text-red-300 text-sm mt-3">{errorMsg}</p>
      )}
    </form>
  );
}
