import type { Metadata } from "next";
import Section from "@/components/Section";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Hackathons | Blue Venture Hacks",
  description:
    "Join our hackathons to build AI-powered projects, test startup ideas, and compete with peers in collaborative innovation challenges.",
};

const benefits = [
  {
    title: "Hands-On Building",
    description:
      "Transform ideas into working prototypes in an intensive, focused environment.",
    icon: "🔨",
  },
  {
    title: "Peer Learning",
    description:
      "Learn from teammates, competitors, and mentors as you collaborate and compete.",
    icon: "🤝",
  },
  {
    title: "Real Feedback",
    description:
      "Present your work to judges and mentors who provide actionable insights.",
    icon: "💬",
  },
  {
    title: "Portfolio Building",
    description:
      "Walk away with projects you can showcase to employers or investors.",
    icon: "📁",
  },
  {
    title: "Network Growth",
    description:
      "Connect with fellow builders, mentors, sponsors, and potential collaborators.",
    icon: "🌐",
  },
  {
    title: "Prize Opportunities",
    description:
      "Win prizes, recognition, and sometimes seed funding or incubation support.",
    icon: "🏆",
  },
];

const buildExamples = [
  "AI-powered tutoring platforms",
  "Productivity and automation tools",
  "Research assistants and knowledge tools",
  "Creative content generation apps",
  "Social impact and accessibility solutions",
  "Developer tools and coding assistants",
];

export default function Hackathons() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-primary-700 via-electric-600 to-teal-600">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center text-white">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Build • Compete • Launch
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl mb-6">
            Hackathons That Matter
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 leading-relaxed max-w-3xl mx-auto mb-10">
            Test your ideas, build AI-powered solutions, and learn startup
            thinking in collaborative innovation challenges.
          </p>
          <a
            href="#apply"
            className="inline-block bg-white text-primary-700 px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Join the Next Hackathon
          </a>
        </div>
      </section>

      {/* Why Hackathons Matter */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-6">
              Why Hackathons <span className="text-gradient">Matter</span>
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
              Hackathons give students a practical environment to test ideas,
              build prototypes, learn teamwork, and explore startup thinking.
            </p>

            <div className="bg-gradient-to-br from-primary-50 to-electric-50 p-10 rounded-3xl">
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  In a hackathon, you don't just learn about AI—you build with
                  it. You work under real constraints, make fast decisions, and
                  ship something tangible.
                </p>
                <p>
                  Whether you're prototyping a business idea, exploring a
                  technical challenge, or just experimenting with new tools,
                  hackathons compress months of learning into days.
                </p>
                <p className="font-semibold text-primary-700">
                  It's where theory meets reality, and ideas become action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* One Person Company Challenge */}
      <Section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-7xl mb-6">🚀</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              One Person Company Challenge
            </h2>
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              Our signature hackathon track where participants build an
              AI-powered business concept, prototype, or workflow as an
              individual founder.
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <p className="text-lg text-primary-100 leading-relaxed">
                The OPC Challenge is designed for students who want to think
                like entrepreneurs. Instead of just building a feature or demo,
                you build a complete concept—something that could become a real
                venture. AI makes this possible by allowing one person to handle
                tasks that used to require entire teams.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section gradient className="bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-16">
            Hackathon <span className="text-gradient">Benefits</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="font-display font-bold text-xl mb-3 text-primary-700">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* What Participants Build */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-6">
            What Participants <span className="text-gradient">Build</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our hackathons are open-ended, but participants often create:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildExamples.map((example, index) => (
              <div
                key={example}
                className="bg-gradient-to-br from-primary-600 to-electric-500 text-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start">
                  <span className="text-2xl mr-3">→</span>
                  <span className="font-semibold text-lg">{example}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Event Format */}
      <Section className="bg-primary-50" pattern>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-16">
            Event <span className="text-gradient">Format</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full text-2xl font-bold mb-4 shadow-lg">
                1
              </div>
              <h3 className="font-display font-bold text-xl mb-2 text-primary-700">
                Kickoff
              </h3>
              <p className="text-gray-600">
                Team formation, idea pitching, and challenge introduction
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-electric-500 to-electric-600 text-white rounded-full text-2xl font-bold mb-4 shadow-lg">
                2
              </div>
              <h3 className="font-display font-bold text-xl mb-2 text-primary-700">
                Building
              </h3>
              <p className="text-gray-600">
                Intensive development with mentor check-ins and workshops
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-full text-2xl font-bold mb-4 shadow-lg">
                3
              </div>
              <h3 className="font-display font-bold text-xl mb-2 text-primary-700">
                Demo Day
              </h3>
              <p className="text-gray-600">
                Present your work to judges, mentors, and the community
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-600 to-teal-500 text-white rounded-full text-2xl font-bold mb-4 shadow-lg">
                4
              </div>
              <h3 className="font-display font-bold text-xl mb-2 text-primary-700">
                Follow-Up
              </h3>
              <p className="text-gray-600">
                Feedback, prizes, and incubation opportunities for top projects
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Who Can Join */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Who Can <span className="text-gradient">Join</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Our hackathons are open to students and young professionals at all
            skill levels. Whether you're a complete beginner or an experienced
            developer, there's a place for you.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-primary-50 p-6 rounded-xl">
              <h4 className="font-display font-bold text-lg mb-2 text-primary-700">
                Beginners Welcome
              </h4>
              <p className="text-gray-600">
                Never coded before? No problem. We provide resources, mentors,
                and beginner-friendly tracks.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-xl">
              <h4 className="font-display font-bold text-lg mb-2 text-primary-700">
                Solo or Team
              </h4>
              <p className="text-gray-600">
                Participate alone or form teams. Both approaches work—what
                matters is shipping something.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-xl">
              <h4 className="font-display font-bold text-lg mb-2 text-primary-700">
                All Backgrounds
              </h4>
              <p className="text-gray-600">
                CS majors, designers, business students, and curious learners
                all bring value.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Apply Section */}
      <Section id="apply" className="bg-gradient-to-br from-primary-700 via-electric-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Join Our Next Hackathon
          </h2>
          <p className="text-xl text-primary-100 mb-10 leading-relaxed">
            Hackathons happen throughout the year. Sign up to get notified about
            upcoming events and be the first to register.
          </p>
          <a
            href="/get-involved"
            className="inline-block bg-white text-primary-700 px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Express Interest
          </a>
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Ready to Build Something Amazing?"
        primaryButton={{ text: "Get Involved", href: "/get-involved" }}
        secondaryButton={{ text: "Explore OPC Track", href: "/opc" }}
        gradient={false}
      />
    </>
  );
}
