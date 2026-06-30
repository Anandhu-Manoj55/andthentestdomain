import re

with open("design/BlogMain.html", "r") as f:
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
    jsx = re.sub(r'style="(.*?)"', r'', jsx) # strip inline styles for simplicity, or we can leave them. Let's strip them, but wait, some inline styles like background-image are needed.
    
    # We will just write it to a temp file, then I will edit it.
    with open("app/blogs/page_raw.tsx", "w") as f:
        f.write(jsx)
