import Link from "next/link";
import { TOOLS } from "@/lib/tools/registry";

export const metadata = {
  title: "Tools — Online Tools",
  description: "Browse image tools like compression, conversion and resizing.",
};

export default function ToolsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-black">Tools</h1>
      <p className="mt-2 text-sm text-neutral-600">
        Image tools (Phase 1). More tools will come later.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {TOOLS.map((t) => (
          <Link
            key={t.slug}
            href={`/tools/${t.slug}`}
            className="rounded-2xl border p-5 hover:shadow-sm transition"
          >
            <div className="text-lg font-bold">{t.name}</div>
            <div className="mt-1 text-sm text-neutral-600">{t.description}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
