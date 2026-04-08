import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Get Involved | Blue Venture Hacks",
  description:
    "Join Blue Venture Hacks as a student, mentor, volunteer, sponsor, or school partner. Help us empower the next generation in the age of AI.",
};

const pathways = [
  {
    id: "students",
    title: "For Students",
    tagline: "Learn, Build, Launch",
    description:
      "Whether you're curious about AI, ready to build projects, or thinking about launching a venture, we have programs for you.",
    benefits: [
      "Access to workshops and summer programs",
      "Participate in hackathons and competitions",
      "Connect with mentors and peers",
      "Build portfolio-worthy projects",
      "Launch your one-person company idea",
    ],
    cta: "Apply Now",
    href: "/contact?interest=student",
    icon: "🎓",
    gradient: "from-primary-500 to-primary-600",
  },
  {
    id: "mentors",
    title: "For Mentors",
    tagline: "Share Your Expertise",
    description:
      "Help students navigate their AI learning journey. Share your experience, provide guidance, and make a lasting impact.",
    benefits: [
      "Guide students through projects and challenges",
      "Attend hackathons and demo days",
      "Provide career and technical advice",
      "Join our mentor community",
      "Give back and shape the future",
    ],
    cta: "Become a Mentor",
    href: "/contact?interest=mentor",
    icon: "🤝",
    gradient: "from-electric-500 to-electric-600",
  },
  {
    id: "volunteers",
    title: "For Volunteers",
    tagline: "Support Our Mission",
    description:
      "Help us run events, create content, organize programs, and support students. Every contribution matters.",
    benefits: [
      "Assist with workshops and hackathons",
      "Help with communications and outreach",
      "Support operations and logistics",
      "Contribute to curriculum development",
      "Join a mission-driven community",
    ],
    cta: "Volunteer With Us",
    href: "/contact?interest=volunteer",
    icon: "💪",
    gradient: "from-teal-500 to-teal-600",
  },
  {
    id: "sponsors",
    title: "For Sponsors",
    tagline: "Invest in the Future",
    description:
      "Support AI education and youth empowerment. Help us provide free or low-cost programs to students who need them.",
    benefits: [
      "Fund scholarships and program costs",
      "Provide tools and resources",
      "Gain visibility to talented students",
      "Demonstrate corporate social responsibility",
      "Shape the future workforce",
    ],
    cta: "Sponsor a Program",
    href: "/contact?interest=sponsor",
    icon: "🌟",
    gradient: "from-primary-600 to-electric-500",
  },
  {
    id: "schools",
    title: "For Schools & Partners",
    tagline: "Bring Programs to Your Community",
    description:
      "Partner with us to bring AI education to your students. We can customize programs for schools, clubs, and organizations.",
    benefits: [
      "Host workshops and hackathons",
      "Co-develop curriculum and programs",
      "Connect students to opportunities",
      "Access our mentor network",
      "Provide cutting-edge AI education",
    ],
    cta: "Partner With Us",
    href: "/contact?interest=school",
    icon: "🏫",
    gradient: "from-primary-700 to-teal-600",
  },
];

export default function GetInvolved() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-electric-50 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
            Get <span className="text-gradient">Involved</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Join our community of students, mentors, volunteers, sponsors, and
            partners working to empower the next generation in the age of AI.
          </p>
        </div>
      </section>

      {/* Pathways */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {pathways.map((pathway, index) => (
              <div
                key={pathway.id}
                id={pathway.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Visual */}
                <div
                  className={`relative ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <div
                    className={`relative h-80 bg-gradient-to-br ${pathway.gradient} rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform`}
                  >
                    <div className="text-center text-white p-8">
                      <div className="text-8xl mb-4">{pathway.icon}</div>
                      <p className="text-3xl font-display font-bold">
                        {pathway.title}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {pathway.tagline}
                  </div>
                  <h2 className="font-display font-bold text-4xl mb-4 text-primary-700">
                    {pathway.title}
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    {pathway.description}
                  </p>

                  <div className="bg-primary-50 p-8 rounded-2xl mb-8">
                    <h3 className="font-display font-semibold text-lg mb-4 text-primary-700">
                      What You Get
                    </h3>
                    <ul className="space-y-3">
                      {pathway.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start text-gray-700"
                        >
                          <span className="text-primary-600 font-bold mr-3 text-xl">
                            →
                          </span>
                          <span className="leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={pathway.href}
                    className={`inline-block bg-gradient-to-r ${pathway.gradient} text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
                  >
                    {pathway.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Community Benefits */}
      <Section gradient className="bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-6">
            Why Join Our <span className="text-gradient">Community</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Blue Venture Hacks is more than programs—it's a community of people
            who believe in empowering the next generation.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="font-display font-bold text-xl mb-3 text-primary-700">
                Make Real Impact
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Help students gain skills, confidence, and opportunities that
                change their career trajectories.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="font-display font-bold text-xl mb-3 text-primary-700">
                Connect With Others
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Join a network of educators, entrepreneurs, students, and
                professionals passionate about AI education.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="font-display font-bold text-xl mb-3 text-primary-700">
                Be Part of Something Bigger
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Contribute to a movement that's reshaping how young people
                prepare for an AI-driven future.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Newsletter Signup */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-700 via-electric-600 to-teal-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Stay Connected
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Get updates on upcoming programs, events, and opportunities.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Questions?
          </h2>
          <p className="text-xl text-primary-100 mb-10 leading-relaxed">
            We'd love to hear from you. Whether you're a student, mentor,
            sponsor, or school partner, let's connect.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary-700 px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Contact Us
          </Link>
        </div>
      </Section>
    </>
  );
}
