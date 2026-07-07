import re
import json

def process():
    with open('data/tours.ts', 'r') as f:
        content = f.read()

    # We will remove itineraryImages completely.
    content = re.sub(r'export const itineraryImages.*?};\n\nexport const tours: Tour\[\] = \[', 'export const tours: Tour[] = [', content, flags=re.DOTALL)

    # We need to inject images and destinations to each of the 15 tours.
    # The image map based on IDs
    image_map = {
        'land-of-kings': {'card': '/Assets/iternities/Land of Kings /Banner Image - Land of Kings.webp', 'hero': '/Assets/iternities/Land of Kings /Banner Image - Land of Kings.webp'},
        'timeless-treasures': {'card': '/Assets/iternities/Timeless Treasures /Banner Image - Timeless Treasures.webp', 'hero': '/Assets/iternities/Timeless Treasures /Banner Image - Timeless Treasures.webp'},
        'wild-encounters': {'card': '/Assets/iternities/Wild Encounters/Banner Image - Wild Encounters.webp', 'hero': '/Assets/iternities/Wild Encounters/Banner Image - Wild Encounters.webp'},
        'gods-own-country': {'card': '/Assets/iternities/God_s own country /Banner Image - God_s Own Country.webp', 'hero': '/Assets/iternities/God_s own country /Banner Image - God_s Own Country.webp'},
        'tete-a-tete-with-gods': {'card': '/Assets/iternities/Tete a Tete with Gods /Banner Image - Tete a Tete with Gods.jpg', 'hero': '/Assets/iternities/Tete a Tete with Gods /Banner Image - Tete a Tete with Gods.jpg'},
        'awakening-of-an-empire': {'card': '/Assets/iternities/Awakening of an Empire /Banner Image - Awakening of an Empire.webp', 'hero': '/Assets/iternities/Awakening of an Empire /Banner Image - Awakening of an Empire.webp'},
        'temple-trail': {'card': '/Assets/iternities/Temple Trail /Banner Image - Temple Trail.jpg', 'hero': '/Assets/iternities/Temple Trail /Banner Image - Temple Trail.jpg'},
        'by-the-beach': {'card': '/Assets/iternities/By the Beach /Banner image - By the Beach.webp', 'hero': '/Assets/iternities/By the Beach /Banner image - By the Beach.webp'},
        'sun-heritage-and-splendor': {'card': '/Assets/iternities/Sun, Heritage and Splendor /Banner Image - Sun, Heritage and Splendor.jpg', 'hero': '/Assets/iternities/Sun, Heritage and Splendor /Banner Image - Sun, Heritage and Splendor.jpg'},
        'bhutan': {'card': '/Assets/home/India.jpg', 'hero': '/Assets/home/India.jpg'},
        'nepal': {'card': '/Assets/home/India.jpg', 'hero': '/Assets/home/India.jpg'},
        'sri-lanka': {'card': '/Assets/home/India.jpg', 'hero': '/Assets/home/India.jpg'},
        'bhutan-and-india': {'card': '/Assets/home/India.jpg', 'hero': '/Assets/home/India.jpg'},
        'nepal-and-india': {'card': '/Assets/home/India.jpg', 'hero': '/Assets/home/India.jpg'},
        'nepal-and-bhutan': {'card': '/Assets/home/India.jpg', 'hero': '/Assets/home/India.jpg'},
    }

    # Destinations map for the existing 15 tours
    dest_map = {
        'land-of-kings': [
            {'name': 'Delhi', 'image': '/Assets/iternities/Land of Kings /Delhi.jpg'},
            {'name': 'Agra', 'image': '/Assets/iternities/Land of Kings /Agra.jpg'},
            {'name': 'Jaipur', 'image': '/Assets/iternities/Land of Kings /Jaipur.jpg'},
            {'name': 'Jodhpur', 'image': '/Assets/iternities/Land of Kings /jodhpur.jpg'},
            {'name': 'Udaipur', 'image': '/Assets/iternities/Land of Kings /Udaipur.jpg'},
            {'name': 'Mumbai', 'image': '/Assets/iternities/Land of Kings /Mumbai.jpg'}
        ],
        'timeless-treasures': [
            {'name': 'Delhi', 'image': '/Assets/iternities/Timeless Treasures /Delhi.jpg'},
            {'name': 'Agra', 'image': '/Assets/iternities/Timeless Treasures /Agra.jpg'},
            {'name': 'Varanasi', 'image': '/Assets/iternities/Timeless Treasures /Varanasi.jpg'}
        ],
        'wild-encounters': [
            {'name': 'Mumbai', 'image': '/Assets/iternities/Wild Encounters/Mumbai.jpg'},
            {'name': 'Bandhavgarh', 'image': '/Assets/iternities/Wild Encounters/Bandhavgarh.webp'},
            {'name': 'Kanha', 'image': '/Assets/iternities/Wild Encounters/Kanha-National-Park.webp'},
            {'name': 'Pench', 'image': '/Assets/iternities/Wild Encounters/pench-national-park.webp'},
            {'name': 'Tadoba', 'image': '/Assets/iternities/Wild Encounters/Tadoba national park.webp'},
            {'name': 'Delhi', 'image': '/Assets/iternities/Wild Encounters/Delhi.jpg'},
            {'name': 'Agra', 'image': '/Assets/iternities/Wild Encounters/Taj-Mahal-Agra-India.webp'}
        ],
        'gods-own-country': [
            {'name': 'Cochin', 'image': '/Assets/iternities/God_s own country /Cochin.jpg'},
            {'name': 'Munnar', 'image': '/Assets/iternities/God_s own country /Munnar.webp'},
            {'name': 'Thekkady', 'image': '/Assets/iternities/God_s own country /Thekkady.jpg'},
            {'name': 'Kumarakom', 'image': '/Assets/iternities/God_s own country /Kumarakom.jpg'},
            {'name': 'Kovalam', 'image': '/Assets/iternities/God_s own country /Kovalam.jpg'}
        ],
        'tete-a-tete-with-gods': [
            {'name': 'Bengaluru', 'image': '/Assets/iternities/Tete a Tete with Gods /Bengaluru.jpg'},
            {'name': 'Mysore', 'image': '/Assets/iternities/Tete a Tete with Gods /Mysuru.jpg'},
            {'name': 'Coorg', 'image': '/Assets/iternities/Tete a Tete with Gods /Coorg.jpg'},
            {'name': 'Bekal', 'image': '/Assets/iternities/Tete a Tete with Gods /Bekal.jpg'}
        ],
        'awakening-of-an-empire': [
            {'name': 'Bengaluru', 'image': '/Assets/iternities/Awakening of an Empire /Bengaluru.jpg'},
            {'name': 'Hampi', 'image': '/Assets/iternities/Awakening of an Empire /Hampi.jpg'},
            {'name': 'Mysore', 'image': '/Assets/iternities/Awakening of an Empire /Mysuru.jpg'},
            {'name': 'Coorg', 'image': '/Assets/iternities/Awakening of an Empire /Coorg.jpg'}
        ],
        'temple-trail': [
            {'name': 'Mahabalipuram', 'image': '/Assets/iternities/Temple Trail /Mahabalipuram.jpg'},
            {'name': 'Pondicherry', 'image': '/Assets/iternities/Temple Trail /Pondicherry.jpg'},
            {'name': 'Kumbakonam', 'image': '/Assets/iternities/Temple Trail /Kumbakonam.jpg'},
            {'name': 'Madurai', 'image': '/Assets/iternities/Temple Trail /Madurai.jpg'},
            {'name': 'Thekkady', 'image': '/Assets/iternities/Temple Trail /Thekkady.jpg'},
            {'name': 'Marari', 'image': '/Assets/iternities/Temple Trail /Marari.jpg'}
        ],
        'by-the-beach': [
            {'name': 'Goa', 'image': '/Assets/iternities/By the Beach /Goa.jpg'},
            {'name': 'Gokarna', 'image': '/Assets/iternities/By the Beach /Gokarna.jpg'},
            {'name': 'Mangalore', 'image': '/Assets/iternities/By the Beach /Mangalore.jpg'},
            {'name': 'Bekal', 'image': '/Assets/iternities/By the Beach /Bekal.webp'}
        ],
        'sun-heritage-and-splendor': [
            {'name': 'Mumbai', 'image': '/Assets/iternities/Sun, Heritage and Splendor /Mumbai.jpg'},
            {'name': 'Bhubaneswar', 'image': '/Assets/iternities/Sun, Heritage and Splendor /Bhubaneswar.jpg'},
            {'name': 'Chennai', 'image': '/Assets/iternities/Sun, Heritage and Splendor /Chennai.jpg'}
        ],
        'bhutan': [{'name': 'Paro', 'image': '/Assets/home/India.jpg'}, {'name': 'Thimphu', 'image': '/Assets/home/India.jpg'}, {'name': 'Punakha', 'image': '/Assets/home/India.jpg'}, {'name': 'Phobjikha', 'image': '/Assets/home/India.jpg'}, {'name': 'Bumthang', 'image': '/Assets/home/India.jpg'}],
        'nepal': [{'name': 'Kathmandu', 'image': '/Assets/home/India.jpg'}, {'name': 'Pokhara', 'image': '/Assets/home/India.jpg'}, {'name': 'Chitwan', 'image': '/Assets/home/India.jpg'}],
        'sri-lanka': [{'name': 'Negombo', 'image': '/Assets/home/India.jpg'}, {'name': 'Sigiriya', 'image': '/Assets/home/India.jpg'}, {'name': 'Kandy', 'image': '/Assets/home/India.jpg'}, {'name': 'Hatton', 'image': '/Assets/home/India.jpg'}, {'name': 'Yala', 'image': '/Assets/home/India.jpg'}, {'name': 'Weligama', 'image': '/Assets/home/India.jpg'}],
        'bhutan-and-india': [{'name': 'Delhi', 'image': '/Assets/home/India.jpg'}, {'name': 'Paro', 'image': '/Assets/home/India.jpg'}, {'name': 'Thimphu', 'image': '/Assets/home/India.jpg'}, {'name': 'Punakha', 'image': '/Assets/home/India.jpg'}, {'name': 'Phobjikha', 'image': '/Assets/home/India.jpg'}, {'name': 'Bumthang', 'image': '/Assets/home/India.jpg'}, {'name': 'Agra', 'image': '/Assets/home/India.jpg'}],
        'nepal-and-india': [{'name': 'Delhi', 'image': '/Assets/home/India.jpg'}, {'name': 'Kathmandu', 'image': '/Assets/home/India.jpg'}, {'name': 'Pokhara', 'image': '/Assets/home/India.jpg'}, {'name': 'Chitwan', 'image': '/Assets/home/India.jpg'}, {'name': 'Agra', 'image': '/Assets/home/India.jpg'}, {'name': 'Jaipur', 'image': '/Assets/home/India.jpg'}],
        'nepal-and-bhutan': [{'name': 'Kathmandu', 'image': '/Assets/home/India.jpg'}, {'name': 'Pokhara', 'image': '/Assets/home/India.jpg'}, {'name': 'Chitwan', 'image': '/Assets/home/India.jpg'}, {'name': 'Paro', 'image': '/Assets/home/India.jpg'}, {'name': 'Thimphu', 'image': '/Assets/home/India.jpg'}, {'name': 'Punakha', 'image': '/Assets/home/India.jpg'}],
    }

    # Regex to find each tour object in the array
    # We will match from `  {\n    id: ` to the ending `  },`
    
    tour_blocks = []
    
    def replace_tour(m):
        tour_text = m.group(0)
        slug_match = re.search(r'slug:\s*"([^"]+)"', tour_text)
        if slug_match:
            slug = slug_match.group(1)
            # Find the position of `route: [`
            route_match = re.search(r'\s+route:\s*\[.*?\]\,', tour_text, re.DOTALL)
            if route_match:
                end_route_idx = route_match.end()
                
                # Format the images and destinations
                imgs = image_map.get(slug, {'card': '', 'hero': ''})
                dests = dest_map.get(slug, [])
                
                # Ensure destinations only has unique names
                unique_dests = []
                seen = set()
                for d in dests:
                    if d['name'] not in seen:
                        unique_dests.append(d)
                        seen.add(d['name'])
                
                addition = f"\n    images: {json.dumps(imgs)},\n    destinations: {json.dumps(unique_dests, indent=4).replace('    ', '      ').replace(']','    ]')},"
                
                tour_text = tour_text[:end_route_idx] + addition + tour_text[end_route_idx:]
        return tour_text

    content = re.sub(r'  \{\n    id: .*?\n  \},', replace_tour, content, flags=re.DOTALL)
    
    with open('data/tours.ts', 'w') as f:
        f.write(content)

process()
