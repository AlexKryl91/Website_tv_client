import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://website-tv-client.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
      alternates: {
        languages: {
          ru: 'https://website-tv-client.vercel.app/ru',
          en: 'https://website-tv-client.vercel.app/en',
        },
      },
    },
    {
      url: 'https://website-tv-client.vercel.app/solutions',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
      alternates: {
        languages: {
          ru: 'https://website-tv-client.vercel.app/ru/solutions',
          en: 'https://website-tv-client.vercel.app/en/solutions',
        },
      },
    },
    {
      url: 'https://website-tv-client.vercel.app/products',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
      alternates: {
        languages: {
          ru: 'https://website-tv-client.vercel.app/ru/products',
          en: 'https://website-tv-client.vercel.app/en/products',
        },
      },
    },
    {
      url: 'https://website-tv-client.vercel.app/about',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
      alternates: {
        languages: {
          ru: 'https://website-tv-client.vercel.app/ru/about',
          en: 'https://website-tv-client.vercel.app/en/about',
        },
      },
    },
    {
      url: 'https://website-tv-client.vercel.app/implementations',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
      alternates: {
        languages: {
          ru: 'https://website-tv-client.vercel.app/ru/implementations',
          en: 'https://website-tv-client.vercel.app/en/implementations',
        },
      },
    },
    {
      url: 'https://website-tv-client.vercel.app/publications',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
      alternates: {
        languages: {
          ru: 'https://website-tv-client.vercel.app/ru/publications',
          en: 'https://website-tv-client.vercel.app/en/publications',
        },
      },
    },
    {
      url: 'https://website-tv-client.vercel.app/contacts',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
      alternates: {
        languages: {
          ru: 'https://website-tv-client.vercel.app/ru/contacts',
          en: 'https://website-tv-client.vercel.app/en/contacts',
        },
      },
    },
    {
      url: 'https://website-tv-client.vercel.app/career',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
      alternates: {
        languages: {
          ru: 'https://website-tv-client.vercel.app/ru/career',
          en: 'https://website-tv-client.vercel.app/en/career',
        },
      },
    },
  ];
}
