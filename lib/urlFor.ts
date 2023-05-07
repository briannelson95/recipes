import ImageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity.client";

const builder = ImageUrlBuilder(client);

function urlFor(soure: any) {
    return builder.image(soure)
}

export default urlFor;