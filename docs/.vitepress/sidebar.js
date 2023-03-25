import SidebarBuilder from '@stuyk/vitepress-sidebar-builder';

function groupByPathway(folderPath, filterByName) {
    const groups = {};

    const files = SidebarBuilder.get.filesAndOrder(folderPath).filter(x => x.link.includes(filterByName))
    for (let file of files) {
        if (!file.title) {
            continue;
        }

        const splitFileName = file.title.split('.');
        splitFileName.shift();
        const groupName = splitFileName[0];
        splitFileName.shift();

        if (typeof groups[groupName] === 'undefined') {
            groups[groupName] = {
                text: groupName,
                collapsed: true,
                items: []
            }
        }

        const newFile = {
            ...file,
            title: splitFileName.join('.'),
            text: splitFileName.join('.'),
        }

        groups[groupName].items.push(newFile);
    }

    return Object.values(groups);
}

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
        '/blog/': [
            {
                text: 'About',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/blog')
            },
            {
                text: 'Posts',
                collapsible: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/blog/posts')
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
        ],
        '/api': [
            {
                text: 'Info',
                collapsible: false,
                items: SidebarBuilder.get.filesAndOrder('./docs/api')
            },
            {
                text: 'Athena.',
                collapsed: false,
                items: [
                    ...groupByPathway('./docs/api/modules', 'server_'),
                    {
                        text: 'Classes',
                        collapsed: true,
                        items: groupByPathway('./docs/api/classes', 'server_')
                    },
                    {
                        text: 'Interfaces',
                        collapsed: true,
                        items: groupByPathway('./docs/api/interfaces', 'server_')
                    }
                ]
            },
            {
                text: 'AthenaClient.',
                collapsed: false,
                items: [
                    ...groupByPathway('./docs/api/modules', 'client_'),
                    {
                        text: 'Classes',
                        collapsed: true,
                        items: groupByPathway('./docs/api/classes', 'client_')
                    },
                    {
                        text: 'Interfaces',
                        collapsed: true,
                        items: groupByPathway('./docs/api/interfaces', 'client_')
                    }
                ]
            },
            {
                text: 'AthenaShared.',
                collapsed: false,
                items: [
                    ...groupByPathway('./docs/api/modules', 'shared_utility'),
                    ...groupByPathway('./docs/api/modules', 'shared_locale'),
                    ...groupByPathway('./docs/api/interfaces', 'shared_')
                ]
            }
        ]
    }
};

