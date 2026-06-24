import { createClient } from "@/lib/supabase-server";
import Header from "@/components/Header";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PoemPage({ params }: { params: { id: string } }) {
  const supabase = await createClient();

  const { data: poem } = await supabase
    .from("poems")
    .select("*")
    .eq("id", params.id)
    .eq("published", true)
    .single();

  if (!poem) notFound();

  return (
    <main className="min-h-screen">
      <Header />

      <article className="max-w-2xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="text-sm text-mint-600 hover:text-mint-700 font-medium"
        >
          ← Back to all poems
        </Link>

        <div className="mt-8 flex items-start justify-between gap-3">
          <h1 className="font-display text-3xl sm:text-4xl text-cocoa-800">
            {poem.title}
          </h1>
          {poem.mood && (
            <span className="shrink-0 text-xs font-medium uppercase tracking-wide text-mint-700 bg-mint-50 px-2.5 py-1 rounded-full">
              {poem.mood}
            </span>
          )}
        </div>

        <p className="mt-10 whitespace-pre-line text-lg leading-loose text-cocoa-700 font-body">
          {poem.body}
        </p>
      </article>
    </main>
  );
}
