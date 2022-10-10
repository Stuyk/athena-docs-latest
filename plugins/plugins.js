import fs from 'fs';
import path from 'path';

async function getPlugins() {
    const directories = fs.readdirSync('./plugins').filter(x => !x.includes('.'));
    const directoriesWithIndex = directories.filter(directory => {
        const fullPath = path.join(__dirname, `./${directory}/index.js`).replace(/\\/gm, '/');
        if (!fs.existsSync(fullPath)) {
            console.warn(`Missing Index File for Author | ${fullPath}`)
            return false;
        }

        return true;
    })

    let totalPlugins = 0;

    const plugins = {};
    for (let directory of directoriesWithIndex) {
        const fullPath = path.join('file://', __dirname, `./${directory}/index.js`).replace(/\\/gm, '/');
        const content = await import(fullPath).then(res => {
            return res.default;
        }).catch(err => {
            console.warn(`Could not import default array from author directory. ${directory}`);
            return undefined;
        })

        if (!Array.isArray(content)) {
            console.warn(`Default content was not array | ${fullPath}`)
            continue;
        }

        totalPlugins += content.length;
        plugins[directory] = content;
    }

    console.log(`Plugins Submitted: ${totalPlugins}`);
    return plugins;
}

module.exports = {
    getPlugins
}