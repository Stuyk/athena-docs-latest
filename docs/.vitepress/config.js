import { updateUserPlugins } from './userPlugins';
import { getSidebar } from './sidebar';

const BASE_URL = '/'

export default (async () => {
    await updateUserPlugins();

    return {
        base: BASE_URL,
        title: 'Athena Framework',
        description: 'Roleplay Script for GTA:V',
        lastUpdated: true,
        cleanUrls: 'without-subfolders',
        markdown: {
            headers: {
                level: [0, 0]
            }
        },
        themeConfig: {
            logo: '/logo.png',
            socialLinks: [
                { icon: 'github', link: 'https://github.com/stuyk/altv-athena' },
                { icon: 'discord', link: 'https://ares.stuyk.com/v1/get/discord' }
            ],
            // Navigation - Top of the Documentation Page Links
            nav: [
                {
                    text: 'Intro', link: '/intro/intro/index',
                },
                {
                    text: 'API',
                    items: [
                        {
                            text: 'API Server', link: '/api-server/intro',
                        },
                        {
                            text: 'API Client', link: '/api-client/intro',
                        },
                        {
                            text: 'Plugins', link: '/plugins/about-plugins',
                        },
                    ]
                },
                {
                    text: 'Plugins',
                    items: [
                        {
                            text: 'Plugins', link: '/plugins/about-plugins',
                        },
                        {
                            text: 'User Plugins', link: '/user-plugins/index',
                        },
                    ]
                },
                {
                    text: 'Tools',
                    items: [
                        {
                            text: 'Athena Toolkit', link: '/tools/toolkit',
                        },
                    ]
                },
                {
                    text: 'Links',
                    items: [
                        {
                            text: 'alt:V Client', link: 'https://altv.mp',
                        },
                        {
                            text: 'alt:V Native Database', link: 'https://natives.altv.mp',
                        },
                        {
                            text: 'GTA:V Data Browser', link: 'https://forge.plebmasters.de/'
                        },
                    ]
                },
            ],
            // Footer - Bottom of the Documentation Page
            footer: {
                message: 'Created by Stuyk | Est. 2020',
            },
            // Page - Next & Previous Buttons
            docFooter: {
                prev: 'Prev',
                next: 'Next'
            },
            // Page - Show Last Update on Page
            lastUpdatedText: 'Updated Date',
            sidebar: getSidebar(),
        },
        head: [
            ['link', { rel: 'icon', type: 'image/x-icon', href: BASE_URL + 'favicon.ico' }],
            ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: BASE_URL + 'apple-touch-icon.png' }],
            ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: BASE_URL + 'favicon-32x32.png' }],
            ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: BASE_URL + 'favicon-16x16.png' }],
            ['link', { rel: 'manifest', href: BASE_URL + 'site.webmanifest' }],
            ['link', { rel: 'mask-icon', href: BASE_URL + 'safari-pinned-tab.svg', color: '#5bbad5' }],
            ['meta', { name: 'msapplication-TileColor', content: '#da532c' }]
        ]
    }
});