module.exports = {
  apps: [
    {
      name: "juicydate",
      script: "npm",
      args: "start",
      watch: true,
      ignore_watch: [".git", "node_modules", "test"],
    },
  ],
};
