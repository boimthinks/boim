import { getBlogPosts } from './src/lib/api.ts';

const posts = await getBlogPosts();
console.log(JSON.stringify(posts, null, 2));
