import { MediaPreview } from '@/components/SanityPreviewComponents';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const recipes = defineType({
    name: 'recipes',
    title: 'Recipes',
    type: 'document',
    fieldsets: [
        {
            name: 'serving',
            title: 'Serving/Time',
            options: {
                columns: 2
            }
        }
    ],
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
                components: {
                    preview: MediaPreview
                }
            },
        }),
        defineField({
            name: 'serving',
            type: 'object',
            fieldset: 'serving',
            fields: [
                defineField({
                    name: 'number',
                    title: 'Number',
                    type: 'number',
                }),
                defineField({
                    name: 'unit',
                    type: 'string',
                })
            ],
            preview: {
                select: {
                    number: 'serving.number',
                    unit: 'serving.unit',
                },
                prepare({
                    number,
                    unit,
                }) {
                    return {
                        title: `${number} ${unit}`,
                    }
                }
            }
        }),
        defineField({
            name: 'time',
            title: 'Time to Make',
            type: 'object',
            fieldset: 'serving',
            fields: [
                defineField({
                    name: 'number',
                    title: 'Number',
                    type: 'number',
                }),
                defineField({
                    name: 'unit',
                    type: 'string',
                })
            ],
            preview: {
                select: {
                    number: 'time.number',
                    unit: 'time.unit',
                },
                prepare({
                    number,
                    unit,
                }) {
                    return {
                        title: `${number} ${unit}`,
                    }
                }
            }
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
                                list: ["grams", "mL", "cup", "Tbsp", "tsp", "lbs"],
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
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: {type: 'category'}
                }
            ]
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'photoGallery',
        }),
    ],
})