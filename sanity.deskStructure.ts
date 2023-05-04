import { ControlsIcon, BasketIcon, UsersIcon, HomeIcon, DocumentsIcon, CogIcon, CodeBlockIcon, MenuIcon, ImagesIcon } from '@sanity/icons'

export const myStructure = (S: any) =>
    S.list()
    .title('Base')
    .items([
        S.listItem()
            .title("Site Settings")
            .icon(ControlsIcon)
            .child(
                S.editor()
                    .schemaType("settings")
                    .documentId("settings")
            ),
        S.divider(),
        S.documentTypeListItem("recipes").title("Recipes").icon(BasketIcon),
        S.documentTypeListItem("page").title("Pages").icon(DocumentsIcon),
        S.documentTypeListItem('mediaLibrary').title('Media Library').icon(ImagesIcon),
        S.documentTypeListItem('chef').title('Chefs').icon(UsersIcon),
        S.divider(),
            ...S.documentTypeListItems().filter(
                (listItem: any) => !['settings', 'page', 'recipes', 'mediaLibrary', 'chef'].includes(listItem.getId())
            )
    ])