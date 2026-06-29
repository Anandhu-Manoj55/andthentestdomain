// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import styles from "./page.module.css";
// import Button from "@/components/common/Button/Button";
// import type { Metadata } from "next";

// // Article data
// const articles = [
//   // Wellness & Ayurveda
//   {
//     slug: "beginners-guide-ayurveda-retreats-india",
//     title: "The Complete Beginner's Guide to Ayurveda Retreats in India",
//     dest: "India · Ayurveda",
//     destKey: "india",
//     cat: "Beginner guide",
//     tags: ["wellness", "india"],
//     min: "8",
//     bgClass: "ctWellness",
//     isLatest: true,
//     isFeatured: true,
//   },
//   {
//     slug: "top-10-luxury-ayurveda-resorts-kerala-2026",
//     title: "Top 10 Luxury Ayurveda Resorts in Kerala Ranked for 2026",
//     dest: "Kerala",
//     destKey: "india",
//     cat: "Rankings",
//     tags: ["wellness", "india"],
//     min: "6",
//     bgClass: "ctKerala",
//   },
//   {
//     slug: "what-is-panchakarma",
//     title: "What Is Panchakarma? The Ancient Detox Americans Are Seeking in India",
//     dest: "India",
//     destKey: "india",
//     cat: "Explainer",
//     tags: ["wellness", "india"],
//     min: "5",
//     bgClass: "ctWellness",
//   },
//   {
//     slug: "kerala-vs-rishikesh-ayurveda",
//     title: "Kerala vs Rishikesh: Which Ayurveda Destination Is Right for You?",
//     dest: "India",
//     destKey: "india",
//     cat: "Comparison",
//     tags: ["wellness", "india"],
//     min: "7",
//     bgClass: "ctKerala",
//   },
//   {
//     slug: "how-to-choose-authentic-ayurveda-retreat",
//     title: "How to Choose an Authentic Ayurveda Retreat (Not a Spa Pretending to Be One)",
//     dest: "India",
//     destKey: "india",
//     cat: "Guide",
//     tags: ["wellness", "india"],
//     min: "6",
//     bgClass: "ctWellness",
//   },
//   {
//     slug: "7-14-21-day-ayurveda-retreat",
//     title: "7-Day vs 14-Day vs 21-Day Ayurveda Retreat: What's Right for You?",
//     dest: "India",
//     destKey: "india",
//     cat: "Planning",
//     tags: ["wellness", "india"],
//     min: "5",
//     bgClass: "ctKerala",
//   },
//   // India
//   {
//     slug: "luxury-rajasthan-travel-guide-2026",
//     title: "The Ultimate Luxury Travel Guide to Rajasthan for 2026",
//     dest: "India · Rajasthan",
//     destKey: "india",
//     cat: "Destination guide",
//     tags: ["india"],
//     min: "10",
//     bgClass: "ctIndiaN",
//     isFeatured: true,
//   },
//   {
//     slug: "best-palace-hotels-india",
//     title: "The 10 Best Palace Hotels in India That Are Worth Every Penny",
//     dest: "India",
//     destKey: "india",
//     cat: "Hotels",
//     tags: ["india"],
//     min: "8",
//     bgClass: "ctIndiaN",
//   },
//   {
//     slug: "golden-triangle-luxury",
//     title: "Golden Triangle India: The Luxury Version Nobody Tells You About",
//     dest: "India",
//     destKey: "india",
//     cat: "Itinerary",
//     tags: ["india"],
//     min: "7",
//     bgClass: "ctIndiaN",
//   },
//   {
//     slug: "india-tiger-safaris-luxury",
//     title: "India's Best Tiger Safaris: Luxury Jungle Lodges Compared",
//     dest: "India",
//     destKey: "india",
//     cat: "Wildlife",
//     tags: ["india", "adventure"],
//     min: "9",
//     bgClass: "ctWildlife",
//   },
//   {
//     slug: "kerala-backwaters-luxury-houseboat",
//     title: "Kerala Backwaters: A Complete Guide to Luxury Houseboat Experiences",
//     dest: "Kerala",
//     destKey: "india",
//     cat: "Experience",
//     tags: ["india", "honeymoon"],
//     min: "8",
//     bgClass: "ctKerala",
//   },
//   {
//     slug: "varanasi-luxury-travel-guide",
//     title: "Varanasi for the Modern Luxury Traveller: A No-Nonsense Guide",
//     dest: "India · Varanasi",
//     destKey: "india",
//     cat: "Destination",
//     tags: ["india"],
//     min: "8",
//     bgClass: "ctIndiaN",
//   },
//   // Bhutan
//   {
//     slug: "why-bhutan-luxury-bucket-list",
//     title: "Why Bhutan Should Be on Every Luxury Traveller's Bucket List",
//     dest: "Bhutan",
//     destKey: "bhutan",
//     cat: "Inspiration",
//     tags: ["bhutan"],
//     min: "7",
//     bgClass: "ctBhutan",
//     isFeatured: true,
//   },
//   {
//     slug: "bhutan-travel-guide-2026",
//     title: "Bhutan Travel Guide 2026: Everything You Need to Know",
//     dest: "Bhutan",
//     destKey: "bhutan",
//     cat: "Complete guide",
//     tags: ["bhutan", "planning"],
//     min: "12",
//     bgClass: "ctBhutan",
//   },
//   {
//     slug: "tigers-nest-bhutan-guide",
//     title: "Tiger's Nest Monastery: The Ultimate Guide to Bhutan's Most Iconic Site",
//     dest: "Bhutan · Paro",
//     destKey: "bhutan",
//     cat: "Iconic sight",
//     tags: ["bhutan"],
//     min: "8",
//     bgClass: "ctBhutan",
//   },
//   {
//     slug: "bhutan-gross-national-happiness",
//     title: "Bhutan's Gross National Happiness: What It Really Means for Tourists",
//     dest: "Bhutan",
//     destKey: "bhutan",
//     cat: "Culture",
//     tags: ["bhutan"],
//     min: "6",
//     bgClass: "ctBhutan",
//   },
//   {
//     slug: "bhutan-honeymoon-luxury",
//     title: "Bhutan Honeymoon: The World's Most Exclusive Romantic Escape",
//     dest: "Bhutan",
//     destKey: "bhutan",
//     cat: "Honeymoon",
//     tags: ["bhutan", "honeymoon"],
//     min: "7",
//     bgClass: "ctBhutan",
//   },
//   // Nepal
//   {
//     slug: "nepal-luxury-travel-guide-2026",
//     title: "The Luxury Traveller's Complete Guide to Nepal 2026",
//     dest: "Nepal",
//     destKey: "nepal",
//     cat: "Complete guide",
//     tags: ["nepal"],
//     min: "12",
//     bgClass: "ctNepal",
//     isFeatured: true,
//   },
//   {
//     slug: "everest-base-camp-luxury-trek",
//     title: "Everest Base Camp Without the Crowds: The Luxury Trek Option",
//     dest: "Nepal",
//     destKey: "nepal",
//     cat: "Trekking",
//     tags: ["nepal", "adventure"],
//     min: "9",
//     bgClass: "ctNepal",
//   },
//   {
//     slug: "nepal-helicopter-everest-tour",
//     title: "Nepal Helicopter Tours: Fly to Everest Base Camp in a Day",
//     dest: "Nepal",
//     destKey: "nepal",
//     cat: "Helicopter",
//     tags: ["nepal", "adventure"],
//     min: "6",
//     bgClass: "ctNepal",
//   },
//   {
//     slug: "nepal-honeymoon-luxury",
//     title: "Nepal Honeymoon: Himalayan Romance on a Luxurious Scale",
//     dest: "Nepal",
//     destKey: "nepal",
//     cat: "Honeymoon",
//     tags: ["nepal", "honeymoon"],
//     min: "7",
//     bgClass: "ctNepal",
//   },
//   // Sri Lanka
//   {
//     slug: "sri-lanka-luxury-travel-guide-2026",
//     title: "The Complete Luxury Travel Guide to Sri Lanka 2026",
//     dest: "Sri Lanka",
//     destKey: "srilanka",
//     cat: "Complete guide",
//     tags: ["srilanka"],
//     min: "11",
//     bgClass: "ctSrilanka",
//     isFeatured: true,
//   },
//   {
//     slug: "sri-lanka-10-day-luxury-itinerary",
//     title: "Sri Lanka in 10 Days: The Perfect Luxury Itinerary",
//     dest: "Sri Lanka",
//     destKey: "srilanka",
//     cat: "Itinerary",
//     tags: ["srilanka"],
//     min: "9",
//     bgClass: "ctSrilanka",
//   },
//   {
//     slug: "yala-safari-sri-lanka-luxury",
//     title: "Yala National Park Safari: Sri Lanka's Best Wildlife Luxury Experience",
//     dest: "Sri Lanka · Yala",
//     destKey: "srilanka",
//     cat: "Wildlife",
//     tags: ["srilanka", "adventure"],
//     min: "7",
//     bgClass: "ctSrilanka",
//   },
//   {
//     slug: "sri-lanka-honeymoon-luxury",
//     title: "Sri Lanka Honeymoon: The Complete Luxury Itinerary Guide",
//     dest: "Sri Lanka",
//     destKey: "srilanka",
//     cat: "Honeymoon",
//     tags: ["srilanka", "honeymoon"],
//     min: "8",
//     bgClass: "ctSrilanka",
//   },
//   {
//     slug: "sigiriya-rock-fortress-sri-lanka",
//     title: "Sigiriya Rock Fortress: Sri Lanka's Most Iconic Luxury Day Trip",
//     dest: "Sri Lanka · Sigiriya",
//     destKey: "srilanka",
//     cat: "Iconic sight",
//     tags: ["srilanka"],
//     min: "6",
//     bgClass: "ctSrilanka",
//   },
//   // Planning
//   {
//     slug: "india-visa-for-americans-2026",
//     title: "India Visa for Americans in 2026: Everything You Need to Know",
//     dest: "India",
//     destKey: "india",
//     cat: "Visa",
//     tags: ["planning", "india"],
//     min: "8",
//     bgClass: "ctPlanning",
//   },
//   {
//     slug: "how-to-choose-luxury-india-tour-operator",
//     title: "How to Choose a Luxury Tour Operator for India: 10 Questions to Ask",
//     dest: "All destinations",
//     destKey: "",
//     cat: "Planning",
//     tags: ["planning"],
//     min: "7",
//     bgClass: "ctPlanning",
//   },
//   {
//     slug: "bhutan-visa-sdf-fee-2026",
//     title: "Bhutan Visa Guide 2026: The SDF Fee, Travel Licences and What You Need",
//     dest: "Bhutan",
//     destKey: "bhutan",
//     cat: "Visa & fees",
//     tags: ["planning", "bhutan"],
//     min: "6",
//     bgClass: "ctBhutan",
//   },
// ];

