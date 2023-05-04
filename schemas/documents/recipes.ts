import { defineArrayMember, defineField, defineType } from 'sanity';

export const recipes = defineType({
    name: 'recipes',
    title: 'Recipes',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Recipe Title',
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
            name: 'chef',
            title: 'Chef',
            type: 'reference',
            to: {type: 'chef'}
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
            name: 'ingredientList',
            title: 'Ingredient List',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'ingredient',
                            title: 'Ingredient',
                            type: 'reference',
                            to: {type: 'ingredient'}
                        }),
                        defineField({
                            name: "wholeNumber",
                            title: "Whole Numbers",
                            type: "number",
                        }),
                        defineField({
                            name: "fraction",
                            title: "Fraction Amount",
                            type: "string",
                            options: {
                                list: ["1/2", "1/3", "1/4", "3/4", "2/3", "1/8"],
                            },
                        }),
                        defineField({
                            name: "unit",
                            title: "Unit",
                            type: "string",
                            options: {
                                list: ["grams", "cup", "Tbsp.", "tsp."],
                            },
                        })
                    ],
                    preview: {
                        select: {
                            title: "ingredient.name",
                            name: "ingredient.name",
                            media: "ingredient.image",
                            number: "wholeNumber",
                            fraction: "fraction",
                            unit: "unit",
                        },
                        prepare({
                            title,
                            media,
                            number,
                            fraction,
                            unit = "(No unit set)",
                        }) {
                            return {
                                title,
                                subtitle: `${fraction ? number ? `${number} ${fraction}` : fraction : number} ${unit}`,
                                media,
                            };
                        }
                    }
                })
            ]
        }),
        defineField({
            name: 'instructions',
            title: 'Instructions',
            type: 'blockContent'
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'reference',
            to: {type: 'category'}
        })
    ],
})