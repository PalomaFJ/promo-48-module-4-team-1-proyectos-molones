import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/promo-48-module-3-team-1/",
  server: {
    open: true,
    watch: { usePolling: true },
  },
});
