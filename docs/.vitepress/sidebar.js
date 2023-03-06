import SidebarBuilder from '@stuyk/vitepress-sidebar-builder';

export function getSidebar() {
    return {
        '/intro/': [
            {
                text: 'Introduction',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/intro/intro')
            },
            {
                text: 'Install',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/intro/install')
            },
            {
                text: 'Info',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/intro/info')
            },
            {
                text: 'How Do I?',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/intro/how-do-i')
            },
            {
                text: 'Mods',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/intro/mods')
            },
        ],
        '/plugins/': [
            {
                text: 'Introduction',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/plugins')
            },
            ...SidebarBuilder.get.foldersAndOrder('./docs/plugins')
        ],
        '/user-plugins': [
            {
                text: 'Info',
                collapsible: false,
                items: SidebarBuilder.get.filesAndOrder('./docs/user-plugins')
            },
            ...SidebarBuilder.get.foldersAndOrder('./docs/user-plugins/readmes')
        ],
        '/subscriber/tutorials': [
            {
                text: 'Tutorials',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/subscriber/tutorials')
            },
            {
                text: 'Beginners',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/subscriber/tutorials/beginners')
            },
            {
                text: 'Database',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/subscriber/tutorials/database')
            },
            {
                text: 'Inventory',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/subscriber/tutorials/inventory')
            },
        ]
    };
}

