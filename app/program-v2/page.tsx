import type { Metadata } from "next";
import NavV2 from "./NavV2";
import RegisterForm from "./RegisterForm";
import {
  Code,
  Workflow,
  Gamepad2,
  Rocket,
  Calendar,
  MapPin,
  DollarSign,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Spring 2026 AI Workshop Series | Blue Venture Hacks",
  description:
    "Four Saturdays. Real tools. Build applications, automate workflows, and launch your own project. A hands-on AI workshop series by Blue Venture Hacks.",
};

const sessions = [
  {
    week: 1,
    date: "April 18",
    title: "Vibe Coding with Claude",
    icon: Code,
    description:
      "Learn to build applications, websites, and services using AI-assisted coding. Set up Claude Code, work with plans and skills, and deploy a working project by end of day.",
  },
  {
    week: 2,
    date: "April 25",
    title: "AI Workflow Automation",
    icon: Workflow,
    description:
      "Automate tasks and build intelligent workflows using modern AI tools. Hands-on session: build an automated video generation pipeline from scratch.",
  },
  {
    week: 3,
    date: "May 2",
    title: "Gaming & Digital Worlds",
    icon: Gamepad2,
    description:
      "Explore AI in gaming and digital environments. Build a game from scratch, create your own digital avatar, and compete in a class challenge.",
  },
  {
    week: 4,
    date: "May 9",
    title: "Launch Your One-Person Company",
    icon: Rocket,
    description:
      "Learn what an OPC is, how to register one, and how to use AI tools for marketing and operations. Brainstorm and prototype your business idea. End-of-program celebration.",
  },
];

const logistics = [
  {
    icon: Calendar,
    title: "4 Saturdays",
    detail: "April 18, April 25, May 2, May 9",
  },
  {
    icon: MapPin,
    title: "Mountain View + Online",
    detail: "In-person sessions with remote attendance available.",
  },
  {
    icon: DollarSign,
    title: "$3,000",
    detail: "Full program. Includes all materials and project support.",
  },
];

export default function ProgramV2() {
  return (
    <>
      <NavV2 />

      {/* ─── 1. HERO ─── */}
      <section className="pt-32 pb-20 px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-[#2563EB] tracking-wide uppercase mb-4">
            Spring 2026 &middot; Mountain View + Online
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-[#0F2B5B] leading-tight mb-5">
            Build With AI — Hands-On Workshop Series
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto mb-8">
            Four Saturdays. Real tools. Build applications, automate workflows,
            and launch your own project — no coding experience required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#register"
              className="bg-[#0F2B5B] text-white px-6 py-3 rounded-md font-medium hover:bg-[#1a3a6e] transition-colors"
            >
              Register Now
            </a>
            <a
              href="#program"
              className="border border-[#0F2B5B] text-[#0F2B5B] px-6 py-3 rounded-md font-medium hover:bg-[#F8FAFC] transition-colors"
            >
              View Schedule &darr;
            </a>
          </div>
        </div>
      </section>

      {/* ─── 2. WHAT YOU'LL BUILD ─── */}
      <section id="program" className="py-16 md:py-24 px-6 md:px-8 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-[#0F2B5B] mb-12">
            What You&apos;ll Build
          </h2>

          <div className="divide-y divide-[#E2E8F0]">
            {sessions.map((session) => {
              const Icon = session.icon;
              return (
                <div key={session.week} className="py-8 first:pt-0 last:pb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={18} strokeWidth={1.5} className="text-[#2563EB]" />
                    <span className="text-sm font-semibold text-[#2563EB]">
                      Week {session.week} &middot; {session.date}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-xl text-[#0F2B5B] mb-2">
                    {session.title}
                  </h3>
                  <p className="text-[#475569] leading-relaxed max-w-3xl">
                    {session.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 3. HOW IT WORKS ─── */}
      <section id="schedule" className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-[#0F2B5B] mb-10">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {logistics.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white border border-[#E2E8F0] rounded-lg p-6 text-center hover:border-[#2563EB] transition-colors"
                >
                  <Icon
                    size={28}
                    strokeWidth={1.5}
                    className="text-[#2563EB] mx-auto mb-3"
                  />
                  <h3 className="font-display font-semibold text-lg text-[#0F2B5B] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#475569] text-sm">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 4. WHO IT'S FOR ─── */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-[#F8FAFC]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-[#0F2B5B] mb-5">
            Who This Is For
          </h2>
          <p className="text-[#475569] leading-relaxed mb-4">
            This program is designed for anyone curious about AI — whether
            you&apos;re a working professional looking to add AI tools to your
            workflow, a student exploring tech careers, or someone with a
            business idea who wants to build it faster.
          </p>
          <p className="text-[#475569] leading-relaxed">
            No prior coding experience is required. Class size is limited to
            fewer than 10 participants to ensure personalized attention.
          </p>
        </div>
      </section>

      {/* ─── 5. ABOUT BVH ─── */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-[#0F2B5B] mb-5">
            About Blue Venture Hacks
          </h2>
          <p className="text-[#475569] leading-relaxed">
            Blue Venture Hacks is a Bay Area nonprofit that provides hands-on
            technology education through workshops, programs, and events. This
            spring workshop series is our flagship program for 2026.
          </p>
        </div>
      </section>

      {/* ─── 6. REGISTER ─── */}
      <section id="register" className="py-16 md:py-24 px-6 md:px-8 bg-[#0F2B5B]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-white mb-4">
            Ready to Start Building?
          </h2>
          <p className="text-white/70 leading-relaxed mb-10">
            Spots are limited to fewer than 10 participants. Register your
            interest and we&apos;ll send you session details as they&apos;re
            confirmed.
          </p>

          <RegisterForm />

          <p className="text-white/50 text-sm mt-6">
            Or email us directly:{" "}
            <a
              href="mailto:blue9ventures@gmail.com"
              className="text-white/70 underline hover:text-white transition-colors"
            >
              blue9ventures@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* ─── 7. FOOTER ─── */}
      <footer className="bg-[#0F2B5B] border-t border-white/10 py-6 px-6 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-white/50">
          <span>&copy; 2026 Blue Venture Hacks</span>
          <span>Mountain View, CA &middot; blue9ventures@gmail.com</span>
        </div>
      </footer>
    </>
  );
}
