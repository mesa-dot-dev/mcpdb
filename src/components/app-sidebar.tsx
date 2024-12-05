"use client";
import { McpCategories } from "@/types/mcp";
import {
  Sidebar,
  SidebarGroup,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupAction,
} from "./ui/sidebar";
import { McpCardIcon } from "./mcp-card";
import Link from "next/link";
import { searchParamsCache, searchParamsParsers } from "@/app/search-params";
import { type SearchParams } from "nuqs/server";
import { useQueryState, parseAsString, useQueryStates } from "nuqs";
import { X } from "lucide-react";
import { Button } from "./ui/button";

export function AppSidebar() {
  const [{ tag }, setSearchParams] = useQueryStates(searchParamsParsers, {
    shallow: false,
  });
  return (
    <Sidebar>
      <SidebarHeader>mcp.directory</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          {!!tag && (
            <SidebarGroupAction
              title="Clear Filter"
              onClick={() => setSearchParams({ tag: null })}
            >
              <X /> <span className="sr-only">Clear Filter</span>
            </SidebarGroupAction>
          )}
          <SidebarGroupContent>
            <SidebarMenu>
              {McpCategories.map((category) => (
                <SidebarMenuItem key={category}>
                  <SidebarMenuButton
                    asChild
                    isActive={tag === category}
                    onClick={() => {
                      if (tag === category) {
                        setSearchParams({ tag: null });
                      } else {
                        setSearchParams({ tag: category });
                      }
                    }}
                  >
                    <Link
                      href={`/?tag=${category}`}
                      className="flex items-center gap-2"
                    >
                      <McpCardIcon category={category} className="w-4 h-4" />
                      <span>{category}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
