"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Journal.module.css";

interface Article {
  id: string;
  category: string;
  title: string;
  meta: string;
  slug: string;
}

interface PodcastEpisode {
  number: string;
  title: string;
  meta: string;
}

const ARTICLES: Article[] = [
  {
    id: "guide-india",
    category: "India · Planning",
    title: "Best time to visit India for US travelers — a month by month guide",
    meta: "8 min read · Destination guides",
    slug: "/journal/best-time-to-visit-india/",
  },
  {
    id: "guide-bhutan",
    category: "Bhutan · Culture",
    title: "Is Bhutan worth visiting? An honest guide for American travelers",
    meta: "6 min read · Destination guides",
    slug: "/journal/is-bhutan-worth-visiting/",
  },
  {
    id: "guide-kerala",
    category: "Kerala · Wellness",
    title: "Kerala Ayurveda retreats — what to know before you go",
    meta: "7 min read · Wellness travel",
    slug: "/journal/kerala-ayurveda-retreats/",
  },
  {
    id: "guide-nepal",
    category: "Nepal · Adventure",
    title: "Trekking in Nepal — a first-timer's guide from the US",
    meta: "9 min read · Trekking guides",
    slug: "/journal/nepal-trekking-guide/",
  },
];

const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    number: "02",
    title: "Tiger country — what a safari in Ranthambore is really like",
    meta: "Wildlife · 28 min",
  },
  {
    number: "03",
    title: "The road to Bhutan — the world's most mindful destination",
    meta: "Destinations · 41 min",
  },
  {
    number: "04",
    title: "Ayurveda for sceptics — what 14 days in Kerala actually does",
    meta: "Wellness · 36 min",
  },
];

// Bar height presets from design.html
const PLAYED_BARS = [8, 14, 18, 12, 20, 10, 16, 8];
const UNPLAYED_BARS = [14, 20, 10, 18, 8, 16, 12, 20, 8, 14, 18, 10];

export const Journal = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const waveContainerClass = `${styles.waveform} ${
    isPlaying ? styles.playing : ""
  }`.trim();

  const playBtnClass = `${styles.playerBtn} ${
    !isPlaying ? styles.playerBtnPlay : ""
  }`.trim();

  return (
    <section className={styles.journal} aria-label="Journal and Podcast" id="journal">
      <div className={styles.header}>
        <div>
          <span className="eyebrow">The AndThen journal</span>
          <h2 className={styles.heading}>Stories, guides &amp; conversations</h2>
        </div>
        <Link href="/blogs" className="text-link text-link--muted">
          Visit the journal
        </Link>
      </div>

      <div className={styles.grid}>
        {/* Articles Column */}
        <div className={styles.articles}>
          <p className={styles.sectionLabel}>Travel guides</p>
          {ARTICLES.map((article) => (
            <Link
              href={article.slug}
              key={article.id}
              className={styles.articleItem}
            >
              <span className={styles.articleCat}>{article.category}</span>
              <span className={styles.articleTitle}>{article.title}</span>
              <span className={styles.articleMeta}>{article.meta}</span>
            </Link>
          ))}
        </div>

        {/* Podcast Column */}
        <div className={styles.podcast}>


          
  
        </div>
      </div>
    </section>
  );
};
export default Journal;
