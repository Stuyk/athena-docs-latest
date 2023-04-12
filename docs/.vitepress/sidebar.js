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
        '/tutorials': [
            {
                text: 'Setup',
                collapsed: false,
                items: SidebarBuilder.get.filesAndOrder('./docs/tutorials/free/setup')
            },
            {
                text: 'Examples',
                collapsed: false,
                items: SidebarBuilder.get.filesAndOrder('./docs/tutorials/free/top')
            },
            {
                text: 'Making Plugins',
                collapsed: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/tutorials/free/making-plugins')
            },
            {
                text: 'Modding',
                collapsed: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/tutorials/free/modding')
            },
            {
                text: 'Subscribers Only',
                collapsed: true,
                items: SidebarBuilder.get.filesAndOrder('./docs/tutorials/premium')
            }
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

