import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const portfolioDir = path.resolve(process.cwd(), 'src/content/portfolio');

export interface PortfolioFrontmatter {
  title: string;
  description: string;
  category: 'website' | 'aplikasi' | 'source code';
  url: string;
  preview_image: string;
}

export interface Portfolio {
  frontmatter: PortfolioFrontmatter;
  content: string;
}

function readAllPortfolio(): Portfolio[] {
  if (!fs.existsSync(portfolioDir)) return [];
  const files = fs.readdirSync(portfolioDir).filter((f) => f.endsWith('.md'));
  return files
    .map((file) => {
      try {
        const raw = fs.readFileSync(path.join(portfolioDir, file), 'utf8');
        const parsed = matter(raw);
        return { frontmatter: parsed.data as PortfolioFrontmatter, content: parsed.content };
      } catch (e) {
        console.error(`Error parsing portfolio ${file}:`, e);
        return null;
      }
    })
    .filter((p): p is Portfolio => p !== null);
}

export function getPortfolioItems(): Portfolio[] {
  return readAllPortfolio();
}
