import './PrivacyPolicy.css';

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="page-header">
  <span className="page-header__kicker">Legal</span>
  <h1 className="page-header__title">Privacy Policy &amp;<br /><em>Terms and Conditions</em></h1>
  <div className="page-header__meta">
    <span>AndThen Travels · Kawaakari Lifestyle Private Limited</span>
    <span>GST: 32AAHCK6672N1Z1</span>
    <span>Privacy policy last updated: October 2025</span>
    <span>Terms last updated: November 2023</span>
  </div>
</div>

{/*  ══ TAB / JUMP NAV ════════════════════════════════  */}
<nav className="tab-nav" role="toolbar" aria-label="Jump to section">
  <a className="tab-btn active" href="#privacy">Privacy Policy</a>
  <div className="tab-sep"></div>
  <a className="tab-btn" href="#terms">Terms &amp; Conditions</a>
  <div className="tab-sep"></div>
  <a className="tab-jump" href="#what-we-collect">What we collect</a>
  <a className="tab-jump" href="#your-rights">Your rights</a>
  <a className="tab-jump" href="#booking-payment">Booking &amp; payment</a>
  <a className="tab-jump" href="#cancellation">Cancellation</a>
  <a className="tab-jump" href="#liability">Liability</a>
</nav>

{/*  ══ MAIN LAYOUT ═══════════════════════════════════  */}
<div className="layout">

  {/*  ── CONTENT COLUMN ───────────────────────────  */}
  <div className="content">

    {/*  ════════════════════════════════════════════
         PRIVACY POLICY
    ════════════════════════════════════════════  */}
    <section className="doc-section" id="privacy" aria-labelledby="privacy-title">
      <span className="doc-section__label">Part One</span>
      <h2 className="doc-section__title" id="privacy-title">Privacy <em>Policy</em></h2>

      <div className="sub">
        <p className="sub__body">This privacy policy sets out how AndThen Travels uses and protects any information that you give us when you use this website. We are committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified, you can be assured that it will only be used in accordance with this privacy statement. We may change this policy from time to time by updating this page.</p>
      </div>

      {/*  What we collect  */}
      <div className="sub" id="what-we-collect">
        <h3 className="sub__heading"><span className="sub__heading-rule"></span>What we collect</h3>
        <div className="sub__body">
          <p>We may collect the following information:</p>
          <ul className="sub__list">
            <li>Name and contact information, including email address</li>
            <li>Personal details such as date of birth, where relevant</li>
            <li>Travel details such as passport information, where relevant</li>
            <li>Demographic information such as postcode, preferences and interests</li>
            <li>Other information relevant to customer surveys and offers</li>
          </ul>
        </div>
      </div>

      {/*  Consent  */}
      <div className="sub">
        <h3 className="sub__heading"><span className="sub__heading-rule"></span>Consent</h3>
        <div className="sub__body">
          <p>The following activities are carried out using your personal data because it is necessary in relation to a contract you have entered into, or because you have asked for something to be done so you can enter into a contract:</p>
          <ul className="sub__list">
            <li>Administering your booking internally and communicating it externally with our suppliers, to ensure the services you have requested are arranged</li>
            <li>Communicating with you regarding your booking or any other purchase, including sending booking confirmations and travel documents</li>
          </ul>
        </div>
      </div>

      {/*  What we do with the information  */}
      <div className="sub">
        <h3 className="sub__heading"><span className="sub__heading-rule"></span>What we do with the information we gather</h3>
        <div className="sub__body">
          <p>We require this information to understand your needs and provide you with a better service, specifically for:</p>
          <ul className="sub__list">
            <li>Internal record keeping</li>
            <li>Providing information to suppliers where relevant to secure your holiday arrangements</li>
            <li>Improving our products and services</li>
            <li>Periodically sending promotional emails about new products, special offers or other information we think you may find interesting — only where you have first given consent</li>
          </ul>
        </div>
      </div>

      {/*  Retention  */}
      <div className="sub">
        <h3 className="sub__heading"><span className="sub__heading-rule"></span>How long we keep your information</h3>
        <div className="sub__body">
          <p>We retain your personal data for a period of up to eighteen months following your purchase. Please refer to the Your Rights section below if you wish your information to be removed prior to this.</p>
        </div>
      </div>

      {/*  Security  */}
      <div className="sub">
        <h3 className="sub__heading"><span className="sub__heading-rule"></span>Security</h3>
        <div className="sub__body">
          <p>We are committed to ensuring that your information is secure. To prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.</p>
          <p>Your details are stored on secure servers, except when required by our Indian suppliers to secure holiday arrangements for you. India does not currently meet the conditions set out by GDPR in that the EU Commission has decided it does not ensure an adequate level of protection. We will ensure that you are informed of this prior to booking, and that you have given explicit consent to the proposed transfer of information to these suppliers.</p>
        </div>
      </div>

      {/*  Cookies  */}
      <div className="sub">
        <h3 className="sub__heading"><span className="sub__heading-rule"></span>How we use cookies</h3>
        <div className="sub__body">
          <p>A cookie is a small file which asks permission to be placed on your computer's hard drive. Cookies allow web applications to respond to you as an individual, tailoring operations to your needs, likes and dislikes by gathering and remembering information about your preferences.</p>
          <p>We use traffic log cookies to identify which pages are being used — this helps us analyse web page traffic and improve our website. We only use this information for statistical analysis purposes and the data is then removed from the system. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us. You will be given the option to accept or decline the use of cookies when you visit our website.</p>
        </div>
      </div>

      {/*  How personal information is shared  */}
      <div className="sub">
        <h3 className="sub__heading"><span className="sub__heading-rule"></span>How your personal information is shared</h3>
        <div className="sub__body">
          <p>Your personal data is held on a combination of our own systems and systems of the suppliers we use to provide our services. When you give your personal data to us, some of it will need to be given to and processed and stored by relevant third parties. These include our travel partners such as hoteliers, rail operators, tour guides, spas, national parks and other suppliers of our experiences.</p>
        </div>
      </div>

      {/*  Links to other websites  */}
      <div className="sub">
        <h3 className="sub__heading"><span className="sub__heading-rule"></span>Links to other websites</h3>
        <div className="sub__body">
          <p>Our website may contain links to other websites of interest. Once you leave our site, we do not have any control over that other website and cannot be responsible for the protection and privacy of any information you provide whilst visiting such sites. You should exercise caution and look at the privacy policy applicable to each website you visit.</p>
        </div>
      </div>

      {/*  Your rights  */}
      <div className="sub" id="your-rights">
        <h3 className="sub__heading"><span className="sub__heading-rule"></span>Your rights</h3>
        <div className="sub__body">
          <p>You may choose to restrict the collection or use of your personal information. To exercise any of the rights below, please write to us at <a href="mailto:travel@andthentravels.com" >travel@andthentravels.com</a>.</p>
        </div>
        <div className="rights-grid">
          <div className="right-item">
            <span className="right-item__name">Access</span>
            <p className="right-item__desc">You have the right to get access to the personal information we hold about you. Request a copy by emailing us.</p>
          </div>
          <div className="right-item">
            <span className="right-item__name">Rectification</span>
            <p className="right-item__desc">You have the right to correct inaccurate personal information and to update incomplete personal information we hold.</p>
          </div>
          <div className="right-item">
            <span className="right-item__name">Erasure</span>
            <p className="right-item__desc">You may request that we delete your personal information if we no longer need to process it for the purposes for which it was provided.</p>
          </div>
          <div className="right-item">
            <span className="right-item__name">Restriction</span>
            <p className="right-item__desc">You may request that we restrict processing your personal information if you believe it is inaccurate or we are not using it in a lawful manner.</p>
          </div>
          <div className="right-item">
            <span className="right-item__name">Portability</span>
            <p className="right-item__desc">Where processing is based on a contract and is automated, you have the right to receive your personal information in a portable format.</p>
          </div>
          <div className="right-item">
            <span className="right-item__name">Objection</span>
            <p className="right-item__desc">You have the right to object to the processing of your personal information, including for direct marketing and profiling purposes.</p>
          </div>
          <div className="right-item">
            <span className="right-item__name">Withdraw consent</span>
            <p className="right-item__desc">Where we rely on your permission to process your personal information, you have the right to withdraw your consent at any time.</p>
          </div>
          <div className="right-item">
            <span className="right-item__name">Marketing</span>
            <p className="right-item__desc">You have the right to object at any time to the processing of your personal information for direct marketing purposes.</p>
          </div>
        </div>
      </div>

      <div className="contact-card">
        <p className="contact-card__text"><strong>Privacy enquiries</strong><br />Kawaakari Lifestyle Private Limited · GST: 32AAHCK6672N1Z1 · India | USA</p>
        <a href="mailto:travel@andthentravels.com" className="contact-card__link">travel@andthentravels.com</a>
      </div>

    </section>


    {/*  ════════════════════════════════════════════
         TERMS & CONDITIONS
    ════════════════════════════════════════════  */}
    <section className="doc-section doc-section--alt" id="terms" aria-labelledby="terms-title">
      <span className="doc-section__label">Part Two</span>
      <h2 className="doc-section__title" id="terms-title">Terms &amp;<br /><em>Conditions</em></h2>

      <div className="sub">
        <p className="sub__body">The following contract details the agreements between AndThen Travels and you with respect to your travel arrangements with us.</p>
      </div>

      {/*  General  */}
      <div className="sub">
        <h3 className="sub__heading"><span className="sub__heading-rule"></span>General</h3>
        <div className="sub__body">
          <ul className="sub__olist">
            <li>This website is offered to you conditioned on your acceptance without modification of the terms, conditions and notices contained herein. Your use of this website constitutes your agreement to all such terms, conditions and notices, which are subject to amendment without notice. You agree to familiarise yourself with the Terms of Use and other terms found throughout this website and abide by them.</li>
            <li>As a condition of your use of our website, you warrant that you will not use this website for any purpose that is unlawful or prohibited by these terms, conditions and notices.</li>
            <li>All trips and prices shown, if any, are subject to availability and possible change without notice.</li>
            <li>Itineraries may differ from advertised due to circumstances beyond our control.</li>
          </ul>
        </div>
      </div>

      {/*  Tour costs  */}
      <div className="sub">
        <h3 className="sub__heading"><span className="sub__heading-rule"></span>Tour costs and inclusions</h3>
        <div className="sub__body">
          <p>All tour costs are based upon the specified services in your customised itinerary as per the Inclusions section. Tour costs generally include: accommodation; private sightseeing with local, English-speaking guides; admission fees where specified; meals as indicated; accommodation taxes and service charges; regional surface transportation; internal flights where specified; airport, train and port transfers as specified; government fees and local handling charges; and the full services of AndThen Travels before, during and after your trip.</p>
          <p>Quoted tour prices include extensive personalised planning and operational charges, and are based on current rates of exchange, airfares, tariffs and taxes as of the date of issuance of your itinerary. Prices are valid for the travel dates specified. AndThen Travels reserves the right to increase tour prices to cover increased costs, airfares, tariffs, taxes and fluctuations in foreign exchange markets. Prices are based on the number of travellers in your party — additions or withdrawals may alter the price for each participant.</p>
        </div>
      </div>

      {/*  Items not included  */}
      <div className="sub">
        <h3 className="sub__heading"><span className="sub__heading-rule"></span>Items not included</h3>
        <div className="sub__body">
          <p>Unless otherwise specified in your detailed itinerary, the following are not included:</p>
          <ul className="sub__list">
            <li>International flights and private air charters</li>
            <li>Airport departure taxes</li>
            <li>Gratuities and tips</li>
            <li>Laundry and alcoholic beverages</li>
            <li>Excess baggage charges</li>
            <li>Visa fees for visas obtained on arrival</li>
            <li>Travel insurance</li>
            <li>Optional tours or activities not specified in the itinerary</li>
            <li>Items of a personal nature and any items not specifically listed as included</li>
          </ul>
        </div>
      </div>

      {/*  Insurance  */}
      <div className="sub">
        <h3 className="sub__heading"><span className="sub__heading-rule"></span>Insurance</h3>
        <div className="sub__body">
          <ul className="sub__olist">
            <li>Travellers are strongly advised to ensure they have comprehensive travel insurance coverage (including cancellation, personal injury, medical expenses, loss of luggage, flight delay and medical evacuation) during their trip.</li>
            <li>AndThen Travels is not responsible for the insurance arrangements of clients and will not be liable for expenses arising out of cancellation, injury, medical expenses or death.</li>
          </ul>
        </div>
      </div>

      {/*  Booking & payment  */}
      <div className="sub" id="booking-payment">
        <h3 className="sub__heading"><span className="sub__heading-rule"></span>Booking &amp; payment policy</h3>
        <div className="sub__body">
          <ul className="sub__olist">
            <li>25% of the tour expense is to be deposited with AndThen Travels at the time of booking. This deposit, along with a letter from AndThen Travels on receipt, constitutes confirmation of the booking.</li>
            <li>The full payment for the tour needs to be paid 60 days prior to the start of our service.</li>
            <li>Full payments are required in advance for flight ticket bookings and in certain cases such as special train journeys, or hotel bookings during peak season (Christmas and New Year, for example).</li>
          </ul>
          <p>Payments can be made via online bank transfer. Prices are quoted in Indian Rupees. We are happy to receive payment in any internationally acceptable currency, converted using the exchange rate stipulated by the Reserve Bank of India on the date payment is made. Any bank charges are to be borne by the client. Additional surcharges may apply for payments made using cards.</p>
        </div>
      </div>

      {/*  Health  */}
      <div className="sub">
        <h3 className="sub__heading"><span className="sub__heading-rule"></span>Health and physical condition</h3>
        <div className="sub__body">
          <p>Participants are understood to be in sufficient good health to undertake foreign travel. We request that all travellers notify us in writing as early as possible of any physical or health conditions, dietary requirements, mobility needs or other special needs. We will make reasonable efforts to accommodate these, but regret that we cannot provide special individual assistance for ordinary daily activities. Unless specific arrangements have been confirmed, we will not physically push wheelchairs or lift participants onto or off transportation vehicles.</p>
        </div>
      </div>

      {/*  Passports & visas  */}
      <div className="sub">
        <h3 className="sub__heading"><span className="sub__heading-rule"></span>Passports and visas</h3>
        <div className="sub__body">
          <p>All participants must be in possession of a passport valid for six months from their date of arrival in any foreign country. It is the sole responsibility of the tour participant to secure a valid passport with sufficient blank pages for immigration and visa stamps. Although AndThen Travels cannot be responsible for visas unless a specific arrangement is made, we are happy to assist in securing necessary tourist visas.</p>
        </div>
      </div>

      {/*  Alterations  */}
      <div className="sub">
        <h3 className="sub__heading"><span className="sub__heading-rule"></span>Alterations of arrangements</h3>
        <div className="sub__body">
          <p>Voluntary changes made by tour participants after the itinerary has been finalised will be subject to additional cost. AndThen Travels reserves the right to alter or modify the itinerary without advance notice should events beyond our control require it, and to substitute a tour component of equal standard. Any costs resulting from such modifications shall be the responsibility of the tour participants.</p>
          <p>If any trip is delayed due to bad weather, flight delays, overbooking, government intervention, acts of war, acts of terrorism, sickness or any other contingency beyond our control, the additional costs will be the responsibility of the tour participant. If a tour is cancelled, our liability is limited to a full refund of tour payments made to us.</p>
        </div>
      </div>

      {/*  Cancellation  */}
      <div className="sub" id="cancellation">
        <h3 className="sub__heading"><span className="sub__heading-rule"></span>Cancellation &amp; refund policy</h3>
        <div className="sub__body">
          <p>Cancellations must be notified to AndThen Travels in writing. The following charges apply:</p>
        </div>
        <table className="cancel-table" aria-label="Cancellation charges">
          <thead>
            <tr>
              <th>Notice period before start of service</th>
              <th>Cancellation charge</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>At booking (deposit)</td><td>25% non-refundable deposit</td></tr>
            <tr><td>60 to 45 days prior</td><td>25% of total tour expenses</td></tr>
            <tr><td>45 to 30 days prior</td><td>50% of total tour expenses</td></tr>
            <tr><td>30 to 20 days prior</td><td>75% of total tour expenses</td></tr>
            <tr><td>20 days to day of start</td><td>100% of total tour expenses</td></tr>
          </tbody>
        </table>
        <div className="sub__body" >
          <p>If AndThen Travels cancels a tour due to force majeure (disaster, war, riots, political or industrial unrest, airline strike or any other event outside our control), clients will be informed as soon as possible and expenses borne by the client will be refunded in full, along with an alternate tour option where possible.</p>
          <p>AndThen Travels will not refund the booking amount where entry is refused due to visa or health factors — such cancellations will be guided by the standard cancellation policy above. For unused hotel accommodation, chartered accommodation and missed meals, we do not bear any responsibility or offer refunds. Domestic flight tickets issued on special fares will incur full cancellation charges in most cases.</p>
        </div>
      </div>

      {/*  Liability  */}
      <div className="sub" id="liability">
        <h3 className="sub__heading"><span className="sub__heading-rule"></span>Our liabilities &amp; limitations</h3>
        <div className="sub__body">
          <p>AndThen Travels acts in the capacity of an agent for hotels, airlines, transporters, railways and contractors providing other services. All contracts and tickets issued by us are subject to the terms and conditions under which those services are provided. We shall not be held responsible for any delays or alterations in the programme, or any expenses incurred directly or indirectly due to flight cancellations, natural hazards, breakdown of transport, accidents, weather, illness, political closures, landslides or any untoward incidents.</p>
          <p>We do not have insurance policies covering sickness, accident or losses due to theft. All personal property and baggage is at the client's risk at all times. The services provided by our suppliers are subject to the laws of the place where the services are provided. AndThen Travels' maximum liability, for any reason whatsoever, will be limited to the amount paid to AndThen Travels for its services. Payment of tour fees constitutes consent to all provisions of this agreement.</p>
        </div>
      </div>

      <div className="contact-card">
        <p className="contact-card__text"><strong>General enquiries</strong><br />Kawaakari Lifestyle Private Limited · GST: 32AAHCK6672N1Z1 · India | USA</p>
        <a href="mailto:travel@andthentravels.com" className="contact-card__link">travel@andthentravels.com</a>
      </div>

    </section>

  </div>{/*  /content  */}

  {/*  ── SIDEBAR ────────────────────────────────────  */}
  <aside className="sidebar" aria-label="Page navigation">

    <div className="sb__block">
      <span className="sb__label">Contents</span>
      <ul className="sb__toc">
        <li className="sb__toc-section">
          <span className="sb__toc-section-title">Privacy Policy</span>
          <ul className="sb__toc-links">
            <li><a href="#what-we-collect">What we collect</a></li>
            <li><a href="#privacy">Consent</a></li>
            <li><a href="#privacy">What we do with information</a></li>
            <li><a href="#privacy">How long we keep data</a></li>
            <li><a href="#privacy">Security</a></li>
            <li><a href="#privacy">Cookies</a></li>
            <li><a href="#privacy">How information is shared</a></li>
            <li><a href="#your-rights">Your rights</a></li>
          </ul>
        </li>
        <li className="sb__toc-section">
          <span className="sb__toc-section-title">Terms &amp; Conditions</span>
          <ul className="sb__toc-links">
            <li><a href="#terms">General</a></li>
            <li><a href="#terms">Tour costs &amp; inclusions</a></li>
            <li><a href="#terms">Items not included</a></li>
            <li><a href="#terms">Insurance</a></li>
            <li><a href="#booking-payment">Booking &amp; payment</a></li>
            <li><a href="#terms">Health &amp; physical condition</a></li>
            <li><a href="#terms">Passports &amp; visas</a></li>
            <li><a href="#terms">Alterations</a></li>
            <li><a href="#cancellation">Cancellation &amp; refunds</a></li>
            <li><a href="#liability">Liability &amp; limitations</a></li>
          </ul>
        </li>
      </ul>
    </div>

    <div className="sb__block">
      <span className="sb__label">Company</span>
      <div className="sb__info-item">
        <span className="sb__info-label">Registered name</span>
        <p className="sb__info-value">Kawaakari Lifestyle Private Limited</p>
      </div>
      <div className="sb__info-item">
        <span className="sb__info-label">GST</span>
        <p className="sb__info-value">32AAHCK6672N1Z1</p>
      </div>
      <div className="sb__info-item">
        <span className="sb__info-label">Offices</span>
        <p className="sb__info-value">India · USA</p>
      </div>
      <div className="sb__info-item">
        <span className="sb__info-label">Email</span>
        <p className="sb__info-value"><a href="mailto:travel@andthentravels.com">travel@andthentravels.com</a></p>
      </div>
      <div className="sb__info-item">
        <span className="sb__info-label">Phone</span>
        <p className="sb__info-value"><a href="tel:+918129271155">+91 8129 271 155</a></p>
      </div>
    </div>

    <div className="sb__block">
      <span className="sb__label">Quick links</span>
      <ul className="sb__toc-links">
        <li><a href="/contact/">Contact us</a></li>
        <li><a href="/itineraries/">Browse itineraries</a></li>
        <li><a href="/journal/">Journal</a></li>
        <li><a href="/about/">About AndThen</a></li>
      </ul>
    </div>

  </aside>

</div>{/*  /layout  */}
    </>
  );
}
