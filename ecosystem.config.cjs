module.exports = {
  apps: [
    {
      name: "meetnfuck",
      script: "npm",
      args: "start",
      watch: true,
      ignore_watch: [".git", "node_modules", "test"],
    },
  ],
};
