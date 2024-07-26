/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "https://apis.vaidikanushthanam.in/apis",
  },
  headers: {
    'Client-Service': 'frontend-client',
    'Auth-Key': 'sohanveer152@gmail.com-1790',
  }
};

export default nextConfig;

