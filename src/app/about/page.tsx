// import Header from "@/components/Header";

// export default function AboutPage() {
//   return (
//     <main className="min-h-screen">
//       <Header />
//       <section className="max-w-2xl mx-auto px-6 py-16">
//         <h1 className="font-display text-3xl text-cocoa-800 mb-6">
//           About the poet
//         </h1>

//         <p className="text-cocoa-600 leadingleading-relaxed font-body mb-4">
//           Chyless is a young and inspiring poet whose work reflects the
//           realities of life, choices, and their consequences. Through her
//           poetry, she shares thoughts, experiences, and lessons that resonate
//           with people of all ages. Her writing is inspired by everyday life and
//           the decisions that shape who we become. With a creative voice and a
//           passion for storytelling, she uses poetry to encourage reflection,
//           growth, and understanding. As a young author, she continues to inspire
//           her generation through meaningful and thought-provoking poems.
//         </p>
//       </section>
//     </main>
//   );
// }

  import Header from "@/components/Header";
  import { createClient } from "@/lib/supabase-server";


  function PhotoUpload() {
    const [uploading, setUploading] = useState(false);
    const [done, setDone] = useState(false);
    const supabase = createClient();

    async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
      const file = e.target.files?.[0];
      if (!file) return;

      setUploading(true);
      setDone(false);

      const { error } = await supabase.storage
        .from("about-photo")
        .upload("profile.jpg", file, { upsert: true });

      setUploading(false);
      if (!error) setDone(true);
    }

    return (
      <div>
        <label className="cursor-pointer inline-flex items-center gap-2 bg-mint-600 hover:bg-mint-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
          {uploading ? "Uploading…" : "Choose photo"}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleUpload}
            disabled={uploading}
          />
        </label>
        {done && (
          <p className="mt-2 text-sm text-mint-600 font-medium">
            ✓ Photo updated — refresh the About page to see it.
          </p>
        )}
      </div>
    );
  }
  export default async function AboutPage() {
    const supabase = await createClient();

    // Fetch the public URL of her photo from Supabase storage
    const { data } = supabase.storage
      .from("about-photo")
      .getPublicUrl("profile.jpg");

    const photoUrl = data?.publicUrl;

    return (
      <main className="min-h-screen bg-cream">
        <Header />
        <section className="max-w-2xl mx-auto px-6 py-16">

          <div className="flex flex-col sm:flex-row items-center gap-10 mb-12">
            {/* Photo */}
            <div className="shrink-0">
              {photoUrl ? (
                <img
                  src={photoUrl}
                  alt="The poet"
                  className="w-36 h-36 rounded-full object-cover border-4 border-mint-200 shadow-md"
                />
              ) : (
                <div className="w-36 h-36 rounded-full bg-mint-100 border-4 border-mint-200 flex items-center justify-center">
                  <span className="text-4xl">✍🏽</span>
                </div>
              )}
            </div>

            {/* Name and tagline */}
            <div>
              <h1 className="font-display text-3xl text-cocoa-900 mb-2">
                About the poet
              </h1>
              <p className="text-mint-600 font-medium text-sm uppercase tracking-widest">
                Writer · Dreamer · Storyteller
              </p>
            </div>
          </div>

          {/* Bio — replace this text */}
          <p className="text-cocoa-700 leading-relaxed font-body mb-4 text-lg">

            Chyless is a young and inspiring poet whose work reflects the
            realities of life, choices, and their consequences. Through her
            poetry, she shares thoughts, experiences, and lessons that resonate
            with people of all ages. Her writing is inspired by everyday life and
            the decisions that shape who we become. With a creative voice and a
            passion for storytelling, she uses poetry to encourage reflection,
            growth, and understanding. As a young author, she continues to inspire
            her generation through meaningful and thought - provoking poems.


          </p>

          <p className="text-cocoa-600 leading-relaxed font-body">
            Email: ChyBless@proton.me
          </p>

        </section>
      </main>
    );
  }
