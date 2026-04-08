import Link from "next/link";

interface CTABannerProps {
  title: string;
  description?: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  gradient?: boolean;
}

export default function CTABanner({
  title,
  description,
  primaryButton,
  secondaryButton,
  gradient = true,
}: CTABannerProps) {
  return (
    <section
      className={`relative py-20 overflow-hidden ${
        gradient
          ? "bg-gradient-to-br from-primary-700 via-primary-600 to-electric-600"
          : "bg-primary-700"
      }`}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-electric-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6">
          {title}
        </h2>
        {description && (
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={primaryButton.href}
            className="inline-block bg-white text-primary-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            {primaryButton.text}
          </Link>
          {secondaryButton && (
            <Link
              href={secondaryButton.href}
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-700 transition-all duration-300"
            >
              {secondaryButton.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
