import SectionHeading from "@/components/shared/SectionHeading";
import Container from "@/components/shared/Container";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-[#F7F7F7] py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Client Confidence"
          title="What Our Clients Say"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.project}
              className="flex flex-col rounded-xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-brand-orange/30">
                <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H4.6a2.57 2.57 0 0 1 2.57-2.57V6Zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.83v-6.83H14.6a2.57 2.57 0 0 1 2.57-2.57V6Z" />
              </svg>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-brand-dark/80">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-black/5 pt-4">
                <p className="font-heading text-sm font-semibold uppercase text-brand-dark">{t.role}</p>
                <p className="text-xs text-brand-dark/50">{t.project}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
