import re

with open("design/PrivacyPolicy.html", "r") as f:
    content = f.read()

# Extract style
style_match = re.search(r'<style>(.*?)</style>', content, re.DOTALL)
if style_match:
    style_content = style_match.group(1).strip()
    with open("app/privacy-policy/PrivacyPolicy.module.css", "w") as f:
        f.write(style_content)

# Extract body parts: from <header> or <div class="page-header"> to before <footer>
main_match = re.search(r'(<div class="page-header">.*?</div><!-- /layout -->)', content, re.DOTALL)

if main_match:
    jsx = main_match.group(1)
    jsx = jsx.replace('class="', 'className={styles.')
    # Need to handle classes with spaces, wait this is complex.
    # Better to just use global css or a normal css import, and string replace class=" with className="
    jsx = main_match.group(1)
    jsx = jsx.replace('class="', 'className="')
    # Close unclosed tags if any, like <br>, <hr>, <img>, <input>
    jsx = re.sub(r'<br>', '<br />', jsx)
    jsx = re.sub(r'<hr>', '<hr />', jsx)
    jsx = re.sub(r'<img(.*?)(?<!/)>', r'<img\1 />', jsx)

    # Replace style string
    jsx = re.sub(r'style="(.*?)"', r'', jsx) # remove inline styles if any, or convert

    # Create Next.js page
    page_content = f"""import './PrivacyPolicy.css';

export default function PrivacyPolicyPage() {{
  return (
    <>
      {jsx}
    </>
  );
}}
"""
    with open("app/privacy-policy/page.tsx", "w") as f:
        f.write(page_content)
    
    # Write CSS as normal CSS
    if style_match:
        with open("app/privacy-policy/PrivacyPolicy.css", "w") as f:
            f.write(style_content)

    print("Success")
else:
    print("Failed to match")
