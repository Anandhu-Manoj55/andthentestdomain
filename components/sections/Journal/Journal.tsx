import Link from "next/link";
import styles from "./Journal.module.css";
import { getSortedBlogsData, BlogFrontmatter } from "@/lib/blogs";

export const Journal = async () => {
  const blogsData: BlogFrontmatter[] = await getSortedBlogsData();
  const articles = blogsData.slice(0, 3);

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
          <p className={styles.sectionLabel}>Travel guides &amp; articles</p>
          {articles.map((article) => {
            const categoryText = [article.destination, article.category]
              .filter(Boolean)
              .join(" · ");
            const metaText = `${article.readTime ? `${article.readTime} min read` : ""} · ${article.category || "Journal"}`;

            return (
              <Link
                href={`/blogs/${article.slug}`}
                key={article.slug}
                className={styles.articleItem}
              >
                {categoryText && (
                  <span className={styles.articleCat}>{categoryText}</span>
                )}
                <span className={styles.articleTitle}>{article.title}</span>
                <span className={styles.articleMeta}>{metaText}</span>
              </Link>
            );
          })}
        </div>

        {/* Podcast Column / Featured Banner */}
        <div className={styles.podcast}>
        </div>
      </div>
    </section>
  );
};
export default Journal;
