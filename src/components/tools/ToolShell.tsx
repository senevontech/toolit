import type { ToolDef } from "@/lib/tools/types";

export default function ToolShell({
  tool,
  children,
}: {
  tool: ToolDef;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-black">{tool.name}</h1>
        <p className="text-sm text-neutral-600">{tool.description}</p>
        <div className="text-xs text-neutral-500">Runs in: {tool.execution}</div>
      </div>

      <div className="mt-8 rounded-2xl border bg-white p-5">{children}</div>

      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-black">How it works</h2>
        <p className="text-sm text-neutral-700">
          Upload your image, choose quality, and download instantly. This tool runs locally in your browser.
        </p>

        <h2 className="text-xl font-black">FAQ</h2>
        <div className="space-y-2 text-sm text-neutral-700">
          <p>
            <b>Is it safe?</b> Yes—your image stays on your device for this tool.
          </p>
          <p>
            <b>What formats?</b> JPG/PNG/WebP input supported (output as JPG/WebP).
          </p>
        </div>
      </section>
    </main>
  );
}
