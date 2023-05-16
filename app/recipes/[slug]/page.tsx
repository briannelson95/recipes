import Recipe from '@/components/Recipe'
import { singleRecipe } from '@/lib/queries'
import { client } from '@/lib/sanity.client'
import urlFor from '@/lib/urlFor'
import { Metadata } from 'next'
import { groq } from 'next-sanity'
import Link from 'next/link'
import React from 'react';

interface Props {
    params: {
        slug: string
    }
}

export const revalidate = 500;

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
        description: `Best ${recipe.title} recipe from No-Frills Recipes`,
        openGraph: {
            images: [
                {
                    url: `${urlFor(recipe.featuredImage.media.image).url()}`,
                    width: 800,
                    height: 600,
                  },
            ]
        }
    };
}

export default async function SingleRecipe({params: {slug}}: Props) {
    const recipe: any = await client.fetch(singleRecipe, { slug });

    return (
        <main>
            <div>
                <Link href={'/recipes'}>← Back to recipes</Link>
            </div>
            <section className='flex justify-center'>
                <Recipe data={recipe} />
            </section>
        </main>
    )
}
