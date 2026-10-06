#!/usr/bin/env python3
"""Convert Jekyll release collection files into Hugo news content files."""
import os, re, glob

SRC  = os.path.join(os.path.dirname(__file__), '..', '..', 'src')
DEST = os.path.join(os.path.dirname(__file__), '..', 'content', 'news')

COLLECTIONS = [
    '_classic_releases',
    '_nms_amqp_releases',
    '_nms_api_releases',
    '_nms_activemq_releases',
    '_nms_stomp_releases',
    '_news',
]

os.makedirs(DEST, exist_ok=True)

def parse_frontmatter(text):
    m = re.match(r'^---\n(.*?)\n---\n?(.*)', text, re.DOTALL)
    if not m:
        return {}, text
    fm, body = {}, m.group(2).strip()
    for line in m.group(1).splitlines():
        kv = re.match(r'^(\w[\w_]*):\s*(.*)', line)
        if kv:
            fm[kv.group(1)] = kv.group(2).strip().strip('"')
    return fm, body

converted = 0
for collection in COLLECTIONS:
    for src_path in sorted(glob.glob(os.path.join(SRC, collection, '*.md'))):
        with open(src_path) as f:
            text = f.read()
        fm, body = parse_frontmatter(text)

        title = fm.get('title', '')
        date  = fm.get('release_date', fm.get('date', ''))
        desc  = fm.get('shortDescription', '')

        if not title or not date:
            continue

        slug = os.path.splitext(os.path.basename(src_path))[0]
        dest_path = os.path.join(DEST, slug + '.md')

        if os.path.exists(dest_path):
            continue

        # Strip Jekyll liquid tags from body
        body = re.sub(r'\{\{[^}]*\}\}', '', body)
        body = re.sub(r'\{%[^%]*%\}', '', body).strip()

        with open(dest_path, 'w') as f:
            f.write(f'---\ntitle: "{title}"\ndate: {date}\n')
            if desc:
                f.write(f'description: "{desc}"\n')
            f.write('---\n')
            if body:
                f.write('\n' + body + '\n')

        converted += 1
        print(f'  {slug}')

print(f'\nDone: {converted} files written to {os.path.abspath(DEST)}')