// const sectionDefs = [
//   { id: "wellness", label: "Ayurveda & Wellness", filter: "wellness", bg: "white", count: "50 articles" },
//   { id: "india", label: "India", filter: "india", bg: "cream", count: "60 articles planned" },
//   { id: "bhutan", label: "Bhutan", filter: "bhutan", bg: "white", count: "25 articles planned" },
//   { id: "nepal", label: "Nepal", filter: "nepal", bg: "cream", count: "30 articles planned" },
//   { id: "srilanka", label: "Sri Lanka", filter: "srilanka", bg: "white", count: "30 articles planned" },
//   { id: "planning", label: "Planning & Practical Guides", filter: "planning", bg: "cream", count: "20 articles planned" },
// ];

// const filterTabs = [
//   { id: "all", label: "All" },
//   { id: "india", label: "India" },
//   { id: "bhutan", label: "Bhutan" },
//   { id: "nepal", label: "Nepal" },
//   { id: "srilanka", label: "Sri Lanka" },
//   { id: "wellness", label: "Ayurveda & Wellness" },
//   { id: "honeymoon", label: "Honeymoon" },
//   { id: "adventure", label: "Adventure" },
//   { id: "planning", label: "Planning" },
// ];

// export default function JournalPage() {
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [email, setEmail] = useState("");

