// import webpackClassNames from 'config/webpackClassNames';
import webpackSVGR from 'config/webpackSVGR';
import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

// const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  webpack(config: Configuration) {
    webpackSVGR(config);
    // webpackClassNames(config);

    return config;
  },
};

export default nextConfig;
