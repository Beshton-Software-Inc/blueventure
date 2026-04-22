import type { Metadata } from "next";
import Section from "@/components/Section";
import { lumaLinks } from "@/lib/links";

export const metadata: Metadata = {
  title: "Hands-On AI Workshop | Blue Venture Hacks",
  description:
    "A 1-month intensive workshop across 4 weekend sessions. Learn Claude Code, automation with OpenClaw, AI gaming, and how to launch your own One-Person Company.",
};

const sessions = [
  {
    id: "claude-code",
    week: 1,
    date: "April 18",
    title: "Claude Code & Vibe Coding",
    tagline: "Learn to code with AI — build apps, websites, services, and agents",
    icon: "💻",
    color: "from-primary-500 to-primary-600",
    topics: [
      {
        label: "Setup",
        detail: "Install and configure Claude Code for your development environment",
      },
      {
        label: "Core Skills",
        detail: "Master Plan mode, Skills, MCP servers, and multi-agent workflows",
      },
      {
        label: "Hands-On Build",
        detail: "Build your own application from scratch using vibe coding techniques",
      },
      {
        label: "Skills & MCPs",
        detail: "Deep dive into extending Claude Code with custom skills and MCP integrations",
      },
      {
        label: "Ship It",
        detail: "Configure, deploy, and troubleshoot your project for production",
      },
    ],
  },
  {
    id: "automation",
    week: 2,
    date: "April 25",
    title: "OpenClaw & NemoClaw",
    tagline: "Automate tasks and build powerful AI workflows",
    icon: "🤖",
    color: "from-electric-500 to-electric-600",
    topics: [
      {
        label: "OpenClaw Setup",
        detail: "Get started with OpenClaw and understand the automation landscape",
      },
      {
        label: "Workflow Building",
        detail: "Design and build workflows to automate repetitive tasks end-to-end",
      },
      {
        label: "Hands-On Build",
        detail: "Build a video generation pipeline from scratch",
      },
      {
        label: "Agents & Skills",
        detail: "Create intelligent agents and reusable skills for complex automation",
      },
      {
        label: "Introducing Javis",
        detail: "Explore Javis for advanced task orchestration and agent management",
      },
      {
        label: "NemoClaw",
        detail: "Leverage NemoClaw for next-level automation capabilities",
      },
    ],
  },
  {
    id: "gaming",
    week: 3,
    date: "May 2",
    title: "Gaming & Digital Worlds",
    tagline: "Build games, avatars, and digital twins with AI",
    icon: "🎮",
    color: "from-teal-500 to-teal-600",
    topics: [
      {
        label: "Introducing AIWave",
        detail: "Dedicated session on AIWave — the social media platform of the AI world",
      },
      {
        label: "How It Works",
        detail: "Understand the architecture and mechanics behind AI-powered digital worlds",
      },
      {
        label: "Hands-On Build",
        detail: "Build a game from scratch complete with your own avatar and digital twin",
      },
      {
        label: "Competition",
        detail: "Put your skills to the test in a live game-building competition",
      },
    ],
  },
  {
    id: "opc",
    week: 4,
    date: "May 9",
    title: "Launch Your Own OPC",
    tagline: "Use AI to build and run a One-Person Company",
    icon: "🚀",
    color: "from-amber-500 to-amber-600",
    topics: [
      {
        label: "What is OPC?",
        detail: "Understand the One-Person Company model and why AI makes it possible",
      },
      {
        label: "Register & Operate",
        detail: "How to register, operate, and market your OPC from day one",
      },
      {
        label: "Idea Brainstorm",
        detail: "Guided brainstorming session to identify your unique OPC opportunity",
      },
      {
        label: "Hands-On Build",
        detail: "Start building your OPC using the AI tools you've learned throughout the course",
      },
      {
        label: "Celebration",
        detail: "Demo day, presentations, and end-of-class celebration",
      },
    ],
  },
];

const highlights = [
  { label: "Duration", value: "1 Month", detail: "4 weekend day sessions" },
  { label: "Format", value: "Hands-On", detail: "Build real projects each session" },
  { label: "Tuition", value: "$3,000", detail: "All materials included" },
  { label: "Class Size", value: "< 10", detail: "Personalized attention" },
];

