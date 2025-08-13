// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
var blogs = defineCollection({
  name: "blogs",
  directory: "src/content/blog",
  include: "**/*.md",
  schema: (z) => ({
    title: z.string(),
    date: z.string(),
    updated: z.string().optional(),
    featured: z.boolean().optional().default(false),
    summary: z.string().optional(),
    keywords: z.array(z.string()).optional()
  }),
  transform: async (document) => {
    return {
      ...document,
      slug: `${document._meta.path}`
    };
  }
});
var courses = defineCollection({
  name: "courses",
  directory: "src/content/course",
  include: "**/*.md",
  schema: (z) => ({
    title: z.string(),
    date: z.string(),
    updated: z.string().optional(),
    featured: z.boolean().optional().default(false),
    summary: z.string().optional(),
    keywords: z.array(z.string()).optional()
  }),
  transform: async (document) => {
    return {
      ...document,
      slug: `${document._meta.path}`
    };
  }
});
var content_collections_default = defineConfig({
  collections: [blogs, courses]
});
export {
  content_collections_default as default
};
