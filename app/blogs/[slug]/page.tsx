import React from 'react';
import './BlogSubpage.css';
import Link from 'next/link';
import { getBlogData, getSortedBlogsData } from '@/lib/blogs';
import { notFound } from 'next/navigation';

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
  const blogData = await getBlogData(slug);

  if (!blogData) {
    notFound();
  }

  const { frontmatter, htmlContent } = blogData;

  return (
    <div className="blog-subpage">
      {/* ══ BACK BUTTON ════════════════════════════════════ */}
      <div className="back-bar">
        <Link href="/blogs/" className="back-btn" id="back-to-all-blogs">
          <svg className="back-btn__arrow" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 4L6 10l6 6" />
          </svg>
          Back to all blogs
        </Link>
      </div>

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
        <img className="banner__img-ph" src={frontmatter.coverImage} alt={frontmatter.coverImageAlt} />
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
          <span className="meta-item">{frontmatter.date}</span>
          <span className="meta-dot"></span>
          <span className="meta-item">{frontmatter.readTime} min read</span>
        </div>
        <div className="share-row" aria-label="Share this article">
          <button className="share-btn" aria-label="Share via email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </button>
          <button className="share-btn" aria-label="Copy link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 13a5 5 0 007.07 0l2.83-2.83a5 5 0 00-7.07-7.07l-1.5 1.5"/><path d="M14 11a5 5 0 00-7.07 0L4.1 13.83a5 5 0 007.07 7.07l1.49-1.49"/></svg>
          </button>
          <a className="share-btn" aria-label="Share on WhatsApp" href={`https://wa.me/?text=${encodeURIComponent(frontmatter.title)}`} target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
          </a>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
           ARTICLE LAYOUT — content + sidebar
      ══════════════════════════════════════════════════ */}
      <div className="article-layout">

        {/* ── CONTENT COLUMN ───────────────────────────── */}
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
                <img className="inline-img-ph" src={frontmatter.inlineImage} alt={frontmatter.inlineImageAlt} />
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
          <div className="author-box">
            <div className="author-box__avatar"><span className="author-box__initials">{frontmatter.author[0]}</span></div>
            <div>
              <p className="author-box__name">{frontmatter.author}</p>
            </div>
          </div>

          {/* ══════════════════════════════════════════════
               5. ENQUIRY PROMPT
          ══════════════════════════════════════════════ */}
          <div className="enquiry-prompt">
            <div className="ep__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
            </div>
            <div className="ep__body">
              <p className="ep__title">Thinking about {frontmatter.destination}?</p>
              <p className="ep__text">Tell us what you're imagining and one of our specialists will come back to you within 24 hours with an initial outline, built around your dates, interests and pace.</p>
            </div>
            <Link href="/contact/"><button className="ep__btn">Start the conversation</button></Link>
          </div>

        </div>

        {/* ── SIDEBAR ──────────────────────────────────── */}
        <aside className="sidebar" aria-label="Article sidebar">

          <div className="sb__block">
            <div className="sb__enquiry">
              <p className="sb__enquiry-title">Plan a journey to {frontmatter.destination}</p>
              <p className="sb__enquiry-text">Free consultation, no obligation. We respond within 24 hours.</p>
              <Link href="/contact/"><button className="sb__enquiry-btn">Enquire now</button></Link>
            </div>
          </div>

        </aside>

      </div>{/* /article-layout */}

    </div>
  );
}
