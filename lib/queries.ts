import { groq } from "next-sanity";

export const singleRecipe = groq`*[_type == "recipes" && slug.current == $slug][0]{
    ...,
    ingredientList[]{
        ...,
        ingredient-> {
            name
        }
    },
    featuredImage-> {
        media
    }
}`