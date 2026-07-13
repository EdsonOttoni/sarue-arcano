import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(["news", "patch", "announcement"]),
    game: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const games = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/games" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      status: z.string(),
      cover: image(),
      links: z
        .object({
          steam: z.string().url().optional(),
          itch: z.string().url().optional(),
          website: z.string().url().optional(),
        })
        .default({}),
      featured: z.boolean().default(false),
      order: z.number().default(0),
    }),
});

export const collections = { posts, games };
