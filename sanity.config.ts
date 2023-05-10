import {defineConfig} from "sanity";
import {deskTool} from 'sanity/desk';
import {visionTool} from '@sanity/vision';

import { schemaTypes } from "./schemas";
import { myTheme } from "./sanityTheme";
import StudioNavbar from "./components/StudioNavbar";
import { myStructure } from "./sanity.deskStructure";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";

const projectId = process.env.NEXT_PUBLIC_SANITY_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
    basePath: '/admin',
    name: 'default',
    title: 'Recipes',

    projectId,
    dataset,
    
    plugins: [
        deskTool({
            structure: myStructure,
        }),
        visionTool(),
        unsplashImageAsset(),
    ],

    schema: {
        types: schemaTypes
    },

    studio: {
        components: {
            navbar: StudioNavbar
        }
    },
    
    // theme: myTheme,
})