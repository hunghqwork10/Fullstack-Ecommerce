import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import RootLayout from './components/layout/RootLayout';
import Category from './pages/Category';
import Promotion from './pages/Promotion';
import './App.css'

// Định nghĩa cấu trúc định tuyến cho toàn dự án
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // Bọc bên ngoài để luôn hiển thị thanh Menu
    children: [
      {
        path: '/', // Khi đường dẫn là cụm "/"
        element: <HomePage /> // Đổ trang chủ vào thẻ <Outlet />
      },
      {
        path: '/category/:type', // Định tuyến động: :type đại diện cho dien-thoai, laptop, phu-kien...
        element: <Category /> // Đổ trang danh mục tương ứng vào thẻ <Outlet />
      },
      {
        path: '/khuyen-mai', // Khi đường dẫn là "/khuyen-mai"
        element: <Promotion /> // Đổ trang khuyến mãi vào thẻ <Outlet />
      }
    ]
  }
]);

export default function App() {
  // Trả bộ định tuyến vừa thiết lập về cho toàn bộ ứng dụng chạy ngầm
  return <RouterProvider router={router} />;
}

