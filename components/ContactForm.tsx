"use client";

import { useState } from "react";
import { submitToGoogleSheets } from "@/lib/submitToSheets";

interface FormData {
  name: string;
  email: string;
  interest: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    interest: "general",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string>("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    // Submit to Google Sheets
    const result = await submitToGoogleSheets({
      ...formData,
      type: "Contact Forms",
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", interest: "general", message: "" });
    } else {
      setSubmitError(result.message);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <div className="bg-white p-12 rounded-3xl shadow-2xl">
          <div className="text-7xl mb-6">✓</div>
          <h2 className="font-display font-bold text-4xl mb-4 text-primary-700">
            Message Sent!
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for reaching out. We'll get back to you within 1-2
            business days.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-primary-600 to-electric-500 text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl hover:scale-105 transition-all"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {/* Left: Info */}
      <div>
        <h2 className="font-display font-bold text-3xl mb-6 text-primary-700">
          Let's Talk
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Have questions about our programs? Want to get involved? Looking to
          partner with us? We're here to help.
        </p>

        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-electric-500 rounded-lg flex items-center justify-center text-white text-xl mr-4">
              ✉️
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg text-primary-700 mb-1">
                Email Us
              </h3>
              <a
                href="mailto:blue9ventures@gmail.com"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                blue9ventures@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-electric-500 to-teal-500 rounded-lg flex items-center justify-center text-white text-xl mr-4">
              🌐
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg text-primary-700 mb-1">
                Follow Us
              </h3>
              <p className="text-gray-600">
                Connect with us on social media for updates and news
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-primary-600 rounded-lg flex items-center justify-center text-white text-xl mr-4">
              ⏰
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg text-primary-700 mb-1">
                Response Time
              </h3>
              <p className="text-gray-600">
                We typically respond within 1-2 business days
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Form */}
      <div className="bg-gradient-to-br from-primary-50 to-electric-50 p-8 rounded-2xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-primary-500"
              } focus:outline-none focus:ring-2`}
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-primary-500"
              } focus:outline-none focus:ring-2`}
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="interest"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              I'm interested in
            </label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="general">General Inquiry</option>
              <option value="student">Joining as a Student</option>
              <option value="mentor">Becoming a Mentor</option>
              <option value="volunteer">Volunteering</option>
              <option value="sponsor">Sponsoring Programs</option>
              <option value="school">School Partnership</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.message
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-primary-500"
              } focus:outline-none focus:ring-2 resize-none`}
              placeholder="Tell us more about your interest..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>

          {submitError && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {submitError}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-primary-600 to-electric-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
