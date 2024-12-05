import { Mcp } from "@/types/mcp";

export const MCP_DIRECTORY: Mcp[] = [
  {
    name: "Filesystem",
    description: "Secure file operations with configurable access controls",
    url: "https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem",
    categories: ["Files", "Computer Use"],
    usage: `
    {
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/username/Desktop",
        "/path/to/other/allowed/dir"
      ]
    }
  }
}
`,
  },
  {
    name: "Github",
    description:
      "Repository management, file operations, and GitHub API integration",
    url: "https://github.com/modelcontextprotocol/servers/tree/main/src/github",
    categories: ["Coding", "Dev Tools"],
    usage: `
    {
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-github"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<YOUR_TOKEN>"
      }
    }
  }
}`,
  },
  {
    name: "Gitlab",
    description: "GitLab API, enabling project management",
    url: "https://github.com/modelcontextprotocol/servers/tree/main/src/gitlab",
    categories: ["Coding", "Dev Tools"],
    usage: `
    {
  "gitlab": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-gitlab"],
    "env": {
      "GITLAB_PERSONAL_ACCESS_TOKEN": "<YOUR_TOKEN>",
      "GITLAB_API_URL": "https://gitlab.com/api/v4" // Optional, for self-hosted instances
    }
  }
}
`,
  },
  {
    name: "Git",
    description: "Tools to read, search, and manipulate Git repositories",
    url: "https://github.com/modelcontextprotocol/servers/tree/main/src/git",
    categories: ["Coding", "Dev Tools"],
    usage: `
    {
  "mcpServers": {
    "git": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-git"]
    }
  }
}`,
  },
  {
    name: "Google Drive",
    description: "File access and search capabilities for Google Drive",
    url: "https://github.com/modelcontextprotocol/servers/tree/main/src/google-drive",
    categories: ["Files", "Computer Use", "Productivity"],
    usage: `
    {
  "mcpServers": {
    "gdrive": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-gdrive"
      ]
    }
  }
}`,
  },
  {
    name: "PostgreSQL",
    description: "Read-only database access with schema inspection",
    url: "https://github.com/modelcontextprotocol/servers/tree/main/src/postgresql",
    categories: ["Database"],
    usage: `
    {
  "mcpServers": {
    "postgres": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-postgres",
        "postgresql://localhost/mydb"
      ]
    }
  }
}`,
  },
  {
    name: "SQLite",
    description: "Database interaction and business intelligence capabilities",
    url: "https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite",
    categories: ["Database"],
    usage: `
    # Add the server to your claude_desktop_config.json
"mcpServers": {
  "sqlite": {
    "command": "uv",
    "args": [
      "--directory",
      "parent_of_servers_repo/servers/src/sqlite",
      "run",
      "mcp-server-sqlite",
      "--db-path",
      "~/test.db"
    ]
  }
}`,
  },
  {
    name: "Slack",
    description: "Channel management and messaging capabilities",
    url: "https://github.com/modelcontextprotocol/servers/tree/main/src/slack",
    categories: ["Communication", "Productivity"],
    usage: `
    {
  "mcpServers": {
    "slack": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-slack"
      ],
      "env": {
        "SLACK_BOT_TOKEN": "xoxb-your-bot-token",
        "SLACK_TEAM_ID": "T01234567"
      }
    }
  }
}`,
  },
  {
    name: "Sentry",
    description: "Retrieving and analyzing issues from Sentry.io",
    url: "https://github.com/modelcontextprotocol/servers/tree/main/src/sentry",
    categories: ["Error Tracking", "Dev Tools"],
    usage: `
    "mcpServers": {
  "sentry": {
    "command": "uvx",
    "args": ["mcp-server-sentry", "--auth-token", "YOUR_SENTRY_TOKEN"]
  }
}
    `,
  },
  {
    name: "Memory",
    description: "Knowledge graph-based persistent memory system",
    url: "https://github.com/modelcontextprotocol/servers/tree/main/src/memory",
    categories: ["External Knowledge", "Chat"],
    usage: `
    {
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-memory"
      ]
    }
  }
}
    `,
  },
  {
    name: "Puppeteer",
    description: "Browser automation and web scraping",
    url: "https://github.com/modelcontextprotocol/servers/tree/main/src/puppeteer",
    categories: ["Automation", "Dev Tools", "Computer Use"],
    usage: `
    {
  "mcpServers": {
    "puppeteer": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-puppeteer"]
    }
  }
}
    `,
  },
  {
    name: "Brave Search",
    description: "Web and local search using Brave's Search API",
    url: "https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search",
    categories: ["Search", "Productivity", "Browse", "External Knowledge"],
    usage: `
    {
  "mcpServers": {
    "brave-search": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-brave-search"
      ],
      "env": {
        "BRAVE_API_KEY": "YOUR_API_KEY_HERE"
      }
    }
  }
}
    `,
  },
  {
    name: "Google Maps",
    description: "Location services, directions, and place details",
    url: "https://github.com/modelcontextprotocol/servers/tree/main/src/google-maps",
    categories: ["Maps", "External Knowledge"],
    usage: `
    {
  "mcpServers": {
    "google-maps": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-google-maps"
      ],
      "env": {
        "GOOGLE_MAPS_API_KEY": "<YOUR_API_KEY>"
      }
    }
  }
}
    `,
  },
  {
    name: "Fetch",
    description: "Web content fetching and conversion for efficient LLM usage",
    url: "https://github.com/modelcontextprotocol/servers/tree/main/src/fetch",
    categories: ["External Knowledge", "Dev Tools"],
    usage: `
    "mcpServers": {
  "fetch": {
    "command": "uvx",
    "args": ["mcp-server-fetch"]
  }
}
    `,
  },
];
