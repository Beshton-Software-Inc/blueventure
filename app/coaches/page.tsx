import Link from "next/link";
import Section from "@/components/Section";

const coaches = [
  {
    name: "Dave Wang",
    linkedin: "https://www.linkedin.com/in/davewang/",
    bio: "Experienced technology leader with deep expertise in software engineering and AI.",
    expertise: ["Software Engineering", "AI Strategy", "Technical Leadership"],
    photo: "/images/coach-photos/dave-wang.png",
  },
  {
    name: "Simon Linwood",
    linkedin: "https://www.linkedin.com/in/digitalexcellence/",
    bio: "Specialist in digital transformation and modern software development practices.",
    expertise: ["Digital Transformation", "Software Development", "Innovation"],
    photo: "/images/coach-photos/simon-linwood.png",
  },
  {
    name: "Jenny Chen",
    linkedin: "https://www.linkedin.com/in/jennychenbo/",
    bio: "Expert in business operations and technology integration with a focus on practical applications.",
    expertise: ["Business Operations", "Technology Integration", "Project Management"],
    photo: "/images/coach-photos/jenny-chen.png",
  },
  {
    name: "Dr. Tao Hong",
    linkedin: "https://www.linkedin.com/in/tao-hong-phd/",
    bio: "PhD with extensive research and teaching experience in computer science and AI.",
    expertise: ["Computer Science", "AI Research", "Academic Mentorship"],
    photo: "/images/coach-photos/tao-hong.png",
  },
  {
    name: "Samuel Wei",
    linkedin: "https://www.linkedin.com/in/samuel-wei-20a59a2a2/",
    bio: "Software engineer passionate about teaching the next generation of developers.",
    expertise: ["Software Development", "Coding Education", "Mentorship"],
    photo: "/images/coach-photos/samuel-wei.png",
  },
  {
    name: "Jingwen Wang",
    linkedin: "https://www.linkedin.com/in/jingwen-wang-a2904b98/",
    bio: "Senior Architect at Apple leading large-scale data and ML platforms powering billions of email campaigns daily, with deep experience in GenAI guardrails, real-time analytics, and trust & safety systems.",
    expertise: ["AI/ML Systems", "Big Data Architecture", "GenAI Guardrails"],
    photo: "/images/coach-photos/jingwen-wang.png",
  },
  {
    name: "Tony Huang",
    linkedin: "https://www.linkedin.com/in/tony-huang-287b00/",
    bio: "Experienced technology professional dedicated to mentoring the next generation of innovators.",
    expertise: ["Software Engineering", "Technical Leadership", "Mentorship"],
    photo: "/images/coach-photos/tony-huang.png",
  },
  {
    name: "Lihang Ying",
    linkedin: "https://www.linkedin.com/in/lihang/",
    bio: "Experienced technology professional dedicated to mentoring the next generation of innovators.",
    expertise: ["Software Engineering", "Technical Leadership", "Mentorship"],
    photo: "/images/coach-photos/lihang-ying.png",
  },
  {
    name: "Shu Lu",
    linkedin: "https://www.linkedin.com/in/shu-lu-bb338a5/",
    bio: "Experienced technology professional dedicated to mentoring the next generation of innovators.",
    expertise: ["Software Engineering", "Technical Leadership", "Mentorship"],
    photo: "/images/coach-photos/shu-lu.png",
  },
];

export default function Coaches() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-electric-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-electric-400/20 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-400/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-primary-600 to-electric-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Meet Our Team
              </span>
            </div>

            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
              Our Expert <span className="text-gradient">Coaches</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Learn from experienced professionals who bring real-world expertise from leading tech companies, startups, and academic institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Coaches Grid */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <div
                key={coach.name}
                className="bg-white border-2 border-primary-100 rounded-2xl overflow-hidden hover:border-primary-400 hover:shadow-2xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6 space-y-4 flex flex-col items-center w-full justify-center bg-gradient-to-br from-primary-500 via-electric-500 to-teal-500 p-8 text-center">
                  <img className ="justify-center text-center flex items-center w-2/3 rounded-full" 
                    src={coach.photo}
                  />
                  <h3 className="justify-center text-center flex items-center font-display font-bold text-2xl text-white">
                    {coach.name}
                  </h3>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-gray-600 leading-relaxed min-h-[80px]">
                    {coach.bio}
                  </p>

                  <div>
                    <h4 className="font-bold text-primary-700 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {coach.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={coach.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-primary-600 to-electric-500 text-white px-6 py-3 rounded-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    View LinkedIn Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Our Coaches Matter */}
      <Section className="bg-gradient-to-br from-primary-50 via-white to-electric-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-12">
              Why Our Coaches <span className="text-gradient">Matter</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-primary-100">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="font-display font-bold text-2xl mb-3 text-primary-700">
                  Real-World Experience
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our coaches bring practical knowledge from leading tech companies, startups, and academic institutions. They've built the solutions students will learn to create.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-primary-100">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-display font-bold text-2xl mb-3 text-primary-700">
                  Personalized Mentorship
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Small class sizes ensure every student gets individual attention and guidance. Our coaches are committed to helping each student succeed.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-primary-100">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="font-display font-bold text-2xl mb-3 text-primary-700">
                  Industry Insights
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Learn what actually matters in the tech industry. Our coaches share insider knowledge about career paths, skills employers want, and how to stand out.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-primary-100">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-display font-bold text-2xl mb-3 text-primary-700">
                  Hands-On Learning
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our coaches emphasize learning by doing. Work on real projects, get immediate feedback, and build portfolio pieces that demonstrate your skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-electric-600">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6">
            Ready to Learn From the Best?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Join our summer program and get personalized mentorship from experienced professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Register for Summer Program
            </Link>
            <Link
              href="/"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-700 transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
