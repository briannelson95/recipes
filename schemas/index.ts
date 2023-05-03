import { chef } from "./documents/chef";
import { ingredient } from "./documents/ingredientList";
import { mediaLibrary } from "./documents/mediaLibrary";
import { page } from "./documents/page";
import { recipes } from "./documents/recipes";
import { blockContent } from "./objects/blockContent";
import { mainImage } from "./objects/mainImage";

export const schemaTypes = [
    // documents
    page,
    mediaLibrary,
    ingredient,
    recipes,
    chef,
    // objects
    blockContent,
    mainImage,
]