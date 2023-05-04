import { defineField, defineType } from 'sanity';

export const settings = defineType({
    name: 'settings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'contact',
            title: 'Contact',
            type: 'object',
            fields: [
                defineField({
                    name: 'phone',
                    type: 'string',
                    validation: (Rule: any) =>
                        Rule.regex(
                            /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                            {
                                name: 'Phone',
                                invert: false
                            }
                        ),
                }),
                defineField({
                    name: 'email',
                    type: 'string',
                    validation: (Rule: any) =>
                        Rule.regex(
                            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                            {
                                name: 'Email',
                                invert: false
                            }
                        )
                })
            ]
        }),
        defineField({
            name: 'seo',
            type: 'seo'
        })
    ],
})