import Link from "next/link";
import Section from "@/components/Section";
import CTABanner from "@/components/CTABanner";

const features = [
  {
    title: "Learn AI Skills",
    description:
      "Master practical AI tools and techniques through hands-on workshops and training programs.",
    icon: "🎓",
  },
  {
    title: "Join Workshops & Summer Programs",
    description:
      "Participate in intensive learning experiences that build real-world capabilities.",
    icon: "🚀",
  },
  {
    title: "Build Through Hackathons",
    description:
      "Test your ideas, prototype solutions, and learn from peers in collaborative competitions.",
    icon: "💡",
  },
  {
    title: "Launch an OPC Idea",
    description:
      "Create a one-person company powered by AI tools and entrepreneurial thinking.",
    icon: "🌟",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-electric-50">
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-electric-400/20 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-400/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full dot-pattern opacity-40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-primary-600 to-electric-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Nonprofit • AI Education • Youth Empowerment
                </span>
              </div>

              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
                Prepare the Next Generation to{" "}
                <span className="text-gradient">Thrive With AI</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Blue Venture Hacks is a nonprofit helping students and young
                professionals build practical AI skills, launch projects, join
                hackathons, and create one-person company opportunities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/ai-workshop-spring-2026"
                  className="inline-block text-center bg-gradient-to-r from-primary-600 to-electric-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Join a Program
                </Link>
                <Link
                  href="/get-involved"
                  className="inline-block text-center border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-600 hover:text-white transition-all duration-300"
                >
                  Partner With Us
                </Link>
              </div>
            </div>

            {/* Right visual element */}
            <div className="relative h-[500px] animate-fade-in animate-delay-400">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-electric-500 to-teal-500 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-primary-600 via-electric-600 to-teal-600 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white p-12">
                  <div className="text-7xl mb-6">🚀</div>
                  <p className="text-2xl font-display font-bold">
                    Turn AI Disruption Into Opportunity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters Now */}
      <Section gradient className="bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-6">
              Why This Matters <span className="text-gradient">Now</span>
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
              AI is changing education and the workforce rapidly. Traditional
              pathways are no longer enough.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="font-display font-bold text-2xl mb-3 text-primary-700">
                  The Challenge
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Many students, graduates, and early-career professionals feel
                  uncertain about how to adapt to AI-driven changes in hiring
                  and work. Computer science students and software engineers
                  face increasing pressure.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="font-display font-bold text-2xl mb-3 text-primary-700">
                  Our Response
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Practical education, community, and entrepreneurship. We help
                  learners develop AI fluency, build real projects, and create
                  new career and entrepreneurship pathways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* How We Help */}
      <Section className="bg-white" pattern>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              How We <span className="text-gradient">Help</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Instead of fearing AI, learn to use it to become more capable,
              more creative, and more entrepreneurial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="relative group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white border-2 border-primary-100 p-8 rounded-2xl hover:border-primary-400 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="font-display font-bold text-xl mb-3 text-primary-700">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/0 to-electric-400/0 group-hover:from-primary-400/5 group-hover:to-electric-400/5 rounded-2xl transition-all duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Mission Section */}
      <Section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-8">
              Our Mission
            </h2>
            <p className="text-2xl text-primary-100 leading-relaxed mb-8">
              Blue Venture Hacks helps young people turn AI disruption into
              opportunity.
            </p>
            <p className="text-xl text-primary-200 leading-relaxed">
              We do this by teaching practical AI skills, running workshops and
              summer programs, organizing hackathons, and helping students
              launch one-person company ideas powered by AI.
            </p>
          </div>
        </div>
      </Section>

      {/* Success Pathway */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-16">
            Your Path to <span className="text-gradient">Success</span>
          </h2>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-electric-400 to-teal-400 transform -translate-y-1/2"></div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full text-3xl font-bold mb-6 shadow-xl">
                  1
                </div>
                <h3 className="font-display font-bold text-2xl mb-4 text-primary-700">
                  Learn
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Join our workshops, seminars, and summer programs to build
                  practical AI skills.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-electric-500 to-electric-600 text-white rounded-full text-3xl font-bold mb-6 shadow-xl">
                  2
                </div>
                <h3 className="font-display font-bold text-2xl mb-4 text-primary-700">
                  Build
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Participate in hackathons and build projects that demonstrate
                  your new capabilities.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-full text-3xl font-bold mb-6 shadow-xl">
                  3
                </div>
                <h3 className="font-display font-bold text-2xl mb-4 text-primary-700">
                  Launch
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Create your own one-person company or apply your skills to
                  exciting career opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <CTABanner
        title="Ready to Build Your Future With AI?"
        description="Learn practical AI skills, build real projects, and take control of your career in the age of AI."
        primaryButton={{ text: "Get Started Today", href: "/ai-workshop-spring-2026#register" }}
        secondaryButton={{ text: "Learn More", href: "/about" }}
      />
    </>
  );
}
