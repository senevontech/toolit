export type ToolCategory = "image";

export type ToolExecution = "client" | "server" | "hybrid";

export type ToolDef = {
  slug: string;
  name: string;
  category: ToolCategory;
  description: string;
  keywords: string[];
  execution: ToolExecution;
};
