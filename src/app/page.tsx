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
    <main className="min-h-screen">
      <Header />

      <section className="max-w-3xl mx-auto px-6 pt-16 pb-10 text-center">
        <h1 className="font-display text-4xl sm:text-5xl text-cocoa-800 mb-4">
          Words, gathered here
        </h1>
        <p className="text-cocoa-500 max-w-lg mx-auto leading-relaxed">
          A growing collection of original poetry. New pieces added as they are
          written.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-24">
        {error && (
          <p className="text-center text-cocoa-400">
            Could not load poems right now. Try refreshing.
          </p>
        )}

        {poems && poems.length === 0 && (
          <p className="text-center text-cocoa-400 italic">
            No poems published yet — check back soon.
          </p>
        )}

        <div className="grid sm:grid-cols-2 gap-6">
          {poems?.map((poem: Poem) => (
            <PoemCard key={poem.id} poem={poem} />
          ))}
        </div>
      </section>
    </main>
  );
}
