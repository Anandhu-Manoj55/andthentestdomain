import React from 'react';

export default function TestimonialCard({ testi }: { testi: any }) {
  const isFeatured = testi.classes && testi.classes.includes('--featured');
  
  return (
    <article className={`tc ${testi.classes || ''} ${isFeatured ? 'tc--featured' : ''}`}>
      {isFeatured ? (
        <>
          <div className="tc--featured-left">
            <div className="tc__flags">
              <span className="tc__dest">{testi.dest}</span>
              <span className="tc__type">{testi.type}</span>
            </div>
            <span className="tc__quote-mark">"</span>
          </div>
          <div className="tc--featured-right">
            <p className="tc__text">{testi.text}</p>
            <p className="tc__trip">{testi.trip}</p>
            <div className="tc__stars">
              {Array.from({ length: testi.stars }).map((_, i) => (
                <span key={i} className="tc__star">★</span>
              ))}
            </div>
            <div className="tc__guest">
              <div className="tc__avatar"><span className="tc__avatar-initials">{testi.initials}</span></div>
              <div>
                <span className="tc__name">{testi.name}</span>
                <span className="tc__origin">{testi.origin}</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="tc__flags">
            <span className="tc__dest">{testi.dest}</span>
            <span className="tc__type">{testi.type}</span>
          </div>
          <span className="tc__quote-mark">"</span>
          <p className="tc__text">{testi.text}</p>
          <p className="tc__trip">{testi.trip}</p>
          <div className="tc__stars">
            {Array.from({ length: testi.stars }).map((_, i) => (
              <span key={i} className="tc__star">★</span>
            ))}
          </div>
          <div className="tc__guest">
            <div className="tc__avatar"><span className="tc__avatar-initials">{testi.initials}</span></div>
            <div>
              <span className="tc__name">{testi.name}</span>
              <span className="tc__origin">{testi.origin}</span>
            </div>
          </div>
        </>
      )}
    </article>
  );
}
