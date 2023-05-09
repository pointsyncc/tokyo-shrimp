import { writeFileSync } from "fs"
import { globby } from "globby"
import prettier from "prettier"

async function generate() {
  ;["en", "de", "hr"].forEach(async (lang) => {
    const pages = await globby([
      `.next/server/pages/${lang}/**/*.html`,
      `!.next/server/pages/${lang}/404.html`,
      `!.next/server/pages/${lang}/500.html`      
    ])

    const siteUrl = lang === "it" ? "https://example.it" : "https://example.com"

    const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${siteUrl}</loc>            
            <lastmod>${new Date().toISOString()}</lastmod>
        </url>
        ${pages
          .map((page) => {
            const route = page.replace(`.next/server/pages/${lang}`, "").replace(".html", "")

            return `<url>
                  <loc>${siteUrl}${route}</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>                  
              </url>
            `
          })
          .join("")}
    </urlset>
    `

    const formatted = prettier.format(sitemap, {
      parser: "html",
    })

    writeFileSync(`public/sitemap-${lang}.xml`, formatted)
  })
}

generate()