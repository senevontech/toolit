import Link from "next/link";
import {
  ArrowRight,
  Image as ImageIcon,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles,
  Scan,
} from "lucide-react";

const TOOLS = [
  { title: "Image Compressor", desc: "Reduce size with quality control (JPG/PNG/WebP).", icon: Zap },
  { title: "Image Converter", desc: "Convert between formats quickly (WebP/JPG/PNG).", icon: Layers },
  { title: "Image Resizer", desc: "Resize by pixels or percent with aspect lock.", icon: Scan },
];

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center">
    <div className="text-xl font-black text-orange-600 sm:text-2xl">{value}</div>
    <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold sm:text-xs">
      {label}
    </div>
  </div>
);

export default function ToolitLandingHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* subtle background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-orange-200/50 blur-3xl" />
        <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] [background-size:26px_26px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 md:pb-20 md:pt-14 lg:px-8">
        {/* Top brand */}
        <div className="flex items-center justify-between gap-4">
          <div className="leading-tight">
            <div className="text-3xl font-black tracking-tight text-orange-600">
              TOOLIT
            </div>
            <div className="text-sm font-semibold text-neutral-500">
              Online Tools system
            </div>
          </div>

          <Link
            href="/tools"
            className="inline-flex items-center justify-center rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-bold text-orange-600 shadow-sm hover:bg-orange-50 transition"
          >
            Browse Tools
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8 items-start">
          {/* LEFT */}
          <div className="lg:col-span-7 space-y-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5">
              <Sparkles className="h-4 w-4 text-orange-600" />
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-orange-700">
                Image Tools — Phase 1
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl leading-[1.02]">
              Fast, clean, and private
              <br />
              <span className="text-orange-600">online image tools</span>
              <br />
              built for SEO.
            </h1>

            {/* Description */}
            <p className="max-w-xl text-base text-neutral-600 leading-relaxed sm:text-lg">
              TOOLIT is a lightweight online tools platform. Start with image tools
              like compression, conversion, and resizing — most processing runs in
              your browser for speed and privacy.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/tools/image-compressor"
                className="group inline-flex items-center justify-center rounded-full bg-orange-600 px-7 py-3.5 text-sm font-black text-white shadow-[0_12px_30px_rgba(249,115,22,0.25)] hover:bg-orange-700 transition"
              >
                Try Image Compressor
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/tools"
                className="inline-flex items-center justify-center rounded-full border border-orange-200 bg-white px-7 py-3.5 text-sm font-black text-orange-700 hover:bg-orange-50 transition"
              >
                View all tools
              </Link>
            </div>

            {/* Feature bullets */}
            <div className="grid gap-3 sm:grid-cols-2 pt-2">
              <div className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white/70 p-4">
                <Zap className="h-5 w-5 text-orange-600 mt-0.5" />
                <div>
                  <div className="text-sm font-extrabold text-neutral-900">Instant results</div>
                  <div className="text-xs text-neutral-600">Fast processing with simple controls.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white/70 p-4">
                <ShieldCheck className="h-5 w-5 text-orange-600 mt-0.5" />
                <div>
                  <div className="text-sm font-extrabold text-neutral-900">Privacy-first</div>
                  <div className="text-xs text-neutral-600">Most tools run locally in the browser.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white/70 p-4">
                <Layers className="h-5 w-5 text-orange-600 mt-0.5" />
                <div>
                  <div className="text-sm font-extrabold text-neutral-900">Bulk-ready</div>
                  <div className="text-xs text-neutral-600">Designed to scale to batch tools + ZIP.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white/70 p-4">
                <ImageIcon className="h-5 w-5 text-orange-600 mt-0.5" />
                <div>
                  <div className="text-sm font-extrabold text-neutral-900">Image tools first</div>
                  <div className="text-xs text-neutral-600">Docs, audio & more later.</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5 space-y-5 lg:mt-2">
            {/* Stats / Card */}
            <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,0.10)]">
              <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-orange-200/60 blur-3xl" />

              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 ring-1 ring-orange-200">
                    <ImageIcon className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-black tracking-tight text-neutral-900">
                      TOOLIT Image Suite
                    </div>
                    <div className="text-sm text-neutral-600">
                      Built one tool at a time — then scale.
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600">Performance focus</span>
                    <span className="font-bold text-orange-700">Core Web Vitals</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-100">
                    <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-orange-500 to-orange-300" />
                  </div>
                </div>

                <div className="my-6 h-px w-full bg-neutral-200" />

                <div className="grid grid-cols-5 items-center gap-3 text-center">
                  <Stat value="3" label="Image Tools" />
                  <div className="h-8 w-px bg-neutral-200 mx-auto" />
                  <Stat value="0" label="Uploads" />
                  <div className="h-8 w-px bg-neutral-200 mx-auto" />
                  <Stat value="Local" label="Processing" />
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[11px] font-extrabold tracking-wide text-orange-700">
                    FAST
                  </span>
                  <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[11px] font-extrabold tracking-wide text-orange-700">
                    PRIVATE
                  </span>
                  <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[11px] font-extrabold tracking-wide text-orange-700">
                    SEO READY
                  </span>
                </div>
              </div>
            </div>

            {/* Tool list card */}
            <div className="rounded-3xl border border-neutral-200 bg-white p-6">
              <div className="text-sm font-black text-neutral-700">
                Available / Coming Next
              </div>

              <div className="mt-4 space-y-3">
                {TOOLS.map((t) => (
                  <div
                    key={t.title}
                    className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-4 hover:bg-orange-50/50 transition"
                  >
                    <t.icon className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div>
                      <div className="text-sm font-extrabold text-neutral-900">
                        {t.title}
                      </div>
                      <div className="text-xs text-neutral-600">{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex gap-3">
                <Link
                  href="/tools"
                  className="flex-1 rounded-full border border-orange-200 bg-white px-5 py-2.5 text-center text-sm font-black text-orange-700 hover:bg-orange-50 transition"
                >
                  Tools Page
                </Link>
                <Link
                  href="/tools/image-compressor"
                  className="flex-1 rounded-full bg-orange-600 px-5 py-2.5 text-center text-sm font-black text-white hover:bg-orange-700 transition"
                >
                  Open Compressor
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer minimal */}
        <div className="mt-10 text-xs text-neutral-500">
          © {new Date().getFullYear()} TOOLIT • Online Tools system
        </div>
      </div>
    </section>
  );
}
