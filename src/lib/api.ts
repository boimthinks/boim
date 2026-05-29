import fs from 'fs';
import path from 'path';

const postsDir = path.resolve(process.cwd(), 'src/content/blog');

export async function getBlogPosts() {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
  return files.map(file => {
    const content = fs.readFileSync(path.join(postsDir, file), 'utf8');
    return { content, status: 'published' };
  });
}