//   const latestArticle = articles.find((a) => a.isLatest);
//   const getArticlesForSection = (sectionFilter: string) =>
//     articles.filter((a) => {
//       if (activeFilter !== "all") return a.tags.includes(activeFilter) && a.tags.includes(sectionFilter);
//       return a.tags.includes(sectionFilter);
//     });

//   const totalVisible = activeFilter === "all"
//     ? articles.length
//     : articles.filter((a) => a.tags.includes(activeFilter)).length;

//   return (
//     <div className={styles.journalPage}>
//       {/* ── HERO ─────────────────────────────────────────── */}
//       <header className={styles.hero}>
//         <div className={styles.heroBg}></div>
//         <div className={styles.heroContent}>
//           <span className={styles.heroKicker}>The AndThen Journal</span>
//           <h1 className={styles.heroTitle}>
//             Stories, guides &amp;<br /><em>deep dives</em> across<br />the subcontinent.
//           </h1>
//           <p className={styles.heroDesc}>
//             Destination guides, Ayurveda explainers, safari planning, trekking, honeymoons, festivals and more — across India, Bhutan, Nepal and Sri Lanka.
//           </p>
//         </div>
//       </header>

//       {/* ── FILTER BAR ──────────────────────────────────── */}
//       <nav className={styles.filterBar} role="toolbar" aria-label="Filter articles">
//         <span className={styles.fLabel}>Filter</span>
//         {filterTabs.map((tab, i) => (
//           <span key={tab.id} className={styles.filterGroup}>
//             {i > 0 && <span className={styles.fSep}></span>}
//             <button
//               className={`${styles.fBtn} ${activeFilter === tab.id ? styles.fBtnActive : ""}`}
//               onClick={() => setActiveFilter(tab.id)}
//             >
//               {tab.label}
//             </button>
//           </span>
//         ))}
//       </nav>

