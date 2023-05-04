import { defineField, defineType } from 'sanity';

export const seo = defineType({
    name: 'seo',
    title: 'Search Engine Optimization',
    type: 'object',
    fields: [
        defineField({
            name: 'metatitle',
            title: 'Metatitle',
            type: 'string',
            validation: Rule => Rule.max(96)
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text'
        }),
        defineField({
            name: 'image',
            title: 'image',
            type: 'image'
        }),
        defineField({
            name: 'keywords',
            title: 'Keywords',
            type: 'array',
            of: [
                {type: 'string'}
            ]
        }),
        defineField({
            name: 'index',
            title: 'Index Page',
            type: 'boolean',
            initialValue: false
        })
    ],
})