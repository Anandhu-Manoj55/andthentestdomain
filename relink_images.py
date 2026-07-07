import re
import json
import os

ASSETS_DIR = 'public/Assets/iternities/'
FALLBACK_IMG = '/Assets/home/India.jpg'

folder_map = {
    'land-of-kings': 'Land of Kings ',
    'timeless-treasures': 'Timeless Treasures ',
    'wild-encounters': 'Wild Encounters',
    'gods-own-country-unveiled': 'God_s own country ',
    'tete-a-tete-with-gods': 'Tete a Tete with Gods ',
    'awakening-of-an-empire': 'Awakening of an Empire ',
    'temple-trail': 'Temple Trail ',
    'by-the-beach': 'By the Beach ',
    'sun-heritage-and-splendor': 'Sun, Heritage and Splendor ',
    'ayurvedic-reset': 'Ayurvedic Reset',
    'balance-bliss': 'Balance & Bliss ',
    'path-to-wellness': 'Path to wellness',
    'rejuvenate-restore': 'Rejuvenate & Restore ',
    'strength-serenity': 'Strength & Serenity ',
    'bhutan': None,
    'nepal': None,
    'sri-lanka': None,
    'bhutan-and-india': None,
    'nepal-and-india': None,
    'nepal-and-bhutan': None,
}

def get_files_in_dir(path):
    try:
        return os.listdir(path)
    except FileNotFoundError:
        return []

def find_banner_image(files):
    for f in files:
        if 'banner' in f.lower():
            return f
    return None

def find_dest_image(dest_name, files):
    for f in files:
        # Ignore things that look like banner or hotel names unless it matches dest
        if dest_name.lower() in f.lower():
            return f
    return None

def process():
    with open('data/tours.ts', 'r') as f:
        content = f.read()

    def replace_tour(m):
        tour_text = m.group(0)
        
        id_match = re.search(r'\n\s*id:\s*"([^"]+)",', tour_text)
        if not id_match:
            # Fallback to id matching
            id_match = re.search(r'\n\s*"id":\s*"([^"]+)",', tour_text)
            
        if not id_match:
            return tour_text
            
        tour_id = id_match.group(1)
        
        # Get the route to know destinations
        route = []
        route_match = re.search(r'\n\s*"?route"?:\s*\[(.*?)\]', tour_text, re.DOTALL)
        if route_match:
            # extract string literals
            route = re.findall(r'"([^"]+)"', route_match.group(1))

        folder_name = folder_map.get(tour_id)
        banner_path = FALLBACK_IMG
        
        destinations_list = []
        
        if folder_name:
            folder_path = os.path.join(ASSETS_DIR, folder_name)
            files = get_files_in_dir(folder_path)
            
            # Filter only image files
            files = [f for f in files if f.endswith(('.jpg', '.jpeg', '.png', '.webp'))]
            
            banner_file = find_banner_image(files)
            if banner_file:
                banner_path = f"/Assets/iternities/{folder_name}/{banner_file}"
            elif files:
                banner_path = f"/Assets/iternities/{folder_name}/{files[0]}"
                
            seen_dests = set()
            for r in route:
                if r not in seen_dests:
                    dest_file = find_dest_image(r, files)
                    d_img = f"/Assets/iternities/{folder_name}/{dest_file}" if dest_file else FALLBACK_IMG
                    destinations_list.append({"name": r, "image": d_img})
                    seen_dests.add(r)
        else:
            seen_dests = set()
            for r in route:
                if r not in seen_dests:
                    destinations_list.append({"name": r, "image": FALLBACK_IMG})
                    seen_dests.add(r)

        images_obj = {"card": banner_path, "hero": banner_path}

        # The current text has:
        # images: {"card": "", "hero": ""},
        # destinations: [    ],
        # OR
        # "images": { ... },
        # "destinations": [ ... ]
        
        # We replace them
        images_str = json.dumps(images_obj)
        dest_str = json.dumps(destinations_list, indent=4).replace('    ', '  ')
        
        # Replace images
        tour_text = re.sub(r'\n\s*"?images"?:\s*\{[^}]*\}(,?)', f'\n    "images": {images_str}\\1', tour_text)
        
        # Replace destinations
        # It could span multiple lines
        tour_text = re.sub(r'\n\s*"?destinations"?:\s*\[.*?\](,?)', f'\n    "destinations": {dest_str}\\1', tour_text, flags=re.DOTALL)

        return tour_text

    # We match each tour block which is inside `{ ... }` at the top level of array
    # A simple regex for `{ id: ... }` blocks:
    content = re.sub(r'  \{\n\s*"?id"?:\s*"[^"]+".*?(?=\n  \},|\n  \}\n\])', replace_tour, content, flags=re.DOTALL)

    with open('data/tours.ts', 'w') as f:
        f.write(content)
        
process()
