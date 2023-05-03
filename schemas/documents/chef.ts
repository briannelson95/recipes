import { defineField, defineType } from 'sanity';

export const chef = defineType({
    name: 'chef',
    title: 'Chef',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
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
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'blockContent',
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'featuredImage'
        },
    }
})