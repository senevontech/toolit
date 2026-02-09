import type { ToolDef } from "./types";

export function toolMeta(tool: ToolDef) {
  const title = `${tool.name} — Online Tools`;
  const description = tool.description;

  return {
    title,
    description,
    keywords: tool.keywords,
    alternates: { canonical: `/tools/${tool.slug}` },
    openGraph: {
      title,
      description,
      type: "website",
      url: `/tools/${tool.slug}`,
    },
  };
}
