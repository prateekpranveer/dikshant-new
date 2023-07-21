/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['firebasestorage.googleapis.com'],
      },
      async headers() {
        return [
          {
            source: '/image/:slug', // Adjust the route pattern to match your image URL
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=60', // Set the cache duration to 1 hour (3600 seconds)
              },
            ],
          },
        ];
      },
}

module.exports = nextConfig
