import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { trpc, trpcClient } from "./_trpc/client";
import { StrictMode } from "react";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TRPCProvider from "./_trpc/provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "mcpdb",
  description: "Directory of MCP Servers",
};

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <StrictMode>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <TRPCProvider>{children}</TRPCProvider>
          <Toaster />
        </body>
      </html>
    </StrictMode>
  );
}
