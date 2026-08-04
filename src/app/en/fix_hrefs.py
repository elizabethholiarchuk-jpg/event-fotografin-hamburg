import os
import re

URL_MAP = [
    'page.tsx',
    'portfolio/page.tsx',
    'portfolio/[slug]/page.tsx',
    'contact/page.tsx',
    'pricing/page.tsx',
    'about/page.tsx',
    'event-photographer-hamburg/page.tsx',
    'conference-photographer-hamburg/page.tsx',
    'trade-show-photographer-hamburg/page.tsx',
    'corporate-event-photographer-hamburg/page.tsx',
    'impressum/page.tsx',
    'datenschutz/page.tsx',
    'danke/page.tsx',
    'video-support/page.tsx',
    'insights/page.tsx',
    'insights/[slug]/page.tsx',
    'insights/how-much-does-an-event-photographer-cost-hamburg/page.tsx'
]

base_dir = '/Users/lizaholiarchuk/Desktop/lizaholiarchuk/site/src/app/en'

for rel_path in URL_MAP:
    file_path = os.path.join(base_dir, rel_path)
    if not os.path.exists(file_path):
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    def href_repl(m):
        prefix = m.group(1)
        path = m.group(2)
        if path.startswith('en') or path.startswith('images') or path.startswith('http'):
            return f'{prefix}/{path}"'
        return f'{prefix}/en/{path}"'
    
    content = re.sub(r'(href:\s*")\/([^"]+)"', href_repl, content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
