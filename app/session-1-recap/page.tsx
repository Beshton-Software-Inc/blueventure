import Link from "next/link";
import Section from "@/components/Section";

const featured = {
  title: "3D Modeling Keepsakes",
  caption:
    "After learning 3D modeling basics, every student designed and 3D-printed their own custom figurine to take home.",
  photo: "/images/session-photos/1/featured-3d-print.jpg",
};

const galleries = [
  {
    title: "Lectures & Presentations",
    icon: "🎤",
    photos: [
      "/images/session-photos/1/lecture-1.jpg",
      "/images/session-photos/1/lecture-2.jpg",
      "/images/session-photos/1/lecture-3.jpg",
      "/images/session-photos/1/lecture-4.jpg",
    ],
  },
  {
    title: "Hands-On Coding",
    icon: "💻",
    photos: [
      "/images/session-photos/1/coding-1.jpg",
      "/images/session-photos/1/coding-2.jpg",
      "/images/session-photos/1/coding-3.jpg",
    ],
  },
  {
    title: "Lunches & Meals",
    icon: "🍱",
    photos: [
      "/images/session-photos/1/lunch-1.jpg",
      "/images/session-photos/1/lunch-2.jpg",
      "/images/session-photos/1/lunch-3.jpg",
    ],
  },
  {
    title: "Kayaking Excursion",
    icon: "🛶",
    photos: [
      "/images/session-photos/1/kayaking-1.jpg",
      "/images/session-photos/1/kayaking-2.jpg",
      "/images/session-photos/1/kayaking-3.jpg",
      "/images/session-photos/1/kayaking-4.jpg",
    ],
  },
];

export default function Session1Recap() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-electric-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-electric-400/20 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-400/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-primary-600 to-electric-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Session #1 Recap
              </span>
            </div>

            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
              Session #1 <span className="text-gradient">Highlights</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              A look back at what students built, learned, and experienced during Session 1 (June 15 to July 3).
            </p>
          </div>
        </div>
      </section>

      {/* Category Galleries: Lectures & Presentations, Hands-On Coding */}
      {galleries.slice(0, 2).map((gallery, i) => (
        <Section key={gallery.title} className={i % 2 === 0 ? "bg-gradient-to-br from-primary-50 via-white to-electric-50" : "bg-white"}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-center mb-12">
              {gallery.icon} <span className="text-gradient">{gallery.title}</span>
            </h2>
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto ${
                gallery.photos.length === 4 ? "max-w-[820px]" : "lg:grid-cols-3"
              }`}
            >
              {gallery.photos.map((photo, index) => (
                <div
                  key={photo}
                  className="rounded-2xl overflow-hidden border-2 border-primary-100 hover:border-primary-400 hover:shadow-2xl transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={photo}
                    alt={`${gallery.title} photo ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </Section>
      ))}

      {/* Featured Photo */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border-4 border-transparent bg-gradient-to-br from-primary-600 to-electric-500 p-1 shadow-2xl">
            <div className="bg-white rounded-xl overflow-hidden">
              <img
                src={featured.photo}
                alt={featured.title}
                className="w-full max-h-[500px] object-cover"
              />
              <div className="p-6 text-center">
                <div className="inline-block mb-2 bg-gradient-to-r from-primary-600 to-electric-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  ✨ Student Favorite
                </div>
                <h3 className="font-display font-bold text-2xl text-primary-700 mb-2">
                  {featured.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  {featured.caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Category Galleries: Lunches & Meals, Kayaking Excursion */}
      {galleries.slice(2).map((gallery, i) => (
        <Section key={gallery.title} className={i % 2 === 0 ? "bg-gradient-to-br from-primary-50 via-white to-electric-50" : "bg-white"}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-center mb-12">
              {gallery.icon} <span className="text-gradient">{gallery.title}</span>
            </h2>
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto ${
                gallery.photos.length === 4 ? "max-w-[820px]" : "lg:grid-cols-3"
              }`}
            >
              {gallery.photos.map((photo, index) => (
                <div
                  key={photo}
                  className="rounded-2xl overflow-hidden border-2 border-primary-100 hover:border-primary-400 hover:shadow-2xl transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={photo}
                    alt={`${gallery.title} photo ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </Section>
      ))}

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-electric-600">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6">
            Want an Experience Like This?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Join an upcoming session and build your own memories with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdlqpxb_muRYlxyV8FBH6Kj_PBOj5wJRLWztdWZ5yDRCAY5pw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Register Now
            </a>
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
