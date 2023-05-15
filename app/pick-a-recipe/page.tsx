"use client"
import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'
import React from 'react'

export default async function PickRecipe() {
    let category: string | null = null;
    let ingredient: string | null = null;

    let categoryQuery = groq`*[_type=="recipes" && references(*[_type=="category" && title == "Dinner"]._id)]`;
    let ingredientQuery = groq`*[_type=="recipes" && references(*[_type == "ingredient" && name match "Chicken"]._id)]`;
    let fullQuery = groq`*[_type=="recipes" && references(*[_type == "category" && title == "Baking"]._id) && references(*[_type == "ingredient" && name match ["chocolate*"]]._id)]`;

    const data = await client.fetch(fullQuery);
    console.log(data);

    return (
        <main>PickRecipe</main>
    )
}
