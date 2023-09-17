import { defineType, defineField, FileOptions } from 'sanity';
import { buildingConfigFieldSet, densityField } from './helpers/buildingConfigFields';

const parkway = defineType({
    name: 'parkway',
    title: 'Parkway',
    type: 'document',
    fieldsets: [
        { name: 'general', title: 'General Information'},
        buildingConfigFieldSet
    ],
    fields: [
        defineField({
            name: 'file',
            title: 'File',
            description: 'The gltf representation of the parkway mesh',
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
        }),
        densityField
    ]
})

export default parkway;