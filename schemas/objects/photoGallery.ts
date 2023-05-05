import { defineArrayMember, defineField, defineType } from 'sanity';

export const photoGallery = defineType({
    name: 'photoGallery',
    title: 'Photo Gallery',
    type: 'array',
    options: {
        layout: 'grid'
    },
    of: [
        defineArrayMember({
            type: 'reference',
            to: {type: 'mainImage'}
        })
    ]
})