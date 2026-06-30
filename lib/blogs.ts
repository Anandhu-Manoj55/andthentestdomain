import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

const blogsDirectory = path.join(process.cwd(), 'data', 'blogs-data');

export interface BlogFrontmatter {
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  author: string;
  date: string;
  time: string;
  publishedAt: string;
  readTime: string;
  destination: string;
  category: string;
  coverImage: string;
  coverImageAlt: string;
  inlineImage: string;
  inlineImageAlt: string;
  highlight: string;
  tags: string[];
}

export interface BlogPost {
  frontmatter: BlogFrontmatter;
  htmlContent: string;
}

export async function getSortedBlogsData(): Promise<BlogFrontmatter[]> {
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(blogsDirectory);
  const allBlogsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);
      return matterResult.data as BlogFrontmatter;
    });

  return allBlogsData.sort((a, b) => {
    if (a.publishedAt < b.publishedAt) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getBlogData(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(blogsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(matterResult.content);
    
  const htmlContent = processedContent.toString();

  return {
    frontmatter: matterResult.data as BlogFrontmatter,
    htmlContent,
  };
}
