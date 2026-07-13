/** Prefixa paths com o `base` do Astro (ex.: /astro-game/ no GitHub Pages). */
export function path(p: string = "/"): string {
  const raw = import.meta.env.BASE_URL;
  const base = raw.endsWith("/") ? raw : `${raw}/`;
  if (p === "/" || p === "") return base;
  const clean = p.startsWith("/") ? p.slice(1) : p;
  return `${base}${clean}`;
}
