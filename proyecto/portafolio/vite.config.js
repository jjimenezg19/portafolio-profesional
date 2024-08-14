import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
      "~/": `${path.resolve(__dirname, "public")}/`,
      "tailwind.config.js": path.resolve(__dirname, "tailwind.config.js")
    }
  }
})
