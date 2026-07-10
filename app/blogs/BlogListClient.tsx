'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BlogFrontmatter } from '@/lib/blogs';

interface BlogListClientProps {
  blogs: BlogFrontmatter[];
}

export default function BlogListClient({ blogs }: BlogListClientProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
  };

  const getFilteredBlogs = (categoryFilter?: string) => {
    return blogs.filter((blog) => {
      // If a specific section category is provided, check that first
      if (categoryFilter && !blog.tags.map(t => t.toLowerCase()).includes(categoryFilter.toLowerCase())) {
        return false;
      }
      
      // Then check global active filter
      if (activeFilter === 'all') return true;
      
      // 'wellness' matches 'Ayurveda' or 'Wellness'
      const normalizedTags = blog.tags.map(t => t.toLowerCase());
      if (activeFilter === 'wellness') {
        return normalizedTags.includes('ayurveda') || normalizedTags.includes('wellness');
      }
      
      return normalizedTags.includes(activeFilter.toLowerCase());
    });
  };

  const wellnessBlogs = getFilteredBlogs('wellness');
  const indiaBlogs = getFilteredBlogs('india');
  const bhutanBlogs = getFilteredBlogs('bhutan');
  const nepalBlogs = getFilteredBlogs('nepal');
  const srilankaBlogs = getFilteredBlogs('sri lanka');
  const planningBlogs = getFilteredBlogs('planning');

  const latestBlog = blogs.length > 0 ? blogs[0] : null;

  return (
    <>
      {/* FILTER BAR */}
      <nav className="filter-bar" role="toolbar" aria-label="Filter articles">
        <span className="f-label">Filter</span>
        <button className={`f-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => handleFilter('all')}>All</button>
        <div className="f-sep"></div>
        <button className={`f-btn ${activeFilter === 'india' ? 'active' : ''}`} onClick={() => handleFilter('india')}>India</button>
        <div className="f-sep"></div>
        <button className={`f-btn ${activeFilter === 'bhutan' ? 'active' : ''}`} onClick={() => handleFilter('bhutan')}>Bhutan</button>
        <div className="f-sep"></div>
        <button className={`f-btn ${activeFilter === 'nepal' ? 'active' : ''}`} onClick={() => handleFilter('nepal')}>Nepal</button>
        <div className="f-sep"></div>
        <button className={`f-btn ${activeFilter === 'srilanka' ? 'active' : ''}`} onClick={() => handleFilter('srilanka')}>Sri Lanka</button>
        <div className="f-sep"></div>
        <button className={`f-btn ${activeFilter === 'wellness' ? 'active' : ''}`} onClick={() => handleFilter('wellness')}>Ayurveda &amp; Wellness</button>
        <div className="f-sep"></div>
        <button className={`f-btn ${activeFilter === 'honeymoon' ? 'active' : ''}`} onClick={() => handleFilter('honeymoon')}>Honeymoon</button>
        <div className="f-sep"></div>
        <button className={`f-btn ${activeFilter === 'adventure' ? 'active' : ''}`} onClick={() => handleFilter('adventure')}>Adventure</button>
        <div className="f-sep"></div>
        <button className={`f-btn ${activeFilter === 'family' ? 'active' : ''}`} onClick={() => handleFilter('family')}>Family</button>
        <div className="f-sep"></div>
        <button className={`f-btn ${activeFilter === 'planning' ? 'active' : ''}`} onClick={() => handleFilter('planning')}>Planning</button>
      </nav>

      {/* LATEST ARTICLE HIGHLIGHT */}
      {latestBlog && activeFilter === 'all' && (
        <Link href={`/blogs/${latestBlog.slug}`} style={{ display: 'block' }}>
          <article className="latest">
            <div className="latest__img-wrap">
              <img src={latestBlog.coverImage} alt={latestBlog.coverImageAlt} className="latest__img-ph" />
              <div className="latest__badges">
                <span className="latest__new">Latest</span>
                <span className="latest__dest">{latestBlog.destination} · {latestBlog.category}</span>
              </div>
            </div>
            <div className="latest__body">
              <span className="latest__kicker">Published this week · {latestBlog.category}</span>
              <h2 className="latest__title">{latestBlog.title}</h2>
              <p className="latest__excerpt">{latestBlog.excerpt}</p>
              <div className="latest__foot">
                <span className="latest__meta">{latestBlog.readTime} min read · Updated {latestBlog.date}</span>
                <span className="latest__read"><span className="latest__read-line"></span>Read the guide</span>
              </div>
            </div>
          </article>
        </Link>
      )}

      {/* DYNAMIC SECTIONS */}
      {wellnessBlogs.length > 0 && (
        <BlogSection title="Ayurveda & Wellness" count={wellnessBlogs.length} location="India" blogs={wellnessBlogs} />
      )}
      
      {indiaBlogs.length > 0 && (
        <BlogSection title="India" count={indiaBlogs.length} location="" blogs={indiaBlogs} />
      )}

      {bhutanBlogs.length > 0 && (
        <BlogSection title="Bhutan" count={bhutanBlogs.length} location="" blogs={bhutanBlogs} />
      )}

      {nepalBlogs.length > 0 && (
        <BlogSection title="Nepal" count={nepalBlogs.length} location="" blogs={nepalBlogs} />
      )}

      {srilankaBlogs.length > 0 && (
        <BlogSection title="Sri Lanka" count={srilankaBlogs.length} location="" blogs={srilankaBlogs} />
      )}

      {planningBlogs.length > 0 && (
        <BlogSection title="Planning & Practical Guides" count={planningBlogs.length} location="" blogs={planningBlogs} />
      )}

      {/* NO RESULTS */}
      {blogs.length === 0 || (wellnessBlogs.length === 0 && indiaBlogs.length === 0 && bhutanBlogs.length === 0 && nepalBlogs.length === 0 && srilankaBlogs.length === 0 && planningBlogs.length === 0 && latestBlog === null) ? (
        <div id="no-results" style={{ padding: '3rem 0', textAlign: 'center', gridColumn: '1/-1', background: '#FFFFFF' }}>
          <p style={{ fontFamily: 'var(--fb)', fontSize: '0.8125rem', color: 'var(--cm)' }}>
            No articles in that category yet — we publish weekly. <button onClick={() => handleFilter('all')} style={{ color: 'var(--cb)', background: 'transparent', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Show all articles</button>
          </p>
        </div>
      ) : null}

      {/* NEWSLETTER */}
      <div className="nl-strip">
        <div className="nl-strip__left">
          <span className="nl-strip__label">The AndThen Journal</span>
          <p className="nl-strip__title">One guide a week,<br />worth reading slowly.</p>
        </div>
        <form className="nl-strip__form" onSubmit={(e) => e.preventDefault()}>
          <input className="nl-strip__input" type="email" placeholder="Your email address" aria-label="Email" />
          <button className="nl-strip__btn" type="submit">Subscribe</button>
        </form>
      </div>

      {/* CTA */}
      <div className="cta">
        <div>
          <h2 className="cta__title">Ready to go beyond the reading?</h2>
          <p className="cta__sub">Every guide in this journal leads somewhere real. Our specialists turn the research into a private itinerary built exactly around your interests, travel style and dates.</p>
        </div>
        <div className="cta__btns">
          <Link href="/contact/"><button className="btn-dark">Plan my journey</button></Link>
          <Link href="/itineraries/"><button className="btn-ghost">Browse itineraries</button></Link>
        </div>
      </div>
    </>
  );
}

function BlogSection({ title, count, location, blogs }: { title: string, count: number, location: string, blogs: BlogFrontmatter[] }) {
  return (
    <section className="grid-section">
      <div className="section-head">
        <h2 className="section-head__title">{title}</h2>
        <div className="section-head__line"></div>
        <span className="section-head__count">{count} articles {location ? `· ${location}` : ''}</span>
      </div>
      <div className="card-grid">
        {blogs.map((blog, index) => (
          <article key={blog.slug} className={"card"}>
            <Link href={`/blogs/${blog.slug}`}>
              <div className="card__img-wrap">
                <img src={blog.coverImage} alt={blog.coverImageAlt} className="card__img-ph" />
                <span className="card__dest">{blog.destination}</span>
                <span className="card__cat-tag">{blog.category}</span>
              </div>
            </Link>
            <div className="card__body">
              <h3 className="card__title">
                <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
              </h3>
              <div className="card__foot">
                <span className="card__meta">{blog.readTime} min read · {blog.date}</span>
                <Link href={`/blogs/${blog.slug}`} className="card__arrow">
                  <span className="card__arrow-line"></span>Read
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
