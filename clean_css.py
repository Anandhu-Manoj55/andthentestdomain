import re

def clean(filename):
    try:
        with open(filename, 'r') as f:
            css = f.read()
            
        # Remove base styles block roughly
        css = re.sub(r':root\s*\{.*?\}', '', css, flags=re.DOTALL)
        css = re.sub(r'\*,\s*\*::before,\s*\*::after\s*\{.*?\}', '', css, flags=re.DOTALL)
        css = re.sub(r'html\s*\{.*?\}', '', css, flags=re.DOTALL)
        css = re.sub(r'body\s*\{.*?\}', '', css, flags=re.DOTALL)
        css = re.sub(r'^a\s*\{.*?\}', '', css, flags=re.MULTILINE)
        
        # also remove nav and footer styles, since we use the Next.js global ones
        css = re.sub(r'/\*\s*── NAV.*?/\*\s*── PAGE HEADER', '/* ── PAGE HEADER', css, flags=re.DOTALL)
        css = re.sub(r'/\*\s*── FOOTER.*', '', css, flags=re.DOTALL)

        with open(filename, 'w') as f:
            f.write(css)
    except Exception as e:
        pass

clean('app/privacy-policy/PrivacyPolicy.css')
clean('app/testimonials/Testimonials.module.css')