//       {/* ── LATEST ARTICLE HIGHLIGHT ─────────────────────── */}
//       {(activeFilter === "all" || (latestArticle && latestArticle.tags.includes(activeFilter))) && latestArticle && (
//         <Link href={`/journal/${latestArticle.slug}/`} className={styles.latestLink}>
//           <article className={styles.latest}>
//             <div className={styles.latestImgWrap}>
//               <div className={`${styles.latestImgPh} ${styles[latestArticle.bgClass]}`}></div>
//               <div className={styles.latestBadges}>
//                 <span className={styles.latestNew}>Latest</span>
//                 <span className={styles.latestDest}>{latestArticle.dest}</span>
//               </div>
//             </div>
//             <div className={styles.latestBody}>
//               <span className={styles.latestKicker}>Published this week · Ayurveda &amp; Wellness</span>
//               <h2 className={styles.latestTitle}>{latestArticle.title}</h2>
//               <p className={styles.latestExcerpt}>
//                 You&apos;ve heard of Ayurveda. You&apos;ve seen the word on face creams and yoga studio menus. But the real thing — a medically supervised retreat in Kerala where an Ayurvedic doctor designs your programme from scratch — is something else entirely. This guide covers what to expect, what the treatments involve, and how to tell a genuine retreat from a spa that&apos;s borrowed the vocabulary.
//               </p>
//               <div className={styles.latestFoot}>
//                 <span className={styles.latestMeta}>{latestArticle.min} min read · Updated June 2026</span>
//                 <span className={styles.latestRead}>
//                   <span className={styles.latestReadLine}></span>Read the guide
//                 </span>
//               </div>
//             </div>
//           </article>
//         </Link>
//       )}

//       {/* ── SECTIONS ────────────────────────────────────── */}
//       {sectionDefs.map((sec) => {
//         const sectionArticles = getArticlesForSection(sec.filter);
//         if (sectionArticles.length === 0) return null;

//         const featured = sectionArticles.find((a) => a.isFeatured);
//         const rest = sectionArticles.filter((a) => !a.isFeatured);

