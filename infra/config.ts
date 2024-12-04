export const secret = {
  // GithubAppSecret: new sst.Secret("GithubAppSecret"),
};

export const allSecrets = Object.values(secret);

export const config = new sst.Linkable("Config", {
  properties: {
    IS_LOCAL: $dev,
  },
});

export const allConfig = Object.values(config.properties);
