import { defineField, defineType } from "sanity";

const author = defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),
        defineField({
            name: 'avatar',
            title: 'Avatar',
            type: 'image'
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            description: 'A short bio about the Author.',
            type: 'text'
        }),
        defineField({
            name: 'website',
            title: 'Website',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: Rule => Rule.email().warning('Must be a valid Email.'),
        })
    ]
})

export default author;