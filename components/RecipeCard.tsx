"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {ImageIcon} from '@sanity/icons'

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
        <Link className='w-full h-auto' href={`/recipes/${slug}`}>
            <div className='w-full shadow-md'>
                <div style={image ? {backgroundImage: `url(${image})`} : {background: ''}} className='h-48 bg-cover bg-center bg-no-repeat bg-sky-200 flex justify-center items-center'>
                    {image ? '' : <ImageIcon height={50} width={50} className='text-sky-500/60' />}
                </div>
                <div className='p-2 h-full'>
                    <h2 className='text-xl font-bold'>{title}</h2>
                    <div className='flex w-full space-x-4 text-sm font-light py-2'>
                        <p>Servings: {servings}</p>
                        <p>Total Time: {time}</p>
                    </div>
                    <Link href={`recipes/${slug}`} className='border text-center w-full p-1 hover:bg-blue-950 hover:text-white transition-colors duration-200'>See Recipe</Link>
                </div>
            </div>
        </Link>
    )
}
