import Link from "next/link";
import Container from "@/components/shared/Container";

export default function StartProjectBanner() {
  return (
    <section className="bg-brand-dark py-6 sm:py-7">
      <Container className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-heading text-lg font-bold uppercase tracking-wide text-white sm:text-xl">
            Thinking of Starting Your Own Construction Project?
          </p>
          <p className="mt-1 text-sm text-white/70">
            See the materials, tools and structural know-how behind every type of construction work.
          </p>
        </div>
        <Link
          href="/services#project-guide"
          className="shrink-0 animate-[cta-glow_2s_ease-in-out_infinite] whitespace-nowrap rounded-full bg-brand-orange px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
        >
          See the Guide
        </Link>
      </Container>
    </section>
  );
}
