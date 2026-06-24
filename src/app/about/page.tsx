import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="font-display text-3xl text-cocoa-800 mb-6">
          About the poet
        </h1>

        <p className="text-cocoa-600 leadingleading-relaxed font-body mb-4">
          Miss is an inspiration to generation , some call her ChyBless , others
          call her mama, her themes are inspired by life decisions and
          consequences.
        </p>
      </section>
    </main>
  );
}
