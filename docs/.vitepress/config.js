import { getSidebar } from './sidebar';
import { defineConfig } from 'vitepress'

const BASE_URL = '/';

export default defineConfig({

    base: BASE_URL,
    title: 'V5 Docs',
    description: 'Roleplay Script for GTA:V',
    ignoreDeadLinks: true,
    lastUpdated: true,
    cleanUrls: 'without-subfolders',
    markdown: {
        lineNumbers: false,
        defaultHighlightLang: 'ts'
    },
    themeConfig: {
        logo: '/logo.png',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/stuyk/altv-athena' },
            { icon: 'discord', link: 'https://discord.com/servers/athena-framework-790039623648542760' },
        ],
        // Search
        search: {
            provider: 'local'
        },
        // Navigation - Top of the Documentation Page Links
        nav: [
            {
                text: 'Blog',
                link: '/blog/index',
            },
            {
                text: 'API',
                link: '/api/index'
            },
            {
                text: 'Guides',
                link: '/tutorials/index'
            },
            {
                text: 'Tools',
                items: [
                    {
                        text: 'Athena Toolkit',
                        link: '/tools/toolkit',
                    },
                ],
            },
            {
                text: 'Versions & Links',
                items: [
                    {
                        text: 'Doc Versions',
                        items: [
                            {
                                text: 'v4 Docs',
                                link: 'https://stuyk.github.io/athena-docs-v4/',
                            },
                        ],
                    },
                    {
                        text: 'Partners',
                        items: [
                            {
                                text: 'alt:V Client',
                                link: 'https://altv.mp',
                            },
                            {
                                text: 'alt:V Native Database',
                                link: 'https://natives.altv.mp',
                            },
                            {
                                text: 'GTA:V Data Browser',
                                link: 'https://forge.plebmasters.de/',
                            },
                        ],
                    },
                ],
            },
        ],
        // Footer - Bottom of the Documentation Page
        footer: {
            message: 'Created by Stuyk | Est. 2020',
        },
        // Page - Next & Previous Buttons
        docFooter: {
            prev: 'Prev',
            next: 'Next',
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
        ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
    ],
});
