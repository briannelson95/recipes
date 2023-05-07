import Recipe from '@/components/Recipe'
import { singleRecipe } from '@/lib/queries'
import { client } from '@/lib/sanity.client'
import { Metadata } from 'next'
import { groq } from 'next-sanity'
import React from 'react'

interface Props {
    params: {
        slug: string
    }
}

export async function generateStaticParams(){
    const recipes = groq`*[_type == "recipes"]{ slug }`;

    const slugs: any[] = await client.fetch(recipes);
    const slugRoutes = slugs.map((slug) => slug.slug.current);

    return slugRoutes.map(slug => ({
        slug
    }))
}

export async function generateMetadata({params: {slug}}: Props) {
    const recipe: any = await client.fetch(singleRecipe, { slug });

    return {
        title: `${recipe.title} Recipe from No-Frills Recipes`,
        description: `Best ${recipe.title} recipe from No-Frills Recipes`
    };
}

export default async function SingleRecipe({params: {slug}}: Props) {
    const recipe: any = await client.fetch(singleRecipe, { slug });

    return (
        <main>
            <div className='flex justify-center'>
                <Recipe data={recipe} />
            </div>
        </main>
    )
}
