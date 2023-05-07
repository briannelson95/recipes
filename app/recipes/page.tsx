import RecipeCard from '@/components/RecipeCard'
import { recipes } from '@/lib/queries'
import { client } from '@/lib/sanity.client'
import urlFor from '@/lib/urlFor'
import React from 'react'

export default async function Recipes() {
    const allRecipes = await client.fetch(recipes)

    return (
        <div className='mx-2 max-w-6xl md:mx-auto'>
            Recipes
            <div className='grid grid-cols-1 md:grid-cols-3'>
                {allRecipes.map((item: any, index: any) => (
                    <RecipeCard 
                        key={index}
                        title={item.title}
                        slug={item.slug.current}
                        image={urlFor(item.featuredImage.media.image).url()}
                        categories={item.categories}
                        time={`${item.time.number} ${item.time.unit}`}
                        servings={`${item.serving.number} ${item.serving.unit}`}
                    />
                ))}
            </div>
        </div>
    )
}
