import { getPlugins } from '../../plugins/plugins';
import path from 'path'
import fs from 'fs';

const USER_PLUGIN_PATH = path.join(process.cwd(), 'docs', 'user-plugins', 'readmes');

export async function updateUserPlugins() {
    if (fs.existsSync(USER_PLUGIN_PATH)) {
        fs.rmSync(USER_PLUGIN_PATH, { force: true, recursive: true });
        fs.mkdirSync(USER_PLUGIN_PATH);
    }

    const PLUGINS = await getPlugins();
    const authors = Object.keys(PLUGINS);
    for (let author of authors) {
        const plugins = PLUGINS[author];

        for (let plugin of plugins) {
            if (!plugin.title || !plugin.repo || !plugin.branch) {
                console.log(`Ignored: ${JSON.stringify(plugin)}`);
                continue;
            }

            let title = "---\n" +
                `title: '${plugin.title}'\n` +
                "order: 0\n" +
                "---\n" +
                "\n";

            if (plugin.price && plugin.url) {
                title += `<UserPlugin title="${plugin.title}" author="${author}" repo="${plugin.repo}" branch="${plugin.branch}" price="${plugin.price}" url="${plugin.url}"  />`
            } else {
                title += `<UserPlugin title="${plugin.title}" author="${author}" repo="${plugin.repo}" branch="${plugin.branch}" />`
            }

            const authorPath = path.join(USER_PLUGIN_PATH, author.toLowerCase());
            const finalPath = path.join(authorPath, `${plugin.repo.toLowerCase()}.md`);

            if (!fs.existsSync(authorPath)) {
                fs.mkdirSync(authorPath, { recursive: true });
            }

            fs.writeFileSync(finalPath, title);
        }
    }
}