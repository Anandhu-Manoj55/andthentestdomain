import type { Tour } from "@/types/tour";


export const tours: Tour[] = [
  {
    id: "land-of-kings",
    slug: "/itineraries/land-of-kings/",
    title: "Land of Kings",
    destination: "India",
    region: "North India · Rajasthan",
    type: "Culture & Heritage",
    summary:
      "Royal palaces, Mughal monuments and lake cities across the full Rajasthan circuit. Stay in heritage forts converted to luxury hotels and travel by private vehicle between the maharajas' capitals.",
    price: "From €7,800 pp",
    departure: "Any date",
    duration: { nights: 15, days: 16 },
    route: ["Delhi", "Agra", "Jaipur", "Jodhpur", "Udaipur", "Mumbai"],
    "images": {"card": "/Assets/iternities/Land of Kings /Banner inmage - Land of Kings.jpg", "hero": "/Assets/iternities/Land of Kings /Banner inmage - Land of Kings.jpg"},
    "destinations": [
  {
    "name": "Delhi",
    "image": "/Assets/iternities/Land of Kings /The Leela Palace, New Delhi.jpg"
  },
  {
    "name": "Agra",
    "image": "/Assets/iternities/Land of Kings /Agra.jpg"
  },
  {
    "name": "Jaipur",
    "image": "/Assets/iternities/Land of Kings /Jaipur.jpg"
  },
  {
    "name": "Jodhpur",
    "image": "/Assets/iternities/Land of Kings /RAAS Jodhpur.jpg"
  },
  {
    "name": "Udaipur",
    "image": "/Assets/iternities/Land of Kings /Udaipur.jpg"
  },
  {
    "name": "Mumbai",
    "image": "/Assets/iternities/Land of Kings /The Taj Mahal Palace, Mumbai.jpg"
  }
],
    highlights: [
      "Taj Mahal at sunrise — private guided access before crowds arrive",
      "Amber Fort jeep ride and elephant sanctuary visit, Jaipur",
      "Mehrangarh Fort viewpoint at dusk, Jodhpur",
      "Boat ride on Lake Pichola, Udaipur",
      "Heritage fort-hotel stays across Rajasthan",
      "Private vehicle and English-speaking guide throughout",
    ],
    isFeatured: true,
    accentClass: "ici--north",
  },
  {
    id: "timeless-treasures",
    slug: "/itineraries/timeless-treasures/",
    title: "Timeless Treasures",
    destination: "India",
    region: "North India",
    type: "Culture & Spiritual",
    summary:
      "The Taj Mahal, Fatehpur Sikri and Varanasi's ghats at dawn — India's three most iconic destinations in one private journey.",
    price: "From €5,200 pp",
    departure: "Any date",
    duration: { nights: 11, days: 12 },
    route: ["Delhi", "Agra", "Varanasi", "Delhi"],
    "images": {"card": "/Assets/iternities/Timeless Treasures /Banner Image - Timeless Treasures.jpg", "hero": "/Assets/iternities/Timeless Treasures /Banner Image - Timeless Treasures.jpg"},
    "destinations": [
  {
    "name": "Delhi",
    "image": "/Assets/iternities/Timeless Treasures /The Imperial,, Delhi.jpg"
  },
  {
    "name": "Agra",
    "image": "/Assets/iternities/Timeless Treasures /Agra.jpg"
  },
  {
    "name": "Varanasi",
    "image": "/Assets/iternities/Timeless Treasures /Taj Nadesar Palace, Varanasi.jpg"
  }
],
    highlights: [
      "Taj Mahal at sunrise — private access before crowds",
      "Fatehpur Sikri — the abandoned Mughal capital",
      "Varanasi Ganga Aarti ceremony at dusk",
      "Dawn boat ride on the holy Ganges river",
      "Old Delhi heritage walk and rickshaw ride",
    ],
  },
  {
    id: "wild-encounters",
    slug: "/itineraries/wild-encounters/",
    title: "Wild Encounters",
    destination: "India",
    region: "Central India · Tiger Country",
    type: "Wildlife & Safaris",
    summary:
      "Five of central India's finest tiger reserves across 15 extraordinary nights.",
    price: "From €10,650 pp",
    departure: "Oct – Jun",
    duration: { nights: 15, days: 16 },
    route: [
      "Mumbai",
      "Bandhavgarh",
      "Kanha",
      "Pench",
      "Tadoba",
      "Delhi",
      "Agra",
    ],
    "images": {"card": "/Assets/iternities/Wild Encounters/Banner Image - Wild encounters.jpeg", "hero": "/Assets/iternities/Wild Encounters/Banner Image - Wild encounters.jpeg"},
    "destinations": [
  {
    "name": "Mumbai",
    "image": "/Assets/iternities/Wild Encounters/Taj Mahal Palace, Mumbai.jpg"
  },
  {
    "name": "Bandhavgarh",
    "image": "/Assets/iternities/Wild Encounters/Bandhavgarh.webp"
  },
  {
    "name": "Kanha",
    "image": "/Assets/iternities/Wild Encounters/Kanha-National-Park.webp"
  },
  {
    "name": "Pench",
    "image": "/Assets/iternities/Wild Encounters/pench-national-park.webp"
  },
  {
    "name": "Tadoba",
    "image": "/Assets/iternities/Wild Encounters/Waghoba Eco Lodge, Tadoba.webp"
  },
  {
    "name": "Delhi",
    "image": "/Assets/iternities/Wild Encounters/Trident, Delhi.jpg"
  },
  {
    "name": "Agra",
    "image": "/Assets/iternities/Wild Encounters/Trident, Agra.jpg"
  }
],
    highlights: [
      "Bandhavgarh — India's highest tiger density reserve",
      "Kanha — the inspiration for Rudyard Kipling's Jungle Book",
      "Pench — open meadow savannahs and waterholes",
      "Tadoba — private jeep safaris at dawn and dusk",
      "Taj Mahal visit to close the journey",
      "Expert naturalist guides throughout",
    ],
  },
  {
    id: "gods-own-country-unveiled",
    slug: "/itineraries/gods-own-country-unveiled/",
    title: "Gods Own Country Unveiled",
    destination: "India",
    region: "South India · Kerala",
    type: "Wellness & Culture",
    summary:
      "Kerala at its most complete — colonial heritage, tea hills, spice forests, backwater houseboats and an Ayurveda coast.",
    price: "From €3,900 pp",
    departure: "Any date",
    duration: { nights: 12, days: 13 },
    route: ["Cochin", "Munnar", "Thekkady", "Kumarakom", "Kovalam"],
    "images": {"card": "/Assets/iternities/God_s own country /banner image - God_s own country.png", "hero": "/Assets/iternities/God_s own country /banner image - God_s own country.png"},
    "destinations": [
  {
    "name": "Cochin",
    "image": "/Assets/iternities/God_s own country /Brunton Boatyard, Cochin.jpg"
  },
  {
    "name": "Munnar",
    "image": "/Assets/iternities/God_s own country /Munnar.webp"
  },
  {
    "name": "Thekkady",
    "image": "/Assets/iternities/God_s own country /Thekkady.jpg"
  },
  {
    "name": "Kumarakom",
    "image": "/Assets/iternities/God_s own country /Kumarakom lake resort.jpg"
  },
  {
    "name": "Kovalam",
    "image": "/Assets/iternities/God_s own country /Kovalam.jpg"
  }
],
    highlights: [
      "Fort Cochin — colonial spice trading history walk",
      "Munnar tea estates — sunrise over a carpet of green",
      "Periyar Wildlife Sanctuary boat safari",
      "Kumarakom backwaters on a private luxury houseboat",
      "Kovalam — Ayurvedic treatments on the Arabian Sea coast",
    ],
  },
  {
    id: "tete-a-tete-with-gods",
    slug: "/itineraries/tete-a-tete-with-gods/",
    title: "Tête-à-Tête with Gods",
    destination: "India",
    region: "South India · Karnataka & Kerala",
    type: "Culture & Spiritual",
    summary:
      "Garden city, palace town, coffee hills and Kerala's northernmost coast — four distinct landscapes in one private journey.",
    price: "From €4,500 pp",
    departure: "Any date",
    duration: { nights: 11, days: 12 },
    route: ["Bengaluru", "Mysore", "Coorg", "Bekal"],
    "images": {"card": "/Assets/iternities/Tete a Tete with Gods /Banner Image - Tete a Tete with Gods.jpg", "hero": "/Assets/iternities/Tete a Tete with Gods /Banner Image - Tete a Tete with Gods.jpg"},
    "destinations": [
  {
    "name": "Bengaluru",
    "image": "/Assets/iternities/Tete a Tete with Gods /Bengaluru.jpg"
  },
  {
    "name": "Mysore",
    "image": "/Assets/home/India.jpg"
  },
  {
    "name": "Coorg",
    "image": "/Assets/iternities/Tete a Tete with Gods /Coorg.jpg"
  },
  {
    "name": "Bekal",
    "image": "/Assets/iternities/Tete a Tete with Gods /Taj, Bekal.jpg"
  }
],
    highlights: [
      "Mysore Palace illumination — Wednesday and Sunday evenings",
      "Coorg coffee plantation walk and home-style lunch",
      "Dubare Elephant Camp — bathing and feeding elephants",
      "Bekal Fort — Kerala's largest fort on the Arabian Sea",
      "Theyyam ritual dance performance, North Kerala",
    ],
  },
  {
    id: "awakening-of-an-empire",
    slug: "/itineraries/awakening-of-an-empire/",
    title: "Awakening of an Empire",
    destination: "India",
    region: "South India · Karnataka",
    type: "Culture & Heritage",
    summary:
      "From India's tech capital to Vijayanagara's boulder-strewn ruins, the Wodeyar palace and the coffee hills of Coorg.",
    price: "From €4,700 pp",
    departure: "Any date",
    duration: { nights: 12, days: 13 },
    route: ["Bengaluru", "Hampi", "Mysore", "Coorg", "Bengaluru"],
    "images": {"card": "/Assets/iternities/Awakening of an Empire /Grand Mercure, Mysuru.jpg", "hero": "/Assets/iternities/Awakening of an Empire /Grand Mercure, Mysuru.jpg"},
    "destinations": [
  {
    "name": "Bengaluru",
    "image": "/Assets/iternities/Awakening of an Empire /Bengaluru.jpg"
  },
  {
    "name": "Hampi",
    "image": "/Assets/iternities/Awakening of an Empire /Hampi.jpg"
  },
  {
    "name": "Mysore",
    "image": "/Assets/home/India.jpg"
  },
  {
    "name": "Coorg",
    "image": "/Assets/iternities/Awakening of an Empire /Coorg.jpg"
  }
],
    highlights: [
      "Hampi — UNESCO boulder-strewn ruins of Vijayanagara empire",
      "Vittala Temple and the musical stone chariot at sunset",
      "Mysore Wodeyar Palace — Hoysala architecture at its finest",
      "Coorg estate walks among spice and coffee plantations",
      "Namdroling Monastery — the Golden Temple, Kushalnagar",
    ],
  },
  {
    id: "temple-trail",
    slug: "/itineraries/temple-trail/",
    title: "Temple Trail",
    destination: "India",
    region: "South India · Tamil Nadu & Kerala",
    type: "Culture & Spiritual",
    summary:
      "The great Dravidian temple towns of Tamil Nadu, ending on Kerala's quieter coast.",
    price: "From €4,100 pp",
    departure: "Any date",
    duration: { nights: 14, days: 15 },
    route: [
      "Mahabalipuram",
      "Pondicherry",
      "Kumbakonam",
      "Madurai",
      "Thekkady",
      "Marari",
    ],
    "images": {"card": "/Assets/iternities/Temple Trail /Banner Image - Temple Trail.jpg", "hero": "/Assets/iternities/Temple Trail /Banner Image - Temple Trail.jpg"},
    "destinations": [
  {
    "name": "Mahabalipuram",
    "image": "/Assets/iternities/Temple Trail /Mahabalipuram.jpg"
  },
  {
    "name": "Pondicherry",
    "image": "/Assets/iternities/Temple Trail /Palais De Mahe, Pondicherry.jpg"
  },
  {
    "name": "Kumbakonam",
    "image": "/Assets/iternities/Temple Trail /Mantra Koodam, Kumbakonam.jpg"
  },
  {
    "name": "Madurai",
    "image": "/Assets/iternities/Temple Trail /Heritage, Madurai.jpg"
  },
  {
    "name": "Thekkady",
    "image": "/Assets/iternities/Temple Trail /Thekkady.jpg"
  },
  {
    "name": "Marari",
    "image": "/Assets/iternities/Temple Trail /Marari.jpg"
  }
],
    highlights: [
      "Mahabalipuram — shore temples and bas-relief rock carvings",
      "Pondicherry — French Quarter and Sri Aurobindo Ashram",
      "Kumbakonam — the 'city of temples' at festival time",
      "Meenakshi Amman Temple, Madurai — thousands of sculptures",
      "Marari Beach — tranquil Kerala coast to end the journey",
    ],
  },
  {
    id: "by-the-beach",
    slug: "/itineraries/by-the-beach/",
    title: "By the Beach",
    destination: "India",
    region: "South India · West Coast",
    type: "Coast & Culture",
    summary:
      "India's most characterful western coastline — from Goa's colonial churches to Gokarna's quiet coves and Kerala's northern shore.",
    price: "From €4,800 pp",
    departure: "Any date",
    duration: { nights: 12, days: 13 },
    route: ["Goa", "Gokarna", "Mangalore", "Bekal"],
    "images": {"card": "/Assets/iternities/By the Beach /Banner image - By the Beach.webp", "hero": "/Assets/iternities/By the Beach /Banner image - By the Beach.webp"},
    "destinations": [
  {
    "name": "Goa",
    "image": "/Assets/iternities/By the Beach /Goa.jpg"
  },
  {
    "name": "Gokarna",
    "image": "/Assets/iternities/By the Beach /Gokarna.jpg"
  },
  {
    "name": "Mangalore",
    "image": "/Assets/iternities/By the Beach /Mangalore.jpg"
  },
  {
    "name": "Bekal",
    "image": "/Assets/iternities/By the Beach /Taj Bekal.jpg"
  }
],
    highlights: [
      "Old Goa — UNESCO Baroque churches and Portuguese heritage",
      "Gokarna — unspoiled beaches and the sacred Mahabaleshwar temple",
      "Mangalorean seafood trail with a local chef",
      "Bekal Fort on the Arabian Sea — Kerala's largest fort",
      "Private beach resort stay to close the journey",
    ],
  },
  {
    id: "sun-heritage-and-splendor",
    slug: "/itineraries/sun-heritage-and-splendor/",
    title: "Sun, Heritage & Splendor",
    destination: "India",
    region: "West & East India",
    type: "Culture & Heritage",
    summary:
      "Three very different cities — India's financial capital, the temple-city of Odisha and the Dravidian cultural heartland of Chennai.",
    price: "From €4,550 pp",
    departure: "Any date",
    duration: { nights: 12, days: 13 },
    route: ["Mumbai", "Bhubaneswar", "Chennai"],
    "images": {"card": "/Assets/iternities/Sun, Heritage and Splendor /Banner Image - Sun, Heritage and Splendor.jpg", "hero": "/Assets/iternities/Sun, Heritage and Splendor /Banner Image - Sun, Heritage and Splendor.jpg"},
    "destinations": [
  {
    "name": "Mumbai",
    "image": "/Assets/iternities/Sun, Heritage and Splendor /The Oberoi, Mumbai.jpg"
  },
  {
    "name": "Bhubaneswar",
    "image": "/Assets/iternities/Sun, Heritage and Splendor /Bhubaneswar.jpg"
  },
  {
    "name": "Chennai",
    "image": "/Assets/iternities/Sun, Heritage and Splendor /Taj Fisherman_s cove, Chennai.jpg"
  }
],
    highlights: [
      "Mumbai — Dharavi, Dhobi Ghat, and Gateway of India",
      "Konark Sun Temple — UNESCO wheel-carved masterpiece",
      "Lingaraj Temple complex, Bhubaneswar",
      "Puri — the sacred Jagannath temple town on the Bay of Bengal",
      "Chennai — Kapaleeshwarar Temple and Marina Beach",
    ],
  },
  {
    id: "bhutan",
    slug: "/itineraries/bhutan/",
    title: "Bhutan — Land of the Thunder Dragon",
    destination: "Bhutan",
    region: "Bhutan",
    type: "Culture & Spiritual",
    summary:
      "Nine nights across Bhutan's most iconic regions — fortress monasteries, sacred crane valleys, the culturally rich Bumthang heartland and the unforgettable Tiger's Nest hike.",
    price: "On request",
    departure: "Any date",
    duration: { nights: 9, days: 10 },
    route: [
      "Paro",
      "Thimphu",
      "Punakha",
      "Phobjikha",
      "Bumthang",
      "Tang Valley",
      "Paro",
    ],
    "images": {"card": "/Assets/iternities/Bhutan/Bhutan Banner Image.jpg", "hero": "/Assets/iternities/Bhutan/Bhutan Banner Image.jpg"},
    "destinations": [
  {
    "name": "Paro",
    "image": "/Assets/iternities/Bhutan/Paro Bhutan.jpg"
  },
  {
    "name": "Thimphu",
    "image": "/Assets/iternities/Bhutan/Thimphu Bhutan.jpg"
  },
  {
    "name": "Punakha",
    "image": "/Assets/iternities/Bhutan/Punakha Bhutan.jpg"
  },
  {
    "name": "Phobjikha",
    "image": "/Assets/iternities/Bhutan/Phobjikha Bhutan.jpg"
  },
  {
    "name": "Bumthang",
    "image": "/Assets/iternities/Bhutan/Bumthang Bhutan.avif"
  },
  {
    "name": "Tang Valley",
    "image": "/Assets/iternities/Bhutan/Tang-Valley.jpg"
  }
],
    highlights: [
      "Paro Dzong & National Museum — gateway fortress-monastery",
      "Thimphu — Buddha Dordenma & 13 Arts school",
      "Punakha Dzong at the confluence of two sacred rivers",
      "Phobjikha — valley of the rare black-necked cranes",
      "Bumthang sacred temples & Tang Valley pilgrimage circuit",
      "Tiger's Nest hike — Taktsang Monastery clinging to the cliff",
    ],
    isFeatured: true,
    accentClass: "ici--bhutan",
  },
  {
    id: "nepal",
    slug: "/itineraries/nepal/",
    title: "Nepal — From Everest to Lumbini",
    destination: "Nepal",
    region: "Nepal",
    type: "Culture & Wildlife",
    summary:
      "Mountain flights over Everest, UNESCO World Heritage temples, Chitwan wildlife safaris, the Pumdi-Kalabang hike and the Buddha's birthplace.",
    price: "On request",
    departure: "Sep – May",
    duration: { nights: 11, days: 12 },
    route: [
      "Kathmandu",
      "Bhaktapur",
      "Patan",
      "Chitwan",
      "Bandipur",
      "Pokhara",
      "Lumbini",
      "Nagarkot",
    ],
    "images": {"card": "/Assets/iternities/Nepal/Nepal Banner Image.jpg", "hero": "/Assets/iternities/Nepal/Nepal Banner Image.jpg"},
    "destinations": [
  {
    "name": "Kathmandu",
    "image": "/Assets/iternities/Nepal/Kathmandu Nepal.jpg"
  },
  {
    "name": "Bhaktapur",
    "image": "/Assets/iternities/Nepal/Bhaktapur Nepal.jpg"
  },
  {
    "name": "Patan",
    "image": "/Assets/iternities/Nepal/Patan Nepal.jpg"
  },
  {
    "name": "Chitwan",
    "image": "/Assets/iternities/Nepal/chitwan-nepal.jpg"
  },
  {
    "name": "Bandipur",
    "image": "/Assets/iternities/Nepal/Bandipur Nepal.jpg"
  },
  {
    "name": "Pokhara",
    "image": "/Assets/iternities/Nepal/Pokhara Nepal.jpg"
  },
  {
    "name": "Lumbini",
    "image": "/Assets/iternities/Nepal/Lumbini Nepal.jpg"
  },
  {
    "name": "Nagarkot",
    "image": "/Assets/iternities/Nepal/Nagarkot Nepal.jpg"
  }
],
    highlights: [
      "Himalayan mountain flight — views of Everest and high peaks",
      "Kathmandu — Pashupatinath, Boudhanath, Bhaktapur Durbar",
      "Patan — City of Fine Arts & Newari crafts heritage",
      "Chitwan — jeep safari, one-horned rhinos & tigers",
      "Pokhara — Annapurna range views across Phewa Lake",
      "Lumbini — birthplace of the Buddha",
    ],
    isFeatured: true,
    accentClass: "ici--nepal",
  },
  {
    id: "sri-lanka",
    slug: "/itineraries/sri-lanka/",
    title: "Pearl of the Indian Ocean",
    destination: "Sri Lanka",
    region: "Sri Lanka",
    type: "Wildlife & Culture",
    summary:
      "VIP arrival, Sigiriya Rock Fortress at dusk, the Minneriya elephant gathering, the scenic tea-train, leopard safaris at Wild Coast, whale watching and a private Galle Fort tour.",
    price: "On request",
    departure: "Any date",
    duration: { nights: 12, days: 13 },
    route: [
      "Negombo",
      "Sigiriya",
      "Polonnaruwa",
      "Kandy",
      "Hatton",
      "Yala",
      "Weligama",
      "Galle",
      "Colombo",
    ],
    "images": {"card": "/Assets/iternities/Siri Lanka/Sri Lanka Banner Image.jpg", "hero": "/Assets/iternities/Siri Lanka/Sri Lanka Banner Image.jpg"},
    "destinations": [
  {
    "name": "Negombo",
    "image": "/Assets/iternities/Siri Lanka/Negombo SriLanka.jpg"
  },
  {
    "name": "Sigiriya",
    "image": "/Assets/iternities/Siri Lanka/Sigriya Sri Lanka.jpg"
  },
  {
    "name": "Polonnaruwa",
    "image": "/Assets/iternities/Siri Lanka/Polonnaruwa SriLanka.jpg"
  },
  {
    "name": "Kandy",
    "image": "/Assets/iternities/Siri Lanka/Kandy SriLanka.jpg"
  },
  {
    "name": "Hatton",
    "image": "/Assets/iternities/Siri Lanka/Hatton Sri Lanka.jpg"
  },
  {
    "name": "Yala",
    "image": "/Assets/iternities/Siri Lanka/Yala SriLanka.jpg"
  },
  {
    "name": "Weligama",
    "image": "/Assets/iternities/Siri Lanka/Weligama SriLanka.jpg"
  },
  {
    "name": "Galle",
    "image": "/Assets/iternities/Siri Lanka/Galle SriLanka.jpg"
  },
  {
    "name": "Colombo",
    "image": "/Assets/iternities/Siri Lanka/Colombo SriLanka.jpg"
  }
],
    highlights: [
      "Sigiriya Rock Fortress — UNESCO World Heritage at golden hour",
      "Polonnaruwa — medieval ruined capital by bicycle",
      "Kandy — Tooth Relic Temple & Kandyan dance performance",
      "Ceylon Tea Trails — scenic Peradeniya–Hatton tea-train",
      "Yala — private leopard safaris & dune dinners",
      "Galle Fort heritage walk & whale watching off Mirissa",
    ],
    isFeatured: true,
    accentClass: "ici--sl",
  },
  {
    id: "bhutan-and-india",
    slug: "/itineraries/bhutan-and-india/",
    title: "Bhutan & India",
    destination: "multi",
    region: "Bhutan & North India",
    type: "Bhutan + India",
    summary:
      "Nine nights across Bhutan's sacred valleys and fortress monasteries, culminating in the Tiger's Nest hike, then onward to Delhi's Mughal heritage and the Taj Mahal at sunrise.",
    price: "On request",
    departure: "Any date",
    duration: { nights: 14, days: 15 },
    route: [
      "Paro",
      "Thimphu",
      "Punakha",
      "Phobjikha",
      "Bumthang",
      "Tang Valley",
      "Paro",
      "Delhi",
      "Agra",
    ],
    "images": {"card": "/Assets/iternities/Multi country/Bhutan & India/Bhutan & India Banner Image.jpg", "hero": "/Assets/iternities/Multi country/Bhutan & India/Bhutan & India Banner Image.jpg"},
    "destinations": [
  {
    "name": "Paro",
    "image": "/Assets/iternities/Multi country/Bhutan & India/Paro.jpg"
  },
  {
    "name": "Thimphu",
    "image": "/Assets/iternities/Multi country/Bhutan & India/Thimphu Bhutan.jpg"
  },
  {
    "name": "Punakha",
    "image": "/Assets/iternities/Multi country/Bhutan & India/Punakha Bhutan.jpg"
  },
  {
    "name": "Phobjikha",
    "image": "/Assets/iternities/Multi country/Bhutan & India/Phobjikha Bhutan.jpg"
  },
  {
    "name": "Bumthang",
    "image": "/Assets/iternities/Multi country/Bhutan & India/Bumthang Bhutan.avif"
  },
  {
    "name": "Tang Valley",
    "image": "/Assets/iternities/Multi country/Bhutan & India/Tang-Valley.jpg"
  },
  {
    "name": "Delhi",
    "image": "/Assets/iternities/Multi country/Bhutan & India/Delhi .jpg"
  },
  {
    "name": "Agra",
    "image": "/Assets/iternities/Multi country/Bhutan & India/Agra.jpg"
  }
],
    highlights: [
      "Tiger's Nest hike — Taktsang Monastery, Paro",
      "Punakha Dzong — fortress at the confluence of two rivers",
      "Delhi — Humayun's Tomb and Qutb Minar heritage circuit",
      "Taj Mahal at sunrise — the world's most beautiful monument",
      "Seamless border logistics coordinated by one team",
    ],
  },
  {
    id: "nepal-and-india",
    slug: "/itineraries/nepal-and-india/",
    title: "Nepal & India",
    destination: "multi",
    region: "Nepal & North India",
    type: "Nepal + India",
    summary:
      "A mountain flight over Everest, Chitwan jungle safaris, Lumbini — birthplace of the Buddha — and the Taj Mahal at sunrise.",
    price: "On request",
    departure: "Sep – May",
    duration: { nights: 16, days: 17 },
    route: [
      "Kathmandu",
      "Chitwan",
      "Bandipur",
      "Pokhara",
      "Lumbini",
      "Nagarkot",
      "Delhi",
      "Agra",
    ],
    "images": {"card": "/Assets/iternities/Multi country/Nepal & India/Nepal & India Banner Image.jpg", "hero": "/Assets/iternities/Multi country/Nepal & India/Nepal & India Banner Image.jpg"},
    "destinations": [
  {
    "name": "Kathmandu",
    "image": "/Assets/iternities/Multi country/Nepal & India/Kathmandu Nepal.jpg"
  },
  {
    "name": "Chitwan",
    "image": "/Assets/iternities/Multi country/Nepal & India/chitwan-nepal.jpg"
  },
  {
    "name": "Bandipur",
    "image": "/Assets/iternities/Multi country/Nepal & India/Bandipur Nepal.jpg"
  },
  {
    "name": "Pokhara",
    "image": "/Assets/iternities/Multi country/Nepal & India/Pokhara Nepal.jpg"
  },
  {
    "name": "Lumbini",
    "image": "/Assets/iternities/Multi country/Nepal & India/Lumbini Nepal.jpg"
  },
  {
    "name": "Nagarkot",
    "image": "/Assets/iternities/Multi country/Nepal & India/Nagarkot Nepal.jpg"
  },
  {
    "name": "Delhi",
    "image": "/Assets/iternities/Multi country/Nepal & India/Delhi.jpg"
  },
  {
    "name": "Agra",
    "image": "/Assets/iternities/Multi country/Nepal & India/Agra.jpg"
  }
],
    highlights: [
      "Everest mountain flight — highest peaks on earth",
      "Chitwan wildlife safaris — one-horned rhinos & tigers",
      "Lumbini — the birthplace of Siddhartha Gautama (Buddha)",
      "Nagarkot — panoramic Himalayan sunrise viewpoint",
      "Taj Mahal at sunrise — iconic close to a Himalayan journey",
    ],
  },
  {
    id: "nepal-and-bhutan",
    slug: "/itineraries/nepal-and-bhutan/",
    title: "Nepal & Bhutan",
    destination: "multi",
    region: "Nepal & Bhutan",
    type: "Nepal + Bhutan",
    summary:
      "Designed for families — a Himalayan mountain flight, Chitwan jungle safaris, Bhutan's sacred dzongs, archery, a traditional dress photoshoot and the Tiger's Nest hike.",
    price: "On request",
    departure: "Families",
    duration: { nights: 10, days: 11 },
    route: ["Kathmandu", "Chitwan", "Paro", "Thimphu", "Punakha", "Paro"],
    "images": {"card": "/Assets/iternities/Multi country/Nepal & Bhutan/Bhutan & Nepal Banner Image.jpg", "hero": "/Assets/iternities/Multi country/Nepal & Bhutan/Bhutan & Nepal Banner Image.jpg"},
    "destinations": [
  {
    "name": "Kathmandu",
    "image": "/Assets/iternities/Multi country/Nepal & Bhutan/Kathmandu Nepal.jpg"
  },
  {
    "name": "Chitwan",
    "image": "/Assets/iternities/Multi country/Nepal & Bhutan/chitwan-nepal.jpg"
  },
  {
    "name": "Paro",
    "image": "/Assets/iternities/Multi country/Nepal & Bhutan/Paro.jpg"
  },
  {
    "name": "Thimphu",
    "image": "/Assets/iternities/Multi country/Nepal & Bhutan/Thimphu Bhutan.jpg"
  },
  {
    "name": "Punakha",
    "image": "/Assets/iternities/Multi country/Nepal & Bhutan/Punakha Bhutan.jpg"
  }
],
    highlights: [
      "Himalayan mountain flight — Everest views for all ages",
      "Chitwan — family-friendly jungle jeep safari",
      "Bhutan archery demonstration and traditional dress photoshoot",
      "Punakha Dzong — the most beautiful fortress in Bhutan",
      "Tiger's Nest hike — paced gently for families with children",
    ],
  },
  {
    "id": "ayurvedic-reset",
    "slug": "/itineraries/ayurvedic-reset/",
    "title": "Ayurvedic Reset",
    "destination": "India",
    "region": "South India \u00b7 Kerala",
    "type": "Wellness",
    "summary": "Immerse in an authentic Ayurvedic healing experience along the Kerala coast.",
    "price": "From \u20ac3,700 pp",
    "departure": "Any date",
    "duration": {
      "nights": 10,
      "days": 11
    },
    "route": [
      "Cochin",
      "Nattika"
    ],
    "images": {"card": "/Assets/iternities/Ayurvedic Reset/Banner image - Ayurvedic reset.jpg", "hero": "/Assets/iternities/Ayurvedic Reset/Banner image - Ayurvedic reset.jpg"},
    "destinations": [
  {
    "name": "Cochin",
    "image": "/Assets/home/India.jpg"
  },
  {
    "name": "Nattika",
    "image": "/Assets/iternities/Ayurvedic Reset/Nattika Beach Resort 1.jpg"
  }
],
    "highlights": [
      "Fort Kochi Harbor",
      "Mattancherry Dutch Palace",
      "Jewish Synagogue",
      "Sunset cruise",
      "Ayurveda program",
      "Yoga",
      "Beach"
    ]
  },
  {
    "id": "balance-bliss",
    "slug": "/itineraries/balance-bliss/",
    "title": "Balance & Bliss",
    "destination": "India",
    "region": "South India \u00b7 Kerala",
    "type": "Wellness",
    "summary": "Achieve harmony and well-being with a comprehensive wellness retreat at Palakkad.",
    "price": "From \u20ac9,750 pp",
    "departure": "Any date",
    "duration": {
      "nights": 17,
      "days": 18
    },
    "route": [
      "Cochin",
      "Palakkad"
    ],
    "images": {"card": "/Assets/iternities/Balance & Bliss /Banner image - Balance & Bliss.jpg", "hero": "/Assets/iternities/Balance & Bliss /Banner image - Balance & Bliss.jpg"},
    "destinations": [
  {
    "name": "Cochin",
    "image": "/Assets/iternities/Balance & Bliss /Taj Mabar, Cochin.jpg"
  },
  {
    "name": "Palakkad",
    "image": "/Assets/iternities/Balance & Bliss /Kalari Kovilakom, Palakkad.jpg"
  }
],
    "highlights": [
      "Fort Kochi Harbor",
      "Mattancherry Dutch Palace",
      "Jewish Synagogue",
      "Sunset cruise",
      "Ayurveda program",
      "Cultural programs",
      "Yoga"
    ]
  },
  {
    "id": "path-to-wellness",
    "slug": "/itineraries/path-to-wellness/",
    "title": "Path to Wellness",
    "destination": "India",
    "region": "South India \u00b7 Goa & Karnataka",
    "type": "Wellness",
    "summary": "A peaceful sanctuary in Gokarna designed for a transformational healing experience.",
    "price": "From \u20ac7,800 pp",
    "departure": "Any date",
    "duration": {
      "nights": 17,
      "days": 18
    },
    "route": [
      "Goa",
      "Gokarna"
    ],
    "images": {"card": "/Assets/iternities/Path to wellness/Banner image - Path to wellness 1.jpg", "hero": "/Assets/iternities/Path to wellness/Banner image - Path to wellness 1.jpg"},
    "destinations": [
  {
    "name": "Goa",
    "image": "/Assets/iternities/Path to wellness/Taj Exotica Resort, Goa.jpg"
  },
  {
    "name": "Gokarna",
    "image": "/Assets/iternities/Path to wellness/Gokarna.jpg"
  }
],
    "highlights": [
      "Ayurveda program",
      "Meditation",
      "Yoga",
      "Nature Trails & Bird Watching",
      "Art Studio"
    ]
  },
  {
    "id": "rejuvenate-restore",
    "slug": "/itineraries/rejuvenate-restore/",
    "title": "Rejuvenate & Restore",
    "destination": "India",
    "region": "South India \u00b7 Kerala",
    "type": "Wellness",
    "summary": "Naturopathy and holistic wellness across the tranquil backwaters and hills of Kerala.",
    "price": "From \u20ac4,500 pp",
    "departure": "Any date",
    "duration": {
      "nights": 12,
      "days": 13
    },
    "route": [
      "Cochin",
      "Panchalimedu",
      "Kumarakom"
    ],
    "images": {"card": "/Assets/iternities/Rejuvenate & Restore /Banner image - Rejuvenate & Restore.jpg", "hero": "/Assets/iternities/Rejuvenate & Restore /Banner image - Rejuvenate & Restore.jpg"},
    "destinations": [
  {
    "name": "Cochin",
    "image": "/Assets/iternities/Rejuvenate & Restore /Cochin.jpg"
  },
  {
    "name": "Panchalimedu",
    "image": "/Assets/iternities/Rejuvenate & Restore /Prakriti Shakti, Panchalimedu.jpg"
  },
  {
    "name": "Kumarakom",
    "image": "/Assets/iternities/Rejuvenate & Restore /Kumarakom lake resort.jpg"
  }
],
    "highlights": [
      "Fort Kochi Harbor",
      "Sunset cruise",
      "Yoga",
      "Naturopathy",
      "Meditation",
      "Houseboat Cruise",
      "Village Life"
    ]
  },
  {
    "id": "strength-serenity",
    "slug": "/itineraries/strength-serenity/",
    "title": "Strength & Serenity",
    "destination": "India",
    "region": "South India \u00b7 Kerala",
    "type": "Wellness",
    "summary": "Experience the ancient martial art of Kalaripayattu and the calming backwaters.",
    "price": "From \u20ac3,750 pp",
    "departure": "Any date",
    "duration": {
      "nights": 12,
      "days": 13
    },
    "route": [
      "Cochin",
      "Kumarakom",
      "Trivandrum"
    ],
    "images": {"card": "/Assets/iternities/Strength & Serenity /Banner image - Strength & Serenity.jpg", "hero": "/Assets/iternities/Strength & Serenity /Banner image - Strength & Serenity.jpg"},
    "destinations": [
  {
    "name": "Cochin",
    "image": "/Assets/iternities/Strength & Serenity /Brunton Boatyard, Cochin.jpg"
  },
  {
    "name": "Kumarakom",
    "image": "/Assets/iternities/Strength & Serenity /Kumarakom lake resort.jpg"
  },
  {
    "name": "Trivandrum",
    "image": "/Assets/iternities/Strength & Serenity /The Leela Kovalam, Trivandrum.jpg"
  }
],
    "highlights": [
      "Fort Kochi Harbor",
      "Houseboat Cruise",
      "Village Life",
      "Local Culture",
      "Daily Kalari practice",
      "Curated walks",
      "Beaches"
    ]
  },
];
