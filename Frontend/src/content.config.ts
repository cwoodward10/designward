import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const noteStates = ['concept', 'under construction', 'operational'] as const;

const thoughts = defineCollection({
  loader: glob({ pattern: "**/*.mdoc", base: "./src/content/thoughts" }),
  schema: z.object({
    title: z.string(),
    tagline: z.string().optional(),
    lastEdited: z.string(),
    state: z.enum(noteStates),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdoc", base: "./src/content/projects" }),
  schema: ({image}) => z.object({
    name: z.string(),
    tagline: z.string(),
    image: image().optional()
  })
})

export const collections = { thoughts, projects };