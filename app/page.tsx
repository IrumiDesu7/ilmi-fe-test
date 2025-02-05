import CTA from "@/components/sections/cta";
import Features from "@/components/sections/features";
import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 font-[family-name:var(--font-geist-sans)] sm:px-6 lg:px-8 lg:py-16">
      <Hero />
      <Features />
      <CTA />
    </main>
  );
}
