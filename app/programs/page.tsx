import type { Metadata } from "next";
import Section from "@/components/Section";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Programs | Blue Venture Hacks",
  description:
    "Explore our workshops, seminars, summer programs, and AI skills bootcamps designed to help students thrive in the age of AI.",
};

const programs = [
  {
    id: "seminars",
    title: "Seminars",
    tagline: "Introduction to AI Fundamentals",
    description:
      "Short-format sessions that introduce key AI concepts and tools. Perfect for students just starting their AI journey.",
    duration: "1-2 hours",
    format: "Online / In-Person",
    audience: "High school and college students, beginners",
    outcomes: [
      "Understand AI basics and current landscape",
      "Learn about AI career opportunities",
      "Identify next steps for deeper learning",
    ],
    icon: "📚",
  },
  {
    id: "workshops",
    title: "Workshops",
    tagline: "Hands-On AI Skills Training",
    description:
      "Intensive, project-based sessions where participants build real AI applications and learn practical tools.",
    duration: "Half-day to full-day",
    format: "In-Person / Hybrid",
    audience: "Students with basic coding knowledge",
    outcomes: [
      "Build working AI projects",
      "Master prompting and productivity tools",
      "Apply AI to coding and content creation",
    ],
    icon: "🛠️",
  },
  {
    id: "summer",
    title: "Summer Programs",
    tagline: "Immersive Learning Experiences",
    description:
      "Multi-week intensive programs combining AI education, project building, and career preparation.",
    duration: "2-8 weeks",
    format: "In-Person",
    audience: "Committed students seeking depth",
    outcomes: [
      "Complete portfolio-worthy projects",
      "Network with peers and mentors",
      "Prepare for AI-related careers or ventures",
    ],
    icon: "☀️",
  },
  {
    id: "bootcamps",
    title: "AI Skills Bootcamps",
    tagline: "Accelerated Career-Focused Training",
    description:
      "Fast-paced, career-oriented programs teaching AI tools for software development, research, and professional productivity.",
    duration: "1-2 weeks",
    format: "Online / Hybrid",
    audience: "Recent graduates and young professionals",
    outcomes: [
      "Master industry-relevant AI tools",
      "Build job-ready capabilities",
      "Increase productivity and efficiency",
    ],
    icon: "⚡",
  },
  {
    id: "career",
    title: "Career Readiness Sessions",
    tagline: "Navigate the AI-Driven Job Market",
    description:
      "Workshops focused on career strategy, job searching, and thriving in an AI-transformed workplace.",
    duration: "2-4 hours",
    format: "Online / In-Person",
    audience: "Students and early-career professionals",
    outcomes: [
      "Develop AI-era career strategies",
      "Build resilience and adaptability",
      "Understand how to showcase AI skills",
    ],
    icon: "💼",
  },
  {
    id: "incubation",
    title: "Founder / OPC Incubation Support",
    tagline: "Launch Your AI-Powered Venture",
    description:
      "Ongoing support for students building one-person companies or startups, including mentorship, resources, and community.",
    duration: "3-6 months",
    format: "Hybrid",
    audience: "Entrepreneurial students with project ideas",
    outcomes: [
      "Validate and launch business ideas",
      "Access mentor network and resources",
      "Build sustainable AI-powered ventures",
    ],
    icon: "🚀",
  },
];

const themes = [
  "AI Fundamentals for Students",
  "Prompting and Productivity",
  "AI for Coding and Software Development",
  "AI for Research and Content Creation",
  "Career Resilience in an AI Era",
  "Building a One-Person Company with AI Tools",
];

export default function Programs() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-electric-50 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
            Our <span className="text-gradient">Programs</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            From introductory seminars to immersive bootcamps, we offer
            practical AI education for every stage of your journey.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div
                key={program.id}
                id={program.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {program.duration}
                  </div>
                  <h2 className="font-display font-bold text-4xl mb-3 text-primary-700">
                    {program.title}
                  </h2>
                  <p className="text-xl font-semibold text-gray-700 mb-4">
                    {program.tagline}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <span className="text-primary-600 font-semibold mr-2">
                        Format:
                      </span>
                      <span className="text-gray-600">{program.format}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary-600 font-semibold mr-2">
                        For:
                      </span>
                      <span className="text-gray-600">{program.audience}</span>
                    </div>
                  </div>

                  <div className="bg-primary-50 p-6 rounded-xl">
                    <h4 className="font-display font-semibold text-lg mb-3 text-primary-700">
                      Learning Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {program.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex items-start text-gray-600"
                        >
                          <span className="text-primary-600 mr-2">✓</span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual */}
                <div
                  className={`relative h-80 ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-electric-500 to-teal-500 rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform">
                    <div className="text-center text-white p-8">
                      <div className="text-8xl mb-4">{program.icon}</div>
                      <p className="text-2xl font-display font-bold">
                        {program.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Program Themes */}
      <Section gradient className="bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-6">
            Program <span className="text-gradient">Themes</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our curriculum covers a wide range of topics designed to build
            comprehensive AI literacy and practical skills.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((theme, index) => (
              <div
                key={theme}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start">
                  <span className="text-primary-600 font-bold text-xl mr-3">
                    →
                  </span>
                  <span className="text-gray-700 font-medium">{theme}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* How to Join */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            How to <span className="text-gradient">Join</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Programs are offered throughout the year. Some are open enrollment,
            while others require application.
          </p>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Most programs are free or low-cost thanks to our sponsors and
            supporters. We believe financial barriers should never prevent
            motivated students from accessing quality AI education.
          </p>

          <div className="bg-gradient-to-br from-primary-700 to-electric-600 text-white p-10 rounded-3xl shadow-2xl">
            <h3 className="font-display font-bold text-2xl mb-4">
              Interested in a program?
            </h3>
            <p className="text-primary-100 mb-6">
              Express your interest and we'll notify you when enrollment opens.
            </p>
            <a
              href="/get-involved"
              className="inline-block bg-white text-primary-700 px-8 py-4 rounded-lg font-bold hover:bg-primary-50 transition-colors"
            >
              Express Interest
            </a>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Start Your AI Learning Journey"
        primaryButton={{ text: "Get Involved", href: "/get-involved" }}
        secondaryButton={{ text: "View Hackathons", href: "/hackathons" }}
      />
    </>
  );
}
