// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

const noteStates = ['concept', 'under construction', 'operational'] as const;
const designMediums = ['architecture', 'urban planning', 'product', 'web', 'physical'] as const;

// 2. Define a `type` and `schema` for each collection
const thoughtCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string().optional(),
    lastEdited: z.string(),
    state: z.enum(noteStates),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

const featuredProjectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string().optional(),
    url: z.string().url(),
    employer: z.string(),
    role: z.string(),
    image: z.string().optional(),
  })
})

const basicPortfolioCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    employer: z.string(),
    role: z.string(),
    description: z.string(),
    medium: z.enum(designMediums),
    image: z.string().optional(),
  })
})

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'thoughts': thoughtCollection,
  'featured': featuredProjectsCollection,
  'projects': basicPortfolioCollection
};