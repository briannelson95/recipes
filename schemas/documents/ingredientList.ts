import { defineArrayMember, defineField, defineType } from 'sanity';

export const ingredient = defineType({
    name: 'ingredient',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'reference',
            to: { type: 'mediaLibrary'}
        }),
        defineField({
            name: 'notes',
            type: 'text'
        })
    ]
})