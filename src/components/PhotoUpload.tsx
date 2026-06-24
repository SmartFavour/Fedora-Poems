"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase-browser";

export default function PhotoUpload() {
  const [uploading, setUploading] = useState(false);
  const [done, setDone] = useState(false);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setDone(false);

    const supabase = createClient();
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
