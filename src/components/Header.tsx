import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-mint-100 bg-cream/80 backdrop-blur sticky top-0 z-10">
      <nav className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl text-cocoa-700 tracking-tight"
        >
          Her Poems
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium text-cocoa-500 hover:text-mint-600 transition-colors"
        >
          About
        </Link>
      </nav>
    </header>
  );
}
