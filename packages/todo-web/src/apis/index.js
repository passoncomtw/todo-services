import axios from 'axios';

const server = axios.create({
  baseURL: process.env.REACT_APP_DOMAIN_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const getServer = () => server;
export default server;
