import re
import json

with open('design/Testimonials.html', 'r') as f:
    html = f.read()

# Extract styles
style_match = re.search(r'<style>(.*?)</style>', html, re.DOTALL)
if style_match:
    with open('app/testimonials/Testimonials.module.css', 'w') as f:
        f.write(style_match.group(1).strip())

# Extract testimonials
# <article class="tc..." data-tags="...">...</article>
articles = re.findall(r'<article class="(.*?)" data-tags="(.*?)">(.*?)</article>', html, re.DOTALL)

testimonials = []
for idx, (classes, tags, content) in enumerate(articles):
    # Extract dest, type
    dest = re.search(r'<span class="tc__dest">(.*?)</span>', content).group(1)
    type_ = re.search(r'<span class="tc__type">(.*?)</span>', content).group(1)
    # text
    text = re.search(r'<p class="tc__text">(.*?)</p>', content, re.DOTALL).group(1).strip()
    # trip
    trip = re.search(r'<p class="tc__trip">(.*?)</p>', content, re.DOTALL).group(1).strip()
    # initials
    initials = re.search(r'<span class="tc__avatar-initials">(.*?)</span>', content).group(1)
    # name
    name = re.search(r'<span class="tc__name">(.*?)</span>', content).group(1)
    # origin
    origin = re.search(r'<span class="tc__origin">(.*?)</span>', content).group(1)
    
    # stars (just count them)
    stars = len(re.findall(r'<span class="tc__star">', content))
    
    testimonials.append({
        "id": f"testi-{idx}",
        "classes": classes.replace('tc ', '').replace('tc', '').strip(),
        "tags": tags.split(),
        "dest": dest,
        "type": type_,
        "text": text,
        "trip": trip,
        "initials": initials,
        "name": name,
        "origin": origin,
        "stars": stars
    })

with open('data/testimonials-new.json', 'w') as f:
    json.dump(testimonials, f, indent=2)

print("Extracted", len(testimonials), "testimonials")
