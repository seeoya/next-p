/** @type {import('next').NextConfig} */

const API_KEY = "8ceb0242d0ba8cb3017a31b7182b8aa0";

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    async redirects() {
        return [
            {
                source: "/contact",
                destination: "/form",
                permanent: false
            },
            {
                // 모든 path 다 이동
                source: "/old-blog/:path*",
                destination: "/new-blog/:path*",
                permanent: false
            }
        ];
    },

    async rewrites() {
        return [
            {
                source: "/api/movies",
                destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
            }
        ];
    }
};

module.exports = nextConfig;
