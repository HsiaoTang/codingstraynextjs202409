const withNextIntl = require('next-intl/plugin');

const nextIntlPlugin = withNextIntl('./i18nConfig/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextIntlPlugin(nextConfig);