import { defineType, defineField, FileOptions } from 'sanity';
import { buildingConfigFieldSet, densityField, gridXField, gridYField } from './helpers/buildingConfigFields';

const building = defineType({
    name: 'building',
    title: 'Building',
    type: 'document',
    fieldsets: [
        { name: 'general', title: 'General Information'},
        buildingConfigFieldSet
    ],
    fields: [
        defineField({
            name: 'file',
            title: 'File',
            description: 'The gltf representation of the building mesh',
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
        densityField,
        gridXField,
        gridYField
    ]
})

export default building;