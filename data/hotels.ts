import type { Hotel } from "@/types/hotel";

export const hotels: Hotel[] = [
  //Awakening of an empire
  //1
  {
    id: "evolve-back-hampi",
    name: "Evolve Back Hampi",
    location: "Hampi, Karnataka",
    category: "india",

    image: "/Assets/hotels/Evolve-Back-Hampi.jpg",
    alt: "Evolve Back Hampi, Hampi, Karnataka",

    accentClass: "hi--india-heritage",

    intro:
      "There are few places in India where history feels as immediate as it does in Hampi. Massive granite boulders, temple towers and the Tungabhadra River create a landscape that once formed the heart of the Vijayanagara Empire. Evolve Back Hampi draws inspiration from this remarkable setting through architecture that reflects the region's heritage with quiet elegance.\n\nGrand courtyards, carved stone details and graceful colonnades create an atmosphere rooted in history. Days are spent exploring the UNESCO World Heritage Site before returning to surroundings that continue the story through local craftsmanship, regional cuisine and thoughtful hospitality. For travellers who value culture, architecture and a strong sense of place, the experience is as memorable as the destination itself.",

    why: "Evolve Back Hampi does more than provide a luxurious stay—it brings the story of the Vijayanagara Empire to life through architecture, craftsmanship and a deep connection to its surroundings. Returning to the resort after exploring Hampi's remarkable monuments feels like a continuation of the journey rather than the end of a day's sightseeing. It is this seamless blend of heritage, thoughtful hospitality and sense of place that makes every stay both enriching and memorable.",

    highlights: [
      "Inspired by the grandeur of the Vijayanagara Empire",
      "Luxury heritage resort near Hampi's UNESCO World Heritage monuments",
      "Architecture featuring grand courtyards, carved stone details and graceful colonnades",
      "Authentic regional cuisine and local craftsmanship",
      "Ideal base for exploring Hampi's cultural and historical landmarks",
    ],

    exploreDestination: [
      {
        name: "Virupaksha Temple",
        description:
          "Standing at the heart of Hampi's sacred landscape, this centuries-old temple remains an active place of worship and reveals the city's enduring spiritual heritage.",
      },
      {
        name: "Vijaya Vittala Temple",
        description:
          "Famous for its iconic stone chariot and exquisite carvings, this temple is among India's greatest architectural masterpieces.",
      },
      {
        name: "Matanga Hill",
        description:
          "A sunrise or sunset climb rewards visitors with panoramic views of Hampi's boulder-strewn landscape, temple complexes and the Tungabhadra River.",
      },
      {
        name: "Tungabhadra River",
        description:
          "A traditional coracle ride offers a peaceful perspective of the landscape, passing ancient shrines, banana plantations and remarkable rock formations.",
      },
      {
        name: "Royal Enclosure",
        description:
          "The former administrative heart of the Vijayanagara Empire preserves palace remains, ceremonial platforms and sophisticated water systems that illustrate the scale of this once-great kingdom.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Jindal Vijaynagar Airport",
          location: "Vidyanagar",
          code: "VDY",
          distance: "Nearest airport",
        },
        {
          name: "Hubballi Airport",
          code: "HBX",
          distance: "176 km • Approximately 3 hours by road",
        },
        {
          name: "Kempegowda International Airport",
          location: "Bengaluru",
          code: "BLR",
          distance: "361 km • Approximately 6 hours by road",
        },
      ],
    },

    idealFor: [
      "Cultural Explorers",
      "History Enthusiasts",
      "Couples",
      "Photographers",
      "Slow Travellers",
      "Multi-generational Holidays",
      "Architecture Lovers",
    ],

    website: "https://www.evolveback.com/",

    map: "https://www.google.com/maps/place/Evolve+Back,+Hampi/@15.2744271,76.476741,17z/data=!4m10!3m9!1s0x3bb77e0aac461def:0x4d3fb548f3abefdf!5m3!1s2026-07-08!4m1!1i2!8m2!3d15.2744219!4d76.4793159!16s%2Fg%2F11cmt0c2mh?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "UNESCO World Heritage",
      "Vijayanagara Empire",
      "Heritage Architecture",
      "Luxury Resort",
      "Cultural Experiences",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Heritage",
  },
  //2
  {
    id: "grand-mercure-mysore",
    name: "Grand Mercure Mysore",
    location: "Mysuru, Karnataka",
    category: "india",

    image: "/Assets/hotels/Grand-Mercure-Mysuru.jpg",
    alt: "Grand Mercure Mysore, Mysuru, Karnataka",

    accentClass: "hi--india-heritage",

    intro:
      "Mysuru is a city that wears its royal heritage with quiet confidence. Wide, tree-lined avenues lead to magnificent palaces, centuries-old temples and bustling markets where the fragrance of sandalwood and jasmine still lingers in the air. Unlike destinations that have surrendered entirely to modernity, Mysuru has preserved a rhythm that feels measured, elegant and deeply rooted in tradition. It is within this cultural landscape that Grand Mercure Mysore finds its place.\n\nRather than attempting to recreate the grandeur of the Wadiyar dynasty, the hotel presents a contemporary interpretation of Mysuru's enduring sophistication. Subtle references to local craftsmanship, art and design create interiors that acknowledge the city's heritage while remaining comfortably modern. Natural light, generous spaces and a welcoming atmosphere encourage guests to slow down, whether returning from an afternoon exploring the city's monuments or preparing for another day of discovery.\n\nIts location makes it particularly appealing for travellers who wish to experience Mysuru beyond a hurried sightseeing itinerary. The city's celebrated palace, lively markets, museums and culinary traditions are all within easy reach, allowing each day to unfold naturally. Mornings may begin with a walk through historic neighbourhoods, afternoons exploring galleries and royal residences, and evenings spent watching the illuminated Mysore Palace before returning to the comfort of the hotel.",

    why: "Grand Mercure Mysore allows travellers to experience the city at its own pace. Comfortable, contemporary and well located, it provides a welcoming retreat after days spent exploring magnificent palaces, colourful markets and centuries-old temples. It reflects the understated elegance that defines Mysuru itself.",

    highlights: [
      "Contemporary luxury inspired by Mysuru's royal heritage",
      "Excellent location near Mysore Palace and the city's cultural attractions",
      "Elegant interiors featuring subtle local craftsmanship and design",
      "Easy access to museums, markets, temples and historic neighbourhoods",
      "Ideal base for discovering Mysuru's history, cuisine and culture",
    ],

    exploreDestination: [
      {
        name: "Mysore Palace",
        description:
          "The magnificent Mysore Palace is the cultural heart of the city and one of India's most celebrated royal residences. Home to the Wadiyar dynasty, the palace is admired for its blend of Hindu, Indo-Saracenic, Rajput and Gothic architectural influences. Richly decorated halls, intricate stained glass ceilings, carved teak doors and elaborate murals tell the story of a royal family whose legacy continues to shape Mysuru today. Visitors arriving in the evening are rewarded with the spectacular illumination of thousands of lights that transform the palace into an unforgettable sight.",
      },
      {
        name: "Chamundi Hill",
        description:
          "Watching over Mysuru from the southeast, Chamundi Hill is both a place of pilgrimage and one of the city's finest viewpoints. The hill is crowned by the Chamundeshwari Temple, dedicated to the city's patron deity, while the enormous monolithic Nandi statue along the route reflects centuries of devotion and craftsmanship. The panoramic views from the summit provide an appreciation of Mysuru's elegant layout and surrounding countryside.",
      },
      {
        name: "Devaraja Market",
        description:
          "For travellers wishing to experience everyday Mysuru, few places are more rewarding than Devaraja Market. The bustling arcades are filled with fragrant jasmine garlands, colourful spices, sandalwood incense, fresh produce, silk fabrics and traditional handicrafts. More than a shopping destination, it offers a fascinating insight into local life and the traditions that continue to define the city.",
      },
      {
        name: "St. Philomena's Cathedral",
        description:
          "Inspired by Neo-Gothic architecture, St. Philomena's Cathedral is among the tallest churches in Asia. Its soaring twin spires dominate the skyline, while beautiful stained-glass windows depict important moments from Christian history. The peaceful atmosphere inside provides a striking contrast to the busy streets beyond.",
      },
      {
        name: "Brindavan Gardens",
        description:
          "Located beside the Krishnaraja Sagar Dam, Brindavan Gardens has attracted visitors for generations with its elegant terraces, ornamental fountains and carefully maintained landscapes. The famous musical fountain show after sunset combines water, music and light in a delightful evening spectacle, making it one of Mysuru's most popular attractions.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Mysore Airport",
          code: "MYQ",
          distance: "Nearest airport",
        },
        {
          name: "Kempegowda International Airport",
          location: "Bengaluru",
          code: "BLR",
          distance: "178 km • Approximately 3 hours by road",
        },
      ],
    },

    idealFor: [
      "Cultural Explorers",
      "Couples",
      "Families",
      "Heritage Enthusiasts",
      "Food Lovers",
      "Slow Travellers",
    ],

    website: "https://www.grandmercure.com/city/mysore/",

    map: "https://www.google.com/maps/place/Grand+Mercure+Mysore/@12.3302219,76.6425122,17z/data=!4m10!3m9!1s0x3baf707ecd37258f:0x8512c6be740173cf!5m3!1s2026-07-08!4m1!1i2!8m2!3d12.3302167!4d76.6450871!16s%2Fg%2F11clt9_gkz?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Royal Heritage",
      "Mysore Palace",
      "Cultural City",
      "Luxury Hotel",
      "Contemporary Design",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Heritage",
  },
  //3
  {
    id: "taj-bangalore",
    name: "Taj Bangalore",
    location: "Bengaluru, Karnataka",
    category: "india",

    image: "/Assets/hotels/Taj-Bangalore.jpg",
    alt: "Taj Bangalore, Bengaluru, Karnataka",

    accentClass: "hi--india-city",

    intro:
      "Taj Bangalore stands at the gateway to Bengaluru, directly opposite Kempegowda International Airport, offering a refined beginning or conclusion to journeys across South India. More than a convenient stopover, the hotel combines contemporary architecture with warm Indian hospitality, creating an atmosphere that is calm, elegant and effortlessly welcoming. Spacious interiors, thoughtful design and a strong emphasis on personalised service ensure guests can unwind after a long flight or prepare comfortably for the next stage of their travels. Business travellers appreciate its seamless accessibility, while leisure guests value it as an ideal first or final stay before exploring Karnataka. The experience is defined by understated sophistication, making every arrival and departure feel relaxed and memorable.",

    why: "Taj Bangalore proves that convenience need not come at the expense of character. Its location, thoughtful service and polished ambience create a seamless transition between travel and relaxation, making it one of India's finest airport hotels.",

    highlights: [
      "Located directly opposite Kempegowda International Airport",
      "Contemporary luxury with signature Taj hospitality",
      "Ideal gateway to Bengaluru and South India",
      "Perfect for business travellers, transit guests and luxury stopovers",
      "Exceptional personalised service with elegant, spacious interiors",
    ],

    exploreDestination: [
      {
        name: "Nandi Hills",
        description:
          "A scenic hilltop known for sunrise views, historic forts and pleasant weather.",
      },
      {
        name: "Devanahalli Fort",
        description:
          "The historic birthplace of Tipu Sultan, showcasing Karnataka's military heritage.",
      },
      {
        name: "Bengaluru Palace",
        description:
          "A magnificent royal residence featuring elegant interiors and fascinating history.",
      },
      {
        name: "Cubbon Park",
        description:
          "The city's green heart, perfect for leisurely walks beneath mature trees.",
      },
      {
        name: "Church Street & MG Road",
        description:
          "Bengaluru's vibrant cultural district with cafés, bookstores, galleries and restaurants.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Kempegowda International Airport",
          location: "Bengaluru",
          code: "BLR",
          distance: "Directly opposite the hotel (walking distance)",
        },
      ],
    },

    idealFor: [
      "Business Travellers",
      "Transit Guests",
      "Couples",
      "Families",
      "Luxury Stopovers",
    ],

    website: "https://www.tajhotels.com/en-in/hotels/taj-bangalore",

    map: "https://www.google.com/maps/place/Taj+Bangalore,+Bengaluru/@13.1971338,77.7075608,17z/data=!4m10!3m9!1s0x3bae1cfd3250d2b9:0xf1e234798c0b8d8!5m3!1s2026-07-08!4m1!1i2!8m2!3d13.1971286!4d77.7101357!16s%2Fg%2F11bbrkglb9?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Airport Hotel",
      "Taj Hotels",
      "Business Travel",
      "Luxury Stay",
      "Bengaluru Gateway",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Luxury Hotel",
  },
  //4
  {
    id: "taj-madikeri-resort-spa-coorg",
    name: "Taj Madikeri Resort & Spa, Coorg",
    location: "Madikeri, Coorg, Karnataka",
    category: "india",

    image: "/Assets/hotels/Taj-Madikeri-Coorg.avif",
    alt: "Taj Madikeri Resort & Spa, Coorg, Karnataka",

    accentClass: "hi--india-mountain",

    intro:
      "Perched amidst the mist-covered hills of Coorg, Taj Madikeri Resort & Spa is a retreat where nature sets the rhythm of every day. Surrounded by dense rainforests, coffee plantations and sweeping valley views, the resort embraces the landscape rather than competing with it. Contemporary architecture blends harmoniously with the natural contours of the hillside, while expansive windows and open spaces ensure that the forests remain an ever-present part of the experience.\n\nThe resort encourages guests to slow down and reconnect with the Western Ghats, one of the world's richest biodiversity hotspots. Mornings begin with birdsong drifting through the trees, afternoons invite leisurely walks through coffee estates or restorative wellness experiences, and evenings are best spent watching layers of mist settle across the valleys. Interiors feature warm natural materials, subtle Kodava influences and an understated elegance that reflects the spirit of Coorg rather than overwhelming it.\n\nWhether travelling as a couple seeking a peaceful escape, a family celebrating a special occasion or simply exploring Karnataka's hill country, the resort provides an ideal balance of comfort, privacy and authentic hospitality. It is a destination where the landscape remains the greatest luxury, allowing every stay to feel deeply connected to the remarkable environment that surrounds it.",

    why: "Taj Madikeri Resort & Spa captures the essence of Coorg through its close relationship with the surrounding forests and coffee estates. Every aspect of the experience encourages guests to appreciate the tranquillity, fresh mountain air and unhurried pace that define the region, making it an ideal retreat for travellers seeking both comfort and a genuine sense of place.",

    highlights: [
      "Nestled amidst Coorg's mist-covered hills and dense rainforests",
      "Spectacular valley views surrounded by coffee plantations",
      "Contemporary architecture inspired by the natural landscape",
      "Immersive wellness experiences in the Western Ghats",
      "Luxury retreat blending Kodava heritage with refined hospitality",
    ],

    exploreDestination: [
      {
        name: "Abbey Falls",
        description:
          "Set amidst coffee and spice plantations, Abbey Falls is one of Coorg's best-known natural attractions. A short walk through lush greenery leads to cascading waters that are especially spectacular during and after the monsoon, making it a favourite stop for nature lovers and photographers.",
      },
      {
        name: "Raja's Seat",
        description:
          "Once a favoured viewpoint of the Kodagu kings, Raja's Seat commands sweeping views across rolling hills and mist-filled valleys. Sunrise and sunset are particularly memorable, when changing light transforms the landscape into a panorama of layered greens and soft mountain silhouettes.",
      },
      {
        name: "Dubare Elephant Camp",
        description:
          "Located on the banks of the River Kaveri, Dubare offers visitors the opportunity to learn about elephant conservation and the region's forest heritage. Boat rides, guided nature walks and interactions with trained elephants provide a rewarding family experience.",
      },
      {
        name: "Namdroling Monastery",
        description:
          "Often referred to as the Golden Temple, this Tibetan Buddhist monastery near Kushalnagar is renowned for its magnificent prayer hall, colourful murals and peaceful atmosphere. It offers a fascinating cultural contrast to Coorg's coffee plantations and forests.",
      },
      {
        name: "Coffee Plantations",
        description:
          "A guided walk through Coorg's coffee estates provides insight into the cultivation of one of India's finest coffees. Visitors discover traditional growing methods, the influence of the monsoon climate and the enduring connection between coffee, local communities and the region's identity.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Kannur International Airport",
          code: "CNN",
          distance: "90 km • Approximately 3 hours by road",
        },
        {
          name: "Mangaluru International Airport",
          code: "IXE",
          distance: "153 km • Approximately 3.5 hours by road",
        },
        {
          name: "Kempegowda International Airport",
          location: "Bengaluru",
          code: "BLR",
          distance: "300 km • Approximately 6 hours by road",
        },
      ],
    },

    idealFor: [
      "Couples",
      "Honeymooners",
      "Wellness Travellers",
      "Families",
      "Nature Lovers",
      "Slow Travellers",
      "Celebrations",
    ],

    website: "https://www.tajhotels.com/en-in/hotels/taj-madikeri-coorg",

    map: "https://www.google.com/maps/place/Taj+Madikeri+Resort+%26+Spa,+Coorg/@12.4459144,75.6824394,17z/data=!4m10!3m9!1s0x3ba5007546c508b5:0x45002b121c9e2ce0!5m3!1s2026-07-08!4m1!1i2!8m2!3d12.4459092!4d75.6850143!16s%2Fg%2F11xb2g8y9?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Western Ghats",
      "Coffee Plantations",
      "Luxury Resort",
      "Nature Retreat",
      "Wellness",
      "Valley Views",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Mountain Retreat",
  },
  //5
  {
    id: "the-oberoi-bengaluru",
    name: "The Oberoi Bengaluru",
    location: "Bengaluru, Karnataka",
    category: "india",

    image: "/Assets/hotels/The-Oberoi-Bengaluru.jpg",
    alt: "The Oberoi Bengaluru, Bengaluru, Karnataka",

    accentClass: "hi--india-city",

    intro:
      "There is a quieter side to Bengaluru that often escapes first-time visitors. Beyond its energetic business districts and evolving skyline lies a city shaped by generous avenues, flowering trees and gracious hospitality. The Oberoi Bengaluru captures this gentler rhythm with remarkable assurance.\n\nSet along Mahatma Gandhi Road, the hotel feels deeply connected to Bengaluru's identity as the Garden City. Mature rain trees, landscaped gardens and open courtyards create an atmosphere that seems worlds away from the city's constant movement. Rather than relying on grandeur, the property draws its character from restraint, natural light and an enduring sense of calm.\n\nThe architecture reflects contemporary elegance while allowing the landscape to remain the principal feature. Interiors balance handcrafted details with understated sophistication, while quiet corners invite guests to slow down between meetings or sightseeing.\n\nDining becomes part of the daily rhythm rather than an occasion, and the surrounding gardens shape the experience from morning through evening. Business travellers find genuine respite, while leisure guests discover an ideal base for exploring Bengaluru's cultural neighbourhoods and celebrated culinary scene.\n\nThose who value thoughtful service over theatrical luxury will appreciate the confidence with which the hotel presents itself.",

    why: "Long before Bengaluru became India's technology capital, it was celebrated for its gardens and tree-lined boulevards. Few hotels reflect that legacy as naturally, creating an oasis where the city's gentler character remains wonderfully intact.",

    highlights: [
      "Luxury urban retreat set amidst landscaped gardens",
      "Located on Mahatma Gandhi Road in the heart of Bengaluru",
      "Inspired by the city's Garden City heritage",
      "Contemporary elegance complemented by warm Oberoi hospitality",
      "Ideal base for business and leisure travellers exploring Bengaluru",
    ],

    exploreDestination: [
      {
        name: "Cubbon Park",
        description:
          "For more than a century, Cubbon Park has been the green heart of Bengaluru. Its sweeping lawns, towering rain trees and quiet walking trails provide a welcome contrast to the city's fast-paced rhythm. Early mornings reveal joggers, birdwatchers and families enjoying the cool air, while colonial-era buildings hidden among the foliage hint at Bengaluru's layered past. It is the perfect place to appreciate why the city earned its enduring reputation as India's Garden City.",
      },
      {
        name: "Bangalore Palace",
        description:
          "Inspired by the Tudor-style castles of England yet unmistakably Indian in character, Bangalore Palace offers a fascinating glimpse into the legacy of the Wadiyar dynasty. Intricate woodwork, elegant ballrooms, royal portraits and beautifully maintained grounds transport visitors to a period when princely states shaped much of southern India's cultural landscape. The palace remains one of Bengaluru's most recognisable landmarks.",
      },
      {
        name: "Lalbagh Botanical Garden",
        description:
          "Originally commissioned in the eighteenth century and later expanded by generations of horticulturists, Lalbagh remains one of India's finest botanical gardens. Rare tropical plants, centuries-old trees, tranquil lakes and the celebrated Glass House create a landscape that changes beautifully with the seasons. During the famous flower shows, the gardens become a spectacular celebration of colour and botanical artistry.",
      },
      {
        name: "Church Street & MG Road",
        description:
          "Only a short walk from The Oberoi Bengaluru, Church Street captures the city's contemporary spirit. Independent bookstores, cafés, craft breweries, art galleries and design boutiques sit comfortably alongside long-established institutions, creating a lively neighbourhood where Bengaluru's creative community naturally gathers. It is an excellent place to spend an unhurried evening.",
      },
      {
        name: "Visvesvaraya Industrial & Technological Museum",
        description:
          "Named after one of India's greatest engineers, the museum celebrates scientific curiosity and innovation through engaging interactive exhibits. From space exploration and engineering to electronics and biotechnology, it provides insight into the intellectual foundations that have helped shape Bengaluru into one of Asia's leading technology centres.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Kempegowda International Airport",
          location: "Bengaluru",
          code: "BLR",
          distance: "Nearest airport",
        },
      ],
      rail: [
        {
          name: "KSR Bengaluru City Junction",
        },
        {
          name: "SMVT Bengaluru",
        },
      ],
      road: "The city is well connected by excellent road links across South India.",
    },

    idealFor: [
      "Couples",
      "Business Travellers",
      "Cultural Explorers",
      "Food Lovers",
      "Slow Travellers",
      "Multi-generational Holidays",
    ],

    website: "https://www.oberoihotels.com/hotels-in-bengaluru/",

    map: "https://www.google.com/maps/place/The+Oberoi,+Bengaluru/@12.9736048,77.6158276,17z/data=!4m10!3m9!1s0x3bae16835c3ada19:0x7065f59042b7b2db!5m3!1s2026-07-08!4m1!1i2!8m2!3d12.9736048!4d77.6184025!16s%2Fg%2F1thqf630?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Oberoi Hotels",
      "Garden City",
      "Luxury City Hotel",
      "Business Travel",
      "Urban Oasis",
      "MG Road",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Luxury Hotel",
  },
  //Ayurvedic reset
  //6
  {
    id: "casino-hotel-kochi",
    name: "Casino Hotel, Kochi",
    location: "Kochi, Kerala",
    category: "india",

    image: "/Assets/hotels/Casino-Kochi.jpg",
    alt: "Casino Hotel, Kochi by CGH Earth, Kochi, Kerala",

    accentClass: "hi--india-coast",

    intro:
      "Located on the vibrant Willingdon Island, Casino Hotel by CGH Earth is one of Kochi's most established heritage hotels, offering guests a peaceful retreat while remaining close to the city's historic and cultural landmarks. Overlooking the bustling harbour and surrounded by lush tropical gardens, the hotel combines timeless charm with contemporary comfort, making it an ideal base for exploring Kerala's commercial capital.\n\nThe hotel reflects the understated elegance for which CGH Earth is known, with spacious rooms, warm interiors and a relaxed atmosphere that encourages guests to experience Kochi at a leisurely pace. Its location places visitors within easy reach of Fort Kochi, Mattancherry and Ernakulam, allowing them to discover centuries of maritime history, colonial architecture and Kerala's vibrant culinary traditions. After a day of sightseeing, guests can return to the tranquillity of the hotel, unwind by the pool or savour authentic Kerala cuisine featuring fresh local seafood and regional flavours.\n\nWhether beginning a journey through Kerala or spending a few days exploring Kochi's rich heritage, Casino Hotel offers a comfortable and welcoming stay that balances city convenience with the warmth of traditional hospitality. Its long-standing reputation, excellent location and personalised service continue to make it a favourite among both leisure and business travellers.",

    why: "Casino Hotel offers the perfect balance between heritage, comfort and location. Its peaceful setting on Willingdon Island, warm hospitality and easy access to Kochi's historic neighbourhoods make it an excellent choice for travellers looking to experience the city's rich culture without sacrificing comfort.",

    highlights: [
      "Located on historic Willingdon Island",
      "Signature CGH Earth hospitality",
      "Overlooks Kochi Harbour amidst tropical gardens",
      "Easy access to Fort Kochi, Mattancherry and Ernakulam",
      "Authentic Kerala cuisine featuring fresh local seafood",
      "Ideal heritage base for exploring Kochi",
    ],

    exploreDestination: [
      {
        name: "Fort Kochi",
        description:
          "The historic heart of Kochi is known for its colonial architecture, charming cafés, boutique stores and art galleries. Walking through its quiet streets offers a fascinating journey through centuries of Portuguese, Dutch and British influence, making it one of Kerala's most rewarding heritage destinations.",
      },
      {
        name: "Mattancherry Palace",
        description:
          "Also known as the Dutch Palace, this beautifully preserved landmark houses exquisite Kerala murals, royal artefacts and fascinating exhibits that showcase the history of the Kochi royal family. It is one of the city's most significant cultural attractions.",
      },
      {
        name: "Chinese Fishing Nets",
        description:
          "These iconic cantilevered fishing nets have become synonymous with Kochi's waterfront. Watching local fishermen operate the centuries-old wooden structures at sunrise or sunset is one of the city's most memorable experiences and a favourite subject for photographers.",
      },
      {
        name: "Jew Town",
        description:
          "Filled with antique shops, spice warehouses and charming heritage buildings, Jew Town reflects Kochi's multicultural trading history. The neighbourhood is also home to the historic Paradesi Synagogue, one of the oldest active synagogues in the Commonwealth.",
      },
      {
        name: "Marine Drive",
        description:
          "A lively waterfront promenade overlooking Kochi's backwaters, Marine Drive is ideal for an evening stroll. Visitors can enjoy harbour views, sunset cruises, shopping and local restaurants while experiencing the city's contemporary side.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Cochin International Airport",
          code: "COK",
          distance: "Nearest airport",
        },
      ],
    },

    idealFor: [
      "Heritage Travellers",
      "Couples",
      "Families",
      "Food Lovers",
      "Business Travellers",
      "Cultural Explorers",
      "Kerala City Breaks",
      "Short Luxury Stays",
    ],

    website: "https://www.cghearth.com/casino-hotel",

    map: "https://www.google.com/maps/place/Casino+Hotel,+CGH+Earth/@9.9614862,76.2668063,17z/data=!3m1!4b1!4m9!3m8!1s0x3b086d5820e2886f:0xa176afdf327f9ef5!5m2!4m1!1i2!8m2!3d9.9614809!4d76.2693812!16s%2Fg%2F1td3dgdd?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "CGH Earth",
      "Heritage Hotel",
      "Willingdon Island",
      "Kochi Harbour",
      "Kerala Cuisine",
      "Fort Kochi",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Heritage",
  },
  //7
  {
    id: "nattika-beach-ayurveda-resort",
    name: "Nattika Beach Ayurveda Resort, Thrissur",
    location: "Thrissur, Kerala",
    category: "india",

    image: "/Assets/hotels/Nattika-Beach-Resort.jpg",
    alt: "Nattika Beach Ayurveda Resort, Thrissur, Kerala",

    accentClass: "hi--india-wellness",

    intro:
      "Set along the peaceful shores of Nattika Beach near Thrissur, Nattika Beach Ayurveda Resort is a tranquil retreat where authentic Ayurveda, coastal serenity and Kerala's warm hospitality come together in perfect harmony. Surrounded by swaying coconut palms, landscaped gardens and the gentle waters of the Arabian Sea, the resort offers an escape that encourages guests to slow down, reconnect with nature and embrace a healthier way of living.\n\nInspired by traditional Kerala architecture, the resort features charming independent villas with sloping tiled roofs, spacious interiors and private sit-outs that blend seamlessly into the lush tropical landscape. The atmosphere is intentionally calm and unhurried, allowing guests to experience the restorative rhythm of the coast while enjoying personalised hospitality. At the heart of the resort is its renowned Ayurveda centre, where experienced physicians design customised wellness programmes focused on healing, rejuvenation and long-term wellbeing.\n\nBeyond its wellness offerings, the resort provides an ideal base for exploring central Kerala's cultural and natural attractions. Visitors can discover historic temples, vibrant local markets, scenic backwaters and pristine beaches before returning to the peaceful comfort of the resort. Whether seeking a dedicated wellness retreat or a relaxing beach holiday, Nattika Beach Ayurveda Resort offers an experience that combines authentic healing traditions with the timeless beauty of Kerala's coastline.",

    why: "Nattika Beach Ayurveda Resort perfectly balances holistic wellness with the tranquillity of Kerala's coastline. Its authentic Ayurvedic therapies, peaceful beachfront setting and warm personalised service create a retreat where relaxation and rejuvenation come naturally. It is an ideal destination for travellers seeking meaningful wellness experiences in a serene environment.",

    highlights: [
      "Authentic Ayurveda wellness retreat on Kerala's coastline",
      "Peaceful beachfront setting overlooking the Arabian Sea",
      "Traditional Kerala-style independent villas",
      "Personalised Ayurvedic healing and rejuvenation programmes",
      "Ideal blend of wellness, nature and coastal tranquillity",
      "Gateway to Thrissur's cultural and natural attractions",
    ],

    exploreDestination: [
      {
        name: "Nattika Beach",
        description:
          "Just steps from the resort, Nattika Beach is a quiet stretch of golden sand where gentle waves and swaying palms create a peaceful coastal setting. Ideal for sunrise walks, meditation or simply unwinding by the sea, it offers a refreshing alternative to Kerala's busier beaches.",
      },
      {
        name: "Snehatheeram Beach",
        description:
          "One of Kerala's most beautifully maintained beaches, Snehatheeram features landscaped gardens, walking paths and family-friendly recreational areas. Its relaxed atmosphere and scenic shoreline make it a popular destination for evening strolls and spectacular sunsets.",
      },
      {
        name: "Vadakkunnathan Temple",
        description:
          "Located in the heart of Thrissur, this UNESCO-recognised heritage monument is one of Kerala's most revered Shiva temples. Admired for its traditional Kerala architecture, intricate murals and spiritual significance, it is also closely associated with the world-famous Thrissur Pooram festival.",
      },
      {
        name: "Kerala Kalamandalam",
        description:
          "Founded to preserve Kerala's classical performing arts, Kerala Kalamandalam is internationally renowned for training in Kathakali, Mohiniyattam and traditional music. Visitors can learn about the state's rich artistic heritage and, depending on the schedule, witness captivating performances by talented students and artists.",
      },
      {
        name: "Athirappilly Waterfalls",
        description:
          "Often referred to as the 'Niagara of India,' Athirappilly Waterfalls is one of Kerala's most spectacular natural attractions. Surrounded by lush rainforest, the cascading waters create a breathtaking setting for nature lovers, photographers and those looking to experience the scenic beauty of the Western Ghats.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Cochin International Airport",
          code: "COK",
          distance: "60 km • Approximately 1.5 hours by road",
        },
      ],
    },

    idealFor: [
      "Wellness Travellers",
      "Ayurveda Retreats",
      "Couples",
      "Honeymooners",
      "Beach Holidays",
      "Nature Lovers",
      "Slow Travellers",
      "Holistic Wellness Escapes",
    ],

    website: "https://thenattikabeach.com/",

    map: "https://www.google.com/maps/place/The+Nattika+Beach+Ayurveda+Resort/@10.4227501,76.0800957,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba78cb5bd2cb95f:0xedc9136f02d2bafc!8m2!3d10.4227448!4d76.0826706!16s%2Fg%2F1tr15_nr?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Ayurveda",
      "Wellness Retreat",
      "Beach Resort",
      "Kerala Architecture",
      "Arabian Sea",
      "Holistic Healing",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Wellness",
  },
  //Balance & Bliss
  //8
  {
    id: "kalari-kovilakom-palakkad",
    name: "Kalari Kovilakom, Palakkad",
    location: "Palakkad, Kerala",
    category: "india",

    image: "/Assets/hotels/Kalari-Kovilakom.jpg",
    alt: "Kalari Kovilakom, Palakkad, Kerala",

    accentClass: "hi--india-wellness",

    intro:
      "Kalari Kovilakom is unlike any conventional luxury retreat. Housed within a restored nineteenth-century palace in rural Palakkad, it is dedicated entirely to authentic Ayurveda, where ancient healing traditions guide every aspect of the guest experience. Quiet courtyards, heritage architecture and an atmosphere of complete tranquillity encourage a slower rhythm of life, allowing wellness to become the focus rather than an addition to the journey. Every stay follows time-honoured Ayurvedic principles under the guidance of experienced physicians, making the property particularly suited to travellers seeking genuine rejuvenation. Rather than distracting with excess, the palace celebrates simplicity, discipline and mindful living, creating a deeply restorative environment rooted in Kerala's cultural heritage.",

    why: "Kalari Kovilakom is one of the few places where wellness is approached with complete authenticity rather than indulgence. The restored palace, personalised Ayurvedic therapies and peaceful surroundings create an experience that feels transformative, deeply rooted in tradition and refreshingly free from distraction.",

    highlights: [
      "Restored nineteenth-century palace dedicated entirely to authentic Ayurveda",
      "Personalised healing programmes guided by experienced Ayurvedic physicians",
      "Historic palace blending Kerala heritage with holistic wellness",
      "Peaceful courtyards and tranquil surroundings for complete rejuvenation",
      "Focus on mindful living through traditional Ayurvedic principles",
      "One of India's most authentic Ayurveda retreats",
    ],

    exploreDestination: [
      {
        name: "Malampuzha Dam & Gardens",
        description:
          "A popular landmark with landscaped gardens, boating and panoramic views of the surrounding hills.",
      },
      {
        name: "Palakkad Fort",
        description:
          "Built in the eighteenth century, this well-preserved granite fort offers insight into the region's military history amidst peaceful gardens.",
      },
      {
        name: "Silent Valley National Park",
        description:
          "One of India's most important rainforest ecosystems, celebrated for exceptional biodiversity and pristine natural beauty.",
      },
      {
        name: "Jainmedu Jain Temple",
        description:
          "A centuries-old temple reflecting Palakkad's multicultural heritage and traditional Kerala architecture.",
      },
      {
        name: "Kalpathy Heritage Village",
        description:
          "Known for its agraharam streets, annual Ratholsavam festival and beautifully preserved Brahmin settlement, offering a glimpse into Kerala's living traditions.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Coimbatore International Airport",
          code: "CJB",
          distance: "Nearest airport",
        },
      ],
    },

    idealFor: [
      "Wellness Travellers",
      "Ayurveda Seekers",
      "Couples",
      "Slow Travellers",
      "Solo Retreats",
      "Cultural Explorers",
    ],

    website: "https://www.cghearthayurveda.com/kalari-kovilakom/",

    map: "https://www.google.com/maps/place/Kalari+Kovilakom,+CGH+Earth+Ayurveda+hospital/@10.6143001,76.6839111,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba813cc3f9131cd:0xcb5f3beb0cf5848!8m2!3d10.6142948!4d76.686486!16s%2Fg%2F1tc_2jfx?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "CGH Earth Ayurveda",
      "Authentic Ayurveda",
      "Heritage Palace",
      "Wellness Retreat",
      "Holistic Healing",
      "Palakkad",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Wellness",
  },
  //9
  {
    id: "taj-malabar-resort-spa-cochin",
    name: "Taj Malabar Resort & Spa, Cochin",
    location: "Kochi, Kerala",
    category: "india",

    image: "/Assets/hotels/Taj-Mabar.jpg",
    alt: "Taj Malabar Resort & Spa, Cochin, Kochi, Kerala",

    accentClass: "hi--india-coast",

    intro:
      "Taj Malabar Resort & Spa occupies one of Kochi's most enviable waterfront settings, where the harbour, historic port and Arabian Sea come together in a constantly changing panorama of passing ships, fishing boats and spectacular sunsets. Combining heritage architecture with contemporary luxury, the resort reflects Kochi's long history as a meeting point for traders, explorers and cultures from around the world. Elegant interiors, peaceful gardens and views across the water create an atmosphere that feels both sophisticated and deeply connected to the city's maritime character. Guests can begin the day watching the harbour awaken, spend hours exploring the historic streets of Fort Kochi and Mattancherry, and return to an environment where attentive hospitality and tranquil surroundings encourage complete relaxation. Whether travelling for a romantic escape, a cultural holiday or the beginning of a Kerala itinerary, the resort provides an experience that celebrates both the destination and the enduring traditions of the Taj brand.",

    why: "Taj Malabar Resort & Spa captures the timeless charm of Kochi through its remarkable waterfront setting and understated elegance. Watching the harbour come alive from the hotel, while enjoying the warmth of Taj hospitality, creates a stay that feels intimately connected to the city's maritime heritage.",

    highlights: [
      "Prime waterfront location overlooking Kochi Harbour and the Arabian Sea",
      "Elegant blend of heritage architecture and contemporary luxury",
      "Spectacular harbour, sunset and backwater views",
      "Close to Fort Kochi, Mattancherry and Kochi's historic attractions",
      "Signature Taj hospitality with peaceful gardens and refined surroundings",
      "Ideal starting point for exploring Kerala's cultural heritage",
    ],

    exploreDestination: [
      {
        name: "Fort Kochi",
        description:
          "The historic heart of Kochi is a fascinating blend of Portuguese, Dutch and British influences. Wander along quiet streets lined with colonial buildings, charming cafés, art galleries and boutique stores while discovering a neighbourhood that has welcomed travellers for centuries.",
      },
      {
        name: "Chinese Fishing Nets",
        description:
          "These iconic cantilevered fishing nets have become one of Kochi's defining symbols. Watching local fishermen operate the enormous wooden structures at sunrise or sunset provides an unforgettable glimpse into a centuries-old fishing tradition.",
      },
      {
        name: "Mattancherry Palace",
        description:
          "Also known as the Dutch Palace, this beautifully preserved building houses remarkable murals depicting scenes from the Ramayana alongside royal artefacts that tell the story of Kochi's former rulers.",
      },
      {
        name: "Jew Town & Paradesi Synagogue",
        description:
          "This atmospheric quarter is known for antique shops, spice warehouses and the historic Paradesi Synagogue, one of the oldest active synagogues in the Commonwealth. Walking its narrow streets offers insight into Kochi's multicultural trading heritage.",
      },
      {
        name: "Marine Drive",
        description:
          "A favourite gathering place for locals, Marine Drive offers a scenic waterfront promenade with views across the backwaters, making it an ideal place for an evening stroll as the city lights begin to reflect on the water.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Cochin International Airport",
          code: "COK",
          distance: "Nearest airport",
        },
      ],
    },

    idealFor: [
      "Couples",
      "Cultural Explorers",
      "Families",
      "Food Lovers",
      "Heritage Enthusiasts",
      "Luxury Holidays",
      "Kerala Itineraries",
    ],

    website: "https://www.tajhotels.com/en-in/hotels/taj-malabar-cochin",

    map: "https://www.google.com/maps/place/Taj+Malabar+Resort+%26+Spa,+Cochin/@9.9688903,76.2556847,17z/data=!3m2!4b1!5s0x3b086d4dbd4f3c73:0xd62d6486a786e4de!4m6!3m5!1s0x3b086d4dbd45ada1:0xde99a1b7b21579d1!8m2!3d9.968885!4d76.2582596!16s%2Fg%2F11h1lv1gs?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Taj Hotels",
      "Waterfront Resort",
      "Harbour Views",
      "Fort Kochi",
      "Luxury Resort",
      "Kerala Heritage",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Luxury Hotel",
  },
  //By the beach
  //10
  {
    id: "swaswara-gokarna",
    name: "SwaSwara, Gokarna",
    location: "Gokarna, Karnataka",
    category: "india",

    image: "/Assets/hotels/Swaswara-Gokarna.jpg",
    alt: "SwaSwara, Gokarna, Karnataka",

    accentClass: "hi--india-wellness",

    intro:
      "Perched on a quiet hillside overlooking the pristine shores of Om Beach, SwaSwara by CGH Earth is a retreat where luxury is defined by peace, simplicity and a deep connection with nature. Designed around the philosophy of mindful living, the resort offers an experience that encourages guests to slow down, disconnect from everyday routines and embrace the restorative rhythm of coastal Karnataka.\n\nBuilt using natural materials and inspired by the region's traditional architecture, SwaSwara blends effortlessly into its surroundings. Spacious villas, winding stone pathways and lush tropical gardens create an atmosphere of understated elegance, while uninterrupted views of the Arabian Sea provide a constant reminder of the beauty that surrounds the property. Rather than focusing on opulence, the resort celebrates space, privacy and harmony with nature.\n\nWellness forms the heart of every stay. Yoga, meditation, Ayurveda and wholesome cuisine are thoughtfully integrated into the guest experience, allowing visitors to rejuvenate both body and mind at their own pace. Whether participating in a personalised wellness programme or simply relaxing by the sea, every moment is designed to inspire balance and wellbeing.\n\nComplementing the tranquillity of the resort is the timeless charm of Gokarna itself. Ancient temples, secluded beaches and dramatic coastal landscapes offer countless opportunities for exploration, while the peaceful atmosphere makes it easy to appreciate a slower way of life. SwaSwara is more than a destination for a holiday—it is a place to reconnect with nature, embrace mindful living and experience one of India's most serene coastal retreats.",

    why: "SwaSwara offers a refreshing interpretation of luxury, where wellness, nature and simplicity take centre stage. Its peaceful setting, personalised holistic experiences and relaxed atmosphere make it one of India's finest retreats for rest and renewal.",

    highlights: [
      "Clifftop retreat overlooking the pristine Om Beach",
      "CGH Earth wellness resort inspired by mindful living",
      "Yoga, meditation and authentic Ayurveda programmes",
      "Private villas surrounded by tropical gardens and the Arabian Sea",
      "Designed using natural materials and traditional regional architecture",
      "Peaceful coastal escape focused on relaxation and holistic wellbeing",
    ],

    exploreDestination: [
      {
        name: "Om Beach",
        description:
          "Known for its distinctive shape resembling the sacred 'Om' symbol, this peaceful beach is perfect for sunrise walks, water activities and unforgettable sunsets.",
      },
      {
        name: "Shri Mahabaleshwara Temple",
        description:
          "One of Karnataka's most important Shiva temples, admired for its spiritual significance and traditional Dravidian architecture.",
      },
      {
        name: "Kudle Beach",
        description:
          "A quiet stretch of golden sand with a laid-back atmosphere, ideal for relaxing, yoga and enjoying coastal cafés.",
      },
      {
        name: "Paradise Beach",
        description:
          "Accessible by boat or a scenic trek, this secluded beach is loved for its clear waters, rocky coastline and untouched natural beauty.",
      },
      {
        name: "Mirjan Fort",
        description:
          "A historic laterite fort surrounded by greenery, offering fascinating architecture and a glimpse into the region's maritime past.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Goa International Airport",
          location: "Dabolim, Goa",
          code: "GOI",
          distance: "140 km • Approximately 3 hours by road",
        },
        {
          name: "Manohar International Airport",
          location: "Mopa, North Goa",
          code: "GOX",
          distance: "179 km • Approximately 4 hours by road",
        },
        {
          name: "Hubballi Airport",
          location: "Karnataka",
          code: "HBX",
          distance: "159 km • Approximately 3.5 hours by road",
        },
      ],
    },

    idealFor: [
      "Wellness Travellers",
      "Couples",
      "Solo Travellers",
      "Nature Lovers",
      "Yoga & Ayurveda Retreats",
      "Slow Travellers",
    ],

    website: "https://www.cghearth.com/swaswara",

    map: "https://www.google.com/maps/place/CGH+Earth+-+SwaSwara/@14.5217271,74.3185177,17z/data=!4m9!3m8!1s0x3bbe82225c72c8cf:0xab3923d3b1448489!5m2!4m1!1i2!8m2!3d14.5217219!4d74.3210926!16s%2Fg%2F1td6wkq7?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "CGH Earth",
      "Wellness Retreat",
      "Yoga",
      "Ayurveda",
      "Om Beach",
      "Arabian Sea",
      "Nature Retreat",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Wellness",
  },
  //11
  {
    id: "taj-bekal-resort-spa-kerala",
    name: "Taj Bekal Resort & Spa, Kerala",
    location: "Bekal, Kasaragod, Kerala",
    category: "india",

    image: "/Assets/hotels/Taj-Bekal.jpg",
    alt: "Taj Bekal Resort & Spa, Bekal, Kerala",

    accentClass: "hi--india-coast",

    intro:
      "Nestled along the tranquil backwaters and unspoilt coastline of North Kerala, Taj Bekal Resort & Spa is a destination where nature, luxury and local heritage come together in perfect harmony. Surrounded by swaying coconut palms, serene waterways and lush tropical landscapes, the resort offers an escape that feels secluded yet deeply connected to the region's rich cultural traditions.\n\nDesigned by renowned architect Charles Correa, the resort takes inspiration from the traditional Kettuvallam houseboats and the architectural style of Kerala's historic Nalukettu homes. Graceful villas, many featuring private plunge pools and views of the backwaters, blend effortlessly into the natural surroundings, creating an atmosphere of understated elegance. Every space has been thoughtfully designed to maximise privacy while celebrating the beauty of the landscape.\n\nBeyond its luxurious accommodation, the resort invites guests to experience Kerala at a gentler pace. Mornings can begin with peaceful walks through tropical gardens, followed by rejuvenating wellness therapies at the award-winning J Wellness Circle. Guests can explore nearby beaches, discover centuries-old forts, cruise through tranquil backwaters or simply relax while watching the changing colours of the Arabian Sea at sunset.\n\nWhether travelling as a couple, family or wellness seeker, Taj Bekal Resort & Spa offers an experience that goes beyond a traditional beach holiday. It is a place where exceptional hospitality, thoughtful design and Kerala's natural beauty combine to create an unforgettable retreat.",

    why: "Taj Bekal beautifully captures the essence of Kerala through its harmonious blend of backwaters, beaches and traditional architecture. The peaceful surroundings, elegant villas and signature Taj hospitality create a retreat that feels both luxurious and deeply connected to its destination.",

    highlights: [
      "Designed by renowned architect Charles Correa",
      "Inspired by Kerala's Kettuvallam houseboats and Nalukettu architecture",
      "Luxury villas with private plunge pools and backwater views",
      "Award-winning J Wellness Circle spa",
      "Peaceful setting between Kerala's backwaters and the Arabian Sea",
      "Ideal retreat for luxury, wellness and coastal experiences",
    ],

    exploreDestination: [
      {
        name: "Bekal Fort",
        description:
          "Overlooking the Arabian Sea, Bekal Fort is Kerala's largest and one of its best-preserved coastal forts. Built in the 17th century, its massive laterite walls, observation towers and scenic walking paths offer spectacular views of the coastline. Rich in history and beautifully maintained, the fort remains one of North Kerala's most iconic landmarks and a must-visit for history enthusiasts and photographers alike.",
      },
      {
        name: "Bekal Beach",
        description:
          "Stretching alongside the historic fort, Bekal Beach is known for its clean shoreline, gentle waves and peaceful atmosphere. The beautifully landscaped promenade, viewing points and golden sands make it an ideal destination for leisurely walks, family outings or simply enjoying a spectacular sunset over the Arabian Sea.",
      },
      {
        name: "Chandragiri Fort",
        description:
          "Located on the banks of the Chandragiri River, this 17th-century fort offers panoramic views of the river meeting the sea. Though quieter than Bekal Fort, it provides visitors with a fascinating glimpse into Kerala's maritime history while serving as a wonderful spot for photography and evening visits.",
      },
      {
        name: "Valiyaparamba Backwaters",
        description:
          "Among Kerala's most scenic yet lesser-explored backwater destinations, Valiyaparamba offers a peaceful network of lagoons, islands and coconut-fringed waterways. A traditional houseboat or boat cruise allows visitors to experience the region's natural beauty while observing local village life along the banks.",
      },
      {
        name: "Ananthapura Lake Temple",
        description:
          "Often regarded as Kerala's only lake temple, Ananthapura is surrounded by a tranquil freshwater lake that creates a uniquely peaceful setting. Dedicated to Lord Vishnu, the temple is admired for its traditional Kerala architecture, spiritual significance and the fascinating legend of its resident crocodile, making it one of the region's most distinctive cultural attractions.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Mangalore International Airport",
          code: "IXE",
          distance: "70 km • Approximately 1.5 hours by road",
        },
        {
          name: "Kannur International Airport",
          code: "CNN",
          distance: "102 km • Approximately 2.5 hours by road",
        },
      ],
    },

    idealFor: [
      "Couples",
      "Honeymooners",
      "Families",
      "Wellness Travellers",
      "Beach Holidays",
      "Nature Lovers",
      "Luxury Retreats",
      "Slow Travellers",
    ],

    website: "https://www.tajhotels.com/en-in/hotels/taj-bekal-kerala",

    map: "https://www.google.com/maps/place/Taj+Bekal+Resort+%26+Spa,+Kerala/@12.4238793,75.0120906,17z/data=!4m9!3m8!1s0x3ba480ff5b6997c1:0x9c7dc12251dc6c88!5m2!4m1!1i2!8m2!3d12.4238741!4d75.0146655!16s%2Fg%2F1tf63xvm?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Taj Hotels",
      "Beach Resort",
      "Backwaters",
      "J Wellness Circle",
      "Charles Correa",
      "Luxury Villas",
      "Bekal",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Beach & Coast",
  },
  //12
  {
    id: "taj-exotica-resort-spa-goa",
    name: "Taj Exotica Resort & Spa, Goa",
    location: "Benaulim, South Goa",
    category: "india",

    image: "/Assets/hotels/Taj-Exotice-Resort-Goa.jpg",
    alt: "Taj Exotica Resort & Spa, Goa",

    accentClass: "hi--india-coast",

    intro:
      "Along the quieter shores of South Goa, where long stretches of golden sand meet the gentle waters of the Arabian Sea, Taj Exotica Resort & Spa presents a side of Goa that is elegant, unhurried and deeply restorative. Set amidst beautifully landscaped gardens overlooking Benaulim Beach, the resort is designed for travellers who appreciate space, privacy and an effortless connection with nature.\n\nInspired by Mediterranean architecture, the resort unfolds through graceful colonnades, terracotta-tiled roofs, airy courtyards and manicured lawns that blend seamlessly with the surrounding coastal landscape. Rather than relying on extravagance, its charm lies in creating an atmosphere where guests naturally slow down and embrace the relaxed rhythm of South Goa. Expansive views, abundant natural light and thoughtful design encourage every moment to feel both comfortable and timeless.\n\nThe experience extends well beyond the accommodation. Mornings often begin with leisurely walks along the beach as fishing boats return with the day's catch and the coastline gradually comes alive. Throughout the day, guests can explore Goa's rich Portuguese heritage, visit centuries-old churches, discover colourful local markets or simply enjoy the tranquillity of the resort's gardens. As evening approaches, spectacular sunsets over the Arabian Sea provide a fitting conclusion to each day, accompanied by the gentle sound of waves that defines life along this stretch of coastline.\n\nDining reflects Goa's multicultural heritage, celebrating fresh seafood, regional flavours and international cuisine with equal finesse. Wellness experiences, outdoor recreation and attentive yet unobtrusive service further enhance the feeling of ease that characterises every stay.",

    why: "Taj Exotica captures the quieter soul of Goa with remarkable elegance. Its expansive beachfront setting, Mediterranean-inspired architecture and warm hospitality create an atmosphere where every day unfolds at an unhurried pace. It is a place that encourages guests to experience Goa beyond its lively reputation, revealing a destination defined by natural beauty, heritage and understated sophistication.",

    highlights: [
      "Luxury beachfront resort overlooking Benaulim Beach",
      "Mediterranean-inspired architecture with elegant courtyards and terracotta roofs",
      "Beautiful landscaped gardens along South Goa's coastline",
      "Signature Taj hospitality with exceptional dining and wellness experiences",
      "Ideal base for exploring Goa's beaches, heritage and Portuguese history",
      "Perfect blend of relaxation, privacy and coastal luxury",
    ],

    exploreDestination: [
      {
        name: "Benaulim Beach",
        description:
          "Located just steps from the resort, Benaulim Beach remains one of South Goa's most peaceful stretches of coastline. Wide expanses of soft golden sand, gently swaying palms and calm waters create an atmosphere that feels far removed from the busier beaches of North Goa. Early mornings bring local fishermen returning with their catch, while evenings are perfect for leisurely walks as the sun sets over the Arabian Sea. The beach retains an authentic charm, making it ideal for those seeking quiet moments by the sea rather than a bustling nightlife scene.",
      },
      {
        name: "Colva Beach",
        description:
          "A short drive from the resort, Colva Beach combines natural beauty with a lively local atmosphere. Its palm-lined shoreline stretches for kilometres, offering opportunities for water sports, beach cafés and relaxed seaside dining. While popular with visitors, Colva still preserves the easy-going character that has long made South Goa a favourite destination for families and couples. The vibrant mix of local culture and coastal scenery provides an enjoyable contrast to the tranquillity of Benaulim.",
      },
      {
        name: "Cabo de Rama Fort",
        description:
          "Perched dramatically on a cliff overlooking the Arabian Sea, Cabo de Rama Fort offers some of Goa's most spectacular coastal views. Believed to have ancient origins and later strengthened during Portuguese rule, the fort combines fascinating history with breathtaking scenery. Walking through its weathered stone walls reveals panoramic vistas of rugged cliffs, secluded beaches and the endless ocean beyond, making it a rewarding destination for history enthusiasts and photographers alike.",
      },
      {
        name: "Margao Municipal Market",
        description:
          "For a genuine taste of Goan life, Margao Municipal Market is an experience not to be missed. Colourful stalls display fragrant spices, locally grown produce, traditional sweets, handcrafted souvenirs and freshly caught seafood, creating an atmosphere that reflects the region's rich culinary traditions. Wandering through the market provides insight into everyday life while offering opportunities to sample authentic Goan flavours and interact with local vendors.",
      },
      {
        name: "Basilica of Bom Jesus & Old Goa",
        description:
          "A visit to Goa is incomplete without exploring Old Goa, once the capital of Portuguese India and now recognised as a UNESCO World Heritage Site. The Basilica of Bom Jesus, home to the mortal remains of St. Francis Xavier, stands as one of India's most significant religious monuments. Alongside neighbouring churches and convents, it tells the story of Goa's remarkable colonial past through magnificent Baroque architecture, intricate interiors and centuries of cultural exchange that continue to shape the region today.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Goa International Airport",
          location: "Dabolim, Goa",
          code: "GOI",
          distance: "Nearest airport",
        },
        {
          name: "Manohar International Airport",
          location: "Mopa, North Goa",
          code: "GOX",
          distance: "Nearest airport",
        },
      ],
    },

    idealFor: [
      "Couples",
      "Honeymooners",
      "Families",
      "Beach Holidays",
      "Wellness Travellers",
      "Food Lovers",
      "Celebrations",
      "Slow Travellers",
    ],

    website: "https://www.tajhotels.com/en-in/hotels/taj-exotica-goa",

    map: "https://www.google.com/maps/place/Taj+Exotica+Resort+%26+Spa,+Goa/@15.2452419,73.9222384,17z/data=!4m10!3m9!1s0x3bbfb0ac6be75689:0x31a73ca5d4a80468!5m3!1s2026-07-08!4m1!1i2!8m2!3d15.2452367!4d73.9248133!16s%2Fm%2F06zn6tx?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Taj Hotels",
      "Beach Resort",
      "South Goa",
      "Benaulim Beach",
      "Mediterranean Architecture",
      "Luxury Resort",
      "Arabian Sea",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Beach & Coast",
  },
  //13
  {
    id: "the-postcard-on-the-arabian-sea",
    name: "The Postcard on the Arabian Sea, Mangalore",
    location: "Mangalore, Karnataka",
    category: "india",

    image: "/Assets/hotels/The-Postcard-Mangalore.webp",
    alt: "The Postcard on the Arabian Sea, Mangalore, Karnataka",

    accentClass: "hi--india-coast",

    intro:
      "Tucked away along the tranquil coastline near Mangalore, The Postcard on the Arabian Sea is an intimate luxury retreat that celebrates privacy, understated elegance and the timeless beauty of India's western coast. Overlooking the Arabian Sea and surrounded by swaying coconut palms, the property offers an escape where the gentle rhythm of the waves replaces the pace of everyday life.\n\nDesigned with a philosophy of relaxed luxury, the hotel seamlessly blends contemporary architecture with the region's coastal charm. Spacious accommodations, thoughtfully curated interiors and uninterrupted sea views create an atmosphere that feels both sophisticated and welcoming. Rather than following the conventions of a traditional beach resort, The Postcard focuses on personalised experiences, allowing guests the freedom to explore at their own pace without rigid schedules or formalities.\n\nDays here can begin with peaceful walks along the beach, followed by leisurely breakfasts overlooking the ocean. Guests can spend time discovering Mangalore's rich cultural heritage, visit historic temples and churches, explore nearby fishing villages or simply relax by the sea. As the sun sets over the Arabian Sea, the resort transforms into a peaceful sanctuary where exceptional hospitality and the beauty of the coastline come together effortlessly.\n\nIdeal for couples, solo travellers and those seeking a quiet coastal retreat, The Postcard on the Arabian Sea offers a refreshing interpretation of luxury—one that values meaningful experiences, personalised service and an authentic connection with its surroundings.",

    why: "The Postcard on the Arabian Sea offers a refreshingly intimate coastal escape where personalised hospitality, uninterrupted sea views and relaxed luxury come together effortlessly. Its peaceful setting allows guests to experience Karnataka's coastline at an unhurried pace, making every stay feel exclusive, restorative and deeply connected to nature.",

    highlights: [
      "Intimate luxury retreat overlooking the Arabian Sea",
      "Personalised experiences with relaxed, schedule-free hospitality",
      "Contemporary design inspired by Karnataka's coastal landscape",
      "Spacious accommodations with uninterrupted sea views",
      "Ideal base for exploring Mangalore's culture and coastline",
      "Peaceful coastal sanctuary focused on privacy and meaningful experiences",
    ],

    exploreDestination: [
      {
        name: "Panambur Beach",
        description:
          "One of Mangalore's most popular beaches, Panambur Beach is known for its wide sandy shoreline, spectacular sunsets and vibrant atmosphere. Visitors can enjoy leisurely walks, seasonal water sports and beachside cafés while watching ships sail into the nearby harbour. The beach also hosts cultural events and festivals throughout the year, making it a lively destination for families and photographers alike.",
      },
      {
        name: "Kadri Manjunath Temple",
        description:
          "Dating back over a thousand years, Kadri Manjunath Temple is one of the oldest and most revered temples in the region. Dedicated to Lord Manjunatha, the temple is admired for its unique blend of Buddhist and Hindu architectural influences, beautiful bronze idols and peaceful surroundings. It remains an important centre of worship and cultural heritage.",
      },
      {
        name: "St. Aloysius Chapel",
        description:
          "Often referred to as the 'Sistine Chapel of India,' St. Aloysius Chapel is renowned for its breathtaking frescoes painted by Italian artist Antonio Moscheni. Every wall and ceiling is adorned with intricate biblical artwork, making it one of Mangalore's most remarkable architectural and artistic landmarks.",
      },
      {
        name: "Pilikula Nisargadhama",
        description:
          "Spread across hundreds of acres, Pilikula Nisargadhama is an eco-tourism destination featuring a biological park, botanical garden, lake, heritage village and science centre. It offers visitors an opportunity to experience the region's biodiversity, traditional lifestyles and natural beauty in a single destination, making it ideal for families and nature enthusiasts.",
      },
      {
        name: "Sultan Battery",
        description:
          "Built by Tipu Sultan during the 18th century, Sultan Battery is a historic watchtower overlooking the Gurupura River. Constructed using black stone, it once served as a strategic defence point against invading ships. Today, it offers scenic river views while providing insight into Mangalore's maritime history.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Mangalore International Airport",
          code: "IXE",
          distance: "Nearest airport",
        },
      ],
    },

    idealFor: [
      "Couples",
      "Beach Holidays",
      "Luxury Retreats",
      "Honeymooners",
      "Slow Travellers",
      "Nature Lovers",
      "Solo Travellers",
      "Weekend Getaways",
    ],

    website: "https://www.postcardresorts.com/hotels/the-postcard-arabian-sea",

    map: "https://www.google.com/maps/place/The+Postcard+on+the+Arabian+Sea/@13.6842585,74.6431427,17z/data=!4m10!3m9!1s0x3bbc8d6e2e56fe6b:0x5f82280c642022fe!5m3!1s2026-07-13!4m1!1i2!8m2!3d13.6842533!4d74.6457176!16s%2Fg%2F11tp3b69hp?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "The Postcard Hotels",
      "Arabian Sea",
      "Beach Retreat",
      "Luxury Boutique",
      "Mangalore",
      "Personalised Hospitality",
      "Coastal Escape",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Beach & Coast",
  },
  //Lands of kings
  //14
  {
    id: "raas-jodhpur",
    name: "RAAS Jodhpur",
    location: "Jodhpur, Rajasthan",
    category: "india",

    image: "/Assets/hotels/RAAS-Jodhpur.jpg",
    alt: "RAAS Jodhpur, Jodhpur, Rajasthan",

    accentClass: "hi--india-heritage",

    intro:
      "Set dramatically beneath the imposing walls of Mehrangarh Fort, RAAS Jodhpur is one of Rajasthan's most distinctive boutique luxury hotels, seamlessly blending centuries-old heritage with contemporary design. Located in the heart of the historic Blue City, the hotel occupies a beautifully restored 18th-century haveli, complemented by striking modern architecture that harmoniously coexists with its historic surroundings. The result is an elegant retreat where tradition and innovation come together to create a truly memorable stay.\n\nFrom the moment guests arrive, the breathtaking views of Mehrangarh Fort dominate the experience. Spacious rooms and suites feature clean contemporary interiors accented with handcrafted Rajasthani details, while tranquil courtyards, lush gardens and reflective water features create an atmosphere of calm amidst the vibrant energy of the old city. The rooftop restaurant, serene spa and inviting pool offer spectacular settings to relax while soaking in panoramic views of Jodhpur's iconic skyline.\n\nPerfectly positioned within walking distance of the city's bustling bazaars and historic landmarks, RAAS allows guests to immerse themselves in Jodhpur's rich culture, architecture and culinary traditions. Whether exploring ancient forts, shopping for handcrafted textiles or simply wandering through the winding blue streets, every experience reveals another layer of Rajasthan's timeless charm. Combining personalised hospitality with an exceptional location, RAAS Jodhpur offers an authentic and luxurious gateway to one of India's most captivating cities.",

    why: "RAAS Jodhpur perfectly captures the spirit of the Blue City through its remarkable location beneath Mehrangarh Fort, stylish design and intimate atmosphere. The seamless blend of heritage architecture, modern luxury and personalised hospitality makes it one of Rajasthan's most memorable boutique stays.",

    highlights: [
      "Boutique luxury hotel beneath Mehrangarh Fort",
      "Beautifully restored 18th-century haveli with contemporary architecture",
      "Panoramic views of Jodhpur's Blue City skyline",
      "Walking distance to Jodhpur's historic landmarks and bazaars",
      "Elegant rooftop restaurant, spa and tranquil courtyards",
      "Exceptional blend of heritage, design and personalised hospitality",
    ],

    exploreDestination: [
      {
        name: "Mehrangarh Fort",
        description:
          "Towering above the city, Mehrangarh Fort is one of India's most magnificent hill forts. Its grand palaces, intricate carvings, impressive museums and panoramic terraces offer breathtaking views of Jodhpur's blue-painted houses while showcasing the rich history of the Rathore dynasty.",
      },
      {
        name: "Jaswant Thada",
        description:
          "Often referred to as the 'Taj Mahal of Marwar,' Jaswant Thada is a stunning white marble cenotaph built in memory of Maharaja Jaswant Singh II. Surrounded by peaceful gardens and overlooking a tranquil lake, it is one of Jodhpur's most elegant landmarks.",
      },
      {
        name: "Clock Tower & Sardar Market",
        description:
          "The vibrant Clock Tower and neighbouring Sardar Market form the bustling heart of the old city. Visitors can browse colourful textiles, handcrafted leather goods, spices, antiques and traditional Rajasthani handicrafts while experiencing the lively atmosphere of local life.",
      },
      {
        name: "Umaid Bhawan Palace",
        description:
          "One of the world's largest private residences, Umaid Bhawan Palace is an architectural masterpiece that continues to serve as the residence of the Jodhpur royal family. Part of the palace houses a museum displaying royal artefacts, vintage cars and fascinating stories from Rajasthan's princely era.",
      },
      {
        name: "Toorji Ka Jhalra",
        description:
          "This beautifully restored 18th-century stepwell is one of Jodhpur's hidden gems. Surrounded by charming cafés and heritage buildings, it offers visitors a glimpse into the city's traditional water management systems while serving as a popular cultural gathering place.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Jodhpur Airport",
          code: "JDH",
          distance: "Nearest airport",
        },
      ],
    },

    idealFor: [
      "Couples",
      "Heritage Travellers",
      "Luxury Boutique Holidays",
      "Cultural Explorers",
      "Photography Enthusiasts",
      "Families",
      "Rajasthan Heritage Tours",
      "Slow Travellers",
    ],

    website: "https://www.raashotels.com/jodhpur/",

    map: "https://www.google.com/maps/place/RAAS+Jodhpur/@26.2976124,73.0203126,17z/data=!4m10!3m9!1s0x39418c360978a53b:0x721cbab04e44c272!5m3!1s2026-07-02!4m1!1i2!8m2!3d26.2976076!4d73.0228875!16s%2Fg%2F12qfnpw3w?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "RAAS Hotels",
      "Mehrangarh Fort",
      "Blue City",
      "Boutique Luxury",
      "Heritage Haveli",
      "Rajasthan",
      "Historic Hotel",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Heritage",
  },
  //15
  {
    id: "rambagh-palace-jaipur",
    name: "Rambagh Palace, Jaipur",
    location: "Jaipur, Rajasthan",
    category: "india",

    image: "/Assets/hotels/Rambagh-Palace-Jaipur.jpg",
    alt: "Rambagh Palace, Jaipur, Rajasthan",

    accentClass: "hi--india-palace",

    intro:
      "Once the royal residence of the Maharaja of Jaipur, Rambagh Palace is one of India's most iconic heritage hotels, where regal grandeur, timeless elegance and legendary hospitality come together to create an extraordinary experience. Originally built in 1835, the palace has gracefully evolved from a royal guesthouse and hunting lodge into the magnificent residence of the Jaipur royal family before being transformed into a world-renowned luxury hotel by the Taj Group. Today, every corner of the palace echoes the splendour of Rajasthan's royal legacy while offering the finest contemporary comforts.\n\nSurrounded by 47 acres of beautifully landscaped Mughal gardens, marble corridors and elegant courtyards, Rambagh Palace offers guests the opportunity to experience life as royalty. The richly appointed rooms and suites feature antique furnishings, intricate hand-painted motifs, crystal chandeliers and luxurious fabrics that reflect the palace's regal heritage. From afternoon tea beneath grand arches to rejuvenating therapies at the award-winning J Wellness Circle and fine dining in opulent royal settings, every experience is thoughtfully curated to celebrate Rajasthan's timeless traditions.\n\nLocated in the heart of Jaipur, the palace provides easy access to the city's magnificent forts, colourful bazaars and UNESCO World Heritage Sites while remaining a peaceful sanctuary away from the bustling streets. Whether exploring the Pink City's rich history or simply indulging in the palace's unmatched hospitality, Rambagh Palace promises an unforgettable journey into the grandeur of India's royal past.",

    why: "Rambagh Palace offers one of the most authentic royal experiences in India, where guests are welcomed with the warmth and elegance once reserved for royalty. Its magnificent architecture, beautifully maintained gardens and legendary Taj hospitality create a stay that is truly unforgettable. For anyone dreaming of experiencing Rajasthan's regal heritage, there are few places more iconic.",

    highlights: [
      "Former royal residence of the Maharaja of Jaipur",
      "47-acre Mughal gardens with magnificent palace architecture",
      "Award-winning J Wellness Circle spa",
      "Opulent rooms featuring antique furnishings and royal décor",
      "Legendary Taj hospitality in the heart of Jaipur",
      "Gateway to Rajasthan's royal heritage and UNESCO landmarks",
    ],

    exploreDestination: [
      {
        name: "Amber Fort",
        description:
          "Perched atop the Aravalli Hills, Amber Fort is one of Rajasthan's most spectacular UNESCO World Heritage Sites. Visitors can explore magnificent palaces, intricate mirror work, grand courtyards and beautifully decorated halls while enjoying breathtaking views over Maota Lake and the surrounding hills.",
      },
      {
        name: "City Palace",
        description:
          "Located in the heart of Jaipur, the City Palace remains the residence of the royal family and is a remarkable blend of Rajput and Mughal architecture. Its museums, royal artefacts, elegant courtyards and beautifully decorated gateways provide fascinating insight into the history of the former princely state.",
      },
      {
        name: "Hawa Mahal",
        description:
          "Known as the iconic 'Palace of Winds,' Hawa Mahal is one of Jaipur's most photographed landmarks. Its extraordinary façade, featuring 953 intricately carved windows, was designed to allow royal women to observe city life while remaining unseen. Today, it remains a symbol of Jaipur's architectural brilliance.",
      },
      {
        name: "Jantar Mantar",
        description:
          "A UNESCO World Heritage Site, Jantar Mantar is home to the world's largest collection of stone astronomical instruments. Built by Maharaja Sawai Jai Singh II, the observatory continues to impress visitors with its remarkable scientific precision and architectural ingenuity.",
      },
      {
        name: "Johari Bazaar",
        description:
          "One of Jaipur's oldest and most vibrant markets, Johari Bazaar is famous for its exquisite gemstones, handcrafted jewellery, colourful textiles and traditional Rajasthani handicrafts. Wandering through its lively streets offers an authentic glimpse into the city's rich artisan culture and vibrant local life.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Jaipur International Airport",
          code: "JAI",
          distance: "Nearest airport",
        },
      ],
    },

    idealFor: [
      "Couples",
      "Honeymooners",
      "Luxury Travellers",
      "Heritage Enthusiasts",
      "Families",
      "Cultural Explorers",
      "Destination Celebrations",
      "Royal Rajasthan Holidays",
    ],

    website: "https://www.tajhotels.com/en-in/hotels/rambagh-palace-jaipur",

    map: "https://www.google.com/maps/place/Rambagh+Palace,+Jaipur/@26.8981101,75.8055749,17z/data=!4m10!3m9!1s0x396db41f78970ac5:0xe9eef625b7f871c!5m3!1s2026-07-02!4m1!1i2!8m2!3d26.8981053!4d75.8081498!16s%2Fm%2F0281q3t?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Taj Hotels",
      "Royal Palace",
      "Heritage Hotel",
      "Mughal Gardens",
      "J Wellness Circle",
      "Jaipur",
      "Luxury Palace",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Palace & Heritage",
  },
  //16
  {
    id: "taj-lake-palace-udaipur",
    name: "Taj Lake Palace, Udaipur",
    location: "Udaipur, Rajasthan",
    category: "india",

    image: "/Assets/hotels/Taj Lake-Palace-Udaipur.jpg",
    alt: "Taj Lake Palace, Udaipur, Rajasthan",

    accentClass: "hi--india-palace",

    intro:
      "Floating like a vision of white marble on the tranquil waters of Lake Pichola, Taj Lake Palace, Udaipur is one of the world's most iconic luxury hotels. Built in 1746 as the pleasure palace of Maharana Jagat Singh II, this extraordinary palace appears to rise directly from the lake, creating one of India's most romantic and recognisable settings. Accessible only by boat, every arrival feels like the beginning of a royal celebration, setting the stage for an unforgettable stay.\n\nMeticulously restored by Taj Hotels, the palace retains its regal splendour through intricately carved marble walls, graceful courtyards, ornamental fountains and elegant gardens that reflect the rich heritage of the Mewar dynasty. Lavishly appointed rooms and suites feature exquisite Rajasthani craftsmanship, antique furnishings and panoramic views of Lake Pichola, the City Palace and the surrounding Aravalli Hills. Guests can indulge in exceptional dining, unwind with signature treatments at the J Wellness Circle or simply admire the ever-changing beauty of the lake from the palace's serene terraces.\n\nIts unique location places guests at the heart of Udaipur's historic charm while offering complete tranquillity away from the city's bustling streets. Whether celebrating a honeymoon, a special occasion or simply exploring Rajasthan's royal heritage, Taj Lake Palace offers an experience that perfectly blends timeless elegance, impeccable hospitality and breathtaking natural beauty.",

    why: "Taj Lake Palace is more than a luxury hotel—it's a living royal palace surrounded by the shimmering waters of Lake Pichola. Its magical setting, impeccable Taj hospitality and centuries of history combine to create one of the most unforgettable stays anywhere in the world.",

    highlights: [
      "Floating 18th-century marble palace on Lake Pichola",
      "Accessible exclusively by boat",
      "Former pleasure palace of Maharana Jagat Singh II",
      "Panoramic views of Lake Pichola, City Palace and the Aravalli Hills",
      "Award-winning J Wellness Circle spa and signature Taj hospitality",
      "One of the world's most iconic luxury heritage hotels",
    ],

    exploreDestination: [
      {
        name: "City Palace, Udaipur",
        description:
          "Overlooking Lake Pichola, the magnificent City Palace is Rajasthan's largest palace complex and one of its finest architectural masterpieces. Visitors can explore royal courtyards, museums, intricately decorated halls and panoramic terraces that offer spectacular views of the lake and the surrounding city.",
      },
      {
        name: "Lake Pichola",
        description:
          "The heart and soul of Udaipur, Lake Pichola is best experienced on a leisurely boat cruise. Sailing past grand palaces, historic ghats and picturesque islands offers a unique perspective of the City of Lakes, particularly during sunset when the waters reflect the golden hues of the surrounding architecture.",
      },
      {
        name: "Jag Mandir",
        description:
          "Located on an island in Lake Pichola, Jag Mandir is a magnificent 17th-century palace renowned for its marble pavilions, lush gardens and fascinating royal history. It offers visitors a peaceful retreat along with spectacular views of the City Palace and surrounding hills.",
      },
      {
        name: "Saheliyon-ki-Bari",
        description:
          "Designed for the royal ladies of Mewar, this elegant garden is celebrated for its marble fountains, lotus pools, kiosks and beautifully landscaped lawns. It remains one of Udaipur's most charming historical attractions and a wonderful place for a leisurely stroll.",
      },
      {
        name: "Bagore Ki Haveli",
        description:
          "Situated along the waterfront at Gangaur Ghat, Bagore Ki Haveli is a beautifully restored 18th-century mansion showcasing royal artefacts, traditional architecture and cultural exhibitions. Its evening folk dance and puppet performances provide a vibrant introduction to Rajasthan's artistic traditions.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Maharana Pratap Airport",
          location: "Udaipur",
          code: "UDR",
          distance: "Nearest airport",
        },
      ],
    },

    idealFor: [
      "Couples",
      "Honeymooners",
      "Luxury Travellers",
      "Heritage Enthusiasts",
      "Destination Celebrations",
      "Families",
      "Romantic Getaways",
      "Rajasthan Luxury Holidays",
    ],

    website: "https://www.tajhotels.com/en-in/hotels/taj-lake-palace-udaipur",

    map: "https://www.google.com/maps/place/Taj+Lake+Palace,+Udaipur/@24.5762769,73.6802023,18z/data=!4m16!1m5!2m4!1staj+lake+palace+udaipur!5m2!5m1!1s2026-07-02!3m9!1s0x3967efecf87f0b8b:0x2708953a0e177443!5m2!4m1!1i2!8m2!3d24.5754433!4d73.6800308!15sChd0YWogbGFrZSBwYWxhY2UgdWRhaXB1ciIDiAEBWhkiF3RhaiBsYWtlIHBhbGFjZSB1ZGFpcHVykgEFaG90ZWzgAQA!16s%2Fm%2F03g__gs?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Taj Hotels",
      "Lake Palace",
      "Royal Heritage",
      "Lake Pichola",
      "Luxury Palace",
      "J Wellness Circle",
      "Udaipur",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Palace & Heritage",
  },
  //17
  {
    id: "the-leela-palace-new-delhi",
    name: "The Leela Palace, New Delhi",
    location: "New Delhi, Delhi",
    category: "india",

    image: "/Assets/hotels/The-Leela-Palace-New-Delhi.jpg",
    alt: "The Leela Palace, New Delhi, India",

    accentClass: "hi--india-palace",

    intro:
      "In the heart of India's capital, where grand boulevards, diplomatic enclaves and centuries of history converge, The Leela Palace New Delhi stands as one of the city's most distinguished luxury hotels. Inspired by the architectural grandeur of Lutyens' Delhi and the palaces of Rajasthan, the hotel seamlessly blends royal Indian heritage with contemporary sophistication. From its magnificent façade and opulent interiors to its impeccable service, every detail has been thoughtfully curated to create an experience that is both regal and welcoming.\n\nThe hotel's spacious rooms and suites are among the largest in the city, elegantly appointed with handcrafted furnishings, fine artwork and modern comforts that cater to both leisure and business travellers. World-class dining, an award-winning spa and a rooftop infinity pool overlooking the Delhi skyline further elevate the experience, while personalised hospitality ensures every stay feels effortless and memorable.\n\nIts location in the prestigious Diplomatic Enclave makes it an ideal base for discovering New Delhi's rich cultural heritage. Iconic monuments, bustling markets, museums and government landmarks are all within easy reach, allowing guests to experience the many facets of India's vibrant capital. Whether visiting for business, a cultural holiday or a special celebration, The Leela Palace offers an exceptional combination of luxury, elegance and timeless Indian hospitality.",

    why: "The Leela Palace New Delhi beautifully combines the grandeur of India's royal heritage with the sophistication of a modern luxury hotel. Its elegant design, exceptional dining and impeccable service create an experience that feels both indulgent and deeply rooted in Indian culture. It is one of the capital's finest addresses for travellers seeking refined luxury.",

    highlights: [
      "Luxury palace hotel inspired by Lutyens' Delhi and Rajasthan's royal architecture",
      "Located in New Delhi's prestigious Diplomatic Enclave",
      "Among the city's largest luxury rooms and suites",
      "Award-winning spa and rooftop infinity pool overlooking the Delhi skyline",
      "World-class dining with exceptional personalised hospitality",
      "Ideal base for exploring New Delhi's cultural and historic landmarks",
    ],

    exploreDestination: [
      {
        name: "India Gate",
        description:
          "One of New Delhi's most iconic landmarks, India Gate is a magnificent war memorial surrounded by beautifully landscaped gardens. Particularly enchanting in the evening, it offers a wonderful setting for leisurely walks while showcasing the grandeur of Lutyens' Delhi.",
      },
      {
        name: "Humayun's Tomb",
        description:
          "A UNESCO World Heritage Site, Humayun's Tomb is regarded as the architectural inspiration for the Taj Mahal. Its magnificent Mughal gardens, intricate stonework and elegant symmetry make it one of Delhi's most remarkable historical monuments.",
      },
      {
        name: "Qutub Minar",
        description:
          "Standing over 70 metres tall, Qutub Minar is the world's tallest brick minaret and one of India's most celebrated UNESCO World Heritage Sites. Surrounded by ancient ruins and beautifully carved monuments, it offers a fascinating glimpse into Delhi's medieval history.",
      },
      {
        name: "Lodhi Gardens",
        description:
          "A peaceful green oasis in the heart of the city, Lodhi Gardens combines beautifully landscaped lawns with centuries-old tombs and monuments. It is a favourite destination for morning walks, photography and escaping the city's busy pace.",
      },
      {
        name: "Khan Market",
        description:
          "One of Delhi's most exclusive shopping and dining districts, Khan Market is home to designer boutiques, bookstores, cafés and gourmet restaurants. It offers an excellent opportunity to experience the capital's contemporary lifestyle while enjoying some of its finest culinary experiences.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Indira Gandhi International Airport",
          code: "DEL",
          distance: "Nearest airport",
        },
      ],
    },

    idealFor: [
      "Luxury Travellers",
      "Couples",
      "Business Travellers",
      "Families",
      "Cultural Explorers",
      "Food Lovers",
      "Celebrations",
      "First-time Visitors to Delhi",
    ],

    website: "https://www.theleela.com/the-leela-palace-new-delhi",

    map: "https://www.google.com/maps/place/The+Leela+Palace+New+Delhi+-+The+Capital's+Only+Modern+Palace+Hotel/@28.5798709,77.1867557,17z/data=!4m10!3m9!1s0x390d1d606f974797:0xa39df204f5d2d7f7!5m3!1s2026-07-02!4m1!1i2!8m2!3d28.5798662!4d77.1893306!16s%2Fg%2F11bc745z_5?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "The Leela",
      "Luxury Palace",
      "Diplomatic Enclave",
      "Lutyens' Delhi",
      "Rooftop Infinity Pool",
      "Luxury Hotel",
      "New Delhi",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Palace & Heritage",
  },
  //18
  {
    id: "the-oberoi-amarvilas-agra",
    name: "The Oberoi Amarvilas, Agra",
    location: "Agra, Uttar Pradesh",
    category: "india",

    image: "/Assets/hotels/The-Oberoi-Amar-Vilas-Agra.jpg",
    alt: "The Oberoi Amarvilas, Agra, Uttar Pradesh",

    accentClass: "hi--india-palace",

    intro:
      "Just 600 metres from the iconic Taj Mahal, The Oberoi Amarvilas is one of India's most celebrated luxury hotels, offering an unparalleled blend of Mughal grandeur, world-class hospitality and breathtaking views of one of the world's greatest architectural masterpieces. Inspired by the palaces of the Mughal era, the hotel is a masterpiece in itself, where elegant domes, intricate arches, terraced gardens, reflection pools and cascading fountains create an atmosphere of timeless sophistication.\n\nEvery room and suite at Amarvilas has been thoughtfully designed to maximise comfort while celebrating its extraordinary location. Most accommodations feature uninterrupted views of the Taj Mahal, allowing guests to witness the monument transform from the soft hues of sunrise to the golden glow of sunset and the magical brilliance of moonlight. Rich interiors, handcrafted furnishings and impeccable Oberoi service elevate every stay into an unforgettable experience.\n\nBeyond the hotel's luxurious surroundings lies the rich cultural heritage of Agra. Once the capital of the mighty Mughal Empire, the city is home to magnificent forts, ornate tombs and bustling markets that tell stories of India's imperial past. Whether exploring UNESCO World Heritage Sites, indulging in exceptional dining or unwinding at the award-winning spa, every moment at The Oberoi Amarvilas reflects elegance, romance and timeless luxury.",

    why: "Few hotels in the world can rival the setting of The Oberoi Amarvilas. Waking up to uninterrupted views of the Taj Mahal, paired with impeccable Oberoi hospitality and exquisite Mughal-inspired architecture, creates an experience that is both deeply romantic and truly unforgettable. It is the ultimate address for discovering the timeless beauty of Agra in unparalleled luxury.",

    highlights: [
      "Luxury hotel located just 600 metres from the Taj Mahal",
      "Most rooms and suites offer uninterrupted views of the Taj Mahal",
      "Inspired by magnificent Mughal palace architecture",
      "Elegant terraced gardens, reflection pools and cascading fountains",
      "Award-winning spa with world-renowned Oberoi hospitality",
      "Ideal base for exploring Agra's UNESCO World Heritage Sites",
    ],

    exploreDestination: [
      {
        name: "Taj Mahal",
        description:
          "A UNESCO World Heritage Site and one of the Seven Wonders of the World, the Taj Mahal is India's most iconic monument. Built by Emperor Shah Jahan as a tribute to his beloved wife Mumtaz Mahal, this magnificent white marble mausoleum is celebrated for its extraordinary craftsmanship, perfect symmetry and timeless beauty. Visiting at sunrise or sunset offers an unforgettable perspective of this architectural masterpiece.",
      },
      {
        name: "Agra Fort",
        description:
          "Another UNESCO World Heritage Site, Agra Fort served as the principal residence of the Mughal emperors for generations. Behind its imposing red sandstone walls lie elegant marble palaces, audience halls, beautiful courtyards and sweeping views of the Taj Mahal. The fort provides fascinating insight into the grandeur and political history of the Mughal Empire.",
      },
      {
        name: "Tomb of Itimad-ud-Daulah",
        description:
          "Often referred to as the 'Baby Taj,' this exquisite marble mausoleum is regarded as a precursor to the Taj Mahal. Delicate inlay work, intricate lattice screens and beautifully landscaped Mughal gardens make it one of Agra's most elegant monuments and a favourite among architecture enthusiasts.",
      },
      {
        name: "Mehtab Bagh",
        description:
          "Located across the Yamuna River, Mehtab Bagh is a beautifully restored Mughal garden offering one of the finest panoramic views of the Taj Mahal. Particularly popular during sunset, it provides photographers and visitors with a peaceful setting to admire the monument from a unique perspective.",
      },
      {
        name: "Fatehpur Sikri",
        description:
          "Approximately an hour's drive from Agra, Fatehpur Sikri was once the magnificent capital of Emperor Akbar. This UNESCO World Heritage Site features grand palaces, mosques and courtyards constructed from striking red sandstone, showcasing some of the finest examples of Mughal architecture in India.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Agra Airport",
          code: "AGR",
          distance: "Nearest airport",
        },
        {
          name: "Indira Gandhi International Airport",
          location: "New Delhi",
          code: "DEL",
          distance: "230 km • Approximately 3.5 hours by road",
        },
      ],
    },

    idealFor: [
      "Couples",
      "Honeymooners",
      "Luxury Travellers",
      "Heritage Enthusiasts",
      "Families",
      "Cultural Explorers",
      "Romantic Getaways",
      "Golden Triangle Holidays",
    ],

    website: "https://www.oberoihotels.com/hotels-in-agra-amarvilas-resort/",

    map: "https://www.google.com/maps/place/The+Oberoi+Amarvilas,+Agra/@27.1680079,78.0464372,17z/data=!4m10!3m9!1s0x3974711bd2e1a9c1:0xd69a6ec8d865a0a5!5m3!1s2026-07-02!4m1!1i2!8m2!3d27.1680032!4d78.0490121!16s%2Fg%2F1tgpr050?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Oberoi Hotels",
      "Taj Mahal Views",
      "Luxury Palace",
      "Mughal Architecture",
      "UNESCO Heritage",
      "Romantic Getaway",
      "Agra",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Palace & Heritage",
  },
  //19
  {
    id: "the-taj-mahal-palace-mumbai",
    name: "The Taj Mahal Palace, Mumbai",
    location: "Mumbai, Maharashtra",
    category: "india",

    image: "/Assets/hotels/The-Taj-Mahal-Palace-Mumbai.jpg",
    alt: "The Taj Mahal Palace, Mumbai, Maharashtra",

    accentClass: "hi--india-palace",

    intro:
      "Standing majestically on the shores of the Arabian Sea overlooking the iconic Gateway of India, The Taj Mahal Palace, Mumbai is one of India's most legendary hotels and a symbol of timeless elegance. Since opening its doors in 1903, this architectural masterpiece has welcomed royalty, heads of state, celebrated artists and discerning travellers from around the world. Combining Indo-Saracenic architecture with European influences, the hotel remains an enduring icon of Mumbai's rich history and cosmopolitan spirit.\n\nBehind its distinctive red dome lies a world of refined luxury. Grand marble staircases, intricate artwork, crystal chandeliers and heritage corridors tell stories spanning more than a century, while beautifully appointed rooms and suites offer every modern comfort with impeccable Taj hospitality. Guests can indulge in award-winning restaurants, rejuvenating wellness experiences at the J Wellness Circle or simply admire the spectacular views of Mumbai Harbour from the hotel. Every detail reflects the perfect balance between historic grandeur and contemporary sophistication.\n\nIdeally located in the vibrant Colaba district, The Taj Mahal Palace places guests within walking distance of Mumbai's cultural landmarks, art galleries, shopping districts and lively waterfront. Whether discovering the city's colonial heritage, enjoying its dynamic culinary scene or celebrating a special occasion, every stay promises an unforgettable experience in one of the world's most iconic hotels.",

    why: "The Taj Mahal Palace is more than a luxury hotel—it is a living landmark that has shaped Mumbai's history for over a century. Its extraordinary heritage, legendary hospitality and unrivalled location overlooking the Gateway of India make every stay both memorable and inspiring. Few hotels in the world offer such a seamless blend of history, culture and timeless luxury.",

    highlights: [
      "Iconic heritage hotel overlooking the Gateway of India",
      "Architectural masterpiece combining Indo-Saracenic and European styles",
      "Historic landmark welcoming royalty and world leaders since 1903",
      "Award-winning restaurants and J Wellness Circle spa",
      "Prime location in Mumbai's vibrant Colaba district",
      "Legendary Taj hospitality with panoramic Mumbai Harbour views",
    ],

    exploreDestination: [
      {
        name: "Gateway of India",
        description:
          "Located directly opposite the hotel, the Gateway of India is Mumbai's most recognisable monument. Built in 1924 to commemorate the visit of King George V and Queen Mary, this magnificent basalt arch overlooks the Arabian Sea and serves as the city's most iconic gathering place. It is also the departure point for harbour cruises and ferries to nearby attractions.",
      },
      {
        name: "Elephanta Caves",
        description:
          "A UNESCO World Heritage Site, the Elephanta Caves are reached by a scenic ferry ride across Mumbai Harbour. Dating back to the 5th–8th centuries, the rock-cut cave temples are renowned for their magnificent sculptures dedicated to Lord Shiva, including the iconic three-faced Maheshmurti.",
      },
      {
        name: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya",
        description:
          "Formerly known as the Prince of Wales Museum, this renowned institution houses an exceptional collection of Indian art, sculptures, textiles, miniature paintings and archaeological treasures. Its impressive Indo-Saracenic architecture makes it one of Mumbai's most important cultural landmarks.",
      },
      {
        name: "Colaba Causeway",
        description:
          "One of Mumbai's most vibrant shopping streets, Colaba Causeway is famous for its eclectic mix of boutiques, street markets, cafés and heritage buildings. Visitors can browse handcrafted jewellery, fashion, antiques and local souvenirs while soaking up the lively atmosphere of South Mumbai.",
      },
      {
        name: "Marine Drive",
        description:
          "Known as the 'Queen's Necklace,' Marine Drive is Mumbai's iconic waterfront promenade stretching along the Arabian Sea. A leisurely evening walk offers stunning sunset views, refreshing sea breezes and a chance to experience the city's vibrant energy.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Chhatrapati Shivaji Maharaj International Airport",
          location: "Mumbai",
          code: "BOM",
          distance: "Nearest airport",
        },
      ],
    },

    idealFor: [
      "Luxury Travellers",
      "Couples",
      "Honeymooners",
      "Families",
      "Heritage Enthusiasts",
      "Food Lovers",
      "Business Travellers",
      "Mumbai City Breaks",
    ],

    website: "https://www.tajhotels.com/en-in/hotels/taj-mahal-palace-mumbai",

    map: "https://www.google.com/maps/place/The+Taj+Mahal+Palace,+Mumbai/@18.9216682,72.8306279,17z/data=!4m10!3m9!1s0x3be7d1c06fffffff:0xc0290485a4d73f57!5m3!1s2026-07-13!4m1!1i2!8m2!3d18.9216631!4d72.8332028!16zL20vMDZieDFj?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Taj Hotels",
      "Gateway of India",
      "Heritage Hotel",
      "Mumbai Harbour",
      "J Wellness Circle",
      "Luxury Palace",
      "Colaba",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Palace & Heritage",
  },
  //20
  //Gods own country
  // {
  //   id: "brunton-boatyard-fort-kochi",
  //   name: "Brunton Boatyard, Fort Kochi",
  //   location: "Fort Kochi, Kerala",
  //   category: "india",

  //   image: "/Assets/hotels/Brunton-Boatyard-Cochin.jpg",
  //   alt: "Brunton Boatyard, Fort Kochi, Kerala",

  //   accentClass: "hi--india-heritage",

  //   intro:
  //     "Standing gracefully on the historic waterfront of Fort Kochi, Brunton Boatyard by CGH Earth is a boutique heritage hotel that beautifully reflects the city's fascinating maritime past. Built on the site of a former Victorian shipbuilding yard, the hotel pays homage to Kochi's centuries-old legacy as a thriving port where Arab, Chinese, Portuguese, Dutch and British traders once converged. Every corner of the property celebrates this rich history, creating an experience that is as much about the destination as it is about the stay.\n\nDesigned in a charming blend of colonial architecture and traditional Kerala influences, Brunton Boatyard exudes timeless elegance. Spacious rooms, antique-inspired furnishings, high wooden ceilings and wide verandas evoke the atmosphere of a bygone era, while modern comforts ensure a relaxed and luxurious stay. The views across Kochi Harbour, where fishing boats, ferries and merchant vessels continue to pass throughout the day, create an ever-changing backdrop that adds to the property's unique charm.\n\nIts location places guests at the heart of Fort Kochi, allowing them to explore centuries-old churches, heritage streets, art cafés, museums and vibrant spice markets, all within walking distance. Evenings are best spent watching the sunset over the harbour before returning to the peaceful comfort of the hotel, where warm hospitality and exceptional cuisine complete the experience.",

  //   why: "Brunton Boatyard effortlessly transports guests to Kochi's colonial past while offering all the comforts of contemporary luxury. Its waterfront location, beautifully restored heritage architecture and intimate atmosphere make it one of the most characterful stays in Kerala. For travellers who enjoy history, culture and personalised hospitality, it offers an experience that is both elegant and unforgettable.",

  //   highlights: [
  //     "Boutique heritage hotel on Fort Kochi's historic waterfront",
  //     "Built on the site of a former Victorian shipbuilding yard",
  //     "Colonial architecture blended with traditional Kerala design",
  //     "Panoramic views across Kochi Harbour",
  //     "Walking distance to Fort Kochi's heritage attractions",
  //     "Signature CGH Earth hospitality celebrating Kochi's maritime legacy",
  //   ],

  //   exploreDestination: [
  //     {
  //       name: "Fort Kochi",
  //       description:
  //         "The historic heart of Kochi is a delightful neighbourhood where colonial architecture, art galleries, boutique cafés and heritage homes line charming streets. Influenced by Portuguese, Dutch and British rule, Fort Kochi is best explored on foot, allowing visitors to discover hidden courtyards, colourful murals and beautifully preserved buildings that tell the story of the city's multicultural past.",
  //     },
  //     {
  //       name: "Chinese Fishing Nets",
  //       description:
  //         "Among Kochi's most iconic landmarks, the Chinese Fishing Nets have stood along the waterfront for centuries. Introduced by Chinese traders, these enormous cantilevered nets continue to be operated using traditional techniques. Watching local fishermen lower and raise the nets against the backdrop of the setting sun is one of Fort Kochi's most memorable experiences.",
  //     },
  //     {
  //       name: "Mattancherry Palace (Dutch Palace)",
  //       description:
  //         "Gifted by the Portuguese to the Raja of Kochi in the 16th century, Mattancherry Palace houses an exceptional collection of Kerala murals, royal portraits and historical artefacts. Its beautifully preserved interiors provide fascinating insight into the history of the Kochi royal family and the region's artistic heritage.",
  //     },
  //     {
  //       name: "Jew Town & Paradesi Synagogue",
  //       description:
  //         "Jew Town is one of Kochi's most atmospheric neighbourhoods, known for its antique shops, spice warehouses and charming colonial streets. At its heart stands the Paradesi Synagogue, built in 1568, featuring exquisite Belgian chandeliers, hand-painted Chinese tiles and centuries of Jewish heritage that continue to make it one of Kerala's most remarkable cultural landmarks.",
  //     },
  //     {
  //       name: "Marine Drive",
  //       description:
  //         "Located in Ernakulam, Marine Drive offers a scenic promenade overlooking Kochi's backwaters. Popular with both locals and visitors, it is the perfect place for an evening stroll, a sunset cruise or simply watching the bustling harbour come alive as boats glide across the water and city lights reflect on the backwaters.",
  //     },
  //   ],

  //   howToReach: {
  //     airports: [
  //       {
  //         name: "Cochin International Airport",
  //         code: "COK",
  //         distance: "Nearest airport",
  //       },
  //     ],
  //   },

  //   idealFor: [
  //     "Heritage Travellers",
  //     "Couples",
  //     "Cultural Explorers",
  //     "Food Lovers",
  //     "Boutique Luxury Holidays",
  //     "Slow Travellers",
  //     "Photography Enthusiasts",
  //     "Kerala Heritage Tours",
  //   ],

  //   website: "https://www.cghearth.com/brunton-boatyard",

  //   map: "https://www.google.com/maps/place/Brunton+Boatyard+-+CGH+Earth/@9.9684961,76.2429938,17z/data=!4m10!3m9!1s0x3b086d3faaaaaaab:0xafa0312f10bfbe67!5m3!1s2026-07-13!4m1!1i2!8m2!3d9.9684908!4d76.2455687!16s%2Fg%2F11bz0mddy7?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

  //   tags: [
  //     "CGH Earth",
  //     "Heritage Hotel",
  //     "Fort Kochi",
  //     "Colonial Architecture",
  //     "Kochi Harbour",
  //     "Boutique Luxury",
  //     "Maritime Heritage",
  //   ],

  //   isFeatured: true,
  //   isRecommended: true,

  //   categoryTag: "Heritage",
  // },
  //21
  {
    id: "kumarakom-lake-resort",
    name: "Kumarakom Lake Resort, Kumarakom",
    location: "Kumarakom, Kerala",
    category: "india",

    image: "/Assets/hotels/Kumarakom-lake-resort.jpg",
    alt: "Kumarakom Lake Resort, Kumarakom, Kerala",

    accentClass: "hi--india-backwaters",

    intro:
      "Nestled along the tranquil shores of Vembanad Lake, Kumarakom Lake Resort is one of Kerala's most celebrated luxury retreats, where timeless heritage meets the serene beauty of the backwaters. Surrounded by swaying coconut palms, lush tropical gardens and an intricate network of canals, the resort offers an authentic experience that reflects the charm and traditions of Kerala while providing every modern comfort.\n\nThe resort is renowned for its beautifully restored heritage villas, many of which have been carefully relocated from different parts of Kerala and reconstructed using traditional craftsmanship. Intricately carved wooden ceilings, antique doors, open courtyards and elegant interiors create an atmosphere that feels rich in history yet effortlessly luxurious. Several villas feature private pools overlooking the backwaters, allowing guests to enjoy complete privacy amidst spectacular natural surroundings.\n\nLife at Kumarakom unfolds at an unhurried pace. Guests can cruise through the peaceful backwaters on a traditional houseboat, enjoy rejuvenating Ayurvedic therapies, savour authentic Kerala cuisine prepared with locally sourced ingredients or simply relax while watching fishing boats glide across the lake. Every experience is thoughtfully designed to celebrate the region's unique culture, ecology and hospitality.\n\nWhether visiting for a romantic getaway, a family holiday or a wellness escape, Kumarakom Lake Resort offers an immersive journey into Kerala's backwater lifestyle. Combining exceptional service, heritage architecture and breathtaking scenery, it remains one of the state's most iconic luxury destinations.",

    why: "Kumarakom Lake Resort beautifully showcases Kerala's rich heritage through its restored traditional villas, tranquil backwater setting and warm hospitality. Every stay feels deeply connected to the culture and natural beauty of the region, offering an experience that is both luxurious and authentically Keralan. It is the perfect retreat for travellers seeking relaxation, romance and an unforgettable backwater escape.",

    highlights: [
      "Luxury heritage resort on the shores of Vembanad Lake",
      "Beautifully restored traditional Kerala heritage villas",
      "Private pool villas overlooking the backwaters",
      "Authentic houseboat cruises and Ayurvedic wellness experiences",
      "Award-winning Kerala cuisine using locally sourced ingredients",
      "Immersive luxury inspired by Kerala's backwater lifestyle",
    ],

    exploreDestination: [
      {
        name: "Vembanad Lake",
        description:
          "The largest lake in Kerala, Vembanad forms the heart of the state's famous backwaters. A leisurely cruise across its calm waters reveals picturesque villages, coconut groves, traditional Chinese fishing nets and everyday life unfolding along the canals. Whether aboard a luxurious houseboat or a small country boat, exploring the lake is an essential Kerala experience.",
      },
      {
        name: "Kumarakom Bird Sanctuary",
        description:
          "Spread across lush wetlands on the banks of Vembanad Lake, Kumarakom Bird Sanctuary is a paradise for birdwatchers and nature enthusiasts. Home to kingfishers, herons, egrets and numerous migratory species, the sanctuary offers peaceful walking trails where visitors can experience Kerala's rich biodiversity in its natural setting.",
      },
      {
        name: "Pathiramanal Island",
        description:
          "Accessible only by boat, Pathiramanal is a small island surrounded by the tranquil waters of Vembanad Lake. Rich in birdlife and natural vegetation, it offers a peaceful escape from the mainland and is particularly rewarding for photographers and nature lovers seeking quiet moments amidst Kerala's backwaters.",
      },
      {
        name: "Bay Island Driftwood Museum",
        description:
          "One of Kumarakom's unique attractions, this museum showcases remarkable sculptures created from naturally shaped driftwood collected from across India. Each piece demonstrates extraordinary craftsmanship while highlighting the artistic possibilities found in nature, making it an interesting stop for art lovers and curious travellers alike.",
      },
      {
        name: "Aruvikkuzhi Waterfalls",
        description:
          "Located amidst rubber plantations and gentle hills, Aruvikkuzhi Waterfalls offers a refreshing contrast to Kerala's tranquil backwaters. Particularly beautiful during and after the monsoon, the cascading waters and surrounding greenery make it a pleasant excursion for visitors wishing to explore the region beyond the lake.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Cochin International Airport",
          code: "COK",
          distance: "Nearest airport",
        },
      ],
    },

    idealFor: [
      "Couples",
      "Honeymooners",
      "Families",
      "Nature Lovers",
      "Wellness Travellers",
      "Luxury Holidays",
      "Birdwatchers",
      "Backwater Escapes",
    ],

    website: "https://www.kumarakomlakeresort.in/",

    map: "https://www.google.com/maps/place/Kumarakom+Lake+Resort/@9.6121514,76.4283203,17z/data=!4m10!3m9!1s0x3b08806b11120887:0x769331ac4b00a93f!5m3!1s2026-07-13!4m1!1i2!8m2!3d9.6121461!4d76.4308952!16s%2Fg%2F1jkx9mjhd?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Kerala Backwaters",
      "Vembanad Lake",
      "Heritage Villas",
      "Houseboat Experience",
      "Luxury Resort",
      "Ayurveda",
      "Kumarakom",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Backwaters",
  },
  //22
  {
    id: "spice-village-thekkady",
    name: "Spice Village, Thekkady",
    location: "Thekkady, Kerala",
    category: "india",

    image: "/Assets/hotels/Spice-Village-Thekkady.jpg",
    alt: "Spice Village, Thekkady, Kerala",

    accentClass: "hi--india-wild",

    intro:
      "Nestled on the edge of the renowned Periyar Tiger Reserve, Spice Village by CGH Earth is a charming eco-resort that celebrates the traditions, landscapes and biodiversity of Kerala's spice-growing highlands. Inspired by the homes of the indigenous communities of the Western Ghats, the resort offers a refreshing alternative to conventional luxury, where sustainability, authenticity and nature come together to create an enriching travel experience.\n\nDesigned using locally sourced materials, the cottages feature thatched roofs, earthy interiors and handcrafted furnishings that blend seamlessly into the surrounding forest. Every detail reflects CGH Earth's commitment to responsible tourism, allowing guests to experience comfort while remaining closely connected to the natural environment. Walking through the resort, the fragrance of cardamom, pepper and other spices fills the air, creating a constant reminder of Thekkady's rich agricultural heritage.\n\nThe experience extends beyond the resort itself. Guests can embark on wildlife safaris in Periyar Tiger Reserve, cruise across the tranquil Periyar Lake, walk through aromatic spice plantations or discover the region's vibrant traditions through local cuisine and cultural performances. Whether exploring the forests or simply enjoying the peaceful surroundings, every moment encourages a deeper appreciation of Kerala's remarkable biodiversity.",

    why: "Spice Village offers a rare opportunity to experience luxury in harmony with nature. Its eco-conscious philosophy, charming tribal-inspired cottages and proximity to Periyar Tiger Reserve create an experience that is authentic, immersive and distinctly Keralan. For travellers seeking wildlife, wellness and sustainability, it is one of the most rewarding retreats in the Western Ghats.",

    highlights: [
      "Eco-resort bordering the Periyar Tiger Reserve",
      "Tribal-inspired cottages built using sustainable local materials",
      "Authentic CGH Earth eco-luxury experience",
      "Surrounded by Kerala's famous spice plantations",
      "Wildlife safaris, nature experiences and cultural immersion",
      "Ideal retreat for sustainable travel in the Western Ghats",
    ],

    exploreDestination: [
      {
        name: "Periyar Tiger Reserve",
        description:
          "One of India's finest wildlife sanctuaries, Periyar Tiger Reserve is home to elephants, gaurs, sambar deer and a remarkable variety of birdlife. Guided nature walks, bamboo rafting and jungle patrol experiences allow visitors to explore the forest while learning about its rich ecosystem. Although tiger sightings are rare, the reserve offers one of Kerala's most memorable wildlife experiences.",
      },
      {
        name: "Periyar Lake",
        description:
          "Formed by the Mullaperiyar Dam, Periyar Lake lies at the heart of the reserve and offers scenic boat cruises through forested landscapes. Wildlife frequently gathers along the shoreline, making the lake one of the best places to spot elephants, deer and numerous bird species in their natural habitat.",
      },
      {
        name: "Spice Plantations",
        description:
          "Thekkady is synonymous with spices, and a guided plantation tour provides fascinating insight into the cultivation of cardamom, pepper, cinnamon, cloves and nutmeg. Visitors can learn about traditional farming practices while experiencing the aromas that have made Kerala's spice trade famous around the world.",
      },
      {
        name: "Kadathanadan Kalari Centre",
        description:
          "Experience Kerala's ancient martial art of Kalaripayattu through captivating live performances showcasing agility, discipline and centuries-old combat techniques. The demonstrations offer a fascinating glimpse into one of the world's oldest martial traditions and remain a cultural highlight of any visit to Thekkady.",
      },
      {
        name: "Mangala Devi Kannagi Temple",
        description:
          "Located high in the forests of the Western Ghats, this ancient hilltop temple is dedicated to Kannagi, the legendary heroine of Tamil literature. Besides its historical and spiritual significance, the temple rewards visitors with breathtaking panoramic views of the surrounding mountains and forests, particularly during its annual festival when access is permitted.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Cochin International Airport",
          code: "COK",
          distance: "145 km • Approximately 4 hours by road",
        },
        {
          name: "Madurai Airport",
          code: "IXM",
          distance: "153 km • Approximately 3.5 hours by road",
        },
      ],
    },

    idealFor: [
      "Wildlife Enthusiasts",
      "Nature Lovers",
      "Couples",
      "Families",
      "Eco-conscious Travellers",
      "Photography Enthusiasts",
      "Wellness Travellers",
      "Kerala Nature Holidays",
    ],

    website: "https://www.cghearth.com/spice-village",

    map: "https://www.google.com/maps/place/Spice+Village/@9.6032362,77.1675754,17z/data=!3m1!4b1!4m10!3m9!1s0x3b0655eb87eddcff:0x8296645878f0c5ba!5m3!1s2026-07-13!4m1!1i2!8m2!3d9.6032309!4d77.1701503!16s%2Fg%2F1tfsfvc7?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "CGH Earth",
      "Eco Resort",
      "Periyar Tiger Reserve",
      "Wildlife",
      "Spice Plantations",
      "Sustainable Tourism",
      "Western Ghats",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Wildlife & Nature",
  },
  //23
  {
    id: "taj-green-cove-resort-spa-kovalam",
    name: "Taj Green Cove Resort & Spa, Kovalam",
    location: "Kovalam, Kerala",
    category: "india",

    image: "/Assets/hotels/Taj-Green-Cove-Kovalam.jpg",
    alt: "Taj Green Cove Resort & Spa, Kovalam, Kerala",

    accentClass: "hi--india-coast",

    intro:
      "Nestled between lush tropical landscapes and the sparkling Arabian Sea, Taj Green Cove Resort & Spa, Kovalam is a tranquil sanctuary where Kerala's natural beauty takes centre stage. Designed by renowned architect Charles Correa, the resort blends contemporary elegance with traditional Kerala influences, creating a seamless harmony between architecture and the surrounding environment. Overlooking a serene lagoon and just moments from the iconic beaches of Kovalam, the property offers an atmosphere of privacy, comfort and understated luxury.\n\nThe resort's spacious rooms and villas are thoughtfully positioned amidst swaying coconut palms, landscaped gardens and winding pathways, allowing guests to feel immersed in nature throughout their stay. Large windows and private balconies invite the outdoors in, while warm interiors and attentive service create a welcoming retreat after a day of exploration. Whether enjoying a leisurely breakfast overlooking the lagoon, unwinding with a signature wellness treatment or simply relaxing by the infinity pool, every experience is designed to reflect the calm and unhurried spirit of Kerala.\n\nIts location makes it an ideal base for discovering the cultural and natural attractions of southern Kerala. From historic temples and vibrant local markets to picturesque beaches and backwaters, the region offers a rich blend of heritage and coastal beauty. Whether travelling as a couple, family or wellness seeker, Taj Green Cove Resort & Spa delivers an experience that combines the warmth of Taj hospitality with one of Kerala's most scenic seaside settings.",

    why: "Taj Green Cove effortlessly combines the tranquillity of Kerala's coastline with the warmth of world-class hospitality. Its peaceful lagoon setting, thoughtfully designed spaces and close proximity to Kovalam's famous beaches make it an ideal retreat for travellers seeking relaxation, wellness and authentic coastal experiences.",

    highlights: [
      "Luxury lagoon-side resort designed by renowned architect Charles Correa",
      "Contemporary architecture inspired by traditional Kerala design",
      "Serene setting between tropical gardens and the Arabian Sea",
      "Infinity pool, signature wellness experiences and Taj hospitality",
      "Close to Kovalam's iconic beaches and southern Kerala attractions",
      "Ideal blend of coastal luxury, wellness and nature",
    ],

    exploreDestination: [
      {
        name: "Kovalam Beach",
        description:
          "One of India's most celebrated beaches, Kovalam is renowned for its crescent-shaped shoreline, golden sands and vibrant seaside atmosphere. Visitors can enjoy swimming, surfing, catamaran rides or simply relax while watching spectacular sunsets over the Arabian Sea. The beach promenade is lined with cafés, boutiques and seafood restaurants that add to its lively charm.",
      },
      {
        name: "Vizhinjam Lighthouse",
        description:
          "Standing atop a rocky headland, the Vizhinjam Lighthouse offers breathtaking panoramic views of Kovalam's coastline and the Arabian Sea. Climbing to the top rewards visitors with sweeping vistas of palm-fringed beaches, fishing villages and endless blue waters, making it one of the region's most photographed landmarks.",
      },
      {
        name: "Padmanabhaswamy Temple",
        description:
          "Among India's most revered temples, the Padmanabhaswamy Temple is renowned for its magnificent Dravidian architecture, intricate carvings and immense historical significance. Dedicated to Lord Vishnu, the temple is an architectural masterpiece and an important symbol of Kerala's rich cultural heritage.",
      },
      {
        name: "Poovar Backwaters",
        description:
          "A short drive from Kovalam, the tranquil backwaters of Poovar offer scenic boat cruises through mangrove forests, coconut groves and peaceful waterways before meeting the Arabian Sea. The unique meeting point of river, lake and sea creates one of Kerala's most picturesque landscapes and is ideal for a leisurely excursion.",
      },
      {
        name: "Napier Museum",
        description:
          "Located in the heart of Thiruvananthapuram, the Napier Museum showcases an impressive collection of bronze sculptures, temple artefacts, traditional ornaments and historic paintings. Surrounded by beautifully landscaped gardens, it provides fascinating insight into Kerala's artistic and cultural legacy.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Trivandrum International Airport",
          code: "TRV",
          distance: "Nearest airport",
        },
      ],
    },

    idealFor: [
      "Couples",
      "Honeymooners",
      "Families",
      "Beach Holidays",
      "Wellness Travellers",
      "Luxury Retreats",
      "Nature Lovers",
      "Slow Travellers",
    ],

    website: "https://www.tajhotels.com/en-in/hotels/taj-green-cove",

    map: "https://www.google.com/maps/place/Taj+Green+Cove+Resort+%26+Spa,+Kovalam/@8.4037858,76.9715102,17z/data=!3m1!4b1!4m10!3m9!1s0x3b05a505c5c58815:0x119ba7d819229040!5m3!1s2026-07-13!4m1!1i2!8m2!3d8.4037805!4d76.9740851!16s%2Fg%2F1233dpft9?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Taj Hotels",
      "Charles Correa",
      "Kovalam",
      "Beach Resort",
      "Lagoon Resort",
      "Luxury Retreat",
      "Kerala Coast",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Beach & Coast",
  },
  //24
  {
    id: "windermere-estate-munnar",
    name: "Windermere Estate, Munnar",
    location: "Munnar, Kerala",
    category: "india",

    image: "/Assets/hotels/Windmere-Estate-Munnar.jpg",
    alt: "Windermere Estate, Munnar, Kerala",

    accentClass: "hi--india-hills",

    intro:
      "Hidden amidst rolling tea plantations and mist-covered hills, Windermere Estate offers one of Munnar's most intimate and charming boutique experiences. Set within a working cardamom and tea estate, the property invites guests to experience the quieter side of Kerala's hill country, where nature, heritage and warm hospitality come together effortlessly. Rather than presenting itself as a conventional luxury resort, Windermere Estate embraces simplicity, authenticity and a deep respect for its surroundings, creating a stay that feels both personal and memorable.\n\nThe estate's cottages and suites are thoughtfully designed to complement the landscape, featuring natural materials, elegant wooden interiors and large windows that frame breathtaking views of the surrounding mountains. Meandering pathways, flowering gardens and shaded forest trails encourage guests to slow down and immerse themselves in the peaceful rhythm of estate life. Mornings begin with birdsong and fresh mountain air, while evenings are best enjoyed beside a crackling fireplace or beneath a canopy of stars.\n\nIts location also makes it an ideal base for exploring Munnar's renowned tea gardens, scenic viewpoints and wildlife reserves. Whether discovering the history of tea cultivation, spotting endemic wildlife in the Western Ghats or simply enjoying the tranquillity of the hills, every day offers a new perspective on one of Kerala's most beautiful destinations.",

    why: "Windermere Estate captures the timeless charm of Munnar through its beautiful estate setting, personalised hospitality and peaceful atmosphere. Surrounded by tea gardens and native forests, it offers a stay that feels wonderfully intimate, allowing guests to experience the hills at a slower and more meaningful pace. It is a retreat where nature takes centre stage and every moment feels effortlessly relaxing.",

    highlights: [
      "Boutique estate nestled within a working tea and cardamom plantation",
      "Elegant cottages with panoramic views of Munnar's hills",
      "Peaceful forest trails, flowering gardens and estate walks",
      "Authentic hill-country experience with personalised hospitality",
      "Ideal base for exploring Munnar's tea gardens and wildlife",
      "Relaxed boutique retreat surrounded by the Western Ghats",
    ],

    exploreDestination: [
      {
        name: "Eravikulam National Park",
        description:
          "Home to the endangered Nilgiri Tahr, Eravikulam National Park is one of Kerala's most spectacular wildlife destinations. Rolling grasslands, shola forests and panoramic mountain views make it a paradise for nature lovers and photographers. Visitors can enjoy guided park shuttles while taking in breathtaking views of the Western Ghats.",
      },
      {
        name: "Tea Museum",
        description:
          "Operated by Tata Tea, the Tea Museum offers fascinating insight into Munnar's rich tea-growing heritage. Historic machinery, photographs and interactive exhibits explain the journey from leaf to cup, while visitors can sample freshly brewed teas and learn about the industry that shaped the region.",
      },
      {
        name: "Mattupetty Dam",
        description:
          "Surrounded by lush hills and tea estates, Mattupetty Dam is a favourite destination for boating and scenic photography. The calm waters beautifully reflect the surrounding landscape, creating one of Munnar's most picturesque settings. The nearby dairy farm and viewpoints add to the experience.",
      },
      {
        name: "Top Station",
        description:
          "One of the highest viewpoints in the Western Ghats, Top Station offers sweeping vistas across the valleys of Kerala and Tamil Nadu. On clear mornings, layers of mist-covered mountains stretch endlessly into the distance, making it one of Munnar's most rewarding excursions.",
      },
      {
        name: "Echo Point",
        description:
          "Nestled beside a tranquil lake, Echo Point is known for its natural echo phenomenon and stunning mountain scenery. Visitors can enjoy leisurely walks, boating and panoramic views while experiencing the cool climate that has made Munnar one of South India's most popular hill stations.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Cochin International Airport",
          code: "COK",
          distance: "110 km • Approximately 3 hours by road",
        },
      ],
    },

    idealFor: [
      "Couples",
      "Honeymooners",
      "Nature Lovers",
      "Families",
      "Photography Enthusiasts",
      "Luxury Boutique Holidays",
      "Slow Travellers",
      "Hill Station Escapes",
    ],

    website: "https://windermeremunnar.com/",

    map: "https://www.google.com/maps/place/Windermere+Estate/@10.054907,77.0651286,17z/data=!4m10!3m9!1s0x3b079979aaaaaa03:0xa5b1658eb2a8b9c2!5m3!1s2026-07-13!4m1!1i2!8m2!3d10.0549017!4d77.0677035!16s%2Fg%2F1xtd__nw?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Boutique Estate",
      "Tea Plantation",
      "Cardamom Estate",
      "Munnar",
      "Western Ghats",
      "Hill Retreat",
      "Nature Escape",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Hill Stations",
  },
  //Path to wellness
  //25
  // {
  //   id: "swaswara-gokarna",
  //   name: "SwaSwara, Gokarna",
  //   location: "Gokarna, Karnataka",
  //   category: "india",

  //   image: "/Assets/hotels/Swaswara--Gokarna.jpg",
  //   alt: "SwaSwara, Gokarna, Karnataka",

  //   accentClass: "hi--india-coast",

  //   intro:
  //     "Perched on a quiet hillside overlooking the pristine shores of Om Beach, SwaSwara by CGH Earth is a retreat where luxury is defined by peace, simplicity and a deep connection with nature. Designed around the philosophy of mindful living, the resort offers an experience that encourages guests to slow down, disconnect from everyday routines and embrace the restorative rhythm of coastal Karnataka.\n\nBuilt using natural materials and inspired by the region's traditional architecture, SwaSwara blends effortlessly into its surroundings. Spacious villas, winding stone pathways and lush tropical gardens create an atmosphere of understated elegance, while uninterrupted views of the Arabian Sea provide a constant reminder of the beauty that surrounds the property. Rather than focusing on opulence, the resort celebrates space, privacy and harmony with nature.\n\nWellness forms the heart of every stay. Yoga, meditation, Ayurveda and wholesome cuisine are thoughtfully integrated into the guest experience, allowing visitors to rejuvenate both body and mind at their own pace. Whether participating in a personalised wellness programme or simply relaxing by the sea, every moment is designed to inspire balance and wellbeing.\n\nComplementing the tranquillity of the resort is the timeless charm of Gokarna itself. Ancient temples, secluded beaches and dramatic coastal landscapes offer countless opportunities for exploration, while the peaceful atmosphere makes it easy to appreciate a slower way of life. SwaSwara is more than a destination for a holiday—it is a place to reconnect with nature, embrace mindful living and experience one of India's most serene coastal retreats.",

  //   why: "SwaSwara offers a refreshing interpretation of luxury, where wellness, nature and simplicity take centre stage. Its peaceful setting, personalised holistic experiences and relaxed atmosphere make it one of India's finest retreats for rest and renewal.",

  //   highlights: [
  //     "Luxury wellness retreat overlooking Om Beach",
  //     "Mindful living inspired by nature and holistic wellbeing",
  //     "Traditional architecture using natural materials",
  //     "Yoga, meditation, Ayurveda and personalised wellness programmes",
  //     "Panoramic views of the Arabian Sea",
  //     "Peaceful coastal sanctuary by CGH Earth",
  //   ],

  //   exploreDestination: [
  //     {
  //       name: "Om Beach",
  //       description:
  //         "Known for its distinctive shape resembling the sacred 'Om' symbol, this peaceful beach is perfect for sunrise walks, water activities and unforgettable sunsets.",
  //     },
  //     {
  //       name: "Shri Mahabaleshwara Temple",
  //       description:
  //         "One of Karnataka's most important Shiva temples, admired for its spiritual significance and traditional Dravidian architecture.",
  //     },
  //     {
  //       name: "Kudle Beach",
  //       description:
  //         "A quiet stretch of golden sand with a laid-back atmosphere, ideal for relaxing, yoga and enjoying coastal cafés.",
  //     },
  //     {
  //       name: "Paradise Beach",
  //       description:
  //         "Accessible by boat or a scenic trek, this secluded beach is loved for its clear waters, rocky coastline and untouched natural beauty.",
  //     },
  //     {
  //       name: "Mirjan Fort",
  //       description:
  //         "A historic laterite fort surrounded by greenery, offering fascinating architecture and a glimpse into the region's maritime past.",
  //     },
  //   ],

  //   howToReach: {
  //     airports: [
  //       {
  //         name: "Goa International Airport",
  //         location: "Dabolim, Goa",
  //         code: "GOI",
  //         distance: "140 km • Approximately 3 hours by road",
  //       },
  //       {
  //         name: "Manohar International Airport",
  //         location: "Mopa, North Goa",
  //         code: "GOX",
  //         distance: "179 km • Approximately 4 hours by road",
  //       },
  //       {
  //         name: "Hubballi Airport",
  //         location: "Karnataka",
  //         code: "HBX",
  //         distance: "159 km • Approximately 3.5 hours by road",
  //       },
  //     ],
  //   },

  //   idealFor: [
  //     "Wellness Travellers",
  //     "Couples",
  //     "Solo Travellers",
  //     "Nature Lovers",
  //     "Yoga & Ayurveda Retreats",
  //     "Slow Travellers",
  //   ],

  //   website: "https://www.cghearth.com/swaswara",

  //   map: "https://www.google.com/maps/place/CGH+Earth+-+SwaSwara/@14.5217271,74.3185177,17z/data=!4m9!3m8!1s0x3bbe82225c72c8cf:0xab3923d3b1448489!5m2!4m1!1i2!8m2!3d14.5217219!4d74.3210926!16s%2Fg%2F1td6wkq7?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

  //   tags: [
  //     "CGH Earth",
  //     "Wellness Retreat",
  //     "Yoga",
  //     "Ayurveda",
  //     "Om Beach",
  //     "Arabian Sea",
  //     "Gokarna",
  //   ],

  //   isFeatured: true,
  //   isRecommended: true,

  //   categoryTag: "Wellness",
  // },
  //26
  // {
  //   id: "taj-exotica-resort-spa-goa",
  //   name: "Taj Exotica Resort & Spa, Goa",
  //   location: "Benaulim, South Goa",
  //   category: "india",

  //   image: "/Assets/hotels/Taj-Exotice-Resort-Goa.jpg",
  //   alt: "Taj Exotica Resort & Spa, Goa",

  //   accentClass: "hi--india-coast",

  //   intro:
  //     "Along the quieter shores of South Goa, where long stretches of golden sand meet the gentle waters of the Arabian Sea, Taj Exotica Resort & Spa presents a side of Goa that is elegant, unhurried and deeply restorative. Set amidst beautifully landscaped gardens overlooking Benaulim Beach, the resort is designed for travellers who appreciate space, privacy and an effortless connection with nature.\n\nInspired by Mediterranean architecture, the resort unfolds through graceful colonnades, terracotta-tiled roofs, airy courtyards and manicured lawns that blend seamlessly with the surrounding coastal landscape. Rather than relying on extravagance, its charm lies in creating an atmosphere where guests naturally slow down and embrace the relaxed rhythm of South Goa. Expansive views, abundant natural light and thoughtful design encourage every moment to feel both comfortable and timeless.\n\nThe experience extends well beyond the accommodation. Mornings often begin with leisurely walks along the beach as fishing boats return with the day's catch and the coastline gradually comes alive. Throughout the day, guests can explore Goa's rich Portuguese heritage, visit centuries-old churches, discover colourful local markets or simply enjoy the tranquillity of the resort's gardens. As evening approaches, spectacular sunsets over the Arabian Sea provide a fitting conclusion to each day, accompanied by the gentle sound of waves that defines life along this stretch of coastline.\n\nDining reflects Goa's multicultural heritage, celebrating fresh seafood, regional flavours and international cuisine with equal finesse. Wellness experiences, outdoor recreation and attentive yet unobtrusive service further enhance the feeling of ease that characterises every stay.",

  //   why: "Taj Exotica captures the quieter soul of Goa with remarkable elegance. Its expansive beachfront setting, Mediterranean-inspired architecture and warm hospitality create an atmosphere where every day unfolds at an unhurried pace. It is a place that encourages guests to experience Goa beyond its lively reputation, revealing a destination defined by natural beauty, heritage and understated sophistication.",

  //   highlights: [
  //     "Luxury beachfront resort overlooking Benaulim Beach",
  //     "Mediterranean-inspired architecture with elegant courtyards and terracotta roofs",
  //     "Beautiful landscaped gardens along South Goa's coastline",
  //     "Signature Taj hospitality with exceptional dining and wellness experiences",
  //     "Ideal base for exploring Goa's beaches, heritage and Portuguese history",
  //     "Perfect blend of relaxation, privacy and coastal luxury",
  //   ],

  //   exploreDestination: [
  //     {
  //       name: "Benaulim Beach",
  //       description:
  //         "Located just steps from the resort, Benaulim Beach remains one of South Goa's most peaceful stretches of coastline. Wide expanses of soft golden sand, gently swaying palms and calm waters create an atmosphere that feels far removed from the busier beaches of North Goa. Early mornings bring local fishermen returning with their catch, while evenings are perfect for leisurely walks as the sun sets over the Arabian Sea. The beach retains an authentic charm, making it ideal for those seeking quiet moments by the sea rather than a bustling nightlife scene.",
  //     },
  //     {
  //       name: "Colva Beach",
  //       description:
  //         "A short drive from the resort, Colva Beach combines natural beauty with a lively local atmosphere. Its palm-lined shoreline stretches for kilometres, offering opportunities for water sports, beach cafés and relaxed seaside dining. While popular with visitors, Colva still preserves the easy-going character that has long made South Goa a favourite destination for families and couples. The vibrant mix of local culture and coastal scenery provides an enjoyable contrast to the tranquillity of Benaulim.",
  //     },
  //     {
  //       name: "Cabo de Rama Fort",
  //       description:
  //         "Perched dramatically on a cliff overlooking the Arabian Sea, Cabo de Rama Fort offers some of Goa's most spectacular coastal views. Believed to have ancient origins and later strengthened during Portuguese rule, the fort combines fascinating history with breathtaking scenery. Walking through its weathered stone walls reveals panoramic vistas of rugged cliffs, secluded beaches and the endless ocean beyond, making it a rewarding destination for history enthusiasts and photographers alike.",
  //     },
  //     {
  //       name: "Margao Municipal Market",
  //       description:
  //         "For a genuine taste of Goan life, Margao Municipal Market is an experience not to be missed. Colourful stalls display fragrant spices, locally grown produce, traditional sweets, handcrafted souvenirs and freshly caught seafood, creating an atmosphere that reflects the region's rich culinary traditions. Wandering through the market provides insight into everyday life while offering opportunities to sample authentic Goan flavours and interact with local vendors.",
  //     },
  //     {
  //       name: "Basilica of Bom Jesus & Old Goa",
  //       description:
  //         "A visit to Goa is incomplete without exploring Old Goa, once the capital of Portuguese India and now recognised as a UNESCO World Heritage Site. The Basilica of Bom Jesus, home to the mortal remains of St. Francis Xavier, stands as one of India's most significant religious monuments. Alongside neighbouring churches and convents, it tells the story of Goa's remarkable colonial past through magnificent Baroque architecture, intricate interiors and centuries of cultural exchange that continue to shape the region today.",
  //     },
  //   ],

  //   howToReach: {
  //     airports: [
  //       {
  //         name: "Goa International Airport",
  //         location: "Dabolim, Goa",
  //         code: "GOI",
  //         distance: "Nearest airport",
  //       },
  //       {
  //         name: "Manohar International Airport",
  //         location: "Mopa, North Goa",
  //         code: "GOX",
  //         distance: "Nearest airport",
  //       },
  //     ],
  //   },

  //   idealFor: [
  //     "Couples",
  //     "Honeymooners",
  //     "Families",
  //     "Beach Holidays",
  //     "Wellness Travellers",
  //     "Food Lovers",
  //     "Celebrations",
  //     "Slow Travellers",
  //   ],

  //   website: "https://www.tajhotels.com/en-in/hotels/taj-exotica-goa",

  //   map: "https://www.google.com/maps/place/Taj+Exotica+Resort+%26+Spa,+Goa/@15.2452419,73.9222384,17z/data=!4m10!3m9!1s0x3bbfb0ac6be75689:0x31a73ca5d4a80468!5m3!1s2026-07-08!4m1!1i2!8m2!3d15.2452367!4d73.9248133!16s%2Fm%2F06zn6tx?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

  //   tags: [
  //     "Taj Hotels",
  //     "Beach Resort",
  //     "South Goa",
  //     "Benaulim Beach",
  //     "Mediterranean Architecture",
  //     "Luxury Resort",
  //     "Arabian Sea",
  //   ],

  //   isFeatured: true,
  //   isRecommended: true,

  //   categoryTag: "Beach & Coast",
  // },
  //Rejuvenate & Restore
  //27
  //kumarakom-lake-resort
  //28
  {
    id: "prakriti-shakti-panchalimedu",
    name: "Prakriti Shakti – CGH Earth Nature Cure Centre, Panchalimedu",
    location: "Panchalimedu, Kerala",
    category: "india",

    image: "/Assets/hotels/Prakriti-Shakti-Panchalimedu.jpg",
    alt: "Prakriti Shakti – CGH Earth Nature Cure Centre, Panchalimedu, Kerala",

    accentClass: "hi--india-wellness",

    intro:
      "Set amidst the pristine hills of Panchalimedu in the Western Ghats, Prakriti Shakti – CGH Earth Nature Cure Centre is a one-of-a-kind wellness retreat dedicated to the principles of naturopathy and holistic healing. Surrounded by dense forests, spice plantations and fresh mountain air, the retreat provides a peaceful sanctuary where guests can step away from the demands of daily life and focus entirely on restoring their physical, mental and emotional wellbeing.\n\nBuilt with sustainability at its core, the property blends seamlessly into its natural surroundings through minimalist architecture, earthy materials and thoughtfully designed living spaces. Every aspect of the experience is centred on the healing power of nature. Personalised wellness programmes combine naturopathy, hydrotherapy, yoga, therapeutic nutrition and guided lifestyle practices, all supervised by experienced wellness professionals. Rather than offering temporary relaxation, the retreat encourages long-term lifestyle changes that promote overall health and vitality.\n\nBeyond the wellness programmes, the surrounding highlands offer breathtaking landscapes, scenic viewpoints and opportunities to experience Kerala's rich biodiversity. Whether enjoying peaceful nature walks, breathing in the crisp mountain air or simply embracing the tranquillity of the forest, guests discover a slower pace of life that allows true rejuvenation.",

    why: "Prakriti Shakti offers a refreshing approach to wellness by combining the healing traditions of naturopathy with the serenity of Kerala's Western Ghats. Its personalised therapies, peaceful surroundings and sustainable philosophy create an experience that restores both body and mind, making it one of India's finest holistic wellness retreats.",

    highlights: [
      "Dedicated naturopathy and holistic healing retreat",
      "Located amidst the pristine hills of Panchalimedu",
      "Personalised wellness programmes with expert guidance",
      "Hydrotherapy, yoga, therapeutic nutrition and lifestyle healing",
      "Sustainable architecture surrounded by forests and spice plantations",
      "Ideal destination for holistic wellness and digital detox",
    ],

    exploreDestination: [
      {
        name: "Panchalimedu",
        description:
          "Known for its rolling grasslands, mist-covered hills and panoramic viewpoints, Panchalimedu is one of Kerala's hidden gems. According to local legend, this scenic hilltop is associated with Draupadi from the Mahabharata. Visitors can enjoy peaceful walks, breathtaking sunrise views and the cool mountain climate that makes the region so distinctive.",
      },
      {
        name: "Parunthumpara",
        description:
          "A spectacular hill station surrounded by tea gardens and forests, Parunthumpara offers sweeping views of the Western Ghats. The dramatic rock formations and cool climate make it an excellent destination for photography, leisurely walks and simply enjoying Kerala's natural beauty away from the crowds.",
      },
      {
        name: "Marmala Waterfalls",
        description:
          "Hidden amidst lush forests, Marmala Waterfalls is one of Kerala's most picturesque cascades. The journey to the falls passes through rubber plantations and scenic countryside, while the cool waters and peaceful surroundings make it an ideal excursion for nature lovers.",
      },
      {
        name: "Spice Plantations",
        description:
          "The highlands surrounding Panchalimedu are renowned for producing cardamom, pepper, cloves and nutmeg. Guided plantation visits provide fascinating insight into traditional spice cultivation while allowing visitors to experience the fragrances that have made Kerala famous across the world.",
      },
      {
        name: "Periyar Tiger Reserve",
        description:
          "Located within comfortable driving distance, Periyar Tiger Reserve offers unforgettable wildlife experiences through boat safaris, guided forest walks and bamboo rafting. Home to elephants, gaurs, deer and hundreds of bird species, it is one of South India's premier nature destinations.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Cochin International Airport",
          code: "COK",
          distance: "147 km • Approximately 4 hours by road",
        },
      ],
    },

    idealFor: [
      "Wellness Travellers",
      "Naturopathy Retreats",
      "Couples",
      "Solo Travellers",
      "Nature Lovers",
      "Digital Detox Holidays",
      "Slow Travellers",
      "Holistic Healing Programmes",
    ],

    website: "https://www.prakritishakti.com/",

    map: "https://www.google.com/maps/place/Prakriti+Shakti+-+CGH+Earth+Nature+Cure+Centre,+Kerala/@9.5294223,76.9765561,17z/data=!3m1!4b1!4m10!3m9!1s0x3b064f175c4d0ed1:0x9d5b0254120f8370!5m3!1s2026-09-01!4m1!1i2!8m2!3d9.529417!4d76.979131!16s%2Fg%2F11gr461bls?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "CGH Earth",
      "Naturopathy",
      "Holistic Wellness",
      "Panchalimedu",
      "Western Ghats",
      "Nature Cure",
      "Digital Detox",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Wellness",
  },
  //29
  //Tajmalabar resort

  //30
  {
    id: "the-leela-kovalam-raviz-hotel",
    name: "The Leela Kovalam, A Raviz Hotel",
    location: "Kovalam, Kerala",
    category: "india",

    image: "/Assets/hotels/The Leela-Kovalam-Trivandrum.jpg",
    alt: "The Leela Kovalam, A Raviz Hotel, Kovalam, Kerala",

    accentClass: "hi--india-coast",

    intro:
      "Perched dramatically on a rocky cliff overlooking the Arabian Sea, The Leela Kovalam, A Raviz Hotel is one of Kerala's most iconic luxury resorts. Set amidst lush tropical gardens with uninterrupted views of the coastline, the property offers an exceptional blend of timeless elegance, contemporary comfort and the warm hospitality for which Kerala is renowned. Its spectacular location allows guests to enjoy panoramic ocean views while remaining just moments away from the golden sands of Kovalam.\n\nDesigned to complement the natural contours of the cliff, the resort features spacious rooms and suites that embrace the beauty of the sea through expansive balconies and large windows. Traditional Kerala-inspired architecture, graceful courtyards and beautifully landscaped pathways create an atmosphere that feels both luxurious and deeply connected to its surroundings. Whether relaxing beside the infinity pool, indulging in a rejuvenating spa treatment or enjoying fresh coastal cuisine overlooking the ocean, every experience is thoughtfully crafted to celebrate the destination.\n\nBeyond the resort, southern Kerala offers a fascinating blend of culture, history and natural beauty. Ancient temples, vibrant markets, picturesque backwaters and scenic beaches are all within easy reach, making The Leela an ideal base for exploring the region. Whether travelling for a romantic escape, a family holiday or a special celebration, the resort delivers an experience where world-class luxury and Kerala's coastal charm come together effortlessly.",

    why: "The Leela Kovalam combines one of India's most spectacular clifftop locations with exceptional hospitality and breathtaking ocean views. Its elegant design, serene atmosphere and seamless connection to the Arabian Sea create a stay that is both luxurious and unforgettable.",

    highlights: [
      "Iconic clifftop luxury resort overlooking the Arabian Sea",
      "Traditional Kerala-inspired architecture with panoramic ocean views",
      "Infinity pool, spa and world-class coastal dining",
      "Beautiful tropical gardens and landscaped pathways",
      "Easy access to Kovalam's beaches and southern Kerala attractions",
      "Luxury coastal escape blending elegance and nature",
    ],

    exploreDestination: [
      {
        name: "Kovalam Beach",
        description:
          "Just minutes from the resort, Kovalam Beach is famous for its crescent-shaped shoreline, golden sands and lively waterfront. Visitors can enjoy swimming, surfing, catamaran rides and seaside cafés while watching spectacular sunsets over the Arabian Sea.",
      },
      {
        name: "Vizhinjam Lighthouse",
        description:
          "Offering panoramic views of Kerala's southern coastline, the Vizhinjam Lighthouse is one of Kovalam's most recognisable landmarks. The climb to the top rewards visitors with breathtaking views of the sea, fishing villages and palm-fringed beaches.",
      },
      {
        name: "Padmanabhaswamy Temple",
        description:
          "One of India's most revered temples, Padmanabhaswamy Temple is admired for its magnificent Dravidian architecture, intricate stone carvings and rich royal history. It remains one of Kerala's most significant cultural and spiritual landmarks.",
      },
      {
        name: "Poovar Backwaters",
        description:
          "A peaceful network of backwaters lined with mangroves and coconut palms, Poovar offers relaxing boat cruises through one of Kerala's most picturesque landscapes. The unique meeting point of river, lake and sea makes it a memorable excursion.",
      },
      {
        name: "Napier Museum",
        description:
          "Set amidst beautiful gardens, the Napier Museum showcases an impressive collection of bronze sculptures, traditional ornaments, temple artefacts and historic paintings, providing valuable insight into Kerala's artistic and cultural heritage.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Trivandrum International Airport",
          code: "TRV",
          distance: "Nearest airport",
        },
      ],
    },

    idealFor: [
      "Couples",
      "Honeymooners",
      "Families",
      "Luxury Beach Holidays",
      "Wellness Travellers",
      "Celebrations",
      "Nature Lovers",
      "Coastal Getaways",
    ],

    website: "https://www.theleela.com/the-leela-kovalam-a-raviz-hotel",

    map: "https://www.google.com/maps/place/The+Leela+Kovalam,+a+Raviz+Hotel/@8.3934057,76.969372,17z/data=!4m10!3m9!1s0x3b05a5bb1100f2b7:0x943f1e47f7ff2ed5!5m3!1s2026-09-01!4m1!1i2!8m2!3d8.3934004!4d76.9719469!16s%2Fg%2F1tct74gf?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "The Leela",
      "Luxury Resort",
      "Kovalam",
      "Arabian Sea",
      "Clifftop Resort",
      "Kerala Coast",
      "Beach Holiday",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Beach & Coast",
  },
  //31
  {
    id: "brunton-boatyard-fort-kochi",
    name: "Brunton Boatyard, Fort Kochi",
    location: "Fort Kochi, Kerala",
    category: "india",

    image: "/Assets/hotels/Brunton -Boatyard-Cochin.jpg",
    alt: "Brunton Boatyard, Fort Kochi, Kerala",

    accentClass: "hi--india-heritage",

    intro:
      "Standing gracefully on the historic waterfront of Fort Kochi, Brunton Boatyard by CGH Earth is a boutique heritage hotel that beautifully reflects the city's fascinating maritime past. Built on the site of a former Victorian shipbuilding yard, the hotel pays homage to Kochi's centuries-old legacy as a thriving port where Arab, Chinese, Portuguese, Dutch and British traders once converged. Every corner of the property celebrates this rich history, creating an experience that is as much about the destination as it is about the stay.\n\nDesigned in a charming blend of colonial architecture and traditional Kerala influences, Brunton Boatyard exudes timeless elegance. Spacious rooms, antique-inspired furnishings, high wooden ceilings and wide verandas evoke the atmosphere of a bygone era, while modern comforts ensure a relaxed and luxurious stay. The views across Kochi Harbour, where fishing boats, ferries and merchant vessels continue to pass throughout the day, create an ever-changing backdrop that adds to the property's unique charm.\n\nIts location places guests at the heart of Fort Kochi, allowing them to explore centuries-old churches, heritage streets, art cafés, museums and vibrant spice markets, all within walking distance. Evenings are best spent watching the sunset over the harbour before returning to the peaceful comfort of the hotel, where warm hospitality and exceptional cuisine complete the experience.",

    why: "Brunton Boatyard effortlessly transports guests to Kochi's colonial past while offering all the comforts of contemporary luxury. Its waterfront location, beautifully restored heritage architecture and intimate atmosphere make it one of the most characterful stays in Kerala. For travellers who enjoy history, culture and personalised hospitality, it offers an experience that is both elegant and unforgettable.",

    highlights: [
      "Boutique heritage hotel on Fort Kochi's historic waterfront",
      "Built on the site of a former Victorian shipbuilding yard",
      "Colonial architecture blended with traditional Kerala design",
      "Panoramic views across Kochi Harbour",
      "Walking distance to Fort Kochi's heritage attractions",
      "Signature CGH Earth hospitality celebrating Kochi's maritime legacy",
    ],

    exploreDestination: [
      {
        name: "Fort Kochi",
        description:
          "The historic heart of Kochi is a delightful neighbourhood where colonial architecture, art galleries, boutique cafés and heritage homes line charming streets. Influenced by Portuguese, Dutch and British rule, Fort Kochi is best explored on foot, allowing visitors to discover hidden courtyards, colourful murals and beautifully preserved buildings that tell the story of the city's multicultural past.",
      },
      {
        name: "Chinese Fishing Nets",
        description:
          "Among Kochi's most iconic landmarks, the Chinese Fishing Nets have stood along the waterfront for centuries. Introduced by Chinese traders, these enormous cantilevered nets continue to be operated using traditional techniques. Watching local fishermen lower and raise the nets against the backdrop of the setting sun is one of Fort Kochi's most memorable experiences.",
      },
      {
        name: "Mattancherry Palace (Dutch Palace)",
        description:
          "Gifted by the Portuguese to the Raja of Kochi in the 16th century, Mattancherry Palace houses an exceptional collection of Kerala murals, royal portraits and historical artefacts. Its beautifully preserved interiors provide fascinating insight into the history of the Kochi royal family and the region's artistic heritage.",
      },
      {
        name: "Jew Town & Paradesi Synagogue",
        description:
          "Jew Town is one of Kochi's most atmospheric neighbourhoods, known for its antique shops, spice warehouses and charming colonial streets. At its heart stands the Paradesi Synagogue, built in 1568, featuring exquisite Belgian chandeliers, hand-painted Chinese tiles and centuries of Jewish heritage that continue to make it one of Kerala's most remarkable cultural landmarks.",
      },
      {
        name: "Marine Drive",
        description:
          "Located in Ernakulam, Marine Drive offers a scenic promenade overlooking Kochi's backwaters. Popular with both locals and visitors, it is the perfect place for an evening stroll, a sunset cruise or simply watching the bustling harbour come alive as boats glide across the water and city lights reflect on the backwaters.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Cochin International Airport",
          code: "COK",
          distance: "Nearest airport",
        },
      ],
    },

    idealFor: [
      "Heritage Travellers",
      "Couples",
      "Cultural Explorers",
      "Food Lovers",
      "Boutique Luxury Holidays",
      "Slow Travellers",
      "Photography Enthusiasts",
      "Kerala Heritage Tours",
    ],

    website: "https://www.cghearth.com/brunton-boatyard",

    map: "https://www.google.com/maps/place/Brunton+Boatyard+-+CGH+Earth/@9.9684961,76.2429938,17z/data=!4m10!3m9!1s0x3b086d3faaaaaaab:0xafa0312f10bfbe67!5m3!1s2026-07-13!4m1!1i2!8m2!3d9.9684908!4d76.2455687!16s%2Fg%2F11bz0mddy7?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "CGH Earth",
      "Heritage Hotel",
      "Fort Kochi",
      "Colonial Architecture",
      "Kochi Harbour",
      "Boutique Luxury",
      "Maritime Heritage",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Heritage",
  },
  //32
  {
    id: "taj-fishermans-cove-chennai",
    name: "Taj Fisherman's Cove Resort & Spa, Chennai",
    location: "Chennai, Tamil Nadu",
    category: "india",

    image: "/Assets/hotels/Taj-Fisherman_s-cove-Chennai.jpg",
    alt: "Taj Fisherman's Cove Resort & Spa, Chennai",

    accentClass: "hi--india-coast",

    intro:
      "Nestled along the scenic shores of the Bay of Bengal on the historic East Coast Road, Taj Fisherman's Cove Resort & Spa, Chennai is a serene beachfront retreat where coastal beauty, rich heritage and contemporary luxury come together effortlessly. Built on the site of an old Dutch fort, the resort preserves elements of its fascinating past while offering guests a relaxed and elegant seaside escape. Just a short drive from Chennai, it provides the perfect balance between city convenience and tranquil coastal living.\n\nSpread across beautifully landscaped tropical gardens, the resort features charming cottages and villas, many with private sit-outs or plunge pools overlooking the sea. Inspired by the region's fishing villages and coastal heritage, the architecture blends naturally with the surrounding landscape, creating an atmosphere that is both inviting and peaceful. Guests can unwind on the private beach, enjoy signature wellness therapies at the J Wellness Circle, savour freshly prepared seafood and regional delicacies, or simply relax to the soothing sound of the waves.\n\nIts location also makes the resort an excellent base for exploring the cultural treasures of Tamil Nadu's Coromandel Coast. From ancient UNESCO-listed monuments and historic temples to vibrant art centres and picturesque beaches, the region offers a wealth of experiences for every traveller. Whether planning a romantic getaway, a family holiday or a relaxing weekend by the sea, Taj Fisherman's Cove delivers an unforgettable coastal experience marked by impeccable Taj hospitality.",

    why: "Taj Fisherman's Cove beautifully combines a relaxed beachfront atmosphere with the warmth of Taj hospitality. Its private beach, heritage charm and close proximity to Mahabalipuram make it an ideal destination for travellers seeking both relaxation and cultural exploration on Tamil Nadu's scenic coastline.",

    highlights: [
      "Luxury beachfront resort on Chennai's East Coast Road",
      "Built on the site of a historic Dutch fort",
      "Private beach, cottages and villas with plunge pools",
      "J Wellness Circle spa and exceptional seafood dining",
      "Close to Mahabalipuram's UNESCO World Heritage monuments",
      "Perfect blend of coastal relaxation and cultural discovery",
    ],

    exploreDestination: [
      {
        name: "Group of Monuments at Mahabalipuram",
        description:
          "A UNESCO World Heritage Site located just minutes from the resort, Mahabalipuram is renowned for its remarkable rock-cut temples, intricately carved cave sanctuaries and magnificent stone sculptures dating back to the Pallava dynasty. Highlights include the Shore Temple, Arjuna's Penance and the Five Rathas, making it one of South India's most important heritage destinations.",
      },
      {
        name: "Shore Temple",
        description:
          "Overlooking the Bay of Bengal, the Shore Temple is one of India's oldest structural stone temples and an enduring symbol of Pallava architecture. Its dramatic seaside setting, especially during sunrise, makes it one of Tamil Nadu's most photographed landmarks.",
      },
      {
        name: "DakshinaChitra Museum",
        description:
          "A short drive from the resort, DakshinaChitra is a living heritage museum dedicated to the art, architecture and cultural traditions of South India. Visitors can explore traditional homes, watch artisan demonstrations and experience regional crafts, music and dance.",
      },
      {
        name: "Covelong Beach",
        description:
          "Known locally as Kovalam Beach, this picturesque coastal village is popular for surfing, sailing and beachside cafés. Its laid-back atmosphere and scenic shoreline make it a wonderful place to experience the relaxed charm of Tamil Nadu's east coast.",
      },
      {
        name: "Crocodile Bank",
        description:
          "Founded by renowned herpetologist Romulus Whitaker, the Madras Crocodile Bank is one of Asia's leading reptile conservation centres. Home to crocodiles, alligators, turtles and snakes from around the world, it offers an engaging and educational experience for visitors of all ages.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Chennai International Airport",
          code: "MAA",
          distance: "Nearest airport",
        },
      ],
    },

    idealFor: [
      "Couples",
      "Honeymooners",
      "Families",
      "Beach Holidays",
      "Luxury Retreats",
      "Heritage Explorers",
      "Weekend Getaways",
      "Coastal Escapes",
    ],

    website:
      "https://www.tajhotels.com/en-in/hotels/taj-fishermans-cove-chennai",

    map: "https://www.google.com/maps/place/Taj+Fisherman%E2%80%99s+Cove+Resort+%26+Spa,+Chennai/@12.7975621,80.2456288,17z/data=!4m10!3m9!1s0x3a5261d01abb7cdd:0xbdd0608a45598857!5m3!1s2026-09-01!4m1!1i2!8m2!3d12.7975569!4d80.2482037!16s%2Fm%2F05h49jr?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Taj Hotels",
      "Beach Resort",
      "East Coast Road",
      "Mahabalipuram",
      "Dutch Fort",
      "J Wellness Circle",
      "Bay of Bengal",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Beach & Coast",
  },
  //33
  {
    id: "the-oberoi-mumbai",
    name: "The Oberoi, Mumbai",
    location: "Mumbai, Maharashtra",
    category: "india",

    image: "/Assets/hotels/The-Oberoi-Mumbai.jpg",
    alt: "The Oberoi, Mumbai, Maharashtra",

    accentClass: "hi--india-city",

    intro:
      "Overlooking the sparkling waters of Marine Drive and the Arabian Sea, The Oberoi, Mumbai is one of the city's most prestigious luxury hotels, renowned for its contemporary elegance, exceptional hospitality and unrivalled location in the heart of South Mumbai. Situated in the vibrant business and cultural district of Nariman Point, the hotel offers a sophisticated urban retreat where panoramic sea views, world-class dining and impeccable service come together to create an unforgettable stay.\n\nDesigned with understated luxury in mind, the hotel's spacious rooms and suites feature floor-to-ceiling windows that showcase breathtaking views of the Arabian Sea or Mumbai's glittering skyline. Elegant interiors, modern amenities and personalised Oberoi hospitality ensure every guest enjoys the highest levels of comfort, whether visiting for business or leisure. From award-winning restaurants and a luxurious spa to the outdoor heated pool overlooking the ocean, every experience reflects the refinement and attention to detail for which Oberoi Hotels are celebrated.\n\nIts central location makes The Oberoi an ideal base for exploring Mumbai's rich blend of history, art, shopping and entertainment. Iconic landmarks, heritage buildings, museums and vibrant neighbourhoods are all within easy reach, while the famous Marine Drive promenade offers spectacular sunset views just steps from the hotel. Whether discovering India's financial capital or enjoying a luxurious city escape, The Oberoi, Mumbai delivers an experience defined by elegance, sophistication and timeless hospitality.",

    why: "The Oberoi, Mumbai combines breathtaking views of the Arabian Sea with contemporary luxury and world-renowned Oberoi service. Its prime location on Marine Drive, exceptional dining experiences and elegant accommodations make it one of Mumbai's finest addresses for both leisure and business travellers.",

    highlights: [
      "Luxury hotel overlooking Marine Drive and the Arabian Sea",
      "Prime location in Nariman Point, South Mumbai",
      "Contemporary rooms with panoramic sea and skyline views",
      "Award-winning restaurants, luxury spa and heated outdoor pool",
      "Exceptional Oberoi hospitality and personalised service",
      "Ideal base for exploring Mumbai's cultural and business districts",
    ],

    exploreDestination: [
      {
        name: "Marine Drive",
        description:
          "Known as the 'Queen's Necklace,' Marine Drive is Mumbai's iconic waterfront boulevard stretching along the Arabian Sea. A leisurely walk here, especially at sunset, offers spectacular ocean views, refreshing sea breezes and the chance to experience the city's vibrant energy as the skyline lights up after dark.",
      },
      {
        name: "Gateway of India",
        description:
          "One of Mumbai's most recognisable landmarks, the Gateway of India stands proudly overlooking the harbour. Built in 1924, this historic monument is a symbol of the city's colonial heritage and serves as the departure point for scenic harbour cruises and ferries to nearby attractions.",
      },
      {
        name: "Elephanta Caves",
        description:
          "A UNESCO World Heritage Site, the Elephanta Caves are reached by a picturesque ferry ride across Mumbai Harbour. These ancient rock-cut cave temples are renowned for their impressive sculptures dedicated to Lord Shiva and represent some of India's finest examples of early medieval art.",
      },
      {
        name: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya",
        description:
          "One of India's premier museums, this architectural landmark houses an exceptional collection of sculptures, miniature paintings, decorative arts and archaeological treasures. Its Indo-Saracenic design and beautifully curated galleries make it an essential stop for history and art enthusiasts.",
      },
      {
        name: "Colaba Causeway",
        description:
          "A bustling shopping and dining destination, Colaba Causeway is famous for its lively street markets, designer boutiques, cafés and local restaurants. Visitors can browse handcrafted jewellery, fashion, antiques and souvenirs while soaking up the vibrant atmosphere of South Mumbai.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Chhatrapati Shivaji Maharaj International Airport",
          location: "Mumbai",
          code: "BOM",
          distance: "Nearest airport",
        },
      ],
    },

    idealFor: [
      "Luxury Travellers",
      "Business Travellers",
      "Couples",
      "Families",
      "Food Lovers",
      "City Breaks",
      "Cultural Explorers",
      "Weekend Getaways",
    ],

    website: "https://www.oberoihotels.com/hotels-in-mumbai/",

    map: "https://www.google.com/maps/place/The+Oberoi,+Mumbai/@18.9268177,72.8175548,17z/data=!3m1!4b1!4m10!3m9!1s0x3be7d1e96fffffff:0x385eaa65d82abec1!5m3!1s2026-09-01!4m1!1i2!8m2!3d18.9268126!4d72.8201297!16s%2Fg%2F1tg2j445?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Oberoi Hotels",
      "Marine Drive",
      "Nariman Point",
      "Luxury Hotel",
      "Arabian Sea",
      "Mumbai",
      "City Escape",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "City Luxury",
  },
  //34
  {
    id: "trident-bhubaneswar",
    name: "Trident Bhubaneswar",
    location: "Bhubaneswar, Odisha",
    category: "india",

    image: "/Assets/hotels/Trident-Bhubaneswar.jpg",
    alt: "Trident Bhubaneswar, Odisha",

    accentClass: "hi--india-heritage",

    intro:
      "Set amidst beautifully landscaped gardens in the heart of Odisha's capital, Trident Bhubaneswar offers a peaceful urban retreat that reflects the city's rich cultural heritage and contemporary charm. Known as the 'Temple City of India,' Bhubaneswar is home to centuries-old monuments, vibrant traditions and thriving modern institutions, and the hotel provides an ideal base from which to explore them all. Blending elegant architecture with warm hospitality, Trident creates an atmosphere where business and leisure travellers alike can relax in comfort.\n\nSurrounded by lush greenery, the hotel's spacious rooms and suites overlook tranquil gardens and open courtyards, creating a refreshing escape from the city's bustle. Contemporary interiors, thoughtful amenities and personalised service ensure a relaxing stay, while award-winning dining showcases both authentic Odia flavours and international cuisine. Guests can unwind beside the outdoor pool, enjoy wellness facilities or simply experience the calm surroundings that distinguish the property.\n\nIts central location places many of Bhubaneswar's celebrated temples, museums and cultural landmarks within easy reach. Whether exploring the region's remarkable architectural heritage, visiting nearby wildlife sanctuaries or continuing onward to Puri and Konark, Trident Bhubaneswar provides a refined and welcoming gateway to eastern India.",

    why: "Trident Bhubaneswar combines serene landscaped surroundings with exceptional hospitality in the heart of Odisha's capital. Its peaceful ambience, central location and effortless access to the region's iconic temples and heritage sites make it one of the city's finest luxury stays.",

    highlights: [
      "Luxury hotel surrounded by lush landscaped gardens",
      "Peaceful retreat in the heart of Bhubaneswar",
      "Excellent base for exploring Odisha's temple heritage",
      "Outdoor swimming pool, wellness facilities and fine dining",
      "Elegant contemporary rooms overlooking gardens",
      "Signature Trident hospitality with easy access to major attractions",
    ],

    exploreDestination: [
      {
        name: "Lingaraj Temple",
        description:
          "One of Odisha's most magnificent temples, Lingaraj Temple represents the pinnacle of Kalinga architecture. Dedicated to Lord Shiva, the eleventh-century monument is admired for its soaring spire, intricate carvings and immense religious significance.",
      },
      {
        name: "Mukteswara Temple",
        description:
          "Often referred to as the 'Gem of Odisha Architecture,' Mukteswara Temple is celebrated for its beautifully carved stone archways, elegant sculptures and refined craftsmanship. It is regarded as one of Bhubaneswar's finest architectural treasures.",
      },
      {
        name: "Udayagiri & Khandagiri Caves",
        description:
          "Dating back over two thousand years, these ancient rock-cut caves were once home to Jain monks. Intricate carvings, inscriptions and panoramic views from the hilltops provide fascinating insight into Odisha's early history and spiritual traditions.",
      },
      {
        name: "Nandankanan Zoological Park",
        description:
          "Famous for its white tigers and rich biodiversity, Nandankanan combines a zoological park, botanical gardens and safari experiences. It is one of India's most respected wildlife conservation centres and an enjoyable destination for families and nature enthusiasts.",
      },
      {
        name: "Dhauli Shanti Stupa",
        description:
          "Built on the site where Emperor Ashoka is believed to have witnessed the devastating Kalinga War, Dhauli Shanti Stupa stands as a symbol of peace and non-violence. The hilltop monument offers sweeping views of the surrounding countryside and holds immense historical significance.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Biju Patnaik International Airport",
          code: "BBI",
          distance: "Nearest airport",
        },
      ],
    },

    idealFor: [
      "Business Travellers",
      "Cultural Explorers",
      "Heritage Enthusiasts",
      "Couples",
      "Families",
      "Luxury City Breaks",
      "Temple Tours",
      "Weekend Getaways",
    ],

    website: "https://www.tridenthotels.com/hotels-in-bhubaneswar",

    map: "https://www.google.com/maps/place/Trident+Bhubaneswar/",

    tags: [
      "Trident Hotels",
      "Bhubaneswar",
      "Temple City",
      "Odisha",
      "Luxury Hotel",
      "Cultural Heritage",
      "City Escape",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Heritage",
  },
  //35
  //Temple trail
  {
    id: "heritage-madurai",
    name: "Heritage Madurai",
    location: "Madurai, Tamil Nadu",
    category: "india",

    image: "/Assets/hotels/Heritage-Madurai.jpg",
    alt: "Heritage Madurai, Tamil Nadu",

    accentClass: "hi--india-heritage",

    intro:
      "Nestled within nearly 17 acres of lush tropical gardens, Heritage Madurai is a distinctive luxury retreat that beautifully captures the spirit of one of South India's oldest and most culturally significant cities. Designed by the internationally acclaimed architect Geoffrey Bawa, the hotel seamlessly blends contemporary elegance with the timeless architectural traditions of Tamil Nadu. Spacious open courtyards, tranquil water features and beautifully landscaped grounds create a peaceful sanctuary just minutes away from the vibrant heart of Madurai.\n\nThe hotel's luxurious villas and rooms are thoughtfully designed to maximise space, natural light and privacy, reflecting Bawa's signature philosophy of harmonising architecture with nature. Traditional design elements, handcrafted furnishings and modern comforts come together effortlessly, creating an atmosphere that is both sophisticated and welcoming. Guests can unwind beside one of the region's largest swimming pools, indulge in authentic South Indian cuisine and international favourites, or simply relax amidst the serene surroundings after a day of exploring Madurai's historic treasures.\n\nIdeally located close to the city's iconic temples, bustling markets and cultural landmarks, Heritage Madurai offers the perfect base for discovering the rich heritage of Tamil Nadu. Whether visiting for a spiritual pilgrimage, a cultural holiday or a leisurely escape, guests are treated to warm hospitality, elegant surroundings and an authentic connection to the traditions that have shaped Madurai for over two thousand years.",

    why: "Heritage Madurai offers a unique blend of Geoffrey Bawa's timeless design philosophy and the rich cultural heritage of Madurai. Its peaceful garden setting, spacious villas and understated luxury create a refreshing retreat while remaining close to the city's most celebrated attractions.",

    highlights: [
      "Luxury retreat designed by renowned architect Geoffrey Bawa",
      "Set within nearly 17 acres of lush tropical gardens",
      "Elegant villas inspired by Tamil Nadu's architectural heritage",
      "One of the region's largest swimming pools",
      "Minutes from Madurai's iconic temples and cultural landmarks",
      "Perfect blend of heritage, architecture and contemporary luxury",
    ],

    exploreDestination: [
      {
        name: "Meenakshi Amman Temple",
        description:
          "The spiritual and cultural heart of Madurai, this magnificent temple is one of India's greatest examples of Dravidian architecture. Its towering, brightly coloured gopurams, intricately carved halls and vibrant religious ceremonies make it one of the country's most extraordinary temple complexes.",
      },
      {
        name: "Thirumalai Nayakkar Mahal",
        description:
          "Built in the 17th century, this magnificent palace showcases a striking blend of Dravidian and Indo-Islamic architecture. Its grand pillars, elegant courtyards and evening sound-and-light show offer fascinating insights into the reign of King Thirumalai Nayak.",
      },
      {
        name: "Gandhi Memorial Museum",
        description:
          "One of India's most important museums dedicated to Mahatma Gandhi, it chronicles the nation's struggle for independence through photographs, personal belongings and historical exhibits, including one of Gandhi's most treasured possessions.",
      },
      {
        name: "Alagar Kovil",
        description:
          "Situated amidst the scenic Alagar Hills, this ancient temple dedicated to Lord Vishnu is renowned for its beautiful stone carvings, peaceful surroundings and rich mythology. It is a popular excursion for both pilgrims and nature lovers.",
      },
      {
        name: "Tirupparankunram Murugan Temple",
        description:
          "One of the six sacred abodes of Lord Murugan, this rock-cut temple is revered for its spiritual significance and remarkable architecture. The temple's unique setting at the base of a hill makes it one of Madurai's most important pilgrimage destinations.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Madurai Airport",
          code: "IXM",
          distance: "Nearest airport",
        },
      ],
    },

    idealFor: [
      "Couples",
      "Families",
      "Heritage Travellers",
      "Cultural Explorers",
      "Luxury Travellers",
      "Spiritual Journeys",
      "Architecture Enthusiasts",
      "South India Holidays",
    ],

    website: "https://heritagemadurai.com/",

    map: "https://www.google.com/maps/place/Heritage+Madurai/@9.9351861,78.0840666,17z/data=!4m10!3m9!1s0x3b00cf3f9614d91b:0x783a43e7763b997e!5m3!1s2026-09-01!4m1!1i2!8m2!3d9.9351808!4d78.0866415!16s%2Fg%2F11b8_n66cp?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Geoffrey Bawa",
      "Luxury Retreat",
      "Madurai",
      "Tamil Nadu",
      "Heritage Hotel",
      "Architecture",
      "Cultural Escape",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Heritage",
  },
  //36
  {
    id: "mantra-koodam-kumbakonam",
    name: "Mantra Koodam, Kumbakonam",
    location: "Kumbakonam, Tamil Nadu",
    category: "india",

    image: "/Assets/hotels/Mantra-Koodam-Kumbakonam.jpg",
    alt: "Mantra Koodam, Kumbakonam, Tamil Nadu",

    accentClass: "hi--india-heritage",

    intro:
      "Nestled amidst the serene villages and lush paddy fields of Tamil Nadu's Cauvery Delta, Mantra Koodam by CGH Earth offers an authentic journey into the region's rich cultural and spiritual heritage. Inspired by the traditional agraharam settlements that once flourished around South Indian temples, the resort recreates the charm of a heritage village while providing modern comforts in a tranquil rural setting. Here, life unfolds at a gentle pace, allowing guests to experience the timeless traditions, architecture and hospitality that define the heart of Tamil Nadu.\n\nThe beautifully restored heritage-style homes feature tiled roofs, spacious courtyards, antique furnishings and handcrafted details that celebrate local craftsmanship. Every room reflects the simplicity and elegance of traditional Tamil architecture, while thoughtfully integrated contemporary amenities ensure a comfortable stay. Guests can savour authentic regional cuisine prepared using locally sourced ingredients, enjoy peaceful walks through the landscaped grounds or simply unwind amidst the quiet surroundings where birdsong and temple bells replace the sounds of city life.\n\nLocated close to the temple town of Kumbakonam, Mantra Koodam serves as an ideal base for exploring one of India's most culturally significant regions. Ancient Chola temples, vibrant village traditions and centuries-old rituals continue to shape everyday life here, offering visitors an immersive experience unlike any other. Whether seeking cultural discovery, spiritual reflection or a peaceful countryside escape, Mantra Koodam provides a unique blend of heritage, sustainability and heartfelt hospitality.",

    why: "Mantra Koodam beautifully preserves the essence of a traditional Tamil village while offering the comfort and thoughtful hospitality for which CGH Earth is renowned. Its peaceful rural setting, heritage-inspired architecture and close proximity to some of South India's greatest temples make it a truly enriching getaway.",

    highlights: [
      "Authentic heritage village experience inspired by traditional agraharams",
      "Beautiful heritage-style homes with courtyards and tiled roofs",
      "Located in the heart of Tamil Nadu's Cauvery Delta",
      "Authentic regional cuisine prepared with locally sourced ingredients",
      "Close to UNESCO-listed Chola temples and Kumbakonam's temple trail",
      "Signature CGH Earth hospitality in a tranquil rural setting",
    ],

    exploreDestination: [
      {
        name: "Airavatesvara Temple",
        description:
          "A UNESCO World Heritage Site, the Airavatesvara Temple is one of the finest examples of Chola architecture. Built in the 12th century, it is admired for its intricately carved stone sculptures, elegant mandapas and remarkable architectural precision.",
      },
      {
        name: "Adi Kumbeswarar Temple",
        description:
          "Dedicated to Lord Shiva, this magnificent temple is one of Kumbakonam's most important pilgrimage sites. Its towering gopurams, sacred tanks and vibrant festivals attract devotees and visitors throughout the year, especially during the famous Mahamaham festival.",
      },
      {
        name: "Sarangapani Temple",
        description:
          "One of the 108 Divya Desams dedicated to Lord Vishnu, Sarangapani Temple is celebrated for its impressive Dravidian architecture, beautifully sculpted pillars and richly decorated sanctum. It remains one of Tamil Nadu's most revered Vaishnavite temples.",
      },
      {
        name: "Swamimalai Murugan Temple",
        description:
          "Perched atop a small hill, Swamimalai is one of the six sacred abodes of Lord Murugan. Visitors climb a series of steps to reach the temple, where panoramic views and centuries of religious tradition create a memorable spiritual experience.",
      },
      {
        name: "Gangaikonda Cholapuram",
        description:
          "Another UNESCO World Heritage Site, Gangaikonda Cholapuram was established by the great Chola emperor Rajendra I. Its majestic temple, magnificent sculptures and historical significance make it one of Tamil Nadu's most important archaeological treasures.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Tiruchirappalli International Airport",
          code: "TRZ",
          distance: "100 km • Approximately 2 hours by road",
        },
      ],
    },

    idealFor: [
      "Heritage Travellers",
      "Cultural Explorers",
      "Spiritual Journeys",
      "Couples",
      "Families",
      "Slow Travellers",
      "Temple Trail Holidays",
      "Rural Retreats",
    ],

    website: "https://www.cghearth.com/mantra-koodam",

    map: "https://www.google.com/maps/place/Mantra+Koodam+-+CGH+Earth/@11.0018593,79.4343621,17z/data=!4m10!3m9!1s0x3a552dbd24d161bb:0x196b83b0ff145de!5m3!1s2026-09-01!4m1!1i2!8m2!3d11.001854!4d79.436937!16s%2Fg%2F1tj9rs7z?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "CGH Earth",
      "Heritage Village",
      "Kumbakonam",
      "Tamil Nadu",
      "Chola Temples",
      "Temple Trail",
      "Rural Retreat",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Heritage",
  },
  //37
  {
    id: "marari-beach-resort-mararikulam",
    name: "Marari Beach Resort, Mararikulam",
    location: "Mararikulam, Kerala",
    category: "india",

    image: "/Assets/hotels/Marari-Beach-Resort-Alleppey.jpg",
    alt: "Marari Beach Resort, Mararikulam, Kerala",

    accentClass: "hi--india-coast",

    intro:
      "Nestled along the unspoilt shores of the Arabian Sea in the peaceful fishing village of Mararikulam near Alappuzha, Marari Beach Resort by CGH Earth is a tranquil coastal retreat inspired by the charm and simplicity of a traditional Kerala village. Spread across lush coconut groves and beautifully landscaped gardens, the resort offers a refreshing escape where nature, sustainability and authentic local culture come together to create an unforgettable holiday experience.\n\nDesigned in harmony with its surroundings, the resort features charming thatched villas built using traditional Kerala architectural styles while incorporating every modern comfort. Meandering pathways lined with tropical plants, butterfly gardens and organic farms create a peaceful environment where guests can reconnect with nature. The expansive beach, often uncrowded and pristine, provides the perfect setting for leisurely walks, spectacular sunsets and moments of quiet reflection. Staying true to the CGH Earth philosophy, the resort places a strong emphasis on sustainability, community engagement and locally inspired experiences, ensuring every stay is both meaningful and environmentally conscious.\n\nIts location also makes Marari Beach Resort an excellent base for discovering Kerala's famous backwaters, vibrant villages and rich cultural traditions. Guests can enjoy houseboat cruises, visit historic churches and temples, explore local fishing communities or simply embrace the slow rhythm of coastal life. Whether seeking a romantic getaway, a wellness retreat or a relaxed family holiday, Marari Beach Resort offers an authentic Kerala experience where luxury is defined by nature, simplicity and genuine hospitality.",

    why: "Marari Beach Resort offers a rare opportunity to experience Kerala's coastline in its most natural and peaceful form. Its eco-conscious philosophy, charming village-inspired design and warm hospitality create an atmosphere where guests can truly relax while connecting with the local culture and environment.",

    highlights: [
      "Eco-luxury beach resort inspired by a traditional Kerala village",
      "Located on the pristine shores of Marari Beach",
      "Thatched villas surrounded by coconut groves and tropical gardens",
      "Organic farms, butterfly gardens and sustainable experiences",
      "Easy access to Kerala's famous backwaters and fishing villages",
      "Authentic CGH Earth hospitality with a strong focus on sustainability",
    ],

    exploreDestination: [
      {
        name: "Marari Beach",
        description:
          "One of Kerala's most beautiful and least commercialised beaches, Marari Beach is renowned for its golden sands, swaying coconut palms and tranquil atmosphere. Ideal for long walks, relaxing by the sea and watching spectacular sunsets, it offers a peaceful alternative to busier coastal destinations.",
      },
      {
        name: "Alappuzha Backwaters",
        description:
          "A visit to Kerala is incomplete without exploring the famous backwaters. Cruise through serene canals, picturesque villages and emerald paddy fields aboard a traditional houseboat or country boat while experiencing the unique lifestyle of Kerala's waterways.",
      },
      {
        name: "St. Andrew's Basilica Arthunkal",
        description:
          "One of Kerala's oldest and most significant Christian pilgrimage sites, this historic basilica dates back to the 16th century. Its striking architecture and rich heritage attract visitors from across the country throughout the year.",
      },
      {
        name: "Alleppey Lighthouse",
        description:
          "Built in the 19th century, the Alleppey Lighthouse offers panoramic views of the coastline and the surrounding town. Climbing to the top provides excellent opportunities for photography and a glimpse into Kerala's maritime history.",
      },
      {
        name: "Pathiramanal Island",
        description:
          "Located on Vembanad Lake, this small island is a haven for birdwatchers and nature lovers. Accessible by boat, it is home to numerous migratory and resident bird species amidst peaceful natural surroundings.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Cochin International Airport",
          code: "COK",
          distance: "Nearest airport",
        },
      ],
    },

    idealFor: [
      "Couples",
      "Honeymooners",
      "Families",
      "Beach Holidays",
      "Wellness Retreats",
      "Nature Lovers",
      "Eco-conscious Travellers",
      "Kerala Backwater & Coastal Holidays",
    ],

    website: "https://www.cghearth.com/marari-beach",

    map: "https://www.google.com/maps/place/Marari+Beach+a+CGH+Earth+Experience/@9.5963472,76.2999157,17z/data=!3m1!4b1!4m10!3m9!1s0x3b0887bbc88654e9:0xe936e918a2b3b26b!5m3!1s2026-09-01!4m1!1i2!8m2!3d9.5963419!4d76.3024906!16s%2Fg%2F1tfqzvts?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "CGH Earth",
      "Mararikulam",
      "Beach Resort",
      "Eco Resort",
      "Kerala Coast",
      "Sustainable Tourism",
      "Backwaters",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Beach & Coast",
  },
  //38
  {
    id: "palais-de-mahe-puducherry",
    name: "Palais de Mahe, Puducherry",
    location: "Puducherry",
    category: "india",

    image: "/Assets/hotels/Palais-De-Mahe-Pondicherry.jpg",
    alt: "Palais de Mahe, Puducherry",

    accentClass: "hi--india-heritage",

    intro:
      "Tucked away on a quiet street in the heart of the French Quarter, Palais de Mahe by CGH Earth captures the distinctive charm of Puducherry through its elegant Franco-Tamil architecture, intimate atmosphere and thoughtful hospitality. Inspired by the grand colonial mansions that once lined the streets of this former French settlement, the hotel reflects a graceful blend of European refinement and South Indian character. Behind its ochre-coloured façade lies a tranquil courtyard where the pace of life slows, inviting guests to experience Puducherry in a more relaxed and meaningful way.\n\nDesigned around a central courtyard with graceful colonnades, high ceilings and airy verandas, the hotel evokes the feeling of a private heritage residence rather than a conventional city hotel. Traditional craftsmanship, antique-inspired furnishings and soft pastel interiors create a warm and sophisticated ambience, while the rooftop terrace provides peaceful views over the surrounding heritage neighbourhood. True to the CGH Earth philosophy, the experience celebrates local culture, regional cuisine and genuine hospitality, allowing guests to connect with the destination beyond its well-known landmarks.\n\nStepping outside the hotel, visitors find themselves immersed in one of India's most distinctive towns. Tree-lined boulevards, colourful colonial villas, charming cafés, art galleries and seaside promenades are all within walking distance. Whether exploring the town's French heritage, relaxing by the Bay of Bengal or discovering its thriving artistic community, Palais de Mahe provides an elegant base for experiencing Puducherry's unique blend of history, culture and coastal charm.",

    why: "Palais de Mahe perfectly reflects the timeless elegance of Puducherry's French Quarter. Its heritage-inspired design, intimate atmosphere and exceptional location encourage guests to slow down and experience the town at a leisurely pace, just as it was meant to be explored.",

    highlights: [
      "Elegant boutique hotel in Puducherry's historic French Quarter",
      "Franco-Tamil architecture inspired by colonial mansions",
      "Beautiful central courtyard with graceful colonnades",
      "Rooftop terrace overlooking the heritage neighbourhood",
      "Walking distance to cafés, galleries and the seaside promenade",
      "Authentic CGH Earth hospitality celebrating local culture",
    ],

    exploreDestination: [
      {
        name: "Promenade Beach",
        description:
          "Stretching along the Bay of Bengal, the Promenade is the social heart of Puducherry. Early mornings and evenings are particularly enjoyable, with locals and visitors gathering for leisurely walks while admiring historic landmarks, sea views and the refreshing coastal breeze.",
      },
      {
        name: "Sri Aurobindo Ashram",
        description:
          "Founded by the philosopher Sri Aurobindo and Mirra Alfassa, known as The Mother, the Ashram remains one of India's most important centres for spiritual learning and meditation. Its peaceful courtyards provide a welcome contrast to the lively streets outside.",
      },
      {
        name: "French Quarter",
        description:
          "Characterised by mustard-yellow villas, elegant bougainvillea-covered walls and quiet tree-lined streets, the French Quarter is best explored on foot. Boutique stores, heritage buildings, cafés and art galleries make every walk a delightful experience.",
      },
      {
        name: "Auroville",
        description:
          "Located a short drive from the town, Auroville is an international community dedicated to sustainable living and human unity. Visitors can explore its peaceful gardens, artisan workshops and the striking Matrimandir, an architectural landmark set amidst tranquil surroundings.",
      },
      {
        name: "Bharathi Park",
        description:
          "Situated in the heart of the heritage district, Bharathi Park is a beautifully landscaped green space surrounded by historic colonial buildings. It provides a pleasant setting for a quiet stroll and offers insight into the city's French urban planning.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Puducherry Airport",
          code: "PNY",
          distance: "Nearest airport",
        },
        {
          name: "Chennai International Airport",
          code: "MAA",
          distance: "148 km • Approximately 3 hours by road",
        },
      ],
    },

    idealFor: [
      "Couples",
      "Heritage Travellers",
      "Cultural Explorers",
      "Food Lovers",
      "Slow Travellers",
      "Weekend Getaways",
      "Families",
      "Art & Architecture Enthusiasts",
    ],

    website: "https://www.cghearth.com/palais-de-mahe",

    map: "https://www.google.com/maps/place/Palais+de+Mahe+-+CGH+Earth/@11.928383,79.8314085,17z/data=!3m1!5s0x3a53622bc000dc37:0xc50278c292aaed73!4m10!3m9!1s0x3a53622bc0f7f09f:0x7ea7cff60c67bc03!5m3!1s2026-09-01!4m1!1i2!8m2!3d11.9283778!4d79.8339834!16s%2Fg%2F1q6jhvcms?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "CGH Earth",
      "French Quarter",
      "Puducherry",
      "Boutique Hotel",
      "Heritage Stay",
      "Franco-Tamil Architecture",
      "Colonial Charm",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Heritage",
  },
  //39
  //Tete a tele with gods
  //4items repeating
  ///44
  {
    id: "roseate-house-new-delhi",
    name: "Roseate House, New Delhi",
    location: "New Delhi",
    category: "india",

    image: "/Assets/hotels/Roseate-Delhi.jpg",
    alt: "Roseate House, New Delhi",

    accentClass: "hi--india-city",

    intro:
      "Located in the vibrant hospitality district of Aerocity, just minutes from Indira Gandhi International Airport, Roseate House New Delhi presents a fresh and contemporary interpretation of luxury hospitality. Designed for the modern traveller, the hotel combines sophisticated architecture, thoughtfully curated interiors and personalised service with the convenience of one of the capital's most well-connected locations. While its proximity to the airport makes it exceptionally convenient, the experience is far removed from that of a conventional transit hotel, offering a stylish urban retreat equally suited to business and leisure travellers.\n\nContemporary art, elegant design and open, light-filled spaces define the character of the property. The interiors are modern yet warm, with carefully selected artworks and refined detailing creating an atmosphere that feels relaxed rather than formal. Spacious accommodation, distinctive dining venues and inviting social spaces make the hotel an appealing choice for guests who appreciate understated sophistication and contemporary comfort. Whether enjoying a leisurely breakfast before setting out to explore Delhi or unwinding after a day of meetings or sightseeing, every aspect of the experience is designed with comfort and ease in mind.\n\nIts location also provides excellent access to New Delhi's business districts, shopping destinations and historic landmarks. From the broad avenues of Lutyens' Delhi to centuries-old monuments and bustling markets, the city's many layers are within easy reach. Roseate House serves as an ideal base for travellers seeking a contemporary stay that balances convenience with style, making it equally suitable for short city breaks, business visits and the beginning or end of longer journeys across India.",

    why: "Roseate House brings a contemporary perspective to luxury hospitality without losing its sense of warmth. Its stylish design, excellent dining and convenient Aerocity location make it an ideal choice for travellers who value both comfort and connectivity.",

    highlights: [
      "Contemporary luxury hotel in Delhi Aerocity",
      "Minutes from Indira Gandhi International Airport",
      "Modern interiors with curated contemporary art",
      "Exceptional dining, spacious rooms and refined hospitality",
      "Excellent access to Delhi's business districts and attractions",
      "Ideal for business, leisure and premium transit stays",
    ],

    exploreDestination: [
      {
        name: "Qutub Minar",
        description:
          "A UNESCO World Heritage Site, Qutub Minar is the world's tallest brick minaret and one of Delhi's most celebrated historical landmarks. Surrounded by beautifully preserved monuments and intricate stone carvings, it offers a fascinating introduction to the city's medieval past.",
      },
      {
        name: "India Gate",
        description:
          "Standing proudly at the heart of Lutyens' Delhi, India Gate is one of the capital's most recognisable landmarks. Surrounded by expansive gardens and ceremonial boulevards, it is particularly enjoyable in the evening when the monument is beautifully illuminated.",
      },
      {
        name: "Humayun's Tomb",
        description:
          "Often regarded as the architectural inspiration for the Taj Mahal, this UNESCO World Heritage Site showcases the elegance of Mughal architecture within tranquil Persian-style gardens. It remains one of Delhi's most impressive historical attractions.",
      },
      {
        name: "Dilli Haat",
        description:
          "This open-air cultural marketplace brings together artisans and craftspeople from across India. Visitors can browse handcrafted textiles, jewellery, artwork and regional handicrafts while sampling authentic cuisine from different states.",
      },
      {
        name: "Lodhi Gardens",
        description:
          "A peaceful green oasis in the middle of the capital, Lodhi Gardens combines beautifully landscaped lawns with 15th-century tombs and heritage monuments. It is an ideal place for a leisurely walk and offers a quieter perspective on the city.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Indira Gandhi International Airport",
          location: "Delhi",
          code: "DEL",
          distance: "Nearest airport",
        },
      ],
    },

    idealFor: [
      "Business Travellers",
      "Couples",
      "Luxury City Breaks",
      "Transit Stays",
      "Families",
      "Food Lovers",
      "Weekend Getaways",
      "Corporate Travellers",
    ],

    website: "https://www.roseatehotels.com/newdelhi/roseatehouse/",

    map: "https://www.google.com/maps/place/Roseate+House/@28.5412869,77.1020804,15z/data=!4m17!1m5!2m4!1sroseate+delhi!5m2!5m1!1s2026-09-01!3m10!1s0x390d1c6be31e1a2b:0x3ff0df3b27803bda!5m3!1s2026-09-01!4m1!1i2!8m2!3d28.5509536!4d77.120589!15sCg1yb3NlYXRlIGRlbGhpIgOIAQFaDyINcm9zZWF0ZSBkZWxoaZIBBWhvdGVs4AEA!16s%2Fg%2F11b6g7nljb?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Roseate Hotels",
      "Aerocity",
      "New Delhi",
      "Luxury Hotel",
      "Business Travel",
      "Transit Stay",
      "Contemporary Luxury",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "City Luxury",
  },
  //45
  {
    id: "taj-nadesar-palace-varanasi",
    name: "Taj Nadesar Palace, Varanasi",
    location: "Varanasi, Uttar Pradesh",
    category: "india",

    image: "/Assets/hotels/Taj-Nadesary-Palace-Varanasi.jpg",
    alt: "Taj Nadesar Palace, Varanasi",

    accentClass: "hi--india-heritage",

    intro:
      "Hidden within acres of beautifully landscaped gardens in one of the world's oldest living cities, Taj Nadesar Palace, Varanasi is an elegant sanctuary that reflects the regal legacy of a bygone era. Built in the early nineteenth century as the residence of the Maharaja of Varanasi, the palace has welcomed royalty, distinguished guests and heads of state for generations. Today, under the stewardship of Taj Hotels, it preserves its aristocratic character while providing an intimate and refined retreat amidst the spiritual heart of India.\n\nThe palace is distinguished by its gracious colonial architecture, wide verandas, soaring ceilings and period interiors adorned with antique furnishings, historical photographs and carefully preserved artworks. Surrounded by mango orchards, flowering gardens and peaceful pathways, the atmosphere is one of quiet sophistication, offering a welcome contrast to the vibrant energy of Varanasi. Every stay is enriched by the personalised hospitality for which Taj is celebrated, allowing guests to experience the city's remarkable heritage at an unhurried pace.\n\nDespite its tranquil setting, Taj Nadesar Palace enjoys easy access to Varanasi's ancient ghats, sacred temples and bustling lanes, where centuries-old traditions continue to shape everyday life. Whether witnessing the mesmerising evening Ganga Aarti, exploring the city's renowned silk-weaving heritage or simply soaking in the timeless atmosphere along the river, guests return to a residence that feels both historic and deeply comforting. For travellers seeking culture, history and understated luxury, Taj Nadesar Palace provides one of the most memorable addresses in Varanasi.",

    why: "Taj Nadesar Palace captures the elegance of royal India while remaining deeply connected to the spiritual soul of Varanasi. Its historic setting, expansive gardens and gracious hospitality create a rare sense of calm in one of the world's most captivating cities.",

    highlights: [
      "Historic 19th-century royal palace turned luxury hotel",
      "Set within beautifully landscaped gardens and mango orchards",
      "Colonial architecture with period interiors and antique furnishings",
      "Exceptional Taj hospitality in an intimate heritage setting",
      "Easy access to Varanasi's sacred ghats and temples",
      "Perfect blend of royal heritage, spirituality and luxury",
    ],

    exploreDestination: [
      {
        name: "Dashashwamedh Ghat",
        description:
          "The spiritual heart of Varanasi, Dashashwamedh Ghat is best known for its spectacular evening Ganga Aarti. Priests perform elaborate rituals with lamps, incense and chanting, creating one of India's most moving cultural and spiritual experiences.",
      },
      {
        name: "Kashi Vishwanath Temple",
        description:
          "Dedicated to Lord Shiva, this sacred temple is among Hinduism's most revered pilgrimage sites. Its newly developed corridor provides improved access while preserving the profound spiritual significance that has drawn devotees for centuries.",
      },
      {
        name: "Sarnath",
        description:
          "A short drive from the palace, Sarnath is where Lord Buddha delivered his first sermon after attaining enlightenment. The archaeological park, ancient stupas, monasteries and museum make it one of Buddhism's most important pilgrimage destinations.",
      },
      {
        name: "Assi Ghat",
        description:
          "Located at the southern end of the city's riverfront, Assi Ghat offers a more relaxed atmosphere with morning yoga sessions, boat rides and beautiful sunrise views over the River Ganges. It provides an authentic glimpse into daily life along the sacred river.",
      },
      {
        name: "Varanasi Silk Weaving District",
        description:
          "Varanasi has been celebrated for its exquisite silk weaving for centuries. Visiting traditional workshops allows travellers to witness master artisans creating the city's world-famous Banarasi silk sarees using techniques that have been passed down through generations.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Lal Bahadur Shastri International Airport",
          location: "Varanasi",
          code: "VNS",
          distance: "Nearest airport",
        },
      ],
    },

    idealFor: [
      "Cultural Explorers",
      "Heritage Travellers",
      "Couples",
      "Luxury Travellers",
      "Spiritual Journeys",
      "Families",
      "History Enthusiasts",
      "Golden Triangle & Ganges Itineraries",
    ],

    website:
      "https://www.tajhotels.com/en-in/hotels/taj-nadesar-palace-varanasi",

    map: "https://www.google.com/maps/place/Taj+Nadesar+Palace,+Varanasi/@25.3361987,82.9854619,17z/data=!4m10!3m9!1s0x398e32675987939f:0x5376e2a58880e160!5m3!1s2026-09-01!4m1!1i2!8m2!3d25.3361939!4d82.9880368!16s%2Fg%2F1tfbg3zc?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Taj Hotels",
      "Royal Palace",
      "Varanasi",
      "Heritage Hotel",
      "Spiritual Journey",
      "Colonial Architecture",
      "Luxury Stay",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Heritage",
  },
  //46
  {
    id: "the-imperial-new-delhi",
    name: "The Imperial, New Delhi",
    location: "New Delhi",
    category: "india",

    image: "/Assets/hotels/The-Imperial-Delhi.jpg",
    alt: "The Imperial, New Delhi",

    accentClass: "hi--india-heritage",

    intro:
      "Set along the elegant boulevard of Janpath in the heart of New Delhi, The Imperial is one of India's most distinguished heritage hotels, where colonial grandeur, refined hospitality and a remarkable sense of history come together effortlessly. Opened in 1936, the hotel has long been associated with diplomats, royalty, celebrated artists and world leaders, while remaining deeply connected to the story of modern India. Its timeless architecture, inspired by the Lutyens era, reflects a graceful blend of Victorian, Art Deco and classical Indian influences, creating an atmosphere that feels both stately and welcoming.\n\nWalking through The Imperial is akin to stepping into a living museum. Its marble corridors, sweeping staircases and beautifully curated collection of artworks, lithographs and historical artefacts narrate India's journey from the colonial period to Independence. The lush landscaped gardens provide a welcome contrast to the energy of the capital, creating peaceful spaces where guests can pause between exploring the city's many landmarks. Elegant rooms and suites continue the hotel's heritage character with classic furnishings, understated luxury and thoughtful attention to detail, while the legendary service reflects a tradition of hospitality that has endured for generations.\n\nIts central location places guests within easy reach of New Delhi's iconic monuments, bustling markets and cultural institutions, making it an ideal base for discovering the capital's many layers. Whether visiting for history, business or a leisurely city escape, The Imperial offers an experience defined not by extravagance, but by authenticity, elegance and a genuine sense of place.",

    why: "Few hotels in India possess the character and historical depth of The Imperial. Its remarkable art collection, gracious colonial architecture and enduring sense of old-world elegance create an atmosphere that feels both timeless and unmistakably New Delhi.",

    highlights: [
      "Iconic heritage hotel opened in 1936",
      "Elegant Lutyens-era architecture with Victorian and Art Deco influences",
      "Museum-quality collection of artworks and historical artefacts",
      "Landscaped gardens in the heart of New Delhi",
      "Classic luxury with legendary Imperial hospitality",
      "Prime Janpath location close to Delhi's major landmarks",
    ],

    exploreDestination: [
      {
        name: "India Gate",
        description:
          "One of the capital's defining landmarks, India Gate stands at the centre of Lutyens' Delhi. Surrounded by expansive lawns and ceremonial avenues, it is particularly beautiful in the evening when the monument is illuminated and the city comes alive with local families and visitors.",
      },
      {
        name: "Rashtrapati Bhavan",
        description:
          "The official residence of the President of India is among the world's largest heads-of-state residences. Its magnificent architecture, ceremonial forecourts and the celebrated Mughal Gardens (open seasonally) offer a fascinating glimpse into the country's political and architectural heritage.",
      },
      {
        name: "Humayun's Tomb",
        description:
          "A UNESCO World Heritage Site, Humayun's Tomb is widely regarded as the architectural predecessor of the Taj Mahal. Set within beautifully landscaped Persian-style gardens, it remains one of the finest examples of Mughal architecture in India.",
      },
      {
        name: "Khan Market",
        description:
          "A favourite among locals and visitors alike, Khan Market combines designer boutiques, independent bookstores, cafés and acclaimed restaurants. It offers an excellent introduction to contemporary Delhi while retaining an intimate neighbourhood atmosphere.",
      },
      {
        name: "National Museum",
        description:
          "Home to one of India's most comprehensive collections of art and archaeological treasures, the National Museum showcases thousands of years of civilisation through sculptures, manuscripts, textiles, jewellery and artefacts spanning the Indus Valley to the modern era.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Indira Gandhi International Airport",
          location: "Delhi",
          code: "DEL",
          distance: "Nearest airport",
        },
      ],
    },

    idealFor: [
      "Heritage Travellers",
      "Couples",
      "Luxury Travellers",
      "Cultural Explorers",
      "History Enthusiasts",
      "Business Travellers",
      "Families",
      "Delhi City Breaks",
    ],

    website: "https://www.theimperialindia.com/",

    map: "https://www.google.com/maps/place/The+Imperial+New+Delhi/@28.625028,77.2156075,17z/data=!4m10!3m9!1s0x390cfd35eb02e477:0xce8f437dbb2d6ca9!5m3!1s2026-09-01!4m1!1i2!8m2!3d28.6250233!4d77.2181824!16s%2Fm%2F047qn12?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "The Imperial",
      "Heritage Hotel",
      "New Delhi",
      "Lutyens Delhi",
      "Colonial Architecture",
      "Luxury Hotel",
      "Historic Stay",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Heritage",
  },
  //47
  {
    id: "baghvan-taj-safari-pench-national-park",
    name: "Baghvan, A Taj Safari – Pench National Park",
    location: "Pench National Park, Madhya Pradesh",
    category: "india",

    image: "/Assets/hotels/Bandhavgarh.webp",
    alt: "Baghvan, A Taj Safari – Pench National Park",

    accentClass: "hi--india-wildlife",

    intro:
      "Nestled on the edge of Pench National Park, Baghvan, A Taj Safari is an intimate luxury jungle lodge that celebrates the untamed beauty of Central India's forests. The name Baghvan, meaning 'Tiger Forest,' perfectly reflects the lodge's setting amidst one of India's premier tiger reserves, where teak forests, open grasslands and seasonal streams provide a thriving habitat for an incredible diversity of wildlife. Designed to resemble a traditional Indian safari camp with the warmth and sophistication of Taj hospitality, Baghvan offers an unforgettable wilderness escape for nature lovers and adventure seekers alike.\n\nThe lodge features beautifully designed standalone bungalows with spacious bedrooms, elegant interiors and private rooftop machans (viewing decks) that invite guests to relax beneath the stars or quietly observe the surrounding wilderness. Natural materials, handcrafted furnishings and earthy tones blend seamlessly with the landscape, creating an atmosphere of understated luxury. Between exhilarating game drives led by experienced naturalists, guests can unwind beside the swimming pool, savour regional and international cuisine prepared with fresh local ingredients or gather around the evening campfire to share stories from the day's safari.\n\nPench National Park is widely associated with The Jungle Book, whose forests are believed to have inspired many of the stories of Mowgli and his jungle companions. Today, the park is celebrated for its healthy population of Bengal tigers, leopards, wild dogs, sloth bears and more than 300 species of birds. Whether embarking on an early morning safari or enjoying the peaceful rhythm of the forest, Baghvan offers an authentic luxury safari experience that combines adventure, conservation and exceptional hospitality.",

    why: "Baghvan combines thrilling wildlife encounters with the comfort and personalised service of a luxury safari lodge. Its charming village-inspired cottages, private rooftop machans and expert-guided safaris create an unforgettable experience in one of India's most beautiful tiger reserves.",

    highlights: [
      "Luxury safari lodge bordering Pench National Park",
      "Standalone bungalows with private rooftop machans",
      "Expert-guided jeep safaris and wildlife experiences",
      "Inspired by traditional Indian safari camps",
      "Associated with the forests of The Jungle Book",
      "Luxury wilderness retreat with signature Taj hospitality",
    ],

    exploreDestination: [
      {
        name: "Pench National Park",
        description:
          "One of India's premier tiger reserves, Pench National Park is renowned for its rich biodiversity and picturesque landscapes. Jeep safaris offer excellent opportunities to spot Bengal tigers, leopards, Indian wild dogs, sloth bears, gaur, deer and an impressive variety of birdlife.",
      },
      {
        name: "Pench Reservoir",
        description:
          "Formed by the Pench River, the reservoir creates a stunning landscape within the park and attracts numerous wildlife species throughout the year. It is particularly rewarding for birdwatchers, with resident and migratory birds frequently seen along its shores.",
      },
      {
        name: "Nature Walks & Birdwatching",
        description:
          "Accompanied by experienced naturalists, guided walks around the lodge introduce guests to the smaller wonders of the forest, including butterflies, native plants, reptiles and over 300 recorded bird species, making the experience equally rewarding beyond tiger sightings.",
      },
      {
        name: "Village Experiences",
        description:
          "Visitors can explore nearby rural communities to learn about the traditions, crafts and lifestyles of the indigenous people who have lived alongside these forests for generations. These cultural interactions provide valuable insight into the region's rich heritage and conservation efforts.",
      },
      {
        name: "Night Sky & Campfire Experiences",
        description:
          "Evenings at Baghvan are an experience in themselves. Gather around the campfire to exchange safari stories before retreating to your private rooftop machan, where the sounds of the forest and a spectacular canopy of stars create a truly memorable wilderness experience.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Dr. Babasaheb Ambedkar International Airport",
          location: "Nagpur",
          code: "NAG",
          distance: "100 km • Approximately 2.5 hours by road",
        },
      ],
    },

    idealFor: [
      "Wildlife Enthusiasts",
      "Safari Holidays",
      "Couples",
      "Families",
      "Nature Lovers",
      "Birdwatchers",
      "Photography Expeditions",
      "Luxury Adventure Travellers",
    ],

    website:
      "https://www.tajhotels.com/en-in/hotels/baghvan-pench-national-park",

    map: "https://www.google.com/maps/place/Baghvan+-+Pench+National+Park/@21.7344864,79.3418889,17z/data=!3m1!4b1!4m10!3m9!1s0x3bd532f1f26eba5b:0x28abfafbaeefb0c1!5m3!1s2026-07-01!4m1!1i2!8m2!3d21.7344814!4d79.3444638!16s%2Fg%2F11g8bwty13?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Taj Safaris",
      "Pench National Park",
      "Tiger Reserve",
      "Wildlife Safari",
      "Luxury Jungle Lodge",
      "The Jungle Book",
      "Nature Retreat",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Wildlife",
  },
  //48
  {
    id: "banjaar-tola-taj-safari-kanha-national-park",
    name: "Banjaar Tola, A Taj Safari – Kanha National Park",
    location: "Kanha National Park, Madhya Pradesh",
    category: "india",

    image: "/Assets/hotels/Banjaar-Thola-Kanha.jpg",
    alt: "Banjaar Tola, A Taj Safari – Kanha National Park",

    accentClass: "hi--india-wildlife",

    intro:
      "Nestled along the tranquil banks of the Banjaar River at the edge of Kanha National Park, Banjaar Tola, A Taj Safari is an intimate luxury wilderness lodge that offers an unforgettable immersion into one of India's most celebrated tiger reserves. Inspired by the surrounding forests and tribal villages, the lodge has been thoughtfully designed to blend seamlessly with its natural environment, allowing guests to experience the magic of the wild while enjoying the comfort and hospitality synonymous with the Taj brand.\n\nThe lodge features beautifully appointed tented suites set on raised wooden platforms, each offering spacious interiors, elegant furnishings and private decks overlooking the river or surrounding forest. Combining canvas, bamboo and locally inspired décor, the accommodation creates a sophisticated safari ambience without disturbing the pristine landscape. Between thrilling game drives led by experienced naturalists, guests can relax beside the riverside lounge, savour locally inspired cuisine prepared with fresh ingredients, or simply watch birds and wildlife from the comfort of the lodge. Every experience is designed to foster a deeper appreciation for the region's remarkable biodiversity and conservation efforts.\n\nKanha National Park, widely believed to have inspired The Jungle Book, is renowned for its thriving population of Bengal tigers, barasingha (hard-ground swamp deer), leopards, wild dogs and over 300 species of birds. Whether embarking on an early morning safari, enjoying an evening beneath the stars or exploring the forests with expert guides, Banjaar Tola promises an extraordinary wildlife experience in the heart of Central India.",

    why: "Banjaar Tola combines the excitement of an authentic Indian safari with the warmth and elegance of Taj hospitality. Its riverside setting, luxurious tented suites and expertly guided wildlife experiences make it one of the finest safari lodges in the country.",

    highlights: [
      "Luxury riverside safari lodge on the edge of Kanha National Park",
      "Elegant tented suites with private decks overlooking the forest",
      "Expert-guided jeep safaris in one of India's finest tiger reserves",
      "Inspired by local tribal villages and natural surroundings",
      "Luxury wilderness experience with signature Taj hospitality",
      "Ideal for wildlife, birdwatching and conservation experiences",
    ],

    exploreDestination: [
      {
        name: "Kanha National Park",
        description:
          "One of India's finest wildlife reserves, Kanha National Park is famous for its healthy population of Bengal tigers, leopards, sloth bears, Indian gaur and the rare hard-ground barasingha. Morning and afternoon jeep safaris provide unforgettable opportunities to witness wildlife in its natural habitat.",
      },
      {
        name: "Kanha Museum",
        description:
          "Located near the park entrance, the Kanha Museum offers fascinating insights into the region's ecology, conservation initiatives, wildlife species and the history of the national park. It serves as an excellent introduction before heading into the forest.",
      },
      {
        name: "Tribal Village Visits",
        description:
          "The region surrounding Kanha is home to indigenous Baiga and Gond communities. Guided visits provide an opportunity to learn about their traditional lifestyles, vibrant art forms, sustainable practices and deep connection with the surrounding forests.",
      },
      {
        name: "Nature Walks & Birdwatching",
        description:
          "Accompanied by expert naturalists, guided walks around the lodge reveal the rich diversity of Kanha's flora and smaller fauna. Bird enthusiasts can spot kingfishers, hornbills, eagles, woodpeckers and numerous migratory species throughout the year.",
      },
      {
        name: "Bamni Dadar",
        description:
          "Often called the 'Sunset Point of Kanha,' Bamni Dadar offers breathtaking panoramic views over the forests and meadows of the national park. It is one of the most scenic locations within Kanha and an excellent place to appreciate the vast wilderness landscape.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Jabalpur Airport",
          code: "JLR",
          distance: "165 km • Approximately 3.5 hours by road",
        },
        {
          name: "Raipur Airport",
          code: "RPR",
          distance: "200 km • Approximately 4 hours by road",
        },
        {
          name: "Dr. Babasaheb Ambedkar International Airport",
          location: "Nagpur",
          code: "NAG",
          distance: "260 km • Approximately 5.5 hours by road",
        },
      ],
    },

    idealFor: [
      "Wildlife Enthusiasts",
      "Safari Holidays",
      "Couples",
      "Families",
      "Nature Lovers",
      "Birdwatchers",
      "Photography Expeditions",
      "Luxury Adventure Travellers",
    ],

    website:
      "https://www.tajhotels.com/en-in/hotels/banjaar-tola-kanha-national-park",

    map: "https://www.google.com/maps/place/Banjaar+Tola,+A+Taj+Safari,+Kanha+National+Park/@22.1436994,80.6547596,17z/data=!4m10!3m9!1s0x3a2a1abdfecc5381:0x99e42f39d76b986f!5m3!1s2026-07-01!4m1!1i2!8m2!3d22.1436945!4d80.6573345!16s%2Fg%2F1hfcm1b89?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Taj Safaris",
      "Kanha National Park",
      "Tiger Reserve",
      "Luxury Safari",
      "Wildlife",
      "Banjaar River",
      "The Jungle Book",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Wildlife",
  },
  //49
  {
    id: "mahua-kothi-taj-safari-bandhavgarh-national-park",
    name: "Mahua Kothi, A Taj Safari – Bandhavgarh National Park",
    location: "Bandhavgarh National Park, Madhya Pradesh",
    category: "india",

    image: "/Assets/hotels/Mahua-Koti-Bandhvagarh.jpg",
    alt: "Mahua Kothi, A Taj Safari – Bandhavgarh National Park",

    accentClass: "hi--india-wildlife",

    intro:
      "Nestled on the edge of Bandhavgarh National Park, Mahua Kothi, A Taj Safari offers an immersive luxury wildlife experience inspired by the rustic charm of central India's traditional villages. Named after the majestic mahua tree that flourishes across the region, the lodge blends seamlessly into its natural surroundings, allowing guests to experience the wilderness without compromising on comfort. Designed as an intimate safari retreat, Mahua Kothi combines authentic local architecture, warm Taj hospitality and unforgettable encounters with one of India's most celebrated tiger reserves.\n\nThe lodge features charming standalone mud-plastered cottages, locally known as kutiyas, each thoughtfully designed with handcrafted furnishings, tribal-inspired décor and private verandas overlooking the surrounding forest. Spacious interiors, tranquil gardens and personalised service create an atmosphere of understated luxury, while expert naturalists accompany guests on exhilarating safari drives in search of Bengal tigers, leopards, sloth bears, deer and an extraordinary variety of birdlife. Between game drives, guests can relax by the swimming pool, enjoy regional cuisine prepared with fresh local ingredients or simply unwind beneath the shade of ancient mahua trees.\n\nWhether you're an avid wildlife enthusiast, photographer or first-time safari traveller, Mahua Kothi offers an authentic and enriching way to experience India's rich biodiversity. Every stay combines adventure, conservation and comfort, making it one of the country's finest luxury safari lodges.",

    why: "Mahua Kothi delivers the perfect balance of wilderness and luxury. Expert-guided safaris, intimate village-inspired cottages and the possibility of spotting the majestic Bengal tiger make every stay an unforgettable journey into the heart of India's wild landscapes.",

    highlights: [
      "Luxury safari lodge bordering Bandhavgarh National Park",
      "Traditional mud-plastered kutiyas inspired by local villages",
      "Expert-guided jeep safaris in one of India's top tiger reserves",
      "Immersive wildlife experiences with Taj hospitality",
      "Village-inspired architecture surrounded by pristine forest",
      "Perfect for tiger safaris, photography and nature experiences",
    ],

    exploreDestination: [
      {
        name: "Bandhavgarh National Park",
        description:
          "One of India's premier tiger reserves, Bandhavgarh National Park is renowned for having one of the highest densities of Bengal tigers in the country. Morning and evening jeep safaris offer opportunities to encounter tigers, leopards, elephants, gaur, deer and more than 250 species of birds amidst dense forests and open meadows.",
      },
      {
        name: "Bandhavgarh Fort",
        description:
          "Perched atop a hill within the national park, the ancient Bandhavgarh Fort is believed to be over 2,000 years old. The ruins, temples and panoramic views of the surrounding forest add a fascinating historical dimension to the wildlife experience.",
      },
      {
        name: "Shesh Shaiya",
        description:
          "Hidden deep within the forest, Shesh Shaiya is home to an impressive reclining statue of Lord Vishnu carved into stone. Surrounded by lush woodland and natural springs, it is one of the park's most peaceful and spiritually significant sites.",
      },
      {
        name: "Tribal Village Experiences",
        description:
          "Explore nearby villages to gain insight into the traditions and daily lives of local communities. Visitors can interact with artisans, discover indigenous crafts and experience the rich cultural heritage that has coexisted with the forests for generations.",
      },
      {
        name: "Nature Walks & Birdwatching",
        description:
          "Accompanied by experienced naturalists, guided nature walks around the lodge reveal the smaller wonders of the forest, from colourful butterflies and medicinal plants to fascinating birdlife, making them an ideal complement to jeep safaris.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Jabalpur Airport",
          code: "JLR",
          distance: "180 km • Approximately 4 hours by road",
        },
        {
          name: "Khajuraho Airport",
          code: "HJR",
          distance: "230 km • Approximately 5.5 hours by road",
        },
      ],
    },

    idealFor: [
      "Wildlife Enthusiasts",
      "Safari Holidays",
      "Couples",
      "Families",
      "Nature Lovers",
      "Photography Expeditions",
      "Luxury Adventure Travellers",
      "Tiger Trail Itineraries",
    ],

    website:
      "https://www.tajhotels.com/en-in/hotels/mahua-kothi-bandhavgarh-national-park",

    map: "https://www.google.com/maps/place/Mahua+Kothi,+A+Taj+Safari,+Bandhavgarh+National+Park/@23.7294464,81.0138096,17z/data=!3m1!4b1!4m9!3m8!1s0x3986a50df9f648d5:0x6eeb7a7554d6f078!5m2!4m1!1i2!8m2!3d23.7294415!4d81.0163845!16s%2Fg%2F1hdzssz57?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Taj Safaris",
      "Bandhavgarh National Park",
      "Tiger Reserve",
      "Luxury Safari",
      "Wildlife",
      "Mahua Kothi",
      "Central India",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Wildlife",
  },
  //50
  {
    id: "trident-agra",
    name: "Trident, Agra",
    location: "Agra, Uttar Pradesh",
    category: "india",

    image: "/Assets/hotels/Trident-Agra.jpg",
    alt: "Trident, Agra",

    accentClass: "hi--india-heritage",

    intro:
      "Located just moments from the timeless beauty of the Taj Mahal, Trident, Agra offers a peaceful retreat that perfectly complements a visit to one of the world's most celebrated monuments. Set amidst beautifully landscaped gardens, reflective water features and elegant courtyards, the hotel provides a calm and welcoming atmosphere away from the bustle of the city. Its contemporary architecture draws subtle inspiration from Mughal design, creating spaces that feel refined, airy and deeply connected to Agra's remarkable heritage.\n\nThe hotel's interiors balance understated elegance with warm hospitality, making it equally suited to families, couples and travellers exploring India's famous Golden Triangle. Spacious accommodation overlooks lush gardens or tranquil pools, while open courtyards and shaded walkways encourage guests to slow down after a day of sightseeing. Dining celebrates both North Indian flavours and international cuisine, and the relaxed ambience makes the hotel an ideal place to unwind after witnessing the grandeur of Agra's historic landmarks.\n\nBeyond the hotel lies a city shaped by the legacy of the Mughal Empire. Majestic forts, exquisite mausoleums, bustling bazaars and centuries-old artisan workshops continue to define Agra's cultural identity. Whether watching the first rays of sunlight illuminate the Taj Mahal, discovering the architectural splendour of Agra Fort or exploring the city's rich marble craftsmanship, Trident, Agra serves as an excellent base for experiencing one of India's most iconic destinations with comfort and ease.",

    why: "Trident, Agra offers a refreshing sense of tranquillity just minutes from the Taj Mahal. Its beautiful gardens, relaxed atmosphere and warm hospitality provide the perfect balance to a day spent exploring the city's extraordinary Mughal heritage.",

    highlights: [
      "Located just minutes from the Taj Mahal",
      "Contemporary architecture inspired by Mughal design",
      "Beautiful landscaped gardens and tranquil courtyards",
      "Spacious rooms overlooking gardens and pools",
      "Ideal base for exploring Agra and the Golden Triangle",
      "Warm Trident hospitality with peaceful surroundings",
    ],

    exploreDestination: [
      {
        name: "Taj Mahal",
        description:
          "One of the Seven Wonders of the World and a UNESCO World Heritage Site, the Taj Mahal remains India's most celebrated monument. Built by Emperor Shah Jahan in memory of Mumtaz Mahal, its flawless white marble architecture is especially captivating at sunrise and sunset.",
      },
      {
        name: "Agra Fort",
        description:
          "This magnificent UNESCO World Heritage Site served as the principal residence of the Mughal emperors for generations. Its impressive palaces, audience halls and fortified walls reveal the grandeur and political power of the Mughal Empire.",
      },
      {
        name: "Itmad-ud-Daulah",
        description:
          "Often referred to as the 'Baby Taj,' this elegant marble mausoleum is admired for its delicate pietra dura inlay work and graceful Persian-inspired architecture. It represents an important precursor to the Taj Mahal.",
      },
      {
        name: "Mehtab Bagh",
        description:
          "Located across the Yamuna River, Mehtab Bagh offers one of the finest panoramic views of the Taj Mahal. The peaceful Mughal garden is particularly popular at sunset, when the monument is bathed in warm golden light.",
      },
      {
        name: "Agra's Marble & Handicraft Workshops",
        description:
          "Agra has preserved its tradition of intricate marble inlay craftsmanship for centuries. Visiting local artisan workshops provides an opportunity to witness skilled craftsmen creating beautiful decorative pieces using techniques inherited from the Mughal era.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Agra Airport",
          code: "AGR",
          distance: "Nearest airport",
        },
      ],
    },

    idealFor: [
      "Couples",
      "Honeymooners",
      "Families",
      "Heritage Travellers",
      "Cultural Explorers",
      "Golden Triangle Holidays",
      "Luxury Travellers",
      "Photography Enthusiasts",
    ],

    website: "https://www.tridenthotels.com/hotels-in-agra/",

    map: "https://www.google.com/maps/place/Trident,+Agra/@27.1594143,78.0573384,17z/data=!3m1!4b1!4m9!3m8!1s0x397477262a12b011:0x6bd9087cb10e1443!5m2!4m1!1i2!8m2!3d27.1594096!4d78.0599133!16s%2Fg%2F11c6slwfzn?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Trident Hotels",
      "Agra",
      "Taj Mahal",
      "Golden Triangle",
      "Luxury Hotel",
      "Mughal Heritage",
      "Heritage Stay",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "Heritage",
  },

  //51
  {
    id: "trident-gurgaon-delhi-ncr",
    name: "Trident, Gurgaon",
    location: "Gurgaon, Haryana",
    category: "india",

    image: "/Assets/hotels/Trident-Delhi.jpg",
    alt: "Trident, Gurgaon (Delhi NCR)",

    accentClass: "hi--india-city",

    intro:
      "Located in the heart of Gurgaon's prestigious business district, Trident, Gurgaon is a contemporary oasis that seamlessly blends striking architecture, tranquil surroundings and warm hospitality. Just a short drive from Indira Gandhi International Airport, the hotel is renowned for its unique design inspired by Mughal gardens, featuring beautifully landscaped courtyards, cascading water bodies and elegant walkways that create an atmosphere of serenity amidst the bustling National Capital Region.\n\nThe hotel's architecture is defined by clean lines, sandstone façades and expansive open spaces, complemented by lush gardens and reflection pools that provide a refreshing sense of calm. Spacious rooms and suites are thoughtfully designed with modern comforts, floor-to-ceiling windows and refined interiors, making them ideal for both business and leisure travellers. Guests can indulge in award-winning dining experiences, relax by the stunning outdoor swimming pool, rejuvenate at the spa or simply enjoy the peaceful ambience that sets the hotel apart from conventional city properties.\n\nIts strategic location offers convenient access to Gurgaon's corporate hubs, luxury shopping destinations and entertainment centres, while New Delhi's historic monuments and cultural attractions are within easy reach. Whether travelling for business meetings, a weekend getaway or the start of a North India journey, Trident, Gurgaon combines contemporary luxury with exceptional service to deliver a memorable stay.",

    why: "Trident, Gurgaon offers the rare luxury of peaceful resort-style surroundings in the middle of one of India's busiest business districts. Its award-winning architecture, beautiful water features and personalised Trident hospitality make it an ideal retreat for both business and leisure travellers.",

    highlights: [
      "Luxury hotel in Gurgaon's premier business district",
      "Architecture inspired by Mughal gardens",
      "Landscaped courtyards, reflection pools and cascading water features",
      "Award-winning dining and luxury spa",
      "Close to Indira Gandhi International Airport",
      "Ideal for business and leisure travellers",
    ],

    exploreDestination: [
      {
        name: "Qutub Minar",
        description:
          "A UNESCO World Heritage Site, Qutub Minar is the tallest brick minaret in the world and one of Delhi's most celebrated historical landmarks. Surrounded by ancient monuments and beautifully preserved ruins, it offers a fascinating journey through the early history of the Delhi Sultanate.",
      },
      {
        name: "Kingdom of Dreams",
        description:
          "A vibrant entertainment and cultural destination, Kingdom of Dreams showcases India's diverse performing arts, regional cuisines and cultural traditions through spectacular live productions and themed experiences, making it a popular attraction for visitors of all ages.",
      },
      {
        name: "DLF Cyber Hub",
        description:
          "One of Gurgaon's most popular lifestyle destinations, Cyber Hub features an exciting mix of fine dining restaurants, cafés, breweries, boutique stores and entertainment venues. It is an excellent place to experience the city's energetic urban lifestyle.",
      },
      {
        name: "Lodhi Gardens",
        description:
          "A peaceful green oasis in the heart of Delhi, Lodhi Gardens is home to beautifully landscaped lawns and magnificent 15th-century tombs. It provides an ideal setting for leisurely walks while appreciating the capital's rich architectural heritage.",
      },
      {
        name: "India Gate",
        description:
          "One of India's most iconic monuments, India Gate stands proudly at the centre of Lutyens' Delhi. Surrounded by expansive gardens and ceremonial avenues, it is particularly beautiful in the evening when illuminated against the night sky.",
      },
    ],

    howToReach: {
      airports: [
        {
          name: "Indira Gandhi International Airport",
          code: "DEL",
          distance: "Nearest airport",
        },
      ],
    },

    idealFor: [
      "Business Travellers",
      "Luxury Travellers",
      "Couples",
      "Families",
      "Weekend Getaways",
      "Corporate Events",
      "City Breaks",
      "Delhi NCR Holidays",
    ],

    website: "https://www.tridenthotels.com/hotels-in-gurgaon/",

    map: "https://www.google.com/maps/place/Trident,+Gurgaon/@28.5021705,77.0847453,17z/data=!3m1!4b1!4m9!3m8!1s0x390d191dd4b6648f:0xc03c72595a7c2247!5m2!4m1!1i2!8m2!3d28.5021659!4d77.0896162!16s%2Fg%2F11v6sxyxfp?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Trident Hotels",
      "Gurgaon",
      "Delhi NCR",
      "Luxury Hotel",
      "Business Travel",
      "Mughal Garden Architecture",
      "City Escape",
    ],

    isFeatured: true,
    isRecommended: true,

    categoryTag: "City Luxury",
  },
  //52
  {
  id: "waghoba-eco-lodge-tadoba-national-park",
  name: "Waghoba Eco Lodge, Tadoba National Park",
  location: "Tadoba National Park, Maharashtra",
  category: "india",

  image: "/Assets/hotels/Waghoba-Eco-Lodge-Tadoba.webp",
  alt: "Waghoba Eco Lodge, Tadoba National Park",

  accentClass: "hi--india-wildlife",

  intro:
    "Bordering the wild landscapes of Tadoba-Andhari Tiger Reserve, Waghoba Eco Lodge is a thoughtfully designed safari retreat that places conservation, community and authentic wilderness experiences at the heart of every stay. Named after Waghoba, the tiger deity revered by local communities for generations, the lodge reflects a deep respect for the forests of Vidarbha and the people who have lived alongside them for centuries. Rather than competing with its surroundings, the property blends naturally into the landscape through locally inspired architecture, sustainable construction and a strong commitment to responsible tourism.\n\nBuilt using natural materials such as stone, timber and mud plaster, the spacious cottages remain cool, comfortable and closely connected to the surrounding forest. Interiors celebrate local craftsmanship with handcrafted furnishings, indigenous textiles and artwork inspired by the region's tribal heritage. Days begin before sunrise as guests head into Tadoba's forests with experienced naturalists in search of Bengal tigers, leopards, sloth bears, dholes, gaur and an astonishing diversity of birdlife. Returning to the lodge, the atmosphere shifts to one of quiet relaxation, where evenings are spent around the fire, sharing stories of wildlife encounters beneath brilliantly star-filled skies.\n\nMore than simply a safari destination, Waghoba Eco Lodge offers meaningful opportunities to understand the delicate relationship between wildlife conservation and local livelihoods. Village visits, interactions with naturalists and conservation-focused experiences provide a deeper appreciation of this remarkable landscape. For travellers seeking an authentic Indian safari that combines comfort with purpose, Waghoba Eco Lodge delivers an experience that is both enriching and memorable.",

  why:
    "Waghoba Eco Lodge demonstrates that luxury can be thoughtful rather than extravagant. Its close relationship with the local community, conservation-led philosophy and exceptional wildlife experiences make every stay feel genuinely connected to the landscape.",

  highlights: [
    "Eco-luxury safari lodge bordering Tadoba-Andhari Tiger Reserve",
    "Sustainably built cottages using natural local materials",
    "Expert-guided tiger safaris and wildlife experiences",
    "Community-led conservation and village experiences",
    "Locally inspired architecture celebrating Vidarbha heritage",
    "Responsible luxury in one of India's premier tiger reserves"
  ],

  exploreDestination: [
    {
      name: "Tadoba-Andhari Tiger Reserve",
      description:
        "Maharashtra's oldest and finest tiger reserve is celebrated for its excellent wildlife sightings and healthy tiger population. Guided safaris through bamboo forests, open meadows and tranquil lakes provide opportunities to encounter tigers, leopards, sloth bears, wild dogs, gaur, marsh crocodiles and over 280 species of birds."
    },
    {
      name: "Tadoba Lake",
      description:
        "Situated at the heart of the reserve, Tadoba Lake attracts a remarkable concentration of wildlife throughout the year. Waterbirds, crocodiles, deer and predators are frequently seen along its shores, making it one of the park's most rewarding safari locations."
    },
    {
      name: "Buffer Zone Village Experiences",
      description:
        "The villages surrounding Tadoba provide valuable insight into rural life in the Vidarbha region. Guided visits introduce travellers to local traditions, agriculture, handicrafts and the conservation initiatives that support harmonious coexistence between communities and wildlife."
    },
    {
      name: "Birdwatching & Nature Walks",
      description:
        "Beyond the excitement of tiger safaris, the forests surrounding the lodge are home to hornbills, crested serpent eagles, paradise flycatchers, owls and numerous migratory birds. Guided walks with experienced naturalists reveal the fascinating ecology of the forest and its smaller inhabitants."
    },
    {
      name: "Conservation Experiences",
      description:
        "Waghoba Eco Lodge works closely with local communities and conservation organisations. Guests have opportunities to learn about habitat protection, wildlife monitoring and community-led initiatives that contribute to the long-term preservation of Tadoba's unique ecosystem."
    }
  ],

  howToReach: {
    airports: [
      {
        name: "Dr. Babasaheb Ambedkar International Airport",
        location: "Nagpur",
        code: "NAG",
        distance: "120 km • Approximately 2.5 hours by road"
      }
    ]
  },

  idealFor: [
    "Wildlife Enthusiasts",
    "Safari Holidays",
    "Nature Lovers",
    "Wildlife Photographers",
    "Birdwatchers",
    "Couples",
    "Families",
    "Conservation-minded Travellers",
    "Luxury Adventure Holidays"
  ],

  website: "https://www.waghobaecolodge.com/",

  map:
    "https://www.google.com/maps/place/Waghoba+Eco+Lodge+-+Tadoba+National+Park/@20.294091,79.2545113,17z/data=!4m10!3m9!1s0x3bd2d53f7ebf2161:0xc0acc168054c0210!5m3!1s2026-07-01!4m1!1i2!8m2!3d20.294086!4d79.2570862!16s%2Fg%2F11rsptjnpx?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D",

  tags: [
    "Waghoba Eco Lodge",
    "Tadoba National Park",
    "Tiger Reserve",
    "Wildlife Safari",
    "Eco Lodge",
    "Conservation",
    "Maharashtra"
  ],

  isFeatured: true,
  isRecommended: true,

  categoryTag: "Wildlife"
},
//53
{
  id: "zhiwa-ling-heritage-bhutan",
  name: "Zhiwa Ling Heritage",
  location: "Paro Valley, Bhutan",
  category: "bhutan",

  image: "/Assets/hotels/53.png",
  alt: "Zhiwa Ling Heritage, Paro Valley, Bhutan",

  accentClass: "hi--bhutan-heritage",

  intro:
    "Celebrating Bhutan's rich cultural heritage and timeless architectural traditions, Zhiwa Ling Heritage is an award-winning luxury retreat that offers an authentic Bhutanese experience in the heart of the Paro Valley. Crafted by local artisans using traditional techniques and natural materials, the property seamlessly combines centuries-old craftsmanship with refined contemporary comforts. Every corner reflects the kingdom's deep-rooted spirituality, warm hospitality and commitment to preserving its unique cultural identity, making it one of Bhutan's most distinctive luxury stays.\n\nThe beautifully appointed rooms and suites showcase hand-carved woodwork, traditional murals, handcrafted furnishings and modern amenities that create an atmosphere of understated elegance. Guests can savour authentic Bhutanese cuisine alongside international favourites, rejuvenate with holistic spa therapies, meditate in the property's private temple or simply unwind while enjoying panoramic views of the surrounding mountains and valleys. The personalised service ensures an enriching and memorable stay.\n\nPerfectly located near Bhutan's most iconic cultural and natural attractions, Zhiwa Ling Heritage provides an exceptional base for discovering the kingdom's monasteries, fortresses and pristine Himalayan landscapes. Whether embarking on scenic hikes, attending vibrant festivals or exploring ancient spiritual sites, guests are immersed in the authentic spirit of Bhutan.",

  why:
    "Zhiwa Ling Heritage offers an extraordinary blend of Bhutanese tradition and refined luxury. Its authentic architecture, exceptional hospitality and immersive cultural experiences create a truly unforgettable Himalayan retreat.",

  highlights: [
    "Award-winning luxury retreat celebrating Bhutan's rich cultural heritage",
    "Traditional Bhutanese architecture crafted by local artisans using traditional techniques and natural materials",
    "Rooms and suites featuring hand-carved woodwork, traditional murals and handcrafted furnishings",
    "Authentic Bhutanese cuisine alongside international favourites",
    "Holistic spa therapies, meditation sessions and a private temple",
    "Panoramic views of the surrounding mountains and valleys",
    "Exceptional base for exploring Bhutan's monasteries, fortresses and Himalayan landscapes",
    "Personalised service and immersive cultural experiences",
  ],

  exploreDestination: [
    {
      name: "Paro Taktsang",
      description:
        "Widely known as the Tiger's Nest Monastery, this iconic cliffside monastery is Bhutan's most revered landmark. The rewarding hike offers breathtaking views and an unforgettable spiritual experience.",
    },
    {
      name: "Rinpung Dzong",
      description:
        "One of Bhutan's finest fortress-monasteries, Rinpung Dzong is admired for its magnificent architecture, intricate wood carvings and colourful Buddhist murals that reflect the country's rich spiritual heritage.",
    },
    {
      name: "National Museum of Bhutan",
      description:
        "Housed in a historic watchtower overlooking Paro Valley, the museum presents fascinating collections of Bhutanese art, textiles, traditional weapons and religious artefacts.",
    },
    {
      name: "Traditional Bhutanese Village Walks",
      description:
        "Experience the charm of rural Bhutan through guided walks that offer opportunities to meet local families, visit traditional farmhouses and gain insight into the country's unique customs, architecture and way of life.",
    },
    {
      name: "Wellness & Spiritual Experiences",
      description:
        "Reconnect with mind and body through meditation sessions, traditional hot stone baths, spa treatments and visits to nearby monasteries that embody Bhutan's enduring Buddhist traditions.",
    },
  ],

  howToReach: {
    airports: [
      {
        name: "Paro International Airport",
        location: "Bhutan",
        code: "PBH",
        distance: "Nearest airport",
      },
    ],
  },

  idealFor: [
    "Couples",
    "Honeymooners",
    "Luxury Travellers",
    "Cultural Explorers",
    "Wellness Seekers",
    "Nature Lovers",
    "Himalayan Holidays",
    "Slow Travel Experiences",
  ],

  website: "https://www.zhiwalingheritage.com/",

  map: "https://www.google.com/maps/place/Zhiwaling+Heritage+Hotel/@27.4648172,89.3494876,17z/data=!4m9!3m8!1s0x39e19de85a6c39b7:0x546a1f3ae162796b!5m2!4m1!1i2!8m2!3d27.4648125!4d89.3520625!16s%2Fg%2F1tf194y9?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D",

  tags: [
    "Bhutanese Heritage",
    "Luxury Retreat",
    "Cultural Experiences",
    "Himalayan Retreat",
    "Wellness",
    "Traditional Architecture",
  ],

  isFeatured: false,
  isRecommended: true,

  categoryTag: "Heritage",
},

  {
    id: "bari-kothi-west-bengal",
    name: "Bari Kothi, West Bengal",
    location: "Murshidabad, West Bengal",
    category: "india",

    image: "/Assets/hotels/Baro Kothi, West Bengal.jpg",
    alt: "Bari Kothi, West Bengal, Murshidabad, West Bengal",

    accentClass: "hi--india-heritage",

    intro:
      "Framed by the tranquil waters of the Ganges in the historic town of Murshidabad, Bari Kothi is a beautifully restored heritage mansion that offers guests an authentic glimpse into Bengal's aristocratic past. Once the residence of a prominent zamindar family, the mansion has been lovingly preserved to retain its original grandeur while incorporating modern comforts. Intricately carved balconies, elegant courtyards, antique furnishings and timeless architecture create an atmosphere where history, culture and hospitality blend seamlessly.\n\nThe heritage rooms and suites are thoughtfully designed with period-inspired décor, vintage furniture and contemporary amenities, allowing guests to experience the charm of a bygone era without compromising on comfort. The property's tranquil gardens, traditional Bengali cuisine and personalised service add to its warm and inviting ambience. Cultural performances, heritage walks and curated local experiences further immerse visitors in the rich traditions of Bengal.\n\nBari Kothi is an ideal base for discovering Murshidabad, once the capital of Bengal during the Nawabi era. The region is home to magnificent palaces, historic mosques, ancient temples and bustling silk-weaving communities that reflect its glorious past. Whether you're a history enthusiast, cultural explorer or simply seeking a peaceful heritage getaway, Bari Kothi offers a memorable and enriching experience.",

    why: "Bari Kothi beautifully preserves the elegance of Bengal's zamindari heritage. Its historic architecture, personalised hospitality and immersive cultural experiences make it one of eastern India's most distinctive heritage stays.",

    exploreDestination: [
      {
        name: "Hazarduari Palace",
        description:
          "One of India's grandest palaces, Hazarduari Palace is renowned for its magnificent Italian-inspired architecture and its legendary \"thousand doors.\" The palace museum houses royal artefacts, paintings, weapons and memorabilia from the Nawabi era.",
      },
      {
        name: "Katra Mosque",
        description:
          "Built in the early 18th century by Nawab Murshid Quli Khan, Katra Mosque is an architectural masterpiece known for its impressive domes, towering minarets and historical significance.",
      },
      {
        name: "Nizamat Imambara",
        description:
          "One of the largest Imambaras in India, this magnificent religious monument is an important centre of Islamic heritage and is admired for its elegant architecture and peaceful surroundings.",
      },
      {
        name: "Kathgola Palace",
        description:
          "Surrounded by beautiful gardens, Kathgola Palace is an elegant mansion built by wealthy Jain merchants. Its impressive architecture, antique collections and serene setting make it a popular heritage attraction.",
      },
      {
        name: "Silk Weaving Villages",
        description:
          "Murshidabad has long been celebrated for its exquisite silk weaving tradition. Visiting local artisan workshops offers an opportunity to witness skilled craftsmen producing the region's famous Murshidabad silk using techniques passed down through generations.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Netaji Subhash Chandra Bose International Airport, Kolkata",
          code: "CCU",
          distance: "220 kms. / 5 hrs. approx. by road.",
        }
      ],
    },

    idealFor: [
      "Heritage Travellers",
      "Couples",
      "Cultural Explorers",
      "History Enthusiasts",
      "Families",
      "Photography Enthusiasts",
      "Weekend Getaways",
      "Slow Travel Experiences"
    ],

    website: "https://barikothi.com/",

    map: "https://www.google.com/maps/place/Bari+Kothi+Heritage+Hotel/@24.2415723,88.2509741,17z/data=!4m10!3m9!1s0x39fbd15a86f29557:0x5bb344a97fac4775!5m3!1s2026-09-01!4m1!1i2!8m2!3d24.2415674!4d88.253549!16s%2Fg%2F11f3tw8nm8?entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Heritage",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Heritage",
  },

  {
    id: "conrad-bengaluru",
    name: "Conrad Bengaluru",
    location: "Bengaluru, Karnataka",
    category: "india",

    image: "/Assets/hotels/Conrad Bengaluru.webp",
    alt: "Conrad Bengaluru, Bengaluru, Karnataka",

    accentClass: "hi--india-city",

    intro:
      "Overlooking the serene waters of Ulsoor Lake in the heart of Bengaluru, Conrad Bengaluru is a sophisticated luxury hotel that combines contemporary elegance with world-class hospitality. As one of the city's premier five-star destinations, the hotel offers an exceptional stay for business and leisure travellers alike, with beautifully appointed accommodations, award-winning dining experiences and impeccable service. Its prime location provides convenient access to Bengaluru's business districts, upscale shopping, vibrant nightlife and cultural attractions, making it an ideal base for exploring India's technology capital.\n\nThe hotel's spacious rooms and suites feature floor-to-ceiling windows that frame spectacular views of Ulsoor Lake or the city skyline. Elegant interiors, modern amenities and personalised service create a refined yet welcoming atmosphere, while guests can enjoy a selection of exceptional restaurants serving global cuisines, relax by the infinity pool, rejuvenate at the luxury spa or unwind in the executive lounge. Every aspect of the hotel has been designed to deliver comfort, sophistication and memorable experiences.\n\nBeyond the hotel, Bengaluru offers a unique blend of lush gardens, historic landmarks, thriving cafés, art galleries and cosmopolitan energy. Whether exploring the city's heritage, enjoying its renowned culinary scene or using it as a gateway to Southern India's many attractions, Conrad Bengaluru provides the perfect balance of luxury, convenience and warm hospitality.",

    why: "Conrad Bengaluru combines contemporary luxury with one of the city's finest locations overlooking Ulsoor Lake. Its spacious rooms, exceptional dining and seamless hospitality make it an excellent choice for both business travellers and those looking to experience Bengaluru in style.",

    exploreDestination: [
      {
        name: "Ulsoor Lake",
        description:
          "Located just steps from the hotel, Ulsoor Lake is one of Bengaluru's oldest and most picturesque lakes. Visitors can enjoy peaceful morning walks, boating and scenic views surrounded by lush greenery.",
      },
      {
        name: "Cubbon Park",
        description:
          "Spread across more than 300 acres, Cubbon Park is Bengaluru's green oasis. Beautiful tree-lined avenues, historic buildings and landscaped gardens make it a favourite destination for walkers, joggers and families.",
      },
      {
        name: "Bangalore Palace",
        description:
          "Inspired by England's Windsor Castle, Bangalore Palace is known for its Tudor-style architecture, elegant interiors and royal history. It offers visitors a fascinating glimpse into the city's princely past.",
      },
      {
        name: "Lalbagh Botanical Garden",
        description:
          "One of India's finest botanical gardens, Lalbagh is famous for its centuries-old trees, vibrant flower displays and the iconic Glass House. It is an ideal destination for nature lovers and photography enthusiasts.",
      },
      {
        name: "Commercial Street",
        description:
          "One of Bengaluru's most popular shopping districts, Commercial Street is packed with boutiques, fashion stores, cafés and local eateries, making it perfect for shopping and experiencing the city's vibrant atmosphere.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Kempegowda International Airport, Bengaluru",
          code: "BLR",
          distance: "Nearest airport",
        }
      ],
    },

    idealFor: [
      "Business Travellers",
      "Luxury Travellers",
      "Couples",
      "Families",
      "Weekend Getaways",
      "City Breaks",
      "Food & Lifestyle Enthusiasts",
      "Corporate Events"
    ],

    website: "https://www.hilton.com/en/hotels/blrkrci-conrad-bengaluru/",

    map: "https://www.google.com/maps/place/Conrad+Bengaluru/@12.9752925,77.6179109,17z/data=!3m1!4b1!4m9!3m8!1s0x3bae169b41c32eeb:0xd7be5acf89a61a1d!5m2!4m1!1i2!8m2!3d12.9752873!4d77.6204858!16s%2Fg%2F11g734q9b8?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "City Luxury",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "City Luxury",
  },

  {
    id: "dhensa-resort-bhutan",
    name: "Dhensa Resort, Bhutan",
    location: "Punakha, Bhutan",
    category: "bhutan",

    image: "/Assets/hotels/Dhensa Bhutan.jpg",
    alt: "Dhensa Resort, Bhutan, Punakha, Bhutan",

    accentClass: "hi--bhutan-heritage",

    intro:
      "Framed by the pristine forests and serene valleys of western Bhutan, Dhensa Resort is a contemporary luxury retreat that offers a harmonious blend of minimalist design, Bhutanese tradition and breathtaking Himalayan scenery. Located in the tranquil Punakha Valley, the resort has been thoughtfully designed to complement its natural surroundings, creating an atmosphere of peace, privacy and understated elegance. Every aspect of the experience encourages guests to slow down, reconnect with nature and immerse themselves in Bhutan's unique culture.\n\nThe spacious suites feature warm timber interiors, handcrafted Bhutanese details and floor-to-ceiling windows that showcase spectacular mountain and forest views. Guests can savour seasonal Bhutanese and international cuisine prepared with fresh local ingredients, rejuvenate with holistic spa therapies, enjoy yoga and meditation sessions or simply unwind amidst the tranquil surroundings. Personalised hospitality and carefully curated experiences ensure every stay is both restorative and memorable.\n\nIdeally positioned for exploring the cultural treasures of the Punakha Valley, Dhensa Resort offers easy access to ancient monasteries, historic fortresses and scenic hiking trails. Whether discovering Bhutan's spiritual heritage, attending colourful festivals or embracing the quiet beauty of the Himalayas, the resort provides an unforgettable gateway to the Land of the Thunder Dragon.",

    why: "Dhensa Resort combines contemporary luxury with Bhutan's timeless sense of tranquillity. Its peaceful forest setting, elegant accommodation and immersive cultural experiences make it one of the country's finest boutique retreats.",

    exploreDestination: [
      {
        name: "Punakha Dzong",
        description:
          "One of Bhutan's most magnificent fortress-monasteries, Punakha Dzong stands at the confluence of the Pho Chhu and Mo Chhu rivers. Renowned for its exquisite Bhutanese architecture and historical significance, it is among the country's most iconic landmarks.",
      },
      {
        name: "Chimi Lhakhang",
        description:
          "Popularly known as the Fertility Temple, this revered monastery is reached via a picturesque walk through rice fields and traditional villages, offering visitors a fascinating insight into Bhutanese culture and spirituality.",
      },
      {
        name: "Khamsum Yulley Namgyal Chorten",
        description:
          "Set atop a scenic hillside, this beautifully crafted chorten rewards visitors with panoramic views of the Punakha Valley after a leisurely hike through lush countryside.",
      },
      {
        name: "Village Walks & Cultural Encounters",
        description:
          "Discover the charm of rural Bhutan through guided walks that pass traditional farmhouses, terraced fields and welcoming local communities, offering an authentic glimpse into Bhutanese daily life.",
      },
      {
        name: "Wellness & Nature Experiences",
        description:
          "Enjoy forest walks, meditation sessions, yoga and holistic spa treatments while embracing the peaceful surroundings that make Punakha one of Bhutan's most serene destinations.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Paro International Airport, Bhutan",
          code: "PBH",
          distance: "110 kms. / 3 hrs. approx. by road.",
        }
      ],
    },

    idealFor: [
      "Couples",
      "Honeymooners",
      "Luxury Travellers",
      "Wellness Seekers",
      "Cultural Explorers",
      "Nature Lovers",
      "Himalayan Holidays",
      "Slow Travel Experiences"
    ],

    website: "https://dhensa.com/",

    map: "https://www.google.com/maps/place/Dhensa+Boutique+Resort/@27.5351918,89.8613315,17z/data=!4m9!3m8!1s0x39e1dd033789df79:0x34afc00fe108b16c!5m2!4m1!1i2!8m2!3d27.5351871!4d89.8639064!16s%2Fg%2F11cnxzb8vn?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Heritage",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Heritage",
  },

  {
    id: "dolkhar-leh",
    name: "Dolkhar, Leh",
    location: "Leh, Ladakh",
    category: "india",

    image: "/Assets/hotels/Dolkhar, Leh.jpeg",
    alt: "Dolkhar, Leh, Leh, Ladakh",

    accentClass: "hi--india-mountain",

    intro:
      "Inspired by the timeless landscapes and cultural heritage of Ladakh, Dolkhar is a distinctive boutique luxury retreat in Leh that offers an immersive Himalayan experience. Designed using sustainable principles and traditional Ladakhi architecture, the property seamlessly blends natural materials, contemporary comforts and breathtaking mountain views. Surrounded by dramatic peaks, ancient monasteries and pristine valleys, Dolkhar provides a peaceful sanctuary where guests can embrace the tranquillity and spirit of the Himalayas.\n\nThe elegantly designed suites and villas feature handcrafted interiors, locally inspired décor and modern amenities, complemented by private outdoor spaces that showcase panoramic views of the surrounding mountains. Guests can savour thoughtfully curated cuisine prepared with fresh regional ingredients, rejuvenate with holistic wellness therapies, practise yoga, or simply relax amidst beautifully landscaped gardens. Warm Ladakhi hospitality and personalised service ensure an intimate and memorable stay.\n\nIdeally located close to the historic town of Leh, Dolkhar serves as an excellent base for exploring Ladakh's spectacular monasteries, high-altitude lakes and scenic mountain passes. Whether embarking on adventurous road journeys, discovering centuries-old Buddhist heritage or simply soaking in the serenity of the mountains, the retreat promises an unforgettable escape into one of India's most extraordinary destinations.",

    why: "Dolkhar beautifully combines sustainable luxury with authentic Ladakhi culture. Its peaceful setting, elegant accommodation and immersive local experiences make it one of Leh's finest boutique retreats.",

    exploreDestination: [
      {
        name: "Leh Palace",
        description:
          "Overlooking the old town of Leh, the 17th-century Leh Palace is one of Ladakh's most iconic landmarks. Visitors can explore its historic rooms while enjoying sweeping views of the town and surrounding Himalayan ranges.",
      },
      {
        name: "Shanti Stupa",
        description:
          "Perched on a hilltop above Leh, Shanti Stupa is a magnificent white-domed Buddhist monument offering panoramic sunrise and sunset views. It is one of the most peaceful and photogenic locations in Ladakh.",
      },
      {
        name: "Thiksey Monastery",
        description:
          "Often compared to the Potala Palace in Lhasa, Thiksey Monastery is renowned for its striking architecture, colourful prayer halls and the impressive 15-metre statue of Maitreya Buddha.",
      },
      {
        name: "Nubra Valley",
        description:
          "Accessible via the legendary Khardung La Pass, Nubra Valley is famous for its sand dunes, double-humped Bactrian camels, picturesque villages and dramatic mountain scenery, making it one of Ladakh's most unforgettable excursions.",
      },
      {
        name: "Pangong Lake",
        description:
          "Stretching across India and Tibet, Pangong Lake is celebrated for its crystal-clear waters that change shades of blue throughout the day. Surrounded by towering mountains, it is among Ladakh's most spectacular natural attractions.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Nearest Airport: Kushok Bakula Rimpochee Airport, Leh",
          code: "",
          distance: "Nearest airport",
        }
      ],
    },

    idealFor: [
      "Luxury Travellers",
      "Couples",
      "Honeymooners",
      "Nature Lovers",
      "Adventure Seekers",
      "Wellness Retreats",
      "Cultural Explorers",
      "Himalayan Holidays"
    ],

    website: "https://dolkharladakh.com/",

    map: "https://www.google.com/maps/place/Dolkhar+Resort/@34.1641201,77.5696363,17z/data=!3m1!4b1!4m9!3m8!1s0x38fdeb37ec6a5e4d:0xcc3ef4b65a227d4e!5m2!4m1!1i2!8m2!3d34.1641157!4d77.5722112!16s%2Fg%2F11q95l3xft?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Mountain Retreat",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Mountain Retreat",
  },

  {
    id: "four-seasons-hotel-bengaluru-at-embassy-one",
    name: "Four Seasons Hotel Bengaluru at Embassy ONE",
    location: "Bengaluru, Karnataka",
    category: "india",

    image: "/Assets/hotels/Four Seasons, Bengaluru.jpg",
    alt: "Four Seasons Hotel Bengaluru at Embassy ONE, Bengaluru, Karnataka",

    accentClass: "hi--india-city",

    intro:
      "Located in the prestigious Embassy ONE development, Four Seasons Hotel Bengaluru at Embassy ONE redefines urban luxury with its contemporary elegance, world-class hospitality and serene atmosphere. Rising above Bengaluru's dynamic business district, the hotel offers a sophisticated retreat where modern design, lush landscaped gardens and personalised service come together to create an exceptional stay. Whether visiting for business or leisure, guests enjoy the signature Four Seasons experience while remaining conveniently connected to the city's corporate hubs, cultural landmarks and vibrant lifestyle destinations.\n\nThe hotel's spacious rooms and suites feature floor-to-ceiling windows with sweeping views of Bengaluru's skyline and verdant surroundings. Interiors are thoughtfully designed with refined furnishings, contemporary décor and state-of-the-art amenities, creating a warm and inviting ambience. Guests can savour globally inspired cuisine across its award-winning restaurants, unwind beside the stunning outdoor pool, rejuvenate at the luxurious spa or enjoy handcrafted cocktails at the elegant lounge. Every aspect of the hotel reflects Four Seasons' renowned commitment to intuitive service and exceptional attention to detail.\n\nBeyond the hotel, Bengaluru offers a unique blend of heritage, innovation and cosmopolitan charm. Beautiful parks, historic palaces, bustling shopping districts, craft breweries and a thriving culinary scene make India's Garden City an exciting destination to explore. Whether discovering the city's cultural treasures or attending important business engagements, Four Seasons Hotel Bengaluru provides a luxurious base from which to experience the very best of the city.",

    why: "Four Seasons Hotel Bengaluru effortlessly combines sophisticated luxury with personalised hospitality. Its elegant design, outstanding dining experiences and peaceful setting within the city make it an ideal choice for discerning travellers seeking comfort, convenience and world-class service.",

    exploreDestination: [
      {
        name: "Bangalore Palace",
        description:
          "Inspired by England's Windsor Castle, Bangalore Palace is one of the city's most iconic landmarks. Its magnificent Tudor-style architecture, royal interiors and beautifully maintained gardens provide fascinating insight into Bengaluru's royal heritage.",
      },
      {
        name: "Cubbon Park",
        description:
          "Spread across nearly 300 acres in the heart of the city, Cubbon Park is Bengaluru's green oasis. Lined with towering trees, flowering gardens and historic buildings, it offers a peaceful escape for leisurely walks, cycling and photography.",
      },
      {
        name: "Lalbagh Botanical Garden",
        description:
          "Renowned for its centuries-old trees, vibrant flower displays and the iconic Glass House, Lalbagh Botanical Garden is one of India's finest botanical gardens. It is particularly spectacular during its annual flower shows.",
      },
      {
        name: "ISKCON Temple Bangalore",
        description:
          "One of the largest ISKCON temples in the world, this impressive spiritual and architectural landmark combines traditional temple design with modern facilities. Visitors are welcomed by peaceful surroundings, devotional music and panoramic city views.",
      },
      {
        name: "UB City",
        description:
          "Bengaluru's premier luxury lifestyle destination, UB City features designer boutiques, fine dining restaurants, rooftop lounges and art galleries. It is the perfect place to experience the city's cosmopolitan character.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Kempegowda International Airport, Bengaluru",
          code: "BLR",
          distance: "Nearest airport",
        }
      ],
    },

    idealFor: [
      "Luxury Travellers",
      "Business Travellers",
      "Couples",
      "Families",
      "Corporate Executives",
      "Weekend Getaways",
      "Food & Lifestyle Enthusiasts",
      "Premium City Breaks"
    ],

    website: "https://www.fourseasons.com/bengaluru/",

    map: "https://www.google.com/maps/place/Four+Seasons+Hotel+Bengaluru+at+Embassy+ONE/@13.0196128,77.5828163,17z/data=!3m1!4b1!4m9!3m8!1s0x3bae16773125c81f:0xc672addd71b0266a!5m2!4m1!1i2!8m2!3d13.0196076!4d77.5853912!16s%2Fg%2F1tkqyq6c?entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "City Luxury",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "City Luxury",
  },

  {
    id: "gangtey-pinewood-resort-bhutan",
    name: "Gangtey Pinewood Resort, Bhutan",
    location: "Gangtey Valley, Bhutan",
    category: "bhutan",

    image: "/Assets/hotels/Gangtey Pinewood resort Bhutan.jpg",
    alt: "Gangtey Pinewood Resort, Bhutan, Gangtey Valley, Bhutan",

    accentClass: "hi--bhutan-heritage",

    intro:
      "Showcasing the untouched beauty of Bhutan's picturesque Phobjikha Valley, Gangtey Pinewood Resort is a charming mountain retreat that offers an authentic Himalayan experience amidst pristine pine forests and sweeping valley views. Built in traditional Bhutanese style with handcrafted timber architecture and warm interiors, the resort blends local heritage with contemporary comforts, creating a peaceful haven for travellers seeking tranquillity, culture and nature. Its idyllic location makes it an ideal base for discovering one of Bhutan's most enchanting regions.\n\nThe spacious rooms and suites feature elegant Bhutanese décor, handcrafted furnishings and large windows that frame breathtaking views of the surrounding mountains and the famous Phobjikha Valley. Guests can enjoy authentic Bhutanese cuisine, cosy evenings beside the fireplace, rejuvenating wellness therapies and leisurely walks through the surrounding forests. Thoughtful hospitality and a relaxed atmosphere ensure a memorable stay throughout the seasons.\n\nSituated close to Gangtey Monastery and the renowned Black-Necked Crane Conservation Area, the resort offers exceptional opportunities to experience Bhutan's rich cultural heritage and extraordinary biodiversity. Whether exploring scenic hiking trails, visiting ancient monasteries or witnessing the annual migration of the endangered black-necked cranes, every experience celebrates the natural beauty of the Kingdom of Bhutan.",

    why: "Gangtey Pinewood Resort offers an authentic Bhutanese mountain escape with spectacular valley views, traditional architecture and warm hospitality. Its location in the serene Phobjikha Valley makes it an ideal destination for nature lovers, birdwatchers and cultural explorers.",

    exploreDestination: [
      {
        name: "Gangtey Monastery",
        description:
          "Dating back to the 17th century, Gangtey Monastery is one of Bhutan's most important Nyingma monasteries. It overlooks the breathtaking Phobjikha Valley and is a centre of Buddhist learning and annual religious festivals.",
      },
      {
        name: "Phobjikha Valley",
        description:
          "One of Bhutan's most beautiful glacial valleys, Phobjikha is renowned for its sweeping landscapes, peaceful walking trails and as the winter home of the endangered black-necked crane.",
      },
      {
        name: "Black-Necked Crane Information Centre",
        description:
          "This conservation centre provides fascinating insights into the annual migration and protection of the black-necked cranes, one of Bhutan's most treasured bird species.",
      },
      {
        name: "Nature Walks & Cultural Trails",
        description:
          "Explore scenic forest paths, traditional villages and ancient prayer flags while experiencing the tranquil beauty of Gangtey and learning about the customs and daily life of the local community.",
      },
      {
        name: "Birdwatching & Himalayan Landscapes",
        description:
          "The Phobjikha Valley is a paradise for birdwatchers and photographers, offering opportunities to observe black-necked cranes, Himalayan birdlife and spectacular mountain scenery throughout the year.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Paro International Airport, Bhutan",
          code: "PBH",
          distance: "170 kms. / 4.5 hrs. approx. by road.",
        }
      ],
    },

    idealFor: [
      "Nature Lovers",
      "Birdwatchers",
      "Couples",
      "Honeymooners",
      "Cultural Explorers",
      "Luxury Travellers",
      "Photography Enthusiasts",
      "Himalayan Escapes"
    ],

    website: "https://hhlbhutan.bt/hotels-lodges/gangtey-pinewood-resort/",

    map: "https://www.google.com/maps/place/Gangtey+Pinewood+Resort/@27.4548156,90.1731137,17z/data=!4m10!1m2!2m1!1sgangtey+pinewood+resort+bhutan!3m6!1s0x375f457691eb642b:0x606ec96681056fa8!8m2!3d27.4548125!4d90.1756875!15sCh5nYW5ndGV5IHBpbmV3b29kIHJlc29ydCBiaHV0YW6SAQpsb2dfY2FiaW5z4AEA!16s%2Fg%2F11m6m579bk?entry=ttu&g_ep=EgoyMDI2MDcyMC4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Heritage",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Heritage",
  },

  {
    id: "hyatt-centric-mg-road-bengaluru",
    name: "Hyatt Centric MG Road Bengaluru",
    location: "Bengaluru, Karnataka",
    category: "india",

    image: "/Assets/hotels/Hyatt Centric, Bengaluru.webp",
    alt: "Hyatt Centric MG Road Bengaluru, Bengaluru, Karnataka",

    accentClass: "hi--india-city",

    intro:
      "Located in the heart of Bengaluru's vibrant central business district, Hyatt Centric MG Road Bengaluru is a stylish lifestyle hotel that places guests at the centre of the city's dynamic culture, shopping and culinary scene. Overlooking the tranquil Ulsoor Lake and just steps away from the iconic MG Road, the hotel combines contemporary design with warm hospitality, making it an excellent choice for both business and leisure travellers. Its prime location offers effortless access to Bengaluru's commercial hubs, upscale boutiques, entertainment districts and cultural landmarks.\n\nThe hotel's spacious rooms and suites are thoughtfully designed with modern interiors, comfortable furnishings and floor-to-ceiling windows that offer views of the city skyline or Ulsoor Lake. Guests can savour innovative global cuisine and locally inspired flavours at the hotel's signature restaurants, relax by the rooftop swimming pool, enjoy handcrafted cocktails with panoramic city views or rejuvenate at the wellness centre. The vibrant atmosphere, personalised service and modern amenities create a refreshing urban retreat in one of Bengaluru's most sought-after neighbourhoods.\n\nWhether you're attending corporate meetings, exploring Bengaluru's thriving café culture or discovering its rich heritage, Hyatt Centric MG Road offers the perfect base for experiencing India's Garden City. Its blend of comfort, convenience and contemporary luxury ensures every stay is both productive and memorable.",

    why: "Hyatt Centric MG Road perfectly captures Bengaluru's cosmopolitan spirit. Its central location, stylish interiors and easy access to the city's finest shopping, dining and cultural attractions make it an ideal choice for travellers who want to experience the city at its best.",

    exploreDestination: [
      {
        name: "MG Road",
        description:
          "The city's most iconic boulevard, MG Road is lined with premium shopping outlets, cafés, restaurants and entertainment venues. It remains one of Bengaluru's favourite destinations for shopping, dining and evening strolls.",
      },
      {
        name: "Ulsoor Lake",
        description:
          "One of Bengaluru's oldest and most picturesque lakes, Ulsoor Lake offers peaceful walking paths, boating opportunities and scenic views, providing a welcome escape from the city's fast-paced lifestyle.",
      },
      {
        name: "Cubbon Park",
        description:
          "Spread across nearly 300 acres, Cubbon Park is Bengaluru's green heart. Beautiful tree-lined avenues, heritage buildings and expansive lawns make it perfect for morning walks, picnics and outdoor recreation.",
      },
      {
        name: "Bangalore Palace",
        description:
          "Inspired by Windsor Castle, Bangalore Palace showcases magnificent Tudor-style architecture, royal interiors and beautifully landscaped gardens, offering visitors a glimpse into the city's regal history.",
      },
      {
        name: "Commercial Street",
        description:
          "A shopper's paradise, Commercial Street is famous for its lively atmosphere, fashion boutiques, handicrafts, jewellery stores and local eateries. It is one of Bengaluru's most popular destinations for retail therapy.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Nearest Airport: Kempegowda International Airport, Bengaluru",
          code: "BLR",
          distance: "Nearest airport",
        }
      ],
    },

    idealFor: [
      "Business Travellers",
      "Couples",
      "Families",
      "Luxury City Breaks",
      "Corporate Executives",
      "Shopping Holidays",
      "Food & Lifestyle Enthusiasts",
      "Weekend Getaways"
    ],

    website: "",

    map: "https://www.google.com/maps/place/Hyatt+Centric+MG+Road+Bangalore/@12.9734602,77.6192261,17z/data=!3m1!4b1!4m9!3m8!1s0x3bae169c86699da9:0x9647208b9140fe77!5m2!4m1!1i2!8m2!3d12.973455!4d77.621801!16s%2Fg%2F12hnrfdxy?entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "City Luxury",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "City Luxury",
  },

  {
    id: "hyatt-regency-kathmandu-nepal",
    name: "Hyatt Regency Kathmandu, Nepal",
    location: "Kathmandu, Nepal",
    category: "nepal",

    image: "/Assets/hotels/Hyatt Regency Kathmandu.webp",
    alt: "Hyatt Regency Kathmandu, Nepal, Kathmandu, Nepal",

    accentClass: "hi--india-mountain",

    intro:
      "Reflecting the rich cultural heritage of the Kathmandu Valley, Hyatt Regency Kathmandu is an elegant five-star retreat that combines contemporary luxury with traditional Newari architecture. Set amidst beautifully landscaped gardens near one of Nepal's most revered spiritual landmarks, the hotel offers a peaceful sanctuary while remaining conveniently close to the city's vibrant cultural attractions. Its refined ambience, exceptional hospitality and panoramic Himalayan backdrop make it an ideal destination for both leisure and business travellers.\n\nThe spacious rooms and suites feature sophisticated interiors, handcrafted Nepalese design elements and modern amenities that ensure a comfortable and memorable stay. Guests can indulge in authentic Nepalese and international cuisine, unwind by the outdoor swimming pool, rejuvenate at the luxurious spa, or enjoy wellness and fitness facilities designed for complete relaxation. Thoughtful service and world-class hospitality create an experience that is both enriching and effortless.\n\nIdeally located for exploring Kathmandu's UNESCO World Heritage Sites, bustling bazaars and centuries-old temples, Hyatt Regency Kathmandu serves as the perfect gateway to Nepal's fascinating culture, spirituality and Himalayan adventures.",

    why: "Hyatt Regency Kathmandu combines timeless Nepalese architecture with modern luxury, offering exceptional hospitality, tranquil surroundings and convenient access to the capital's most iconic cultural landmarks.",

    exploreDestination: [
      {
        name: "Boudhanath",
        description:
          "One of the world's largest Buddhist stupas and a UNESCO World Heritage Site, Boudhanath is the spiritual heart of Tibetan Buddhism in Nepal. Visitors can witness monks in prayer, colourful prayer flags and vibrant local cafés surrounding the stupa.",
      },
      {
        name: "Pashupatinath Temple",
        description:
          "Situated along the sacred Bagmati River, this revered Hindu temple complex is one of the most important pilgrimage sites dedicated to Lord Shiva and offers a profound insight into Nepal's religious traditions.",
      },
      {
        name: "Kathmandu Durbar Square",
        description:
          "A UNESCO World Heritage Site, Kathmandu Durbar Square showcases magnificent palaces, intricately carved temples and historic courtyards that reflect Nepal's royal legacy and architectural brilliance.",
      },
      {
        name: "Swayambhunath",
        description:
          "Perched atop a hill overlooking the city, the iconic Monkey Temple offers sweeping views of the Kathmandu Valley and is one of Nepal's oldest and most sacred Buddhist monuments.",
      },
      {
        name: "Heritage Walks & Local Experiences",
        description:
          "Explore Kathmandu's lively markets, artisan workshops and traditional Newari neighbourhoods while discovering the city's rich history, vibrant cuisine and enduring cultural traditions.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Tribhuvan International Airport, Nepal",
          code: "KTM",
          distance: "Nearest airport",
        }
      ],
    },

    idealFor: [
      "Luxury Travellers",
      "Couples",
      "Families",
      "Cultural Explorers",
      "Business Travellers",
      "Wellness Seekers",
      "Heritage Holidays",
      "Nepal City Escapes"
    ],

    website: "https://www.hyatt.com/hyatt-regency/en-US/kathm-hyatt-regency-kathmandu",

    map: "https://www.google.com/maps/place/Hyatt+Regency+Kathmandu/@27.7220867,85.3543531,17z/data=!4m9!3m8!1s0x39eb1bd88a7dce63:0x2f767a36da816bb5!5m2!4m1!1i2!8m2!3d27.722082!4d85.356928!16s%2Fm%2F010vtzqr?entry=ttu&g_ep=EgoyMDI2MDcyMC4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Mountain Retreat",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Mountain Retreat",
  },

  {
    id: "islas-ridge-kodaikanal",
    name: "Isla's Ridge, Kodaikanal",
    location: "Kodaikanal, Tamil Nadu",
    category: "india",

    image: "/Assets/hotels/The Isla's ridge.jpg",
    alt: "Isla's Ridge, Kodaikanal, Kodaikanal, Tamil Nadu",

    accentClass: "hi--india-hills",

    intro:
      "Surrounded by the mist-covered hills and lush forests of Kodaikanal, Isla's Ridge is an intimate boutique retreat that offers a perfect blend of contemporary comfort and the timeless charm of the Western Ghats. Perched amidst breathtaking mountain landscapes, the property provides a peaceful escape where cool climates, scenic vistas and personalised hospitality create an unforgettable highland experience. Whether seeking a romantic getaway or a relaxing nature retreat, Isla's Ridge offers an idyllic sanctuary away from the bustle of everyday life.\n\nThe elegantly designed rooms and suites feature warm interiors, modern amenities and expansive windows that frame panoramic views of the surrounding valleys and forests. Guests can savour fresh regional cuisine prepared with locally sourced ingredients, enjoy leisurely evenings around a bonfire, explore beautifully landscaped gardens or simply relax while soaking in the crisp mountain air. The property's serene ambience and attentive service ensure a rejuvenating stay throughout the year.\n\nIdeally positioned for exploring Kodaikanal's iconic viewpoints, tranquil lakes, waterfalls and walking trails, Isla's Ridge serves as an excellent base for discovering one of South India's most beloved hill stations. Whether enjoying scenic hikes, boating on the lake or experiencing the region's rich natural beauty, guests are treated to an authentic mountain retreat.",

    why: "Isla's Ridge offers spectacular views, peaceful surroundings and personalised boutique hospitality. Its elegant accommodation and easy access to Kodaikanal's scenic attractions make it an ideal destination for a relaxing mountain holiday.",

    exploreDestination: [
      {
        name: "Kodaikanal Lake",
        description:
          "The heart of the hill station, Kodaikanal Lake is perfect for boating, cycling and leisurely walks along its scenic promenade. Surrounded by towering trees and colourful gardens, it is one of the town's most popular attractions.",
      },
      {
        name: "Coaker's Walk",
        description:
          "This picturesque cliffside pathway offers breathtaking panoramic views of the valleys and plains below. Early mornings often reveal a magical sea of clouds, making it a favourite spot for photography.",
      },
      {
        name: "Pillar Rocks",
        description:
          "Rising dramatically above the valley, these towering granite formations are among Kodaikanal's most iconic landmarks. The viewpoint provides spectacular vistas of the surrounding mountains and forests.",
      },
      {
        name: "Bryant Park",
        description:
          "Located near Kodaikanal Lake, Bryant Park is renowned for its beautifully maintained gardens, vibrant flower displays and diverse collection of ornamental plants, making it a delightful place for a leisurely stroll.",
      },
      {
        name: "Silver Cascade Falls",
        description:
          "One of the region's best-known waterfalls, Silver Cascade tumbles gracefully down rocky cliffs amidst lush greenery. It is a popular stop for visitors travelling into the hill station.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Madurai Airport",
          code: "IXM",
          distance: "90 kms / 2.5 hrs. approx. by road.",
        },
        {
          name: "Coimbatore International Airport",
          code: "CJB",
          distance: "170 kms. / 5 hrs. approx. by road.",
        }
      ],
    },

    idealFor: [
      "Couples",
      "Honeymooners",
      "Nature Lovers",
      "Mountain Holidays",
      "Families",
      "Boutique Luxury Travellers",
      "Wellness Retreats",
      "Weekend Getaways"
    ],

    website: "",

    map: "https://www.google.com/maps/place/Isla's+Ridge+CGH/@10.2824162,77.7431745,17z/data=!3m1!4b1!4m9!3m8!1s0x3b075b0022c3c3cd:0xe7b6c9498d3a9440!5m2!4m1!1i2!8m2!3d10.2824109!4d77.7457494!16s%2Fg%2F11vpzfz8p5?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Hill Stations",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Hill Stations",
  },

  {
    id: "jetwing-beach-sri-lanka",
    name: "Jetwing Beach, Sri Lanka",
    location: "Negombo, Sri Lanka",
    category: "srilanka",

    image: "/Assets/hotels/Jetwing Beach Resort, Sri Lanka.jpg",
    alt: "Jetwing Beach, Sri Lanka, Negombo, Sri Lanka",

    accentClass: "hi--india-coast",

    intro:
      "Embracing the golden shores of Sri Lanka's western coastline, Jetwing Beach is an iconic luxury beachfront resort where tropical elegance, contemporary design and warm Sri Lankan hospitality come together effortlessly. Designed by the legendary architect Geoffrey Bawa, the resort reflects a harmonious blend of open spaces, natural materials and breathtaking ocean views, creating a relaxing sanctuary for travellers seeking an authentic island escape. Whether it's a leisurely beach holiday or a romantic retreat, Jetwing Beach offers an unforgettable stay by the Indian Ocean.\n\nThe spacious rooms and suites feature stylish interiors, modern amenities and private balconies that overlook the sea or beautifully landscaped gardens. Guests can savour an exceptional selection of Sri Lankan and international cuisine, unwind beside the expansive swimming pools, rejuvenate with holistic spa treatments or simply relax on the pristine beach while enjoying spectacular sunsets. The attentive service and inviting atmosphere ensure every stay is both comfortable and memorable.\n\nConveniently located near Negombo and within easy reach of Sri Lanka's international airport, Jetwing Beach serves as an excellent gateway to the island's coastal attractions, vibrant fishing communities and rich cultural heritage. From lagoon cruises and water sports to historic landmarks and local markets, guests can experience the very best of Sri Lanka's west coast.",

    why: "Jetwing Beach offers a refined beachfront experience with timeless architecture, exceptional hospitality and stunning views of the Indian Ocean. Its convenient location and tranquil ambience make it one of Sri Lanka's most sought-after coastal retreats.",

    exploreDestination: [
      {
        name: "Negombo Beach",
        description:
          "A beautiful stretch of golden sand, Negombo Beach is perfect for leisurely walks, sunset views, water sports and enjoying the relaxed coastal atmosphere.",
      },
      {
        name: "Negombo Lagoon",
        description:
          "Renowned for its rich biodiversity, Negombo Lagoon offers scenic boat cruises through mangroves, excellent birdwatching opportunities and insights into the region's traditional fishing culture.",
      },
      {
        name: "Dutch Fort",
        description:
          "Built during the Dutch colonial era, this historic landmark offers visitors a glimpse into Sri Lanka's colonial past and the town's maritime heritage.",
      },
      {
        name: "St. Mary's Church",
        description:
          "One of Sri Lanka's most impressive Catholic churches, St. Mary's Church is admired for its striking architecture, colourful ceiling frescoes and historical significance.",
      },
      {
        name: "Local Fish Market Experience",
        description:
          "Visit Negombo's bustling fish market to witness the daily catch being brought ashore and experience the vibrant atmosphere of one of Sri Lanka's largest traditional fishing communities.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Bandaranaike International Airport, Sri Lanka",
          code: "CMB",
          distance: "Nearest airport",
        }
      ],
    },

    idealFor: [
      "Beach Holidays",
      "Couples",
      "Honeymooners",
      "Families",
      "Luxury Travellers",
      "Wellness Seekers",
      "Romantic Getaways",
      "Sri Lanka Coastal Escapes"
    ],

    website: "https://www.jetwinghotels.com/jetwingbeach/",

    map: "https://www.google.com/maps/place/Jetwing+Beach/@7.2439848,79.8064862,13z/data=!4m9!3m8!1s0x3ae2ee93b81bfe0f:0xed44bdcb739b0509!5m2!4m1!1i2!8m2!3d7.2439795!4d79.8418914!16s%2Fg%2F1tk66386?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D-",

    tags: [
      "Beach & Coast",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Beach & Coast",
  },

  {
    id: "kaav-safari-lodge-kabini",
    name: "KAAV Safari Lodge, Kabini",
    location: "Kabini, Karnataka",
    category: "india",

    image: "/Assets/hotels/Kaav, Kabini.jpg",
    alt: "KAAV Safari Lodge, Kabini, Kabini, Karnataka",

    accentClass: "hi--india-wildlife",

    intro:
      "Drawing inspiration from the rich biodiversity of Kabini's wilderness, KAAV Safari Lodge is an intimate luxury retreat designed for travellers seeking meaningful wildlife experiences in one of South India's most celebrated safari destinations. Blending contemporary comfort with eco-conscious design, the lodge offers a peaceful sanctuary where nature takes centre stage. Expansive forests, serene backwaters and abundant wildlife create an unforgettable setting for adventure, relaxation and discovery.\n\nThe spacious cottages and suites are thoughtfully designed with elegant interiors, natural materials and modern amenities, ensuring a comfortable stay while maintaining a close connection with the surrounding landscape. Guests can savour locally inspired cuisine prepared with fresh seasonal ingredients, relax after exciting game drives, enjoy birdwatching around the property or unwind beneath star-filled skies. Personalised hospitality and expertly curated experiences make every stay immersive and memorable.\n\nPerfectly located near the famed Kabini Wildlife Sanctuary, the lodge serves as an excellent base for exploring the forests of Nagarhole National Park and the Kabini backwaters. Whether tracking elusive big cats, photographing elephants or enjoying peaceful boat safaris, KAAV Safari Lodge promises an exceptional wildlife escape.",

    why: "KAAV Safari Lodge combines stylish accommodation, personalised hospitality and exceptional access to Kabini's rich wildlife. Its intimate atmosphere and immersive safari experiences make it an ideal retreat for nature lovers and wildlife enthusiasts.",

    exploreDestination: [
      {
        name: "Kabini Wildlife Sanctuary",
        description:
          "Part of the renowned Nagarhole Tiger Reserve, Kabini is famous for its thriving populations of elephants, leopards, Bengal tigers, dholes, gaur and over 300 species of birds. Guided jeep and boat safaris provide remarkable wildlife viewing opportunities.",
      },
      {
        name: "Kabini River",
        description:
          "The picturesque Kabini River is the lifeline of the region and offers scenic boat safaris where visitors can observe elephants, crocodiles, otters and an abundance of birdlife along its tranquil banks.",
      },
      {
        name: "Nagarhole National Park",
        description:
          "A UNESCO-recognised part of the Nilgiri Biosphere Reserve, Nagarhole National Park is celebrated for its dense forests, rich biodiversity and exciting safari experiences throughout the year.",
      },
      {
        name: "Nature Walks & Birdwatching",
        description:
          "Explore the forests surrounding the lodge with experienced naturalists while discovering native flora, butterflies and numerous resident and migratory bird species that inhabit the Kabini landscape.",
      },
      {
        name: "Tribal & Village Experiences",
        description:
          "Visit nearby villages to learn about the traditions, culture and sustainable lifestyles of local communities that have coexisted with Kabini's forests for generations.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Mysore Airport",
          code: "",
          distance: "80 kms. / 2 hrs approx. by road.",
        },
        {
          name: "Kempegowda International Airport, Bengaluru",
          code: "BLR",
          distance: "250 kms. / 4.5 hrs. approx. by road.",
        }
      ],
    },

    idealFor: [
      "Wildlife Enthusiasts",
      "Luxury Safari Holidays",
      "Couples",
      "Families",
      "Nature Lovers",
      "Birdwatchers",
      "Wildlife Photographers",
      "Adventure Travellers"
    ],

    website: "https://kaav.com/",

    map: "https://www.google.com/maps/place/KAAV+Safari+Lodge,+Kabini/@11.9581508,76.2494294,17z/data=!3m1!4b1!4m9!3m8!1s0x3ba5efcad1afcced:0x51608722b62bdd50!5m2!4m1!1i2!8m2!3d11.9581508!4d76.2494294!16s%2Fg%2F1tg_vj7h?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Wildlife",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Wildlife",
  },

  {
    id: "kahanda-kanda-sri-lanka",
    name: "Kahanda Kanda, Sri Lanka",
    location: "Galle, Sri Lanka",
    category: "srilanka",

    image: "/Assets/hotels/Kahanda Kanda, Sri Lanka.jpg",
    alt: "Kahanda Kanda, Sri Lanka, Galle, Sri Lanka",

    accentClass: "hi--india-coast",

    intro:
      "Inspired by the lush tea country and timeless charm of southern Sri Lanka, Kahanda Kanda is an exclusive boutique retreat that offers refined luxury amidst rolling plantations and tropical forests. Located just a short drive from the historic coastal city of Galle, the property blends contemporary elegance with Sri Lankan heritage, creating an intimate sanctuary for travellers seeking privacy, tranquillity and personalised hospitality. With beautifully landscaped gardens and panoramic countryside views, every stay is designed to inspire relaxation and rejuvenation.\n\nThe individually designed villas feature sophisticated interiors, private plunge pools, spacious outdoor living areas and carefully curated artwork that reflects the island's rich cultural heritage. Guests can indulge in exceptional farm-to-table cuisine prepared with fresh local ingredients, unwind with wellness treatments, practise yoga in peaceful surroundings or simply relax while taking in the beauty of the surrounding tea estates. The attentive service and intimate atmosphere ensure an unforgettable boutique experience.\n\nPerfectly positioned for exploring Sri Lanka's southern coast, Kahanda Kanda provides easy access to UNESCO-listed heritage sites, golden beaches, wildlife reserves and vibrant local culture. Whether discovering colonial architecture, enjoying coastal adventures or escaping into nature, the retreat offers the perfect balance of luxury and authentic Sri Lankan experiences.",

    why: "Kahanda Kanda offers an effortlessly elegant boutique experience with beautifully designed villas, personalised service and a serene setting amidst Sri Lanka's tea country. Its intimate atmosphere makes it one of the island's most exclusive luxury hideaways.",

    exploreDestination: [
      {
        name: "Galle Fort",
        description:
          "A UNESCO World Heritage Site, Galle Fort is a beautifully preserved colonial fortress featuring cobbled streets, charming cafés, boutique shops, museums and historic buildings overlooking the Indian Ocean.",
      },
      {
        name: "Unawatuna Beach",
        description:
          "One of Sri Lanka's most popular beaches, Unawatuna is known for its golden sands, turquoise waters and lively beachfront restaurants. It is ideal for swimming, snorkelling and sunset walks.",
      },
      {
        name: "Koggala Lake",
        description:
          "Surrounded by mangroves and small islands, Koggala Lake offers scenic boat cruises where visitors can experience Sri Lanka's rich birdlife, cinnamon plantations and peaceful rural landscapes.",
      },
      {
        name: "Martin Wickramasinghe Folk Museum",
        description:
          "Dedicated to one of Sri Lanka's most celebrated authors, the museum showcases traditional village life, local craftsmanship and the island's rich cultural heritage.",
      },
      {
        name: "Tea Estate & Village Experiences",
        description:
          "Discover the traditions of Sri Lanka's tea-growing regions through guided plantation visits, countryside walks and interactions with local communities, offering an authentic insight into rural life and tea cultivation.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Bandaranaike International Airport, Sri Lanka",
          code: "",
          distance: "160 kms. / 2.5 hrs. approx. by road.",
        }
      ],
    },

    idealFor: [
      "Couples",
      "Honeymooners",
      "Boutique Luxury Travellers",
      "Wellness Seekers",
      "Nature Lovers",
      "Slow Travel Enthusiasts",
      "Cultural Explorers",
      "Romantic Sri Lanka Getaways"
    ],

    website: "https://www.kkcollection.com/kahanda-kanda/",

    map: "https://www.google.com/maps/place/Kahanda+Kanda+Galle/@6.019906,80.3380853,17z/data=!4m9!3m8!1s0x3ae16c5b279e2c85:0xc0a3aac561115a94!5m2!4m1!1i2!8m2!3d6.0199007!4d80.3406602!16s%2Fg%2F1tgvc14j?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Beach & Coast",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Beach & Coast",
  },

  {
    id: "kahani-paradise-gokarna",
    name: "Kahani Paradise, Gokarna",
    location: "Gokarna, Karnataka",
    category: "india",

    image: "/Assets/hotels/Kahani Paradise, Gokarna.avif",
    alt: "Kahani Paradise, Gokarna, Gokarna, Karnataka",

    accentClass: "hi--india-coast",

    intro:
      "Perched on a secluded cliff overlooking the Arabian Sea, Kahani Paradise is an exclusive boutique retreat that offers one of the most tranquil coastal escapes in Gokarna. Surrounded by lush tropical forests and breathtaking ocean views, the property is designed for travellers seeking privacy, serenity and an intimate connection with nature. Far from the crowds, Kahani Paradise blends contemporary luxury with the laid-back charm of Karnataka's picturesque coastline, creating an idyllic setting for relaxation and rejuvenation.\n\nThe resort features elegantly designed villas and suites that harmonise with the natural landscape, offering spacious interiors, handcrafted furnishings and panoramic views of the sea or surrounding greenery. Guests can savour fresh coastal cuisine prepared with locally sourced ingredients, unwind by the infinity pool, enjoy yoga and wellness experiences or simply relax while listening to the soothing sound of the waves. The personalised hospitality and peaceful ambience make every stay truly memorable.\n\nBeyond the resort lies Gokarna, a destination known for its pristine beaches, sacred temples and unspoilt natural beauty. Whether exploring hidden coves, embarking on scenic coastal hikes, enjoying spectacular sunsets or discovering the town's rich spiritual heritage, Kahani Paradise serves as an exceptional base for experiencing one of India's most charming seaside destinations.",

    why: "Kahani Paradise offers an intimate luxury experience with spectacular cliff-top views of the Arabian Sea. Its secluded setting, personalised hospitality and peaceful atmosphere make it an ideal retreat for travellers looking to escape into nature.",

    exploreDestination: [
      {
        name: "Om Beach",
        description:
          "Named after its distinctive shape resembling the sacred 'Om' symbol, Om Beach is one of Gokarna's most famous beaches. It is ideal for swimming, kayaking, café hopping and watching unforgettable sunsets over the Arabian Sea.",
      },
      {
        name: "Kudle Beach",
        description:
          "Surrounded by green hills, Kudle Beach is known for its relaxed atmosphere, golden sands and beachfront cafés. It is a favourite destination for yoga enthusiasts, backpackers and travellers seeking peaceful coastal walks.",
      },
      {
        name: "Mahabaleshwar Temple",
        description:
          "Dedicated to Lord Shiva, this ancient temple is one of the most revered pilgrimage sites in South India. Its Dravidian-style architecture and deep spiritual significance attract devotees and visitors throughout the year.",
      },
      {
        name: "Half Moon Beach",
        description:
          "Accessible by boat or a scenic coastal trek, Half Moon Beach is a secluded paradise known for its crystal-clear waters, rocky shoreline and peaceful surroundings, making it ideal for nature lovers.",
      },
      {
        name: "Paradise Beach",
        description:
          "One of Gokarna's most secluded beaches, Paradise Beach offers pristine sands, turquoise waters and a tranquil atmosphere. It is perfect for those looking to enjoy untouched natural beauty away from the crowds.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Goa International Airport, Dabolim",
          code: "GOI",
          distance: "155 kms. / 3.5 hrs. approx. by road.",
        },
        {
          name: "Manohar International Airport, Goa",
          code: "",
          distance: "155 kms / 3.5 hrs. approx. by road.",
        }
      ],
    },

    idealFor: [
      "Couples",
      "Honeymooners",
      "Boutique Luxury Travellers",
      "Nature Lovers",
      "Beach Holidays",
      "Wellness Retreats",
      "Romantic Getaways",
      "Slow Travel Experiences"
    ],

    website: "https://www.kahaniparadise.com/",

    map: "https://www.google.com/maps/place/Khem+Villas/@26.0624847,76.4349794,17z/data=!4m9!3m8!1s0x396e20b6c8210c35:0xa8835d521c0b3e13!5m2!4m1!1i2!8m2!3d26.0624799!4d76.4375543!16s%2Fg%2F11r8fb0g4?entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Beach & Coast",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Beach & Coast",
  },

  {
    id: "kara-cochin",
    name: "Kara, Cochin",
    location: "Kochi, Kerala",
    category: "india",

    image: "/Assets/hotels/KaRa, Kochi.webp",
    alt: "Kara, Cochin, Kochi, Kerala",

    accentClass: "hi--india-city",

    intro:
      "Framed by Kochi's picturesque waterfront and historic neighbourhoods, Kara is a contemporary boutique retreat that blends modern elegance with the timeless charm of Kerala's historic port city. Designed for travellers seeking a refined and intimate stay, the hotel combines stylish interiors, warm hospitality and thoughtfully curated experiences, making it an ideal base for exploring the rich cultural heritage and cosmopolitan character of Cochin.\n\nThe tastefully designed rooms and suites feature contemporary décor, premium amenities and comfortable living spaces that cater to both leisure and business travellers. Guests can enjoy an array of culinary delights showcasing authentic Kerala flavours alongside international favourites, relax in inviting common spaces or unwind after a day of sightseeing with attentive, personalised service. The hotel's understated luxury and welcoming ambience create a memorable stay in one of South India's most fascinating destinations.\n\nConveniently located close to Kochi's historic landmarks, bustling shopping districts and scenic waterfront, Kara offers easy access to the city's diverse attractions. Whether discovering centuries-old colonial architecture, cruising through the backwaters or experiencing Kerala's renowned cuisine and culture, guests are perfectly positioned to experience the very best of Cochin.",

    why: "Kara, Cochin combines contemporary comfort with easy access to Kochi's rich history and vibrant cultural scene. Its boutique atmosphere, personalised hospitality and convenient location make it an excellent choice for exploring Kerala's historic port city.",

    exploreDestination: [
      {
        name: "Fort Kochi",
        description:
          "The historic heart of Kochi is renowned for its colonial architecture, charming streets, art galleries and quaint cafés. Walking through Fort Kochi offers visitors a fascinating journey through the city's Portuguese, Dutch and British heritage.",
      },
      {
        name: "Chinese Fishing Nets",
        description:
          "These iconic cantilevered fishing nets have become synonymous with Kochi's waterfront. Watching local fishermen operate them, especially at sunset, is one of the city's most memorable experiences.",
      },
      {
        name: "Mattancherry Palace",
        description:
          "Also known as the Dutch Palace, this beautifully preserved landmark houses remarkable Kerala murals, royal artefacts and exhibits showcasing the history of the Cochin royal family.",
      },
      {
        name: "Jew Town",
        description:
          "A vibrant heritage precinct famous for its antique stores, spice markets, handicraft boutiques and charming cafés, Jew Town offers a unique blend of history, culture and shopping.",
      },
      {
        name: "Marine Drive",
        description:
          "A picturesque promenade overlooking the backwaters, Marine Drive is a favourite spot for evening walks, boat cruises and enjoying panoramic views of Kochi's skyline.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Nearest Airport: Cochin International Airport",
          code: "",
          distance: "Nearest airport",
        }
      ],
    },

    idealFor: [
      "Couples",
      "Families",
      "Business Travellers",
      "Boutique Luxury Seekers",
      "Heritage Travellers",
      "Cultural Explorers",
      "Food Enthusiasts",
      "Kerala City Breaks"
    ],

    website: "https://www.atkara.com/",

    map: "https://www.google.com/maps/place/Kara+Hotel+Fort+Kochi/@9.9648856,76.2385192,17z/data=!4m9!3m8!1s0x3b086dd08078ce8f:0xacf53d267f58088e!5m2!4m1!1i2!8m2!3d9.9648803!4d76.2410941!16s%2Fg%2F11wv26yrhk?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "City Luxury",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "City Luxury",
  },

  {
    id: "khem-villas-ranthambore",
    name: "Khem Villas, Ranthambore",
    location: "Ranthambore, Rajasthan",
    category: "india",

    image: "/Assets/hotels/Khem Villas, Rajasthan.jpg",
    alt: "Khem Villas, Ranthambore, Ranthambore, Rajasthan",

    accentClass: "hi--india-wildlife",

    intro:
      "Bordering the wilderness of Ranthambore National Park, Khem Villas is an intimate eco-luxury retreat that offers an authentic safari experience in one of India's most celebrated tiger landscapes. Surrounded by natural forests, open grasslands and peaceful lakes, the lodge has been thoughtfully designed to blend seamlessly with its environment while providing guests with exceptional comfort. With its strong commitment to conservation, sustainability and personalised hospitality, Khem Villas offers a tranquil escape where wildlife and nature take centre stage.\n\nThe property's charming cottages, luxury tents and private villas are designed using natural materials and feature spacious interiors, elegant décor and private verandas overlooking the surrounding wilderness. Guests can savour delicious regional and international cuisine prepared with fresh local ingredients, unwind beside the swimming pool, enjoy nature walks or simply relax while listening to the sounds of the forest. Every experience is carefully curated to encourage a deeper appreciation of Rajasthan's remarkable biodiversity and rural heritage.\n\nKhem Villas serves as an excellent gateway to Ranthambore National Park, renowned for its thriving population of Bengal tigers, ancient ruins and diverse wildlife. Whether embarking on thrilling jeep safaris, exploring centuries-old forts or enjoying peaceful evenings beneath the stars, guests are treated to an unforgettable wilderness experience that perfectly balances adventure with comfort.",

    why: "Khem Villas offers an intimate safari experience with a strong focus on sustainability, conservation and personalised hospitality. Its peaceful setting and close proximity to Ranthambore National Park make it an exceptional retreat for wildlife enthusiasts and nature lovers alike.",

    exploreDestination: [
      {
        name: "Ranthambore National Park",
        description:
          "One of India's premier tiger reserves, Ranthambore National Park is famous for its Bengal tigers, leopards, sloth bears, marsh crocodiles and over 300 species of birds. Guided jeep safaris provide unforgettable opportunities to witness wildlife in its natural habitat.",
      },
      {
        name: "Ranthambore Fort",
        description:
          "A UNESCO World Heritage Site, Ranthambore Fort stands majestically atop a hill within the national park. Dating back to the 10th century, the fort offers panoramic views of the surrounding forests and houses several ancient temples.",
      },
      {
        name: "Padam Talao",
        description:
          "The largest lake within the national park, Padam Talao is a favourite location for spotting wildlife, particularly during the dry season. It is also home to the picturesque Jogi Mahal, one of Ranthambore's iconic landmarks.",
      },
      {
        name: "Village & Nature Walks",
        description:
          "Guided walks around the lodge and nearby villages provide guests with insights into Rajasthan's rural traditions, native flora, birdlife and the harmonious relationship between local communities and the surrounding wilderness.",
      },
      {
        name: "Conservation & Wildlife Experiences",
        description:
          "Khem Villas offers opportunities to learn about tiger conservation, habitat preservation and sustainable tourism through interactions with experienced naturalists, making every stay both educational and inspiring.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Jaipur International Airport",
          code: "JAI",
          distance: "170 kms / 3.5 hrs. approx. by road",
        }
      ],
    },

    idealFor: [
      "Wildlife Enthusiasts",
      "Safari Holidays",
      "Couples",
      "Honeymooners",
      "Nature Lovers",
      "Wildlife Photographers",
      "Families",
      "Sustainable Luxury Travellers"
    ],

    website: "https://www.khemvillas.com/",

    map: "https://www.google.com/maps/place/Khem+Villas/@26.0624847,76.4349794,17z/data=!4m9!3m8!1s0x396e20b6c8210c35:0xa8835d521c0b3e13!5m2!4m1!1i2!8m2!3d26.0624799!4d76.4375543!16s%2Fg%2F11r8fb0g4?entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Wildlife",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Wildlife",
  },

  {
    id: "kurja-jawai-rajasthan",
    name: "Kurja Jawai, Rajasthan",
    location: "Jawai, Rajasthan",
    category: "india",

    image: "/Assets/hotels/Kurja Jawai, Rajasthan.webp",
    alt: "Kurja Jawai, Rajasthan, Jawai, Rajasthan",

    accentClass: "hi--india-heritage",

    intro:
      "Home to one of Rajasthan's most remarkable wildlife landscapes, Kurja Jawai is an intimate boutique retreat that celebrates the extraordinary harmony between nature, wildlife and local culture. Located in the remarkable Jawai landscape—where free-ranging leopards share the terrain with the indigenous Rabari community—the property offers a rare opportunity to experience one of India's most captivating wilderness destinations. Designed with understated elegance and a strong commitment to sustainability, Kurja Jawai provides a peaceful escape where luxury and the natural world exist in perfect balance.\n\nThe thoughtfully designed luxury tents and suites blend contemporary comforts with earthy textures and panoramic views of the surrounding hills. Guests can enjoy freshly prepared regional cuisine, embark on expertly guided wildlife safaris, relax around the campfire beneath star-filled skies or simply take in the serenity of the dramatic landscape. Warm hospitality and personalised experiences ensure every stay is both authentic and unforgettable.\n\nPerfectly positioned for exploring the unique ecosystem of Jawai, the retreat offers unforgettable encounters with wildlife, vibrant local traditions and breathtaking scenery. Whether tracking elusive leopards, discovering ancient temples or experiencing the timeless lifestyle of Rajasthan's pastoral communities, Kurja Jawai promises an enriching wilderness escape unlike any other.",

    why: "Kurja Jawai combines understated luxury with one of Rajasthan's most remarkable wildlife landscapes. Its personalised safari experiences, sustainable philosophy and spectacular natural setting create an unforgettable retreat for nature lovers and adventure seekers.",

    exploreDestination: [
      {
        name: "Jawai Leopard Conservation Reserve",
        description:
          "One of India's premier destinations for leopard sightings, Jawai is renowned for the peaceful coexistence of wildlife and local communities. Guided safaris offer excellent opportunities to observe leopards, hyenas, crocodiles and a rich diversity of birdlife.",
      },
      {
        name: "Jawai Dam",
        description:
          "Surrounded by striking granite hills, Jawai Dam is a haven for migratory birds, marsh crocodiles and breathtaking sunsets. It is also one of the best locations for nature photography in the region.",
      },
      {
        name: "Rabari Cultural Experiences",
        description:
          "Meet the semi-nomadic Rabari community and discover their centuries-old traditions, distinctive attire and deep connection with the Jawai landscape through guided village visits and cultural interactions.",
      },
      {
        name: "Granite Hill Excursions",
        description:
          "Explore the dramatic granite outcrops that define Jawai's unique terrain. These scenic viewpoints offer sweeping panoramas of the wilderness and are ideal for sunrise and sunset experiences.",
      },
      {
        name: "Birdwatching & Nature Walks",
        description:
          "The Jawai region supports an impressive variety of resident and migratory birds. Guided walks introduce guests to the area's rich biodiversity, fascinating geology and native flora.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Maharana Pratap Airport, Udaipur",
          code: "UDR",
          distance: "150 kms. / 3 hrs. approx. by road.",
        },
        {
          name: "Jodhpur Airport",
          code: "JDH",
          distance: "150 kms. / 3 hrs. approx. by road.",
        }
      ],
    },

    idealFor: [
      "Wildlife Enthusiasts",
      "Luxury Safari Travellers",
      "Couples",
      "Honeymooners",
      "Nature Lovers",
      "Wildlife Photographers",
      "Adventure Seekers",
      "Slow Travel Experiences"
    ],

    website: "https://www.kurjajawai.com/",

    map: "https://www.google.com/maps/place/KURJA+Jawai+%7C+A+Luxury+Jungle+Camp+In+Jawai/@25.1156629,73.2036234,17z/data=!4m9!3m8!1s0x39429a0d00000001:0x9a76b9aeef90c7da!5m2!4m1!1i2!8m2!3d25.1156581!4d73.2061983!16s%2Fg%2F11vk79xjlb?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Heritage",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Heritage",
  },

  {
    id: "mansao-curtorim-goa",
    name: "Mansao Curtorim, Goa",
    location: "South Goa",
    category: "india",

    image: "/Assets/hotels/Mansao Curtorim, Goa.jpg",
    alt: "Mansao Curtorim, Goa, South Goa",

    accentClass: "hi--india-coast",

    intro:
      "Tucked away in the charming village of Curtorim in South Goa, Mansao Curtorim is an elegant heritage boutique retreat that offers a refreshing escape from the bustling beach crowds. Set within a beautifully restored Portuguese-era mansion, the property exudes old-world charm with its graceful architecture, antique furnishings and lush tropical surroundings. Blending Goan heritage with modern comforts, Mansao Curtorim invites guests to experience the slower, more authentic side of Goa.\n\nThe thoughtfully designed rooms retain the character of the historic mansion while offering contemporary amenities for a relaxing stay. High ceilings, vintage décor, handcrafted details and serene garden views create an atmosphere of timeless elegance. Guests can savour authentic Goan and international cuisine, unwind by the swimming pool, explore the beautifully landscaped grounds or simply relax amidst the peaceful ambience of this heritage estate. Warm, personalised hospitality ensures that every stay feels intimate and memorable.\n\nIdeally located for discovering South Goa's pristine beaches, colonial churches, spice plantations and scenic countryside, Mansao Curtorim serves as an excellent base for travellers looking to explore Goa beyond its popular coastal hotspots. Whether you're seeking a romantic getaway, a cultural holiday or a tranquil retreat, the property promises an enriching and unforgettable experience.",

    why: "Mansao Curtorim beautifully showcases Goa's Portuguese heritage through its elegant architecture, peaceful surroundings and personalised hospitality. It offers the perfect balance between cultural exploration and relaxed luxury.",

    exploreDestination: [
      {
        name: "Colva Beach",
        description:
          "One of South Goa's most popular beaches, Colva Beach is known for its long stretch of golden sand, swaying palm trees and vibrant beachside cafés. It is ideal for leisurely walks, water sports and spectacular sunsets.",
      },
      {
        name: "Margao",
        description:
          "The cultural and commercial heart of South Goa, Margao is home to colourful Portuguese architecture, bustling local markets, heritage churches and authentic Goan eateries that offer a glimpse into everyday Goan life.",
      },
      {
        name: "Shri Shantadurga Temple",
        description:
          "Dedicated to Goddess Shantadurga, this beautiful temple is renowned for its distinctive Indo-Portuguese architecture, peaceful surroundings and spiritual significance.",
      },
      {
        name: "Sahakari Spice Farm",
        description:
          "A visit to one of Goa's famous spice plantations offers an opportunity to explore lush tropical gardens, learn about traditional spice cultivation and enjoy authentic Goan cuisine amidst nature.",
      },
      {
        name: "Cabo de Rama Fort",
        description:
          "Perched dramatically on a cliff overlooking the Arabian Sea, Cabo de Rama Fort offers breathtaking coastal views and fascinating stories from Goa's Portuguese and pre-colonial history.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Nearest Airport: Goa International Airport, Dabolim",
          code: "",
          distance: "Nearest airport",
        },
        {
          name: "Manohar International Airport, GOA",
          code: "",
          distance: "Nearest airport",
        }
      ],
    },

    idealFor: [
      "Heritage Travellers",
      "Couples",
      "Honeymooners",
      "Boutique Luxury Seekers",
      "Families",
      "Cultural Explorers",
      "Slow Travel Experiences",
      "South Goa Holidays"
    ],

    website: "https://www.cghearth.com/Mansao-Curtorim/",

    map: "https://www.google.com/maps/place/Mansao+Curtorim-+CGH+Earth+SAHA/@15.2965112,74.0363791,17z/data=!4m10!3m9!1s0x3bbfae06564dd061:0xaa2b9a4030201ac3!5m3!1s2026-09-25!4m1!1i2!8m2!3d15.296506!4d74.038954!16s%2Fg%2F11lvk02svx?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Beach & Coast",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Beach & Coast",
  },

  {
    id: "neeleshwar-hermitage-kerala",
    name: "Neeleshwar Hermitage, Kerala",
    location: "Neeleshwar, Kerala",
    category: "india",

    image: "/Assets/hotels/Neeleshwar Heritage.jpg",
    alt: "Neeleshwar Hermitage, Kerala, Neeleshwar, Kerala",

    accentClass: "hi--india-coast",

    intro:
      "Overlooking the tranquil Arabian Sea on Kerala's unspoilt northern coastline, Neeleshwar Hermitage is a serene boutique retreat where luxury, wellness and nature exist in perfect harmony. Inspired by the traditional architecture of Kerala and the philosophy of slow living, the resort offers an intimate escape surrounded by swaying coconut palms, pristine beaches and lush tropical gardens. Far removed from the crowds, it is an ideal destination for travellers seeking peace, rejuvenation and an authentic coastal experience.\n\nThe resort features beautifully crafted cottages with spacious interiors, elegant furnishings and private verandas that blend seamlessly with the natural surroundings. Guests can savour fresh coastal cuisine prepared with locally sourced ingredients, indulge in authentic Ayurvedic therapies at the wellness centre, practise yoga overlooking the sea or simply unwind by the infinity pool while enjoying breathtaking ocean views. Thoughtful service and a tranquil ambience ensure a deeply relaxing and memorable stay.\n\nBeyond the resort, the Malabar Coast offers a fascinating blend of natural beauty, cultural heritage and traditional village life. From quiet beaches and scenic backwaters to historic temples and vibrant Theyyam performances, Neeleshwar Hermitage provides the perfect gateway to discover one of Kerala's best-kept secrets.",

    why: "Neeleshwar Hermitage is a peaceful sanctuary that combines barefoot luxury with authentic Kerala hospitality. Its pristine beachfront setting, holistic wellness experiences and intimate atmosphere make it an ideal retreat for relaxation and rejuvenation.",

    exploreDestination: [
      {
        name: "Neeleshwar Beach",
        description:
          "A quiet stretch of golden sand fringed by coconut palms, Neeleshwar Beach is perfect for peaceful walks, spectacular sunsets and moments of complete relaxation away from busy tourist destinations.",
      },
      {
        name: "Bekal Fort",
        description:
          "One of Kerala's largest and best-preserved forts, Bekal Fort overlooks the Arabian Sea and offers stunning coastal views, historic architecture and beautifully landscaped grounds for leisurely exploration.",
      },
      {
        name: "Valiyaparamba Backwaters",
        description:
          "Among Kerala's most scenic backwater destinations, Valiyaparamba offers tranquil boat cruises through mangroves, fishing villages and coconut groves, showcasing the region's untouched natural beauty.",
      },
      {
        name: "Theyyam Cultural Experience",
        description:
          "Northern Kerala is renowned for Theyyam, an ancient ritual art form featuring vibrant costumes, elaborate face painting and captivating performances. Guests can experience this unique tradition during the season and gain insight into the region's rich cultural heritage.",
      },
      {
        name: "Local Village & Spice Plantation Visits",
        description:
          "Explore nearby villages, traditional markets and spice plantations to experience the authentic lifestyle, flavours and craftsmanship of the Malabar region while interacting with local communities.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Kannur International Airport",
          code: "CNN",
          distance: "80 kms. / 2.5 hrs. approx. by road.",
        },
        {
          name: "Mangalore International Airport",
          code: "IXE",
          distance: "95 kms / 3 hrs. approx. by road.",
        }
      ],
    },

    idealFor: [
      "Couples",
      "Honeymooners",
      "Wellness Seekers",
      "Beach Holidays",
      "Nature Lovers",
      "Luxury Travellers",
      "Slow Travel Experiences",
      "Romantic Getaways"
    ],

    website: "https://www.neeleshwarhermitage.com/",

    map: "https://www.google.com/maps/place/Neeleshwar+Hermitage/@12.2628453,75.0950637,17z/data=!4m9!3m8!1s0x3ba47bae4d41f2d9:0xf03534920163be5e!5m2!4m1!1i2!8m2!3d12.2628401!4d75.0976386!16s%2Fg%2F1hc3mdvhh?entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Beach & Coast",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Beach & Coast",
  },

  {
    id: "palacio-aguada-goa",
    name: "Palacio Aguada, Goa",
    location: "Goa",
    category: "india",

    image: "/Assets/hotels/Palacio Aguada, Goa.avif",
    alt: "Palacio Aguada, Goa, Goa",

    accentClass: "hi--india-coast",

    intro:
      "Reflecting Goa's rich Portuguese heritage and coastal elegance, Palacio Aguada is a distinctive luxury retreat where history, refined hospitality and spectacular Arabian Sea views come together. Situated close to the iconic Fort Aguada on Goa's northern coastline, the property combines timeless architecture with contemporary comforts, creating an atmosphere of understated sophistication. From its elegant surroundings to its personalised service, Palacio Aguada offers an idyllic escape for travellers seeking both relaxation and cultural discovery.\n\nThe beautifully appointed rooms and suites feature tasteful interiors, modern amenities and private spaces designed for comfort and tranquillity. Guests can savour authentic Goan delicacies alongside international cuisine, relax by the swimming pool, indulge in rejuvenating wellness experiences or simply soak in the coastal ambience. Every detail has been thoughtfully curated to deliver a memorable stay that reflects the warmth and charm of Goa.\n\nWith easy access to the region's celebrated beaches, heritage landmarks and vibrant nightlife, Palacio Aguada serves as an ideal base for exploring North Goa. Whether wandering through historic forts, enjoying water sports, discovering local markets or witnessing breathtaking sunsets over the Arabian Sea, guests are perfectly placed to experience the very best of the destination.",

    why: "Palacio Aguada seamlessly blends heritage-inspired elegance with contemporary luxury. Its enviable location near Fort Aguada, personalised hospitality and proximity to North Goa's finest attractions make it an exceptional coastal retreat.",

    exploreDestination: [
      {
        name: "Fort Aguada",
        description:
          "Built by the Portuguese in the 17th century, Fort Aguada is one of Goa's most iconic landmarks. Its historic lighthouse, impressive ramparts and panoramic sea views make it a must-visit attraction.",
      },
      {
        name: "Sinquerim Beach",
        description:
          "A peaceful stretch of golden sand, Sinquerim Beach is ideal for swimming, sunbathing and water sports. The beach also offers stunning sunset views over the Arabian Sea.",
      },
      {
        name: "Candolim Beach",
        description:
          "Known for its lively atmosphere, beachfront cafés and water activities, Candolim Beach is one of North Goa's most popular coastal destinations while retaining a relaxed charm.",
      },
      {
        name: "Reis Magos Fort",
        description:
          "Overlooking the Mandovi River, this beautifully restored Portuguese fort showcases Goa's colonial history through engaging exhibits and breathtaking views.",
      },
      {
        name: "Fontainhas",
        description:
          "The Latin Quarter of Panaji is famous for its colourful Portuguese homes, art galleries, boutique cafés and charming cobbled streets that capture the essence of old Goa.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Manohar International Airport, Goa",
          code: "GOX",
          distance: "Nearest airport",
        },
        {
          name: "Goa International Airport, Dabolim Goa",
          code: "GOI",
          distance: "Nearest airport",
        }
      ],
    },

    idealFor: [
      "Couples",
      "Honeymooners",
      "Heritage Travellers",
      "Beach Holidaymakers",
      "Luxury Travellers",
      "Families",
      "Cultural Explorers",
      "Goa Getaways"
    ],

    website: "https://www.palacioaguada.com/",

    map: "https://www.google.com/maps/place/Palacio+Aguada,+Aguada+Fort+Area,+Candolim,+Goa+403515/@15.4932664,73.7758253,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbfc10f0596be63:0x3a0e4960e0effef5!8m2!3d15.4932613!4d73.7806962!16s%2Fg%2F12hk716pw?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Beach & Coast",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Beach & Coast",
  },

  {
    id: "pemako-bhutan",
    name: "Pemako Bhutan",
    location: "Punakha, Bhutan",
    category: "bhutan",

    image: "/Assets/hotels/Pemako Bhutan.jpg",
    alt: "Pemako Bhutan, Punakha, Bhutan",

    accentClass: "hi--bhutan-heritage",

    intro:
      "Embodying the spirit of Bhutan's pristine landscapes and profound spiritual heritage, Pemako Bhutan is an exceptional luxury retreat where contemporary elegance meets timeless Bhutanese tradition. Located in the tranquil Paro Valley, the resort is thoughtfully designed to complement its spectacular surroundings, offering sweeping views of forested mountains, fertile valleys and traditional villages. Every aspect of the experience reflects Bhutan's philosophy of mindful living, creating a sanctuary for relaxation, cultural discovery and meaningful connections with nature.\n\nThe beautifully designed suites and villas combine handcrafted Bhutanese details with refined modern comforts, featuring warm timber interiors, spacious living areas and panoramic mountain views. Guests can savour authentic Bhutanese flavours alongside international cuisine, indulge in holistic wellness experiences, participate in guided cultural excursions or simply unwind amidst the peaceful Himalayan setting. Warm, personalised hospitality ensures every stay is both restorative and unforgettable.\n\nIdeally positioned for exploring Bhutan's iconic monasteries, scenic hiking trails and cultural landmarks, Pemako Bhutan offers an inspiring gateway to one of the world's most captivating destinations. Whether seeking spiritual enrichment, outdoor adventure or a luxurious escape into the Himalayas, the resort delivers an authentic Bhutanese experience.",

    why: "Pemako Bhutan combines sophisticated luxury with the warmth of Bhutanese hospitality in an extraordinary Himalayan setting. Its immersive cultural experiences, exceptional wellness offerings and breathtaking natural surroundings make it one of Bhutan's finest luxury retreats.",

    exploreDestination: [
      {
        name: "Paro Taktsang",
        description:
          "Commonly known as the Tiger's Nest Monastery, this world-famous cliffside monastery is Bhutan's most iconic landmark. The rewarding hike offers spectacular views and a deeply spiritual experience.",
      },
      {
        name: "Rinpung Dzong",
        description:
          "One of Bhutan's most impressive fortress-monasteries, Rinpung Dzong is celebrated for its magnificent Bhutanese architecture, intricate wood carvings and vibrant religious festivals.",
      },
      {
        name: "National Museum of Bhutan",
        description:
          "Located in a historic watchtower overlooking the valley, the museum houses an impressive collection of Bhutanese art, textiles, religious artefacts and cultural treasures.",
      },
      {
        name: "Traditional Village & Cultural Experiences",
        description:
          "Explore picturesque Bhutanese villages, visit traditional farmhouses and interact with local communities to gain a deeper understanding of the country's customs, architecture and way of life.",
      },
      {
        name: "Himalayan Wellness & Nature Walks",
        description:
          "Enjoy guided forest walks, meditation sessions, yoga and holistic wellness therapies inspired by Bhutan's ancient healing traditions, all amidst the serenity of the Himalayas.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Paro International Airport, Bhutan",
          code: "PBH",
          distance: "Nearest airport",
        }
      ],
    },

    idealFor: [
      "Couples",
      "Honeymooners",
      "Luxury Travellers",
      "Wellness Seekers",
      "Cultural Explorers",
      "Nature Lovers",
      "Himalayan Holidays",
      "Slow Travel Experiences"
    ],

    website: "",

    map: "https://www.google.com/maps/place/Pemako+Thimphu/@27.4760122,89.6326706,17z/data=!3m1!4b1!4m9!3m8!1s0x39e1952f0e257aaf:0x9a6308df9e595f2e!5m2!4m1!1i2!8m2!3d27.4760075!4d89.6375415!16s%2Fg%2F11v9z6q5tv?entry=ttu&g_ep=EgoyMDI2MDcyMC4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Heritage",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Heritage",
  },

  {
    id: "pokhara-panorama-resort-spa-nepal",
    name: "Pokhara Panorama Resort & Spa, Nepal",
    location: "Pokhara, Nepal",
    category: "nepal",

    image: "/Assets/hotels/Pokhara Panorama resort Nepal.webp",
    alt: "Pokhara Panorama Resort & Spa, Nepal, Pokhara, Nepal",

    accentClass: "hi--india-mountain",

    intro:
      "Blessed with sweeping views of Nepal's lake city and the Annapurna Himalayas, Pokhara Panorama Resort & Spa offers a relaxing retreat where panoramic mountain views, warm Nepalese hospitality and contemporary comforts come together effortlessly. Overlooking the picturesque Pokhara Valley, the resort provides a tranquil setting for travellers seeking both relaxation and adventure. Its peaceful ambience, elegant accommodation and scenic surroundings make it an ideal base for discovering one of Nepal's most captivating destinations.\n\nThe spacious rooms and suites are thoughtfully designed with modern interiors, private balconies and sweeping views of the Annapurna and Machhapuchhre mountain ranges. Guests can enjoy authentic Nepalese and international cuisine, rejuvenate with spa therapies, relax by the swimming pool or simply soak in the breathtaking Himalayan scenery. Personalised service and a welcoming atmosphere ensure a memorable stay for every guest.\n\nConveniently located close to Pokhara's major attractions, the resort offers easy access to serene lakes, cultural landmarks and world-renowned adventure activities. Whether cruising across tranquil waters, exploring mountain trails or experiencing Nepal's vibrant culture, Pokhara Panorama Resort & Spa serves as the perfect gateway to the Himalayas.",

    why: "Pokhara Panorama Resort & Spa combines spectacular Himalayan views, contemporary comfort and genuine Nepalese hospitality. Its peaceful setting and convenient location make it an excellent choice for both leisure travellers and adventure enthusiasts.",

    exploreDestination: [
      {
        name: "Phewa Lake",
        description:
          "The heart of Pokhara, Phewa Lake is renowned for its crystal-clear waters, colourful boats and magnificent reflections of the Annapurna Range. Visitors can enjoy boating, lakeside cafés and unforgettable sunset views.",
      },
      {
        name: "World Peace Pagoda",
        description:
          "Situated on a hilltop overlooking the valley, this striking white stupa offers breathtaking panoramic views of Phewa Lake, Pokhara and the snow-capped Himalayas.",
      },
      {
        name: "Sarangkot",
        description:
          "One of Nepal's most famous viewpoints, Sarangkot is celebrated for its spectacular sunrise over the Annapurna and Dhaulagiri ranges. It is also a popular destination for paragliding and scenic hikes.",
      },
      {
        name: "Devi's Fall",
        description:
          "A fascinating natural attraction where the Pardi Khola stream disappears into an underground tunnel, Devi's Fall is one of Pokhara's most visited landmarks.",
      },
      {
        name: "Adventure & Cultural Experiences",
        description:
          "Pokhara is Nepal's adventure capital, offering paragliding, zip-lining, ultralight flights, mountain biking and trekking. Visitors can also explore local markets, traditional villages and vibrant cafés that showcase the city's relaxed charm.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Pokhara International Airport, Nepal",
          code: "PHH",
          distance: "Nearest airport",
        }
      ],
    },

    idealFor: [
      "Couples",
      "Honeymooners",
      "Nature Lovers",
      "Adventure Seekers",
      "Luxury Travellers",
      "Families",
      "Wellness Retreats",
      "Himalayan Holidays"
    ],

    website: "",

    map: "https://www.google.com/maps/place/Pokhara+Panorama+Resort+and+Spa/@28.2262872,83.4036711,10z/data=!4m13!1m2!2m1!1sPokhara+Panorama+Resort+and+Spa+Nepal!3m9!1s0x399594f02e97ef13:0x212639cc77c26f76!5m2!4m1!1i2!8m2!3d28.2262872!4d83.9639738!15sCiVQb2toYXJhIFBhbm9yYW1hIFJlc29ydCBhbmQgU3BhIE5lcGFskgEFaG90ZWzgAQA!16s%2Fg%2F11yrg8vqnc?entry=ttu&g_ep=EgoyMDI2MDcyMC4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Mountain Retreat",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Mountain Retreat",
  },

  {
    id: "postcard-durrung-tea-estate-assam",
    name: "Postcard Durrung Tea Estate, Assam",
    location: "Durrung, Assam",
    category: "india",

    image: "/Assets/hotels/Pastcard Durrung, Assam.png",
    alt: "Postcard Durrung Tea Estate, Assam, Durrung, Assam",

    accentClass: "hi--india-hills",

    intro:
      "Set within a sprawling tea estate at the foothills of the Eastern Himalayas, Postcard Durrung Tea Estate is an intimate luxury retreat that offers an immersive experience amidst Assam's verdant tea country. Surrounded by endless emerald plantations, misty hills and the soothing rhythm of estate life, the property combines heritage charm with contemporary luxury to create a peaceful escape for discerning travellers. With The Postcard Hotel's signature personalised hospitality, every stay is thoughtfully curated to celebrate the region's rich natural and cultural heritage.\n\nThe elegantly appointed rooms and suites feature tasteful interiors, modern comforts and sweeping views of the tea gardens. Guests can enjoy authentic Assamese and regional cuisine prepared with fresh local ingredients, take guided walks through the tea estate, interact with tea planters, savour curated tea-tasting experiences or simply unwind while embracing the serenity of the surrounding landscape. The tranquil atmosphere and attentive service make it an ideal retreat for relaxation and rejuvenation.\n\nPerfectly positioned for exploring Assam's wildlife, tea heritage and vibrant local culture, Postcard Durrung Tea Estate serves as an excellent base for discovering the region's many treasures. From safari adventures and birdwatching excursions to visits to ancient temples and traditional villages, every experience reveals a different facet of this remarkable destination.",

    why: "Postcard Durrung Tea Estate offers an authentic escape into Assam's celebrated tea country. Its tranquil setting, personalised hospitality and immersive tea estate experiences create a truly unique luxury getaway.",

    exploreDestination: [
      {
        name: "Durrung Tea Estate",
        description:
          "Take guided walks through one of Assam's picturesque tea estates to learn about the fascinating journey of tea—from plucking the leaves to processing and tasting some of the world's finest Assam teas.",
      },
      {
        name: "Kaziranga National Park",
        description:
          "A UNESCO World Heritage Site, Kaziranga National Park is world-renowned for its population of the endangered one-horned rhinoceros. The park is also home to elephants, wild buffalo, tigers and an extraordinary variety of birdlife.",
      },
      {
        name: "Nameri National Park",
        description:
          "Nestled along the foothills of the Eastern Himalayas, Nameri National Park is a haven for birdwatchers, nature lovers and adventure enthusiasts. Activities include river rafting, jungle walks and wildlife spotting.",
      },
      {
        name: "Tea Tasting & Cultural Experiences",
        description:
          "Enjoy curated tea-tasting sessions led by experts while discovering the unique flavours and aromas of Assam tea. Guests can also experience traditional Assamese hospitality, local cuisine and cultural performances.",
      },
      {
        name: "Village & Nature Walks",
        description:
          "Explore nearby villages and scenic countryside to experience Assam's rural way of life, interact with local communities and discover the region's rich traditions, handicrafts and agricultural heritage.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Nearest Airport: Tezpur Airport, Assam",
          code: "TEZ",
          distance: "Nearest airport",
        },
        {
          name: "Lokpriya Gopinath Bordoloi International Airport, Guwahati",
          code: "",
          distance: "140 kms / 3.5 hrs. approx. by road.",
        }
      ],
    },

    idealFor: [
      "Tea Estate Holidays",
      "Couples",
      "Honeymooners",
      "Nature Lovers",
      "Wildlife Enthusiasts",
      "Luxury Travellers",
      "Birdwatchers",
      "Slow Travel Experiences"
    ],

    website: "https://www.postcardresorts.com/hotels/the-postcard-durrung-tea-estate",

    map: "https://www.google.com/maps/place/The+Postcard+in+the+Durrung+Tea+Estate/@26.6879566,92.7201525,13z/data=!4m13!1m2!2m1!1spostcard+durrung+tea+estate!3m9!1s0x3744c11b36275a33:0x472e5be56fac364!5m2!4m1!1i2!8m2!3d26.7229225!4d92.7301474!15sChtwb3N0Y2FyZCBkdXJydW5nIHRlYSBlc3RhdGWSAQVob3RlbOABAA!16s%2Fg%2F11y829qy4g?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Hill Stations",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Hill Stations",
  },

  {
    id: "radisson-blu-atria-bengaluru",
    name: "Radisson Blu Atria Bengaluru",
    location: "Bengaluru, Karnataka",
    category: "india",

    image: "/Assets/hotels/Radisson Blu Atria, Bengaluru.webp",
    alt: "Radisson Blu Atria Bengaluru, Bengaluru, Karnataka",

    accentClass: "hi--india-city",

    intro:
      "Situated in the heart of Bengaluru's vibrant business and cultural district, Radisson Blu Atria Bengaluru offers a seamless blend of contemporary comfort, warm hospitality and exceptional convenience. Overlooking lush greenery and located close to the city's prominent commercial centres, the hotel provides an ideal base for both business and leisure travellers. Its central location ensures effortless access to Bengaluru's government offices, corporate headquarters, shopping destinations and iconic attractions while offering a tranquil retreat from the city's energetic pace.\n\nDesigned with modern elegance, the hotel's spacious rooms and suites feature stylish interiors, contemporary furnishings and thoughtful amenities that cater to today's discerning traveller. Guests can savour a variety of culinary experiences, from authentic Indian cuisine to international favourites, unwind at the rooftop swimming pool, rejuvenate at the wellness centre or relax with handcrafted beverages at the hotel's inviting lounge. The attentive service and welcoming atmosphere ensure every stay is both comfortable and memorable.\n\nWhether you're attending business meetings, exploring Bengaluru's thriving culinary scene or discovering its rich heritage, Radisson Blu Atria places you within easy reach of the city's finest experiences. From historic landmarks and botanical gardens to upscale shopping and lively cafés, the hotel offers the perfect combination of accessibility, comfort and modern luxury.",

    why: "Radisson Blu Atria combines an excellent city-centre location with spacious accommodation and warm hospitality. Its proximity to Bengaluru's business districts and cultural attractions makes it equally appealing for corporate travellers, families and those discovering India's Garden City.",

    exploreDestination: [
      {
        name: "Cubbon Park",
        description:
          "One of Bengaluru's most cherished green spaces, Cubbon Park stretches across nearly 300 acres of beautifully landscaped gardens, heritage buildings and shaded avenues. It is an ideal place for morning walks, cycling or simply escaping the bustle of the city.",
      },
      {
        name: "Visvesvaraya Industrial and Technological Museum",
        description:
          "A fascinating destination for visitors of all ages, this interactive museum showcases India's achievements in science, engineering and technology through engaging exhibits and hands-on displays.",
      },
      {
        name: "Bangalore Palace",
        description:
          "Inspired by England's Windsor Castle, Bangalore Palace is one of the city's most recognisable landmarks. Its magnificent Tudor-style architecture, royal artefacts and beautifully maintained grounds offer a glimpse into Bengaluru's regal past.",
      },
      {
        name: "Lalbagh Botanical Garden",
        description:
          "Established in the 18th century, Lalbagh Botanical Garden is home to rare tropical plants, centuries-old trees and the iconic Glass House. The garden is especially famous for its spectacular annual flower shows.",
      },
      {
        name: "UB City",
        description:
          "Bengaluru's premier lifestyle destination, UB City features luxury boutiques, fine dining restaurants, art galleries and elegant cafés. It is the perfect place to enjoy the city's cosmopolitan atmosphere.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Kempegowda International Airport, Bengaluru",
          code: "",
          distance: "Nearest airport",
        }
      ],
    },

    idealFor: [
      "Business Travellers",
      "Families",
      "Couples",
      "Luxury City Breaks",
      "Corporate Executives",
      "Weekend Getaways",
      "Food & Lifestyle Enthusiasts",
      "Bengaluru Sightseeing Holidays"
    ],

    website: "",

    map: "http://google.com/maps/place/Radisson+Blu+Hotel,+Atria+Bengaluru/@12.980235,77.586061,17z/data=!3m1!4b1!4m9!3m8!1s0x3bae166d3d785ec7:0xe216f7625f066e10!5m2!4m1!1i2!8m2!3d12.980235!4d77.586061!16s%2Fg%2F1tls18p_?entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "City Luxury",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "City Luxury",
  },

  {
    id: "rambha-palace-odisha",
    name: "Rambha Palace, Odisha",
    location: "Rambha, Odisha",
    category: "india",

    image: "/Assets/hotels/Rambha Palace, Odisha.png",
    alt: "Rambha Palace, Odisha, Rambha, Odisha",

    accentClass: "hi--india-heritage",

    intro:
      "Gracefully overlooking the tranquil waters of Chilika Lake, Rambha Palace is a magnificent heritage retreat that revives the regal splendour of a bygone era. Originally built as the royal residence of the Maharaja of Khallikote, this meticulously restored palace seamlessly blends historic grandeur with contemporary luxury. Surrounded by manicured gardens, serene lake views and timeless architecture, the palace offers guests an enchanting escape where history, culture and nature come together in perfect harmony.\n\nThe palace features exquisitely restored rooms and suites adorned with period-inspired décor, elegant furnishings and modern comforts that reflect its royal legacy. Every corner showcases intricate craftsmanship, heritage architecture and thoughtfully curated interiors that celebrate Odisha's rich cultural traditions. Guests can indulge in refined culinary experiences featuring regional delicacies and international cuisine, relax amidst peaceful gardens, enjoy leisurely walks along the lakeside or simply soak in the serene ambience that defines this remarkable destination.\n\nRambha Palace also serves as an excellent gateway to the natural wonders of Chilika Lake—the largest brackish water lagoon in Asia—and the cultural treasures of Odisha. Whether embarking on a boat safari to spot the endangered Irrawaddy dolphins, visiting ancient temples or enjoying spectacular lake sunsets, guests are treated to an unforgettable experience where heritage and nature exist in perfect balance.",

    why: "Rambha Palace beautifully combines royal heritage with the tranquillity of Chilika Lake. Its restored palace architecture, personalised hospitality and spectacular lakeside setting make it one of Odisha's most distinctive luxury destinations.",

    exploreDestination: [
      {
        name: "Chilika Lake",
        description:
          "Asia's largest brackish water lagoon is renowned for its extraordinary biodiversity and breathtaking landscapes. Boat cruises across the lake offer opportunities to witness migratory birds, picturesque islands and the endangered Irrawaddy dolphins in their natural habitat.",
      },
      {
        name: "Kalijai Temple",
        description:
          "Situated on a small island within Chilika Lake, Kalijai Temple is one of Odisha's most revered shrines. Accessible by boat, the temple is deeply rooted in local folklore and offers beautiful panoramic views of the surrounding waters.",
      },
      {
        name: "Nalabana Bird Sanctuary",
        description:
          "A paradise for birdwatchers, Nalabana Bird Sanctuary welcomes thousands of migratory birds from across Europe, Central Asia and Siberia during the winter months, making it one of India's finest avian habitats.",
      },
      {
        name: "Barkul",
        description:
          "Located along the shores of Chilika Lake, Barkul is known for its scenic viewpoints, peaceful surroundings and boating experiences. It provides visitors with excellent opportunities to appreciate the lake's vast natural beauty.",
      },
      {
        name: "Taratarini Temple",
        description:
          "One of Odisha's most important Shakti Peethas, Taratarini Temple sits atop Kumari Hills overlooking the Rushikulya River. The temple is renowned for its spiritual significance and breathtaking views of the surrounding countryside.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Nearest Airport: Biju Patnaik International Airport, Bhubaneswar",
          code: "BBI",
          distance: "Nearest airport",
        }
      ],
    },

    idealFor: [
      "Heritage Travellers",
      "Couples",
      "Honeymooners",
      "Luxury Travellers",
      "Nature Lovers",
      "Birdwatchers",
      "Families",
      "Cultural & Wellness Getaways"
    ],

    website: "https://rambhapalace.com/",

    map: "https://www.google.com/maps/place/Rambha+Palace/@19.5160752,85.0899755,17z/data=!4m9!3m8!1s0x3a18035e048f3415:0x2d4a98c9b3c0c18d!5m2!4m1!1i2!8m2!3d19.5160702!4d85.0925504!16s%2Fg%2F11p9n9v6s8?entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Heritage",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Heritage",
  },

  {
    id: "renaissance-bengaluru-race-course-hotel",
    name: "Renaissance Bengaluru Race Course Hotel",
    location: "Bengaluru, Karnataka",
    category: "india",

    image: "/Assets/hotels/Renaissance, Bengaluru.avif",
    alt: "Renaissance Bengaluru Race Course Hotel, Bengaluru, Karnataka",

    accentClass: "hi--india-city",

    intro:
      "Overlooking the lush greenery of the historic Bengaluru Turf Club, Renaissance Bengaluru Race Course Hotel offers a sophisticated urban retreat in one of the city's most prestigious neighbourhoods. Ideally located close to the Central Business District, Vidhana Soudha, Palace Grounds and major corporate hubs, the hotel combines contemporary luxury with exceptional convenience for both business and leisure travellers. Elegant interiors, panoramic city views and Renaissance's signature hospitality create an inviting atmosphere where guests can experience Bengaluru in style.\n\nThe hotel's spacious rooms and suites are thoughtfully designed with modern furnishings, floor-to-ceiling windows and refined décor that reflect the city's vibrant yet relaxed character. Guests can enjoy a variety of dining experiences ranging from local Karnataka flavours to international cuisine, unwind at the rooftop infinity pool overlooking the city skyline, rejuvenate at the luxury spa or stay active in the fully equipped fitness centre. Attentive service and contemporary comforts ensure every stay is seamless and memorable.\n\nWhether attending corporate meetings, exploring Bengaluru's heritage landmarks or enjoying its thriving culinary and shopping scene, Renaissance Bengaluru Race Course Hotel places guests within easy reach of the city's finest attractions. Its central location and world-class facilities make it an ideal destination for business executives, families and luxury travellers alike.",

    why: "Renaissance Bengaluru Race Course Hotel offers spectacular views of the Bengaluru Race Course while providing easy access to the city's commercial and cultural landmarks. Its stylish design, rooftop experiences and warm hospitality make it one of Bengaluru's finest luxury city hotels.",

    exploreDestination: [
      {
        name: "Bangalore Palace",
        description:
          "One of Bengaluru's most iconic landmarks, Bangalore Palace is renowned for its Tudor-style architecture, elegant royal interiors and beautifully landscaped gardens. It offers visitors a fascinating glimpse into the city's regal history.",
      },
      {
        name: "Cubbon Park",
        description:
          "Spread across nearly 300 acres, Cubbon Park is Bengaluru's green oasis. Tree-lined avenues, heritage buildings and expansive lawns make it perfect for leisurely walks, photography and outdoor recreation.",
      },
      {
        name: "Vidhana Soudha",
        description:
          "An architectural masterpiece and the seat of Karnataka's legislature, Vidhana Soudha is one of Bengaluru's most recognisable landmarks. Its magnificent granite structure is particularly impressive when illuminated in the evening.",
      },
      {
        name: "Lalbagh Botanical Garden",
        description:
          "Established in the 18th century, Lalbagh Botanical Garden is celebrated for its diverse collection of tropical plants, tranquil lakes and the iconic Glass House, which hosts spectacular flower shows throughout the year.",
      },
      {
        name: "UB City",
        description:
          "Bengaluru's premier lifestyle destination, UB City offers luxury shopping, fine dining, art galleries and elegant cafés, making it the perfect place to experience the city's cosmopolitan charm.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Nearest Airport: Kempegowda International Airport, Bengaluru",
          code: "BLR",
          distance: "Nearest airport",
        }
      ],
    },

    idealFor: [
      "Business Travellers",
      "Luxury Travellers",
      "Corporate Executives",
      "Couples",
      "Families",
      "Weekend Getaways",
      "Food & Lifestyle Enthusiasts",
      "Bengaluru City Breaks"
    ],

    website: "https://www.marriott.com/en-us/hotels/blrbh-renaissance-bengaluru-race-course-hotel/overview/",

    map: "https://www.google.com/maps/place/Renaissance+Bengaluru+Race+Course+Hotel/@12.9842441,77.5738792,17z/data=!3m1!4b1!4m9!3m8!1s0x3bae1616c38bb0df:0x9106578b44413795!5m2!4m1!1i2!8m2!3d12.9842389!4d77.5764541!16s%2Fg%2F11hbkp5wzr?entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "City Luxury",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "City Luxury",
  },

  {
    id: "samode-haveli-jaipur",
    name: "Samode Haveli, Jaipur",
    location: "Jaipur, Rajasthan",
    category: "india",

    image: "/Assets/hotels/Samode-Haveli, Jaipur.jpg",
    alt: "Samode Haveli, Jaipur, Jaipur, Rajasthan",

    accentClass: "hi--india-heritage",

    intro:
      "https://www.google.com/maps/place/Samode+Haveli/@26.9331815,75.8345056,17z/data=!3m1!4b1!4m9!3m8!1s0x396db130e278be45:0xba8fcdd7963e88c6!5m2!4m1!1i2!8m2!3d26.9331767!4d75.8370805!16s%2Fg%2F11byxg2jgg?entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D – Location Link\n\nTucked away within the historic walled city of Jaipur, Samode Haveli is a beautifully restored heritage mansion that reflects the timeless elegance of Rajasthan's royal past. Over 225 years old, this intimate luxury hotel was once the residence of the rulers of Samode and has been meticulously restored to preserve its architectural grandeur while offering contemporary comforts. Ornate arches, intricately painted frescoes, tranquil courtyards and lush gardens create an enchanting atmosphere where history and hospitality blend seamlessly.\n\nThe hotel's elegantly appointed rooms and suites showcase traditional Rajasthani craftsmanship through hand-painted ceilings, antique furnishings and intricate mirror work, complemented by modern amenities for a comfortable stay. Guests can savour authentic Rajasthani and international cuisine in charming dining spaces, unwind beside the inviting outdoor swimming pool, indulge in rejuvenating spa treatments or simply relax amidst the peaceful gardens. Every experience reflects the personalised hospitality and regal charm that have made Samode Haveli one of Jaipur's most cherished heritage hotels.\n\nIdeally located close to Jaipur's iconic monuments and vibrant bazaars, the hotel provides an excellent base for exploring the Pink City's rich cultural heritage. Whether discovering magnificent forts, shopping for handcrafted textiles and jewellery or experiencing Rajasthan's colourful traditions, Samode Haveli promises an unforgettable stay steeped in history and elegance.",

    why: "Samode Haveli beautifully preserves the grandeur of a traditional Rajput mansion while offering the comforts of a luxury boutique hotel. Its authentic heritage, personalised service and peaceful ambience provide a truly immersive Jaipur experience.",

    exploreDestination: [
      {
        name: "City Palace",
        description:
          "Located in the heart of the Pink City, the City Palace is a magnificent royal residence featuring elegant courtyards, museums, royal artefacts and beautifully decorated gateways that showcase Jaipur's regal heritage.",
      },
      {
        name: "Hawa Mahal",
        description:
          "One of India's most recognisable landmarks, the Palace of Winds is celebrated for its intricate pink sandstone façade with hundreds of latticed windows, designed to allow royal ladies to observe city life in privacy.",
      },
      {
        name: "Amber Fort",
        description:
          "A UNESCO World Heritage Site, Amber Fort stands majestically atop a hill overlooking Maota Lake. Its magnificent palaces, mirror-adorned halls and sweeping views make it one of Rajasthan's finest architectural masterpieces.",
      },
      {
        name: "Jantar Mantar",
        description:
          "This UNESCO World Heritage Site houses the world's largest collection of stone astronomical instruments. Built by Maharaja Sawai Jai Singh II, it remains one of the most remarkable observatories ever constructed.",
      },
      {
        name: "Johari Bazaar & Bapu Bazaar",
        description:
          "Jaipur's bustling markets are renowned for exquisite gemstones, handcrafted jewellery, block-printed textiles, blue pottery, leather goods and traditional Rajasthani handicrafts, offering visitors an authentic shopping experience.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Jaipur International Airport",
          code: "JAI",
          distance: "Nearest airport",
        }
      ],
    },

    idealFor: [
      "Heritage Travellers",
      "Couples",
      "Honeymooners",
      "Families",
      "Luxury Travellers",
      "Cultural Explorers",
      "Photography Enthusiasts",
      "Rajasthan Holidays"
    ],

    website: "",

    map: "https://samode.com/samode-haveli/ - Website",

    tags: [
      "Heritage",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Heritage",
  },

  {
    id: "sitara-himalaya-himachal-pradesh",
    name: "Sitara Himalaya, Himachal Pradesh",
    location: "Himachal Pradesh",
    category: "india",

    image: "/Assets/hotels/Sitara Himalayas, Himachal Pradesh.jpg",
    alt: "Sitara Himalaya, Himachal Pradesh, Himachal Pradesh",

    accentClass: "hi--india-mountain",

    intro:
      "Set amidst the majestic Himalayan ranges, Sitara Himalaya is a serene mountain retreat that offers an idyllic escape into the pristine landscapes of Himachal Pradesh. Surrounded by snow-capped peaks, dense pine forests and picturesque valleys, the resort blends contemporary comfort with the timeless charm of the Himalayas. Whether you're seeking a peaceful holiday, an adventure in the mountains or a rejuvenating wellness retreat, Sitara Himalaya provides the perfect setting to reconnect with nature while enjoying warm hospitality and modern luxury.\n\nThe elegantly designed rooms and suites feature spacious interiors, contemporary décor and private balconies that frame breathtaking views of the surrounding mountains. Guests can savour delicious regional and international cuisine, relax in tranquil outdoor spaces, enjoy bonfires under star-filled skies or simply unwind while breathing in the crisp mountain air. Every experience at the resort is thoughtfully curated to celebrate the beauty and tranquillity of the Himalayas.\n\nIts strategic location allows guests to explore charming hill towns, ancient temples, scenic trekking trails and traditional Himalayan villages. Throughout the year, the changing seasons transform the landscape—from lush green summers and colourful autumns to magical snow-covered winters—making Sitara Himalaya an inviting destination in every season.",

    why: "Sitara Himalaya offers spectacular mountain views, peaceful surroundings and genuine Himalayan hospitality. Its blend of contemporary comfort, natural beauty and easy access to outdoor adventures makes it an ideal retreat for travellers looking to experience the charm of Himachal Pradesh.",

    exploreDestination: [
      {
        name: "Great Himalayan National Park",
        description:
          "A UNESCO World Heritage Site, the Great Himalayan National Park is renowned for its pristine forests, alpine meadows and remarkable biodiversity. Nature enthusiasts can enjoy scenic trekking routes while spotting Himalayan wildlife and rare bird species.",
      },
      {
        name: "Tirthan Valley",
        description:
          "Known for its crystal-clear rivers, traditional villages and tranquil landscapes, Tirthan Valley is a paradise for anglers, trekkers and nature lovers. Its peaceful setting offers an authentic Himalayan experience away from the crowds.",
      },
      {
        name: "Jibhi",
        description:
          "This charming mountain village is famous for its wooden cottages, waterfalls and scenic walking trails. Jibhi's laid-back atmosphere and natural beauty make it one of Himachal's hidden gems.",
      },
      {
        name: "Jalori Pass",
        description:
          "Situated at an elevation of over 3,000 metres, Jalori Pass offers panoramic views of the Himalayan ranges and serves as the starting point for several scenic hikes, including the popular trail to Serolsar Lake.",
      },
      {
        name: "Village Walks & Himalayan Experiences",
        description:
          "Discover the rich culture of Himachal through guided village walks, interactions with local communities and visits to traditional temples and apple orchards. These experiences offer a deeper appreciation of the region's heritage, cuisine and way of life.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Bhuntar Airport, Kullu–Manali",
          code: "KUU",
          distance: "60kms. Approx. 2hrs. by road.",
        },
        {
          name: "Chandigarh International Airport",
          code: "",
          distance: "291 kms. / 6hrs. approx. by road.",
        }
      ],
    },

    idealFor: [
      "Couples",
      "Honeymooners",
      "Families",
      "Nature Lovers",
      "Adventure Seekers",
      "Wellness Retreats",
      "Mountain Holidays",
      "Luxury Getaways"
    ],

    website: "https://www.sitarahimalaya.com/",

    map: "https://www.google.com/maps/place/Sitara+Himalaya/@32.3116005,77.1768337,17z/data=!4m9!3m8!1s0x390487746f1883b9:0xe3255e719cbf7a81!5m2!4m1!1i2!8m2!3d32.311596!4d77.1794086!16s%2Fg%2F11t_ql9w99?entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Mountain Retreat",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Mountain Retreat",
  },

  {
    id: "sujn-jawai-rajasthan",
    name: "Suján Jawai, Rajasthan",
    location: "Jawai, Rajasthan",
    category: "india",

    image: "/Assets/hotels/Sujan Jawai, Rajasthan.jpg",
    alt: "Suján Jawai, Rajasthan, Jawai, Rajasthan",

    accentClass: "hi--india-heritage",

    intro:
      "https://www.google.com/maps/place/SUJ%C3%81N+JAWAI+Camp/@25.0957948,73.1925203,17z/data=!3m1!4b1!4m9!3m8!1s0x3942966deb730521:0x7af35b2c1ac3581b!5m2!4m1!1i2!8m2!3d25.09579!4d73.1950952!16s%2Fg%2F11dzdh5plf?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D – Location Link\n\nSet amidst the dramatic granite landscapes of the Jawai wilderness, Suján Jawai is an exclusive luxury safari camp that redefines wilderness hospitality in Rajasthan. Located in one of India's most remarkable conservation landscapes, where leopards roam freely among ancient rock formations and traditional Rabari villages, the camp offers an extraordinary blend of adventure, luxury and cultural immersion. Designed to harmonise with its natural surroundings, Suján Jawai provides an intimate escape where every experience is inspired by the beauty and spirit of the wild.\n\nThe luxurious tented suites combine elegant safari-inspired interiors with modern comforts, offering spacious accommodation, private verandas and sweeping views of the rugged countryside. Guests can savour gourmet cuisine under the stars, relax with bespoke wellness experiences, enjoy sundowners atop granite hills or embark on expertly guided wildlife safaris led by experienced naturalists. The personalised service and intimate atmosphere ensure that every stay is both exclusive and unforgettable.\n\nBeyond its spectacular wildlife, Jawai is celebrated for its harmonious coexistence between local communities and nature. From tracking elusive leopards and spotting migratory birds to visiting centuries-old temples and interacting with the Rabari pastoralists, Suján Jawai offers a rare opportunity to experience Rajasthan from an entirely different perspective.",

    why: "Suján Jawai offers one of India's most extraordinary luxury wildlife experiences. Its spectacular granite landscapes, exceptional leopard sightings and deeply personalised safari experiences make it a truly unforgettable destination.",

    exploreDestination: [
      {
        name: "Jawai Leopard Conservation Reserve",
        description:
          "Jawai is internationally renowned for its thriving population of wild leopards living in harmony with local communities. Expert-led safari drives provide exceptional opportunities to observe these magnificent cats in their natural habitat.",
      },
      {
        name: "Jawai Dam",
        description:
          "Built across the Jawai River, Jawai Dam is one of western Rajasthan's most picturesque reservoirs. It attracts a rich variety of wildlife and migratory birds, making it a paradise for birdwatchers and photographers.",
      },
      {
        name: "Rabari Village Experiences",
        description:
          "Meet the indigenous Rabari community, renowned for their pastoral lifestyle, colourful attire and centuries-old traditions. Guided cultural visits offer fascinating insights into their harmonious relationship with the surrounding wilderness.",
      },
      {
        name: "Granite Hill Sundowners",
        description:
          "One of Jawai's signature experiences, sunset excursions atop the region's dramatic granite outcrops offer breathtaking panoramic views while guests enjoy refreshments as the landscape transforms with the golden evening light.",
      },
      {
        name: "Birdwatching & Nature Walks",
        description:
          "The Jawai region supports a remarkable diversity of birdlife, including flamingos, cranes, raptors and waterbirds. Guided nature walks reveal the area's unique flora, fauna and fascinating geological formations.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Maharana Pratap Airport, Udaipur",
          code: "",
          distance: "160 kms / 3 hrs. approx. by road.",
        },
        {
          name: "Jodhpur Airport",
          code: "",
          distance: "170 kms / 3 hrs. approx. by road.",
        }
      ],
    },

    idealFor: [
      "Wildlife Enthusiasts",
      "Luxury Safari Holidays",
      "Couples",
      "Honeymooners",
      "Nature Lovers",
      "Wildlife Photographers",
      "Luxury Adventure Travellers",
      "Exclusive Rajasthan Experiences"
    ],

    website: "",

    map: "https://thesujanlife.com/sujan-camps/sujan-jawai - website",

    tags: [
      "Heritage",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Heritage",
  },

  {
    id: "svatma-thanjavur",
    name: "Svatma, Thanjavur",
    location: "Thanjavur, Tamil Nadu",
    category: "india",

    image: "/Assets/hotels/Svatma, Tanjavur.jpg",
    alt: "Svatma, Thanjavur, Thanjavur, Tamil Nadu",

    accentClass: "hi--india-heritage",

    intro:
      "Steeped in the rich cultural heritage of Thanjavur, Svatma is an award-winning heritage luxury hotel that beautifully celebrates the rich cultural legacy of Tamil Nadu. Inspired by the region's timeless traditions, the property blends restored heritage architecture with contemporary elegance, creating an atmosphere of serenity, refinement and authentic South Indian hospitality. Every aspect of the hotel reflects the spirit of Thanjavur—from its classical art and music to its exquisite craftsmanship and culinary heritage—making it a truly immersive cultural retreat.\n\nThe hotel's tastefully designed rooms and heritage villas feature elegant interiors, handcrafted furnishings and modern amenities, ensuring a luxurious and comfortable stay. Guests can indulge in authentic Tamil cuisine prepared using traditional recipes, rejuvenate with holistic Ayurvedic therapies, participate in yoga and wellness sessions or experience captivating performances of Carnatic music and Bharatanatyam. Thoughtfully curated experiences and personalised service make every stay both enriching and memorable.\n\nPerfectly positioned for exploring Thanjavur's architectural and artistic treasures, Svatma offers an ideal base for discovering the city's magnificent temples, royal palaces and centuries-old artistic traditions. Whether you're a heritage enthusiast, wellness seeker or cultural explorer, the hotel promises an unforgettable journey into the heart of Tamil Nadu.",

    why: "Svatma offers an immersive heritage experience where luxury, wellness and South Indian culture come together beautifully. Its authentic architecture, curated cultural programmes and warm hospitality make it one of Thanjavur's finest boutique stays.",

    exploreDestination: [
      {
        name: "Brihadeeswarar Temple",
        description:
          "A UNESCO World Heritage Site and one of India's greatest architectural masterpieces, Brihadeeswarar Temple was built by Raja Raja Chola I over 1,000 years ago. Its towering vimana, intricate sculptures and magnificent granite construction showcase the brilliance of Chola architecture.",
      },
      {
        name: "Thanjavur Maratha Palace",
        description:
          "This historic palace complex houses museums, royal halls, art galleries and the famous Saraswathi Mahal Library. It offers fascinating insights into the region's royal history and artistic heritage.",
      },
      {
        name: "Saraswathi Mahal Library",
        description:
          "Among Asia's oldest libraries, the Saraswathi Mahal Library preserves an extraordinary collection of ancient palm-leaf manuscripts, rare books and historical documents that reflect centuries of scholarship and culture.",
      },
      {
        name: "Schwartz Church",
        description:
          "Built in the 18th century, Schwartz Church is one of the oldest churches in South India. Its elegant colonial architecture and historical significance make it an interesting landmark within the city.",
      },
      {
        name: "Thanjavur Art & Handicrafts",
        description:
          "Thanjavur is renowned worldwide for its exquisite Tanjore paintings, handcrafted dolls, bronze sculptures and traditional veena-making. Visitors can explore artisan workshops to witness these centuries-old crafts being created by skilled local craftsmen.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Nearest Airport: Tiruchirappalli International Airport",
          code: "TRZ",
          distance: "Nearest airport",
        }
      ],
    },

    idealFor: [
      "Heritage Travellers",
      "Cultural Explorers",
      "Couples",
      "Families",
      "Wellness Seekers",
      "Art & Architecture Enthusiasts",
      "Luxury Travellers",
      "South India Heritage Holidays"
    ],

    website: "https://svatma.in/",

    map: "https://www.google.com/maps/place/Svatma/@10.7811088,79.1459502,17z/data=!4m10!3m9!1s0x3baab8842fd5c447:0x99b83d99eb6e35!5m3!1s2026-07-22!4m1!1i2!8m2!3d10.7811035!4d79.1485251!16s%2Fg%2F11c3kqv9p9?entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Heritage",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Heritage",
  },

  {
    id: "taj-bentota-resort-spa-sri-lanka",
    name: "Taj Bentota Resort & Spa, Sri Lanka",
    location: "Bentota, Sri Lanka",
    category: "srilanka",

    image: "/Assets/hotels/Taj Bentota Sri Lanka.avif",
    alt: "Taj Bentota Resort & Spa, Sri Lanka, Bentota, Sri Lanka",

    accentClass: "hi--india-coast",

    intro:
      "Celebrating the beauty of Sri Lanka's south-west coast, Taj Bentota Resort & Spa is an elegant beachfront retreat where tropical landscapes, world-class hospitality and breathtaking views of the Indian Ocean come together effortlessly. Designed by the renowned architect Geoffrey Bawa, the resort blends contemporary comfort with Sri Lankan influences, creating a relaxing sanctuary for travellers seeking both leisure and luxury. With its lush gardens, golden sands and warm hospitality, every stay promises an unforgettable coastal escape.\n\nThe spacious rooms and suites feature sophisticated interiors, private balconies and panoramic views of the ocean or landscaped gardens. Guests can savour a diverse selection of Sri Lankan and international cuisine, rejuvenate at the award-winning J Wellness Circle Spa, relax by the infinity pool or enjoy direct access to Bentota's pristine beach. From personalised service to thoughtfully curated experiences, the resort offers an ideal balance of relaxation and recreation.\n\nConveniently located along Sri Lanka's picturesque southern coastline, Taj Bentota Resort & Spa provides easy access to cultural landmarks, wildlife experiences and exciting water sports. Whether exploring scenic rivers, discovering historic forts or simply enjoying spectacular sunsets by the sea, guests are perfectly placed to experience the best of Sri Lanka.",

    why: "Taj Bentota Resort & Spa combines timeless luxury with one of Sri Lanka's most beautiful beachfront settings. Its exceptional hospitality, stunning ocean views and easy access to the island's coastal attractions make it a favourite for discerning travellers.",

    exploreDestination: [
      {
        name: "Bentota Beach",
        description:
          "One of Sri Lanka's finest beaches, Bentota Beach is known for its golden sands, calm waters and excellent opportunities for swimming, sunbathing and a variety of water sports.",
      },
      {
        name: "Madu Ganga",
        description:
          "Take a scenic boat safari through the enchanting mangrove forests of Madu Ganga, where visitors can discover small islands, abundant birdlife, cinnamon plantations and a unique wetland ecosystem.",
      },
      {
        name: "Brief Garden",
        description:
          "Created by renowned landscape architect Bevis Bawa, Brief Garden is a beautifully designed tropical estate featuring lush gardens, sculptures and artistic landscapes that showcase Sri Lanka's horticultural heritage.",
      },
      {
        name: "Lunuganga Estate",
        description:
          "The former country home of Geoffrey Bawa, Lunuganga is one of Sri Lanka's most celebrated garden estates, offering visitors an inspiring blend of architecture, landscape design and natural beauty.",
      },
      {
        name: "Water Sports & River Adventures",
        description:
          "Bentota is one of Sri Lanka's leading destinations for water-based activities. Guests can enjoy jet skiing, kayaking, banana boat rides, paddleboarding, windsurfing and leisurely river cruises through the region's scenic waterways.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Bandaranaike International Airport, Colombo Sri Lanka",
          code: "CMB",
          distance: "105 kms. / 2 hrs. approx. by road.",
        }
      ],
    },

    idealFor: [
      "Beach Holidays",
      "Couples",
      "Honeymooners",
      "Families",
      "Luxury Travellers",
      "Wellness Seekers",
      "Water Sports Enthusiasts",
      "Sri Lanka Coastal Escapes"
    ],

    website: "",

    map: "https://www.google.com/maps/place/Taj+Bentota+Resort+%26+Spa,+Sri+Lanka/@6.4166766,79.9945413,17z/data=!4m9!3m8!1s0x3ae22e97c1f54ec9:0xf52f77510bf52515!5m2!4m1!1i2!8m2!3d6.4166713!4d79.9971162!16s%2Fg%2F11g7ywsvtl?entry=ttu&g_ep=EgoyMDI2MDcyMC4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Beach & Coast",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Beach & Coast",
  },

  {
    id: "taj-exotica-resort-spa-andamans",
    name: "Taj Exotica Resort & Spa, Andamans",
    location: "Andaman Islands",
    category: "india",

    image: "/Assets/hotels/Taj Exotica, Andamans.avif",
    alt: "Taj Exotica Resort & Spa, Andamans, Andaman Islands",

    accentClass: "hi--india-coast",

    intro:
      "Surrounded by the turquoise waters and pristine white sands of Radhanagar Beach on Havelock Island (Swaraj Dweep), Taj Exotica Resort & Spa, Andamans is an extraordinary luxury retreat where untouched natural beauty meets world-class hospitality. Inspired by the indigenous Jarawa style of architecture and thoughtfully designed to blend with its tropical surroundings, the resort offers an idyllic escape amidst lush rainforests, swaying palms and the crystal-clear waters of the Bay of Bengal. It is the perfect destination for travellers seeking serenity, adventure and barefoot luxury.\n\nThe spacious villas and suites are elegantly designed with contemporary comforts, natural materials and private outdoor spaces that immerse guests in the island's tranquil surroundings. Guests can savour exceptional dining experiences featuring fresh seafood and international cuisine, unwind at the luxurious J Wellness Circle Spa, relax by the infinity pool or simply enjoy direct access to one of Asia's most beautiful beaches. Every stay is elevated by Taj's renowned hospitality and personalised service.\n\nBeyond the resort, the Andaman Islands offer a spectacular blend of vibrant coral reefs, lush tropical forests and unforgettable marine experiences. Whether snorkelling among colourful reefs, scuba diving in crystal-clear waters, kayaking through mangrove creeks or watching spectacular sunsets over the Bay of Bengal, Taj Exotica provides an exceptional gateway to one of India's most breathtaking island destinations.",

    why: "Taj Exotica Resort & Spa, Andamans combines barefoot luxury with one of India's most spectacular beachfront settings. Its stunning villas, exceptional hospitality and direct access to the award-winning Radhanagar Beach create an unforgettable tropical island escape.",

    exploreDestination: [
      {
        name: "Radhanagar Beach",
        description:
          "Frequently ranked among Asia's finest beaches, Radhanagar Beach is celebrated for its powdery white sand, turquoise waters and spectacular sunsets. It is perfect for swimming, beach walks and simply soaking in the island's natural beauty.",
      },
      {
        name: "Elephant Beach",
        description:
          "Famous for its vibrant coral reefs and crystal-clear waters, Elephant Beach is one of the best places in the Andamans for snorkelling, sea walking and a variety of exciting water sports.",
      },
      {
        name: "Kalapathar Beach",
        description:
          "A peaceful stretch of coastline lined with dramatic black rocks and swaying coconut palms, Kalapathar Beach offers breathtaking sunrise views and a serene atmosphere away from the crowds.",
      },
      {
        name: "Mangrove Kayaking",
        description:
          "Paddle through the island's tranquil mangrove forests accompanied by experienced guides while discovering the unique ecosystem, birdlife and marine biodiversity that make the Andamans so special.",
      },
      {
        name: "Scuba Diving & Snorkelling",
        description:
          "The Andaman Islands are among India's premier diving destinations. Explore colourful coral gardens, tropical fish, sea turtles and diverse marine life through professionally guided diving and snorkelling excursions.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Nearest Airport: Veer Savarkar International Airport, Andaman and Nicobar Islands",
          code: "",
          distance: "70 km away, followed by a scenic ferry or seaplane transfer to Swaraj Dweep (Havelock Island).",
        }
      ],
    },

    idealFor: [
      "Couples",
      "Honeymooners",
      "Beach Holidays",
      "Luxury Travellers",
      "Families",
      "Scuba Diving Enthusiasts",
      "Nature Lovers",
      "Romantic Island Getaways"
    ],

    website: "https://www.tajhotels.com/en-in/hotels/taj-exotica-andamans",

    map: "https://www.google.com/maps/place/Taj+Exotica+Resort+%26+Spa,+Andamans/@11.9838422,92.9534093,17z/data=!4m9!3m8!1s0x3088d214eadb1bad:0x1daa82ff8dbdd64!5m2!4m1!1i2!8m2!3d11.983837!4d92.9559842!16s%2Fg%2F11dxdjbs5t?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D -",

    tags: [
      "Beach & Coast",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Beach & Coast",
  },

  {
    id: "taj-west-end-bengaluru",
    name: "Taj West End, Bengaluru",
    location: "Bengaluru, Karnataka",
    category: "india",

    image: "/Assets/hotels/Taj West end, Bengaluru.avif",
    alt: "Taj West End, Bengaluru, Bengaluru, Karnataka",

    accentClass: "hi--india-city",

    intro:
      "Spread across 20 acres of lush tropical gardens in the heart of Bengaluru, Taj West End is an iconic luxury hotel that seamlessly blends colonial charm with contemporary elegance. Established in 1887, it is one of the city's oldest and most distinguished hotels, offering a tranquil oasis amidst the vibrant energy of India's Silicon Valley. Majestic rain trees, beautifully landscaped pathways and heritage-inspired architecture create a timeless atmosphere where history, nature and world-class hospitality come together.\n\nThe hotel's elegantly appointed rooms, suites and luxury villas are thoughtfully designed with refined interiors, modern comforts and views of the verdant gardens. Guests can indulge in award-winning culinary experiences featuring Indian, Asian and international cuisine, rejuvenate at the luxurious J Wellness Circle Spa, relax by the outdoor swimming pool or enjoy peaceful walks through the hotel's expansive botanical grounds. Every stay is enhanced by Taj's legendary hospitality and meticulous attention to detail.\n\nPerfectly located close to Bengaluru's Central Business District, major corporate offices and iconic attractions, Taj West End provides an ideal base for both business and leisure travellers. Whether attending meetings, exploring the city's cultural landmarks or simply seeking a luxurious urban retreat, guests are assured of an unforgettable experience.",

    why: "Taj West End is a rare urban sanctuary where heritage architecture meets lush natural surroundings. Its century-old legacy, expansive gardens and impeccable Taj hospitality make it one of Bengaluru's most iconic luxury hotels.",

    exploreDestination: [
      {
        name: "Cubbon Park",
        description:
          "One of Bengaluru's most beloved green spaces, Cubbon Park spans nearly 300 acres of landscaped gardens, heritage buildings and shaded avenues. It is an ideal destination for leisurely walks, cycling and outdoor relaxation.",
      },
      {
        name: "Bangalore Palace",
        description:
          "Inspired by England's Windsor Castle, Bangalore Palace is celebrated for its magnificent Tudor-style architecture, elegant royal interiors and beautifully maintained gardens, offering visitors a glimpse into the city's regal heritage.",
      },
      {
        name: "Lalbagh Botanical Garden",
        description:
          "Home to rare plant species, centuries-old trees and the iconic Glass House, Lalbagh Botanical Garden is one of India's finest botanical gardens and a must-visit attraction for nature lovers.",
      },
      {
        name: "Vidhana Soudha",
        description:
          "An architectural masterpiece and the seat of Karnataka's legislature, Vidhana Soudha is one of Bengaluru's most recognisable landmarks, admired for its impressive granite façade and grand design.",
      },
      {
        name: "UB City",
        description:
          "Bengaluru's premier lifestyle destination, UB City features luxury boutiques, fine dining restaurants, art galleries and stylish cafés, making it a favourite destination for shopping and entertainment.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Nearest Airport: Kempegowda International Airport, Bengaluru",
          code: "BLR",
          distance: "Nearest airport",
        }
      ],
    },

    idealFor: [
      "Luxury Travellers",
      "Business Travellers",
      "Couples",
      "Families",
      "Heritage Enthusiasts",
      "Corporate Executives",
      "Staycations",
      "Food & Lifestyle Enthusiasts"
    ],

    website: "https://www.tajhotels.com/en-in/hotels/taj-west-end-bengaluru",

    map: "https://www.google.com/maps/place/Taj+West+End,+Bengaluru/@12.9845513,77.5820075,17z/data=!4m9!3m8!1s0x3bae1614ae4e21cb:0x43e3a50b3b1a3d3b!5m2!4m1!1i2!8m2!3d12.9845461!4d77.5845824!16s%2Fg%2F1tfb4_z7?entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "City Luxury",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "City Luxury",
  },

  {
    id: "dwarikas-hotel-kathmandu",
    name: "Dwarika's Hotel, Kathmandu",
    location: "Kathmandu, Nepal",
    category: "nepal",

    image: "/Assets/hotels/The Dwarika_s, Nepal.webp",
    alt: "Dwarika's Hotel, Kathmandu, Kathmandu, Nepal",

    accentClass: "hi--india-mountain",

    intro:
      "Located in the heart of Kathmandu, Dwarika's Hotel is one of Nepal's most celebrated heritage hotels, where centuries-old craftsmanship meets refined luxury. Built as a tribute to Nepal's rich architectural legacy, the hotel is renowned for preserving intricately carved wooden masterpieces salvaged from historic buildings across the Kathmandu Valley. Every courtyard, corridor and handcrafted detail reflects the timeless beauty of traditional Newari architecture, creating an atmosphere that is both culturally immersive and exceptionally elegant.\n\nThe beautifully appointed rooms and suites combine authentic Nepalese design with modern comforts, featuring handcrafted woodwork, antique furnishings and luxurious amenities. The hotel's tranquil courtyards, serene swimming pool, holistic spa and award-winning restaurants provide a peaceful sanctuary amidst the vibrant capital. Guests can savour authentic Nepali cuisine alongside international delicacies while enjoying the personalised hospitality that has made Dwarika's one of Asia's most acclaimed luxury hotels.\n\nPerfectly located near many of Kathmandu's UNESCO World Heritage Sites, Dwarika's Hotel offers an exceptional base for exploring Nepal's rich history, spirituality and culture. Whether embarking on a Himalayan adventure, discovering ancient temples or seeking a luxurious cultural retreat, the hotel promises an unforgettable experience rooted in Nepalese tradition.",

    why: "Dwarika's Hotel is much more than a luxury stay—it's a living museum of Nepalese heritage. Its remarkable architecture, commitment to preserving traditional craftsmanship and world-class hospitality make every visit a truly enriching experience.",

    exploreDestination: [
      {
        name: "Pashupatinath Temple",
        description:
          "Located just minutes from the hotel, this UNESCO World Heritage Site is Nepal's most sacred Hindu temple dedicated to Lord Shiva. The temple's magnificent pagoda architecture and centuries-old rituals offer an unforgettable spiritual experience.",
      },
      {
        name: "Boudhanath Stupa",
        description:
          "One of the largest Buddhist stupas in the world, Boudhanath is the spiritual heart of Tibetan Buddhism in Nepal. Surrounded by monasteries, prayer wheels and colourful prayer flags, it provides a peaceful and inspiring atmosphere.",
      },
      {
        name: "Kathmandu Durbar Square",
        description:
          "A UNESCO World Heritage Site, Kathmandu Durbar Square showcases magnificent palaces, intricately carved temples and historic courtyards that reflect the artistic brilliance of Nepal's Malla kings.",
      },
      {
        name: "Patan Durbar Square",
        description:
          "Famous for its beautifully preserved Newari architecture, artisan workshops and remarkable temples, Patan Durbar Square is one of the finest examples of Nepal's cultural and artistic heritage.",
      },
      {
        name: "Swayambhunath",
        description:
          "Perched atop a hill overlooking Kathmandu Valley, Swayambhunath—popularly known as the Monkey Temple—is one of Nepal's oldest and most revered Buddhist shrines, offering spectacular panoramic views of the city.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Tribhuvan International Airport, Kathmandu",
          code: "KTM",
          distance: "Nearest airport",
        }
      ],
    },

    idealFor: [
      "Luxury Travellers",
      "Heritage Enthusiasts",
      "Cultural Explorers",
      "Couples",
      "Honeymooners",
      "Families",
      "Wellness Seekers",
      "Himalayan Holidaymakers"
    ],

    website: "",

    map: "https://www.google.com/maps/place/The+Dwarika's/@27.7051676,85.3397496,17z/data=!4m9!3m8!1s0x39eb199d62b49797:0x2138d3ae677c130f!5m2!4m1!1i2!8m2!3d27.7051629!4d85.3423245!16s%2Fm%2F03g__b_?entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Mountain Retreat",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Mountain Retreat",
  },

  {
    id: "the-everest-hotel-kathmandu",
    name: "The Everest Hotel, Kathmandu",
    location: "Kathmandu, Nepal",
    category: "nepal",

    image: "/Assets/hotels/The Everest Hotel, Nepal.jpg",
    alt: "The Everest Hotel, Kathmandu, Kathmandu, Nepal",

    accentClass: "hi--india-mountain",

    intro:
      "Located in the vibrant capital city of Kathmandu, The Everest Hotel is one of Nepal's most established five-star hotels, offering a harmonious blend of traditional Nepalese hospitality and contemporary comfort. Conveniently situated just a short drive from the city's cultural landmarks, business districts and the international airport, the hotel has long been a preferred choice for leisure travellers, business guests and pilgrims exploring the Himalayan nation. Its elegant ambience, spacious accommodation and warm service provide a welcoming retreat amidst the energy of Kathmandu.\n\nThe hotel features well-appointed rooms and suites with contemporary interiors, comfortable furnishings and views of the Kathmandu Valley or the surrounding cityscape. Guests can enjoy a diverse range of dining experiences featuring authentic Nepalese, Indian, Chinese and international cuisines, relax by the outdoor swimming pool, rejuvenate at the wellness centre or unwind in the beautifully landscaped gardens. Combining modern amenities with genuine Nepalese hospitality, The Everest Hotel offers a comfortable base from which to discover the country's remarkable heritage.\n\nKathmandu is a fascinating city where centuries-old temples, bustling markets and sacred Buddhist stupas coexist with lively cafés and vibrant local culture. Whether exploring UNESCO World Heritage Sites, beginning a Himalayan adventure or embarking on a spiritual journey, The Everest Hotel provides an ideal gateway to the rich history, traditions and natural beauty of Nepal.",

    why: "The Everest Hotel combines an excellent location, warm Nepalese hospitality and comfortable luxury, making it an ideal base for discovering Kathmandu's extraordinary blend of history, spirituality and culture.",

    exploreDestination: [
      {
        name: "Pashupatinath Temple",
        description:
          "One of the holiest Hindu temples dedicated to Lord Shiva, Pashupatinath is a UNESCO World Heritage Site situated on the banks of the Bagmati River. Its magnificent pagoda-style architecture, sacred rituals and spiritual significance make it one of Nepal's most important pilgrimage destinations.",
      },
      {
        name: "Boudhanath Stupa",
        description:
          "Among the largest Buddhist stupas in the world, Boudhanath is the spiritual heart of Tibetan Buddhism in Nepal. Colourful prayer flags, monasteries and prayer wheels surround the magnificent white dome, creating a peaceful atmosphere for visitors.",
      },
      {
        name: "Kathmandu Durbar Square",
        description:
          "A UNESCO World Heritage Site, Kathmandu Durbar Square showcases centuries of Nepalese architecture through its royal palaces, intricately carved temples and historic courtyards. It offers fascinating insight into the city's rich cultural and royal heritage.",
      },
      {
        name: "Swayambhunath",
        description:
          "Popularly known as the Monkey Temple, Swayambhunath sits atop a hill overlooking Kathmandu Valley. Visitors are rewarded with panoramic city views, ancient shrines and a tranquil spiritual atmosphere.",
      },
      {
        name: "Patan Durbar Square",
        description:
          "Located in the neighbouring city of Lalitpur, this UNESCO World Heritage Site is renowned for its beautifully preserved Newari architecture, exquisite temples, artisan workshops and fascinating museums that celebrate Nepal's artistic heritage.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Nearest Airport: Tribhuvan International Airport, Kathmandu",
          code: "KTM",
          distance: "Nearest airport",
        }
      ],
    },

    idealFor: [
      "Couples",
      "Families",
      "Heritage Travellers",
      "Cultural Explorers",
      "Pilgrimage Tours",
      "Business Travellers",
      "Himalayan Holidaymakers",
      "Nepal Discovery Tours"
    ],

    website: "",

    map: "https://www.google.com/maps/place/The+Everest+Hotel/@27.6890988,85.3312608,17z/data=!4m9!3m8!1s0x39eb19bde57100db:0x9c61dc37723b191a!5m2!4m1!1i2!8m2!3d27.6890941!4d85.3338357!16s%2Fg%2F11c4mfv34s?entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Mountain Retreat",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Mountain Retreat",
  },

  {
    id: "the-khyber-himalayan-resort-spa-gulmarg",
    name: "The Khyber Himalayan Resort & Spa, Gulmarg",
    location: "Gulmarg, Kashmir",
    category: "india",

    image: "/Assets/hotels/The Khyber, Kashmir.jpg",
    alt: "The Khyber Himalayan Resort & Spa, Gulmarg, Gulmarg, Kashmir",

    accentClass: "hi--india-mountain",

    intro:
      "Commanding magnificent views of the Pir Panjal range and the pristine landscapes of Gulmarg, The Khyber Himalayan Resort & Spa is one of Kashmir's most luxurious mountain retreats. Set at an elevation of over 8,000 feet, the resort offers breathtaking views of snow-clad peaks, alpine meadows and dense pine forests, creating an idyllic escape in every season. Combining traditional Kashmiri craftsmanship with contemporary luxury, The Khyber provides an unforgettable experience where nature, comfort and warm hospitality come together seamlessly.\n\nThe elegantly appointed rooms, suites and luxury cottages feature handcrafted interiors, rich wood finishes and expansive windows that frame spectacular mountain vistas. Guests can indulge in authentic Kashmiri and international cuisine, rejuvenate at the award-winning spa, relax in the heated indoor pool overlooking the Himalayas or simply unwind amidst the serenity of the surrounding landscape. Whether visiting during the snow-covered winter months or the vibrant summer season, every stay promises exceptional comfort and personalised service.\n\nPerfectly positioned near the famous Gulmarg Gondola and the region's renowned ski slopes, the resort is an ideal base for exploring Kashmir's natural beauty and outdoor adventures. From skiing and snowboarding to scenic hikes, golfing and gondola rides, The Khyber offers year-round experiences in one of India's most spectacular mountain destinations.",

    why: "The Khyber Himalayan Resort & Spa perfectly combines world-class luxury with the breathtaking beauty of Kashmir. Its spectacular location, exceptional hospitality and direct access to Gulmarg's outdoor adventures make it one of India's finest mountain resorts.",

    exploreDestination: [
      {
        name: "Gulmarg Gondola",
        description:
          "One of the world's highest cable cars, the Gulmarg Gondola takes visitors to breathtaking altitudes, offering panoramic Himalayan views and access to world-renowned skiing and trekking routes.",
      },
      {
        name: "Gulmarg Golf Club",
        description:
          "Among the highest golf courses in the world, this spectacular 18-hole course offers an unforgettable golfing experience surrounded by snow-capped mountains and lush alpine meadows.",
      },
      {
        name: "St. Mary's Church",
        description:
          "Built during the British era, this charming Victorian-style church is one of Gulmarg's most picturesque landmarks, set amidst towering pine trees and beautiful mountain scenery.",
      },
      {
        name: "Maharani Temple",
        description:
          "Dedicated to Lord Shiva, this historic hilltop temple offers sweeping views of Gulmarg and the surrounding valleys while showcasing the region's rich spiritual heritage.",
      },
      {
        name: "Skiing & Alpine Adventures",
        description:
          "Gulmarg is India's premier skiing destination, offering world-class slopes for beginners and experienced skiers alike. During the warmer months, visitors can enjoy trekking, mountain biking, horse riding and nature walks through the surrounding alpine landscapes.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Srinagar Airport",
          code: "SXR",
          distance: "60 kms. / 1.5 hrs. approx. by road.",
        }
      ],
    },

    idealFor: [
      "Luxury Travellers",
      "Couples",
      "Honeymooners",
      "Ski Enthusiasts",
      "Adventure Seekers",
      "Nature Lovers",
      "Families",
      "Himalayan Holidays"
    ],

    website: "https://www.khyberhotels.com/",

    map: "https://www.google.com/maps/place/The+Khyber+Himalayan+Resort+%26+Spa/@34.0432274,74.3823951,17z/data=!4m9!3m8!1s0x38e1afe7d48b3de7:0x59fd37192aabf049!5m2!4m1!1i2!8m2!3d34.043223!4d74.38497!16s%2Fg%2F11c4jb1855?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Mountain Retreat",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Mountain Retreat",
  },

  {
    id: "the-kingsbury-hotel-colombo-sri-lanka",
    name: "The Kingsbury Hotel, Colombo, Sri Lanka",
    location: "Colombo, Sri Lanka",
    category: "srilanka",

    image: "/Assets/hotels/The Kingsbury hotel, Sri Lanka.jpg",
    alt: "The Kingsbury Hotel, Colombo, Sri Lanka, Colombo, Sri Lanka",

    accentClass: "hi--india-coast",

    intro:
      "Capturing the energy of Colombo's vibrant waterfront, The Kingsbury Hotel is an elegant luxury hotel that combines sophisticated city living with breathtaking views of the Indian Ocean and the historic Colombo Harbour. Ideally located in the heart of Sri Lanka's capital, the hotel offers a seamless blend of contemporary comfort, refined hospitality and convenient access to the city's cultural, commercial and culinary attractions. Whether travelling for leisure or business, guests can expect a memorable stay in one of Colombo's most distinguished addresses.\n\nThe beautifully appointed rooms and suites feature stylish interiors, modern amenities and panoramic views of the ocean or city skyline. Guests can savour an exceptional selection of international and Sri Lankan cuisine across the hotel's acclaimed restaurants, relax by the outdoor pool, rejuvenate at the wellness spa or enjoy handcrafted cocktails while overlooking the coastline. Attentive service and thoughtfully curated experiences create an atmosphere of effortless luxury throughout the stay.\n\nPerfectly positioned for discovering Colombo's rich heritage and cosmopolitan charm, The Kingsbury Hotel provides easy access to historic landmarks, bustling shopping districts, lively cafés and the city's picturesque waterfront, making it an ideal gateway to Sri Lanka.",

    why: "The Kingsbury Hotel offers contemporary luxury in one of Colombo's finest waterfront locations. Its elegant accommodation, diverse dining experiences and exceptional hospitality make it an excellent choice for exploring Sri Lanka's dynamic capital.",

    exploreDestination: [
      {
        name: "Galle Face Green",
        description:
          "One of Colombo's most iconic waterfront promenades, Galle Face Green is perfect for evening strolls, spectacular sunsets, local street food and panoramic views of the Indian Ocean.",
      },
      {
        name: "Gangaramaya Temple",
        description:
          "Among Sri Lanka's most important Buddhist temples, Gangaramaya showcases a fascinating blend of Sri Lankan, Thai, Indian and Chinese architectural influences along with an impressive museum.",
      },
      {
        name: "Colombo National Museum",
        description:
          "Sri Lanka's largest museum houses an extensive collection of royal artefacts, historical treasures and cultural exhibits that offer valuable insight into the island's rich heritage.",
      },
      {
        name: "Pettah Market",
        description:
          "Experience the vibrant atmosphere of Colombo's famous market district, where colourful streets are lined with shops selling spices, textiles, handicrafts, jewellery and local delicacies.",
      },
      {
        name: "Colombo City & Culinary Experiences",
        description:
          "Discover Colombo's thriving dining scene, contemporary art galleries, boutique shopping and colonial architecture while experiencing the city's unique blend of history, culture and modern sophistication.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Bandaranaike International Airport, Sri Lanka",
          code: "CMB",
          distance: "Nearest airport",
        }
      ],
    },

    idealFor: [
      "Luxury City Breaks",
      "Business Travellers",
      "Couples",
      "Families",
      "Cultural Explorers",
      "Food Enthusiasts",
      "Sri Lanka Holidays",
      "Short Stopovers"
    ],

    website: "",

    map: "https://www.google.com/maps/place/The+Kingsbury+Colombo/@6.9328582,79.8393657,17z/data=!4m9!3m8!1s0x3ae259259a6157fb:0x8c0cebb288af4419!5m2!4m1!1i2!8m2!3d6.9328529!4d79.8419406!16s%2Fm%2F025x4p6?entry=ttu&g_ep=EgoyMDI2MDcyMC4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Beach & Coast",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Beach & Coast",
  },

  {
    id: "the-kumaon-uttarakhand",
    name: "The Kumaon, Uttarakhand",
    location: "Binsar, Uttarakhand",
    category: "india",

    image: "/Assets/hotels/The Kumaon, Uttarakhand.jpg",
    alt: "The Kumaon, Uttarakhand, Binsar, Uttarakhand",

    accentClass: "hi--india-mountain",

    intro:
      "https://www.google.com/maps/place/The+Kumaon/@29.6607043,79.6693701,17z/data=!3m1!4b1!4m9!3m8!1s0x39a0b2490dc15c13:0xc771e7b54ec9240e!5m2!4m1!1i2!8m2!3d29.6606997!4d79.671945!16s%2Fg%2F11g8bwq9pn?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D – Location Link\n\nPerched high above the Kumaon Himalayas, The Kumaon is an exclusive boutique retreat that offers an extraordinary blend of contemporary design, breathtaking mountain scenery and immersive nature experiences. Thoughtfully designed to harmonise with its pristine surroundings, the property features striking minimalist architecture that frames uninterrupted views of the Himalayan peaks. Surrounded by forests, traditional villages and tranquil mountain landscapes, The Kumaon is an ideal sanctuary for travellers seeking serenity, adventure and meaningful connections with nature.\n\nThe elegantly designed suites showcase floor-to-ceiling glass windows, handcrafted interiors and modern comforts that allow the spectacular landscape to take centre stage. Guests can savour locally inspired cuisine prepared with fresh regional ingredients, enjoy guided nature walks, participate in village experiences or simply relax while watching the ever-changing panorama of the Himalayas. Personalised hospitality and intimate surroundings ensure every stay is peaceful, enriching and unforgettable.\n\nPerfectly located for exploring the Kumaon region, the retreat provides access to picturesque mountain trails, wildlife-rich forests, ancient temples and charming Himalayan villages. Whether you're seeking quiet reflection, outdoor adventure or a luxurious mountain escape, The Kumaon offers an authentic experience amidst one of India's most spectacular landscapes.",

    why: "The Kumaon combines award-winning contemporary architecture with panoramic Himalayan views and exceptional personalised hospitality. Its peaceful setting and immersive local experiences make it one of Uttarakhand's finest boutique mountain retreats.",

    exploreDestination: [
      {
        name: "Binsar Wildlife Sanctuary",
        description:
          "A paradise for nature lovers and birdwatchers, Binsar Wildlife Sanctuary is home to dense oak and rhododendron forests, diverse Himalayan wildlife and scenic walking trails with breathtaking mountain vistas.",
      },
      {
        name: "Zero Point",
        description:
          "One of the region's most spectacular viewpoints, Zero Point offers sweeping views of iconic Himalayan peaks including Nanda Devi, Trishul and Panchachuli on clear days.",
      },
      {
        name: "Jageshwar Dham",
        description:
          "This remarkable temple complex comprises over 100 ancient stone temples dedicated to Lord Shiva. Nestled within a deodar forest, it is one of Uttarakhand's most significant spiritual and architectural treasures.",
      },
      {
        name: "Village Walks & Cultural Experiences",
        description:
          "Explore traditional Kumaoni villages, interact with local communities and discover the region's rich heritage, architecture and cuisine while gaining insights into the mountain way of life.",
      },
      {
        name: "Himalayan Nature Trails",
        description:
          "The surrounding landscape offers numerous opportunities for guided hikes through pine and oak forests, scenic ridge walks and birdwatching excursions, allowing guests to experience the untouched beauty of the Kumaon Himalayas.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Nearest Airport: Pantnagar Airport",
          code: "PGH",
          distance: "130 kms. / 4 hrs. approx. by road.",
        }
      ],
    },

    idealFor: [
      "Couples",
      "Honeymooners",
      "Nature Lovers",
      "Luxury Travellers",
      "Wellness Retreats",
      "Photography Enthusiasts",
      "Adventure Seekers",
      "Himalayan Escapes"
    ],

    website: "",

    map: "https://thekumaon.com/ - Website",

    tags: [
      "Mountain Retreat",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Mountain Retreat",
  },

  {
    id: "the-leela-hyderabad",
    name: "The Leela Hyderabad",
    location: "Hyderabad, Telangana",
    category: "india",

    image: "/Assets/hotels/The Leela, Hyderabad.webp",
    alt: "The Leela Hyderabad, Hyderabad, Telangana",

    accentClass: "hi--india-city",

    intro:
      "Rising as a symbol of contemporary luxury in the heart of Hyderabad, The Leela Hyderabad blends timeless elegance with the city's rich cultural heritage. Thoughtfully designed to reflect the grandeur of the Nizams while embracing modern sophistication, the hotel offers an exceptional retreat for business and leisure travellers alike. Elegant architecture, refined interiors and impeccable service create an atmosphere of understated luxury, making every stay both memorable and effortless.\n\nThe hotel's spacious rooms and suites feature beautifully crafted interiors, premium amenities and sweeping views of Hyderabad's skyline. Guests can indulge in exceptional culinary experiences across its signature restaurants, rejuvenate at the luxurious spa, unwind by the serene swimming pool or enjoy personalised service that embodies The Leela's renowned hospitality. Every detail has been carefully curated to deliver an experience of comfort, elegance and exclusivity.\n\nIdeally located with easy access to Hyderabad's financial district, historic landmarks and vibrant shopping destinations, The Leela Hyderabad serves as the perfect gateway to explore the City of Pearls. Whether discovering centuries-old monuments, attending business engagements or experiencing the city's celebrated cuisine, guests are assured of a luxurious and enriching stay.",

    why: "The Leela Hyderabad beautifully combines royal-inspired elegance with contemporary luxury. Its exceptional hospitality, sophisticated accommodation and convenient location make it one of Hyderabad's most distinguished luxury destinations.",

    exploreDestination: [
      {
        name: "Charminar",
        description:
          "The iconic symbol of Hyderabad, Charminar has stood at the heart of the city since 1591. Surrounded by bustling markets and historic streets, this magnificent monument is a must-visit for its architecture, history and vibrant atmosphere.",
      },
      {
        name: "Golconda Fort",
        description:
          "One of India's most impressive hill forts, Golconda Fort is renowned for its remarkable acoustics, massive gateways and panoramic views of Hyderabad. The evening sound-and-light show brings its fascinating history to life.",
      },
      {
        name: "Chowmahalla Palace",
        description:
          "The former seat of the Nizams of Hyderabad, Chowmahalla Palace showcases magnificent courtyards, elegant halls, royal artefacts and exquisite architecture that reflects the splendour of a bygone era.",
      },
      {
        name: "Salar Jung Museum",
        description:
          "One of India's finest museums, the Salar Jung Museum houses an extraordinary collection of sculptures, paintings, manuscripts, textiles and antiques gathered from around the world.",
      },
      {
        name: "Hussain Sagar",
        description:
          "This picturesque lake is one of Hyderabad's most popular attractions, featuring a towering Buddha statue at its centre. Visitors can enjoy boat rides, lakeside promenades and beautiful sunset views.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Rajiv Gandhi International Airport, Hyderabad",
          code: "HYD",
          distance: "Nearest airport",
        }
      ],
    },

    idealFor: [
      "Luxury Travellers",
      "Business Travellers",
      "Couples",
      "Families",
      "Corporate Executives",
      "Heritage Explorers",
      "Food Enthusiasts",
      "Hyderabad City Breaks"
    ],

    website: "https://www.theleela.com/the-leela-hyderabad",

    map: "https://www.google.com/maps/place/The+Leela+Hyderabad/@17.4272385,78.4361444,17z/data=!4m9!3m8!1s0x3bcb9114d00e36cd:0xdee567eba2d5ed23!5m2!4m1!1i2!8m2!3d17.4272334!4d78.4387193!16s%2Fg%2F11v6wppv4x?entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "City Luxury",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "City Luxury",
  },

  {
    id: "the-malabar-house-kochi",
    name: "The Malabar House, Kochi",
    location: "Fort Kochi, Kerala",
    category: "india",

    image: "/Assets/hotels/The Malabar House, Kochi.jpg",
    alt: "The Malabar House, Kochi, Fort Kochi, Kerala",

    accentClass: "hi--india-city",

    intro:
      "Located in the heart of Fort Kochi's historic quarter, The Malabar House is a charming boutique heritage hotel that beautifully captures the artistic soul and colonial legacy of Kerala's most iconic port city. Housed within a carefully restored heritage building, the hotel seamlessly blends Dutch, Portuguese and traditional Kerala influences with contemporary comforts. Its elegant architecture, vibrant artwork and intimate ambience create a unique retreat where history, culture and warm hospitality come together.\n\nEach individually designed room and suite reflects the character of the property, featuring handcrafted furnishings, curated artwork and modern amenities that ensure a comfortable stay. The hotel's tranquil courtyard, inviting swimming pool and acclaimed restaurant offer a peaceful escape after a day of exploring Fort Kochi's charming streets. Guests can savour authentic Kerala cuisine prepared with fresh local ingredients while experiencing the personalised service that has made The Malabar House one of Kochi's most celebrated boutique hotels.\n\nPerfectly positioned within walking distance of Fort Kochi's historic landmarks, art galleries and waterfront, the hotel provides an ideal base for discovering the city's fascinating blend of cultures. Whether admiring colonial architecture, watching the famous Chinese Fishing Nets at sunset or immersing yourself in Kochi's thriving art scene, The Malabar House offers an unforgettable heritage experience.",

    why: "The Malabar House combines boutique luxury with authentic heritage charm. Its beautifully restored architecture, curated art collection and prime location in Fort Kochi make it one of Kerala's most distinctive and character-filled stays.",

    exploreDestination: [
      {
        name: "Chinese Fishing Nets",
        description:
          "The iconic Chinese Fishing Nets have become the enduring symbol of Kochi. Operating for centuries along the waterfront, these traditional cantilevered fishing nets offer one of the city's most photographed sunset views.",
      },
      {
        name: "St. Francis Church",
        description:
          "Believed to be the oldest European church in India, St. Francis Church is closely associated with the Portuguese explorer Vasco da Gama and reflects Fort Kochi's rich colonial heritage.",
      },
      {
        name: "Mattancherry Palace",
        description:
          "Also known as the Dutch Palace, this historic landmark houses exquisite Kerala murals, royal artefacts and exhibits that showcase the history of the Cochin royal family.",
      },
      {
        name: "Jew Town",
        description:
          "One of Kochi's most vibrant heritage precincts, Jew Town is famous for its antique shops, spice warehouses, artisan boutiques and beautifully preserved colonial-era buildings.",
      },
      {
        name: "Paradesi Synagogue",
        description:
          "Built in 1568, the Paradesi Synagogue is the oldest active synagogue in the Commonwealth. Its hand-painted Chinese tiles, Belgian chandeliers and centuries-old artefacts make it a remarkable cultural landmark.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Nearest Airport: Cochin International Airport",
          code: "COK",
          distance: "Nearest airport",
        }
      ],
    },

    idealFor: [
      "Heritage Travellers",
      "Couples",
      "Honeymooners",
      "Art & Culture Enthusiasts",
      "Boutique Luxury Seekers",
      "Families",
      "Food Lovers",
      "Kerala Heritage Holidays"
    ],

    website: "https://www.malabarhouse.com/",

    map: "https://www.google.com/maps/place/The+Malabar+House,+Fort+Kochi/@9.964442,76.2368976,17z/data=!3m1!4b1!4m9!3m8!1s0x3b086d0578ead20b:0xef474d8f1a278ce9!5m2!4m1!1i2!8m2!3d9.9644367!4d76.2394725!16s%2Fg%2F11rnfbsfj6?entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "City Luxury",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "City Luxury",
  },

  {
    id: "the-mudhouse-marayoor-munnar",
    name: "The Mudhouse Marayoor, Munnar",
    location: "Marayoor, Kerala",
    category: "india",

    image: "/Assets/hotels/The Mud house Marayoor, Munnar.jpg",
    alt: "The Mudhouse Marayoor, Munnar, Marayoor, Kerala",

    accentClass: "hi--india-coast",

    intro:
      "Inspired by the timeless beauty of Marayoor's sandalwood forests and rolling hills, The Mudhouse Marayoor is a charming eco-luxury retreat that celebrates the simplicity of nature and Kerala's rich rural heritage. Built using sustainable materials and traditional earthen architecture, the property offers an authentic countryside experience without compromising on modern comfort. Surrounded by expansive farmlands, ancient dolmens and the pristine landscapes of the Western Ghats, it provides a peaceful escape for travellers seeking tranquillity, culture and meaningful experiences.\n\nThe thoughtfully designed cottages feature rustic interiors crafted with natural materials, complemented by modern amenities and private outdoor spaces overlooking the surrounding countryside. Guests can savour wholesome Kerala cuisine prepared with fresh local produce, explore organic farms, enjoy guided nature walks or simply unwind amidst the refreshing mountain air. Warm hospitality and personalised experiences create an atmosphere where guests can reconnect with nature at a relaxed pace.\n\nThe Mudhouse is ideally located for exploring Marayoor's unique attractions, including its famous sandalwood forests, prehistoric monuments, waterfalls and scenic mountain trails. Whether discovering the region's rich biodiversity, interacting with local communities or enjoying the serene beauty of the Western Ghats, every stay promises an unforgettable journey into one of Kerala's most distinctive landscapes.",

    why: "The Mudhouse Marayoor offers an authentic eco-luxury experience where sustainable living, traditional architecture and Kerala's natural beauty come together. Its peaceful setting and immersive local experiences make it a perfect retreat for slow travellers and nature enthusiasts.",

    exploreDestination: [
      {
        name: "Marayoor Sandalwood Forest",
        description:
          "Marayoor is home to Kerala's only natural sandalwood forests. Guided walks through these protected forests offer visitors an opportunity to learn about the region's unique ecosystem and the significance of sandalwood cultivation.",
      },
      {
        name: "Muniyara Dolmens",
        description:
          "Dating back thousands of years, these fascinating prehistoric stone burial chambers provide a glimpse into the region's ancient civilisation and are among Marayoor's most significant archaeological attractions.",
      },
      {
        name: "Chinnar Wildlife Sanctuary",
        description:
          "A biodiversity hotspot in the Western Ghats, Chinnar Wildlife Sanctuary is renowned for its rich wildlife, including the endangered grizzled giant squirrel, elephants, spotted deer and numerous bird species.",
      },
      {
        name: "Thoovanam Waterfalls",
        description:
          "Reached via a scenic trek through the sanctuary, Thoovanam Waterfalls offers spectacular views and an opportunity to experience the pristine wilderness of the Western Ghats.",
      },
      {
        name: "Sugarcane Farms & Local Village Experiences",
        description:
          "Marayoor is famous for its traditional sugarcane cultivation and jaggery production. Visitors can explore local farms, witness age-old farming practices and experience the warm hospitality and culture of the local communities.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Cochin International Airport",
          code: "",
          distance: "145 kms / 4 hrs. approx. by road.",
        }
      ],
    },

    idealFor: [
      "Nature Lovers",
      "Eco-Luxury Travellers",
      "Couples",
      "Honeymooners",
      "Wellness Seekers",
      "Families",
      "Photography Enthusiasts",
      "Slow Travel Experiences"
    ],

    website: "https://themudhouse.co.in/",

    map: "https://www.google.com/maps/place/The+Mudhouse+Marayoor/@10.2382273,77.1526359,17z/data=!4m10!3m9!1s0x3b078251fe6e5abd:0x856ada2852febf74!5m3!1s2026-07-19!4m1!1i2!8m2!3d10.238222!4d77.1552108!16s%2Fg%2F11f553d7_g?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Beach & Coast",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Beach & Coast",
  },

  {
    id: "the-oberoi-vindhyavilas-wildlife-resort-bandhavgarh",
    name: "The Oberoi Vindhyavilas Wildlife Resort, Bandhavgarh",
    location: "Bandhavgarh, Madhya Pradesh",
    category: "india",

    image: "/Assets/hotels/The Oberoi Vindhyavilas Madhya Pradesh.jpg",
    alt: "The Oberoi Vindhyavilas Wildlife Resort, Bandhavgarh, Bandhavgarh, Madhya Pradesh",

    accentClass: "hi--india-wildlife",

    intro:
      "Set on the fringes of the legendary Bandhavgarh National Park, The Oberoi Vindhyavilas Wildlife Resort is an exceptional luxury retreat that brings together the thrill of India's wilderness with the refined elegance of Oberoi hospitality. Surrounded by lush forests and inspired by the natural beauty of the Vindhya mountain range, the resort offers an immersive safari experience where guests can reconnect with nature without compromising on comfort. Every aspect of the property has been thoughtfully designed to complement its surroundings, creating an atmosphere of tranquillity and understated luxury.\n\nThe spacious luxury tents and villas blend contemporary comforts with safari-inspired design, featuring handcrafted furnishings, elegant interiors and private outdoor spaces that overlook the surrounding landscape. Guests can savour gourmet cuisine crafted from fresh regional ingredients, unwind with bespoke wellness experiences, relax by the swimming pool or simply enjoy the sounds of the forest from the privacy of their accommodation. Guided by Oberoi's renowned service philosophy, every stay is personalised to ensure unforgettable wildlife encounters and meaningful moments in nature.\n\nBandhavgarh National Park is regarded as one of India's finest tiger reserves, celebrated for its remarkable density of Bengal tigers and rich biodiversity. Alongside thrilling jeep safaris, guests can discover ancient caves, centuries-old temples and the historic Bandhavgarh Fort, making every visit a unique blend of wildlife, history and culture. Whether seeking adventure, relaxation or an intimate connection with nature, The Oberoi Vindhyavilas promises an extraordinary escape into the heart of Central India.",

    why: "The Oberoi Vindhyavilas combines world-class luxury with one of India's most rewarding wildlife destinations. Elegant safari-style accommodation, impeccable Oberoi hospitality and unforgettable tiger safaris make every stay an extraordinary wilderness experience.",

    exploreDestination: [
      {
        name: "Bandhavgarh National Park",
        description:
          "Renowned for having one of the highest densities of Bengal tigers in India, Bandhavgarh National Park is also home to leopards, sloth bears, Indian bison, deer and over 250 species of birds. Guided jeep safaris offer exceptional opportunities to experience the park's extraordinary wildlife and diverse landscapes.",
      },
      {
        name: "Bandhavgarh Fort",
        description:
          "Perched atop a hill within the national park, the ancient Bandhavgarh Fort is believed to be over 2,000 years old. Visitors can explore its historic ruins, temples and breathtaking viewpoints while learning about the region's fascinating history and mythology.",
      },
      {
        name: "Shesh Shaiya",
        description:
          "One of the park's most revered landmarks, Shesh Shaiya features a magnificent reclining statue of Lord Vishnu carved from stone. Surrounded by dense forest, the site holds immense religious and historical significance.",
      },
      {
        name: "Nature Walks & Birdwatching",
        description:
          "Accompanied by expert naturalists, guided walks around the resort introduce guests to the rich flora, butterflies and birdlife that thrive around Bandhavgarh. These experiences offer a deeper appreciation of the park's delicate ecosystem beyond traditional game drives.",
      },
      {
        name: "Village & Cultural Experiences",
        description:
          "Explore nearby rural villages to gain insight into the traditions, handicrafts and everyday lives of the local communities. These authentic experiences showcase the close relationship between the people of the region and the surrounding forests.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Dumna Airport, Jabalpur",
          code: "",
          distance: "170 kms / 4 hrs. by road",
        },
        {
          name: "Khajuraho Airport",
          code: "",
          distance: "250 kms / 6 hrs. by road.",
        }
      ],
    },

    idealFor: [
      "Wildlife Enthusiasts",
      "Luxury Safari Holidays",
      "Couples",
      "Honeymooners",
      "Nature Lovers",
      "Wildlife Photographers",
      "Families",
      "Luxury Adventure Travellers"
    ],

    website: "https://www.oberoihotels.com/hotels-in-bandhavgarh-vindhyavilas-resort/",

    map: "https://www.google.com/maps/place/The+Oberoi+Vindhyavilas+Wildlife+Resort,+Bandhavgarh/@23.6383211,80.8704269,12z/data=!4m13!1m2!2m1!1sThe+Oberoi+Vindhyavilas!3m9!1s0x3986a36dc8153775:0x8bf7784fc7cc1dc1!5m2!4m1!1i2!8m2!3d23.7455421!4d81.0769889!15sChdUaGUgT2Jlcm9pIFZpbmRoeWF2aWxhc5IBDHJlc29ydF9ob3RlbOABAA!16s%2Fg%2F11y7hxnn71?entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D 0-",

    tags: [
      "Wildlife",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Wildlife",
  },

  {
    id: "the-pavilions-himalayas-the-farm-nepal",
    name: "The Pavilions Himalayas – The Farm, Nepal",
    location: "Pokhara, Nepal",
    category: "nepal",

    image: "/Assets/hotels/The Pavilions Himalayas - The Farm Nepal.webp",
    alt: "The Pavilions Himalayas – The Farm, Nepal, Pokhara, Nepal",

    accentClass: "hi--india-mountain",

    intro:
      "Rooted in the principles of sustainable luxury and community living, The Pavilions Himalayas – The Farm is an extraordinary eco-retreat nestled in the scenic hills outside Pokhara. Spread across an organic working farm, the property offers an immersive escape where breathtaking Himalayan landscapes, farm-to-table living and mindful hospitality come together in perfect harmony. Designed to reconnect guests with nature while supporting local communities, it is an ideal destination for those seeking authenticity, wellness and responsible travel.\n\nThe spacious villas blend contemporary comfort with traditional Nepalese craftsmanship, featuring natural materials, elegant interiors and panoramic views of the surrounding valleys and mountains. Guests can enjoy fresh organic cuisine prepared from produce grown on the farm, participate in yoga and wellness sessions, explore scenic hiking trails or simply unwind amidst the peaceful countryside. Every experience is thoughtfully curated to celebrate sustainability, local culture and the beauty of Nepal's natural environment.\n\nConveniently located near Pokhara, the retreat offers easy access to some of Nepal's most iconic attractions, from serene lakes and mountain viewpoints to traditional villages and adventure experiences. Whether embarking on a Himalayan trek, discovering Nepalese culture or enjoying a restorative escape, The Pavilions Himalayas promises an unforgettable stay.",

    why: "The Pavilions Himalayas – The Farm delivers a unique blend of eco-conscious luxury, organic living and personalised hospitality. Its spectacular Himalayan setting and commitment to sustainability make it one of Nepal's most distinctive boutique retreats.",

    exploreDestination: [
      {
        name: "Phewa Lake",
        description:
          "The heart of Pokhara, Phewa Lake is renowned for its tranquil waters, colourful wooden boats and magnificent reflections of the Annapurna Range. Visitors can enjoy boating, lakeside cafés and spectacular sunsets.",
      },
      {
        name: "World Peace Pagoda",
        description:
          "Situated on a hill overlooking Pokhara, this striking white stupa offers panoramic views of Phewa Lake, the Annapurna Himalayas and the surrounding valleys, making it one of the city's most iconic viewpoints.",
      },
      {
        name: "Sarangkot",
        description:
          "Famous for its breathtaking sunrise views over the Annapurna and Dhaulagiri ranges, Sarangkot is also one of Nepal's premier destinations for paragliding and scenic hiking.",
      },
      {
        name: "Organic Farm Experiences",
        description:
          "Discover sustainable farming practices through guided tours of the property's working farm, interact with local farmers and enjoy fresh seasonal produce harvested directly from the estate.",
      },
      {
        name: "Himalayan Nature Walks & Village Tours",
        description:
          "Explore picturesque villages, terraced fields and forest trails surrounding the retreat while experiencing authentic Nepalese culture, traditional lifestyles and stunning Himalayan scenery.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Pokhara International Airport, Nepal",
          code: "PHH",
          distance: "Nearest airport",
        }
      ],
    },

    idealFor: [
      "Eco-Luxury Travellers",
      "Couples",
      "Honeymooners",
      "Wellness Retreats",
      "Nature Lovers",
      "Sustainable Travel Enthusiasts",
      "Adventure Seekers",
      "Himalayan Escapes"
    ],

    website: "https://www.pavilionshotels.com/destinations/himalayas/thefarm/",

    map: "https://www.google.com/maps/place/The+Pavilions+Himalayas+The+Farm/@28.1808275,83.9291904,17z/data=!4m9!3m8!1s0x3995eab333daff15:0xbe73ad28f9139f07!5m2!4m1!1i2!8m2!3d28.1808228!4d83.9317653!16s%2Fg%2F11b6z4xjm3?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Mountain Retreat",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Mountain Retreat",
  },

  {
    id: "the-postcard-dewa-bhutan",
    name: "The Postcard Dewa Bhutan",
    location: "Thimphu, Bhutan",
    category: "bhutan",

    image: "/Assets/hotels/The Post Card Dewa, Bhutan.jpg",
    alt: "The Postcard Dewa Bhutan, Thimphu, Bhutan",

    accentClass: "hi--bhutan-heritage",

    intro:
      "Inspired by Bhutan's philosophy of Gross National Happiness and the serenity of the Eastern Himalayas, The Postcard Dewa Bhutan is an intimate luxury retreat that offers a deeply immersive experience in the Kingdom's pristine mountain landscapes. Blending contemporary elegance with traditional Bhutanese craftsmanship, the hotel provides a peaceful sanctuary where breathtaking scenery, rich cultural heritage and personalised hospitality come together. Every aspect of the stay is thoughtfully curated to encourage relaxation, mindfulness and meaningful connections with the destination.\n\nThe spacious rooms and suites feature handcrafted timber interiors, locally inspired design elements and expansive windows that frame panoramic views of the surrounding valleys and mountains. Guests can savour authentic Bhutanese cuisine alongside international favourites, enjoy bespoke wellness experiences, explore nearby monasteries or simply unwind amidst the calm and natural beauty of the Himalayas. The personalised service and intimate atmosphere ensure every stay is both enriching and memorable.\n\nIdeally positioned for discovering Bhutan's cultural landmarks, scenic valleys and spiritual traditions, The Postcard Dewa Bhutan serves as an excellent base for exploring one of the world's most captivating destinations. Whether visiting ancient monasteries, hiking through pristine forests or experiencing Bhutan's vibrant festivals, guests are promised an unforgettable Himalayan escape.",

    why: "The Postcard Dewa Bhutan offers an elegant blend of luxury, authenticity and tranquillity. Its personalised experiences, spectacular mountain setting and warm Bhutanese hospitality make it an exceptional retreat for travellers seeking a deeper connection with the destination.",

    exploreDestination: [
      {
        name: "Paro Taktsang",
        description:
          "Also known as the Tiger's Nest Monastery, this iconic cliffside monastery is Bhutan's most celebrated landmark. The rewarding hike offers spectacular views and an unforgettable spiritual experience.",
      },
      {
        name: "Rinpung Dzong",
        description:
          "One of Bhutan's finest examples of traditional architecture, Rinpung Dzong is an impressive fortress-monastery renowned for its intricate woodwork, colourful murals and cultural significance.",
      },
      {
        name: "National Museum of Bhutan",
        description:
          "Housed in a historic watchtower, the museum showcases Bhutan's rich heritage through fascinating collections of traditional art, textiles, weapons, religious artefacts and cultural exhibits.",
      },
      {
        name: "Traditional Bhutanese Village Experiences",
        description:
          "Discover Bhutan's rural way of life through guided village walks, interactions with local communities and opportunities to experience traditional farming, handicrafts and authentic Bhutanese hospitality.",
      },
      {
        name: "Himalayan Nature Walks & Wellness",
        description:
          "Explore peaceful forest trails, enjoy birdwatching excursions or rejuvenate with wellness experiences inspired by Bhutan's holistic philosophy, all while surrounded by spectacular Himalayan scenery.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Paro International Airport, Bhutan",
          code: "PBH",
          distance: "Nearest airport",
        }
      ],
    },

    idealFor: [
      "Couples",
      "Honeymooners",
      "Luxury Travellers",
      "Wellness Seekers",
      "Cultural Explorers",
      "Nature Lovers",
      "Himalayan Holidays",
      "Slow Travel Experiences"
    ],

    website: "https://www.postcardresorts.com/hotels/the-postcard-dewa",

    map: "https://www.google.com/maps/place/The+Postcard+Dewa,+Thimphu,+Bhutan/@27.3916398,89.5961196,17z/data=!4m9!3m8!1s0x39e19179464ee2ab:0x4192e55a3d307b40!5m2!4m1!1i2!8m2!3d27.3916351!4d89.5986945!16s%2Fg%2F11ff5f1y8w?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Heritage",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Heritage",
  },

  {
    id: "the-sarai-at-toria-khajuraho",
    name: "The Sarai at Toria, Khajuraho",
    location: "Khajuraho, Madhya Pradesh",
    category: "india",

   image: "/Assets/hotels/The Sarai at Toria, Khajuraho.jpg",
    alt: "The Sarai at Toria, Khajuraho, Khajuraho, Madhya Pradesh",

    accentClass: "hi--india-heritage",

    intro:
      "Celebrating the timeless heritage of Bundelkhand and the natural beauty of central India, The Sarai at Toria is an intimate boutique retreat located on the outskirts of Khajuraho. Designed as a peaceful countryside sanctuary, the property combines rustic elegance with thoughtful luxury, offering guests an authentic experience inspired by the region's rich history, village life and wildlife. Its charming architecture, lush gardens and personalised hospitality create a welcoming atmosphere where relaxation and exploration go hand in hand.\n\nThe spacious cottages and suites feature handcrafted interiors, locally inspired décor and modern comforts that blend seamlessly with the surrounding landscape. Guests can enjoy freshly prepared regional cuisine made with seasonal ingredients, unwind by the swimming pool, explore nearby villages on guided excursions or simply relax amidst the serene rural setting. Every stay is enhanced by warm hospitality and carefully curated experiences that showcase the cultural richness of Khajuraho and its surroundings.\n\nPerfectly positioned for discovering the UNESCO-listed temples of Khajuraho as well as the forests and wildlife of nearby reserves, The Sarai at Toria offers an ideal base for travellers seeking history, culture and nature in equal measure.",

    why: "The Sarai at Toria offers an authentic boutique experience that beautifully combines heritage, rural charm and personalised hospitality. Its peaceful setting and curated local experiences make it one of the most distinctive stays near Khajuraho.",

    exploreDestination: [
      {
        name: "Khajuraho Group of Monuments",
        description:
          "A UNESCO World Heritage Site, the Khajuraho temples are celebrated for their extraordinary sandstone architecture, intricate sculptures and remarkable craftsmanship dating back to the Chandela dynasty.",
      },
      {
        name: "Raneh Falls",
        description:
          "Located within the Ken River Canyon, Raneh Falls is renowned for its dramatic volcanic rock formations and seasonal waterfalls, offering one of the region's most spectacular natural landscapes.",
      },
      {
        name: "Panna National Park",
        description:
          "Just a short drive from Khajuraho, Panna National Park is home to Bengal tigers, leopards, gharials, sloth bears and an impressive variety of birdlife. Jeep safaris and boat rides provide memorable wildlife experiences.",
      },
      {
        name: "Village & Cultural Experiences",
        description:
          "Explore nearby Bundelkhand villages to experience traditional lifestyles, local crafts and regional cuisine while interacting with local communities and learning about the area's rich cultural heritage.",
      },
      {
        name: "Ken Gharial Sanctuary",
        description:
          "Stretching along the Ken River, this protected sanctuary is home to the endangered gharial, marsh crocodiles and numerous bird species, making it an excellent destination for nature lovers and photographers.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Nearest Airport: Khajuraho Airport",
          code: "HJR",
          distance: "Nearest airport",
        }
      ],
    },

    idealFor: [
      "Heritage Travellers",
      "Couples",
      "Nature Lovers",
      "Wildlife Enthusiasts",
      "Cultural Explorers",
      "Boutique Luxury Seekers",
      "Families",
      "Slow Travel Experiences"
    ],

    website: "https://www.saraiattoria.com/",

    map: "https://www.google.com/maps/place/Sarai+at+Toria/@24.7431078,80.0055676,17z/data=!3m1!4b1!4m9!3m8!1s0x3982fb5883f060c3:0xe84b61dd6286f2d4!5m2!4m1!1i2!8m2!3d24.743103!4d80.0081425!16s%2Fg%2F1tgfv0lh?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Heritage",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Heritage",
  },

  {
    id: "the-soaltee-kathmandu-nepal",
    name: "The Soaltee Kathmandu, Nepal",
    location: "Kathmandu, Nepal",
    category: "nepal",

    image: "/Assets/hotels/The Soal Tee Kathmandu.jpg",
    alt: "The Soaltee Kathmandu, Nepal, Kathmandu, Nepal",

    accentClass: "hi--india-mountain",

    intro:
      "Set within beautifully landscaped gardens in the heart of Kathmandu, The Soaltee Kathmandu is a landmark luxury hotel that blends timeless elegance with warm Nepalese hospitality. Renowned for its impeccable service and tranquil surroundings, the hotel offers a peaceful retreat while providing convenient access to the capital's rich cultural heritage. Combining contemporary comforts with classic sophistication, it is an ideal choice for travellers seeking both relaxation and exploration.\n\nThe spacious rooms and suites feature refined interiors, modern amenities and sweeping views of the gardens, cityscape or distant Himalayan foothills. Guests can savour a diverse selection of Nepalese, Asian and international cuisine, relax beside the outdoor swimming pool, rejuvenate at the wellness spa or enjoy leisurely strolls through the hotel's expansive gardens. Thoughtful hospitality and personalised service ensure a memorable stay for every guest.\n\nConveniently located close to Kathmandu's UNESCO World Heritage Sites and vibrant commercial districts, The Soaltee Kathmandu serves as an excellent base for discovering Nepal's fascinating history, spiritual landmarks and colourful local culture.",

    why: "The Soaltee Kathmandu combines classic luxury, lush surroundings and exceptional hospitality in one of the city's most prestigious locations. Its elegant ambience and convenient setting make it an ideal gateway to Nepal's cultural treasures.",

    exploreDestination: [
      {
        name: "Swayambhunath",
        description:
          "One of Nepal's oldest and most sacred Buddhist monuments, Swayambhunath—also known as the Monkey Temple—offers panoramic views of Kathmandu Valley and a deeply spiritual atmosphere.",
      },
      {
        name: "Kathmandu Durbar Square",
        description:
          "A UNESCO World Heritage Site, Kathmandu Durbar Square is home to magnificent palaces, temples and intricately carved courtyards that showcase Nepal's royal history and architectural heritage.",
      },
      {
        name: "Pashupatinath Temple",
        description:
          "Among the holiest Hindu temples dedicated to Lord Shiva, Pashupatinath is an iconic pilgrimage destination situated on the sacred Bagmati River.",
      },
      {
        name: "Boudhanath",
        description:
          "One of the largest Buddhist stupas in the world, Boudhanath is the spiritual heart of Tibetan Buddhism in Nepal, surrounded by monasteries, cafés and vibrant local markets.",
      },
      {
        name: "Heritage & Local Experiences",
        description:
          "Explore Kathmandu's bustling bazaars, artisan workshops and traditional Newari neighbourhoods while discovering the city's rich history, authentic cuisine and vibrant cultural traditions.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Tribhuvan International Airport, Nepal",
          code: "KTM",
          distance: "Nearest airport",
        }
      ],
    },

    idealFor: [
      "Luxury Travellers",
      "Business Travellers",
      "Couples",
      "Families",
      "Cultural Explorers",
      "Heritage Holidays",
      "Wellness Seekers",
      "Nepal City Escapes"
    ],

    website: "https://soaltee.com/",

    map: "https://www.google.com/maps/place/The+Soaltee+Kathmandu,+Autograph+Collection/@27.6982068,85.2890067,17z/data=!4m9!3m8!1s0x39eb18609488cdb7:0x44edd8fc9a17af63!5m2!4m1!1i2!8m2!3d27.6982021!4d85.2915816!16s%2Fg%2F1tcv4qxf?entry=ttu&g_ep=EgoyMDI2MDcyMC4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Mountain Retreat",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Mountain Retreat",
  },

  {
    id: "vivanta-coimbatore",
    name: "Vivanta Coimbatore",
    location: "Coimbatore, Tamil Nadu",
    category: "india",

    image: "/Assets/hotels/Vivanta, Coimbatore.jpg",
    alt: "Vivanta Coimbatore, Coimbatore, Tamil Nadu",

    accentClass: "hi--india-city",

    intro:
      "Located in the heart of Coimbatore, one of South India's fastest-growing commercial and industrial hubs, Vivanta Coimbatore offers a contemporary blend of business convenience and warm hospitality. Ideally situated close to the city's business districts, shopping centres and cultural landmarks, the hotel is an excellent choice for both corporate travellers and leisure guests exploring the Kongu region of Tamil Nadu. With its modern design, vibrant ambience and personalised service, Vivanta creates a welcoming retreat where comfort and efficiency go hand in hand.\n\nThe hotel's stylishly designed rooms and suites feature contemporary interiors, modern amenities and thoughtful touches that cater to today's discerning traveller. Guests can enjoy a range of dining experiences featuring authentic South Indian delicacies alongside global cuisine, unwind at the rooftop swimming pool, rejuvenate at the spa or maintain their fitness routine at the well-equipped fitness centre. Whether visiting for a business conference, a family holiday or a gateway to the Nilgiris, Vivanta Coimbatore delivers a seamless hospitality experience.\n\nCoimbatore is often referred to as the \"Manchester of South India\" owing to its thriving textile industry, yet it also serves as the gateway to picturesque hill stations, wildlife sanctuaries and ancient temples. From spiritual landmarks and scenic mountain escapes to coffee plantations and wildlife adventures, the city offers diverse experiences that make it an ideal destination for both short stays and extended holidays.",

    why: "Vivanta Coimbatore combines contemporary comfort with exceptional hospitality in one of South India's most dynamic cities. Its central location, excellent dining options and easy access to the Nilgiris make it an ideal base for both business and leisure travellers.",

    exploreDestination: [
      {
        name: "Marudamalai Temple",
        description:
          "One of Tamil Nadu's most revered hill temples, Marudamalai is dedicated to Lord Murugan and offers panoramic views of the surrounding countryside. The peaceful setting and impressive Dravidian architecture make it one of Coimbatore's most popular attractions.",
      },
      {
        name: "Isha Yoga Center",
        description:
          "Home to the iconic Adiyogi Shiva Statue, the Isha Yoga Center is an internationally recognised spiritual destination. Visitors can experience meditation spaces, yoga programmes and the serene atmosphere at the foothills of the Velliangiri Mountains.",
      },
      {
        name: "Siruvani Waterfalls",
        description:
          "Nestled amidst lush forests, Siruvani Waterfalls is renowned for its crystal-clear water, often considered among the sweetest in Asia. The scenic drive and tranquil surroundings make it an ideal excursion for nature lovers.",
      },
      {
        name: "VOC Park and Zoo",
        description:
          "A popular attraction for families, VOC Park offers landscaped gardens, a children's play area and a small zoo featuring native wildlife. It is an enjoyable place to relax within the city.",
      },
      {
        name: "Nilgiri Mountains",
        description:
          "Coimbatore serves as the gateway to the Nilgiris, with hill stations such as Ooty and Coonoor just a few hours away. Tea estates, scenic viewpoints and heritage rail journeys make this one of South India's most rewarding day trips.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Nearest Airport: Coimbatore International Airport",
          code: "CJB",
          distance: "Nearest airport",
        }
      ],
    },

    idealFor: [
      "Business Travellers",
      "Couples",
      "Families",
      "Weekend Getaways",
      "Nature Lovers",
      "Temple Tours",
      "Nilgiri Holidays",
      "Luxury City Breaks"
    ],

    website: "",

    map: "https://www.google.com/maps/place/Vivanta+Coimbatore/@11.002219,76.973638,17z/data=!3m1!4b1!4m9!3m8!1s0x3ba859a57053c22b:0x59758803dbf21a64!5m2!4m1!1i2!8m2!3d11.002219!4d76.973638!16s%2Fm%2F0sggw1j?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "City Luxury",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "City Luxury",
  },

  {
    id: "wild-coast-tented-lodge-relais-chteaux-sri-lanka",
    name: "Wild Coast Tented Lodge – Relais & Châteaux, Sri Lanka",
    location: "Yala, Sri Lanka",
    category: "srilanka",

    image: "/Assets/hotels/Wild Cost Tented Lodge, Sri Lanka.webp",
    alt: "Wild Coast Tented Lodge – Relais & Châteaux, Sri Lanka, Yala, Sri Lanka",

    accentClass: "hi--india-coast",

    intro:
      "Inspired by the untamed wilderness of Sri Lanka's southern coastline, Wild Coast Tented Lodge – Relais & Châteaux is an extraordinary luxury safari retreat where the jungle meets the Indian Ocean. Bordering the renowned Yala National Park, the lodge is thoughtfully designed to blend seamlessly into its surroundings, with cocoon-shaped canvas suites, sustainable architecture and breathtaking natural landscapes. Offering an exceptional balance of adventure and indulgence, it provides one of the world's most distinctive wildlife experiences.\n\nThe beautifully appointed tented suites feature handcrafted furnishings, freestanding copper bathtubs, spacious outdoor decks and private plunge pools in selected accommodations. Guests can savour gourmet cuisine inspired by Sri Lankan flavours, relax at the open-air spa, enjoy sundowners overlooking the ocean or embark on expertly guided safari adventures. Every experience is enhanced by personalised Relais & Châteaux hospitality and an unwavering commitment to conservation.\n\nWith direct access to Yala's remarkable wilderness, the lodge is perfectly positioned for unforgettable encounters with Sri Lanka's iconic wildlife. From tracking elusive leopards and observing elephants in their natural habitat to enjoying pristine beaches and spectacular sunsets, Wild Coast Tented Lodge offers an immersive journey into one of South Asia's most extraordinary landscapes.",

    why: "Wild Coast Tented Lodge delivers a truly unique luxury safari experience where sophisticated design, exceptional wildlife encounters and breathtaking coastal scenery come together in perfect harmony.",

    exploreDestination: [
      {
        name: "Yala National Park",
        description:
          "Sri Lanka's most celebrated national park is renowned for having one of the highest leopard densities in the world. Visitors can also encounter elephants, sloth bears, crocodiles, spotted deer and an incredible diversity of birdlife during expertly guided safari drives.",
      },
      {
        name: "Palatupana Beach",
        description:
          "Located adjacent to the lodge, this pristine stretch of coastline offers dramatic ocean views, peaceful beach walks and spectacular sunsets where the wilderness meets the sea.",
      },
      {
        name: "Bundala National Park",
        description:
          "A UNESCO Biosphere Reserve, Bundala National Park is famous for its wetlands and abundant birdlife, attracting flamingos, pelicans, painted storks and numerous migratory species.",
      },
      {
        name: "Kataragama Temple",
        description:
          "One of Sri Lanka's most important pilgrimage sites, Kataragama is revered by Buddhists, Hindus and Muslims alike, offering visitors a fascinating insight into the island's diverse spiritual traditions.",
      },
      {
        name: "Safari & Conservation Experiences",
        description:
          "Join experienced naturalists for morning and evening game drives, guided bush walks and wildlife talks that highlight the region's unique biodiversity and ongoing conservation initiatives.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Mattala Rajapaksa International Airport, Sri Lanka",
          code: "HRI",
          distance: "50 kms / 1.5 hrs. approx. by road.",
        },
        {
          name: "Bandaranaike International Airport, Sri Lanka",
          code: "CMB",
          distance: "300 kms. / 4.5 hrs. approx. by road.",
        }
      ],
    },

    idealFor: [
      "Luxury Safari Travellers",
      "Wildlife Enthusiasts",
      "Couples",
      "Honeymooners",
      "Nature Lovers",
      "Birdwatchers",
      "Adventure Seekers",
      "Exclusive Sri Lanka Holidays"
    ],

    website: "https://www.relaischateaux.com/us/hotel/wild-coast-tented-lodge/",

    map: "https://www.google.com/maps/place/Wild+Coast+Tented+Lodge+-+Relais+%26+Chateaux/@6.2623148,81.4021272,16z/data=!4m9!3m8!1s0x3ae683f2f3fe8905:0x378853a862f3e0b9!5m2!4m1!1i2!8m2!3d6.2623095!4d81.4068908!16s%2Fg%2F11dfjygr52?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Beach & Coast",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Beach & Coast",
  },

  {
    id: "zhiwa-ling-heritage-paro-bhutan",
    name: "Zhiwa Ling Heritage, Bhutan",
    location: "Paro Valley, Bhutan",
    category: "bhutan",

    image: "/Assets/hotels/Zhiwaling Heritage, Bhutan.jpg",
    alt: "Zhiwa Ling Heritage, Bhutan, Paro Valley, Bhutan",

    accentClass: "hi--bhutan-heritage",

    intro:
      "Celebrating Bhutan's rich cultural heritage and timeless architectural traditions, Zhiwa Ling Heritage is an award-winning luxury retreat that offers an authentic Bhutanese experience in the heart of the Paro Valley. Crafted by local artisans using traditional techniques and natural materials, the property seamlessly combines centuries-old craftsmanship with refined contemporary comforts. Every corner reflects the kingdom's deep-rooted spirituality, warm hospitality and commitment to preserving its unique cultural identity, making it one of Bhutan's most distinctive luxury stays.\n\nThe beautifully appointed rooms and suites showcase hand-carved woodwork, traditional murals, handcrafted furnishings and modern amenities that create an atmosphere of understated elegance. Guests can savour authentic Bhutanese cuisine alongside international favourites, rejuvenate with holistic spa therapies, meditate in the property's private temple or simply unwind while enjoying panoramic views of the surrounding mountains and valleys. The personalised service ensures an enriching and memorable stay.\n\nPerfectly located near Bhutan's most iconic cultural and natural attractions, Zhiwa Ling Heritage provides an exceptional base for discovering the kingdom's monasteries, fortresses and pristine Himalayan landscapes. Whether embarking on scenic hikes, attending vibrant festivals or exploring ancient spiritual sites, guests are immersed in the authentic spirit of Bhutan.",

    why: "Zhiwa Ling Heritage offers an extraordinary blend of Bhutanese tradition and refined luxury. Its authentic architecture, exceptional hospitality and immersive cultural experiences create a truly unforgettable Himalayan retreat.",

    exploreDestination: [
      {
        name: "Paro Taktsang",
        description:
          "Widely known as the Tiger's Nest Monastery, this iconic cliffside monastery is Bhutan's most revered landmark. The rewarding hike offers breathtaking views and an unforgettable spiritual experience.",
      },
      {
        name: "Rinpung Dzong",
        description:
          "One of Bhutan's finest fortress-monasteries, Rinpung Dzong is admired for its magnificent architecture, intricate wood carvings and colourful Buddhist murals that reflect the country's rich spiritual heritage.",
      },
      {
        name: "National Museum of Bhutan",
        description:
          "Housed in a historic watchtower overlooking Paro Valley, the museum presents fascinating collections of Bhutanese art, textiles, traditional weapons and religious artefacts.",
      },
      {
        name: "Traditional Bhutanese Village Walks",
        description:
          "Experience the charm of rural Bhutan through guided walks that offer opportunities to meet local families, visit traditional farmhouses and gain insight into the country's unique customs, architecture and way of life.",
      },
      {
        name: "Wellness & Spiritual Experiences",
        description:
          "Reconnect with mind and body through meditation sessions, traditional hot stone baths, spa treatments and visits to nearby monasteries that embody Bhutan's enduring Buddhist traditions.",
      }
    ],

    howToReach: {
      airports: [
        {
          name: "Paro International Airport, Bhutan",
          code: "PBH",
          distance: "Nearest airport",
        }
      ],
    },

    idealFor: [
      "Couples",
      "Honeymooners",
      "Luxury Travellers",
      "Cultural Explorers",
      "Wellness Seekers",
      "Nature Lovers",
      "Himalayan Holidays",
      "Slow Travel Experiences"
    ],

    website: "https://www.zhiwalingheritage.com/",

    map: "https://www.google.com/maps/place/Zhiwaling+Heritage+Hotel/@27.4648172,89.3494876,17z/data=!4m9!3m8!1s0x39e19de85a6c39b7:0x546a1f3ae162796b!5m2!4m1!1i2!8m2!3d27.4648125!4d89.3520625!16s%2Fg%2F1tf194y9?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D",

    tags: [
      "Heritage",
    ],

    isFeatured: false,
    isRecommended: true,

    categoryTag: "Heritage",
  },

];
