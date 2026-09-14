import StatCounter from "@/components/shared/StatCounter";
import { company } from "@/data/company";

export default function TrustBar() {
  return (
    <section className="bg-brand-dark">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        {company.stats.map((stat) => (
          <div key={stat.label} className="text-center lg:border-l lg:border-white/10 lg:first:border-l-0">
            <p className="font-heading text-3xl font-bold text-brand-orange sm:text-4xl">
              <StatCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-white/70 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
