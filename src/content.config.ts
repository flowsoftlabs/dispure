
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({
    base: './src/content/articles',
    pattern: '**/*.md',
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),

    // 기존 발행일
    date: z.coerce.date(),

    // 새 발행 일시: 기존 글과 호환
    publishedAt: z.preprocess(
      (value) =>
        value === '' || value === null
          ? undefined
          : value,
      z.coerce.date().optional()
    ),

    category: z.enum([
      'collection',
      'favorite',
      'widgets',
      'development',
      'news',
    ]),

    cover: z.string().optional(),

    pinned: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
