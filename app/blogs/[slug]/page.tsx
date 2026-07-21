import React from 'react';
import './BlogSubpage.css';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogData, getSortedBlogsData } from '@/lib/blogs';
import { notFound } from 'next/navigation';
import ShareControls from './ShareControls';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blogData = await getBlogData(slug);
  
  if (!blogData) {
    return { title: 'Not Found' };
  }
  
  return {
    title: `${blogData.frontmatter.title} | AndThen Travels Journal`,
    description: blogData.frontmatter.metaDescription,
  };
}

// Generate static params for all blogs at build time
export async function generateStaticParams() {
  const blogs = await getSortedBlogsData();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogSubpage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [blogData, allBlogs] = await Promise.all([
    getBlogData(slug),
    getSortedBlogsData(),
  ]);

  if (!blogData) {
    notFound();
  }

  const { frontmatter, htmlContent } = blogData;
  const currentIndex = allBlogs.findIndex((blog) => blog.slug === slug);
  const previousArticle = currentIndex >= 0 ? allBlogs[currentIndex + 1] : undefined;
  const nextArticle = currentIndex > 0 ? allBlogs[currentIndex - 1] : undefined;
  const relatedArticles = allBlogs
    .filter((blog) => blog.slug !== slug)
    .sort((a, b) => {
      const score = (blog: typeof a) =>
        Number(blog.category === frontmatter.category) * 2
        + Number(blog.destination === frontmatter.destination);

      return score(b) - score(a);
    })
    .slice(0, 3);
  const destinationSlug = frontmatter.destination
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  const contactHref = `/contact/?destination=${destinationSlug}`;
  const publishedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${frontmatter.date}T00:00:00Z`));

  return (
    <div className="blog-subpage">
      {/* ══ BREADCRUMB ═════════════════════════════════════ */}
      <div className="breadcrumb">
        <Link href="/blogs/">Journal</Link>
        <span className="breadcrumb__sep">/</span>
        <span className="current">{frontmatter.category}</span>
        <span className="breadcrumb__sep">/</span>
        <span className="current">{frontmatter.title}</span>
      </div>

      {/* ══════════════════════════════════════════════════
           1. BANNER IMAGE
      ══════════════════════════════════════════════════ */}
      <header className="banner">
        <Image
          className="banner__img-ph"
          src={frontmatter.coverImage}
          alt={frontmatter.coverImageAlt}
          fill
          priority
          sizes="100vw"
        />
        <div className="banner__content">
          <div className="banner__cat-row">
            <span className="banner__dest-tag">{frontmatter.destination}</span>
            <span className="banner__cat-tag">{frontmatter.category}</span>
          </div>
          <h1 className="banner__title">{frontmatter.title}</h1>
        </div>
      </header>

      {/* ══ META BAR ═══════════════════════════════════════ */}
      <div className="meta-bar">
        <div className="meta-bar__left">
          <span className="meta-item">By <strong>{frontmatter.author}</strong></span>
          <span className="meta-dot"></span>
          {/* <span className="meta-item">{publishedDate}</span>
          <span className="meta-dot"></span>
          <span className="meta-item">{frontmatter.readTime} min read</span> */}
        </div>
        <ShareControls title={frontmatter.title} />
      </div>

      {/* ══════════════════════════════════════════════════
           ARTICLE LAYOUT — content + sidebar
      ══════════════════════════════════════════════════ */}
      <div className="article-layout">

        {/* ── CONTENT COLUMN ───────────────────────────── */}
        <div className="vaccant_space"></div>
        <div className="content-col">

          {/* Intro paragraph */}
          <div className="article-body">
            <p>{frontmatter.excerpt}</p>
          </div>

          {/* ══════════════════════════════════════════════
               2. HIGHLIGHTED SECTION
          ══════════════════════════════════════════════ */}
          {frontmatter.highlight && (
            <div className="highlight-box">
              <span className="highlight-box__label">Worth knowing</span>
              <p className="highlight-box__text">{frontmatter.highlight}</p>
            </div>
          )}

          {/* ══════════════════════════════════════════════
               3. MAIN CONTENT
          ══════════════════════════════════════════════ */}
          <div className="article-body" dangerouslySetInnerHTML={{ __html: htmlContent }} />

          {/* ══════════════════════════════════════════════
               4. SUPPORTING IMAGE — mid-article
          ══════════════════════════════════════════════ */}
          {frontmatter.inlineImage && (
            <figure className="inline-image">
              <div className="inline-image__frame">
                <Image
                  className="inline-img-ph"
                  src={frontmatter.inlineImage}
                  alt={frontmatter.inlineImageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 720px"
                />
              </div>
              <figcaption className="inline-image__caption">{frontmatter.inlineImageAlt}</figcaption>
            </figure>
          )}

          {/* Tags */}
          <div className="article-tags">
            {frontmatter.tags.map(tag => (
              <span key={tag} className="article-tag">{tag}</span>
            ))}
          </div>

          {/* Author byline */}
          {/* <div className="author-box">
            <div className="author-box__avatar"><span className="author-box__initials">{frontmatter.author[0]}</span></div>
            <div>
              <p className="author-box__name">{frontmatter.author}</p>
            </div>
          </div> */}

          {/* ══════════════════════════════════════════════
               5. ENQUIRY PROMPT
          ══════════════════════════════════════════════ */}
          <div className="enquiry-prompt">
            <div className="ep__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
            </div>
            <div className="ep__body">
              <p className="ep__title">Thinking about {frontmatter.destination}?</p>
              <p className="ep__text">Tell us what you’re imagining and one of our specialists will come back to you within 24 hours with an initial outline, built around your dates, interests and pace.</p>
            </div>
            <Link href={contactHref} className="ep__btn">Start the conversation</Link>
          </div>

        </div>

        {/* ── SIDEBAR ──────────────────────────────────── */}
        <aside className="sidebar" aria-label="Article sidebar">

          <div className="sb__block">
            <div className="sb__enquiry">
              <p className="sb__enquiry-title">Plan a journey to {frontmatter.destination}</p>
              <p className="sb__enquiry-text">Free consultation, no obligation. We respond quick.</p>
              <Link href={contactHref} className="sb__enquiry-btn">Enquire now</Link>
            </div>
          </div>

          {relatedArticles.length > 0 && (
            <div className="sb__block">
              <span className="sb__label">Related reading</span>
              <ul className="sb__related">
                {relatedArticles.map((article) => (
                  <li key={article.slug}>
                    <Link href={`/blogs/${article.slug}/`}>
                      <span className="sb__related-cat">{article.category}</span>
                      <span className="sb__related-title">{article.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </aside>

      </div>{/* /article-layout */}

      {(previousArticle || nextArticle) && (
        <nav className="article-nav" aria-label="More articles">
          {previousArticle ? (
            <Link className="article-nav__item" href={`/blogs/${previousArticle.slug}/`}>
              <span className="article-nav__label">← Previous</span>
              <span className="article-nav__title">{previousArticle.title}</span>
            </Link>
          ) : <span className="article-nav__item" aria-hidden="true" />}

          {nextArticle ? (
            <Link className="article-nav__item article-nav__item--next" href={`/blogs/${nextArticle.slug}/`}>
              <span className="article-nav__label">Next →</span>
              <span className="article-nav__title">{nextArticle.title}</span>
            </Link>
          ) : <span className="article-nav__item" aria-hidden="true" />}
        </nav>
      )}

    </div>
  );
}