export default function ProgramsV2() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-electric-50 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-electric-400/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-400/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-electric-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Hands-On Workshop
            </span>
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
            Build With AI in{" "}
            <span className="text-gradient">One Month</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Four intensive weekend sessions over one month. Go from zero to
            building apps, automating workflows, creating games, and launching
            your own AI-powered company.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#register"
              className="inline-block text-center bg-gradient-to-r from-primary-600 to-electric-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Register Now
            </a>
            <a
              href="#sessions"
              className="inline-block text-center border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-600 hover:text-white transition-all duration-300"
            >
              View Curriculum
            </a>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <Section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="text-center bg-gradient-to-br from-primary-50 to-electric-50 p-6 rounded-2xl animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-sm font-semibold text-primary-500 uppercase tracking-wide mb-1">
                  {item.label}
                </div>
                <div className="text-3xl font-display font-bold text-primary-700 mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-gray-500">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Sessions */}
      <Section className="bg-white" id="sessions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              The <span className="text-gradient">Curriculum</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each weekend is a standalone deep-dive. By the end, you'll have
              built real projects across four disciplines.
            </p>
          </div>

          <div className="space-y-20">
            {sessions.map((session, index) => (
              <div
                key={session.id}
                id={session.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-primary-100 text-primary-700 rounded-full text-sm font-bold">
                      W{session.week}
                    </span>
                    <span className="text-sm font-semibold text-primary-500 uppercase tracking-wide">
                      Weekend {session.week} &middot; {session.date}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-3xl md:text-4xl mb-3 text-primary-700">
                    {session.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8">
                    {session.tagline}
                  </p>

                  <div className="space-y-4">
                    {session.topics.map((topic, i) => (
                      <div
                        key={topic.label}
                        className="flex items-start gap-4 bg-white border border-primary-100 p-4 rounded-xl hover:border-primary-300 hover:shadow-md transition-all"
                      >
                        <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 bg-primary-100 text-primary-700 rounded-lg text-sm font-bold">
                          {i + 1}
                        </span>
                        <div>
                          <div className="font-semibold text-primary-700">
                            {topic.label}
                          </div>
                          <div className="text-sm text-gray-600 mt-0.5">
                            {topic.detail}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div
                  className={`relative h-80 lg:h-full lg:min-h-[360px] ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${session.color} rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform`}
                  >
                    <div className="text-center text-white p-8">
                      <div className="text-8xl mb-4">{session.icon}</div>
                      <p className="text-2xl font-display font-bold mb-2">
                        {session.title}
                      </p>
                      <p className="text-white/80 text-sm">
                        Weekend {session.week} &middot; {session.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* What You'll Walk Away With */}
      <Section gradient className="bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-6">
            What You&apos;ll <span className="text-gradient">Walk Away With</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            This isn't a lecture series. Every session ends with something you built.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "💻",
                title: "A Working App",
                description:
                  "Built with Claude Code using vibe coding techniques — deployed and live.",
              },
              {
                icon: "🤖",
                title: "Automation Pipelines",
                description:
                  "Custom workflows and a video generation pipeline built with OpenClaw.",
              },
              {
                icon: "🎮",
                title: "Your Own Game",
                description:
                  "A game with your personal avatar and digital twin, built from scratch.",
              },
              {
                icon: "🚀",
                title: "An OPC Blueprint",
                description:
                  "A real business plan and prototype for your AI-powered One-Person Company.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-display font-bold text-xl mb-3 text-primary-700">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-12">
            Enroll <span className="text-gradient">Today</span>
          </h2>

          <div className="bg-gradient-to-br from-primary-700 via-primary-600 to-electric-600 text-white p-10 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-electric-400/10 rounded-full filter blur-3xl"></div>
            <div className="relative">
              <div className="text-sm font-semibold uppercase tracking-wider text-primary-200 mb-2">
                Hands-On AI Workshop
              </div>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-6xl md:text-7xl font-display font-bold">
                  $3,000
                </span>
              </div>
              <p className="text-primary-200 mb-8">
                1 month &middot; 4 weekend sessions &middot; all materials included
              </p>

              <ul className="text-left max-w-sm mx-auto space-y-3 mb-10">
                {[
                  "4 full-day hands-on sessions",
                  "Build 4+ real projects",
                  "Fewer than 10 students per class",
                  "All tools and materials provided",
                  "Certificate of completion",
                  "Access to alumni community",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-teal-300 mr-3">✓</span>
                    <span className="text-primary-100">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#register"
                className="inline-block bg-white text-primary-700 px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Reserve Your Spot
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Register */}
      <div id="register" className="-mt-1 pt-1" />
      <Section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Choose Your Path
            </h2>
            <p className="text-primary-200 text-lg">
              Spots are limited — register soon to secure yours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Open House */}
            <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-center">
              <div className="text-sm font-semibold text-teal-300 uppercase tracking-wide mb-2">
                Free
              </div>
              <h3 className="font-display font-bold text-2xl mb-1">Open House</h3>
              <p className="text-primary-200 text-sm mb-6">
                Get a taste of what we cover. Meet the instructors, see the
                tools, ask questions.
              </p>
              <a
                href={lumaLinks.openHouse}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-white text-primary-700 px-6 py-3 rounded-lg font-bold hover:bg-primary-50 transition-colors"
              >
                RSVP &rarr;
              </a>
            </div>

            {/* Individual Sessions */}
            <div className="bg-white/15 border-2 border-white/30 rounded-lg p-6 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-electric-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Register
              </div>
              <div className="text-sm font-semibold text-electric-400 uppercase tracking-wide mb-2">
                $1,000 / session
              </div>
              <h3 className="font-display font-bold text-2xl mb-1">
                Sessions
              </h3>
              <p className="text-primary-200 text-sm mb-4">
                Pick the sessions that interest you most.
              </p>
              <div className="space-y-2">
                <a
                  href={lumaLinks.week1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-white hover:text-electric-400 transition-colors py-1"
                >
                  W1: Vibe Coding &rarr;
                </a>
                <a
                  href={lumaLinks.week2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-white hover:text-electric-400 transition-colors py-1"
                >
                  W2: Automation &rarr;
                </a>
                <a
                  href={lumaLinks.week3}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-white hover:text-electric-400 transition-colors py-1"
                >
                  W3: Gaming &rarr;
                </a>
                <a
                  href={lumaLinks.week4}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-white hover:text-electric-400 transition-colors py-1"
                >
                  W4: Launch OPC &rarr;
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-primary-300 text-sm mt-8">
            Questions? Email us at{" "}
            <a
              href="mailto:blue9ventures@gmail.com"
              className="text-white underline hover:text-primary-100 transition-colors"
            >
              blue9ventures@gmail.com
            </a>
          </p>
        </div>
      </Section>

    </>
  );
}
