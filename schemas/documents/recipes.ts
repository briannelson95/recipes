import { defineField, defineType } from 'sanity';

export const recipes = defineType({
    name: 'recipes',
    title: 'Recipes',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        }),
        defineField({
            name: 'featuredImage',
            title: 'Featured Image',
            type: 'reference',
            to: {
                type: 'mediaLibrary',
                // components: {
                //     preview: MediaPreview
                // }
            },
        }),
        
    ],
})