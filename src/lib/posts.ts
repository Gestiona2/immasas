import fs from "node:fs";
import path from "node:path";
import { fechaLegible } from "./fecha";

export interface Post {
  slug: string;
  titulo: string;
  fecha: string;
  imagen: string;
  extracto: string;
}

/** Lee los artículos de src/content/blog, el más reciente primero. */
export function leerPosts(): Post[] {
  const dir = path.join(process.cwd(), "src/content/blog");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const contenido = fs.readFileSync(path.join(dir, f), "utf8");
      const campo = (k: string) => contenido.match(new RegExp(`^${k}:\\s*(.+)$`, "m"))?.[1].trim().replace(/^"|"$/g, "") ?? "";
      const cuerpo = contenido.replace(/^---[\s\S]*?---/, "").trim();
      const parrafo = cuerpo.split(/\n{2,}/).find((p) => p.trim() && !p.trim().startsWith("-"));
      const extracto = (parrafo || "").replace(/\s+/g, " ").trim();
      return {
        iso: campo("pubDate"),
        slug: f.replace(".md", ""),
        titulo: campo("title") || f,
        fecha: fechaLegible(campo("pubDate")),
        imagen: campo("imagen"),
        extracto: extracto.length > 180 ? extracto.slice(0, 180).trimEnd() + "…" : extracto,
      };
    })
    .sort((a, b) => b.iso.localeCompare(a.iso))
    .map(({ iso, ...p }) => p);
}
