import { defineField, defineType } from 'sanity';
import {TagIcon} from '@sanity/icons'

export const category = defineType({
    name: 'category',
    title: 'Categories',
    type: 'document',
    icon: TagIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text'
        })
    ],
})