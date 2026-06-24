"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase-browser";
import PhotoUpload from "@/components/PhotoUpload";

type Poem = {
  id: string;
  title: string;
  body: string;
  mood: string | null;
  published: boolean;
  created_at: string;
};

const emptyForm = { title: "", body: "", mood: "", published: true };

export default function DashboardPage() {
  const supabase = createClient();
  const router = useRouter();

  const [poems, setPoems] = useState<Poem[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  async function loadPoems() {
    const { data } = await supabase
      .from("poems")
      .select("*")
      .order("created_at", { ascending: false });
    setPoems(data ?? []);
    setLoading(false);
  }

  useEffect(() => {
    async function fetchPoems() {
      const { data } = await supabase
        .from("poems")
        .select("*")
        .order("created_at", { ascending: false });
      setPoems(data ?? []);
      setLoading(false);
    }

    fetchPoems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    if (editingId) {
      await supabase.from("poems").update(form).eq("id", editingId);
    } else {
      await supabase.from("poems").insert(form);
    }

    setForm(emptyForm);
    setEditingId(null);
    setSaving(false);
    loadPoems();
  }

  function startEdit(poem: Poem) {
    setEditingId(poem.id);
    setForm({
      title: poem.title,
      body: poem.body,
      mood: poem.mood ?? "",
      published: poem.published,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this poem? This can't be undone.")) return;
    await supabase.from("poems").delete().eq("id", id);
    loadPoems();
  }

  return (
    <main className="min-h-screen bg-cream">
      <header className="border-b border-mint-100 bg-white">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="font-display text-xl text-cocoa-800">
            Poem dashboard
          </h1>
          <button
            onClick={handleSignOut}
            className="text-sm text-cocoa-500 hover:text-cocoa-700"
          >
            Sign out
          </button>
        </div>
      </header>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-card shadow-card p-6 mb-10"
        >
          <h2 className="font-display text-lg text-cocoa-800 mb-4">
            {editingId ? "Edit poem" : "Add a new poem"}
          </h2>

          <label className="block text-sm font-medium text-cocoa-700 mb-1">
            Title
          </label>
          <input
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full mb-4 px-3 py-2 rounded-lg border border-mint-200 focus:outline-none focus:ring-2 focus:ring-mint-400"
          />

          <label className="block text-sm font-medium text-cocoa-700 mb-1">
            Poem text
          </label>
          <textarea
            required
            rows={8}
            value={form.body}
            onChange={(e) => setForm({ ...form, body: e.target.value })}
            className="w-full mb-4 px-3 py-2 rounded-lg border border-mint-200 focus:outline-none focus:ring-2 focus:ring-mint-400 font-body"
            placeholder="Line breaks are kept exactly as you type them."
          />

          <label className="block text-sm font-medium text-cocoa-700 mb-1">
            Mood / tag (optional)
          </label>
          <input
            value={form.mood}
            onChange={(e) => setForm({ ...form, mood: e.target.value })}
            placeholder="e.g. heartbreak, hope, nostalgia"
            className="w-full mb-4 px-3 py-2 rounded-lg border border-mint-200 focus:outline-none focus:ring-2 focus:ring-mint-400"
          />

          <label className="flex items-center gap-2 mb-6 text-sm text-cocoa-700 cursor-pointer">
            <input
              type="checkbox"
              checked={form.published}
              onChange={(e) =>
                setForm({ ...form, published: e.target.checked })
              }
              className="rounded border-mint-300"
            />
            Published (visible on the public site)
          </label>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={saving}
              className="bg-mint-600 hover:bg-mint-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors disabled:opacity-50"
            >
              {saving ? "Saving…" : editingId ? "Save changes" : "Add poem"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setForm(emptyForm);
                }}
                className="text-cocoa-500 hover:text-cocoa-700 px-5 py-2.5"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <h2 className="font-display text-lg text-cocoa-800 mb-4">
          All poems ({poems.length})
        </h2>

        {loading && <p className="text-cocoa-400">Loading…</p>}

        <div className="space-y-3">
          {poems.map((poem) => (
            <div
              key={poem.id}
              className="bg-white rounded-xl border border-mint-100 px-5 py-4 flex items-center justify-between gap-4"
            >
              <div>
                <p className="font-medium text-cocoa-800">{poem.title}</p>
                <p className="text-xs text-cocoa-400">
                  {poem.published ? "Published" : "Draft"}
                  {poem.mood && ` · ${poem.mood}`}
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <button
                  onClick={() => startEdit(poem)}
                  className="text-sm text-mint-600 hover:text-mint-700 font-medium"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(poem.id)}
                  className="text-sm text-red-500 hover:text-red-600 font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <div
          className="bg-white mt-6 p-6"
          style={{ borderRadius: "var(--radius-card)" }}
        >
          <h2 className="font-display text-lg text-cocoa-800 mb-2">
            About page photo
          </h2>
          <p className="text-sm text-cocoa-500 mb-4">
            Upload a photo — it appears on the About page. Square photos work
            best.
          </p>
          <PhotoUpload />
        </div>
      </section>
    </main>
  );
}
