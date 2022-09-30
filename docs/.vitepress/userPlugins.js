import { PLUGINS } from '../../plugins/list.js';
import path from 'path'
import fs from 'fs';

const USER_PLUGIN_PATH = path.join(process.cwd(), 'docs', 'user-plugins', 'readmes');

export async function updateUserPlugins() {
    if (fs.existsSync(USER_PLUGIN_PATH)) {
        fs.rmSync(USER_PLUGIN_PATH, { force: true, recursive: true });
        fs.mkdirSync(USER_PLUGIN_PATH);
    }

    for (let plugin of PLUGINS) {
        if (!plugin.title || !plugin.repo || !plugin.author || !plugin.branch) {
            console.log(`Ignored: ${JSON.stringify(plugin)}`);
            continue;
        }

        const title = "---\n" +
            `title: '${plugin.title}'\n` +
            "order: 0\n" +
            "---\n" +
            "\n" +
            `<UserPlugin author="${plugin.author}" repo="${plugin.repo}" branch="${plugin.branch}" />`


        const authorPath = path.join(USER_PLUGIN_PATH, plugin.author.toLowerCase());
        const finalPath = path.join(authorPath, `${plugin.repo.toLowerCase()}.md`);

        if (!fs.existsSync(authorPath)) {
            fs.mkdirSync(authorPath, { recursive: true });
        }

        fs.writeFileSync(finalPath, title);
    }
}