import os
import re

URL_MAP = {
    'page.tsx': {'en': '"/en"', 'de': '"/"'},
    'portfolio/page.tsx': {'en': '"/en/portfolio"', 'de': '"/portfolio"'},
    'portfolio/[slug]/page.tsx': {'en': '`/en/portfolio/${slug}`', 'de': '`/portfolio/${slug}`'},
    'contact/page.tsx': {'en': '"/en/contact"', 'de': '"/kontakt"'},
    'pricing/page.tsx': {'en': '"/en/pricing"', 'de': '"/preise"'},
    'about/page.tsx': {'en': '"/en/about"', 'de': '"/ueber-mich"'},
    'event-photographer-hamburg/page.tsx': {'en': '"/en/event-photographer-hamburg"', 'de': '"/eventfotograf-hamburg"'},
    'conference-photographer-hamburg/page.tsx': {'en': '"/en/conference-photographer-hamburg"', 'de': '"/konferenzfotografie-hamburg"'},
    'trade-show-photographer-hamburg/page.tsx': {'en': '"/en/trade-show-photographer-hamburg"', 'de': '"/messefotograf-hamburg"'},
    'corporate-event-photographer-hamburg/page.tsx': {'en': '"/en/corporate-event-photographer-hamburg"', 'de': '"/corporate-event-fotograf-hamburg"'},
    'impressum/page.tsx': {'en': '"/en/impressum"', 'de': '"/impressum"'},
    'datenschutz/page.tsx': {'en': '"/en/datenschutz"', 'de': '"/datenschutz"'},
    'danke/page.tsx': {'en': '"/en/danke"', 'de': '"/danke"'},
    'video-support/page.tsx': {'en': '"/en/video-support"', 'de': '"/video-support"'},
    'insights/page.tsx': {'en': '"/en/insights"', 'de': '"/insights"'},
    'insights/[slug]/page.tsx': {'en': '`/en/insights/${slug}`', 'de': '`/insights/${slug}`'},
    'insights/how-much-does-an-event-photographer-cost-hamburg/page.tsx': {
        'en': '"/en/insights/how-much-does-an-event-photographer-cost-hamburg"',
        'de': '"/insights/how-much-does-an-event-photographer-cost-hamburg"'
    }
}

base_dir = '/Users/lizaholiarchuk/Desktop/lizaholiarchuk/site/src/app/en'

for rel_path, urls in URL_MAP.items():
    file_path = os.path.join(base_dir, rel_path)
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. canonical
    def canonical_repl(m):
        return m.group(1) + urls["en"]
    content = re.sub(r'(canonical:\s*)(["\'`].*?["\'`])', canonical_repl, content)
    
    # 2. languages
    lang_repl = f"languages: {{\n        en: {urls['en']},\n        de: {urls['de']},\n        'x-default': {urls['de']},\n      }}"
    if 'languages:' in content:
        content = re.sub(r'languages:\s*\{[^}]+\}', lang_repl, content)
    else:
        def insert_lang(m):
            return m.group(0) + f",\n      {lang_repl}"
        content = re.sub(r'(canonical:\s*["\'`].*?["\'`])', insert_lang, content)

    # 3-5. openGraph
    if 'openGraph:' in content:
        # Match URL not inside images array
        # Just find the first `url:` that comes right after spaces (to avoid images: [{ url: ... }])
        def url_repl(m):
            return m.group(1) + urls["en"]
        content = re.sub(r'(openGraph:\s*\{[^\}]*?\n\s*url:\s*)(["\'`].*?["\'`])', url_repl, content)
        
        if 'locale:' not in content:
            content = re.sub(r'(openGraph:\s*\{)', r'\1\n      locale: "en_US",', content)
        else:
            content = re.sub(r'locale:\s*(["\'`].*?["\'`])', 'locale: "en_US"', content)
            
        if 'alternateLocale:' not in content:
            content = re.sub(r'(locale:\s*"en_US",?)', r'\1\n      alternateLocale: ["de_DE"],', content)
        else:
            content = re.sub(r'alternateLocale:\s*\[.*?\]', 'alternateLocale: ["de_DE"]', content)
    else:
        og_block = f"""openGraph: {{
      url: {urls['en']},
      locale: "en_US",
      alternateLocale: ["de_DE"],
    }},"""
        content = re.sub(r'(alternates:\s*\{)', rf'{og_block}\n    \1', content)

    # 6. Internal links (href)
    content = re.sub(r'href="/"', r'href="/en"', content)
    
    def href_repl(m):
        path = m.group(1)
        if path.startswith('en') or path.startswith('images') or path.startswith('http'):
            return f'href="/{path}"'
        return f'href="/en/{path}"'
    content = re.sub(r'href="/([^"]+)"', href_repl, content)

    content = re.sub(r'href=\{`/\}`', r'href={`/en`}', content)
    def href_repl_tpl(m):
        path = m.group(1)
        if path.startswith('en') or path.startswith('images') or path.startswith('http'):
            return f'href={{`/{path}`}}'
        return f'href={{`/en/{path}`}}'
    content = re.sub(r'href=\{`/([^`]+)`\}', href_repl_tpl, content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {rel_path}")
