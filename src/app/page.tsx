import Link from "next/link";

export const metadata = {
  title: "Online Tools — Fast Image Tools (Compress, Convert, Resize)",
  description:
    "Free online tools to compress, convert and resize images. Fast, privacy-friendly, and works directly in your browser.",
};

const features = [
  {
    title: "Fast in Browser",
    desc: "Most image tools run locally on your device — quick and private.",
  },
  {
    title: "Best SEO Pages",
    desc: "Dedicated tool pages for each feature to rank on Google.",
  },
  {
    title: "No Signup Needed",
    desc: "Use tools instantly. Download results in one click.",
  },
];

const imageTools = [
  {
    name: "Image Compressor",
    desc: "Reduce JPG/PNG/WebP size with quality control.",
    href: "/tools/image-compressor",
    badge: "Live",
  },
  {
    name: "Image Converter",
    desc: "Convert JPG ↔ PNG ↔ WebP (AVIF later).",
    href: "/tools",
    badge: "Next",
  },
  {
    name: "Image Resizer",
    desc: "Resize by pixels or percent with aspect lock.",
    href: "/tools",
    badge: "Next",
  },
  {
    name: "Crop & Rotate",
    desc: "Crop, rotate and export clean images.",
    href: "/tools",
    badge: "Next",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Top bar */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/15 grid place-items-center">
            <span className="text-sm font-black">OT</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-black">Online Tools</div>
            <div className="text-[11px] text-white/60">Image tools first</div>
          </div>
        </Link>

        <nav className="flex items-center gap-3">
          <Link
            href="/tools"
            className="rounded-xl bg-white/10 px-4 py-2 text-sm font-bold ring-1 ring-white/15 hover:bg-white/15 transition"
          >
            Browse Tools
          </Link>
          <Link
            href="/tools/image-compressor"
            className="rounded-xl bg-white px-4 py-2 text-sm font-black text-neutral-950 hover:bg-neutral-200 transition"
          >
            Compress Image
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-12">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold ring-1 ring-white/15">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Now building: Image Tools Suite
            </div>

            <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Fast online tools for{" "}
              <span className="text-white/70">images</span>, documents & more.
            </h1>

            <p className="mt-4 text-sm leading-6 text-white/70">
              Start with image compression, conversion, and resizing — designed
              for speed, privacy, and the best SEO structure for tool pages.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/tools/image-compressor"
                className="rounded-xl bg-white px-5 py-3 text-sm font-black text-neutral-950 hover:bg-neutral-200 transition"
              >
                Try Image Compressor
              </Link>
              <Link
                href="/tools"
                className="rounded-xl bg-white/10 px-5 py-3 text-sm font-bold ring-1 ring-white/15 hover:bg-white/15 transition"
              >
                View All Tools
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/60">
              <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">
                No signup
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">
                Browser processing
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">
                Instant download
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">
                SEO-ready pages
              </span>
            </div>
          </div>

          {/* Preview card */}
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/15 p-5">
            <div className="rounded-2xl bg-gradient-to-b from-white/10 to-white/5 ring-1 ring-white/10 p-5">
              <div className="flex items-center justify-between">
                <div className="text-sm font-black">Image Compressor</div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-[11px] font-bold text-emerald-200 ring-1 ring-emerald-400/30">
                  Live
                </span>
              </div>

              <div className="mt-4 rounded-2xl border border-dashed border-white/25 p-6 text-center">
                <div className="text-sm font-bold">Drop image here</div>
                <div className="mt-1 text-xs text-white/60">
                  Reduce size with quality slider + WebP output
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                  <div className="text-[11px] text-white/60">Original</div>
                  <div className="mt-1 text-lg font-black">4.8 MB</div>
                </div>
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                  <div className="text-[11px] text-white/60">Compressed</div>
                  <div className="mt-1 text-lg font-black">1.2 MB</div>
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                <div className="flex-1 rounded-xl bg-white/10 px-4 py-2 text-sm font-bold ring-1 ring-white/15 text-center">
                  Compress
                </div>
                <div className="flex-1 rounded-xl bg-white px-4 py-2 text-sm font-black text-neutral-950 text-center">
                  Download
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="grid gap-4 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-3xl bg-white/5 ring-1 ring-white/15 p-6"
            >
              <div className="text-lg font-black">{f.title}</div>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools grid */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black">Image Tools</h2>
            <p className="mt-1 text-sm text-white/60">
              We’ll build one by one, then scale to docs/audio.
            </p>
          </div>
          <Link
            href="/tools"
            className="text-sm font-bold text-white/70 hover:text-white transition"
          >
            See all →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {imageTools.map((t) => (
            <Link
              key={t.name}
              href={t.href}
              className="group rounded-3xl bg-white/5 ring-1 ring-white/15 p-5 hover:bg-white/10 transition"
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-black">{t.name}</div>
                <span
                  className={[
                    "rounded-full px-2.5 py-1 text-[11px] font-bold ring-1",
                    t.badge === "Live"
                      ? "bg-emerald-400/15 text-emerald-200 ring-emerald-400/30"
                      : "bg-white/10 text-white/70 ring-white/15",
                  ].join(" ")}
                >
                  {t.badge}
                </span>
              </div>
              <p className="mt-2 text-sm text-white/70">{t.desc}</p>
              <div className="mt-4 text-xs font-bold text-white/60 group-hover:text-white/80 transition">
                Open tool →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-white/60">
            © {new Date().getFullYear()} Online Tools • Built for speed + SEO
          </div>
          <div className="flex gap-4 text-xs">
            <Link href="/tools" className="text-white/60 hover:text-white">
              Tools
            </Link>
            <Link href="/tools/image-compressor" className="text-white/60 hover:text-white">
              Compressor
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
