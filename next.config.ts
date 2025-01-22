import type { NextConfig } from 'next';
import type { Configuration, RuleSetRule } from 'webpack'

const nextConfig: NextConfig = {
  /* config options here */
  // i18n: {
  //   locales: ['ru', 'en'],
  //   defaultLocale: 'ru',
  // },

  webpack(config: Configuration) {
    // Grab the existing rule that handles SVG imports

    // if (config.module !== undefined && config.module.rules !== undefined) {

    const fileLoaderRule = config?.module?.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    // }

    return config;
  },
};

export default nextConfig;
