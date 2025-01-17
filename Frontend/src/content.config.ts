import { z, defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';

export const NoteState = ['concept', 'under construction', 'operational'] as const;
export const ThoughtType = ['long-form', 'short-form'] as const;

const thoughts = defineCollection({
  loader: glob({ pattern: "**/*.mdoc", base: "./src/content/thoughts" }),
  schema: ({image}) => z.object({
    title: z.string(),
    tagline: z.string().optional(),
    created: z.string(),
    lastEdited: z.string().transform((str) => new Date(str)),
    type: z.enum(ThoughtType),
    subType: z.string().optional(),
    state: z.enum(NoteState),
    tags: z.array(z.string()).optional(),
    showTitleImage: z.boolean().optional(),
    image: z.object({
      src: image().or(z.string()),
      alt: z.string().optional(),
    }).optional(),
    inlineImages: z.array(z.object({
      src: image().or(z.string()),
      alt: z.string()
    })).optional(),
    relatedPosts: z.array(reference('thoughts')).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdoc", base: "./src/content/projects" }),
  schema: ({image}) => z.object({
    name: z.string(),
    tagline: z.string(),
    image: z.object({
      src: image().or(z.string()),
      alt: z.string().optional(),
    }).optional(),
    inlineImages: z.array(z.object({
      src: image().or(z.string()),
      alt: z.string()
    })).optional()
  })
})

export const collections = { thoughts, projects };