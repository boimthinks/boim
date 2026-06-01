import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const promptsDir = path.resolve(process.cwd(), 'src/content/prompts');

export interface PromptInput {
  key: string;
  label: string;
  placeholder?: string;
}

export interface PromptFrontmatter {
  slug: string;
  title: string;
  description: string;
  category: string;
  preview_image?: string;
  prompt_template: string;
  inputs: PromptInput[];
  published_at: string;
  tags?: string;
}

export interface Prompt {
  frontmatter: PromptFrontmatter;
  content: string;
}

function readAllPrompts(): Prompt[] {
  if (!fs.existsSync(promptsDir)) return [];
  const files = fs.readdirSync(promptsDir).filter((f) => f.endsWith('.md'));
  return files
    .map((file) => {
      try {
        const raw = fs.readFileSync(path.join(promptsDir, file), 'utf8');
        const parsed = matter(raw);
        return { frontmatter: parsed.data as PromptFrontmatter, content: parsed.content };
      } catch (e) {
        console.error(`Error parsing prompt ${file}:`, e);
        return null;
      }
    })
    .filter((p): p is Prompt => p !== null);
}

export function getPromptPosts(): Prompt[] {
  return readAllPrompts().sort((a, b) => {
    const pd = (s: string) => {
      const [dp, tp] = (s || '').split(' ');
      const [d, m, y] = dp.split('/');
      return new Date(`${y}-${m}-${d}T${tp}`);
    };
    return pd(b.frontmatter.published_at).getTime() - pd(a.frontmatter.published_at).getTime();
  });
}

export function getPromptBySlug(slug: string): Prompt | undefined {
  return getPromptPosts().find((p) => p.frontmatter.slug === slug);
}

export function getRelatedPrompts(slug: string, category: string, limit = 3): Prompt[] {
  return getPromptPosts()
    .filter((p) => p.frontmatter.category === category && p.frontmatter.slug !== slug)
    .slice(0, limit);
}

export function getPromptCategories(): { name: string; count: number }[] {
  const all = getPromptPosts();
  const counts: Record<string, number> = {};
  for (const p of all) {
    counts[p.frontmatter.category] = (counts[p.frontmatter.category] || 0) + 1;
  }
  return Object.entries(counts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}
