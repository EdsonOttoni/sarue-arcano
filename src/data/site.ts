export const site = {
  name: "Saruê Arcano",
  tagline: "Jogos indie feitos com cuidado.",
  description:
    "Site oficial da Saruê Arcano — notícias, notas de atualização e nossos jogos.",
  url: "https://edsonottoni.github.io/astro-game",
  social: {
    twitter: "https://twitter.com/",
    discord: "https://discord.gg/",
    youtube: "https://youtube.com/",
  },
  email: "contato@saruearcano.com",
} as const;

export const categories = {
  news: "Notícias",
  patch: "Patch notes",
  announcement: "Divulgação",
} as const;

export type Category = keyof typeof categories;
