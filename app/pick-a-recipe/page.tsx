"use client"
import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'
import React from 'react'

export default async function PickRecipe() {
    let category: string | null = null;
    let ingredient: string | null = null;

    category = "Baking";
    ingredient = "chocolate";

    let query = groq`*[_type == "recipes"]`

    // let categoryQuery = `*[_type=="recipes" && references(*[_type=="category" && title == "Dinner"]._id)]`;
    // let ingredientQuery = `*[_type=="recipes" && references(*[_type == "ingredient" && name match "Chicken"]._id)]`;
    // let fullQuery = `*[_type=="recipes" && references(*[_type == "category" && title == ${category}]._id) && references(*[_type == "ingredient" && name match ["${ingredient}*"]]._id)]`;

    if (category !== null && ingredient == null) {
        query = groq`*[_type == "recipes" && references(*[_type == "category" && title == "${category}"]._id)]`
    } else if (ingredient !== null && category == null) {
        query = groq`*[_type == "recipes" && references(*[_type == "ingredient" && name match ["${ingredient}*"]]._id)]`
    } else if (category !== null && ingredient !== null) {
        query = groq`*[_type=="recipes" && references(*[_type == "category" && title == "${category}"]._id) && references(*[_type == "ingredient" && name match ["${ingredient}*"]]._id)]`

    }

    // query = groq`*[_type=="recipes" && references(*[_type == "category" && title == "${category}"]._id) && references(*[_type == "ingredient" && name match ["${ingredient}*"]]._id)]`
    const data = await client.fetch(query);
    console.log(data);

    return (
        <main>PickRecipe</main>
    )
}
