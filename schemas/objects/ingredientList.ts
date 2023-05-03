import { defineArrayMember, defineField, defineType } from 'sanity';

export const ingredientList = defineType({
    name: 'ingredientList',
    title: 'Ingredients',
    type: 'object',
    fields: [
        defineField({
            name: '',
            type: '',
        })
    ]
})