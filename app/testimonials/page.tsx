"use client";
import React, { useState } from 'react';
import './Testimonials.css';
import TestimonialCard from '@/components/TestimonialCard';
import testimonialsData from '@/data/testimonials-new.json';
import Link from 'next/link';

export default function TestimonialsPage() {
  const [filter, setFilter] = useState('all');

  const filteredTestimonials = testimonialsData.filter((testi: any) => {
    if (filter === 'all') return true;
    return testi.tags && testi.tags.includes(filter);
  });

  return (
    <div className="testimonials-page">
      {/* PAGE HEADER */}
      <div className="page-header">
        <div>
          <span className="page-header__kicker">What our guests say</span>
          <h1 className="page-header__title">Stories from<br /><em>the road</em></h1>
        </div>
        <div className="page-header__count">
          <span className="page-header__count-num">{testimonialsData.length}</span>
          <span className="page-header__count-label">Guest stories</span>
        </div>
      </div>

      {/* FILTER BAR */}
      <nav className="filter-bar" role="toolbar" aria-label="Filter testimonials">
        <span className="f-label">Filter</span>
        {['all', 'india', 'bhutan', 'nepal', 'srilanka', 'wellness', 'leisure'].map(f => (
          <React.Fragment key={f}>
            <button 
              className={`f-btn ${filter === f ? 'active' : ''}`} 
              onClick={() => setFilter(f)}
            >
              {f === 'srilanka' ? 'Sri Lanka' : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
            {f !== 'leisure' && <div className="f-sep"></div>}
          </React.Fragment>
        ))}
      </nav>

      {/* TESTIMONIALS GRID */}
      <div className="tgrid">
        {filteredTestimonials.map((testi: any) => (
          <TestimonialCard key={testi.id} testi={testi} />
        ))}
      </div>

      <p style={{fontFamily:'var(--font-body)', fontSize:'0.5625rem', fontWeight:300, color:'var(--cs)', textAlign:'center', padding:'1.5rem 2.5rem', borderTop:'0.5px solid rgba(200,180,154,0.15)'}}>
        All stories shared with guest permission.
      </p>

      {/* CTA BAND */}
      <div className="cta-band">
        <div>
          <p className="cta-band__title">Ready to write your own story?</p>
          <p className="cta-band__sub">Tell us where you want to go and we'll take it from there. We respond within 24 hours.</p>
        </div>
        <div className="cta-btns">
          <Link href="/contact/" className="btn-dark">Plan my journey</Link>
          <Link href="/itineraries/" className="btn-ghost">Browse itineraries</Link>
        </div>
      </div>
    </div>
  );
}
