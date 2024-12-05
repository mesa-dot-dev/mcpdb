"use client";

import { CodeBlock as CodeBlockComponent } from "react-code-block";
import { useCopyToClipboard } from "react-use";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

interface CodeBlockProps {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [state, copyToClipboard] = useCopyToClipboard();

  const copyCode = () => {
    // Logic to copy `code`
    copyToClipboard(code);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="relative">
      <CodeBlockComponent code={code} language={language}>
        <CodeBlockComponent.Code className="bg-gray-900 p-6 rounded-xl shadow-lg overflow-x-auto">
          <div className="table-row">
            <CodeBlockComponent.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />
            <CodeBlockComponent.LineContent className="table-cell">
              <CodeBlockComponent.Token />
            </CodeBlockComponent.LineContent>
          </div>
        </CodeBlockComponent.Code>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-2 right-2"
          onClick={copyCode}
        >
          <Copy className="w-4 h-4" />
        </Button>
      </CodeBlockComponent>
    </div>
  );
}
