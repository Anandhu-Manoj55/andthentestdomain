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
];
