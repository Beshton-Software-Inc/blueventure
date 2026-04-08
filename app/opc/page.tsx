import type { Metadata } from "next";
import Section from "@/components/Section";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "One Person Company | Blue Venture Hacks",
  description:
    "Learn how to build and launch a one-person company powered by AI tools. Turn your ideas into reality with entrepreneurial support from Blue Venture Hacks.",
};

const ventureIdeas = [
  {
    title: "AI Tutoring Service",
    description: "Personalized learning assistance powered by AI for specific subjects or skills.",
    icon: "📚",
  },
  {
    title: "Niche Software Tool",
    description: "Specialized applications solving specific problems for targeted user groups.",
    icon: "🛠️",
  },
  {
    title: "Content or Research Service",
    description: "AI-assisted content creation, research, or analysis for businesses or individuals.",
    icon: "📝",
  },
  {
    title: "Automation Consultancy",
    description: "Help small businesses automate workflows and increase efficiency with AI.",
    icon: "⚙️",
  },
  {
    title: "Productivity App",
    description: "Tools that help people work smarter using AI-powered features.",
    icon: "⚡",
  },
  {
    title: "Education Platform",
    description: "Online learning experiences enhanced with AI personalization.",
    icon: "🎓",
  },
];

const supportAreas = [
  {
    title: "Idea Validation",
    description: "Test your concept with mentors, potential users, and market research tools.",
    icon: "✓",
  },
  {
    title: "Technical Guidance",
    description: "Learn which AI tools and platforms best fit your business model.",
    icon: "💻",
  },
  {
    title: "Business Fundamentals",
    description: "Understand pricing, customer acquisition, and sustainable growth.",
    icon: "📊",
  },
  {
    title: "Mentor Network",
    description: "Connect with entrepreneurs, investors, and domain experts.",
    icon: "🤝",
  },
  {
    title: "Community Access",
    description: "Join a cohort of fellow student founders building together.",
    icon: "👥",
  },
  {
    title: "Resources & Tools",
    description: "Access credits, software, and resources to accelerate your launch.",
    icon: "🎁",
  },
];

