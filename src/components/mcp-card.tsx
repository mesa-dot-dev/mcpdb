import { Mcp, McpCategory } from "@/types/mcp";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Book,
  Briefcase,
  Computer,
  Globe,
  Search,
  Zap,
  Wrench,
  MessageCircle,
  Code,
  Database,
  File,
  Icon,
} from "lucide-react";
import { CodeBlock } from "./code-block";
import { cn } from "@/lib/utils";

const CategoryToIcon = (
  category: McpCategory,
  className: string | undefined
) => {
  switch (category) {
    case "Search":
      return <Search className={cn("w-4 h-4", className)} />;
    case "Productivity":
      return <Briefcase className={cn("w-4 h-4", className)} />;
    case "Browse":
      return <Globe className={cn("w-4 h-4", className)} />;
    case "External Knowledge":
      return <Book className={cn("w-4 h-4", className)} />;
    case "Automation":
      return <Wrench className={cn("w-4 h-4", className)} />;
    case "Dev Tools":
      return <Zap className={cn("w-4 h-4", className)} />;
    case "Computer Use":
      return <Computer className={cn("w-4 h-4", className)} />;
    case "Chat":
      return <MessageCircle className={cn("w-4 h-4", className)} />;
    case "Communication":
      return <MessageCircle className={cn("w-4 h-4", className)} />;
    case "Database":
      return <Database className={cn("w-4 h-4", className)} />;
    case "Files":
      return <File className={cn("w-4 h-4", className)} />;
    case "Coding":
      return <Code className={cn("w-4 h-4", className)} />;
    default:
      return null;
  }
};

export function McpCardIcon({
  category,
  className,
}: {
  category: McpCategory;
  className?: string;
}) {
  const Icon = CategoryToIcon(category, className);
  return <div>{Icon}</div>;
}

export function McpCard({ mcp }: { mcp: Mcp }) {
  return (
    <Card className="hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="h-[128px]">
        <CardTitle>{mcp.name}</CardTitle>
        <CardDescription className="line-clamp-2">
          {mcp.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <CodeBlock code={mcp.usage} language="json" />
        <div className="flex gap-2">
          {mcp.categories.map((category) => {
            return (
              <div key={category} className="flex items-center gap-2">
                <McpCardIcon category={category} />
                {category}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
