// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

const noteStates = ['concept', 'under construction', 'operational'] as const;
// 2. Define a `type` and `schema` for each collection
const thoughtCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lastEdited: z.string(),
    state: z.enum(noteStates),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

const basicPortfolioCollection = defineCollection({
  type: 'data',
  schema: z.object({

  })
})

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'thoughts': thoughtCollection,
};