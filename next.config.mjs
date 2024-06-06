/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "wordpress-1276276-4613046.cloudwaysapps.com"
            }
        ]
    }
};

export default nextConfig;
