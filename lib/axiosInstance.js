// lib/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.API_URL,
     headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    });

export default axiosInstance;
