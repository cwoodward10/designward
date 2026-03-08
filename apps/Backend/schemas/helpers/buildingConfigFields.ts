import { defineType, defineField, FileOptions } from 'sanity';

const BUILDING_CONFIG_NAME = 'buildingConfig';

export const buildingConfigFieldSet = { 
    name: BUILDING_CONFIG_NAME, 
    title: 'Building Configuration'
};

export const densityField = defineField({
    name: 'density',
    title: 'Level of Density',
    description: 'The level of density associated with this building. 1 being the lowest and 5 being the highest.',
    type: 'number',
    initialValue: 1,
    options: {
        list: [
            { title: 'Suburban', value: 0 },
            { title: 'Urban Residential', value: 1 },
            { title: 'Mixed Use', value: 2 },
            { title: 'High Rise', value: 3 },
        ]
    },
    fieldset: BUILDING_CONFIG_NAME
})

export const gridXField = defineField({
    name: 'gridCountX',
    title: 'Grid Count X',
    description: 'The number of plot grids that this building takes up in the X direction.',
    type: 'number',
    fieldset: BUILDING_CONFIG_NAME
})
export const gridYField = defineField({
    name: 'gridCountY',
    title: 'Grid Count Y ',
    description: 'The number of plot grids that this building takes up in the Y direction.',
    type: 'number',
    fieldset: BUILDING_CONFIG_NAME
})