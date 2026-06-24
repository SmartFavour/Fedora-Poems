import { createClient } from "@/lib/supabase-server";
import Header from "@/components/Header";
import PoemCard from "@/components/PoemCard";

type Poem = {
  id: string;
  title: string;
  body: string;
  mood: string | null;
  published: boolean;
  created_at: string;
};

export default async function HomePage() {
  const supabase = await createClient();

  const { data: poems, error } = await supabase
    .from("poems")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  return (
    <main
      style={{ backgroundColor: "var(--bg-main)" }}
      className="min-h-screen"
    >
      <Header />

      {/* Hero */}
      <section
        className="relative py-24 px-6 text-center overflow-hidden"
        style={{ backgroundColor: "var(--bg-hero)" }}
      >
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-mint-500 opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-mint-400 opacity-10 rounded-full blur-3xl" />

        <div className="relative max-w-2xl mx-auto">
          <p
            className="text-sm font-medium uppercase tracking-widest mb-4"
            style={{ color: "var(--text-accent)" }}
          >
            A poetry collection
          </p>
          <h1 className="font-display text-5xl sm:text-6xl mb-6 leading-tight text-white">
            Words that stay
            <span style={{ color: "var(--text-accent)" }}> with you</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#d2bab0" }}>
            Original poetry — raw, honest, and alive. New pieces added as they
            are written.
          </p>
        </div>
      </section>

      {/* Poems grid */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2
          className="font-display text-2xl mb-8"
          style={{ color: "var(--text-main)" }}
        >
          Latest poems
        </h2>

        {error && (
          <p className="text-center" style={{ color: "var(--text-muted)" }}>
            Could not load poems right now. Try refreshing.
          </p>
        )}

        {poems && poems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">✍🏽</p>
            <p className="italic" style={{ color: "var(--text-muted)" }}>
              No poems published yet — check back soon.
            </p>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {poems?.map((poem: Poem) => (
            <PoemCard key={poem.id} poem={poem} />
          ))}
        </div>
      </section>
    </main>
  );
}
