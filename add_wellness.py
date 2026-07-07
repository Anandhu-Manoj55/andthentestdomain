import re
import json

def process():
    with open('data/tours.ts', 'r') as f:
        content = f.read()

    # Remove the old `images: itineraryImages...` lines
    content = re.sub(r'\s*images:\s*itineraryImages\.[a-zA-Z]+,?', '', content)

    # Now let's append the 5 new wellness tours
    wellness_tours = [
        {
            "id": "ayurvedic-reset",
            "slug": "/itineraries/ayurvedic-reset/",
            "title": "Ayurvedic Reset",
            "destination": "India",
            "region": "South India · Kerala",
            "type": "Wellness",
            "summary": "Immerse in an authentic Ayurvedic healing experience along the Kerala coast.",
            "price": "From €3,700 pp",
            "departure": "Any date",
            "duration": { "nights": 10, "days": 11 },
            "route": ["Cochin", "Nattika"],
            "images": {
                "card": "/Assets/iternities/Ayurvedic Reset/Kochi.webp",
                "hero": "/Assets/iternities/Ayurvedic Reset/Kochi.webp"
            },
            "destinations": [
                {
                    "name": "Cochin",
                    "image": "/Assets/iternities/Ayurvedic Reset/Kochi.webp"
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
            "region": "South India · Kerala",
            "type": "Wellness",
            "summary": "Achieve harmony and well-being with a comprehensive wellness retreat at Palakkad.",
            "price": "From €9,750 pp",
            "departure": "Any date",
            "duration": { "nights": 17, "days": 18 },
            "route": ["Cochin", "Palakkad"],
            "images": {
                "card": "/Assets/iternities/Balance & Bliss /Cochin.jpg",
                "hero": "/Assets/iternities/Balance & Bliss /Cochin.jpg"
            },
            "destinations": [
                {
                    "name": "Cochin",
                    "image": "/Assets/iternities/Balance & Bliss /Cochin.jpg"
                },
                {
                    "name": "Palakkad",
                    "image": "/Assets/iternities/Balance & Bliss /Palakkad.jpg"
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
            "region": "South India · Goa & Karnataka",
            "type": "Wellness",
            "summary": "A peaceful sanctuary in Gokarna designed for a transformational healing experience.",
            "price": "From €7,800 pp",
            "departure": "Any date",
            "duration": { "nights": 17, "days": 18 },
            "route": ["Goa", "Gokarna"],
            "images": {
                "card": "/Assets/iternities/Path to wellness/Goa.jpg",
                "hero": "/Assets/iternities/Path to wellness/Goa.jpg"
            },
            "destinations": [
                {
                    "name": "Goa",
                    "image": "/Assets/iternities/Path to wellness/Goa.jpg"
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
            "region": "South India · Kerala",
            "type": "Wellness",
            "summary": "Naturopathy and holistic wellness across the tranquil backwaters and hills of Kerala.",
            "price": "From €4,500 pp",
            "departure": "Any date",
            "duration": { "nights": 12, "days": 13 },
            "route": ["Cochin", "Panchalimedu", "Kumarakom"],
            "images": {
                "card": "/Assets/iternities/Rejuvenate & Restore /Cochin.jpg",
                "hero": "/Assets/iternities/Rejuvenate & Restore /Cochin.jpg"
            },
            "destinations": [
                {
                    "name": "Cochin",
                    "image": "/Assets/iternities/Rejuvenate & Restore /Cochin.jpg"
                },
                {
                    "name": "Panchalimedu",
                    "image": "/Assets/iternities/Rejuvenate & Restore /Prakriti Shakti.jpg"
                },
                {
                    "name": "Kumarakom",
                    "image": "/Assets/iternities/Rejuvenate & Restore /Kumarakom.jpg"
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
            "region": "South India · Kerala",
            "type": "Wellness",
            "summary": "Experience the ancient martial art of Kalaripayattu and the calming backwaters.",
            "price": "From €3,750 pp",
            "departure": "Any date",
            "duration": { "nights": 12, "days": 13 },
            "route": ["Cochin", "Kumarakom", "Trivandrum"],
            "images": {
                "card": "/Assets/iternities/Strength & Serenity /Cochin.jpg",
                "hero": "/Assets/iternities/Strength & Serenity /Cochin.jpg"
            },
            "destinations": [
                {
                    "name": "Cochin",
                    "image": "/Assets/iternities/Strength & Serenity /Cochin.jpg"
                },
                {
                    "name": "Kumarakom",
                    "image": "/Assets/iternities/Strength & Serenity /Kumarakom.jpg"
                },
                {
                    "name": "Trivandrum",
                    "image": "/Assets/iternities/Strength & Serenity /Trivandrum.jpg"
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
        }
    ]

    import json
    
    tours_str = ""
    for t in wellness_tours:
        t_str = json.dumps(t, indent=4).replace('    ', '  ')
        t_str = "  " + t_str.replace('\n', '\n  ') + ",\n"
        tours_str += t_str

    if content.endswith('];\n'):
        content = content[:-3] + tours_str + '];\n'
    elif content.endswith('];'):
        content = content[:-2] + tours_str + '];\n'
    
    with open('data/tours.ts', 'w') as f:
        f.write(content)

process()
