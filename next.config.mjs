/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "https://apis.vaidikanushthanam.in/apis",
    key_id: 'rzp_test_npfutZLyZxi54o',
    key_secret: 'pKVdKeyTmDxlSl1OEqfAVi4u',
  },
   eslint: {
    ignoreDuringBuilds: true,
  },

  headers: {
    'Client-Service': 'frontend-client',
    'Auth-Key': 'sohanveer152@gmail.com-1790',
  }
};

export default nextConfig;