//         return (
//           <section
//             key={sec.id}
//             className={`${styles.gridSection} ${sec.bg === "cream" ? styles.gridSectionCream : ""}`}
//             data-section={sec.filter}
//             id={`sec-${sec.id}`}
//           >
//             <div className={styles.sectionHead}>
//               <h2 className={styles.sectionTitle}>{sec.label}</h2>
//               <div className={styles.sectionLine}></div>
//               <span className={styles.sectionCount}>{sec.count}</span>
//             </div>
//             <div className={styles.cardGrid}>
//               {featured && (
//                 <article className={`${styles.card} ${styles.cardFeatured}`} data-tags={featured.tags.join(" ")}>
//                   <Link href={`/journal/${featured.slug}/`}>
//                     <div className={styles.cardImgWrap}>
//                       <div className={`${styles.cardImgPh} ${styles[featured.bgClass]}`}></div>
//                       <span className={styles.cardDest}>{featured.dest}</span>
//                       <span className={styles.cardCatTag}>{featured.cat}</span>
//                     </div>
//                   </Link>
//                   <div className={styles.cardBody}>
//                     <h3 className={styles.cardTitle}>
//                       <Link href={`/journal/${featured.slug}/`}>{featured.title}</Link>
//                     </h3>
//                     <div className={styles.cardFoot}>
//                       <span className={styles.cardMeta}>{featured.min} min read</span>
//                       <Link href={`/journal/${featured.slug}/`} className={styles.cardArrow}>
//                         <span className={styles.cardArrowLine}></span>Read
//                       </Link>
//                     </div>
//                   </div>
//                 </article>
//               )}

//               {rest.map((a) => (
//                 <article key={a.slug} className={styles.card} data-tags={a.tags.join(" ")}>
//                   <Link href={`/journal/${a.slug}/`}>
//                     <div className={styles.cardImgWrap}>
//                       <div className={`${styles.cardImgPh} ${styles[a.bgClass]}`}></div>
//                       <span className={styles.cardDest}>{a.dest}</span>
//                       <span className={styles.cardCatTag}>{a.cat}</span>
//                     </div>
//                   </Link>
//                   <div className={styles.cardBody}>
//                     <h3 className={styles.cardTitle}>
//                       <Link href={`/journal/${a.slug}/`}>{a.title}</Link>
//                     </h3>
//                     <div className={styles.cardFoot}>
//                       <span className={styles.cardMeta}>{a.min} min</span>
//                       <Link href={`/journal/${a.slug}/`} className={styles.cardArrow}>
//                         <span className={styles.cardArrowLine}></span>Read
//                       </Link>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </section>
//         );
//       })}

//       {totalVisible === 0 && (
//         <div className={styles.noResults}>
//           <p>No articles match that filter.{" "}
//             <button onClick={() => setActiveFilter("all")}>Show all</button>
//           </p>
//         </div>
//       )}

//       {/* ── NEWSLETTER STRIP ────────────────────────────── */}
//       <div className={styles.nlStrip}>
//         <div className={styles.nlLeft}>
//           <span className={styles.nlLabel}>Stay informed</span>
//           <p className={styles.nlTitle}>The journal, delivered monthly.</p>
//         </div>
//         <form
//           className={styles.nlForm}
//           onSubmit={(e) => {
//             e.preventDefault();
//             setEmail("");
//           }}
//         >
//           <input
//             type="email"
//             placeholder="Your email address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className={styles.nlInput}
//             required
//           />
//           <button type="submit" className={styles.nlBtn}>Subscribe</button>
//         </form>
//       </div>

//       {/* ── CTA ─────────────────────────────────────────── */}
//       <div className={styles.cta}>
//         <div>
//           <h2 className={styles.ctaTitle}>Ready to turn reading into going?</h2>
//           <p className={styles.ctaSub}>
//             Everything we write about, we can build into a journey. Speak to a specialist and tell us where you want to go — we&apos;ll handle the rest.
//           </p>
//         </div>
//         <div className={styles.ctaBtns}>
//           <Button href="/contact/" variant="solidDark">Plan my journey</Button>
//           <Link href="/itineraries/" className={styles.ctaGhost}>Browse itineraries</Link>
//         </div>
//       </div>
//     </div>
//   );
// }