/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,  // ensures /faculties/medicine/ generates index.html
}

module.exports = nextConfig
