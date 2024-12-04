export const web = new sst.aws.StaticSite("Web", {
  build: {
    command: "pnpm run build",
    output: "dist",
  },
  // domain: appDomain,
  dev: {
    command: "pnpm run dev",
    url: "http://localhost:5173",
  },
  environment: {
    VITE_STAGE: $app.stage,
  },
});

export const outputs = {
  frontent: web.url,
};
