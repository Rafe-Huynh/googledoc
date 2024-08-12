/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [{protocol: 'https', hostname:'next.config.js'}]
    }
};

export default nextConfig;
