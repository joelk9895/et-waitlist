import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const isProduction = process.env.NODE_ENV === 'production';

    return {
        rules: [
            {
                userAgent: '*',
                allow: isProduction ? '/' : undefined,
                disallow: isProduction ? undefined : '/',
            },
        ],
        sitemap: `https://etherealtechno.com/`,
    };
}
