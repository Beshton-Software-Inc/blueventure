import type { Metadata } from "next";
import Section from "@/components/Section";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Us | Blue Venture Hacks",
  description:
    "Learn about Blue Venture Hacks' mission to empower young people in the age of AI through practical education, community, and entrepreneurship.",
};

const values = [
  {
    title: "Access",
    description:
      "AI education should be accessible to all students, regardless of background or resources.",
    icon: "🌍",
  },
  {
    title: "Practical Learning",
    description:
      "We focus on hands-on, real-world skills that students can apply immediately.",
    icon: "🛠️",
  },
  {
    title: "Innovation",
    description:
      "We encourage creative thinking and new approaches to solving problems with AI.",
    icon: "💡",
  },
  {
    title: "Initiative",
    description:
      "We empower students to take action, build projects, and create their own opportunities.",
    icon: "🚀",
  },
  {
    title: "Community",
    description:
      "Learning happens best in supportive, collaborative environments with peers and mentors.",
    icon: "🤝",
  },
  {
    title: "Responsibility",
    description:
      "We teach ethical AI use and encourage responsible innovation that benefits society.",
    icon: "⚖️",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-electric-50 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
            About <span className="text-gradient">Blue Venture Hacks</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We believe AI should empower people, not leave them behind.
          </p>
        </div>
      </section>

      {/* Mission */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
                Our <span className="text-gradient">Mission</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Blue Venture Hacks is a nonprofit organization dedicated to
                  helping students and young professionals succeed in the age of
                  AI.
                </p>
                <p>
                  We provide practical, hands-on education that connects
                  directly to real opportunities. Through workshops, summer
                  programs, hackathons, and incubation support, we help young
                  people develop AI fluency and entrepreneurial thinking.
                </p>
                <p>
                  Our goal is simple: turn AI disruption into opportunity by
                  giving the next generation the skills, confidence, and
                  community they need to thrive.
                </p>
              </div>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-primary-500 via-electric-500 to-teal-500 rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="text-8xl mb-4">🎯</div>
                <p className="text-2xl font-display font-bold">
                  Empowering Through Education
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Vision */}
      <Section gradient className="bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Our <span className="text-gradient">Vision</span>
          </h2>
          <p className="text-2xl text-gray-700 leading-relaxed mb-8">
            A world where every young person has the skills, support, and
            confidence to turn AI from a source of anxiety into a source of
            opportunity.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We envision a future where students don't just adapt to AI—they
            lead with it, building innovative solutions, launching ventures, and
            creating meaningful careers in an AI-powered world.
          </p>
        </div>
      </Section>

      {/* Why We Started */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-16">
            Why We <span className="text-gradient">Started</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-600 leading-relaxed">
            <p>
              AI is transforming the world of work at an unprecedented pace.
              While this creates incredible opportunities, it also creates
              uncertainty—especially for students and young professionals trying
              to build their careers.
            </p>
            <p>
              Traditional education often lags behind these changes. Computer
              science students graduate with theoretical knowledge but limited
              practical AI experience. Many feel underprepared for a job market
              that increasingly values AI fluency.
            </p>
            <p>
              We founded Blue Venture Hacks to fill this gap. We saw a need for
              practical, action-oriented education that helps young people not
              just understand AI, but actually use it to build, create, and
              launch.
            </p>
            <p>
              Most importantly, we wanted to shift the narrative from fear to
              empowerment—to show that with the right skills and support,
              students can thrive in this new era.
            </p>
          </div>
        </div>
      </Section>

      {/* Who We Serve */}
      <Section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-16">
            Who We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="font-display font-bold text-2xl mb-3">Students</h3>
              <p className="text-primary-100 leading-relaxed">
                High school and college students who want to build practical AI
                skills and stand out in a competitive landscape.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="text-5xl mb-4">👨‍💻</div>
              <h3 className="font-display font-bold text-2xl mb-3">
                Young Professionals
              </h3>
              <p className="text-primary-100 leading-relaxed">
                Recent graduates and early-career workers navigating job market
                changes and seeking to future-proof their skills.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="font-display font-bold text-2xl mb-3">
                Aspiring Founders
              </h3>
              <p className="text-primary-100 leading-relaxed">
                Entrepreneurial students who want to launch one-person companies
                or startups powered by AI tools.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Approach */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-6">
            Our <span className="text-gradient">Approach</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            We combine practical education with real-world experience and
            entrepreneurial support.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary-50 p-8 rounded-2xl">
              <h3 className="font-display font-bold text-2xl mb-4 text-primary-700">
                Hands-On Learning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Young people need practical, hands-on training—not just theory.
                Our programs focus on building real skills through projects,
                workshops, and challenges.
              </p>
            </div>

            <div className="bg-primary-50 p-8 rounded-2xl">
              <h3 className="font-display font-bold text-2xl mb-4 text-primary-700">
                Real Opportunities
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Education should connect to real opportunities. We provide
                pathways to internships, projects, and entrepreneurship through
                our network and programs.
              </p>
            </div>

            <div className="bg-primary-50 p-8 rounded-2xl">
              <h3 className="font-display font-bold text-2xl mb-4 text-primary-700">
                Entrepreneurial Mindset
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Students should be encouraged to innovate, build, and launch.
                AI and entrepreneurship together unlock new paths beyond
                traditional careers.
              </p>
            </div>

            <div className="bg-primary-50 p-8 rounded-2xl">
              <h3 className="font-display font-bold text-2xl mb-4 text-primary-700">
                Supportive Community
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Learning happens best in community. We connect students with
                peers, mentors, and supporters who believe in their potential.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section gradient className="bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-16">
            Our <span className="text-gradient">Values</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-display font-bold text-xl mb-3 text-primary-700">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Join Our Mission"
        description="Help us empower the next generation to thrive in the age of AI."
        primaryButton={{ text: "Get Involved", href: "/get-involved" }}
        secondaryButton={{ text: "View Programs", href: "/programs" }}
      />
    </>
  );
}
