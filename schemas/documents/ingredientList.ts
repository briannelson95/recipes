import { defineArrayMember, defineField, defineType } from 'sanity';
import {MenuIcon} from '@sanity/icons'
import { MediaPreview } from '@/components/SanityPreviewComponents';

export const ingredient = defineType({
    name: 'ingredient',
    title: 'Ingredients',
    type: 'document',
    icon: MenuIcon,
    fields: [
        defineField({
            name: 'name',
            title: 'name',
            type: 'string',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'reference',
            to: { type: 'mediaLibrary'},
            components: {
                preview: MediaPreview
            }
        }),
        defineField({
            name: 'notes',
            title: 'Notes',
            type: 'text'
        })
    ]
})