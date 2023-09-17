import { defineField } from "sanity";

const post = {
    title: 'Blog Post',
    name: 'blogPost',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }), 
        defineField({
            name: 'slug',
            title: 'slug',
            type: 'slug',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            readOnly: true,
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{type: 'author'}],
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                { type: 'block'},
            ],
        }),
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  }
  
  export default post;