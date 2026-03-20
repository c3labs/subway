// set the website url to a variable we can reference in the sitemap
const website = 'https://radsportwagner.com';

export async function GET() {
	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="http://www.w3.org/1999/xhtml"
			xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
		>
            <url>
                <loc>${website}</loc>
            </url>
            <url>
                <loc>${website}/fahrraeder</loc>
            </url>
            <url>
                <loc>${website}/projectone</loc>
            </url>
            <url>
                <loc>${website}/leasing</loc>
            </url>
            <url>
                <loc>${website}/workbench</loc>
            </url>
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}