import type { MetadataRoute } from 'next';
import { airsTypes } from './types/airs';

const baseUrl = 'https://ai-career-type.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages = [
        '',
        '/about',
        '/contact',
        '/privacy',
        '/diagnosis',
        '/types',
        '/articles/career-strategy-2026',
    ].map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
    }));

    const typePages = airsTypes.map((type) => ({
        url: `${baseUrl}/types/${type.code}`,
        lastModified: new Date(),
    }));

    return [...staticPages, ...typePages];
}
