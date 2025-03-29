/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/expenses",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
