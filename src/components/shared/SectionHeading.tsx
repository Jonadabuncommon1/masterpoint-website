export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-brand-orange">
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-balance font-heading text-3xl font-semibold uppercase tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-brand-dark"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/70" : "text-brand-dark/70"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
