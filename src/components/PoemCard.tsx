import Link from "next/link";

type Poem = {
  id: string;
  title: string;
  body: string;
  mood: string | null;
  published: boolean;
  created_at: string;
};

export default function PoemCard({ poem }: { poem: Poem }) {
  const lines = poem.body.split("\n");
  const preview = lines.slice(0, 3).join("\n");
  const isTruncated = lines.length > 3;

  return (
    <Link href={`/poem/${poem.id}`} className="block group">
      <article className="poem-card h-full flex flex-col justify-between">
        <div>
          {poem.mood && (
            <span className="mood-tag inline-block mb-3">{poem.mood}</span>
          )}

          <h2
            className="font-display text-xl mb-3 leading-snug group-hover:text-mint-500 transition-colors"
            style={{ color: "var(--text-main)" }}
          >
            {poem.title}
          </h2>

          <p
            className="whitespace-pre-line text-sm leading-relaxed font-body"
            style={{ color: "var(--text-soft)" }}
          >
            {preview}
            {isTruncated && "…"}
          </p>
        </div>

        <div
          className="mt-6 flex items-center gap-1 text-xs font-bold group-hover:gap-2 transition-all"
          style={{ color: "var(--text-accent)" }}
        >
          <span>Read full poem</span>
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </div>
      </article>
    </Link>
  );
}
