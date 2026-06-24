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
          ChyBless is a young and inspiring poet whose work reflects the
          realities of life, choices, and their consequences. Through her
          poetry, she shares thoughts, experiences, and lessons that resonate
          with people of all ages. Her writing is inspired by everyday life and
          the decisions that shape who we become. With a creative voice and a
          passion for storytelling, she uses poetry to encourage reflection,
          growth, and understanding. As a young author, she continues to inspire
          her generation through meaningful and thought-provoking poems.
        </p>
      </section>
    </main>
  );
}
