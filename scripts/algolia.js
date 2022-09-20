const algoliasearch = require('algoliasearch');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const glob = require('glob');
const matter = require('gray-matter');

const INDEX_NAME = 'altv-js-docs';
const DOCS_PATH = path.join(process.cwd(), 'docs').replace(/\\/gm, '/');
const GLOB_PATH = path.join(DOCS_PATH, '/**/*.md').replace(/\\/gm, '/');

if (!process.env.ALGOLIA_APP_ID && !process.env.ALGOLIA_TOKEN) {
    dotenv.config();
    if (!process.env.ALGOLIA_APP_ID && !process.env.ALGOLIA_TOKEN) {
        throw new Error(`Failed to process aloglia environment information. Ensure ALGOLIA_APP_ID & ALGOLIA_TOKEN are in an .env file`);
    }
}

const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_TOKEN);
const index = client.initIndex(INDEX_NAME);

function getFiles() {
    return glob.sync(GLOB_PATH);
}

function start() {
    console.log(`Reading File List`);

    const fileList = getFiles();
    const files = fileList.map((filePath) => {
        const relativePath = filePath.replace(DOCS_PATH, '');
        const content = fs.readFileSync(filePath, { encoding: 'utf-8' });
        const frontMatter = matter(content);
        let title;
        if (frontMatter.data && frontMatter.data.title) {
            title = frontMatter.data.title;
        }

        return {
            title,
            content,
            objectID: relativePath
        }
    });

    index
        .saveObjects(files)
        .then(({ objectIDs }) => {
            console.log(objectIDs);
        })
        .catch((err) => {
            console.error(err);
            process.exit(1);
        });
}

start();