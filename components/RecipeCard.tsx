"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Props {
    title: string;
    slug: string;
    image: string;
    categories: string[];
}

export default function RecipeCard({title, slug, image, categories}: Props) {
    return (
        <div className='w-full h-52'>
            <div className='w-full h-full shadow-md grid grid-cols-2 gap-2 p-2'>
                <div className='h-full relative flex flex-row'>
                    <h2 className='text-xl font-bold'>{title}</h2>
                    <Link href={`recipes/${slug}`} className='border absolute text-center bottom-0 w-full p-1 hover:bg-blue-950 hover:text-white transition-colors duration-200'>See Recipe</Link>
                </div>
                <div style={{backgroundImage: `url(${image})`}} className='h-full bg-cover bg-center bg-no-repeat' />
            </div>
        </div>
    )
}
