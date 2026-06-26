// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Set this to your production domain when you deploy.
  site: "https://example.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
