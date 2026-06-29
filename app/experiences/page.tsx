import Link from "next/link";
import styles from "./page.module.css";
import Button from "@/components/common/Button/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signature Experiences | AndThen Travels",
  description:
    "Three specialist-led private group programmes — a wellness retreat in Kerala, a South Indian culinary sojourn, and an elite golf journey through India's Golden Triangle.",
};

export default function ExperiencesPage() {
  return (
    <div className={styles.experiencesPage}>
      {/* ── HERO ───────────────────────────────────────── */}
      <header className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={styles.heroPills}>
          <span className={styles.heroPill}>Art of Feeling Well · Kerala · Oct 2026</span>
          <span className={styles.heroPill}>Plated South · South India · On request</span>
          <span className={styles.heroPill}>Fairways &amp; Wonders · Golden Triangle · On request</span>
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroKicker}>Signature experiences — private group programmes</span>
          <h1 className={styles.heroTitle}>
            Journeys built<br />around a <em>single</em><br />shared passion.
          </h1>
          <p className={styles.heroDesc}>
            Three specialist-led programmes — a wellness and classical arts retreat in Kerala, a South Indian culinary sojourn with a celebrated chef, and an elite golf journey through the Golden Triangle. Each runs privately for your group, on any dates, built entirely around who you are.
          </p>
        </div>
      </header>

      {/* ── THREE PILLARS ──────────────────────────────── */}
      <div className={styles.pillars}>
        <div className={styles.pillar}>
          <div className={styles.pillarRule}></div>
          <div>
            <p className={styles.pillarTitle}>Fully private</p>
            <p className={styles.pillarText}>Every programme runs exclusively for your group — no shared itineraries, no other travellers.</p>
          </div>
        </div>
        <div className={styles.pillar}>
          <div className={styles.pillarRule}></div>
          <div>
            <p className={styles.pillarTitle}>Specialist-led</p>
            <p className={styles.pillarText}>Each experience is led by a named expert — a dancer-scholar, an acclaimed chef, an experienced golf concierge.</p>
          </div>
        </div>
        <div className={styles.pillar}>
          <div className={styles.pillarRule}></div>
          <div>
            <p className={styles.pillarTitle}>Dates around you</p>
            <p className={styles.pillarText}>No fixed departure calendar. The programme runs when your group is ready, for as long as you want it to.</p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
           EXPERIENCE 01 — ART OF FEELING WELL
      ═══════════════════════════════════════════════ */}
      <article className={styles.exp} id="exp-wellness">
        <div className={styles.expImgWrap}>
          <div className={`${styles.expImgPh} ${styles.expImgWellness}`}></div>
          <div className={styles.expFlag}>
            <span className={styles.expFlagType}>Wellness · Kerala</span>
            <span className={styles.expFlagNights}>13 nights / 14 days</span>
          </div>
          <span className={styles.expNum}>01</span>
        </div>

        <div className={styles.expBody}>
          <span className={styles.expIndex}>Signature Experience · 01</span>
          <h2 className={styles.expName}>Art of<br /><em>Feeling Well</em></h2>
          <p className={styles.expSubtitle}>Art. Ayurveda. Kerala. — 10 Oct to 23 Oct 2026</p>
          <div className={styles.expRule}></div>

          <p className={styles.expDesc}>
            Thirteen nights moving through three distinct faces of Kerala — the colonial harbour town of Cochin, the backwater stillness of Kumarakom and the cliff-top coast of Kovalam — held together by a single thread: the connection between physical healing and classical movement.<br /><br />
            The programme weaves daily Ayurvedic treatment (personalised by a resident physician at Surya Samudra) with Mohiniyattam sessions led by Dr. Methil Devika — not as performance, but as a movement practice for body and mind. The final night is spent in Trivandrum, with a Kalari performance at Agasthyam and a curated dinner at Villa Maya.
          </p>

          <div className={styles.expRoute} role="complementary" aria-label="Programme route">
            <div className={styles.expRouteStop}><strong>Cochin</strong><span className={styles.expRouteNights}>3 nights</span></div>
            <span className={styles.expRouteArrow}>→</span>
            <div className={styles.expRouteStop}><strong>Kumarakom</strong><span className={styles.expRouteNights}>2 nights</span></div>
            <span className={styles.expRouteArrow}>→</span>
            <div className={styles.expRouteStop}><strong>Kovalam</strong><span className={styles.expRouteNights}>7 nights</span></div>
            <span className={styles.expRouteArrow}>→</span>
            <div className={styles.expRouteStop}><strong>Trivandrum</strong><span className={styles.expRouteNights}>1 night</span></div>
          </div>

          <div className={styles.expDetails}>
            <div className={styles.expDetail}><span className={styles.expDetailLabel}>Duration</span><span className={styles.expDetailValue}>13 nights / 14 days</span></div>
            <div className={styles.expDetail}><span className={styles.expDetailLabel}>From</span><span className={styles.expDetailValue}>USD 9,852 per person</span></div>
            <div className={styles.expDetail}><span className={styles.expDetailLabel}>Group size</span><span className={styles.expDetailValue}>8–12 guests</span></div>
          </div>

          <div className={styles.expIncludes}>
            <span className={styles.expIncludesLabel}>What&apos;s included</span>
            <ul>
              <li>Personalised Ayurvedic consultation &amp; treatment plan</li>
              <li>Daily 90-min Ayurvedic therapy at Surya Samudra</li>
              <li>Daily 60-min guided yoga session</li>
              <li>3 Mohiniyattam workshops with Dr. Methil Devika</li>
              <li>1 private performance by Dr. Methil Devika</li>
              <li>Documentary screening</li>
              <li>Houseboat cruise with lunch, Kumarakom</li>
              <li>Kalari performance at Agasthyam, Trivandrum</li>
              <li>Curated dinner at Villa Maya, Trivandrum</li>
              <li>Prescribed herbal medications throughout</li>
              <li>Ayurvedic diet plan — all meals in Kovalam</li>
              <li>All accommodation, transfers and sightseeing</li>
            </ul>
          </div>

          <div className={styles.expCta}>
            <Button href="/contact/?experience=art-of-feeling-well" variant="solidDark">
              Enquire about this experience
            </Button>
            <Link href="/experiences/art-of-feeling-well/" className={styles.expLink}>
              <span className={styles.expLinkLine}></span>Full programme details
            </Link>
          </div>
        </div>
      </article>

      {/* Specialist: Dr. Methil Devika */}
      <div className={styles.specialist} aria-label="Programme specialist — Dr. Methil Devika">
        <div className={styles.spImgWrap}>
          <div className={`${styles.spImgPh} ${styles.spImgDevika}`}></div>
        </div>
        <div className={styles.spBody}>
          <span className={styles.spKicker}>Programme specialist</span>
          <h3 className={styles.spName}>Dr. Methil Devika</h3>
          <p className={styles.spTitle}>Mohiniyattam Exponent, Scholar and Performing Artist</p>
          <p className={styles.spBio}>
            Dr. Methil Devika is one of India&apos;s most celebrated classical dancers, a Mohiniyattam exponent whose work has taken her from the temple stages of Kerala to performance halls across the United States, Southeast Asia and Australia. She has received some of India&apos;s most prestigious arts honours, including the Ustad Bismillah Yuva Puraskar and the Dakshinamurthy Puraskar, an award shared with maestros Pandit Hariprasad Chaurasia and Sivamani.<br /><br />
            Her short documentary Sarpatatwam made the Academy Awards Contention List in 2018, and her film The Crossover screened at the Mumbai International Film Festival in 2024. On this programme she is not here to perform from a distance — she is here to bring you inside the art, one gesture, one story and one unforgettable session at a time.
          </p>
          <div className={styles.spAwards}>
            <span className={styles.spAward}>Ustad Bismillah Yuva Puraskar</span>
            <span className={styles.spAward}>Dakshinamurthy Puraskar</span>
            <span className={styles.spAward}>Academy Awards Contention List 2018</span>
            <span className={styles.spAward}>Mumbai International Film Festival 2024</span>
          </div>
        </div>
      </div>

      {/* Stays — Art of Feeling Well */}
      <div className={styles.staysStrip} aria-label="Hotels for Art of Feeling Well">
        <span className={styles.ssLabel}>Where you stay</span>
        <div className={styles.ssHotels}>
          <div className={styles.ssHotel}><span className={styles.ssCity}>Cochin · 3N</span><span className={styles.ssName}>Eighth Bastion / similar</span></div>
          <div className={styles.ssHotel}><span className={styles.ssCity}>Kumarakom · 2N</span><span className={styles.ssName}>Zuri Kumarakom / similar</span></div>
          <div className={styles.ssHotel}><span className={styles.ssCity}>Kovalam · 7N</span><span className={styles.ssName}>Surya Samudra</span></div>
          <div className={styles.ssHotel}><span className={styles.ssCity}>Trivandrum · 1N</span><span className={styles.ssName}>Vivanta / similar</span></div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
           EXPERIENCE 02 — PLATED SOUTH
      ═══════════════════════════════════════════════ */}
      <article className={`${styles.exp} ${styles.expReverse}`} id="exp-culinary">
        <div className={styles.expImgWrap}>
          <div className={`${styles.expImgPh} ${styles.expImgCulinary}`}></div>
          <div className={styles.expFlag}>
            <span className={styles.expFlagType}>Food &amp; Culture</span>
            <span className={styles.expFlagNights}>12 nights / 13 days</span>
          </div>
          <span className={styles.expNum}>02</span>
        </div>

        <div className={styles.expBody}>
          <span className={styles.expIndex}>Signature Experience · 02</span>
          <h2 className={styles.expName}><em>Plated</em><br />South</h2>
          <p className={styles.expSubtitle}>A South Indian culinary sojourn with Chef Bobby Geetha</p>
          <div className={styles.expRule}></div>

          <p className={styles.expDesc}>
            South Indian cuisine is one of the world&apos;s most complex and misunderstood culinary traditions. This programme moves through it properly — from Bengaluru&apos;s artisanal café scene and Mysore&apos;s royal kitchen heritage, through the bold Kodava flavours of Coorg&apos;s coffee hills, into the fragrant biryanis of Malabar Calicut, Fort Kochi&apos;s colonial-era spice trade and finally the backwaters of Kumarakom, where the journey ends on a houseboat with a traditional Kerala Sadya feast.<br /><br />
            Chef Bobby leads every culinary session: market visits, masterclasses, home kitchen experiences and curated restaurant meals. The programme can be adapted — deeper into a single region, or extended with additional stops.
          </p>

          <div className={styles.expRoute} role="complementary" aria-label="Programme route">
            <div className={styles.expRouteStop}><strong>Bengaluru</strong><span className={styles.expRouteNights}>2 nights</span></div>
            <span className={styles.expRouteArrow}>→</span>
            <div className={styles.expRouteStop}><strong>Mysore</strong><span className={styles.expRouteNights}>2 nights</span></div>
            <span className={styles.expRouteArrow}>→</span>
            <div className={styles.expRouteStop}><strong>Coorg</strong><span className={styles.expRouteNights}>2 nights</span></div>
            <span className={styles.expRouteArrow}>→</span>
            <div className={styles.expRouteStop}><strong>Calicut</strong><span className={styles.expRouteNights}>2 nights</span></div>
            <span className={styles.expRouteArrow}>→</span>
            <div className={styles.expRouteStop}><strong>Cochin</strong><span className={styles.expRouteNights}>2 nights</span></div>
            <span className={styles.expRouteArrow}>→</span>
            <div className={styles.expRouteStop}><strong>Kumarakom</strong><span className={styles.expRouteNights}>2 nights</span></div>
          </div>

          <div className={styles.expDetails}>
            <div className={styles.expDetail}><span className={styles.expDetailLabel}>Duration</span><span className={styles.expDetailValue}>12 nights / 13 days</span></div>
            <div className={styles.expDetail}><span className={styles.expDetailLabel}>Pricing</span><span className={styles.expDetailValue}>On request</span></div>
            <div className={styles.expDetail}><span className={styles.expDetailLabel}>For</span><span className={styles.expDetailValue}>Private groups</span></div>
          </div>

          <div className={styles.expIncludes}>
            <span className={styles.expIncludesLabel}>What&apos;s included</span>
            <ul>
              <li>Iconic eatery visits &amp; bar-hopping, Bengaluru</li>
              <li>Mysore Palace &amp; Masala Dosa masterclass</li>
              <li>Kodava lunch &amp; gourmet coffee session, Coorg</li>
              <li>Dubare Elephant Camp, Coorg</li>
              <li>Paragon Biryani visit &amp; market tour, Calicut</li>
              <li>Kochi-Muziris Biennale &amp; Kerala food introduction</li>
              <li>Houseboat cruise &amp; traditional Sadya, Kumarakom</li>
              <li>Chef Bobby Geetha masterclasses at each stop</li>
              <li>All accommodation, meals, transfers and guides</li>
              <li>Group leader complimentary accommodation</li>
            </ul>
          </div>

          <div className={styles.expCta}>
            <Button href="/contact/?experience=plated-south" variant="solidDark">
              Enquire about this experience
            </Button>
            <Link href="/experiences/plated-south/" className={styles.expLink}>
              <span className={styles.expLinkLine}></span>Full programme details
            </Link>
          </div>
        </div>
      </article>

      {/* Specialist: Chef Bobby Geetha */}
      <div className={styles.specialist} aria-label="Programme specialist — Chef Bobby Geetha">
        <div className={styles.spImgWrap}>
          <div className={`${styles.spImgPh} ${styles.spImgBobby}`}></div>
        </div>
        <div className={styles.spBody}>
          <span className={styles.spKicker}>Programme specialist</span>
          <h3 className={styles.spName}>Chef Bobby Geetha</h3>
          <p className={styles.spTitle}>Culinary Expert, BBC MasterChef Finalist, Founder of Kerala Canteen</p>
          <p className={styles.spBio}>
            Chef Bobby Geetha is a globally acclaimed culinary expert known for his innovative approach to Indian cuisine. A finalist on BBC&apos;s MasterChef: The Professionals, he has carved a unique space by blending traditional Indian flavours with contemporary global techniques, describing his food as &ldquo;innovative Indian dishes with an international approach.&rdquo;<br /><br />
            Bobby is the founder of the award-winning Kerala Canteen in Leeds, UK — a celebrated destination for modern South Indian cuisine. He has worked in some of the world&apos;s most prestigious kitchens, including Noma (2*), Dinner by Heston Blumenthal (2*) and Le Manoir aux Quat&apos;Saisons (2*). On Plated South, he leads every session personally — not a consultant from a distance, but the person at the market stall, the kitchen and the table beside you.
          </p>
          <div className={styles.spAwards}>
            <span className={styles.spAward}>BBC MasterChef: The Professionals finalist</span>
            <span className={styles.spAward}>Noma · Heston · Le Manoir</span>
            <span className={styles.spAward}>Founder, Kerala Canteen Leeds</span>
          </div>
        </div>
      </div>

      {/* Stays — Plated South */}
      <div className={styles.staysStrip} aria-label="Hotels for Plated South">
        <span className={styles.ssLabel}>Where you stay</span>
        <div className={styles.ssHotels}>
          <div className={styles.ssHotel}><span className={styles.ssCity}>Bengaluru · 2N</span><span className={styles.ssName}>Oberoi / similar</span></div>
          <div className={styles.ssHotel}><span className={styles.ssCity}>Mysore · 2N</span><span className={styles.ssName}>Grand Mercure / similar</span></div>
          <div className={styles.ssHotel}><span className={styles.ssCity}>Coorg · 2N</span><span className={styles.ssName}>Evolve Back</span></div>
          <div className={styles.ssHotel}><span className={styles.ssCity}>Calicut · 2N</span><span className={styles.ssName}>Kadavu Resort</span></div>
          <div className={styles.ssHotel}><span className={styles.ssCity}>Cochin · 2N</span><span className={styles.ssName}>Brunton Boatyard / similar</span></div>
          <div className={styles.ssHotel}><span className={styles.ssCity}>Kumarakom · 2N</span><span className={styles.ssName}>Coconut Lagoon / similar</span></div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
           EXPERIENCE 03 — FAIRWAYS & WONDERS
      ═══════════════════════════════════════════════ */}
      <article className={styles.exp} id="exp-golf">
        <div className={styles.expImgWrap}>
          <div className={`${styles.expImgPh} ${styles.expImgGolf}`}></div>
          <div className={styles.expFlag}>
            <span className={styles.expFlagType}>Golf · Golden Triangle</span>
            <span className={styles.expFlagNights}>9 nights / 10 days</span>
          </div>
          <span className={styles.expNum}>03</span>
        </div>

        <div className={styles.expBody}>
          <span className={styles.expIndex}>Signature Experience · 03</span>
          <h2 className={styles.expName}>Fairways &amp;<br /><em>Wonders</em></h2>
          <p className={styles.expSubtitle}>The Elite Indian Golf Experience — Delhi, Agra &amp; Jaipur</p>
          <div className={styles.expRule}></div>

          <p className={styles.expDesc}>
            Golf in India is not just a sport — it is a walk through history. Since 1829, when the Royal Calcutta Golf Club became the first outside Great Britain, the country has been home to some of the world&apos;s most storied fairways. Tee off amid Mughal ruins at the Delhi Golf Club, play the Gary Player–designed championship course at DLF Gurgaon, take a round on Jaipur&apos;s royal Rambagh Golf Club, and finish on the Jack Nicklaus Signature layout at ITC Grand Bharat.<br /><br />
            Between rounds: Old Delhi&apos;s bazaars, the Taj Mahal at sunrise, Jaipur&apos;s pink-hued forts and palaces. Five sessions of golf across four of India&apos;s finest courses, with evenings in the country&apos;s most celebrated hotels.
          </p>

          <div className={styles.expRoute} role="complementary" aria-label="Programme route">
            <div className={styles.expRouteStop}><strong>Delhi</strong><span className={styles.expRouteNights}>4 nights</span></div>
            <span className={styles.expRouteArrow}>→</span>
            <div className={styles.expRouteStop}><strong>Agra</strong><span className={styles.expRouteNights}>1 night</span></div>
            <span className={styles.expRouteArrow}>→</span>
            <div className={styles.expRouteStop}><strong>Jaipur</strong><span className={styles.expRouteNights}>3 nights</span></div>
            <span className={styles.expRouteArrow}>→</span>
            <div className={styles.expRouteStop}><strong>Gurgaon</strong><span className={styles.expRouteNights}>1 night</span></div>
          </div>

          <div className={styles.expDetails}>
            <div className={styles.expDetail}><span className={styles.expDetailLabel}>Duration</span><span className={styles.expDetailValue}>9 nights / 10 days</span></div>
            <div className={styles.expDetail}><span className={styles.expDetailLabel}>From</span><span className={styles.expDetailValue}>€7,500 per person</span></div>
            <div className={styles.expDetail}><span className={styles.expDetailLabel}>Golf sessions</span><span className={styles.expDetailValue}>5 rounds included</span></div>
          </div>

          <div className={styles.expIncludes}>
            <span className={styles.expIncludesLabel}>What&apos;s included</span>
            <ul>
              <li>5 golf sessions across 4 premier courses</li>
              <li>Red Fort, Humayun&apos;s Tomb, Qutab Minar</li>
              <li>Taj Mahal &amp; Agra Fort sightseeing</li>
              <li>Amer Fort, Jantar Mantar, City Palace</li>
              <li>In-vehicle Wi-Fi throughout</li>
              <li>English-speaking guide for all sightseeing</li>
              <li>All accommodation, meals as planned</li>
              <li>All transfers in air-conditioned vehicle</li>
              <li>Monument entrance fees</li>
              <li>All applicable government taxes</li>
            </ul>
          </div>

          <div className={styles.expCta}>
            <Button href="/contact/?experience=fairways-wonders" variant="solidDark">
              Enquire about this experience
            </Button>
            <Link href="/experiences/fairways-wonders/" className={styles.expLink}>
              <span className={styles.expLinkLine}></span>Full programme details
            </Link>
          </div>
        </div>
      </article>

      {/* Golf Courses Grid */}
      <section className={styles.coursesSection} aria-labelledby="courses-title">
        <div className={styles.coursesHead}>
          <span className={styles.coursesKicker}>The courses</span>
          <h2 className={styles.coursesTitle} id="courses-title">Four <em>extraordinary</em> fairways</h2>
        </div>
        <div className={styles.coursesGrid}>
          <div className={styles.courseCard}>
            <div className={styles.courseCardImgWrap}>
              <div className={`${styles.ccImgPh} ${styles.golf1}`}></div>
            </div>
            <span className={styles.courseCardDesigner}>Est. 1930s · Delhi</span>
            <h3 className={styles.courseCardName}>Delhi Golf Club</h3>
            <span className={styles.courseCardLoc}>New Delhi</span>
            <p className={styles.courseCardDesc}>Nestled amid ancient Mughal ruins and century-old trees — a living museum of the sport where each hole is framed by architectural remnants. One of Asia&apos;s most respected and storied courses.</p>
          </div>

          <div className={styles.courseCard}>
            <div className={styles.courseCardImgWrap}>
              <div className={`${styles.ccImgPh} ${styles.golf2}`}></div>
            </div>
            <span className={styles.courseCardDesigner}>Gary Player Design · Arnold Palmer 9-hole</span>
            <h3 className={styles.courseCardName}>DLF Golf &amp; Country Club</h3>
            <span className={styles.courseCardLoc}>Gurgaon, Delhi NCR</span>
            <p className={styles.courseCardDesc}>A 27-hole championship complex that has hosted the Johnnie Walker Classic and Avantha Masters. Impeccably maintained fairways, water features and sculpted bunkers at the standard of international tournament play.</p>
          </div>

          <div className={styles.courseCard}>
            <div className={styles.courseCardImgWrap}>
              <div className={`${styles.ccImgPh} ${styles.golf3}`}></div>
            </div>
            <span className={styles.courseCardDesigner}>18-hole · Former Royal Course</span>
            <h3 className={styles.courseCardName}>Rambagh Golf Club</h3>
            <span className={styles.courseCardLoc}>Jaipur, Rajasthan</span>
            <p className={styles.courseCardDesc}>Once the private playground of Jaipur&apos;s royal family, set amid majestic palaces and imposing forts. The greens wind through landscaped gardens and historic vistas — golf where each hole tells a story of Rajput grandeur.</p>
          </div>

          <div className={styles.courseCard}>
            <div className={styles.courseCardImgWrap}>
              <div className={`${styles.ccImgPh} ${styles.golf4}`}></div>
            </div>
            <span className={styles.courseCardDesigner}>Jack Nicklaus Signature Design · 27 holes</span>
            <h3 className={styles.courseCardName}>Classic Golf &amp; Country Club</h3>
            <span className={styles.courseCardLoc}>ITC Grand Bharat, Gurgaon</span>
            <p className={styles.courseCardDesc}>The Golden Bear&apos;s masterpiece near Delhi — three nine-hole courses (Ridge, Valley, Canyon) integrating with the natural contours of the Aravalli hills. The fitting finale to any Indian golfing odyssey.</p>
          </div>
        </div>
      </section>

      {/* Stays — Fairways & Wonders */}
      <div className={styles.staysStrip} aria-label="Hotels for Fairways & Wonders">
        <span className={styles.ssLabel}>Where you stay</span>
        <div className={styles.ssHotels}>
          <div className={styles.ssHotel}><span className={styles.ssCity}>Delhi · 4N</span><span className={styles.ssName}>The Oberoi New Delhi</span></div>
          <div className={styles.ssHotel}><span className={styles.ssCity}>Agra · 1N</span><span className={styles.ssName}>Oberoi Amarvilas</span></div>
          <div className={styles.ssHotel}><span className={styles.ssCity}>Jaipur · 3N</span><span className={styles.ssName}>Rambagh Palace</span></div>
          <div className={styles.ssHotel}><span className={styles.ssCity}>Gurgaon · 1N</span><span className={styles.ssName}>ITC Grand Bharat</span></div>
        </div>
      </div>

      {/* ── HOW IT WORKS ───────────────────────────────── */}
      <section className={styles.how} aria-labelledby="how-title">
        <div className={styles.howHead}>
          <span className={styles.howKicker}>The process</span>
          <h2 className={styles.howTitle} id="how-title">From first enquiry<br />to <em>first day</em></h2>
        </div>
        <div className={styles.howSteps}>
          <div className={styles.howStep}>
            <span className={styles.howStepNum}>01</span>
            <p className={styles.howStepTitle}>Tell us about your group</p>
            <p className={styles.howStepText}>Who&apos;s travelling, how many, when you want to go and which experience interests you. The initial conversation is free and carries no obligation.</p>
          </div>
          <div className={styles.howStep}>
            <span className={styles.howStepNum}>02</span>
            <p className={styles.howStepTitle}>We build the proposal</p>
            <p className={styles.howStepText}>Our team — and the relevant specialist — put together a programme outline tailored to your group&apos;s size, interests, duration and travel style.</p>
          </div>
          <div className={styles.howStep}>
            <span className={styles.howStepNum}>03</span>
            <p className={styles.howStepTitle}>Refine together</p>
            <p className={styles.howStepText}>We iterate until every detail is right — the itinerary, accommodation, pace and inclusions. Nothing is fixed until you&apos;re happy.</p>
          </div>
          <div className={styles.howStep}>
            <span className={styles.howStepNum}>04</span>
            <p className={styles.howStepTitle}>We handle everything</p>
            <p className={styles.howStepText}>Hotels, transfers, tee times, treatment bookings, specialist scheduling — full logistics from confirmation to return. Travel insurance is mandatory and we can advise.</p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────── */}
      <div className={styles.finalCta}>
        <div>
          <h2 className={styles.fcTitle}>Begin with<br />a <em>conversation.</em></h2>
          <p className={styles.fcSub}>Tell us which experience interests you, who&apos;s travelling and when. We&apos;ll come back within 24 hours with an initial outline and a fee estimate. No obligation, no sales pitch — just the right information to help you decide.</p>
        </div>
        <div className={styles.fcBtns}>
          <Button href="/contact/" variant="solidLight">Start the conversation</Button>
          <Link href="/itineraries/" className={styles.btnGhost}>Browse private itineraries</Link>
        </div>
      </div>
    </div>
  );
}