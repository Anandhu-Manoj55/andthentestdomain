import React from 'react';
import './BlogsMain.css';
import { getSortedBlogsData } from '@/lib/blogs';
import BlogListClient from './BlogListClient';
import Link from 'next/link';

export const metadata = {
  title: "Journal | AndThen Travels",
  description: "Guides, destination deep-dives and travel insights across India, Bhutan, Nepal and Sri Lanka from AndThen Travels.",
};

export default async function BlogsPage() {
  const blogsData = await getSortedBlogsData();

  return (
    <div className="blogs-page">
      {/* HERO */}
      <header className="hero">
        <div className="hero__bg" style={{ backgroundImage: 'linear-gradient(135deg, #3A2010 0%, #2C1A0A 50%, #1A0E06 100%)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="hero__content">
          <span className="hero__kicker">The AndThen Journal</span>
          <h1 className="hero__title">Stories, guides &amp;<br /><em>deep dives</em> across<br />the subcontinent.</h1>
          <p className="hero__desc">Destination guides, Ayurveda explainers, safari planning, trekking, honeymoons, festivals and more — across India, Bhutan, Nepal and Sri Lanka.</p>
        </div>
      </header>

      {/* DYNAMIC LIST */}
      <BlogListClient blogs={blogsData} />
    </div>
  );
}