export default function OPC() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-primary-700 via-electric-600 to-teal-600">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold mb-6">
              Entrepreneurship • AI • Innovation
            </div>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-6 leading-tight">
              Build Your One-Person Company With AI
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 leading-relaxed mb-10">
              Learn to leverage AI tools to create a highly efficient business
              where you handle everything from product to operations—solo.
            </p>
            <a
              href="#support"
              className="inline-block bg-white text-primary-700 px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* What is an OPC */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-6">
              What Is a{" "}
              <span className="text-gradient">One-Person Company?</span>
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
              A small, highly leveraged business where one founder uses AI tools
              to handle tasks that used to require entire teams.
            </p>

            <div className="bg-gradient-to-br from-primary-50 to-electric-50 p-10 rounded-3xl mb-12">
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  A One-Person Company (OPC) is a new kind of entrepreneurship
                  made possible by AI. Instead of hiring a team to handle
                  research, content, coding, design, operations, and customer
                  support, you leverage AI tools to do much of that work
                  yourself.
                </p>
                <p>
                  This doesn't mean you work alone forever—but it means you can
                  validate an idea, launch a product, and serve customers as a
                  solo founder. You stay lean, move fast, and prove your concept
                  before scaling.
                </p>
                <p className="font-semibold text-primary-700">
                  With the right tools and support, students can launch real
                  businesses while still in school.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="text-5xl mb-3">⚡</div>
                <h3 className="font-display font-bold text-lg mb-2 text-primary-700">
                  High Leverage
                </h3>
                <p className="text-gray-600">
                  Do more with less by using AI for repetitive and complex tasks
                </p>
              </div>

              <div className="text-center p-6">
                <div className="text-5xl mb-3">🎯</div>
                <h3 className="font-display font-bold text-lg mb-2 text-primary-700">
                  Low Risk
                </h3>
                <p className="text-gray-600">
                  Start with minimal investment and validate before you scale
                </p>
              </div>

              <div className="text-center p-6">
                <div className="text-5xl mb-3">🚀</div>
                <h3 className="font-display font-bold text-lg mb-2 text-primary-700">
                  Fast Execution
                </h3>
                <p className="text-gray-600">
                  Move quickly without coordination overhead or bureaucracy
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Now */}
      <Section gradient className="bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-16">
            Why <span className="text-gradient">Now</span>?
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  AI has fundamentally changed what's possible for solo
                  entrepreneurs. Tasks that used to require specialists—writing
                  code, designing interfaces, analyzing data, creating
                  content—can now be done with AI assistance.
                </p>
                <p>
                  This isn't about replacing human creativity or expertise. It's
                  about amplifying what one motivated person can accomplish. You
                  still bring the vision, strategy, and judgment—AI handles the
                  execution.
                </p>
                <p>
                  Students who learn to build this way have a massive
                  advantage: they can test ideas, build products, and create
                  income streams without waiting for permission, funding, or a
                  traditional job.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="font-display font-bold text-2xl mb-6 text-primary-700">
                AI Enables You To:
              </h3>
              <ul className="space-y-4">
                {[
                  "Write and deploy code faster",
                  "Create professional designs without designers",
                  "Generate and optimize content at scale",
                  "Automate customer support and operations",
                  "Conduct research and analysis efficiently",
                  "Build MVPs in days, not months",
                ].map((item) => (
                  <li key={item} className="flex items-start text-gray-700">
                    <span className="text-primary-600 font-bold mr-3 text-xl">
                      →
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Example Venture Ideas */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-6">
            Example <span className="text-gradient">Venture Ideas</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Students in our programs and hackathons have explored ventures like:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ventureIdeas.map((idea) => (
              <div
                key={idea.title}
                className="bg-gradient-to-br from-primary-600 to-electric-500 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
              >
                <div className="text-5xl mb-4">{idea.icon}</div>
                <h3 className="font-display font-bold text-xl mb-3">
                  {idea.title}
                </h3>
                <p className="text-primary-100 leading-relaxed">
                  {idea.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg">
              These are just examples. The best OPC is one that matches{" "}
              <span className="font-semibold text-primary-700">
                your interests, skills, and market opportunity
              </span>
              .
            </p>
          </div>
        </div>
      </Section>

      {/* How We Support Founders */}
      <Section id="support" gradient className="bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-6">
            How Blue Venture Hacks{" "}
            <span className="text-gradient">Supports Founders</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We provide the guidance, community, and resources you need to go
            from idea to launch.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportAreas.map((area) => (
              <div
                key={area.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-electric-500 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                    {area.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl text-primary-700">
                    {area.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-16">
            Your <span className="text-gradient">Journey</span>
          </h2>

          <div className="space-y-12">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                1
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl mb-2 text-primary-700">
                  Explore & Ideate
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Identify problems worth solving. Brainstorm solutions.
                  Research your market and validate demand.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-electric-500 to-electric-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                2
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl mb-2 text-primary-700">
                  Build & Test
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Create an MVP using AI tools. Test with real users. Iterate
                  based on feedback.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                3
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl mb-2 text-primary-700">
                  Launch & Grow
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Go to market. Acquire your first customers. Refine your
                  product and scale sustainably.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-600 to-teal-500 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                4
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl mb-2 text-primary-700">
                  Scale or Pivot
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Decide whether to grow the business, bring on a team, seek
                  funding, or pivot to a new opportunity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Inspiration */}
      <Section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            You Don't Need Permission to Start
          </h2>
          <p className="text-xl text-primary-100 leading-relaxed mb-8">
            You don't need venture capital. You don't need a co-founder. You
            don't need years of experience.
          </p>
          <p className="text-2xl font-semibold text-white leading-relaxed">
            You just need an idea, the willingness to learn, and the courage to
            build.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Ready to Launch Your One-Person Company?"
        description="Join our incubation program and get the support you need to turn your idea into reality."
        primaryButton={{ text: "Apply Now", href: "/get-involved" }}
        secondaryButton={{ text: "Join a Hackathon", href: "/hackathons" }}
      />
    </>
  );
}
