async function getPoems() {
  const res = await fetch("http://localhost:3000/api/poems", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Home() {
  const poems = await getPoems();

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-6">Fedora Poems</h1>

      <div className="space-y-4">
        {poems.map((poem) => (
          <div key={poem._id} className="border p-4 rounded">
            <h2 className="text-2xl font-bold">{poem.title}</h2>

            <p>{poem.author}</p>
            <p className="mt-2">{poem.content.slice(0, 100)}...</p>
          </div>
        ))}
      </div>
    </main>
  );
}
