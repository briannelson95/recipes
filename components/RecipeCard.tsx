"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Props {
    title: string;
    slug: string;
    image: string | null | undefined;
    categories: string[];
    time: string;
    servings: string;
}

export default function RecipeCard({title, slug, image, categories, time, servings}: Props) {
    return (
        <Link className='w-full h-64' href={`/recipes/${slug}`}>
            <div className='w-full h-full shadow-md grid grid-cols-2 gap-2 p-2'>
                <div className='w-full h-full relative flex flex-col'>
                    <h2 className='text-xl font-bold'>{title}</h2>
                    <div className='text-sm'>
                        <h3 className='font-bold p-0 m-0'>Total Time</h3>
                        <p>{time}</p>
                    </div>
                    <div className='text-sm align-bottom'>
                        <h3 className='font-bold p-0 m-0'>Servings</h3>
                        <p>{servings}</p>
                    </div>
                    <Link href={`recipes/${slug}`} className='border absolute text-center bottom-0 w-full p-1 hover:bg-blue-950 hover:text-white transition-colors duration-200'>See Recipe</Link>
                </div>
                <div style={image ? {backgroundImage: `url(${image})`} : {background: 'transparent'}} className='h-full bg-cover bg-center bg-no-repeat bg-sky-200' />
            </div>
        </Link>
    )
}
