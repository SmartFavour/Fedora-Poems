import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-10 backdrop-blur"
      style={{
        backgroundColor: "var(--header-bg)",
        borderBottom: "1px solid var(--header-border)",
      }}
    >
      <nav className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl text-cocoa-700 tracking-tight"
          style={{ color: "var(--text-main)" }}
        >
          ChyBless Poems
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-mint-500"
            style={{ color: "var(--text-soft)" }}
          >
            About
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
