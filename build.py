#!/usr/bin/env python3
"""
Build the static Spanish page from index.html + js/i18n.js.

The EN/ES toggle used to swap text client-side only, which meant Google had
no Spanish URL to rank and the Spanish copy was effectively invisible. This
pre-renders /es/index.html so the Spanish content is real, crawlable HTML.

Run after editing index.html or js/i18n.js:    python build.py
"""
import json, re, os, sys, html as htmllib

ROOT = os.path.dirname(os.path.abspath(__file__))
BASE = 'https://thejohncarter-ai.github.io/jordycutz-site/'
EN_URL, ES_URL = BASE, BASE + 'es/'

EN_TITLE = 'Mobile Barber Annapolis MD | Jordy Cutz — Fades &amp; Beards'
EN_DESC  = ('Luxury mobile barber in Annapolis, MD. Precision fades, beard sculpting and '
            'hot-towel service at your home, office or the Forest Drive studio.')
ES_TITLE = 'Barbero a Domicilio en Annapolis, MD | Jordy Cutz'
ES_DESC  = ('Barbero de lujo a domicilio en Annapolis, MD. Fades de precisión, barba '
            'esculpida y toalla caliente en tu casa, oficina o en el estudio de Forest Drive.')


def spanish_strings():
    """Pull the I18N_ES object out of js/i18n.js without executing it."""
    src = open(os.path.join(ROOT, 'js', 'i18n.js'), encoding='utf-8').read()
    start = src.index('window.I18N_ES = {') + len('window.I18N_ES = ')
    depth, i = 0, start
    while i < len(src):
        if src[i] == '{': depth += 1
        elif src[i] == '}':
            depth -= 1
            if depth == 0:
                body = src[start:i + 1]; break
        i += 1
    else:
        sys.exit('could not find the end of I18N_ES')
    body = re.sub(r'^\s*//.*$', '', body, flags=re.M)          # strip comments
    body = re.sub(r',(\s*})', r'\1', body)                      # trailing commas
    pairs = re.findall(r"'((?:[^'\\]|\\.)*)'\s*:\s*'((?:[^'\\]|\\.)*)'", body)
    unesc = lambda s: s.replace("\\'", "'").replace('\\\\', '\\')
    return {unesc(k): unesc(v) for k, v in pairs}


def hreflang(canonical):
    return (f'  <link rel="canonical" href="{canonical}">\n'
            f'  <link rel="alternate" hreflang="en-US" href="{EN_URL}">\n'
            f'  <link rel="alternate" hreflang="es-US" href="{ES_URL}">\n'
            f'  <link rel="alternate" hreflang="x-default" href="{EN_URL}">')


def set_head(doc, title, desc, canonical, og_locale, og_alt, og_url):
    # Idempotent: drop any hreflang block a previous run left behind before
    # re-emitting it, otherwise repeated builds stack duplicates.
    doc = ''.join(line for line in doc.splitlines(keepends=True)
                  if 'rel="alternate" hreflang=' not in line)
    doc = re.sub(r'<title>.*?</title>', f'<title>{title}</title>', doc, count=1, flags=re.S)
    doc = re.sub(r'(<meta name="description" content=")[^"]*(">)',
                 lambda m: m.group(1) + desc + m.group(2), doc, count=1)
    doc = re.sub(r'  <link rel="canonical"[^>]*>', hreflang(canonical), doc, count=1)
    doc = re.sub(r'(<meta property="og:locale" content=")[^"]*', r'\g<1>' + og_locale, doc, count=1)
    doc = re.sub(r'(<meta property="og:locale:alternate" content=")[^"]*', r'\g<1>' + og_alt, doc, count=1)
    doc = re.sub(r'(<meta property="og:url" content=")[^"]*', r'\g<1>' + og_url, doc, count=1)
    return doc


def main():
    src = open(os.path.join(ROOT, 'index.html'), encoding='utf-8').read()
    es = spanish_strings()

    # ---------- English page: canonical + hreflang + keyword-forward title ----------
    en = set_head(src, EN_TITLE, EN_DESC, EN_URL, 'en_US', 'es_US', EN_URL)
    open(os.path.join(ROOT, 'index.html'), 'w', encoding='utf-8').write(en)

    # ---------- Spanish page ----------
    doc = en
    doc = doc.replace('<html lang="en">', '<html lang="es-US">', 1)
    doc = set_head(doc, ES_TITLE, ES_DESC, ES_URL, 'es_US', 'en_US', ES_URL)

    # substitute every translatable node with its Spanish string
    missing, count = set(), 0
    pattern = re.compile(r'<(?P<tag>[a-zA-Z0-9]+)\b[^>]*\bdata-i18n="(?P<key>[^"]+)"[^>]*>.*?</(?P=tag)>', re.S)

    def swap(m):
        nonlocal count
        key = m.group('key')
        if key not in es:
            missing.add(key)
            return m.group(0)
        whole = m.group(0)
        open_end = whole.index('>') + 1
        close_start = whole.rindex('</')
        count += 1
        return whole[:open_end] + es[key] + whole[close_start:]

    doc = pattern.sub(swap, doc)

    # language toggle hrefs, seen from inside /es/
    doc = doc.replace('href="./" data-lang="en"', 'href="../" data-lang="en"')
    doc = doc.replace('href="es/" data-lang="es"', 'href="./" data-lang="es"')

    # asset paths are relative -> step up one directory from /es/
    doc = re.sub(r'(href|src)="(assets/|css/|js/)', r'\1="../\2', doc)
    doc = doc.replace('href="#', 'href="#')  # anchors stay
    # Booksy links + widget in Spanish
    doc = doc.replace('booksy.com/en-us/', 'booksy.com/es-us/')
    # structured data: mark the language and point at the ES url
    doc = doc.replace(f'"url": "{BASE}",', f'"url": "{ES_URL}",\n      "inLanguage": "es-US",', 1)

    os.makedirs(os.path.join(ROOT, 'es'), exist_ok=True)
    open(os.path.join(ROOT, 'es', 'index.html'), 'w', encoding='utf-8').write(doc)

    # ---------- sitemap with hreflang annotations ----------
    def url_entry(loc):
        alts = ''.join(
            f'\n    <xhtml:link rel="alternate" hreflang="{hl}" href="{href}"/>'
            for hl, href in (('en-US', EN_URL), ('es-US', ES_URL), ('x-default', EN_URL)))
        return (f'  <url>\n    <loc>{loc}</loc>{alts}\n'
                f'    <lastmod>2026-09-10</lastmod>\n    <changefreq>monthly</changefreq>\n'
                f'    <priority>1.0</priority>\n  </url>')
    sitemap = ('<?xml version="1.0" encoding="UTF-8"?>\n'
               '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n'
               '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
               + url_entry(EN_URL) + '\n' + url_entry(ES_URL) + '\n</urlset>\n')
    open(os.path.join(ROOT, 'sitemap.xml'), 'w', encoding='utf-8').write(sitemap)

    print(f'es/index.html   {count} strings translated')
    if missing:
        print(f'  !! no Spanish for: {sorted(missing)}')
    print('sitemap.xml     2 urls with hreflang')
    print('index.html      title/description/hreflang updated')


if __name__ == '__main__':
    main()
