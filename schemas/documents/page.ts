import { defineField, defineType } from 'sanity';

export const page = defineType({
    name: 'page',
    title: 'Pages',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            },
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
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
        defineField({
            name: 'metadata',
            title: 'Metadata',
            type: 'seo'
        })
    ],
    preview: {
        select: {
            title: 'title',
            media: 'featuredImage'
        },
    }
})