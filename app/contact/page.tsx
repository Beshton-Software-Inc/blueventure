import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Blue Venture Hacks",
  description:
    "Get in touch with Blue Venture Hacks. Whether you're a student, mentor, sponsor, or school partner, we'd love to hear from you.",
};

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-electric-50 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We'd love to hear from you. Whether you're a student, mentor,
            sponsor, or school partner, let's connect.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </Section>

      {/* FAQ */}
      <Section gradient className="bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-12">
            Common <span className="text-gradient">Questions</span>
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-display font-bold text-xl mb-2 text-primary-700">
                How do I join a program?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Check out our{" "}
                <a href="/ai-workshop-spring-2026" className="text-primary-600 underline hover:text-primary-700">
                  Spring 2026 AI Workshop Series
                </a>{" "}
                — our current flagship program. You can register your interest
                directly on that page, or contact us here for any questions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-display font-bold text-xl mb-2 text-primary-700">
                Do I need coding experience?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                It depends on the program. We offer options for complete
                beginners as well as more advanced tracks. Check each program's
                requirements on the Programs page.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-display font-bold text-xl mb-2 text-primary-700">
                How can my company sponsor or partner?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We'd love to discuss partnership opportunities! Use this contact
                form or email us at blue9ventures@gmail.com with "Partnership
                Inquiry" in the subject line.
              </p>
            </div>
          </div>
        </div>
      </Section>

    </>
  );
}
