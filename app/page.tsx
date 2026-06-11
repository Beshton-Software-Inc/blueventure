import Link from "next/link";
import Section from "@/components/Section";
import CTABanner from "@/components/CTABanner";

const summerHighlights = [
  {
    title: "Week #1",
    subtitle: "Foundations & Setup",
    points: [
      "Introduction to AI tools",
      "Product thinking & ideation",
      "Market research basics",
      "Team formation",
      "Project selection"
    ],
    icon: "🖥️",
  },
  {
    title: "Week #2",
    subtitle: "Build & Iterate",
    points: [
      "Hands-on development with cutting-edge AI",
      "Rapid prototyping",
      "User feedback loops",
      "Technical mentorship",
      "Product refinement"
    ],
    icon: "⚙️",
  },
  {
    title: "Week #3",
    subtitle: "Launch & Present",
    points: [
      "Final product polish",
      "Pitch preparation",
      "Demo day presentation",
      "Real company creation",
      "Portfolio building"
    ],
    icon: "🚀",
  },
];

const summerSessions = [
  { session: "Session #1", dates: "June 15 - July 3" },
  { session: "Session #2", dates: "July 6 - July 24" },
  { session: "Session #3", dates: "July 20 - August 7" },
];

const whyJoin = [
  "Build a real company you own",
  "Master cutting-edge AI tools",
  "Create a standout college application story",
  "Get hands-on mentorship from industry experts",
  "Launch a portfolio-worthy product",
  "Network with ambitious peers"
];

const stats = [
  { value: "500+", label: "Students Served" },
  { value: "50+", label: "Workshops Hosted" },
  { value: "200+", label: "Hackathon Participants" },
  { value: "30+", label: "Startup Ideas Launched" },
];

export default function Home() {
  return (
    <>
      {/* New Hero Section */}
      <section
          className="relative min-h-screen flex items-center overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-image.png')",
          }}
      >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Subtle blue tint to match the site branding */}
      <div className="absolute inset-0 bg-primary-900/25" />

      <div className="relative z-10 mx-auto max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-28">
        <div className="max-w-2xl text-white animate-fade-in">
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
            Summer 2026
            <br />
            AI &amp; Software
            <br />
            Engineering Camp
          </h1>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-white px-5 py-2 text-sm font-bold text-primary-700">
              UPCOMING PROGRAM
            </span>
            <span className="rounded-full bg-white px-5 py-2 text-sm font-bold text-primary-700">
              AI
            </span>
            <span className="rounded-full bg-white px-5 py-2 text-sm font-bold text-primary-700">
              Software Engineering
            </span>
          </div>

          <p className="mt-7 max-w-xl text-lg md:text-xl font-semibold leading-relaxed text-white">
            A hands-on 3-week summer camp where students learn coding, AI tools, and startup
            thinking by building real projects with experienced mentors.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-5">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdlqpxb_muRYlxyV8FBH6Kj_PBOj5wJRLWztdWZ5yDRCAY5pw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary-600 to-electric-500 px-8 py-5 text-xl font-bold text-white border-4 border-electric-200 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Register Now
            </a>

            <Link
              href="/coaches"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-5 text-xl font-bold text-primary-700 border-4 border-primary-600 shadow-lg hover:bg-primary-50 hover:scale-105 transition-all duration-300"
            >
              Meet Our Coaches
            </Link>
          </div>
        </div>
      </div>
    </section>
      
      
      {/* Summer Sessions */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-center mb-12">
            📅 <span className="text-gradient">Summer Sessions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {summerSessions.map((session, index) => (
              <div
                key={session.session}
                className="bg-gradient-to-br from-primary-50 to-electric-50 p-6 rounded-xl border-2 border-primary-200 hover:border-primary-400 hover:shadow-lg transition-all animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl font-bold text-primary-700 mb-2">
                  {session.session}
                </div>
                <div className="text-lg text-gray-700 font-semibold">{session.dates}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-xl text-gray-600 mb-4">💰 Tuition</p>
            <div className="inline-block bg-gradient-to-r from-primary-600 to-electric-500 text-white px-8 py-4 rounded-lg shadow-xl">
              <p className="text-2xl font-bold mb-2">$3000 per 3-week session</p>
              <p className="text-lg">Early bird discount: SAVE $500</p>
            </div>
          </div>
        </div>
      </Section>

      {/* What Students Will Learn */}
      <Section className="bg-gradient-to-br from-primary-50 via-white to-electric-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              💡 The 3-Week <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From idea to launch, you'll build a real company in just 3 weeks
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {summerHighlights.map((week, index) => (
              <div
                key={week.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-primary-100 hover:border-primary-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-5xl mr-4">{week.icon}</div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-primary-700">
                      {week.title}
                    </h3>
                    <p className="text-lg text-gray-600 font-semibold">{week.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {week.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-electric-500 mr-2 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Join */}
      <Section className="bg-white" pattern>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              🔥 Why <span className="text-gradient">Join?</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {whyJoin.map((reason, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary-50 to-electric-50 p-6 rounded-xl border-2 border-primary-200 hover:border-primary-400 hover:shadow-lg transition-all animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start">
                    <span className="text-2xl text-electric-500 mr-3">✓</span>
                    <p className="text-lg text-gray-700 font-semibold">{reason}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center bg-gradient-to-r from-primary-600 to-electric-500 text-white p-8 rounded-2xl shadow-2xl">
              <p className="text-2xl font-bold mb-4">📩 Limited spots available.</p>
              <p className="text-lg">
                Perfect for students who want to get ahead in AI, coding, entrepreneurship, and future careers.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Meet Our Coaches */}
      <Section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-8">
              Learn From Expert Coaches
            </h2>
            <p className="text-2xl text-primary-100 leading-relaxed mb-8">
              Our experienced coaches bring real-world expertise from leading tech companies and startups.
            </p>
            <Link
              href="/coaches"
              className="inline-block bg-white text-primary-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Meet Our Coaching Staff
            </Link>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <CTABanner
        title="Ready to Transform Your Summer?"
        description="Limited spots available. Register now and save $500 with early bird discount!"
        primaryButton={{ text: "Register Now", href: "https://docs.google.com/forms/d/e/1FAIpQLSdlqpxb_muRYlxyV8FBH6Kj_PBOj5wJRLWztdWZ5yDRCAY5pw/viewform" }}
        secondaryButton={{ text: "Learn More", href: "/about" }}
      />
    </>
  );
}
