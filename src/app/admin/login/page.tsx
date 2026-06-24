// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { createClient } from "@/lib/supabase-browser";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   async function handleLogin(e: React.FormEvent) {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     const supabase = createClient();
//     const { error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     setLoading(false);

//     if (error) {
//       setError("Wrong email or password.");
//       return;
//     }

//     router.push("/admin/dashboard");
//     router.refresh();
//   }

//   return (
//     <main className="min-h-screen flex items-center justify-center px-6 bg-cocoa-900">
//       <form
//         onSubmit={handleLogin}
//         className="w-full max-w-sm bg-cream rounded-card shadow-card p-8"
//       >
//         <h1 className="font-display text-2xl text-cocoa-800 mb-1">
//           Admin login
//         </h1>
//         <p className="text-sm text-cocoa-500 mb-6">For the poet only.</p>

//         <label className="block text-sm font-medium text-cocoa-700 mb-1">
//           Email
//         </label>
//         <input
//           type="email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full mb-4 px-3 py-2 rounded-lg border border-mint-200 focus:outline-none focus:ring-2 focus:ring-mint-400 bg-white text-cocoa-800"
//         />

//         <label className="block text-sm font-medium text-cocoa-700 mb-1">
//           Password
//         </label>
//         <input
//           type="password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full mb-6 px-3 py-2 rounded-lg border border-mint-200 focus:outline-none focus:ring-2 focus:ring-mint-400 bg-white text-cocoa-800"
//         />

//         {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-mint-600 hover:bg-mint-700 text-white font-medium py-2.5 rounded-lg transition-colors disabled:opacity-50"
//         >
//           {loading ? "Signing in…" : "Sign in"}
//         </button>
//       </form>
//     </main>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase-browser";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const router = useRouter();

  // If already logged in, skip login and go straight to dashboard
  useEffect(() => {
    async function checkSession() {
      const supabase = createClient();
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        router.push("/admin/dashboard");
      } else {
        setChecking(false);
      }
    }
    checkSession();
  }, [router]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError("Wrong email or password.");
      return;
    }

    router.push("/admin/dashboard");
    router.refresh();
  }

  // Show nothing while checking session — prevents login flash
  if (checking) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-cocoa-900">
        <p className="text-cocoa-300 text-sm">Loading…</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-cocoa-900">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-cream rounded-card p-8"
        style={{ borderRadius: "var(--radius-card)" }}
      >
        <h1 className="font-display text-2xl text-cocoa-800 mb-1">
          Welcome back
        </h1>
        <p className="text-sm text-cocoa-500 mb-6">
          Sign in to manage your poems.
        </p>

        <label className="block text-sm font-medium text-cocoa-700 mb-1">
          Email
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-3 py-2 rounded-lg border border-mint-200 focus:outline-none focus:ring-2 focus:ring-mint-400 bg-white text-cocoa-800"
        />

        <label className="block text-sm font-medium text-cocoa-700 mb-1">
          Password
        </label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-3 py-2 rounded-lg border border-mint-200 focus:outline-none focus:ring-2 focus:ring-mint-400 bg-white text-cocoa-800"
        />

        {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-mint-600 hover:bg-mint-700 text-white font-semibold py-2.5 rounded-lg transition-colors disabled:opacity-50"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </main>
  );
}
