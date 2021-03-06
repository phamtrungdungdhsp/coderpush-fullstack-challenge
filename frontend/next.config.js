/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/discover',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['images.unsplash.com', 'randomuser.me', 'placeimg.com']
  }
}
