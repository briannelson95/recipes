import RecipeCard from '@/components/RecipeCard'
import { recipes } from '@/lib/queries'
import { client } from '@/lib/sanity.client'
import urlFor from '@/lib/urlFor'
import React from 'react'

export const revalidate = 500;

export default async function Recipes() {
    const allRecipes = await client.fetch(recipes);

    const shuffleArr = (array: any[]) => {
        let currentIndex = array.length, randomIndex;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    };

    return (
        <div className='mx-2 max-w-6xl md:mx-auto'>
            Recipes
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {shuffleArr(allRecipes).map((item: any, index: any) => (
                    <RecipeCard 
                        key={index}
                        title={item.title}
                        slug={item.slug.current}
                        image={item.featuredImage ? urlFor(item.featuredImage.media.image).url() : null}
                        categories={item.categories}
                        time={`${item.time.number} ${item.time.unit}`}
                        servings={`${item.serving.number} ${item.serving.unit}`}
                    />
                ))}
            </div>
        </div>
    )
}
