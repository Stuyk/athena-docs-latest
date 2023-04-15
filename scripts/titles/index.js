const glob = require('glob');
const fs = require('fs');
const matter = require('gray-matter');

const files = glob.sync('./docs/**/*.md');

for (let filePath of files) {
    let data = fs.readFileSync(filePath, { encoding: 'utf-8' })
    const frontMatter = matter.read(filePath);
    if (frontMatter.data.title && data.includes('{{ $frontmatter.title }}')) {
        data = data.replace('{{ $frontmatter.title }}', frontMatter.data.title)
    }

    fs.writeFileSync(filePath, data);
}