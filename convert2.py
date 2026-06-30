import re

with open("app/privacy-policy/page.tsx", "r") as f:
    content = f.read()

# Replace HTML comments
content = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', content, flags=re.DOTALL)

# Replace class=" with className="
content = content.replace('class="', 'className="')
content = content.replace('class=\'', "className='")

# Write it back
with open("app/privacy-policy/page.tsx", "w") as f:
    f.write(content)

print("Fixed comments and class")
