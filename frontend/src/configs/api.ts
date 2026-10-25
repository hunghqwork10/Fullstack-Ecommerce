import axios from 'axios';

const api = axios.create({
  // Tự động kết nối tới cổng 3000 (hoặc cổng cấu hình trong .env của bạn)
  baseURL: 'http://localhost:3000/api/v1', 
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;
