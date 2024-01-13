import axios from 'axios';
const API_URL =
  Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';
export const axiosInstance = axios.create({
  baseURL: 'http://192.168.0.104:5000/api',
  headers: {
    authorization: `Bearer`,
  },
});
