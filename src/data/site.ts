export const site = {
  name: "Studio",
  tagline: "Jogos indie feitos com cuidado.",
  description:
    "Site oficial do Studio — notícias, notas de atualização e nossos jogos.",
  url: "https://edsonottoni.github.io/astro-game",
  social: {
    twitter: "https://twitter.com/",
    discord: "https://discord.gg/",
    youtube: "https://youtube.com/",
  },
  email: "hello@studio.example.com",
} as const;

export const categories = {
  news: "Notícias",
  patch: "Patch notes",
  announcement: "Divulgação",
} as const;

export type Category = keyof typeof categories;
