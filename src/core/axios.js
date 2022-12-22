import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'http://3.35.218.111',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

authInstance.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem('id');
  config.headers['Authorization'] = `${token}`;
  return config;
});


export const instance = axios.create({
  baseURL: 'http://3.35.218.111',
});
