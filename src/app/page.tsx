import { McpCard } from "@/components/mcp-card";
import { MCP_DIRECTORY } from "@/lib/directory";
import { searchParamsCache } from "./search-params";
import { type SearchParams } from "nuqs/server";
const Page = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { tag } = await searchParamsCache.parse(searchParams);
  const filteredMcp = tag
    ? MCP_DIRECTORY.filter((mcp) => mcp.categories.includes(tag))
    : MCP_DIRECTORY;
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {filteredMcp.map((mcp) => (
          <McpCard key={mcp.name} mcp={mcp} />
        ))}
      </main>
    </div>
  );
};

export default Page;
