import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // base 的寫法：
  // base: '/Repository 的名稱/'
  base: "/2025-branded-website/",
  plugins: [react()],
});
