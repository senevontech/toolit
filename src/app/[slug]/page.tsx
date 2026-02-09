import { notFound } from "next/navigation";
import { getTool } from "@/lib/tools/registry";
import { toolMeta } from "@/lib/tools/seo";
import ToolShell from "@/components/tools/ToolShell";
// import ImageCompressorClient from "@/components/tools/ImageCompressorClient";
import ImageCompressor from "@/components/tools/ImageCompressorClient";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const tool = getTool(params.slug);
  if (!tool) return {};
  return toolMeta(tool);
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = getTool(params.slug);
  if (!tool) return notFound();

  // For now: only one tool
  return (
    <ToolShell tool={tool}>
      {tool.slug === "image-compressor" ? <ImageCompressor /> : null}
    </ToolShell>
  );
}
