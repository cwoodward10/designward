import { defineType, defineField, FileOptions } from 'sanity';

const blockBase = defineType({
    name: 'blockBase',
    title: 'Block',
    type: 'document',
    fieldsets: [
        { name: 'general', title: 'General Information'},
    ],
    fields: [
        defineField({
            name: 'file',
            title: 'File',
            description: 'The gltf representation of the block mesh',
            type: 'file',
            options: {
                accepts: '.gltf',
            } as FileOptions
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            fieldset: 'general'
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{type: 'author'}],
            fieldset: 'general'
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            fieldset: 'general'
        })
    ]
})

export default blockBase;