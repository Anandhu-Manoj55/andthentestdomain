import re
import os

with open("design/BlogsSubpage.html", "r") as f:
    content = f.read()

# Extract from <body> to </body>
match = re.search(r'<body>(.*?)</body>', content, re.DOTALL)
if match:
    jsx = match.group(1)
    # Replace class= with className=
    jsx = jsx.replace('class="', 'className="')
    # Close tags
    jsx = re.sub(r'<br>', '<br />', jsx)
    jsx = re.sub(r'<hr>', '<hr />', jsx)
    jsx = re.sub(r'<img(.*?)(?<!/)>', r'<img\1 />', jsx)
    
    # Simple replaces for JSX compatibility
    jsx = re.sub(r'style="(.*?)"', r'', jsx)
    jsx = re.sub(r'onclick="(.*?)"', r'', jsx)

    # Output to raw file
    os.makedirs("app/blogs/[slug]", exist_ok=True)
    with open("app/blogs/[slug]/page_raw.tsx", "w") as f:
        f.write(jsx)
