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
        '/api-server/': [
            {
                text: 'Imports',
                collapsible: true,
                items: [{ text: '@AthenaServer', title: 'API Server', link: '/api-server/intro.md', order: -99 }]
            },
            {
                text: 'Athena.controllers',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/api-server/controllers')
            },
            {
                text: 'Athena.database',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/api-server/database')
            },
            {
                text: 'Athena.events',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/api-server/events')
            },
            {
                text: 'Athena.get',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/api-server/get')
            },
            {
                text: 'Athena.systems',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/api-server/systems')
            },
            {
                text: 'Athena.utility',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/api-server/utility')
            },
        ],
        '/api-client/': [
            {
                text: 'Imports',
                collapsible: true,
                items: [{ text: '@AthenaClient', title: 'API Client', link: '/api-client/intro.md', order: -99 }]
            },
            {
                text: 'AthenaClient.camera',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/api-client/camera')
            },
            {
                text: 'AthenaClient.data',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/api-client/data')
            },
            {
                text: 'AthenaClient.events',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/api-client/events')
            },
            {
                text: 'AthenaClient.rmlui',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/api-client/rmlui')
            },
            {
                text: 'AthenaClient.sound',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/api-client/sound')
            },
            {
                text: 'AthenaClient.utility',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/api-client/utility')
            },
            {
                text: 'AthenaClient.webview',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/api-client/webview')
            },
            {
                text: 'AthenaClient.wheelMenus',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/api-client/wheelMenus')
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
        ]
    };
}

