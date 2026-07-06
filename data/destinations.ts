import type { Destination } from "@/types/destination";

export const destinations: Destination[] = [
  {
    id: "india",
    name: "India",
    slug: "/destinations/india/",
    number: "01",
    tags: ["Wildlife", "Culture", "Wellness", "Spiritual"],
    titleTag: "Private India Tours for US Travelers | AndThen Travels",
    metaDescription:
      "Discover India on a private, tailor-made tour — from the Golden Triangle and Rajasthan palaces to Kerala backwaters, tiger reserves and Himalayan foothills. Curated for US travelers by AndThen.",
    heroImage: "/Assets/destinations/subpages/india/banner .jpg",
    heroTagline: "Private journeys · Tailor-made · Departs daily",
    heroVideo: "/videos/india-banner.mp4",
    overviewTitle: "India — nine journeys, one subcontinent",
    overviewIntro:
      "From the Mughal monuments of the north to the temple towns of Tamil Nadu, the tiger reserves of central India and the backwaters of Kerala — each itinerary is fully private, departs on any date and can be extended, shortened or rerouted to suit your interests.",
    overviewQuote:
      "To other countries you go as a tourist. To India you come as a pilgrim.",
    overviewCite: "Martin Scorsese",
    stats: [
      { label: "Itineraries", value: "9" },
      { label: "Nights typical", value: "11–15" },
      { label: "Departure date", value: "Any date" },
    ],
    facts: [
      { label: "No sharing vehicles or guides", value: "100% Private" },
      { label: "Starts on any calendar day", value: "Departs Daily" },
      { label: "24-hour on-ground assistance", value: "Dedicated Support" },
      { label: "Customised around your interests", value: "Tailor-Made" },
    ],
    regions: [
      {
        title: "North India",
        description:
          "Royal palaces, Mughal monuments and lake cities across the full Rajasthan circuit. Stay in heritage forts converted to luxury hotels and travel by private vehicle between the maharajas' capitals.",
        tags: ["Taj Mahal", "Palaces", "Forts"],
        image: "/Assets/destinations/subpages/india/North India.jpg",
        accentClass: "rci--north",
      },
      {
        title: "South India",
        description:
          "From colonial Cochin harbor to Vembanad lake and Kovalam Ayurveda coast — tea hills, spice forests, and houseboats.",
        tags: ["Backwaters", "Ayurveda", "Temples"],
        image: "/Assets/destinations/subpages/india/South India.jpg",
        accentClass: "rci--south",
      },
      {
        title: "Central India",
        description:
          "Five of central India's finest tiger reserves — Bandhavgarh, Kanha, Pench, and Tadoba across tiger country.",
        tags: ["Safaris", "Wildlife", "Lodges"],
        image: "/Assets/destinations/subpages/india/Central and West India.jpg",
        accentClass: "rci--central",
      },
      {
        title: "Northeast India",
        description:
          "Himalayan foothills, Buddhist monasteries, tea estates of Darjeeling, and cultural heritage.",
        tags: ["Himalayas", "Tea", "Buddhism"],
        image: "/Assets/destinations/subpages/india/North East India.jpg",
        accentClass: "rci--northeast",
      },
    ],
    popularPlaces: [
      {
        name: "Taj Mahal",
        region: "Agra, Uttar Pradesh",
        description:
          "The world's most beautiful monument at sunrise, private guided access.",
        isFeatured: true,
        image: "/Assets/destinations/subpages/india/Taj Mahal.jpg",
        imageClass: "pci--taj",
      },
      {
        name: "Varanasi",
        region: "Ghats of Ganges",
        description:
          "India's spiritual heartland, experiencing Ganga Aarti at dusk.",
        image: "/Assets/destinations/subpages/india/Varanasi.jpg",
        imageClass: "pci--varanasi",
      },
      {
        name: "Kerala Backwaters",
        region: "Alappuzha & Kumarakom",
        description:
          "Cruising on a private luxury Kettuvallam (houseboat) at dawn.",
        image: "/Assets/destinations/subpages/india/Kerala backwaters.jpg",
        imageClass: "pci--kerala",
      },
      {
        name: "Ranthambore",
        region: "Tiger safaris",
        description: "Spotting wild Bengal tigers in historical ruins.",
        image: "/Assets/destinations/subpages/india/Ranthambore.jpeg",
        imageClass: "pci--ranthambore",
      },
      {
        name: "Udaipur",
        region: "Lake Pichola",
        description:
          "Romantic lake palaces, boat rides, and the Aravalli range.",
        image: "/Assets/destinations/subpages/india/Taj Lake Palace .avif",
        imageClass: "pci--udaipur",
      },
      {
        name: "Hampi",
        region: "Karnataka ruins",
        description:
          "UNESCO boulder-strewn ruins of the historic Vijayanagara empire.",
        image: "/Assets/destinations/subpages/india/Hampi.jpg",
        imageClass: "pci--hampi",
      },
    ],
    recommendedHotels: [
      "taj-mahal-palace-mumbai",
      "oberoi-amarvilas",
      "taj-lake-palace",
      "mahua-kothi-bandhavgarh",
      "brunton-boatyard-kochi",
      "rambagh-palace",
    ],
    bestTime: {
      description:
        "October to March is peak season with cool, dry weather. October and March are great shoulders. May to September brings monsoons and high temperatures in the north, but is excellent for Kerala's monsoon Ayurveda.",
      months: [
        { month: "Jan", type: "peak" },
        { month: "Feb", type: "peak" },
        { month: "Mar", type: "good" },
        { month: "Apr", type: "low" },
        { month: "May", type: "low" },
        { month: "Jun", type: "low" },
        { month: "Jul", type: "low" },
        { month: "Aug", type: "low" },
        { month: "Sep", type: "low" },
        { month: "Oct", type: "good" },
        { month: "Nov", type: "peak" },
        { month: "Dec", type: "peak" },
      ],
      seasons: [
        {
          name: "Cool Season",
          months: "Oct – Mar",
          description:
            "Ideal weather across the entire country, perfect for palaces and safaris.",
        },
        {
          name: "Monsoon & Ayurveda Season",
          months: "Jun – Sep",
          description:
            "Heavy rain in the south, hot in the north. Recognized as the ideal season for traditional Ayurvedic healing treatments.",
        },
      ],
    },
    tours: [
      "land-of-kings",
      "timeless-treasures",
      "wild-encounters",
      "gods-own-country-unveiled",
      "tete-a-tete-with-gods",
      "awakening-of-an-empire",
      "temple-trail",
      "by-the-beach",
      "sun-heritage-and-splendor",
    ],
  },

  {
    id: "nepal",
    name: "Nepal",
    slug: "/destinations/nepal/",
    number: "03",
    tags: ["Himalayan treks", "Temples", "Adventure"],
    titleTag: "Private Nepal Tours for US Travelers | AndThen Travels",
    metaDescription:
      "Explore Nepal on a private tour. Mountain views of Mount Everest, medieval Kathmandu temples, and wildlife safaris in Chitwan National Park. Curated by AndThen Travels.",
    heroImage: "/Assets/destinations/main/Nepal .jpg",
    heroTagline: "The Roof of the World",
    heroVideo: "/videos/nepal-banner.mp4",
    overviewTitle: "Nepal — the Himalayas, up close",
    overviewIntro:
      "Nepal is the only place on earth where you can fly to within sight of Mount Everest, take a jungle safari for one-horned rhinos, walk through living medieval cities and visit the birthplace of the Buddha — all within a single two-week journey.",
    overviewQuote:
      "Only those who risk going too far can possibly find out how far one can go.",
    overviewCite: "T.S. Eliot",
    stats: [
      { label: "Itineraries", value: "1" },
      { label: "Nights in Nepal", value: "11" },
      { label: "Best Season", value: "Sep–May" },
    ],
    facts: [
      { label: "Dedicated private guide and driver", value: "Fully Escorted" },
      { label: "Scenic flight viewing Mt. Everest", value: "Everest Flight" },
      {
        label: "Vetted properties and luxury lodges",
        value: "Handpicked Stays",
      },
      {
        label: "Multi-country combinations with India",
        value: "Seamless Borders",
      },
    ],
    regions: [
      {
        title: "Kathmandu Valley",
        description:
          "Living history in Kathmandu, Bhaktapur and Patan with ancient Newari woodwork.",
        tags: ["Durbar Square", "Temples", "Heritage"],
        image: "/Assets/destinations/subpages/nepal/Kathmandu Valley.jpg",
        accentClass: "rci--north",
      },
      {
        title: "Pokhara Valley",
        description:
          "Gateway to Annapurna hikes, peaceful lakes, and incredible sunset lookouts.",
        tags: ["Phewa Lake", "Annapurna Views", "Treks"],
        image: "/Assets/destinations/subpages/nepal/Pokhara.jpg",
        accentClass: "rci--south",
      },
      {
        title: "Chitwan National Park",
        description:
          "Subtropical lowlands hosting safaris for tigers, rhinos, and elephant marshes.",
        tags: ["Jeep Safaris", "Rhinos", "Wildlife"],
        image: "/Assets/destinations/subpages/nepal/Chitwan National Park.jpg",
        accentClass: "rci--central",
      },
      {
        title: "Lumbini & Bandipur",
        description:
          "Lumbini birthplace of Buddha and the quiet, historic hillside town of Bandipur.",
        tags: ["Buddhism", "Hill Towns", "Heritage"],
        image: "/Assets/destinations/subpages/nepal/Lumbini and Bandipur.jpg",
        accentClass: "rci--northeast",
      },
    ],
    popularPlaces: [
      {
        name: "Mount Everest Flight",
        region: "Himalayan range",
        description:
          "Unparalleled views of Mount Everest and high peaks from a scenic flight.",
        isFeatured: true,
        imageClass: "pci--taj",
        image: "/Assets/destinations/subpages/nepal/Mount Everest flight.jpg",
      },
      {
        name: "Bhaktapur Durbar Square",
        region: "Kathmandu Valley",
        description:
          "Living medieval architecture, palace carvings, and local Newari pottery.",
        imageClass: "pci--varanasi",
        image:
          "/Assets/destinations/subpages/nepal/Bhaktapur Durbar Square.jpg",
      },
      {
        name: "Chitwan Safaris",
        region: "Terai lowlands",
        description:
          "Tracking the endangered one-horned rhinoceros and Bengal tigers.",
        imageClass: "pci--kerala",
        image: "/Assets/destinations/subpages/nepal/Chitwan Safari.jpg",
      },
      {
        name: "Pokhara & Annapurna",
        region: "Annapurna Range",
        description:
          "Reflections of high mountain peaks in the calm water of Phewa Lake.",
        imageClass: "pci--ranthambore",
        image: "/Assets/destinations/subpages/nepal/Annapurna.jpg",
      },
    ],
    recommendedHotels: [
      "dwarikas-kathmandu",
      "meghauli-serai-chitwan",
      "tiger-palace-lumbini",
      "barahi-jungle-lodge-bandipur",
    ],
    bestTime: {
      description:
        "Autumn (September to November) and Spring (March to May) provide dry weather and clear views of the high peaks, perfect for trekking and sightseeing.",
      months: [
        { month: "Jan", type: "low" },
        { month: "Feb", type: "good" },
        { month: "Mar", type: "peak" },
        { month: "Apr", type: "peak" },
        { month: "May", type: "good" },
        { month: "Jun", type: "low" },
        { month: "Jul", type: "low" },
        { month: "Aug", type: "low" },
        { month: "Sep", type: "good" },
        { month: "Oct", type: "peak" },
        { month: "Nov", type: "peak" },
        { month: "Dec", type: "good" },
      ],
      seasons: [
        {
          name: "Peak Trekking",
          months: "Oct – Nov",
          description:
            "Clear mountain air, minimal haze, and comfortable daytime temperatures for walking.",
        },
        {
          name: "Spring Blooms",
          months: "Mar – Apr",
          description:
            "Rhododendron forests in full bloom across the foothills, warm sunny days.",
        },
      ],
    },
    tours: ["nepal", "nepal-and-india", "nepal-and-bhutan"],
  },
  {
    id: "bhutan",
    name: "Bhutan",
    slug: "/destinations/bhutan/",
    number: "02",
    tags: ["Monasteries", "Trekking", "Wellness"],
    titleTag: "Private Bhutan Tours for US Travelers | AndThen Travels",
    metaDescription:
      "Discover Bhutan on a private tailor-made journey. Hike to Tiger's Nest, explore Paro and Thimphu valleys, and experience Gross National Happiness. Curated for US travelers.",
    heroImage: "/Assets/destinations/main/Bhutan .jpg",
    heroTagline: "The Land of the Thunder Dragon",
    heroVideo: "/videos/bhutan-banner.mp4",
    overviewTitle: "Bhutan — monasteries, peaks, and profound silence",
    overviewIntro:
      "Bhutan restricts visitor numbers to protect its culture and environment. Our private journeys guide you through high mountain passes, ancient fortress-monasteries (dzongs), and pristine valleys at your own pace.",
    overviewQuote: "Bhutan is not just a place you see. It is a state of mind.",
    overviewCite: "Traveler Proverb",
    stats: [
      { label: "Itineraries", value: "1" },
      { label: "Nights in Bhutan", value: "9" },
      { label: "Departure date", value: "Any date" },
    ],
    facts: [
      { label: "All paperwork arranged by our team", value: "Visa Included" },
      {
        label: "SDF tourist fee fully covered in pricing",
        value: "Daily Tariff Paid",
      },
      { label: "Certified English-speaking guide", value: "Private Cicerone" },
      {
        label: "Logistics for local airlines supported",
        value: "Flight Support",
      },
    ],
    regions: [
      {
        title: "Paro Valley",
        description:
          "Gateway to the country, home to iconic cliffside temples, historical museums, and scenic hikes.",
        tags: ["Tigers Nest", "Hiking", "History"],
        accentClass: "rci--north",
      },
      {
        title: "Thimphu Valley",
        description:
          "The capital city, blending traditional arts & architecture with emerging modern culture.",
        tags: ["Dzongs", "Artisan Crafts", "Monarchy"],
        accentClass: "rci--south",
      },
      {
        title: "Punakha Valley",
        description:
          "The warm winter capital, famous for Punakha Dzong at the confluence of two rivers.",
        tags: ["Dzongs", "Rivers", "Villas"],
        accentClass: "rci--central",
      },
      {
        title: "Phobjikha Valley",
        description:
          "Pristine glacial valley, winter habitat of the rare black-necked cranes.",
        tags: ["Nature", "Wildlife", "Remote"],
        accentClass: "rci--northeast",
      },
    ],
    popularPlaces: [
      {
        name: "Tiger's Nest",
        region: "Paro Valley",
        description:
          "Taktsang Monastery, clinging dramatically to a cliff 3,000 feet above the valley floor.",
        isFeatured: true,
        imageClass: "pci--taj", // reuses styling tone
      },
      {
        name: "Punakha Dzong",
        region: "Punakha Valley",
        description:
          "Majestic fortress at the confluence of the Pho Chhu and Mo Chhu rivers.",
        imageClass: "pci--varanasi",
      },
      {
        name: "Buddha Dordenma",
        region: "Thimphu",
        description:
          "A gigantic 169-foot bronze Buddha statue overlooking the valley.",
        imageClass: "pci--kerala",
      },
      {
        name: "Phobjikha Valley",
        region: "Wangdue Phodrang",
        description:
          "Beautiful wetlands and home to black-necked cranes during winter months.",
        imageClass: "pci--ranthambore",
      },
    ],
    recommendedHotels: [
      "amankora-paro",
      "como-uma-paro",
      "uma-punakha",
      "le-meridien-thimphu",
      "six-senses-bumthang",
      "gangtey-goenpa-lodge",
    ],
    bestTime: {
      description:
        "Spring (March to May) and Autumn (September to November) are peak seasons with clear Himalayan views and major festivals.",
      months: [
        { month: "Jan", type: "low" },
        { month: "Feb", type: "good" },
        { month: "Mar", type: "peak" },
        { month: "Apr", type: "peak" },
        { month: "May", type: "good" },
        { month: "Jun", type: "low" },
        { month: "Jul", type: "low" },
        { month: "Aug", type: "low" },
        { month: "Sep", type: "good" },
        { month: "Oct", type: "peak" },
        { month: "Nov", type: "peak" },
        { month: "Dec", type: "good" },
      ],
      seasons: [
        {
          name: "Festival Season",
          months: "Mar-May / Sep-Nov",
          description:
            "Clear mountain weather, perfect for trekking and witnessing annual festival dances.",
        },
        {
          name: "Quiet Season",
          months: "Dec – Feb",
          description:
            "Crisp winter days with clear skies, lower tourist volumes, though temperatures drop significantly at night.",
        },
      ],
    },
    tours: ["bhutan", "bhutan-and-india", "nepal-and-bhutan"],
  },
  {
    id: "sri-lanka",
    name: "Sri Lanka",
    slug: "/destinations/sri-lanka/",
    number: "04",
    tags: ["Ayurveda", "Wildlife", "Beaches", "Ruins"],
    titleTag: "Private Sri Lanka Tours for US Travelers | AndThen Travels",
    metaDescription:
      "Discover Sri Lanka on a private tailor-made tour. Sigiriya Rock, Ceylon tea estates, Yala leopard safaris, and beaches. Curated by AndThen Travels.",
    heroImage: "/Assets/destinations/main/Sri Lanka.jpg",
    heroTagline: "Pearl of the Indian Ocean",
    heroVideo: "/videos/sri-lanka-banner.mp4",
    overviewTitle: "Sri Lanka — ancient ruins and wild safaris",
    overviewIntro:
      "A country small enough to cross in a day yet rich enough to fill a month — ancient rock fortresses, Kandyan dancers, tea estates at 4,000 feet, leopards at Yala and beaches off the southern coast.",
    overviewQuote:
      "Sri Lanka is a beautiful, tropical island. It's got everything from beaches to tea plantations.",
    overviewCite: "Duran Duran",
    stats: [
      { label: "Itineraries", value: "1" },
      { label: "Nights typical", value: "12" },
      { label: "Departure date", value: "Any date" },
    ],
    facts: [
      { label: "Fast track airport arrivals", value: "VIP Arrivals" },
      {
        label: "Whale watching & safaris privately guided",
        value: "Private Safaris",
      },
      {
        label: "Historic colonial mansions and eco-lodges",
        value: "Boutique Stays",
      },
      { label: "Authentic local Arrack tastings", value: "Curated Tastings" },
    ],
    regions: [
      {
        title: "Cultural Triangle",
        description:
          "Sigiriya Rock Fortress, ruins of Polonnaruwa, and cave temples of Dambulla.",
        tags: ["Sigiriya", "Ruins", "UNESCO"],
        accentClass: "rci--north",
      },
      {
        title: "Hill Country",
        description:
          "Tea plantations of Nuwara Eliya and Hatton, misty hills, and train journeys.",
        tags: ["Tea Trails", "Scenic Train", "Hiking"],
        accentClass: "rci--south",
      },
      {
        title: "Southern Coast",
        description:
          "Galle Fort heritage walk, whale watching in Mirissa, and sandy shores.",
        tags: ["Beaches", "Galle Fort", "Whales"],
        accentClass: "rci--central",
      },
      {
        title: "Yala National Park",
        description:
          "Scrub forests on the ocean edge, home to the highest density of leopards.",
        tags: ["Leopards", "Safaris", "Wild Coast"],
        accentClass: "rci--northeast",
      },
    ],
    popularPlaces: [
      {
        name: "Sigiriya Lion Rock",
        region: "Cultural Triangle",
        description:
          "Climbing the historic 600-foot fortress rock at golden hour.",
        isFeatured: true,
        imageClass: "pci--taj",
      },
      {
        name: "Galle Fort",
        region: "Southern Coast",
        description:
          "17th-century colonial fortress streets, architecture, and ocean views.",
        imageClass: "pci--varanasi",
      },
      {
        name: "Tea Trails train",
        region: "Hill Country",
        description:
          "The scenic train ride climbing through tea estates to Hatton.",
        imageClass: "pci--kerala",
      },
      {
        name: "Yala safaris",
        region: "Southern Coast",
        description:
          "Tracking leopards, elephants, and sloth bears with expert naturalists.",
        imageClass: "pci--ranthambore",
      },
    ],
    recommendedHotels: [
      "amankora-paro", // placeholder or list generic
      "como-uma-paro",
      "uma-punakha",
    ],
    bestTime: {
      description:
        "Sri Lanka has two monsoons affecting opposite sides of the island. The best time for the west and south coasts is December to March, while the east coast is best from May to September.",
      months: [
        { month: "Jan", type: "peak" },
        { month: "Feb", type: "peak" },
        { month: "Mar", type: "good" },
        { month: "Apr", type: "good" },
        { month: "May", type: "low" },
        { month: "Jun", type: "low" },
        { month: "Jul", type: "good" },
        { month: "Aug", type: "good" },
        { month: "Sep", type: "low" },
        { month: "Oct", type: "low" },
        { month: "Nov", type: "good" },
        { month: "Dec", type: "peak" },
      ],
      seasons: [
        {
          name: "South & West Season",
          months: "Dec – Mar",
          description:
            "Dry and sunny on beaches and in hill country, perfect for Galle and Yala.",
        },
        {
          name: "East Coast Season",
          months: "May – Sep",
          description:
            "Best weather for east coast beaches (Trincomalee/Arugam Bay).",
        },
      ],
    },
    tours: ["sri-lanka"],
  },
];
