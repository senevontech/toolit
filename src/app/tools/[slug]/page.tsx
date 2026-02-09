import { notFound } from "next/navigation";
import ToolShell from "@/components/tools/ToolShell";
import ImageCompressorClient from "@/components/tools/ImageCompressorClient";
import { getTool } from "@/lib/tools/registry";
import { toolMeta } from "@/lib/tools/seo";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params; // ✅ unwrap async params
  const tool = getTool(slug);
  if (!tool) return {};
  return toolMeta(tool);
}

export default async function ToolBySlugPage({ params }: { params: Params }) {
  const { slug } = await params; // ✅ unwrap async params
  const tool = getTool(slug);
  if (!tool) return notFound();

  return (
    <ToolShell tool={tool}>
      {tool.slug === "image-compressor" ? <ImageCompressorClient /> : null}
    </ToolShell>
  );
}
