import React from 'react';
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from './sanity.RichTextComponent';
import Image from 'next/image';
import urlFor from '@/lib/urlFor';

export default function Recipe({data}: any) {
    const ingredients: any[] = data.ingredientList 
    // console.log(data)

    return (
        <div className='relative w-full mt-[120px] mb-10 border-[20px] border-sky-50 bg-sky-50 text-blue-950'>
            <div className='absolute -mt-[100px] -ml-[100px] left-[50%]'>
                <div className='bg-white border-white border-[10px] rounded-xl w-[200px] h-[200px]'>
                    {data.featuredImage ? 
                        <div style={{backgroundImage: `url(${urlFor(data.featuredImage.media.image).url()})`}} className='w-full h-full rounded-lg bg-cover bg-no-repeat' />
                        : <div className='bg-sky-400 rounded-lg w-full h-full' />
                    }
                </div>
            </div>
            <div className='p-2 pt-28 text-center bg-blue-100 text-blue-800'>
                <h2 className='text-3xl font-bold'>{data.title}</h2>
                <p>Servings: {data.serving.number} {data.serving.unit}</p>
                <p>Total Time: {data.time.number} {data.time.unit}</p>
                <div className='text-left text-blue-400'>
                    <p>Made by: {data.chef.name}</p>
                </div>
            </div>
            <div className='mt-2'>
                <h3 className='text-2xl font-semibold'>Ingredients</h3>
                <ul>
                    {ingredients.map((item, index) => (
                        <li key={index} className='lowercase'>
                            {item.fraction ? item.wholeNumber ? `${item.wholeNumber} ${item.fraction}` : item.fraction : item.wholeNumber} {item.unit} {item.ingredient.name}
                        </li>
                    ))}
                </ul>
                <br className='my-2' />
                <h3 className='text-2xl font-semibold'>Instructions</h3>
                <PortableText components={RichTextComponent} value={data.instructions} />
            </div>
        </div>
    )
}
