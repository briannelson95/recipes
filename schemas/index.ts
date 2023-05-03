import { mediaLibrary } from "./documents/mediaLibrary";
import { page } from "./documents/page";
import { blockContent } from "./objects/blockContent";
import { mainImage } from "./objects/mainImage";

export const schemaTypes = [
    // documents
    page,
    mediaLibrary,
    // objects
    blockContent,
    mainImage,
]