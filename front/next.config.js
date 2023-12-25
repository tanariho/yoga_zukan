/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: '/api/:path*',
//         destination: 'http://localhost:3000/api/:path*', // ここでプロキシ先を設定する
//       },
//     ];
//   },
// };
