import { category } from "./documents/category";
import { chef } from "./documents/chef";
import { ingredient } from "./documents/ingredientList";
import { mediaLibrary } from "./documents/mediaLibrary";
import { page } from "./documents/page";
import { recipes } from "./documents/recipes";
import { settings } from "./documents/settings";
import { blockContent } from "./objects/blockContent";
import { mainImage } from "./objects/mainImage";
import { photoGallery } from "./objects/photoGallery";
import { seo } from "./objects/seo";

export const schemaTypes = [
    // documents
    page,
    mediaLibrary,
    ingredient,
    recipes,
    chef,
    category,
    settings,
    // objects
    blockContent,
    mainImage,
    seo,
    photoGallery,
]