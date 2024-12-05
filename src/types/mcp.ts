export interface Mcp {
  name: string;
  description: string;
  url: string;
  categories: string[];
  usage: string;
}

export const McpCategories = [
  "Search",
  "Productivity",
  "Browse",
  "External Knowledge",
  "Automation",
  "Dev Tools",
  "Computer Use",
  "Chat",
  "Communication",
  "Database",
  "Files",
  "Coding",
];

export type McpCategory = (typeof McpCategories)[number];
