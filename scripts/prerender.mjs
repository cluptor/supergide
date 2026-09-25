// Renders every route to static HTML so the site works without JavaScript.
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const { render, routes, SITE_URL } = await import(path.join(root, 'dist-ssr', 'entry-server.js'));

const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

for (const route of routes) {
  const html = render(route.path);
  const url = SITE_URL + (route.path === '/' ? '/' : route.path);
  const page = template
    .replace('<!--app-html-->', html)
    .replace(/<title>[^<]*<\/title>/, `<title>${escape(route.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${escape(route.description)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${escape(route.title)}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${escape(route.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${escape(route.description)}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${escape(route.description)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);

  const outFile =
    route.path === '/404'
      ? path.join(dist, '404.html')
      : route.path === '/'
        ? path.join(dist, 'index.html')
        : path.join(dist, route.path.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, page);
  if (route.path !== '/' && route.path !== '/404') {
    // Also write pricing.html so hosts that don't map /pricing -> pricing/index.html still work.
    fs.writeFileSync(path.join(dist, route.path.slice(1) + '.html'), page);
  }
  console.log('prerendered', route.path, '->', path.relative(root, outFile));
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .filter((r) => r.path !== '/404')
  .map((r) => `  <url><loc>${SITE_URL}${r.path === '/' ? '/' : r.path}</loc></url>`)
  .join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log('wrote sitemap.xml');
