import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        host: 'https://cheailong.dev',
        sitemap: 'https://cheailong.dev/sitemap.xml',
    }
}
