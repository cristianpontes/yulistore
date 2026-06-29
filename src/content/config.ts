import { defineCollection, z } from 'astro:content';

// Productos — un archivo Markdown por producto en src/content/products/<slug>.md
// Sveltia CMS escribe estos campos; Astro los valida al compilar (npm run build).
const products = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
    category: z.string().optional(),
    // Rutas absolutas a /images/products/... (subidas desde el CMS).
    images: z.array(z.string()).min(1),
    colors: z
      .array(
        z.object({
          name: z.string(),
          hex: z.string().optional(),
        })
      )
      .default([]),
    sizes: z.array(z.string()).default([]),
    prices: z
      .array(
        z.object({
          quantity: z.number(),
          price: z.number(),
        })
      )
      .default([]),
    featured: z.boolean().default(false),
    soldOut: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

// Configuración global del sitio — src/content/settings/site.json
const settings = defineCollection({
  type: 'data',
  schema: z.object({
    whatsappNumber: z.string(),
    instagramHandle: z.string(),
    currency: z.string().default('$'),
    announcement: z.string().optional(),
  }),
});

export const collections = { products, settings };
