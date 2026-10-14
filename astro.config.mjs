import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import base from "./tools/integracion-base.mjs";

// Por defecto: dominio propio del cliente, en la raíz.
// Demo en subcarpeta: SITE_URL=https://demos.emp2web.com SITE_BASE=/immasas npm run build
// (lo hace el workflow de GitHub Pages; ver .github/workflows/deploy.yml).
const carpeta = process.env.SITE_BASE ?? "";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://immasas.com",
  base: carpeta || "/",
  integrations: [base(carpeta)],
  vite: {
    plugins: [tailwindcss()],
  },
});
