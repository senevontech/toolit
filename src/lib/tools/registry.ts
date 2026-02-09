import type { ToolDef } from "./types";

export const TOOLS: ToolDef[] = [
  {
    slug: "image-compressor",
    name: "Image Compressor",
    category: "image",
    description: "Compress JPG/PNG/WebP images in your browser with quality control and instant download.",
    keywords: ["image compressor", "compress jpg", "compress png", "reduce image size", "webp compressor"],
    execution: "client",
  },
];

export function getTool(slug: string) {
  return TOOLS.find((t) => t.slug === slug) ?? null;
}
