import type { Hotel } from "@/types/hotel";

export const hotels: Hotel[] = [
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

  why:
    "Evolve Back Hampi does more than provide a luxurious stay—it brings the story of the Vijayanagara Empire to life through architecture, craftsmanship and a deep connection to its surroundings. Returning to the resort after exploring Hampi's remarkable monuments feels like a continuation of the journey rather than the end of a day's sightseeing. It is this seamless blend of heritage, thoughtful hospitality and sense of place that makes every stay both enriching and memorable.",

  highlights: [
    "Inspired by the grandeur of the Vijayanagara Empire",
    "Luxury heritage resort near Hampi's UNESCO World Heritage monuments",
    "Architecture featuring grand courtyards, carved stone details and graceful colonnades",
    "Authentic regional cuisine and local craftsmanship",
    "Ideal base for exploring Hampi's cultural and historical landmarks"
  ],

  exploreDestination: [
    {
      name: "Virupaksha Temple",
      description:
        "Standing at the heart of Hampi's sacred landscape, this centuries-old temple remains an active place of worship and reveals the city's enduring spiritual heritage."
    },
    {
      name: "Vijaya Vittala Temple",
      description:
        "Famous for its iconic stone chariot and exquisite carvings, this temple is among India's greatest architectural masterpieces."
    },
    {
      name: "Matanga Hill",
      description:
        "A sunrise or sunset climb rewards visitors with panoramic views of Hampi's boulder-strewn landscape, temple complexes and the Tungabhadra River."
    },
    {
      name: "Tungabhadra River",
      description:
        "A traditional coracle ride offers a peaceful perspective of the landscape, passing ancient shrines, banana plantations and remarkable rock formations."
    },
    {
      name: "Royal Enclosure",
      description:
        "The former administrative heart of the Vijayanagara Empire preserves palace remains, ceremonial platforms and sophisticated water systems that illustrate the scale of this once-great kingdom."
    }
  ],

  howToReach: {
    airports: [
      {
        name: "Jindal Vijaynagar Airport",
        location: "Vidyanagar",
        code: "VDY",
        distance: "Nearest airport"
      },
      {
        name: "Hubballi Airport",
        code: "HBX",
        distance: "176 km • Approximately 3 hours by road"
      },
      {
        name: "Kempegowda International Airport",
        location: "Bengaluru",
        code: "BLR",
        distance: "361 km • Approximately 6 hours by road"
      }
    ]
  },

  idealFor: [
    "Cultural Explorers",
    "History Enthusiasts",
    "Couples",
    "Photographers",
    "Slow Travellers",
    "Multi-generational Holidays",
    "Architecture Lovers"
  ],

  website: "https://www.evolveback.com/",

  map:
    "https://www.google.com/maps/place/Evolve+Back,+Hampi/@15.2744271,76.476741,17z/data=!4m10!3m9!1s0x3bb77e0aac461def:0x4d3fb548f3abefdf!5m3!1s2026-07-08!4m1!1i2!8m2!3d15.2744219!4d76.4793159!16s%2Fg%2F11cmt0c2mh?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

  tags: [
    "UNESCO World Heritage",
    "Vijayanagara Empire",
    "Heritage Architecture",
    "Luxury Resort",
    "Cultural Experiences"
  ],

  isFeatured: false,
  isRecommended: true,

  categoryTag: "Heritage"
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

  why:
    "Grand Mercure Mysore allows travellers to experience the city at its own pace. Comfortable, contemporary and well located, it provides a welcoming retreat after days spent exploring magnificent palaces, colourful markets and centuries-old temples. It reflects the understated elegance that defines Mysuru itself.",

  highlights: [
    "Contemporary luxury inspired by Mysuru's royal heritage",
    "Excellent location near Mysore Palace and the city's cultural attractions",
    "Elegant interiors featuring subtle local craftsmanship and design",
    "Easy access to museums, markets, temples and historic neighbourhoods",
    "Ideal base for discovering Mysuru's history, cuisine and culture"
  ],

  exploreDestination: [
    {
      name: "Mysore Palace",
      description:
        "The magnificent Mysore Palace is the cultural heart of the city and one of India's most celebrated royal residences. Home to the Wadiyar dynasty, the palace is admired for its blend of Hindu, Indo-Saracenic, Rajput and Gothic architectural influences. Richly decorated halls, intricate stained glass ceilings, carved teak doors and elaborate murals tell the story of a royal family whose legacy continues to shape Mysuru today. Visitors arriving in the evening are rewarded with the spectacular illumination of thousands of lights that transform the palace into an unforgettable sight."
    },
    {
      name: "Chamundi Hill",
      description:
        "Watching over Mysuru from the southeast, Chamundi Hill is both a place of pilgrimage and one of the city's finest viewpoints. The hill is crowned by the Chamundeshwari Temple, dedicated to the city's patron deity, while the enormous monolithic Nandi statue along the route reflects centuries of devotion and craftsmanship. The panoramic views from the summit provide an appreciation of Mysuru's elegant layout and surrounding countryside."
    },
    {
      name: "Devaraja Market",
      description:
        "For travellers wishing to experience everyday Mysuru, few places are more rewarding than Devaraja Market. The bustling arcades are filled with fragrant jasmine garlands, colourful spices, sandalwood incense, fresh produce, silk fabrics and traditional handicrafts. More than a shopping destination, it offers a fascinating insight into local life and the traditions that continue to define the city."
    },
    {
      name: "St. Philomena's Cathedral",
      description:
        "Inspired by Neo-Gothic architecture, St. Philomena's Cathedral is among the tallest churches in Asia. Its soaring twin spires dominate the skyline, while beautiful stained-glass windows depict important moments from Christian history. The peaceful atmosphere inside provides a striking contrast to the busy streets beyond."
    },
    {
      name: "Brindavan Gardens",
      description:
        "Located beside the Krishnaraja Sagar Dam, Brindavan Gardens has attracted visitors for generations with its elegant terraces, ornamental fountains and carefully maintained landscapes. The famous musical fountain show after sunset combines water, music and light in a delightful evening spectacle, making it one of Mysuru's most popular attractions."
    }
  ],

  howToReach: {
    airports: [
      {
        name: "Mysore Airport",
        code: "MYQ",
        distance: "Nearest airport"
      },
      {
        name: "Kempegowda International Airport",
        location: "Bengaluru",
        code: "BLR",
        distance: "178 km • Approximately 3 hours by road"
      }
    ]
  },

  idealFor: [
    "Cultural Explorers",
    "Couples",
    "Families",
    "Heritage Enthusiasts",
    "Food Lovers",
    "Slow Travellers"
  ],

  website: "https://www.grandmercure.com/city/mysore/",

  map:
    "https://www.google.com/maps/place/Grand+Mercure+Mysore/@12.3302219,76.6425122,17z/data=!4m10!3m9!1s0x3baf707ecd37258f:0x8512c6be740173cf!5m3!1s2026-07-08!4m1!1i2!8m2!3d12.3302167!4d76.6450871!16s%2Fg%2F11clt9_gkz?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

  tags: [
    "Royal Heritage",
    "Mysore Palace",
    "Cultural City",
    "Luxury Hotel",
    "Contemporary Design"
  ],

  isFeatured: false,
  isRecommended: true,

  categoryTag: "Heritage"
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

  why:
    "Taj Bangalore proves that convenience need not come at the expense of character. Its location, thoughtful service and polished ambience create a seamless transition between travel and relaxation, making it one of India's finest airport hotels.",

  highlights: [
    "Located directly opposite Kempegowda International Airport",
    "Contemporary luxury with signature Taj hospitality",
    "Ideal gateway to Bengaluru and South India",
    "Perfect for business travellers, transit guests and luxury stopovers",
    "Exceptional personalised service with elegant, spacious interiors"
  ],

  exploreDestination: [
    {
      name: "Nandi Hills",
      description:
        "A scenic hilltop known for sunrise views, historic forts and pleasant weather."
    },
    {
      name: "Devanahalli Fort",
      description:
        "The historic birthplace of Tipu Sultan, showcasing Karnataka's military heritage."
    },
    {
      name: "Bengaluru Palace",
      description:
        "A magnificent royal residence featuring elegant interiors and fascinating history."
    },
    {
      name: "Cubbon Park",
      description:
        "The city's green heart, perfect for leisurely walks beneath mature trees."
    },
    {
      name: "Church Street & MG Road",
      description:
        "Bengaluru's vibrant cultural district with cafés, bookstores, galleries and restaurants."
    }
  ],

  howToReach: {
    airports: [
      {
        name: "Kempegowda International Airport",
        location: "Bengaluru",
        code: "BLR",
        distance: "Directly opposite the hotel (walking distance)"
      }
    ]
  },

  idealFor: [
    "Business Travellers",
    "Transit Guests",
    "Couples",
    "Families",
    "Luxury Stopovers"
  ],

  website: "https://www.tajhotels.com/en-in/hotels/taj-bangalore",

  map:
    "https://www.google.com/maps/place/Taj+Bangalore,+Bengaluru/@13.1971338,77.7075608,17z/data=!4m10!3m9!1s0x3bae1cfd3250d2b9:0xf1e234798c0b8d8!5m3!1s2026-07-08!4m1!1i2!8m2!3d13.1971286!4d77.7101357!16s%2Fg%2F11bbrkglb9?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

  tags: [
    "Airport Hotel",
    "Taj Hotels",
    "Business Travel",
    "Luxury Stay",
    "Bengaluru Gateway"
  ],

  isFeatured: false,
  isRecommended: true,

  categoryTag: "Luxury Hotel"
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

  why:
    "Taj Madikeri Resort & Spa captures the essence of Coorg through its close relationship with the surrounding forests and coffee estates. Every aspect of the experience encourages guests to appreciate the tranquillity, fresh mountain air and unhurried pace that define the region, making it an ideal retreat for travellers seeking both comfort and a genuine sense of place.",

  highlights: [
    "Nestled amidst Coorg's mist-covered hills and dense rainforests",
    "Spectacular valley views surrounded by coffee plantations",
    "Contemporary architecture inspired by the natural landscape",
    "Immersive wellness experiences in the Western Ghats",
    "Luxury retreat blending Kodava heritage with refined hospitality"
  ],

  exploreDestination: [
    {
      name: "Abbey Falls",
      description:
        "Set amidst coffee and spice plantations, Abbey Falls is one of Coorg's best-known natural attractions. A short walk through lush greenery leads to cascading waters that are especially spectacular during and after the monsoon, making it a favourite stop for nature lovers and photographers."
    },
    {
      name: "Raja's Seat",
      description:
        "Once a favoured viewpoint of the Kodagu kings, Raja's Seat commands sweeping views across rolling hills and mist-filled valleys. Sunrise and sunset are particularly memorable, when changing light transforms the landscape into a panorama of layered greens and soft mountain silhouettes."
    },
    {
      name: "Dubare Elephant Camp",
      description:
        "Located on the banks of the River Kaveri, Dubare offers visitors the opportunity to learn about elephant conservation and the region's forest heritage. Boat rides, guided nature walks and interactions with trained elephants provide a rewarding family experience."
    },
    {
      name: "Namdroling Monastery",
      description:
        "Often referred to as the Golden Temple, this Tibetan Buddhist monastery near Kushalnagar is renowned for its magnificent prayer hall, colourful murals and peaceful atmosphere. It offers a fascinating cultural contrast to Coorg's coffee plantations and forests."
    },
    {
      name: "Coffee Plantations",
      description:
        "A guided walk through Coorg's coffee estates provides insight into the cultivation of one of India's finest coffees. Visitors discover traditional growing methods, the influence of the monsoon climate and the enduring connection between coffee, local communities and the region's identity."
    }
  ],

  howToReach: {
    airports: [
      {
        name: "Kannur International Airport",
        code: "CNN",
        distance: "90 km • Approximately 3 hours by road"
      },
      {
        name: "Mangaluru International Airport",
        code: "IXE",
        distance: "153 km • Approximately 3.5 hours by road"
      },
      {
        name: "Kempegowda International Airport",
        location: "Bengaluru",
        code: "BLR",
        distance: "300 km • Approximately 6 hours by road"
      }
    ]
  },

  idealFor: [
    "Couples",
    "Honeymooners",
    "Wellness Travellers",
    "Families",
    "Nature Lovers",
    "Slow Travellers",
    "Celebrations"
  ],

  website: "https://www.tajhotels.com/en-in/hotels/taj-madikeri-coorg",

  map:
    "https://www.google.com/maps/place/Taj+Madikeri+Resort+%26+Spa,+Coorg/@12.4459144,75.6824394,17z/data=!4m10!3m9!1s0x3ba5007546c508b5:0x45002b121c9e2ce0!5m3!1s2026-07-08!4m1!1i2!8m2!3d12.4459092!4d75.6850143!16s%2Fg%2F11xb2g8y9?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

  tags: [
    "Western Ghats",
    "Coffee Plantations",
    "Luxury Resort",
    "Nature Retreat",
    "Wellness",
    "Valley Views"
  ],

  isFeatured: false,
  isRecommended: true,

  categoryTag: "Mountain Retreat"
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

  why:
    "Long before Bengaluru became India's technology capital, it was celebrated for its gardens and tree-lined boulevards. Few hotels reflect that legacy as naturally, creating an oasis where the city's gentler character remains wonderfully intact.",

  highlights: [
    "Luxury urban retreat set amidst landscaped gardens",
    "Located on Mahatma Gandhi Road in the heart of Bengaluru",
    "Inspired by the city's Garden City heritage",
    "Contemporary elegance complemented by warm Oberoi hospitality",
    "Ideal base for business and leisure travellers exploring Bengaluru"
  ],

  exploreDestination: [
    {
      name: "Cubbon Park",
      description:
        "For more than a century, Cubbon Park has been the green heart of Bengaluru. Its sweeping lawns, towering rain trees and quiet walking trails provide a welcome contrast to the city's fast-paced rhythm. Early mornings reveal joggers, birdwatchers and families enjoying the cool air, while colonial-era buildings hidden among the foliage hint at Bengaluru's layered past. It is the perfect place to appreciate why the city earned its enduring reputation as India's Garden City."
    },
    {
      name: "Bangalore Palace",
      description:
        "Inspired by the Tudor-style castles of England yet unmistakably Indian in character, Bangalore Palace offers a fascinating glimpse into the legacy of the Wadiyar dynasty. Intricate woodwork, elegant ballrooms, royal portraits and beautifully maintained grounds transport visitors to a period when princely states shaped much of southern India's cultural landscape. The palace remains one of Bengaluru's most recognisable landmarks."
    },
    {
      name: "Lalbagh Botanical Garden",
      description:
        "Originally commissioned in the eighteenth century and later expanded by generations of horticulturists, Lalbagh remains one of India's finest botanical gardens. Rare tropical plants, centuries-old trees, tranquil lakes and the celebrated Glass House create a landscape that changes beautifully with the seasons. During the famous flower shows, the gardens become a spectacular celebration of colour and botanical artistry."
    },
    {
      name: "Church Street & MG Road",
      description:
        "Only a short walk from The Oberoi Bengaluru, Church Street captures the city's contemporary spirit. Independent bookstores, cafés, craft breweries, art galleries and design boutiques sit comfortably alongside long-established institutions, creating a lively neighbourhood where Bengaluru's creative community naturally gathers. It is an excellent place to spend an unhurried evening."
    },
    {
      name: "Visvesvaraya Industrial & Technological Museum",
      description:
        "Named after one of India's greatest engineers, the museum celebrates scientific curiosity and innovation through engaging interactive exhibits. From space exploration and engineering to electronics and biotechnology, it provides insight into the intellectual foundations that have helped shape Bengaluru into one of Asia's leading technology centres."
    }
  ],

  howToReach: {
    airports: [
      {
        name: "Kempegowda International Airport",
        location: "Bengaluru",
        code: "BLR",
        distance: "Nearest airport"
      }
    ],
    rail: [
      {
        name: "KSR Bengaluru City Junction"
      },
      {
        name: "SMVT Bengaluru"
      }
    ],
    road:
      "The city is well connected by excellent road links across South India."
  },

  idealFor: [
    "Couples",
    "Business Travellers",
    "Cultural Explorers",
    "Food Lovers",
    "Slow Travellers",
    "Multi-generational Holidays"
  ],

  website: "https://www.oberoihotels.com/hotels-in-bengaluru/",

  map:
    "https://www.google.com/maps/place/The+Oberoi,+Bengaluru/@12.9736048,77.6158276,17z/data=!4m10!3m9!1s0x3bae16835c3ada19:0x7065f59042b7b2db!5m3!1s2026-07-08!4m1!1i2!8m2!3d12.9736048!4d77.6184025!16s%2Fg%2F1thqf630?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",

  tags: [
    "Oberoi Hotels",
    "Garden City",
    "Luxury City Hotel",
    "Business Travel",
    "Urban Oasis",
    "MG Road"
  ],

  isFeatured: false,
  isRecommended: true,

  categoryTag: "Luxury Hotel"
},



]
