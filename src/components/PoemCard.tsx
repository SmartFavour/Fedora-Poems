// import Link from "next/link";

// type Poem = {
//   id: string;
//   title: string;
//   body: string;
//   mood: string | null;
//   published: boolean;
//   created_at: string;
// };

// export default function PoemCard({ poem }: { poem: Poem }) {
//   // Show only the first 3 lines as a preview on the card
//   const lines = poem.body.split("\n");
//   const preview = lines.slice(0, 3).join("\n");
//   const isTruncated = lines.length > 3;

//   return (
//     <Link href={`/poem/${poem.id}`} className="block group">
//       <article className="poem-card">
//         <div className="flex items-start justify-between gap-3 mb-3">
//           <h2 className="font-display text-xl text-cocoa-800 group-hover:text-mint-600 transition-colors">
//             {poem.title}
//           </h2>
//           {poem.mood && (
//             <span className="shrink-0 text-xs font-medium uppercase tracking-wide text-mint-700 bg-mint-50 px-2.5 py-1 rounded-full">
//               {poem.mood}
//             </span>
//           )}
//         </div>

//         <p className="whitespace-pre-line text-cocoa-600 text-sm leading-relaxed font-body">
//           {preview}
//           {isTruncated && "…"}
//         </p>

//         <span className="mt-4 inline-block text-xs font-semibold text-mint-600 group-hover:translate-x-1 transition-transform">
//           Read full poem →
//         </span>
//       </article>
//     </Link>
//   );
// }

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
          {/* Mood tag */}
          {poem.mood && (
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-mint-600 bg-mint-50 px-3 py-1 rounded-full mb-3">
              {poem.mood}
            </span>
          )}

          {/* Title */}
          <h2 className="font-display text-xl text-cocoa-900 group-hover:text-mint-600 transition-colors mb-3 leading-snug">
            {poem.title}
          </h2>

          {/* Preview lines */}
          <p className="whitespace-pre-line text-cocoa-600 text-sm leading-relaxed font-body">
            {preview}
            {isTruncated && "…"}
          </p>
        </div>

        {/* Read more */}
        <div className="mt-6 flex items-center gap-1 text-xs font-bold text-mint-600 group-hover:gap-2 transition-all">
          <span>Read full poem</span>
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </div>
      </article>
    </Link>
  );
}
