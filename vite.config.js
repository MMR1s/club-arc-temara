import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/club-arc-temara/",
  server: {
    host: "0.0.0.0", // Allows local network access
    port: 3000, // Optionally set the port (default is 3000)
  },
});
