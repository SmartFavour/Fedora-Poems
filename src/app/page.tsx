// import { createClient } from "@/lib/supabase-server";
// import Header from "@/components/Header";
// import PoemCard from "@/components/PoemCard";

// type Poem = {
//   id: string;
//   title: string;
//   body: string;
//   mood: string | null;
//   published: boolean;
//   created_at: string;
// };

// export default async function HomePage() {
//   const supabase = await createClient();

//   const { data: poems, error } = await supabase
//     .from("poems")
//     .select("*")
//     .eq("published", true)
//     .order("created_at", { ascending: false });

//   return (
//     <main className="min-h-screen">
//       <Header />

//       <section className="max-w-3xl mx-auto px-6 pt-16 pb-10 text-center">
//         <h1 className="font-display text-4xl sm:text-5xl text-cocoa-800 mb-4">
//           Words, gathered here
//         </h1>
//         <p className="text-cocoa-500 max-w-lg mx-auto leading-relaxed">
//           A growing collection of original poetry. New pieces added as they are
//           written.
//         </p>
//       </section>

//       <section className="max-w-3xl mx-auto px-6 pb-24">
//         {error && (
//           <p className="text-center text-cocoa-400">
//             Could not load poems right now. Try refreshing.
//           </p>
//         )}

//         {poems && poems.length === 0 && (
//           <p className="text-center text-cocoa-400 italic">
//             No poems published yet — check back soon.
//           </p>
//         )}

//         <div className="grid sm:grid-cols-2 gap-6">
//           {poems?.map((poem: Poem) => (
//             <PoemCard key={poem.id} poem={poem} />
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

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
    <main className="min-h-screen bg-cream">
      <Header />

      {/* Hero section */}
      <section
        className="relative text-white py-24 px-6 text-center overflow-hidden"
        style={{ backgroundColor: "var(--bg-card)" }}
      >
        {" "}
        {/* decorative turquoise blur blobs */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-mint-500 opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-mint-400 opacity-10 rounded-full blur-3xl" />
        <div className="relative max-w-2xl mx-auto">
          <p className="text-mint-400 text-sm font-medium uppercase tracking-widest mb-4">
            A poetry collection
          </p>
          <h1 className="font-display text-5xl sm:text-6xl mb-6 leading-tight">
            Words that stay
            <span className="text-mint-400"> with you</span>
          </h1>
          <p className="text-cocoa-300 text-lg leading-relaxed">
            Original poetry — raw, honest, and alive. New pieces added as they
            are written.
          </p>
        </div>
      </section>

      {/* Poems grid */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-2xl text-cocoa-800 mb-8">
          Latest poems
        </h2>

        {error && (
          <p className="text-center text-cocoa-400">
            Could not load poems right now. Try refreshing.
          </p>
        )}

        {poems && poems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">✍🏽</p>
            <p className="text-cocoa-400 italic">
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
