import { preview } from "vite";

await preview({
  preview: {
    host: "0.0.0.0",
    port: Number(process.env.PORT) || 4173,
    allowedHosts: ["give-me-job.vibenest.net"],
  },
});
