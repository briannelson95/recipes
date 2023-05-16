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
    },
    chef-> {
        name
    }
}`

export const recipes = groq`
    *[_type == "recipes"]{
        title,
        slug,
        featuredImage->{
            media
        },
        categories[]->{
            title
        },
        serving,
        time
    }
`;

export const homepage = groq`{
    "recipes": *[_type == "recipes" && (!references(*[_type == "category" && title == "Toppings"]._id))] | order(_createdAt desc)[0...3]{
        title,
        slug,
        featuredImage->{
            media {
                image,
                alt
            }
        },
        ...
    }
}`