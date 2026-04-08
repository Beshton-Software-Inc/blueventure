interface SectionProps {
  children: React.ReactNode;
  className?: string;
  pattern?: boolean;
  gradient?: boolean;
  id?: string;
}

export default function Section({
  children,
  className = "",
  pattern = false,
  gradient = false,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-20 ${
        pattern ? "dot-pattern" : ""
      } ${gradient ? "gradient-mesh" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
