import fs from 'fs';
import path from 'path';

const portfolioDir = path.join(process.cwd(), 'public', 'images', 'portfolio');
const portfolioTsPath = path.join(process.cwd(), 'src', 'data', 'portfolio.ts');

let portfolioTsContent = fs.readFileSync(portfolioTsPath, 'utf8');

const folders = fs.readdirSync(portfolioDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

for (const folder of folders) {
    const folderPath = path.join(portfolioDir, folder);
    const files = fs.readdirSync(folderPath).filter(file => file.toLowerCase().endsWith('.webp') || file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png'));

    const count = files.length;

    // Update count in portfolio.ts
    const regex = new RegExp(`({ slug: '${folder}'.*?count: )\\d+( })`, 'g');
    portfolioTsContent = portfolioTsContent.replace(regex, `$1${count}$2`);

    console.log(`Folder ${folder} has ${count} images.`);
}

fs.writeFileSync(portfolioTsPath, portfolioTsContent, 'utf8');
console.log('Updated portfolio.ts');
