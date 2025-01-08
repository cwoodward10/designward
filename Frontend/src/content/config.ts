// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

const noteStates = ['concept', 'under construction', 'operational'] as const;

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

const portfolioProject = defineCollection({
  type: 'content',
  schema: ({image}) => z.object({
    name: z.string(),
    tagline: z.string(),
    image: image().optional()
  })
})

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'thoughts': thoughtCollection,
  'portfolio': portfolioProject
};