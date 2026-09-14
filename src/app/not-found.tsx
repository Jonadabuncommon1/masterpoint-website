import Link from "next/link";
import Container from "@/components/shared/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-white py-20">
      <Container className="text-center">
        <p className="font-heading text-7xl font-bold text-brand-orange">404</p>
        <h1 className="mt-4 font-heading text-2xl font-semibold uppercase text-brand-dark sm:text-3xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-brand-dark/60">
          The page you are looking for may have been moved or no longer exists.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-md bg-brand-orange px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-orange-dark"
        >
          Back to Homepage
        </Link>
      </Container>
    </section>
  );
}
