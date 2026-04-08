import Link from "next/link";

const navigation = {
  main: [
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Hackathons", href: "/hackathons" },
    { name: "OPC", href: "/opc" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Contact", href: "/contact" },
  ],
  programs: [
    { name: "Seminars", href: "/programs#seminars" },
    { name: "Workshops", href: "/programs#workshops" },
    { name: "Summer Programs", href: "/programs#summer" },
    { name: "Career Readiness", href: "/programs#career" },
  ],
  community: [
    { name: "For Students", href: "/get-involved#students" },
    { name: "For Mentors", href: "/get-involved#mentors" },
    { name: "For Sponsors", href: "/get-involved#sponsors" },
    { name: "For Schools", href: "/get-involved#schools" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-electric-400 to-teal-400 rounded-lg flex items-center justify-center">
                <span className="text-primary-900 font-display font-bold text-xl">B</span>
              </div>
              <span className="font-display font-bold text-xl">
                Blue Venture Hacks
              </span>
            </div>
            <p className="text-primary-200 mb-6 leading-relaxed">
              Empowering the next generation to thrive in the age of AI through
              practical education, community, and entrepreneurship.
            </p>
            <a
              href="mailto:hello@blueventurehacks.org"
              className="text-electric-400 hover:text-electric-300 transition-colors"
            >
              hello@blueventurehacks.org
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Navigate</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-200 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Programs</h3>
            <ul className="space-y-3">
              {navigation.programs.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-200 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Community</h3>
            <ul className="space-y-3">
              {navigation.community.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-200 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-300 text-sm">
              © {new Date().getFullYear()} Blue Venture Hacks. A nonprofit
              organization dedicated to AI education and youth empowerment.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-primary-300 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-primary-300 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
