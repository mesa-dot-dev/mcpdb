export const vpc = new sst.aws.Vpc("mcpdb-vpc");

export const cluster = new sst.aws.Cluster("mcpdb-cluster", {
  vpc,
});

cluster.addService("web", {
  loadBalancer: {
    ports: [{ listen: "80/http", forward: "3000/http" }],
  },
  dev: {
    command: "pnpm next dev",
  },
});
