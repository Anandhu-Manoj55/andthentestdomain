"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./AboutPage.module.css";

export const AboutPage = () => {
  return (
    <div style={{ background: "var(--cr)" }}>
      {/* ══ HERO BANNER ════════════════════════════════════ */}
      <header className={styles.hero}>
        <div className={styles.hero__bg}>
          <Image
            src="/Assets/About/Banner.jpg"
            alt="About AndThen Travels Background"
            fill
            priority
            style={{ objectFit: "cover", zIndex:1 }}
          />
        </div>
        <div className={styles.hero__content}>
          <span className={styles.hero__kicker}>About AndThen Travels</span>
          <h1 className={styles.hero__title}>
            Some people sell<br />journeys here.<br /><em>We plan them.</em>
          </h1>
          <p className={styles.hero__desc}>
            A  travel firm, arranging private
            journeys across India, Bhutan, Nepal and Sri Lanka for travellers who want
            to go somewhere real.
          </p>
        </div>
      </header>

      {/* ══ OPENING ═══════════════════════════════════════ */}
      {/* <section className={styles.opening}>
        <div className={styles["opening__text-col"]}>
          <span className={styles.opening__kicker}>AndThen Travels — who we are</span>
          <h1 className={styles.opening__title}>
            Some people sell<br />journeys here.<br /><em>We plan them.</em>
          </h1>
          <p className={styles.opening__intro}>
            AndThen Travels is a boutique destination management company built by
            people who live and work on the Indian subcontinent. We plan private
            journeys across India, Bhutan, Nepal and Sri Lanka for travellers who want
            to go beyond what a standard itinerary can offer, and who understand that
            the difference between a good trip and an exceptional one usually comes down
            to who is arranging it.
          </p>
        </div>
        <div className={styles["opening__image-col"]}>
          <Image
            className={styles["founder-img-ph"]}
            src="/Assets/home/About section.jpg"
            alt="Syam Kurup, co-founder AndThen Travels"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className={styles["opening__founder-tag"]}>
            <span className={styles["opening__founder-name"]}>Syam Kurup</span>
            <span className={styles["opening__founder-role"]}>
              Co-founder, AndThen Travels · Trivandrum &amp; Bengaluru
            </span>
          </div>
        </div>
      </section> */}

      {/* ══ THE SUBCONTINENT ═══════════════════════════════ */}
      <section className={styles.subcontinent}>
        <div className={styles.subcontinent__inner}>
          <span className={styles.subcontinent__kicker}>On the subcontinent</span>
          <h2 className={styles.subcontinent__title}>
            Four countries.<br /><em>One of the most complex,<br />rewarding regions on earth.</em>
          </h2>
          <div className={styles.imageContainer}>
            <Image
              src="/Assets/About/profile.png"
              alt="Syam Kurup - Profile Picture"
              width={160}
              height={160}
              className={styles.profileImage}
            />
          </div>
          {/* <div className={styles.subcontinent__rule}></div> */}
          <div className={styles.subcontinent__body}>
            <p>
              The Indian subcontinent covers roughly 4.5 million square kilometres and
              contains more distinct languages, cuisines, climates, architectural
              traditions, religious practices and landscape types than most continents.
              India alone has 28 states, each with a cultural identity as differentiated
              as a separate country. Kerala and Rajasthan share a passport but almost
              nothing else. The Himalayas, the Thar Desert, the Western Ghats and the
              backwaters of the south are not variations on a theme. They are entirely
              different worlds within a few hours of each other.
            </p>
            <p>
              Bhutan is the only country on earth that measures its national progress by
              Gross National Happiness rather than GDP. It limits the number of visitors
              deliberately. The monasteries you walk past in the Paro Valley have been
              standing since the 8th century. The silence there is of a particular
              quality that is hard to explain to anyone who hasn't stood in it.
            </p>
            <p>
              Nepal contains eight of the world's ten highest mountains and one of its
              most living, layered cities in Kathmandu, where medieval streets lead into
              temple squares that have functioned continuously for over a thousand years.
              Sri Lanka fits ancient kingdoms, highland tea country, leopard-dense jungle,
              colonial port towns and some of the world's finest reef diving into an island
              the size of Ireland.
            </p>

            <div className={styles["pull-quote"]}>
              <p className={styles["pull-quote__text"]}>
                Most people who come here for the first time say the same thing when they leave: it was bigger than I expected. Not in size, but in what it contained.
              </p>
            </div>

            <p>
              This region rewards people who travel with curiosity and patience, and who
              trust the people arranging their journey to take them somewhere real. The
              standard itinerary, the Golden Triangle in five days, the Bhutan circuit
              with three nights in Paro, the Sri Lanka rush from Colombo to Galle in a
              week, these are starting points at best. The subcontinent opens up
              properly when you slow down, go deeper into fewer places, and let someone
              who knows it well lead the way.
            </p>
            <p>That is what we do.</p>
          </div>
        </div>
      </section>

      {/* ══ FOUNDER LETTER ══════════════════════════════════ */}
      {/* <div className={styles["founder-letter"]}>
        <div className={styles.fl__image}>
          <Image
            className={styles["fl__img-ph"]}
            src="/Assets/banners/Banner image 3.jpg"
            alt="Syam Kurup, AndThen Travels"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.fl__body}>
          <span className={styles.fl__open}>&ldquo;</span>
          <div className={styles.fl__text}>
            <p>
              I grew up in Kerala and spent years working across the subcontinent in
              marketing and brand strategy. I have been to the places on every itinerary
              we build, many of them many times. I know which hotel in Udaipur has the
              better view and which one has the better service. I know which Bhutan guide
              will change how you see a monastery and which one will tell you its
              construction date and move on.
            </p>
            <p>
              What started as a conversation about what inbound travel to India could
              look like if it was done differently became AndThen. The idea was simple:
              build a travel company for people who don't want to be tourists, led by
              people who actually know this part of the world.
            </p>
            <p>
              We are based in Trivandrum and Bengaluru. Our network covers the entire
              subcontinent. When you travel with us, you are not talking to a booking
              system or a global operator with a regional office. You are talking to
              people for whom this is home, and who want you to understand why we love it.
            </p>
          </div>
          <div className={styles.fl__sig}>
            <div>
              <span className={styles["fl__sig-name"]}>Syam Kurup</span>
              <span className={styles["fl__sig-role"]}>
                Co-founder · AndThen Travels
              </span>
            </div>
          </div>
        </div>
      </div> */}

      {/* ══ WHY TRAVEL WITH US ══════════════════════════════ */}
      <section className={styles.why} aria-labelledby="why-title">
        <div className={styles.why__head}>
          <span className={styles.why__kicker}>Why travel with AndThen</span>
          <h2 className={styles.why__title} id="why-title">
            Six reasons the difference<br /><em>is worth knowing about</em>
          </h2>
        </div>

        <div className={styles.why__grid}>
          <div className={styles.why__item}>
            <span className={styles.why__num}>01</span>
            <p className={styles.why__heading}>We are based here</p>
            <p className={styles.why__text}>
              Our team lives and works in India. We are not a Western travel company with
              regional partners. When something changes, a road closes, a hotel has a
              problem, a festival dates shift, we know before you do, because we are
              already here. That proximity matters more than it might seem when you are
              14,000 kilometres from home.
            </p>
          </div>
          <div className={styles.why__item}>
            <span className={styles.why__num}>02</span>
            <p className={styles.why__heading}>Every journey is private</p>
            <p className={styles.why__text}>
              We do not run group departures. Every itinerary we build is for one party:
              your family, your group, your pace, your interests. You are never sharing a
              coach with strangers or kept to a schedule that was designed for someone
              else. The itinerary we build for you does not exist for anyone else.
            </p>
          </div>
          <div className={styles.why__item}>
            <span className={styles.why__num}>03</span>
            <p className={styles.why__heading}>We go to the places ourselves</p>
            <p className={styles.why__text}>
              We recommend hotels we have visited, guides we have worked with,
              restaurants we have eaten in. When we say a particular lodge at
              Ranthambore is worth the premium, it is because someone from our team has
              stayed there. We do not send you somewhere on the basis of a brochure or a
              third-party review.
            </p>
          </div>
        </div>

        <div className={`${styles.why__grid} ${styles["why__grid--row2"]}`}>
          <div className={styles.why__item}>
            <span className={styles.why__num}>04</span>
            <p className={styles.why__heading}>No set menus</p>
            <p className={styles.why__text}>
              We do not have a catalogue of fixed itineraries. We have a deep knowledge
              of four destinations and we build your trip from that knowledge, starting
              from what interests you. If you want three weeks in South India with no
              Golden Triangle, we build that. If you want Bhutan in November during a
              specific festival, we build that. The starting point is always your
              journey, not ours.
            </p>
          </div>
          <div className={styles.why__item}>
            <span className={styles.why__num}>05</span>
            <p className={styles.why__heading}>Access that takes years to build</p>
            <p className={styles.why__text}>
              Some of what we can arrange is not publicly available. Tee times at the
              Delhi Golf Club, early-morning access at sites that normally open later,
              one-on-one sessions with specialists like Dr. Methil Devika or Chef Bobby
              Geetha, reservations at properties that do not list openly, these things
              take relationships built over years. We have them.
            </p>
          </div>
          <div className={styles.why__item}>
            <span className={styles.why__num}>06</span>
            <p className={styles.why__heading}>We stay in touch throughout</p>
            <p className={styles.why__text}>
              Once you are travelling with us, you have a direct contact number for a
              member of our team, not a call centre. If anything needs adjusting on the
              ground, if you want to extend a stay or change a plan, you call us and it
              happens. We consider your journey finished when you are home, not when you
              have departed.
            </p>
          </div>
        </div>
      </section>

      {/* ══ DESTINATIONS BAND ══════════════════════════════ */}
      <div className={styles["dest-band"]} role="navigation" aria-label="Our destinations">
        <div className={styles["dest-band__item"]}>
          <span className={styles["dest-band__name"]}>India</span>
          <p className={styles["dest-band__desc"]}>
            From the Himalayan north to the backwaters of Kerala. Palace hotels,
            wildlife reserves, Ayurveda retreats, ancient temples and the kind of food
            that changes how you think about Indian cooking.
          </p>
          <Link href="/india/" className={styles["dest-band__link"]}>
            <span className={styles["dest-band__link-line"]}></span>Explore India
          </Link>
        </div>
        <div className={styles["dest-band__item"]}>
          <span className={styles["dest-band__name"]}>Bhutan</span>
          <p className={styles["dest-band__desc"]}>
            The world's only carbon-negative country. A place that limits visitors
            deliberately and feels, as a result, like somewhere that has been kept.
            Tiger's Nest. The Phobjikha Valley. The particular silence of the dzongs.
          </p>
          <Link href="/bhutan/" className={styles["dest-band__link"]}>
            <span className={styles["dest-band__link-line"]}></span>Explore Bhutan
          </Link>
        </div>
        <div className={styles["dest-band__item"]}>
          <span className={styles["dest-band__name"]}>Nepal</span>
          <p className={styles["dest-band__desc"]}>
            Kathmandu's living heritage, Chitwan's rhinos and tigers, the Himalayan range
            at dawn from a mountain flight, and Pokhara's lake-city calm. More variety
            than most countries ten times its size.
          </p>
          <Link href="/nepal/" className={styles["dest-band__link"]}>
            <span className={styles["dest-band__link-line"]}></span>Explore Nepal
          </Link>
        </div>
        <div className={styles["dest-band__item"]}>
          <span className={styles["dest-band__name"]}>Sri Lanka</span>
          <p className={styles["dest-band__desc"]}>
            Ancient rock fortresses, tea estates at 4,000 feet, the highest leopard
            density in the world, Dutch colonial Galle and beaches the south coast keeps
            to itself. All on one island.
          </p>
          <Link href="/sri-lanka/" className={styles["dest-band__link"]}>
            <span className={styles["dest-band__link-line"]}></span>Explore Sri Lanka
          </Link>
        </div>
      </div>

      {/* ══ FINAL CTA ══════════════════════════════════════ */}
      <div className={styles["final-cta"]}>
        <div>
          <h2 className={styles.fc__title}>
            Ready to start<br /><em>the conversation?</em>
          </h2>
          <p className={styles.fc__sub}>
            Tell us where you want to go, who's travelling and when. One of our
            specialists will come back to you within 24 hours with an initial outline.
            No obligation, no sales pitch.
          </p>
        </div>
        <div className={styles.fc__btns}>
          <Link href="/contact/">
            <button className={styles["btn-dark"]}>Plan my journey</button>
          </Link>
          <Link href="/itineraries/">
            <button className={styles["btn-ghost"]}>Browse itineraries</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
