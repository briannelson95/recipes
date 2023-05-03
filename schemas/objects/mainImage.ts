import { defineField, defineType } from 'sanity';

export const mainImage = defineType({
    name: 'mainImage',
    title: 'Main Image',
    type: 'object',
    fields: [
        defineField({
            name: 'image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'alt',
            title: 'Alternative Text',
            type: 'string',
            description: 'Required for accessibility and SEO purposes',
            validation: Rule => Rule.required().max(96).warning('Keep this to less than 96 characters'),
        }),
        defineField({
            name: 'caption',
            type: 'string',
            description: 'Optional caption, not used everywhere'
        })
    ],
})