"use client";

import { useState } from "react";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("/api/poems",{
    method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
    body: JSON.stringify({
      title,
      content,
      author,
    }),
    });
  alert("Poem uploaded!");
  }
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Fedoras Dashboard
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4">
        <input placeholder="Title" className="border p-2 w-full"
          onChange={(e) => setTitle(e.target.value)} />
        <input placeholder="Author" className="border p-2 w-full" onChange={(e) => setAuthor(e.target.value)} />
        <textarea placeholder="Poem Content" className="border p-2 w-full h-40" onChange={(e) => setContent(e.target.value)} />
        <button className="bg-black text-white px-4 py-2">Upload</button>
      </form>
    </main>
  )
}
