# Studio — site de jogos

Blog + catálogo de jogos em **Astro** e **Tailwind**. Conteúdo em Markdown.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Publicar conteúdo

- **Post:** crie um `.md` em `src/content/posts/`
- **Jogo:** crie um `.md` (e capa) em `src/content/games/`

Troque o nome do estúdio em [`src/data/site.ts`](src/data/site.ts).

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages

O site está configurado para o repositório `astro-game`:

- `site` / `base` em [`astro.config.mjs`](astro.config.mjs)
- Deploy automático em [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

No GitHub: **Settings → Pages → Source: GitHub Actions**.

Após o push em `main`, o site fica em:  
https://edsonottoni.github.io/astro-game/
