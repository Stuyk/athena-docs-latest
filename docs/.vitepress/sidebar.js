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
                text: 'AthenaClient.menus',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/api-client/menus')
            },
            {
                text: 'AthenaClient.notification',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/api-client/notification')
            },
            {
                text: 'AthenaClient.screen',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/api-client/screen')
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
        ],
        '/plugins/': [
            {
                text: 'Introduction',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/plugins')
            },
            ...SidebarBuilder.get.foldersAndOrder('./docs/plugins')
        ],
    };
}

