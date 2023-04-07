// pages/server-sitemap.xml/index.tsx
import { getServerSideSitemapLegacy } from 'next-sitemap'
import { GetServerSideProps } from 'next'

// https://medium.com/frontendweb/how-to-add-a-sitemap-for-server-side-rendering-ssr-in-the-next-js-app-7d972e3ee685

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://pointsyncc.com'
  const fields = [
    {
      loc: `${baseUrl}/blog/1`, // Absolute url
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
    {
      loc: `${baseUrl}/blog/2`, // Absolute url
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
  ]

  return getServerSideSitemapLegacy(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() {}